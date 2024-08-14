"use client";
import Image from "next/image";
import { useEffect, useState } from "react";
import { BaseCard } from "@/components/global/BaseCard/BaseCard";
import { BaseCardHeader } from "@/components/global/BaseCard/BaseCardHeader";
import { BaseCardFooter } from "@/components/global/BaseCard/BaseCardFooter";
import { useMentionsDataContext } from "@/context/MentionsData";

interface MentionsDetractorsProps {
  comments: number;
  followers: number;
  id: string;
  negativeComments: number;
  neutralComments: number;
  positiveComments: number;
  sentiment: number;
  userName: string;
}

export function MentionsDetractors() {
  const [mentionsDetractors, setMentionsDetractors] = useState<
    MentionsDetractorsProps[]
  >([]);

  const { mentionsData, isGettingData } = useMentionsDataContext();

  useEffect(() => {
    if (mentionsData) {
      setMentionsDetractors(mentionsData.mentions.engagers.negative);
    }
  }, [mentionsData]);

  return (
    <BaseCard className="p-0">
      <BaseCardHeader title="Detratores" />
      {isGettingData ? (
        <div className="h-full w-full bg-gradient-to-r from-gray-10 via-gray-20 to-gray-10" />
      ) : (
        <div className="mb-12 flex h-80 w-full flex-col overflow-x-scroll overflow-y-scroll p-4 lg:mb-0 lg:h-[73%] lg:overflow-x-auto 3xl:h-4/5">
          {mentionsDetractors.map((item, index) => (
            <div
              className="flex w-max gap-4 border-b border-b-zinc-300 p-4 text-xs xs:w-full xs:justify-between lg:flex lg:w-max lg:grid-cols-12 lg:text-sm xl:grid xl:w-full 2xl:text-base 3xl:text-lg"
              key={index}
            >
              <div className="flex justify-center lg:col-span-1">
                <Image
                  src="/Logos/Instagram.svg"
                  alt=""
                  width={200}
                  height={200}
                  className="h-10 w-10 rounded-lg"
                />
              </div>
              <div className="flex flex-col justify-center lg:col-span-5">
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
      <BaseCardFooter />
    </BaseCard>
  );
}
