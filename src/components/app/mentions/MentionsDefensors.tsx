"use client";
import Image from "next/image";
import { useEffect, useState } from "react";
import { BaseCard } from "@/components/global/BaseCard/BaseCard";
import { BaseCardHeader } from "@/components/global/BaseCard/BaseCardHeader";
import { BaseCardFooter } from "@/components/global/BaseCard/BaseCardFooter";
import { useMentionsDataContext } from "@/context/MentionsData";
import { Skeleton } from "@/components/global/Skeleton";

interface MentionsDefensorsProps {
  comments: number;
  followers: number;
  id: string;
  negativeComments: number;
  neutralComments: number;
  positiveComments: number;
  sentiment: number;
  userName: string;
}

export function MentionsDefensors() {
  const [mentionsDefensors, setMentionsDefensors] = useState<
    MentionsDefensorsProps[]
  >([]);

  const { mentionsData, isGettingData } = useMentionsDataContext();

  useEffect(() => {
    if (mentionsData) {
      setMentionsDefensors(mentionsData.mentions.engagers.positive);
    }
  }, [mentionsData]);

  return (
    <BaseCard className="p-0">
      <BaseCardHeader title="Defensores" />
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
                <Image
                  src="/Logos/InstagramLogo.png"
                  alt=""
                  width={200}
                  height={200}
                  className="h-10 min-h-10 w-10 min-w-10 rounded-lg"
                />
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
                <span className="font-semibold">
                  {item.sentiment.toFixed(1)}
                </span>
              </div>
              <div className="flex flex-col items-end justify-center lg:col-span-2">
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
      <BaseCardFooter text="Lista com os principais perfis favoráveis." />
    </BaseCard>
  );
}
