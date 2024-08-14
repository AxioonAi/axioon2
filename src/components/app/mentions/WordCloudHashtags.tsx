"use client";
import ReactWordcloud from "react-wordcloud";
import { EllipsisVertical } from "lucide-react";
import { useEffect, useState } from "react";
import { BaseCard } from "@/components/global/BaseCard/BaseCard";
import { BaseCardHeader } from "@/components/global/BaseCard/BaseCardHeader";
import { BaseCardFooter } from "@/components/global/BaseCard/BaseCardFooter";
import { useOffsetContext } from "@/context/test";
import { useMentionsDataContext } from "@/context/MentionsData";

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

export function WordCloudHashtags({ WordCloudData }: WordCloudHashtagsProps) {
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
      <BaseCardHeader
        title="Nuvem de Palavras"
        children={
          <div className="flex h-8 w-8 items-center justify-center rounded-lg bg-zinc-100 text-zinc-700">
            <EllipsisVertical size={14} />
          </div>
        }
      />
      {isGettingData ? (
        <div className="h-full w-full bg-gradient-to-r from-gray-10 via-gray-20 to-gray-10" />
      ) : (
        <div
          ref={elementRef}
          className="flex h-full max-h-[35vh] w-full flex-col"
        >
          <ReactWordcloud
            words={wordsList as WordsProps[]}
            options={WordCloudData.options}
          />
        </div>
      )}
      <BaseCardFooter />
    </BaseCard>
  );
}
