"use client";
import { EllipsisVertical } from "lucide-react";
import { BaseCard } from "@/components/global/BaseCard/BaseCard";
import { BaseCardFooter } from "@/components/global/BaseCard/BaseCardFooter";
import { BaseCardHeader } from "@/components/global/BaseCard/BaseCardHeader";
import { ListItemWithPrice } from "@/components/global/List/ListItemWithPrice";

interface PreviousElectionListsProps {
  PreviousElectionListsData: {
    name: string;
    quantity: number;
    value: number;
  }[];
}

export function PreviousElectionsLists({
  PreviousElectionListsData,
}: PreviousElectionListsProps) {
  return (
    <BaseCard className="p-0">
      <BaseCardHeader
        title="Defensores e Detratores"
        children={
          <div className="flex h-8 w-8 items-center justify-center rounded-lg bg-zinc-100 text-zinc-700">
            <EllipsisVertical size={14} />
          </div>
        }
      />
      <div className="mb-12 flex h-80 w-full flex-col gap-8 overflow-y-scroll p-4 text-xs lg:mb-0 lg:h-[74%] lg:text-sm 2xl:h-3/4 2xl:text-base 3xl:h-4/5 3xl:text-lg">
        {PreviousElectionListsData.map((item, index) => (
          <ListItemWithPrice key={index} ListItemWithPriceData={item} />
        ))}
      </div>
      <BaseCardFooter />
    </BaseCard>
  );
}
