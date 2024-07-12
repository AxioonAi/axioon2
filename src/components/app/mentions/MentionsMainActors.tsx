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
        className="flex h-[calc(100%-6rem)] w-full flex-col overflow-y-scroll"
      >
        {MentionsMainActorsData.map((item, index) => (
          <div
            className="grid w-full grid-cols-12 border-b border-b-zinc-300 p-4 text-xs"
            key={index}
          >
            <div className="col-span-1 justify-center">
              <Image
                src={"/Logos/" + item.socialMedia + ".svg"}
                alt=""
                width={200}
                height={200}
                className="h-10 w-10 rounded-lg"
              />
            </div>
            <div className="col-span-2 flex flex-col justify-center">
              <span className="text-zinc-500">@{item.userName}</span>
              <span className="font-semibold">{item.name}</span>
            </div>
            <div className="col-span-2 flex flex-col justify-center">
              <span className="text-zinc-500">Seguidores</span>
              <span className="font-semibold">{item.followers}</span>
            </div>
            <div className="col-span-2 flex flex-col justify-center">
              <span className="text-zinc-500">Ultima Publicação</span>
              <span className="font-semibold">
                {new Date(item.lastPost).toLocaleString()}
              </span>
            </div>
            <div className="col-span-2 flex flex-col justify-center">
              <span className="text-zinc-500">Engajamento Gerado</span>
              <span className="font-semibold">{item.engagementGenerated}</span>
            </div>
            <div className="col-span-1 flex flex-col justify-center">
              <span className="text-zinc-500">Menções</span>
              <span className="font-semibold">{item.mentions}</span>
            </div>
            <div className="col-span-1 flex flex-col justify-center">
              <span className="text-zinc-500">Sentimento</span>
              <span className="font-semibold">{item.sentiment}</span>
            </div>
            <div className="col-span-1 flex flex-col items-end justify-center">
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
