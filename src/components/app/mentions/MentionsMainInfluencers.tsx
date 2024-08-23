"use client";
import Image from "next/image";
import { useEffect, useState } from "react";
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

  useEffect(() => {
    if (mentionsData) {
      setMentionsMainInfluencersData(mentionsData.mentions.authors);
    }
  }, [mentionsData]);

  return (
    <BaseCard className="p-0">
      <BaseCardHeader title="Principais Influenciadores" />
      {isGettingData ? (
        <Skeleton className="mx-auto mt-4 h-[23rem] w-11/12" />
      ) : (
        <div className="mb-12 flex h-80 w-full flex-col overflow-x-scroll overflow-y-scroll p-4 lg:mb-0 lg:h-[calc(100%-5.5rem)] lg:overflow-x-auto">
          {MentionsMainInfluencersData.map((item, index) => (
            <div
              className="flex w-max gap-4 border-b border-b-zinc-300 p-4 text-xs lg:grid lg:grid-cols-12 lg:text-sm xl:w-full 2xl:text-base 3xl:text-lg"
              key={index}
            >
              <div className="col-span-1 flex justify-center">
                <Image
                  src="/Logos/instagram.svg"
                  alt=""
                  width={200}
                  height={200}
                  className="h-10 w-10 rounded-lg"
                />
              </div>
              <div className="col-span-2 flex flex-col justify-center">
                <span className="text-zinc-500">@{item.username}</span>
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
                <span className="font-semibold">{item.engagement}</span>
              </div>
              <div className="col-span-1 flex flex-col justify-center">
                <span className="text-zinc-500">Menções</span>
                <span className="font-semibold">{item.posts}</span>
              </div>
              <div className="col-span-1 flex flex-col justify-center">
                <span className="text-zinc-500">Sentimento</span>
                <span className="font-semibold">{item.sentiment}</span>
              </div>
              <div className="col-span-1 flex flex-col items-end justify-center">
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
      <BaseCardFooter />
    </BaseCard>
  );
}
