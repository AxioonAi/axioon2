"use client";
import { useEffect, useState } from "react";
import { WordCloudHashtags } from "./WordCloudHashtags";
import { WordsListHashtags } from "./WordsListHashtags";
import { useMentionsDataContext } from "@/context/MentionsData";
import { WordCloudData } from "@/components/data/MentionsData";
export function Hashtags() {
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
      {isHashtagsEmpty ? (
        <></>
      ) : (
        <>
          <div className="lg:col-span-5 lg:row-span-4">
            <WordsListHashtags />
          </div>
          <div className="lg:col-span-7 lg:row-span-4">
            <WordCloudHashtags WordCloudData={WordCloudData} />
          </div>
        </>
      )}
    </>
  );
}
