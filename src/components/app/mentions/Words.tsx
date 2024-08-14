"use client";
import { useEffect, useState } from "react";
import { twMerge } from "tailwind-merge";
import { WordsList } from "./WordsList";
import { WordCloud } from "./WordCloud";
import { useMentionsDataContext } from "@/context/MentionsData";
import { WordCloudData } from "@/components/data/MentionsData";
export function Words() {
  const [isHashtagsEmpty, setIsHashtagsEmpty] = useState(true);
  const { mentionsData } = useMentionsDataContext();

  useEffect(() => {
    if (mentionsData) {
      if (
        mentionsData.hashtagCloud &&
        mentionsData.hashtagCloud.instagram &&
        mentionsData.hashtagCloud.instagram.words &&
        mentionsData.hashtagCloud.instagram.words.length > 0
      ) {
        setIsHashtagsEmpty(false);
      }
    }
  }, [mentionsData]);
  return (
    <>
      <div
        className={twMerge(
          "lg:col-span-5",
          isHashtagsEmpty ? "lg:row-span-6" : "lg:row-span-4",
        )}
      >
        <WordsList />
      </div>
      <div
        className={twMerge(
          "lg:col-span-7",
          isHashtagsEmpty ? "lg:row-span-6" : "lg:row-span-4",
        )}
      >
        <WordCloud WordCloudData={WordCloudData} />
      </div>
    </>
  );
}
