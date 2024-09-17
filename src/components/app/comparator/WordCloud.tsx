"use client";
import ReactWordcloud from "react-wordcloud";
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

export function WordCloud({ WordCloudData }: WordCloudProps) {
  const [passiveFacebookWords, setPassiveFacebookWords] =
    useState<WordsProps[]>();
  const [passiveInstagramWords, setPassiveInstagramWords] =
    useState<WordsProps[]>();
  const [passiveTiktokWords, setPassiveTiktokWords] = useState<WordsProps[]>();
  const [passiveYoutubeWords, setPassiveYoutubeWords] =
    useState<WordsProps[]>();
  const [activeFacebookWords, setActiveFacebookWords] =
    useState<WordsProps[]>();
  const [activeInstagramWords, setActiveInstagramWords] =
    useState<WordsProps[]>();
  const [activeTiktokWords, setActiveTiktokWords] = useState<WordsProps[]>();
  const [activeYoutubeWords, setActiveYoutubeWords] = useState<WordsProps[]>();
  const [passiveWordsList, setPassiveWordsList] = useState<WordsProps[]>();
  const [activeWordsList, setActiveWordsList] = useState<WordsProps[]>();
  const [finalWordsList, setFinalWordsList] = useState<WordsProps[]>();
  const { isGettingData, passiveUserData, activeUserData } =
    useComparatorDataContext();

  useEffect(() => {
    if (passiveUserData) {
      const passiveFacebookWordsData =
        passiveUserData.commentsData.wordCloud.facebook.words.map((word) => ({
          text: word.word,
          value: word.quantity,
        }));
      setPassiveFacebookWords(passiveFacebookWordsData);
      const passiveInstagramWordsData =
        passiveUserData.commentsData.wordCloud.instagram.words.map((word) => ({
          text: word.word,
          value: word.quantity,
        }));
      setPassiveInstagramWords(passiveInstagramWordsData);
      const passiveTiktokWordsData =
        passiveUserData.commentsData.wordCloud.tiktok.words.map((word) => ({
          text: word.word,
          value: word.quantity,
        }));
      setPassiveTiktokWords(passiveTiktokWordsData);
      const passiveYoutubeWordsData =
        passiveUserData.commentsData.wordCloud.youtube.words.map((word) => ({
          text: word.word,
          value: word.quantity,
        }));
      setPassiveYoutubeWords(passiveYoutubeWordsData);
    }
  }, [passiveUserData]);

  useEffect(() => {
    const passiveWordsList = [
      passiveFacebookWords,
      passiveInstagramWords,
      passiveTiktokWords,
      passiveYoutubeWords,
    ];
    const flatpassiveWordsList = passiveWordsList
      .flat()
      .filter((word): word is WordsProps => word !== undefined);
    setPassiveWordsList(flatpassiveWordsList);
  }, [
    passiveFacebookWords,
    passiveInstagramWords,
    passiveTiktokWords,
    passiveYoutubeWords,
  ]);

  useEffect(() => {
    if (activeUserData) {
      const activeFacebookWordsData =
        activeUserData.commentsData.wordCloud.facebook.words.map((word) => ({
          text: word.word,
          value: word.quantity,
        }));
      setActiveFacebookWords(activeFacebookWordsData);
      const activeInstagramWordsData =
        activeUserData.commentsData.wordCloud.instagram.words.map((word) => ({
          text: word.word,
          value: word.quantity,
        }));
      setActiveInstagramWords(activeInstagramWordsData);
      const activeTiktokWordsData =
        activeUserData.commentsData.wordCloud.tiktok.words.map((word) => ({
          text: word.word,
          value: word.quantity,
        }));
      setActiveTiktokWords(activeTiktokWordsData);
      const activeYoutubeWordsData =
        activeUserData.commentsData.wordCloud.youtube.words.map((word) => ({
          text: word.word,
          value: word.quantity,
        }));
      setActiveYoutubeWords(activeYoutubeWordsData);
    }
  }, [activeUserData]);

  useEffect(() => {
    const activeWordsList = [
      activeFacebookWords,
      activeInstagramWords,
      activeTiktokWords,
      activeYoutubeWords,
    ];
    const flatactiveWordsList = activeWordsList
      .flat()
      .filter((word): word is WordsProps => word !== undefined);
    setActiveWordsList(flatactiveWordsList);
  }, [
    activeFacebookWords,
    activeInstagramWords,
    activeTiktokWords,
    activeYoutubeWords,
  ]);

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
      <BaseCardHeader title="Nuvem de Palavras" />
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
      <BaseCardFooter text="Comparativo das palavras mais utilizadas." />
    </BaseCard>
  );
}
