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

export function CommentsWordCloudsComparison() {
  const {
    activeUserData,
    passiveUserData,
    activeUserProfileData,
    passiveUserProfileData,
  } = useComparatorDataContext();
  const [activeFacebookWords, setActiveFacebookWords] = useState<WordsProps[]>(
    [],
  );
  const [activeInstagramWords, setActiveInstagramWords] = useState<
    WordsProps[]
  >([]);
  const [activeTiktokWords, setActiveTiktokWords] = useState<WordsProps[]>([]);
  const [activeYoutubeWords, setActiveYoutubeWords] = useState<WordsProps[]>(
    [],
  );
  const [activeWordsList, setActiveWordsList] = useState<WordsProps[]>([]);
  const [passiveFacebookWords, setPassiveFacebookWords] = useState<
    WordsProps[]
  >([]);
  const [passiveInstagramWords, setPassiveInstagramWords] = useState<
    WordsProps[]
  >([]);
  const [passiveTiktokWords, setPassiveTiktokWords] = useState<WordsProps[]>(
    [],
  );
  const [passiveYoutubeWords, setPassiveYoutubeWords] = useState<WordsProps[]>(
    [],
  );
  const [passiveWordsList, setPassiveWordsList] = useState<WordsProps[]>([]);
  const [finalWordsList, setFinalWordsList] = useState<WordsProps[]>([]);

  useEffect(() => {
    if (activeUserData) {
      const facebookWordsData =
        activeUserData.commentsData.wordCloud.facebook.words.map((word) => ({
          text: word.word,
          value: word.quantity,
        }));
      setActiveFacebookWords(facebookWordsData);
      const instagramWordsData =
        activeUserData.commentsData.wordCloud.instagram.words.map((word) => ({
          text: word.word,
          value: word.quantity,
        }));
      setActiveInstagramWords(instagramWordsData);
      const tiktokWordsData =
        activeUserData.commentsData.wordCloud.tiktok.words.map((word) => ({
          text: word.word,
          value: word.quantity,
        }));
      setActiveTiktokWords(tiktokWordsData);
      const youtubeWordsData =
        activeUserData.commentsData.wordCloud.youtube.words.map((word) => ({
          text: word.word,
          value: word.quantity,
        }));
      setActiveYoutubeWords(youtubeWordsData);
    }
  }, [activeUserData]);

  useEffect(() => {
    const wordsList = [
      activeFacebookWords,
      activeInstagramWords,
      activeTiktokWords,
      activeYoutubeWords,
    ];
    const flatWordsList = wordsList
      .flat()
      .filter((word): word is WordsProps => word !== undefined);
    setActiveWordsList(flatWordsList);
  }, [
    activeFacebookWords,
    activeInstagramWords,
    activeTiktokWords,
    activeYoutubeWords,
  ]);

  useEffect(() => {
    if (passiveUserData) {
      const facebookWordsData =
        passiveUserData.commentsData.wordCloud.facebook.words.map((word) => ({
          text: word.word,
          value: word.quantity,
        }));
      setPassiveFacebookWords(facebookWordsData);
      const instagramWordsData =
        passiveUserData.commentsData.wordCloud.instagram.words.map((word) => ({
          text: word.word,
          value: word.quantity,
        }));
      setPassiveInstagramWords(instagramWordsData);
      const tiktokWordsData =
        passiveUserData.commentsData.wordCloud.tiktok.words.map((word) => ({
          text: word.word,
          value: word.quantity,
        }));
      setPassiveTiktokWords(tiktokWordsData);
      const youtubeWordsData =
        passiveUserData.commentsData.wordCloud.youtube.words.map((word) => ({
          text: word.word,
          value: word.quantity,
        }));
      setPassiveYoutubeWords(youtubeWordsData);
    }
  }, [passiveUserData]);

  useEffect(() => {
    const wordsList = [
      passiveFacebookWords,
      passiveInstagramWords,
      passiveTiktokWords,
      passiveYoutubeWords,
    ];
    const flatWordsList = wordsList
      .flat()
      .filter((word): word is WordsProps => word !== undefined);
    setPassiveWordsList(flatWordsList);
  }, [
    passiveFacebookWords,
    passiveInstagramWords,
    passiveTiktokWords,
    passiveYoutubeWords,
  ]);

  useEffect(() => {
    if (activeInstagramWords && passiveInstagramWords) {
      const arr1Words = activeInstagramWords.map((word) => word.text);
      const arr2Words = passiveInstagramWords.map((word) => word.text);
      const test = activeInstagramWords.filter((word1) =>
        arr2Words.includes(word1.text),
      );
      setFinalWordsList(test);
    }
  }, [activeInstagramWords, passiveInstagramWords]);

  const colors = ["#143059", "#2F6B9A", "#82a6c2"];

  function getRotationDegree() {
    const rand = Math.random();
    const degree = 0;
    return rand * degree;
  }

  const activeFontScale = scaleLog({
    domain: [
      Math.min(...activeWordsList.map((w) => w.value)),
      Math.max(...activeWordsList.map((w) => w.value)),
    ],
    range: [4, 40],
  });

  const passiveFontScale = scaleLog({
    domain: [
      Math.min(...passiveWordsList.map((w) => w.value)),
      Math.max(...passiveWordsList.map((w) => w.value)),
    ],
    range: [4, 40],
  });

  const finalFontScale = scaleLog({
    domain: [
      Math.min(...finalWordsList.map((w) => w.value)),
      Math.max(...finalWordsList.map((w) => w.value)),
    ],
    range: [4, 40],
  });
  const activeFontSizeSetter = (datum: WordData) =>
    activeFontScale(datum.value);
  const passiveFontSizeSetter = (datum: WordData) =>
    passiveFontScale(datum.value);
  const finalFontSizeSetter = (datum: WordData) => finalFontScale(datum.value);

  const fixedValueGenerator = () => 0;

  type SpiralType = "archimedean" | "rectangular";
  const [spiralType, setSpiralType] = useState<SpiralType>("archimedean");
  const [withRotation, setWithRotation] = useState(false);

  const sortedActiveWords = useMemo(
    () => activeWordsList.sort((a, b) => b.value - a.value).slice(0, 200),
    [activeWordsList],
  );

  const sortedPassiveWords = useMemo(
    () => passiveWordsList.sort((a, b) => b.value - a.value).slice(0, 200),
    [passiveWordsList],
  );

  const sortedFinalWords = useMemo(
    () => finalWordsList.sort((a, b) => b.value - a.value).slice(0, 200),
    [finalWordsList],
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
            activeWordsList &&
            activeWordsList.length !== 0 && (
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
        <div className="xl:h-11/12 my-auto h-px w-11/12 bg-black xl:w-1" />
        <div className="flex h-48 w-full flex-col lg:mb-0">
          {typeof window !== "undefined" &&
            sortedFinalWords &&
            sortedFinalWords.length !== 0 && (
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
        <div className="xl:h-11/12 my-auto h-px w-11/12 bg-black xl:w-1" />
        <div className="flex h-48 w-full flex-col lg:mb-0">
          {typeof window !== "undefined" &&
            passiveWordsList &&
            passiveWordsList.length !== 0 && (
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
      </div>
      <BaseCardFooter text="Comentários por rede social." />
    </BaseCard>
  );
}
