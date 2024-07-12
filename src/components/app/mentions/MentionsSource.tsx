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
          <strong className="text-xl">{MentionsSourceData.value}</strong>
          <span className="text-sm text-zinc-500">Menções Totais</span>
        </div>
        <div className="flex h-[62%] w-full flex-col gap-2 overflow-y-scroll p-4">
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
