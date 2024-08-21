"use client";
import ReactWordcloud from "react-wordcloud";
import { EllipsisVertical } from "lucide-react";
import { useEffect, useState } from "react";
import { BaseCard } from "@/components/global/BaseCard/BaseCard";
import { BaseCardHeader } from "@/components/global/BaseCard/BaseCardHeader";
import { BaseCardFooter } from "@/components/global/BaseCard/BaseCardFooter";
import { Skeleton } from "@/components/global/Skeleton";
import { useComparatorDataContext } from "@/context/ComparatorData";

interface PassiveWordCloudProps {
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

export function PassiveWordCloud({ WordCloudData }: PassiveWordCloudProps) {
  const [facebookWords, setFacebookWords] = useState<WordsProps[]>();
  const [instagramWords, setInstagramWords] = useState<WordsProps[]>();
  const [tiktokWords, setTiktokWords] = useState<WordsProps[]>();
  const [youtubeWords, setYoutubeWords] = useState<WordsProps[]>();
  const [wordsList, setWordsList] = useState<WordsProps[]>();
  const { isGettingData, passiveUserData } = useComparatorDataContext();

  useEffect(() => {
    if (passiveUserData) {
      const facebookWordsData =
        passiveUserData.commentsData.wordCloud.facebook.words.map((word) => ({
          text: word.word,
          value: word.quantity,
        }));
      setFacebookWords(facebookWordsData);
      const instagramWordsData =
        passiveUserData.commentsData.wordCloud.instagram.words.map((word) => ({
          text: word.word,
          value: word.quantity,
        }));
      setInstagramWords(instagramWordsData);
      const tiktokWordsData =
        passiveUserData.commentsData.wordCloud.tiktok.words.map((word) => ({
          text: word.word,
          value: word.quantity,
        }));
      setTiktokWords(tiktokWordsData);
      const youtubeWordsData =
        passiveUserData.commentsData.wordCloud.youtube.words.map((word) => ({
          text: word.word,
          value: word.quantity,
        }));
      setYoutubeWords(youtubeWordsData);
    }
  }, [passiveUserData]);

  useEffect(() => {
    const wordsList = [
      facebookWords,
      instagramWords,
      tiktokWords,
      youtubeWords,
    ];
    const flatWordsList = wordsList
      .flat()
      .filter((word): word is WordsProps => word !== undefined);
    setWordsList(flatWordsList);
  }, [facebookWords, instagramWords, tiktokWords, youtubeWords]);

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
        <div className="mb-12 flex h-48 w-full flex-col lg:mb-0 lg:h-[calc(100%-5.5rem)]">
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
