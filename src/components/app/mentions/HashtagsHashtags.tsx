"use client";
import { HashtagsWordCloudHashtags } from "./HashtagsWordCloudHashtags";
import { HashtagsWordsListHashtags } from "./HashtagsWordsListHashtags";
import { WordCloudData } from "@/components/data/MentionsData";
export function HashtagsHashtags() {
  return (
    <>
      <div className="lg:col-span-5 lg:row-span-4">
        <HashtagsWordsListHashtags />
      </div>
      <div className="lg:col-span-7 lg:row-span-4">
        <HashtagsWordCloudHashtags WordCloudData={WordCloudData} />
      </div>
    </>
  );
}
