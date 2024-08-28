"use client";
import { twMerge } from "tailwind-merge";
import { HashtagsWordsList } from "./HashtagsWordsList";
import { HashtagsWordCloud } from "./HashtagsWordCloud";
import { WordCloudData } from "@/components/data/MentionsData";
export function HashtagsWords() {
  return (
    <>
      <div className={twMerge("lg:col-span-5", "lg:row-span-4")}>
        <HashtagsWordsList />
      </div>
      <div className={twMerge("lg:col-span-7", "lg:row-span-4")}>
        <HashtagsWordCloud WordCloudData={WordCloudData} />
      </div>
    </>
  );
}
