"use client";
import { ChevronDown } from "lucide-react";
import { BaseCard } from "@/components/global/BaseCard/BaseCard";
import { BaseCardHeader } from "@/components/global/BaseCard/BaseCardHeader";
import { ListItemWithDate } from "@/components/global/List/ListItemWithDate";
import { BaseCardFooter } from "@/components/global/BaseCard/BaseCardFooter";
import { useSocialMediaDataContext } from "@/context/SocialMediaData";

interface DefendantsAndDetractorsListProps {
  DefendantsAndDetractorsData: {
    name: string;
    date: string;
    value: number;
  }[];
}

export function DefendantsAndDetractorsList({
  DefendantsAndDetractorsData,
}: DefendantsAndDetractorsListProps) {
  const { isGettingData } = useSocialMediaDataContext();

  return (
    <BaseCard className="p-0">
      <BaseCardHeader
        title="Defensores e Detratores"
        children={
          <div className="flex items-center gap-2 text-xs text-zinc-500">
            <span>Ver todos</span>
            <ChevronDown size={14} />
          </div>
        }
      />
      {isGettingData ? (
        <div className="h-full w-full bg-gradient-to-r from-gray-10 via-gray-20 to-gray-10" />
      ) : (
        <div className="mb-12 flex h-80 w-full flex-col gap-8 overflow-y-scroll p-4 lg:mb-0 lg:h-[74%] 2xl:h-3/4 3xl:h-4/5">
          {DefendantsAndDetractorsData.map((user, index) => (
            <ListItemWithDate key={index} ListItemWithDateData={user} />
          ))}
        </div>
      )}
      <BaseCardFooter />
    </BaseCard>
  );
}
