"use client";
import ReactWordcloud from "react-wordcloud";
import { EllipsisVertical } from "lucide-react";
import { useEffect, useState } from "react";
import { BaseCard } from "@/components/global/BaseCard/BaseCard";
import { BaseCardHeader } from "@/components/global/BaseCard/BaseCardHeader";
import { BaseCardFooter } from "@/components/global/BaseCard/BaseCardFooter";
import { Skeleton } from "@/components/global/Skeleton";
import { useComparatorDataContext } from "@/context/ComparatorData";

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

export function MentionsWordCloud({ WordCloudData }: WordCloudProps) {
  const [passiveInstagramWords, setPassiveInstagramWords] =
    useState<WordsProps[]>();
  const [activeInstagramWords, setActiveInstagramWords] =
    useState<WordsProps[]>();
  const [passiveWordsList, setPassiveWordsList] = useState<WordsProps[]>();
  const [activeWordsList, setActiveWordsList] = useState<WordsProps[]>();
  const [finalWordsList, setFinalWordsList] = useState<WordsProps[]>();
  const { isGettingData, passiveUserMentionsData, activeUserMentionsData } =
    useComparatorDataContext();

  useEffect(() => {
    if (passiveUserMentionsData) {
      const passiveInstagramWordsData =
        passiveUserMentionsData.wordCloud.instagram.words.map((word) => ({
          text: word.word,
          value: word.quantity,
        }));
      setPassiveInstagramWords(passiveInstagramWordsData);
    }
  }, [passiveUserMentionsData]);

  useEffect(() => {
    const passiveWordsList = [passiveInstagramWords];
    const flatpassiveWordsList = passiveWordsList
      .flat()
      .filter((word): word is WordsProps => word !== undefined);
    setPassiveWordsList(flatpassiveWordsList);
  }, [passiveInstagramWords]);

  useEffect(() => {
    if (activeUserMentionsData) {
      const activeInstagramWordsData =
        activeUserMentionsData.wordCloud.instagram.words.map((word) => ({
          text: word.word,
          value: word.quantity,
        }));
      setActiveInstagramWords(activeInstagramWordsData);
    }
  }, [activeUserMentionsData]);

  useEffect(() => {
    const activeWordsList = [activeInstagramWords];
    const flatactiveWordsList = activeWordsList
      .flat()
      .filter((word): word is WordsProps => word !== undefined);
    setActiveWordsList(flatactiveWordsList);
  }, [activeInstagramWords]);

  useEffect(() => {
    if (activeWordsList && passiveWordsList) {
      const finalWordsList = [...activeWordsList, ...passiveWordsList].filter(
        (word, index, self) =>
          self.findIndex((w) => w.text === word.text) === index &&
          activeWordsList.some((activeWord) => activeWord.text === word.text) &&
          passiveWordsList.some(
            (passiveWord) => passiveWord.text === word.text,
          ),
      );
      setFinalWordsList(finalWordsList);
    }
  }, [passiveWordsList, activeWordsList]);

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
            words={finalWordsList as WordsProps[]}
            options={WordCloudData.options}
          />
        </div>
      )}
      <BaseCardFooter text="Comparativo das palavras mais utilizadas nas menções." />
    </BaseCard>
  );
}
