import { EllipsisVertical, TrendingDown, TrendingUp } from "lucide-react";
import Image from "next/image";
import { BaseCard } from "@/components/global/BaseCard/BaseCard";
import { BaseCardHeader } from "@/components/global/BaseCard/BaseCardHeader";
import { BaseCardFooter } from "@/components/global/BaseCard/BaseCardFooter";

interface MentionsSourceProps {
  MentionsSourceData: {
    value: number;
    sources: {
      name: string;
      icon: string;
      trendingUp: boolean;
      value: number;
    }[];
  };
}

export function MentionsSource({ MentionsSourceData }: MentionsSourceProps) {
  return (
    <BaseCard className="p-0">
      <BaseCardHeader
        title="Menções por Fontes"
        children={
          <div className="flex h-8 w-8 items-center justify-center rounded-lg bg-zinc-100 text-zinc-700">
            <EllipsisVertical size={14} />
          </div>
        }
      />
      <div className="flex h-full w-full flex-col">
        <div className="flex items-center gap-1 px-8 py-2">
          <strong className="text-sm lg:text-base 2xl:text-lg 3xl:text-xl">
            {MentionsSourceData.value}
          </strong>
          <span className="text-xs text-zinc-500 lg:text-sm 2xl:text-base 3xl:text-lg">
            Menções Totais
          </span>
        </div>
        <div className="mb-12 flex h-80 w-full flex-col gap-4 overflow-y-scroll p-4 text-sm lg:mb-0 lg:h-[59%] lg:gap-8 lg:text-base xl:h-3/5 2xl:h-[62%] 2xl:text-lg 3xl:h-[70%] 3xl:text-xl">
          {MentionsSourceData.sources.map((source, index) => (
            <div className="flex items-center" key={index}>
              <div className="flex w-1/2 items-center gap-2">
                <Image
                  alt=""
                  src={source.icon}
                  width={50}
                  height={50}
                  className="h-6 w-6 rounded"
                />
                <span>{source.name}</span>
              </div>
              <div className="flex w-1/2 items-center justify-between gap-2">
                {source.trendingUp ? (
                  <TrendingUp className="h-6 w-6 text-green-600" />
                ) : (
                  <TrendingDown className="h-6 w-6 text-red-600" />
                )}
                <span>{source.value}</span>
              </div>
            </div>
          ))}
        </div>
      </div>
      <BaseCardFooter />
    </BaseCard>
  );
}
