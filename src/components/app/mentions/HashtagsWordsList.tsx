"use client";
import { ChevronDown } from "lucide-react";
import { useEffect, useState } from "react";
import { twMerge } from "tailwind-merge";
import { BaseCard } from "@/components/global/BaseCard/BaseCard";
import { BaseCardHeader } from "@/components/global/BaseCard/BaseCardHeader";
import { BaseCardFooter } from "@/components/global/BaseCard/BaseCardFooter";
import { useMentionsDataContext } from "@/context/MentionsData";
import { Skeleton } from "@/components/global/Skeleton";

interface HashtagsWordsProps {
  text: string;
  value: number;
  sentimentSum: number;
  sentimentAvg: number;
}

export function HashtagsWordsList() {
  const [instagramWords, setInstagramWords] = useState<HashtagsWordsProps[]>();
  const [tiktokWords, setTiktokWords] = useState<HashtagsWordsProps[]>();
  const [wordsList, setWordsList] = useState<HashtagsWordsProps[]>([]);
  const [isHashtagsEmpty, setIsHashtagsEmpty] = useState(true);
  const { isGettingData, hashtagData } = useMentionsDataContext();

  useEffect(() => {
    if (hashtagData) {
      const instagramWordsData = hashtagData.wordCloud.instagram.words.map(
        (word) => ({
          text: word.word,
          value: word.quantity,
          sentimentSum: word.sentimentSum,
          sentimentAvg: word.sentimentAvg,
        }),
      );
      setInstagramWords(instagramWordsData);
      const tiktokWordsData = hashtagData.wordCloud.tiktok.words.map(
        (word) => ({
          text: word.word,
          value: word.quantity,
          sentimentSum: word.sentimentSum,
          sentimentAvg: word.sentimentAvg,
        }),
      );
      setTiktokWords(tiktokWordsData);
    }
  }, [hashtagData]);

  useEffect(() => {
    const wordsList = [instagramWords, tiktokWords];
    const flatWordsList = wordsList
      .flat()
      .filter((word): word is HashtagsWordsProps => word !== undefined);

    const orderedFlatWordsList = flatWordsList.sort(
      (a, b) => b.value - a.value,
    );

    if (flatWordsList.length === 0) {
      setIsHashtagsEmpty(true);
    } else {
      setIsHashtagsEmpty(false);
    }
    setWordsList(orderedFlatWordsList);
  }, [instagramWords, tiktokWords]);

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
        <Skeleton className="mx-auto mt-4 h-48 w-11/12" />
      ) : isHashtagsEmpty ? (
        <div className="flex h-full min-h-40 w-full items-center justify-center">
          <span className="text-lg font-semibold italic">
            Não encontramos nenhuma Palavra
          </span>
        </div>
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
