"use client";
import { BaseCard } from "@/components/global/BaseCard/BaseCard";
import { BaseCardFooter } from "@/components/global/BaseCard/BaseCardFooter";
import { BaseCardHeader } from "@/components/global/BaseCard/BaseCardHeader";
import { Skeleton } from "@/components/global/Skeleton";
import { useComparatorDataContext } from "@/context/ComparatorData";
import ParentSize from "@visx/responsive/lib/components/ParentSize";
import { scaleLog } from "@visx/scale";
import { Text } from "@visx/text";
import Wordcloud from "@visx/wordcloud/lib/Wordcloud";
import { useEffect, useState } from "react";
import { WordData } from "./ActiveWordCloud";

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
  const [facebookWords, setFacebookWords] = useState<WordsProps[]>([]);
  const [instagramWords, setInstagramWords] = useState<WordsProps[]>([]);
  const [tiktokWords, setTiktokWords] = useState<WordsProps[]>([]);
  const [youtubeWords, setYoutubeWords] = useState<WordsProps[]>([]);
  const [wordsList, setWordsList] = useState<WordsProps[]>([]);
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

  const colors = ["#143059", "#2F6B9A", "#82a6c2"];

  function wordFreq(text: string): WordData[] {
    const words: string[] = text.replace(/\./g, "").split(/\s/);
    const freqMap: Record<string, number> = {};

    for (const w of words) {
      if (!freqMap[w]) freqMap[w] = 0;
      freqMap[w] += 1;
    }
    return Object.keys(freqMap).map((word) => ({
      text: word,
      value: freqMap[word],
    }));
  }

  function getRotationDegree() {
    const rand = Math.random();
    const degree = rand > 0.5 ? 60 : -60;
    return rand * degree;
  }

  const fontScale = scaleLog({
    domain: [
      Math.min(...wordsList.map((w) => w.value)),
      Math.max(...wordsList.map((w) => w.value)),
    ],
    range: [10, 100],
  });
  const fontSizeSetter = (datum: WordData) => fontScale(datum.value);

  const fixedValueGenerator = () => 0.5;

  type SpiralType = "archimedean" | "rectangular";
  const [spiralType, setSpiralType] = useState<SpiralType>("archimedean");
  const [withRotation, setWithRotation] = useState(false);

  return (
    <BaseCard className="p-0">
      <BaseCardHeader title="Nuvem de Palavras" />
      {isGettingData ? (
        <Skeleton className="mx-auto mt-4 h-[17rem] w-11/12" />
      ) : (
        <div className="flex h-48 w-full flex-col lg:mb-0 lg:h-[calc(100%-5.5rem)]">
          {typeof window !== "undefined" &&
            wordsList &&
            wordsList.length !== 0 && (
              <ParentSize>
                {({ width, height }) => (
                  <Wordcloud
                    words={wordsList}
                    width={width}
                    height={height}
                    fontSize={fontSizeSetter}
                    font={"Impact"}
                    padding={2}
                    spiral={spiralType}
                    rotate={withRotation ? getRotationDegree : 0}
                    random={fixedValueGenerator}
                  >
                    {(cloudWords) =>
                      cloudWords.map((w, i) => (
                        <Text
                          key={`${i}` + w.text}
                          fill={colors[i % colors.length]}
                          textAnchor={"middle"}
                          transform={`translate(${w.x}, ${w.y}) rotate(${w.rotate})`}
                          fontSize={w.size}
                          fontFamily={w.font}
                        >
                          {w.text}
                        </Text>
                      ))
                    }
                  </Wordcloud>
                )}
              </ParentSize>
            )}
        </div>
      )}
      <BaseCardFooter text="Nuvem das palavras mais utilizadas do candidato 2." />
    </BaseCard>
  );
}
