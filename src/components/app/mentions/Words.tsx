import { twMerge } from "tailwind-merge";
import { WordsList } from "./WordsList";
import { WordCloud } from "./WordCloud";
import { WordCloudData } from "@/components/data/MentionsData";
export function Words() {
  return (
    <>
      <div className={twMerge("lg:col-span-5", "lg:row-span-4")}>
        <WordsList />
      </div>
      <div className={twMerge("lg:col-span-7", "lg:row-span-4")}>
        <WordCloud WordCloudData={WordCloudData} />
      </div>
    </>
  );
}
