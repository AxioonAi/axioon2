"use client";
import { useEffect, useState } from "react";
import { twMerge } from "tailwind-merge";
import { CommentsSummary } from "./CommentsSummary";
import { GenderDonutGraph } from "./GenderDonutGraph";
import { useMentionsDataContext } from "@/context/MentionsData";
import { CommentsGenderDonutGraphData } from "@/components/data/MentionsData";
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
        <GenderDonutGraph
          className="h-96"
          GenderDonutGraphData={CommentsGenderDonutGraphData}
        />
      </div>
    </>
  );
}
