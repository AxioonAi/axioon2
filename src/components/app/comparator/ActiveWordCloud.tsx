"use client";
import ReactWordcloud from "react-wordcloud";
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

export function ActiveWordCloud({ WordCloudData }: ActiveWordCloudProps) {
  const [facebookWords, setFacebookWords] = useState<WordsProps[]>();
  const [instagramWords, setInstagramWords] = useState<WordsProps[]>();
  const [tiktokWords, setTiktokWords] = useState<WordsProps[]>();
  const [youtubeWords, setYoutubeWords] = useState<WordsProps[]>();
  const [wordsList, setWordsList] = useState<WordsProps[]>();
  const { isGettingData, activeUserData } = useComparatorDataContext();

  useEffect(() => {
    if (activeUserData) {
      const facebookWordsData =
        activeUserData.commentsData.wordCloud.facebook.words.map((word) => ({
          text: word.word,
          value: word.quantity,
        }));
      setFacebookWords(facebookWordsData);
      const instagramWordsData =
        activeUserData.commentsData.wordCloud.instagram.words.map((word) => ({
          text: word.word,
          value: word.quantity,
        }));
      setInstagramWords(instagramWordsData);
      const tiktokWordsData =
        activeUserData.commentsData.wordCloud.tiktok.words.map((word) => ({
          text: word.word,
          value: word.quantity,
        }));
      setTiktokWords(tiktokWordsData);
      const youtubeWordsData =
        activeUserData.commentsData.wordCloud.youtube.words.map((word) => ({
          text: word.word,
          value: word.quantity,
        }));
      setYoutubeWords(youtubeWordsData);
    }
  }, [activeUserData]);

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
      <BaseCardHeader title="Nuvem de Palavras" />
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
      <BaseCardFooter text="Nuvem das palavras mais utilizadas do candidato 1." />
    </BaseCard>
  );
}
