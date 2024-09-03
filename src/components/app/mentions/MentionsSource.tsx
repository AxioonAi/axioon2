"use client";
import { EllipsisVertical, TrendingDown, TrendingUp } from "lucide-react";
import { useEffect, useState } from "react";
import { BaseCard } from "@/components/global/BaseCard/BaseCard";
import { BaseCardHeader } from "@/components/global/BaseCard/BaseCardHeader";
import { BaseCardFooter } from "@/components/global/BaseCard/BaseCardFooter";
import { useMentionsDataContext } from "@/context/MentionsData";
import { Skeleton } from "@/components/global/Skeleton";

interface MentionsSourceDataProps {
  name: string;
  quantity: number;
  sentiment: string;
}

export function MentionsSource() {
  const [mentionsBySource, setMentionsBySource] = useState<
    MentionsSourceDataProps[]
  >([]);
  const [mentionsTotal, setMentionsTotal] = useState<number>();
  const { isGettingData, mentionsData } = useMentionsDataContext();

  useEffect(() => {
    if (mentionsData) {
      setMentionsBySource(mentionsData.mentions.mentionsByFount);
    }
  }, [mentionsData]);

  useEffect(() => {
    if (mentionsBySource) {
      setMentionsTotal(mentionsBySource.reduce((a, b) => a + b.quantity, 0));
    }
  }, [mentionsBySource]);

  return (
    <BaseCard className="p-0">
      <BaseCardHeader
        title="Menções por Fontes"
        children={
          <div className="flex h-8 w-8 items-center justify-center rounded-lg bg-zinc-100 text-zinc-700">
            <EllipsisVertical size={14} />
          </div>
        }
      />
      {isGettingData ? (
        <Skeleton className="mx-auto mt-4 h-80 w-11/12" />
      ) : (
        <div className="flex h-full w-full flex-col">
          <div className="flex items-center gap-1 px-8 py-2">
            <strong className="text-sm lg:text-base 2xl:text-lg 3xl:text-xl">
              {mentionsTotal || ""}
            </strong>
            <span className="text-xs text-zinc-500 lg:text-sm 2xl:text-base 3xl:text-lg">
              Menções Totais
            </span>
          </div>
          <div className="flex h-80 w-full flex-col gap-4 overflow-y-scroll p-4 text-sm lg:mb-0 lg:h-[calc(100%-3rem)] lg:gap-8 lg:text-base 2xl:text-lg 3xl:text-xl">
            {mentionsBySource.map((source, index) => (
              <div className="flex items-center" key={index}>
                <div className="flex w-1/2 items-center gap-2">
                  <span>{source.name}</span>
                </div>
                <div className="flex w-1/2 items-center justify-between gap-2">
                  {Number(source.sentiment) >= 651 ? (
                    <TrendingUp className="h-6 w-6 text-green-600" />
                  ) : (
                    <TrendingDown className="h-6 w-6 text-red-600" />
                  )}
                  <span>{source.quantity}</span>
                </div>
              </div>
            ))}
          </div>
        </div>
      )}

      <BaseCardFooter text="Lista da origem das menções." />
    </BaseCard>
  );
}
