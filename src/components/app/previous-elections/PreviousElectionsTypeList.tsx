"use client";
import { EllipsisVertical } from "lucide-react";
import { BaseCard } from "@/components/global/BaseCard/BaseCard";
import { BaseCardFooter } from "@/components/global/BaseCard/BaseCardFooter";
import { BaseCardHeader } from "@/components/global/BaseCard/BaseCardHeader";
import { ListItemWithType } from "@/components/global/List/ListItemWithType";

interface PreviousElectionTypeListsProps {
  PreviousElectionTypeListsData: {
    name: string;
    type: string;
    value: number;
  }[];
}

export function PreviousElectionsTypeList({
  PreviousElectionTypeListsData,
}: PreviousElectionTypeListsProps) {
  return (
    <BaseCard className="p-0">
      <BaseCardHeader
        title="Rank de doadores"
        children={
          <div className="flex h-8 w-8 items-center justify-center rounded-lg bg-zinc-100 text-zinc-700">
            <EllipsisVertical size={14} />
          </div>
        }
      />
      <div className="mb-12 flex h-80 w-full flex-col gap-8 overflow-y-scroll p-4 text-xs lg:mb-0 lg:h-[74%] lg:text-sm 2xl:h-3/4 2xl:text-base 3xl:h-4/5 3xl:text-lg">
        {PreviousElectionTypeListsData.map((item, index) => (
          <ListItemWithType key={index} ListItemWithTypeData={item} />
        ))}
      </div>
      <BaseCardFooter />
    </BaseCard>
  );
}
