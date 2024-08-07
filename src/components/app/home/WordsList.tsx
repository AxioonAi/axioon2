"use client";
import { ChevronDown } from "lucide-react";
import { useEffect, useState } from "react";
import { twMerge } from "tailwind-merge";
import { BaseCard } from "@/components/global/BaseCard/BaseCard";
import { BaseCardHeader } from "@/components/global/BaseCard/BaseCardHeader";
import { BaseCardFooter } from "@/components/global/BaseCard/BaseCardFooter";
import { useSocialMediaDataContext } from "@/context/SocialMediaData";

interface WordsProps {
  text: string;
  value: number;
  sentimentSum: number;
  sentimentAvg: number;
}

export function WordsList() {
  const [facebookWords, setFacebookWords] = useState<WordsProps[]>();
  const [instagramWords, setInstagramWords] = useState<WordsProps[]>();
  const [tiktokWords, setTiktokWords] = useState<WordsProps[]>();
  const [youtubeWords, setYoutubeWords] = useState<WordsProps[]>();
  const [wordsList, setWordsList] = useState<WordsProps[]>([]);
  const { isGettingData, socialMediaData } = useSocialMediaDataContext();

  useEffect(() => {
    if (socialMediaData) {
      const facebookWordsData =
        socialMediaData.commentsData.wordCloud.facebook.words.map((word) => ({
          text: word.word,
          value: word.quantity,
          sentimentSum: word.sentimentSum,
          sentimentAvg: word.sentimentAvg,
        }));
      setFacebookWords(facebookWordsData);
      const instagramWordsData =
        socialMediaData.commentsData.wordCloud.instagram.words.map((word) => ({
          text: word.word,
          value: word.quantity,
          sentimentSum: word.sentimentSum,
          sentimentAvg: word.sentimentAvg,
        }));
      setInstagramWords(instagramWordsData);
      const tiktokWordsData =
        socialMediaData.commentsData.wordCloud.tiktok.words.map((word) => ({
          text: word.word,
          value: word.quantity,
          sentimentSum: word.sentimentSum,
          sentimentAvg: word.sentimentAvg,
        }));
      setTiktokWords(tiktokWordsData);
      const youtubeWordsData =
        socialMediaData.commentsData.wordCloud.youtube.words.map((word) => ({
          text: word.word,
          value: word.quantity,
          sentimentSum: word.sentimentSum,
          sentimentAvg: word.sentimentAvg,
        }));
      setYoutubeWords(youtubeWordsData);
    }
  }, [socialMediaData]);

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

    const orderedFlatWordsList = flatWordsList.sort(
      (a, b) => b.value - a.value,
    );
    console.log("orderedFlatWordsList: ", orderedFlatWordsList);
    setWordsList(orderedFlatWordsList);
  }, [facebookWords, instagramWords, tiktokWords, youtubeWords]);

  return (
    <BaseCard className="p-0">
      <BaseCardHeader
        title="Lista de Palavras"
        children={
          <div className="flex items-center gap-2 text-xs text-zinc-500">
            <span>Ver todos</span>
            <ChevronDown size={14} />
          </div>
        }
      />
      {isGettingData ? (
        <div className="h-full w-full bg-gradient-to-r from-gray-10 via-gray-20 to-gray-10" />
      ) : (
        <div className="mb-12 flex h-80 w-full flex-col gap-8 overflow-y-scroll p-4 lg:mb-0 lg:h-[74%] 2xl:h-3/4 3xl:h-4/5">
          {wordsList.map((word, index) => (
            <div
              key={index}
              className="flex w-full items-center justify-between"
            >
              <div className="flex items-center gap-2">
                <div className="flex h-10 w-10 items-center justify-center rounded-full bg-sky-500/10 p-2 text-sky-500">
                  {word.text.slice(0, 1)}
                </div>
                <div className="flex h-full flex-col justify-between">
                  <strong>{word.text}</strong>
                  <div className="flex items-center gap-1">
                    <span>Sentimento: </span>
                    <span
                      className={twMerge(
                        "text-sm",
                        word.sentimentAvg >= 651
                          ? "text-green-600"
                          : word.sentimentAvg < 650 && word.sentimentAvg >= 351
                            ? "text-violet-600"
                            : "text-red-600",
                      )}
                    >
                      {word.sentimentAvg.toFixed(2)}
                    </span>
                  </div>
                </div>
              </div>
              <strong> {word.value}</strong>
            </div>
          ))}
        </div>
      )}
      <BaseCardFooter />
    </BaseCard>
  );
}
