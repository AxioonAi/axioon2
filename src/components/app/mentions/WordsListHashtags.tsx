"use client";
import { ChevronDown } from "lucide-react";
import { useEffect, useState } from "react";
import { twMerge } from "tailwind-merge";
import { BaseCard } from "@/components/global/BaseCard/BaseCard";
import { BaseCardHeader } from "@/components/global/BaseCard/BaseCardHeader";
import { BaseCardFooter } from "@/components/global/BaseCard/BaseCardFooter";
import { useMentionsDataContext } from "@/context/MentionsData";
import { Skeleton } from "@/components/global/Skeleton";

interface WordsProps {
  text: string;
  value: number;
  sentimentSum: number;
  sentimentAvg: number;
}

export function WordsListHashtags() {
  const [instagramWords, setInstagramWords] = useState<WordsProps[]>();
  const [wordsList, setWordsList] = useState<WordsProps[]>([]);
  const { isGettingData, mentionsData } = useMentionsDataContext();

  useEffect(() => {
    if (mentionsData) {
      const instagramWordsData = mentionsData.hashtagCloud.instagram.words.map(
        (word) => ({
          text: word.word,
          value: word.quantity,
          sentimentSum: word.sentimentSum,
          sentimentAvg: word.sentimentAvg,
        }),
      );
      setInstagramWords(instagramWordsData);
    }
  }, [mentionsData]);

  useEffect(() => {
    const wordsList = [instagramWords];
    const flatWordsList = wordsList
      .flat()
      .filter((word): word is WordsProps => word !== undefined);

    const orderedFlatWordsList = flatWordsList.sort(
      (a, b) => b.value - a.value,
    );
    setWordsList(orderedFlatWordsList);
  }, [instagramWords]);

  return (
    <BaseCard className="p-0">
      <BaseCardHeader
        title="Lista de Palavras"
        children={
          <div className="flex items-center gap-2 text-xs text-zinc-500">
            <span>Ver todos</span>
            <ChevronDown size={14} />
          </div>
        }
      />
      {isGettingData ? (
        <Skeleton className="mx-auto mt-4 h-96 w-11/12" />
      ) : (
        <div className="mb-12 flex h-80 w-full flex-col gap-8 overflow-y-scroll p-4 lg:mb-0 lg:h-[74%] 2xl:h-3/4 3xl:h-4/5">
          {wordsList.map((word, index) => (
            <div
              key={index}
              className="flex w-full items-center justify-between"
            >
              <div className="flex items-center gap-2">
                <div className="flex h-10 w-10 items-center justify-center rounded-full bg-sky-500/10 p-2 text-sky-500">
                  {word.text.slice(0, 1)}
                </div>
                <div className="flex h-full flex-col justify-between">
                  <strong>{word.text}</strong>
                  <div className="flex items-center gap-1">
                    <span>Sentimento: </span>
                    <span
                      className={twMerge(
                        "text-sm",
                        word.sentimentAvg >= 651
                          ? "text-green-600"
                          : word.sentimentAvg < 650 && word.sentimentAvg >= 351
                            ? "text-violet-600"
                            : "text-red-600",
                      )}
                    >
                      {word.sentimentAvg.toFixed(2)}
                    </span>
                  </div>
                </div>
              </div>
              <strong> {word.value}</strong>
            </div>
          ))}
        </div>
      )}
      <BaseCardFooter />
    </BaseCard>
  );
}
