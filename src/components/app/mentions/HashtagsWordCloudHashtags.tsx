"use client";
import ReactWordcloud from "react-wordcloud";
import { useEffect, useState } from "react";
import { BaseCard } from "@/components/global/BaseCard/BaseCard";
import { BaseCardHeader } from "@/components/global/BaseCard/BaseCardHeader";
import { BaseCardFooter } from "@/components/global/BaseCard/BaseCardFooter";
import { useOffsetContext } from "@/context/test";
import { useMentionsDataContext } from "@/context/MentionsData";
import { Skeleton } from "@/components/global/Skeleton";

interface WordCloudHashtagsProps {
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

export function HashtagsWordCloudHashtags({
  WordCloudData,
}: WordCloudHashtagsProps) {
  const [instagramWords, setInstagramWords] = useState<WordsProps[]>();
  const [wordsList, setWordsList] = useState<WordsProps[]>();
  const [isHashtagsEmpty, setIsHashtagsEmpty] = useState(true);
  const { isGettingData, hashtagData } = useMentionsDataContext();
  const { elementRef, isVisible, elementName, setElementName } =
    useOffsetContext();

  useEffect(() => {
    if (hashtagData?.hashtagCloud) {
      const instagramWordsData = hashtagData.hashtagCloud.map((word) => ({
        text: word.word,
        value: word.quantity,
      }));
      setInstagramWords(instagramWordsData);
    }
  }, [hashtagData]);

  useEffect(() => {
    const wordsList = [instagramWords];
    const flatWordsList = wordsList
      .flat()
      .filter((word): word is WordsProps => word !== undefined);

    if (flatWordsList.length === 0) {
      setIsHashtagsEmpty(true);
    } else {
      setIsHashtagsEmpty(false);
    }

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
      <BaseCardHeader title="Nuvem de Hashtags" />
      {isGettingData ? (
        <Skeleton className="mx-auto mt-4 h-48 w-11/12" />
      ) : isHashtagsEmpty ? (
        <div className="flex h-full min-h-40 w-full items-center justify-center">
          <span className="text-center text-lg font-semibold italic">
            Não encontramos nenhuma Hashtag
          </span>
        </div>
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
      <BaseCardFooter text="Nuvem das hashtags mais utilizadas." />
    </BaseCard>
  );
}
