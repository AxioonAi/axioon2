"use client";
import ReactWordcloud from "react-wordcloud";
import { EllipsisVertical } from "lucide-react";
import { useEffect, useState } from "react";
import { BaseCard } from "@/components/global/BaseCard/BaseCard";
import { BaseCardHeader } from "@/components/global/BaseCard/BaseCardHeader";
import { BaseCardFooter } from "@/components/global/BaseCard/BaseCardFooter";
import { Skeleton } from "@/components/global/Skeleton";
import { useComparatorDataContext } from "@/context/ComparatorData";

interface ActiveWordCloudProps {
  WordCloudData: {
    WordCloudWords: {
      text: string;
      value: number;
    }[];
    options: {
      rotations: number;
      colors: string[];
      fontWeight: string;
      fontFamily: string;
      fontSizes: [number, number];
    };
  };
}

interface WordsProps {
  text: string;
  value: number;
}

export function ActiveMentionsWordCloud({
  WordCloudData,
}: ActiveWordCloudProps) {
  const [instagramWords, setInstagramWords] = useState<WordsProps[]>();
  const [wordsList, setWordsList] = useState<WordsProps[]>();
  const { isGettingData, activeUserMentionsData } = useComparatorDataContext();

  useEffect(() => {
    if (activeUserMentionsData) {
      const instagramWordsData =
        activeUserMentionsData.wordCloud.instagram.words.map((word) => ({
          text: word.word,
          value: word.quantity,
        }));
      setInstagramWords(instagramWordsData);
    }
  }, [activeUserMentionsData]);

  useEffect(() => {
    const wordsList = [instagramWords];
    const flatWordsList = wordsList
      .flat()
      .filter((word): word is WordsProps => word !== undefined);
    setWordsList(flatWordsList);
  }, [instagramWords]);

  return (
    <BaseCard className="p-0">
      <BaseCardHeader
        title="Nuvem de Palavras"
        children={
          <div className="flex h-8 w-8 items-center justify-center rounded-lg bg-zinc-100 text-zinc-700">
            <EllipsisVertical size={14} />
          </div>
        }
      />
      {isGettingData ? (
        <Skeleton className="mx-auto mt-4 h-[17rem] w-11/12" />
      ) : (
        <div className="flex h-48 w-full flex-col lg:mb-0 lg:h-[calc(100%-5.5rem)]">
          <ReactWordcloud
            words={wordsList as WordsProps[]}
            options={WordCloudData.options}
          />
        </div>
      )}
      <BaseCardFooter text="Nuvem das palavras mais utilizadas nas menções do candidato 1." />
    </BaseCard>
  );
}
