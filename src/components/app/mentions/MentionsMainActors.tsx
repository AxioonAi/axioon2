"use client";
import Image from "next/image";
import { useEffect } from "react";
import { BaseCard } from "@/components/global/BaseCard/BaseCard";
import { BaseCardHeader } from "@/components/global/BaseCard/BaseCardHeader";
import { BaseCardFooter } from "@/components/global/BaseCard/BaseCardFooter";
import { useOffsetContext } from "@/context/test";

interface MentionsMainActorsProps {
  MentionsMainActorsData: {
    socialMedia: string;
    userName: string;
    name: string;
    followers: number;
    lastPost: Date;
    engagementGenerated: number;
    mentions: number;
    sentiment: number;
  }[];
}

export function MentionsMainActors({
  MentionsMainActorsData,
}: MentionsMainActorsProps) {
  const { elementRef, isVisible, elementName, setElementName } =
    useOffsetContext();

  useEffect(() => {
    if (isVisible) {
      setElementName("keywords");
    } else {
      setElementName("");
    }
  }, [isVisible, elementName]);

  return (
    <BaseCard className="p-0">
      <BaseCardHeader title="Principais Atores" />
      <div
        ref={elementRef}
        className="mb-12 flex h-80 w-full flex-col overflow-x-scroll overflow-y-scroll p-4 lg:mb-0 lg:h-[73%] lg:overflow-x-auto 3xl:h-4/5"
      >
        {MentionsMainActorsData.map((item, index) => (
          <div
            className="flex w-max gap-4 border-b border-b-zinc-300 p-4 text-xs lg:grid lg:grid-cols-12 lg:text-sm xl:w-full 2xl:text-base 3xl:text-lg"
            key={index}
          >
            <div className="flex justify-center lg:col-span-1">
              <Image
                src={"/Logos/" + item.socialMedia + ".svg"}
                alt=""
                width={200}
                height={200}
                className="h-10 w-10 rounded-lg"
              />
            </div>
            <div className="flex flex-col justify-center lg:col-span-2">
              <span className="text-zinc-500">@{item.userName}</span>
              <span className="font-semibold">{item.name}</span>
            </div>
            <div className="flex flex-col justify-center lg:col-span-2">
              <span className="text-zinc-500">Seguidores</span>
              <span className="font-semibold">{item.followers}</span>
            </div>
            <div className="flex flex-col justify-center lg:col-span-2">
              <span className="text-zinc-500">Ultima Publicação</span>
              <span className="font-semibold">
                {new Date(item.lastPost).toLocaleDateString("pt-BR")}
              </span>
            </div>
            <div className="flex flex-col justify-center lg:col-span-2">
              <span className="text-zinc-500">Engajamento Gerado</span>
              <span className="font-semibold">{item.engagementGenerated}</span>
            </div>
            <div className="flex flex-col justify-center lg:col-span-1">
              <span className="text-zinc-500">Menções</span>
              <span className="font-semibold">{item.mentions}</span>
            </div>
            <div className="flex flex-col justify-center lg:col-span-1">
              <span className="text-zinc-500">Sentimento</span>
              <span className="font-semibold">{item.sentiment}</span>
            </div>
            <div className="flex flex-col items-end justify-center lg:col-span-1">
              <Image
                src={
                  item.sentiment <= 400
                    ? "/Icons/negativeSmile.svg"
                    : item.sentiment > 400 && item.sentiment < 700
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
      <BaseCardFooter />
    </BaseCard>
  );
}
