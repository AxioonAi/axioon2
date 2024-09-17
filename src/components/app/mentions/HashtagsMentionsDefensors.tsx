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

interface HashtagsMentionsDefensorsProps {
  comments: number;
  followers: number;
  id: string;
  negativeComments: number;
  neutralComments: number;
  positiveComments: number;
  sentiment: number;
  userName: string;
  socialMedia: string;
}

export function HashtagsMentionsDefensors() {
  const [instagramMentionsDefensors, setInstagramMentionsDefensors] = useState<
    HashtagsMentionsDefensorsProps[]
  >([]);
  const [tiktokMentionsDefensors, setTikTokMentionsDefensors] = useState<
    HashtagsMentionsDefensorsProps[]
  >([]);
  const [mentionsDefensors, setMentionsDefensors] = useState<
    HashtagsMentionsDefensorsProps[]
  >([]);

  const { isGettingData, hashtagData } = useMentionsDataContext();
  const [filter, setFilter] = useState<string>("positive");

  useEffect(() => {
    if (hashtagData) {
      setInstagramMentionsDefensors(
        hashtagData?.hashtagMentions.engagers.instagram.positive.map(
          (item) => ({
            ...item,
            socialMedia: "Instagram",
          }),
        ),
      );

      setTikTokMentionsDefensors(
        hashtagData?.hashtagMentions.engagers.tiktok.positive.map((item) => ({
          ...item,
          socialMedia: "TikTok",
        })),
      );
    }
  }, [hashtagData]);

  useEffect(() => {
    if (instagramMentionsDefensors && tiktokMentionsDefensors) {
      setMentionsDefensors([
        ...instagramMentionsDefensors,
        ...tiktokMentionsDefensors,
      ]);
    }
  }, [instagramMentionsDefensors, tiktokMentionsDefensors]);

  return (
    <BaseCard className="p-0">
      <BaseCardHeader
        title="Defensores"
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
          {mentionsDefensors.map((item, index) => (
            <div
              className="flex w-max gap-4 border-b border-b-zinc-300 p-4 text-xs md:w-full md:justify-between lg:grid lg:w-max lg:grid-cols-12 lg:justify-normal lg:text-sm xl:w-full 2xl:text-base 3xl:text-lg"
              key={index}
            >
              <div className="flex justify-center lg:col-span-1">
                {item.socialMedia === "Instagram" ? (
                  <Image
                    src="/Logos/InstagramLogo.png"
                    alt=""
                    width={200}
                    height={200}
                    className="h-10 w-10 rounded-lg"
                  />
                ) : (
                  <Image
                    src="/Logos/TikTokLogo.png"
                    alt=""
                    width={200}
                    height={200}
                    className="h-10 w-10 rounded-lg"
                  />
                )}
              </div>
              <div className="flex w-40 flex-col justify-center lg:col-span-5">
                {/* <span className="text-zinc-500">@{item.userName}</span> */}
                <span className="truncate font-semibold">{item.userName}</span>
              </div>
              <div className="flex flex-col justify-center lg:col-span-2">
                <span className="text-zinc-500">Menções</span>
                <span className="font-semibold">{item.comments}</span>
              </div>
              <div className="flex flex-col justify-center lg:col-span-2">
                <span className="text-zinc-500">Sentimento</span>
                <span className="font-semibold">{item.sentiment}</span>
              </div>
              <div className="flex flex-col items-end justify-center lg:col-span-2">
                <Image
                  src={
                    item.sentiment <= 350
                      ? "/Icons/negativeSmile.svg"
                      : item.sentiment > 351 && item.sentiment < 650
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
      <BaseCardFooter text="Lista com os principais perfis favoráveis." />
    </BaseCard>
  );
}
