"use client";
import { WordCloudHashtags } from "./WordCloudHashtags";
import { WordsListHashtags } from "./WordsListHashtags";
import { WordCloudData } from "@/components/data/MentionsData";

export function Hashtags() {
  return (
    <>
      <div className="lg:col-span-5 lg:row-span-4">
        <WordsListHashtags />
      </div>
      <div className="lg:col-span-7 lg:row-span-4">
        <WordCloudHashtags WordCloudData={WordCloudData} />
      </div>
    </>
  );
}
