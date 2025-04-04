"use client";
import { BaseCard } from "@/components/global/BaseCard/BaseCard";
import { BaseCardFooter } from "@/components/global/BaseCard/BaseCardFooter";
import { useComparatorDataContext } from "@/context/ComparatorData";
import ParentSize from "@visx/responsive/lib/components/ParentSize";
import { scaleLog } from "@visx/scale";
import { Text } from "@visx/text";
import Wordcloud from "@visx/wordcloud/lib/Wordcloud";
import { useEffect, useMemo, useState } from "react";

interface WordsProps {
  text: string;
  value: number;
}

export interface WordData {
  text: string;
  value: number;
}

export function MentionsCommentsWordCloudsComparison() {
  const {
    activeUserMentionsData,
    passiveUserMentionsData,
    activeUserProfileData,
    passiveUserProfileData,
  } = useComparatorDataContext();
  const [activeInstagramWords, setActiveInstagramWords] = useState<
    WordsProps[]
  >([]);
  const [passiveInstagramWords, setPassiveInstagramWords] = useState<
    WordsProps[]
  >([]);
  const [finalInstagramWords, setFinalInstagramWords] = useState<WordsProps[]>(
    [],
  );

  useEffect(() => {
    if (activeUserMentionsData) {
      const instagramWordsData =
        activeUserMentionsData.wordCloud.instagram.words.map((word) => ({
          text: word.word,
          value: word.quantity,
        }));
      setActiveInstagramWords(
        instagramWordsData.filter((word: WordsProps) => word !== undefined),
      );
    }
  }, [activeUserMentionsData]);

  useEffect(() => {
    if (passiveUserMentionsData) {
      const instagramWordsData =
        passiveUserMentionsData.wordCloud.instagram.words.map((word) => ({
          text: word.word,
          value: word.quantity,
        }));
      setPassiveInstagramWords(
        instagramWordsData.filter((word: WordsProps) => word !== undefined),
      );
    }
  }, [passiveUserMentionsData]);

  useEffect(() => {
    if (activeInstagramWords && passiveInstagramWords) {
      const arr1Words = activeInstagramWords.map((word) => word.text);
      const arr2Words = passiveInstagramWords.map((word) => word.text);
      const test = activeInstagramWords.filter((word1) =>
        arr2Words.includes(word1.text),
      );
      setFinalInstagramWords(test);
    }
  }, [activeInstagramWords, passiveInstagramWords]);

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

  const activeFontScale = scaleLog({
    domain: [
      Math.min(...activeInstagramWords.map((w) => w.value)),
      Math.max(...activeInstagramWords.map((w) => w.value)),
    ],
    range: [4, 40],
  });

  const passiveFontScale = scaleLog({
    domain: [
      Math.min(...passiveInstagramWords.map((w) => w.value)),
      Math.max(...passiveInstagramWords.map((w) => w.value)),
    ],
    range: [4, 40],
  });

  const finalFontScale = scaleLog({
    domain: [
      Math.min(...finalInstagramWords.map((w) => w.value)),
      Math.max(...finalInstagramWords.map((w) => w.value)),
    ],
    range: [4, 40],
  });

  const activeFontSizeSetter = (datum: WordData) =>
    activeFontScale(datum.value);
  const passiveFontSizeSetter = (datum: WordData) =>
    passiveFontScale(datum.value);
  const finalFontSizeSetter = (datum: WordData) => finalFontScale(datum.value);

  const fixedValueGenerator = () => 0.5;

  type SpiralType = "archimedean" | "rectangular";
  const [spiralType, setSpiralType] = useState<SpiralType>("archimedean");
  const [withRotation, setWithRotation] = useState(false);

  const sortedActiveWords = useMemo(
    () => activeInstagramWords.sort((a, b) => b.value - a.value).slice(0, 200),
    [activeInstagramWords],
  );

  const sortedPassiveWords = useMemo(
    () => passiveInstagramWords.sort((a, b) => b.value - a.value).slice(0, 200),
    [passiveInstagramWords],
  );

  const sortedFinalWords = useMemo(
    () => finalInstagramWords.sort((a, b) => b.value - a.value).slice(0, 200),
    [finalInstagramWords],
  );

  return (
    <BaseCard slit className="p-0 lg:col-span-12">
      <div className="relative flex w-full flex-col items-center justify-between border-b border-b-zinc-700/50 px-4 py-2 xl:px-8 xl:py-4">
        <strong className="text-sm lg:text-base xl:hidden 2xl:text-lg">
          NUVEM DE PALAVRAS
        </strong>
        <div className="flex w-full items-center justify-between">
          <div className="absolute left-2 h-1/2 w-1 rounded bg-sky-900 xl:left-4" />
          <strong className="text-xs lg:text-sm 2xl:text-base">
            {activeUserProfileData?.name}
          </strong>
          <strong className="hidden text-sm lg:text-base xl:block 2xl:text-lg">
            NUVEM DE PALAVRAS
          </strong>
          <strong className="text-xs lg:text-sm 2xl:text-base">
            {passiveUserProfileData?.name}
          </strong>
          <div className="absolute right-2 h-1/2 w-1 rounded bg-sky-900 xl:right-4" />
        </div>
      </div>

      <div className="flex w-full flex-col items-center justify-between gap-4 py-4 xl:flex-row">
        <div className="flex h-48 w-full flex-col lg:mb-0">
          {typeof window !== "undefined" &&
            activeInstagramWords &&
            activeInstagramWords.length !== 0 && (
              <ParentSize>
                {({ width, height }) => (
                  <Wordcloud
                    words={sortedActiveWords}
                    width={width}
                    height={height}
                    fontSize={activeFontSizeSetter}
                    font={"Impact"}
                    padding={2}
                    spiral={spiralType}
                    rotate={withRotation ? getRotationDegree : 0}
                    random={fixedValueGenerator}
                  >
                    {(activeWords) =>
                      activeWords.map((w, i) => (
                        <Text
                          key={`${i}active` + w.text}
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
        <div className="xl:h-11/12 my-auto h-px w-11/12 bg-black xl:w-1" />
        <div className="flex h-48 w-full flex-col lg:mb-0">
          {typeof window !== "undefined" &&
            finalInstagramWords &&
            finalInstagramWords.length !== 0 && (
              <ParentSize>
                {({ width, height }) => (
                  <Wordcloud
                    words={sortedFinalWords}
                    width={width}
                    height={height}
                    fontSize={finalFontSizeSetter}
                    font={"Impact"}
                    padding={2}
                    spiral={spiralType}
                    rotate={withRotation ? getRotationDegree : 0}
                    random={fixedValueGenerator}
                  >
                    {(finalWords) =>
                      finalWords.map((w, i) => (
                        <Text
                          key={`${i}final` + w.text}
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
        <div className="xl:h-11/12 my-auto h-px w-11/12 bg-black xl:w-1" />
        <div className="flex h-48 w-full flex-col lg:mb-0">
          {typeof window !== "undefined" &&
            passiveInstagramWords &&
            passiveInstagramWords.length !== 0 && (
              <ParentSize>
                {({ width, height }) => (
                  <Wordcloud
                    words={sortedPassiveWords}
                    width={width}
                    height={height}
                    fontSize={passiveFontSizeSetter}
                    font={"Impact"}
                    padding={2}
                    spiral={spiralType}
                    rotate={withRotation ? getRotationDegree : 0}
                    random={fixedValueGenerator}
                  >
                    {(passiveWords) =>
                      passiveWords.map((w, i) => (
                        <Text
                          key={`${i}passive` + w.text}
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
      </div>
      <BaseCardFooter text="Comentários por rede social." />
    </BaseCard>
  );
}
