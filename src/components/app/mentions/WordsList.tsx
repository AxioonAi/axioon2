import { ChevronDown } from "lucide-react";
import { BaseCard } from "@/components/global/BaseCard/BaseCard";
import { BaseCardHeader } from "@/components/global/BaseCard/BaseCardHeader";
import { ListItemWithSentiment } from "@/components/global/List/ListItemWithSentiment";
import { BaseCardFooter } from "@/components/global/BaseCard/BaseCardFooter";

interface WordsListProps {
  WordsListData: {
    name: string;
    sentiment: string;
    value: number;
  }[];
}

export function WordsList({ WordsListData }: WordsListProps) {
  return (
    <BaseCard className="p-0">
      <BaseCardHeader
        title="Lista de Palavras"
        children={
          <div className="flex items-center gap-2 text-xs text-zinc-500">
            <span>Ver todos</span>
            <ChevronDown size={14} />
          </div>
        }
      />
      <div className="mb-12 flex h-60 w-full flex-col gap-8 overflow-y-scroll p-4 text-xs lg:mb-0 lg:h-3/4 lg:text-sm xl:h-[73%] 2xl:h-[77%] 2xl:text-base 3xl:h-4/5 3xl:text-lg">
        {WordsListData.map((word, index) => (
          <ListItemWithSentiment key={index} ListItemWithSentimentData={word} />
        ))}
      </div>
      <BaseCardFooter />
    </BaseCard>
  );
}
