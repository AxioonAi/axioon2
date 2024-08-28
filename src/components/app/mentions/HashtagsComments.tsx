"use client";
import { twMerge } from "tailwind-merge";
import { HashtagsCommentsSummary } from "./HashtagsCommentsSummary";
import { HashtagsCommentsDonutGraph } from "./HashtagsCommentsDonutGraph";
import { CommentsSentimentDonutGraphData } from "@/components/data/HomeData";
export function HashtagsComments() {
  return (
    <>
      <div className={twMerge("lg:col-span-5", "lg:row-span-4")}>
        <HashtagsCommentsSummary />
      </div>
      <div className={twMerge("lg:col-span-7", "lg:row-span-4")}>
        <HashtagsCommentsDonutGraph
          className="h-96"
          CommentsDonutGraphData={CommentsSentimentDonutGraphData}
        />
      </div>
    </>
  );
}
