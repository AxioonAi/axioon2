"use client";
import { useEffect, useState } from "react";
import { twMerge } from "tailwind-merge";
import { CommentsSummary } from "./CommentsSummary";
import { CommentsDonutGraph } from "./CommentsDonutGraph";
import { useMentionsDataContext } from "@/context/MentionsData";
import { CommentsSentimentDonutGraphData } from "@/components/data/HomeData";
export function Comments() {
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
        <CommentsSummary />
      </div>
      <div
        className={twMerge(
          "lg:col-span-7",
          isHashtagsEmpty ? "lg:row-span-6" : "lg:row-span-4",
        )}
      >
        <CommentsDonutGraph
          CommentsDonutGraphData={CommentsSentimentDonutGraphData}
        />
      </div>
    </>
  );
}
