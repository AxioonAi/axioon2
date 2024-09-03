"use client";
import Image from "next/image";
import { useEffect, useState } from "react";
import { BaseCard } from "@/components/global/BaseCard/BaseCard";
import { BaseCardHeader } from "@/components/global/BaseCard/BaseCardHeader";
import { BaseCardFooter } from "@/components/global/BaseCard/BaseCardFooter";
import { useOffsetContext } from "@/context/test";
import { useMentionsDataContext } from "@/context/MentionsData";
import { Skeleton } from "@/components/global/Skeleton";

interface HashtagsMentionsMainActorsProps {
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
  socialMedia: string;
}

export function HashtagsMentionsMainActors() {
  const [InstagramMainActorsData, setInstagramMainActorsData] = useState<
    HashtagsMentionsMainActorsProps[]
  >([]);
  const [TikTokMainActorsData, setTikTokMainActorsData] = useState<
    HashtagsMentionsMainActorsProps[]
  >([]);
  const [mainActorsData, setMainActorsData] = useState<
    HashtagsMentionsMainActorsProps[]
  >([]);
  const { isGettingData, hashtagData } = useMentionsDataContext();
  const { elementRef, isVisible, elementName, setElementName } =
    useOffsetContext();

  useEffect(() => {
    if (hashtagData) {
      setInstagramMainActorsData(
        hashtagData?.hashtagMentions.authors.instagram.map((item) => ({
          ...item,
          socialMedia: "Instagram",
        })),
      );
      setTikTokMainActorsData(
        hashtagData?.hashtagMentions.authors.tiktok.map((item) => ({
          ...item,
          socialMedia: "TikTok",
        })),
      );
    }
  }, [hashtagData]);

  useEffect(() => {
    if (InstagramMainActorsData && TikTokMainActorsData) {
      setMainActorsData([...InstagramMainActorsData, ...TikTokMainActorsData]);
    }
  }, [InstagramMainActorsData, TikTokMainActorsData]);

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
      {isGettingData ? (
        <Skeleton className="mx-auto mt-4 h-[23rem] w-11/12" />
      ) : (
        <div
          ref={elementRef}
          className="flex h-80 w-full flex-col overflow-x-scroll overflow-y-scroll p-4 lg:mb-0 lg:h-[calc(100%-5.5rem)] lg:overflow-x-auto"
        >
          {mainActorsData.map((item, index) => (
            <div
              className="flex w-max gap-4 border-b border-b-zinc-300 p-4 text-xs lg:grid lg:grid-cols-12 lg:text-sm xl:w-full 2xl:text-base 3xl:text-lg"
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
              <div className="flex w-40 flex-col justify-center lg:col-span-2">
                <span className="truncate text-zinc-500">@{item.username}</span>
                <span className="truncate font-semibold">{item.name}</span>
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
                <span className="font-semibold">{item.engagement}</span>
              </div>
              <div className="flex flex-col justify-center lg:col-span-1">
                <span className="text-zinc-500">Menções</span>
                <span className="font-semibold">{item.posts}</span>
              </div>
              <div className="flex flex-col justify-center lg:col-span-1">
                <span className="text-zinc-500">Sentimento</span>
                <span className="font-semibold">{item.sentiment}</span>
              </div>
              <div className="flex flex-col items-end justify-center lg:col-span-1">
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
      <BaseCardFooter text="Lista com os principais atores." />
    </BaseCard>
  );
}
