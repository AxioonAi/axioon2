"use client";
import ReactWordcloud from "react-wordcloud";
import { useEffect, useState } from "react";
import { BaseCard } from "@/components/global/BaseCard/BaseCard";
import { BaseCardHeader } from "@/components/global/BaseCard/BaseCardHeader";
import { BaseCardFooter } from "@/components/global/BaseCard/BaseCardFooter";
import { useOffsetContext } from "@/context/test";
import { useMentionsDataContext } from "@/context/MentionsData";
import { Skeleton } from "@/components/global/Skeleton";

interface WordCloudProps {
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

export function WordCloud({ WordCloudData }: WordCloudProps) {
  const [instagramWords, setInstagramWords] = useState<WordsProps[]>();
  const [wordsList, setWordsList] = useState<WordsProps[]>();
  const { isGettingData, mentionsData } = useMentionsDataContext();
  const { elementRef, isVisible, elementName, setElementName } =
    useOffsetContext();

  useEffect(() => {
    if (mentionsData) {
      const instagramWordsData = mentionsData.wordCloud.instagram.words.map(
        (word) => ({
          text: word.word,
          value: word.quantity,
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
    setWordsList(flatWordsList);
  }, [instagramWords]);

  useEffect(() => {
    if (isVisible) {
      setElementName("keywords");
    } else {
      setElementName("");
    }
  }, [isVisible, elementName]);

  return (
    <BaseCard className="p-0">
      <BaseCardHeader title="Nuvem de Palavras" />
      {isGettingData ? (
        <Skeleton className="mx-auto mt-4 h-48 w-11/12" />
      ) : (
        <div
          ref={elementRef}
          className="flex h-48 w-full flex-col lg:mb-0 lg:h-[calc(100%-5.5rem)]"
        >
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
