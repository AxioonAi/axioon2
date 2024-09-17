"use client";
import ReactWordcloud from "react-wordcloud";
import { useEffect, useState } from "react";
import { BaseCard } from "@/components/global/BaseCard/BaseCard";
import { BaseCardHeader } from "@/components/global/BaseCard/BaseCardHeader";
import { BaseCardFooter } from "@/components/global/BaseCard/BaseCardFooter";
import { useMentionsDataContext } from "@/context/MentionsData";
import { Skeleton } from "@/components/global/Skeleton";

interface HashtagsWordCloudProps {
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

export function HashtagsWordCloud({ WordCloudData }: HashtagsWordCloudProps) {
  const { hashtagData, isGettingData } = useMentionsDataContext();
  const [instagramWords, setInstagramWords] = useState<WordsProps[]>();
  const [tiktokWords, setTiktokWords] = useState<WordsProps[]>();
  const [wordsList, setWordsList] = useState<WordsProps[]>();
  const [isWordsEmpty, setIsWordsEmpty] = useState(true);

  useEffect(() => {
    if (hashtagData) {
      const instagramWordsData = hashtagData.wordCloud.instagram.words.map(
        (word) => ({
          text: word.word,
          value: word.quantity,
        }),
      );
      setInstagramWords(instagramWordsData);
      const tiktokWordsData = hashtagData.wordCloud.tiktok.words.map(
        (word) => ({
          text: word.word,
          value: word.quantity,
        }),
      );
      setTiktokWords(tiktokWordsData);
    }
  }, [hashtagData]);

  useEffect(() => {
    const wordsList = [instagramWords, tiktokWords];
    const flatWordsList = wordsList
      .flat()
      .filter((word): word is WordsProps => word !== undefined);

    if (flatWordsList.length === 0) {
      setIsWordsEmpty(true);
    } else {
      setIsWordsEmpty(false);
    }
    setWordsList(flatWordsList);
  }, [instagramWords, tiktokWords]);

  return (
    <BaseCard className="p-0">
      <BaseCardHeader title="Nuvem de Palavras" />
      {isGettingData ? (
        <Skeleton className="mx-auto mt-4 h-48 w-11/12" />
      ) : isWordsEmpty ? (
        <div className="flex h-full min-h-40 w-full items-center justify-center">
          <span className="text-center text-lg font-semibold italic">
            Não encontramos nenhuma Palavra
          </span>
        </div>
      ) : (
        <div className="flex h-48 w-full flex-col lg:mb-0 lg:h-[calc(100%-5.5rem)]">
          <ReactWordcloud
            words={wordsList as WordsProps[]}
            options={WordCloudData.options}
          />
        </div>
      )}
      <BaseCardFooter text="Nuvem das palavras mais utilizadas." />
    </BaseCard>
  );
}
