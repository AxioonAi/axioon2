"use client";
import { ChevronDown } from "lucide-react";
import { useEffect, useState } from "react";
import { twMerge } from "tailwind-merge";
import {
  Popover,
  PopoverArrow,
  PopoverContent,
  PopoverTrigger,
} from "@radix-ui/react-popover";
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

export function HashtagsWordsListHashtags() {
  const [wordsList, setWordsList] = useState<WordsProps[]>([]);
  const [isHashtagsEmpty, setIsHashtagsEmpty] = useState(true);
  const { isGettingData, hashtagData } = useMentionsDataContext();
  const [filter, setFilter] = useState<string>("desc");

  useEffect(() => {
    if (hashtagData?.hashtagCloud) {
      const wordsData = hashtagData.hashtagCloud.map((word) => ({
        text: word.word,
        value: word.quantity,
        sentimentSum: word.sentimentSum,
        sentimentAvg: word.sentimentAvg,
      }));
      const wordsList = [wordsData];
      const flatWordsList = wordsList
        .flat()
        .filter((word): word is WordsProps => word !== undefined);

      const orderedFlatWordsList = flatWordsList.sort(
        (a, b) => b.value - a.value,
      );

      if (flatWordsList.length === 0) {
        setIsHashtagsEmpty(true);
      } else {
        setIsHashtagsEmpty(false);
      }

      if (flatWordsList.length === 0) {
        setIsHashtagsEmpty(true);
      } else {
        setIsHashtagsEmpty(false);
      }

      setWordsList(orderedFlatWordsList);
    }
  }, [hashtagData]);

  return (
    <BaseCard className="p-0">
      <BaseCardHeader
        title="Lista de Hashtags"
        children={
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
                onClick={() => setFilter("desc")}
                className={twMerge(
                  "flex w-full items-center justify-center border-y border-y-zinc-200 p-1 text-xs transition duration-100 hover:bg-darkBlueAxion/10",
                  filter === "desc" && "bg-darkBlueAxion/10",
                )}
              >
                Positivas
              </button>
              <button
                onClick={() => setFilter("asc")}
                className={twMerge(
                  "flex w-full items-center justify-center border-y border-y-zinc-200 p-1 text-xs transition duration-100 hover:bg-darkBlueAxion/10",
                  filter === "asc" && "bg-darkBlueAxion/10",
                )}
              >
                Negativas
              </button>
              <button
                onClick={() => setFilter("ascPosts")}
                className={twMerge(
                  "flex w-full items-center justify-center border-y border-y-zinc-200 p-1 text-xs transition duration-100 hover:bg-darkBlueAxion/10",
                  filter === "ascPosts" && "bg-darkBlueAxion/10",
                )}
              >
                Mais Ativas
              </button>
              <button
                onClick={() => setFilter("descPosts")}
                className={twMerge(
                  "flex w-full items-center justify-center border-y border-y-zinc-200 p-1 text-xs transition duration-100 hover:bg-darkBlueAxion/10",
                  filter === "descPosts" && "bg-darkBlueAxion/10",
                )}
              >
                Menos Ativas
              </button>
            </PopoverContent>
          </Popover>
        }
      />
      {isGettingData ? (
        <Skeleton className="mx-auto mt-4 h-48 w-11/12" />
      ) : isHashtagsEmpty ? (
        <div className="flex h-full min-h-40 w-full items-center justify-center">
          <span className="text-center text-lg font-semibold italic">
            Não encontramos nenhuma Hashtag
          </span>
        </div>
      ) : (
        <div className="flex h-80 w-full flex-col gap-4 overflow-y-scroll p-4 lg:mb-0 lg:h-[74%] 2xl:h-3/4 3xl:h-4/5">
          {wordsList.map((word, index) => (
            <div
              key={index}
              className="flex w-full items-center justify-between"
            >
              <div className="flex items-center gap-2">
                <div className="flex h-10 w-10 items-center justify-center rounded-full bg-sky-500/10 p-2 text-sky-500">
                  {word.text.slice(0, 1)}
                </div>
                <div className="flex h-full w-full flex-col justify-between text-xs lg:text-sm 3xl:text-base">
                  <strong className="w-48 truncate md:w-full lg:w-32 xl:w-60 2xl:w-full">
                    {word.text}
                  </strong>
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
      <BaseCardFooter text="Lista das hashtags por sentimento." />
    </BaseCard>
  );
}
