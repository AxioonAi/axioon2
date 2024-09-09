"use client";
import Image from "next/image";
import { useEffect, useState } from "react";
import {
  Popover,
  PopoverArrow,
  PopoverContent,
  PopoverTrigger,
} from "@radix-ui/react-popover";
import { ChevronDown } from "lucide-react";
import { twMerge } from "tailwind-merge";
import { BaseCard } from "@/components/global/BaseCard/BaseCard";
import { BaseCardHeader } from "@/components/global/BaseCard/BaseCardHeader";
import { BaseCardFooter } from "@/components/global/BaseCard/BaseCardFooter";
import { useMentionsDataContext } from "@/context/MentionsData";
import { Skeleton } from "@/components/global/Skeleton";

interface MentionsMainInfluencersProps {
  createdAt: string;
  engagement: number;
  followers: number;
  id: string;
  lastPost: string;
  name: string;
  posts: number;
  sentiment: number;
  updatedAt: string;
  username: string;
}

export function MentionsMainInfluencers() {
  const [MentionsMainInfluencersData, setMentionsMainInfluencersData] =
    useState<MentionsMainInfluencersProps[]>([]);
  const { mentionsData, isGettingData } = useMentionsDataContext();
  const [filter, setFilter] = useState<string>("positive");

  useEffect(() => {
    if (mentionsData) {
      setMentionsMainInfluencersData(mentionsData.mentions.authors);
    }
  }, [mentionsData]);

  return (
    <BaseCard className="p-0">
      <BaseCardHeader
        title="Principais Influenciadores"
        children={
          <div className="flex items-center gap-2">
            <Popover>
              <PopoverTrigger asChild>
                <button className="flex items-center gap-2 text-xs text-zinc-500">
                  <span>Filtros</span>
                  <ChevronDown size={14} />
                </button>
              </PopoverTrigger>
              <PopoverContent className="z-[9999] flex w-40 flex-col overflow-hidden rounded-md border border-zinc-400 bg-white shadow outline-none">
                <PopoverArrow />
                <button
                  onClick={() => setFilter("positive")}
                  className={twMerge(
                    "flex w-full items-center justify-center border-y border-y-zinc-200 p-1 text-xs transition duration-100 hover:bg-darkBlueAxion/10",
                    filter === "positive" && "bg-darkBlueAxion/10",
                  )}
                >
                  Positivos
                </button>
                <button
                  onClick={() => setFilter("negative")}
                  className={twMerge(
                    "flex w-full items-center justify-center border-y border-y-zinc-200 p-1 text-xs transition duration-100 hover:bg-darkBlueAxion/10",
                    filter === "negative" && "bg-darkBlueAxion/10",
                  )}
                >
                  Negativos
                </button>
                <button
                  onClick={() => setFilter("active")}
                  className={twMerge(
                    "flex w-full items-center justify-center border-y border-y-zinc-200 p-1 text-xs transition duration-100 hover:bg-darkBlueAxion/10",
                    filter === "active" && "bg-darkBlueAxion/10",
                  )}
                >
                  Mais ativos
                </button>
                <button
                  onClick={() => setFilter("inactive")}
                  className={twMerge(
                    "flex w-full items-center justify-center border-y border-y-zinc-200 p-1 text-xs transition duration-100 hover:bg-darkBlueAxion/10",
                    filter === "active" && "bg-darkBlueAxion/10",
                  )}
                >
                  Menos ativos
                </button>
              </PopoverContent>
            </Popover>
          </div>
        }
      />
      {isGettingData ? (
        <Skeleton className="mx-auto mt-4 h-[23rem] w-11/12" />
      ) : (
        <div className="flex h-80 w-full flex-col overflow-x-scroll overflow-y-scroll p-4 lg:mb-0 lg:h-[calc(100%-5.5rem)] lg:overflow-x-auto">
          {MentionsMainInfluencersData.sort((a, b) =>
            filter === "positive"
              ? b.sentiment - a.sentiment
              : filter === "negative"
                ? a.sentiment - b.sentiment
                : filter === "active"
                  ? b.posts - a.posts
                  : filter === "inactive"
                    ? a.posts - b.posts
                    : 0,
          ).map((item, index) => (
            <div
              className="flex w-max gap-4 border-b border-b-zinc-300 p-4 text-xs lg:grid lg:grid-cols-12 lg:text-sm xl:w-full 2xl:text-base 3xl:text-lg"
              key={index}
            >
              <div className="col-span-1 flex justify-center">
                <Image
                  src="/Logos/InstagramLogo.png"
                  alt=""
                  width={200}
                  height={200}
                  className="h-10 w-10 rounded-lg"
                />
              </div>
              <div className="flex w-40 flex-col justify-center lg:col-span-2">
                <span className="truncate text-zinc-500">@{item.username}</span>
                <span className="truncate font-semibold">{item.name}</span>
              </div>
              <div className="col-span-2 flex flex-col justify-center">
                <span className="text-zinc-500">Seguidores</span>
                <span className="font-semibold">
                  {item.followers ? item.followers : "Não informado"}
                </span>
              </div>
              <div className="col-span-2 flex flex-col justify-center">
                <span className="text-zinc-500">Ultima Publicação</span>
                <span className="font-semibold">
                  {new Date(item.lastPost).toLocaleDateString("pt-BR")}
                </span>
              </div>
              <div className="col-span-2 flex flex-col justify-center">
                <span className="text-zinc-500">Engajamento Gerado</span>
                <span className="font-semibold">
                  {item.engagement
                    ? item.engagement.toFixed(1)
                    : "Não informado"}
                </span>
              </div>
              <div className="col-span-1 flex flex-col justify-center">
                <span className="text-zinc-500">Menções</span>
                <span className="font-semibold">{item.posts}</span>
              </div>
              <div className="col-span-1 flex flex-col justify-center">
                <span className="text-zinc-500">Sentimento</span>
                <span className="font-semibold">
                  {item.sentiment ? item.sentiment.toFixed(1) : "Não informado"}
                </span>
              </div>
              <div className="col-span-1 flex flex-col items-end justify-center">
                <Image
                  src={
                    item.sentiment <= 450
                      ? "/Icons/negativeSmile.svg"
                      : item.sentiment > 451 && item.sentiment < 650
                        ? "/Icons/neutralSmile.svg"
                        : "/Icons/positiveSmile.svg"
                  }
                  alt=""
                  width={200}
                  height={200}
                  className="h-8 w-8"
                />
              </div>
            </div>
          ))}
        </div>
      )}
      <BaseCardFooter text="Lista com os perfis com maior influência." />
    </BaseCard>
  );
}
