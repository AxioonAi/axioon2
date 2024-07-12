"use client";
import ReactWordcloud from "react-wordcloud";
import { EllipsisVertical } from "lucide-react";
import { BaseCard } from "@/components/global/BaseCard/BaseCard";
import { BaseCardHeader } from "@/components/global/BaseCard/BaseCardHeader";
import { BaseCardFooter } from "@/components/global/BaseCard/BaseCardFooter";

interface WordCloudProps {
  WordCloudData: {
    WordCloudWords: {
      text: string;
      value: number;
    }[];
    options: {
      rotations: number;
      colors: string[];
      fontWeight: string;
      fontFamily: string;
      fontSizes: [number, number];
    };
  };
}

export function WordCloud({ WordCloudData }: WordCloudProps) {
  return (
    <BaseCard className="p-0">
      <BaseCardHeader
        title="Nuvem de Palavras"
        children={
          <div className="flex h-8 w-8 items-center justify-center rounded-lg bg-zinc-100 text-zinc-700">
            <EllipsisVertical size={14} />
          </div>
        }
      />
      <div className="flex h-full max-h-[35vh] w-full flex-col">
        <ReactWordcloud
          words={WordCloudData.WordCloudWords}
          options={WordCloudData.options}
        />
      </div>
      <BaseCardFooter />
    </BaseCard>
  );
}
