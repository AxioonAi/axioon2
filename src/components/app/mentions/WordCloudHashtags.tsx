"use client";
import ReactWordcloud from "react-wordcloud";
import { EllipsisVertical } from "lucide-react";
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

export function WordCloudHashtags({ WordCloudData }: WordCloudHashtagsProps) {
  const [instagramWords, setInstagramWords] = useState<WordsProps[]>();
  const [wordsList, setWordsList] = useState<WordsProps[]>();
  const [isHashtagsEmpty, setIsHashtagsEmpty] = useState(true);
  const { isGettingData, mentionsData } = useMentionsDataContext();
  const { elementRef, isVisible, elementName, setElementName } =
    useOffsetContext();

  useEffect(() => {
    if (mentionsData?.hashtagCloud.instagram) {
      const instagramWordsData = mentionsData.hashtagCloud.instagram.words.map(
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
      <BaseCardHeader
        title="Nuvem de Hashtags"
        children={
          <div className="flex h-8 w-8 items-center justify-center rounded-lg bg-zinc-100 text-zinc-700">
            <EllipsisVertical size={14} />
          </div>
        }
      />
      {isGettingData ? (
        <Skeleton className="mx-auto mt-4 h-48 w-11/12" />
      ) : isHashtagsEmpty ? (
        <div className="flex h-full min-h-40 w-full items-center justify-center">
          <span className="text-lg font-semibold italic">
            Não encontramos nenhuma Hashtag
          </span>
        </div>
      ) : (
        <div ref={elementRef} className="flex h-full max-h-56 w-full flex-col">
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
