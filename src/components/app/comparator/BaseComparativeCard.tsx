"use client";
import { ChevronDown } from "lucide-react";
import Image from "next/image";
import { BaseCard } from "@/components/global/BaseCard/BaseCard";
import { useComparatorDataContext } from "@/context/ComparatorData";

interface BaseComparativeCardProps {
  BaseComparativeCardData: {
    name: string;
    place: {
      city: string;
      state: string;
    };
    facebook: string;
    instagram: string;
    tiktok: string;
    youtube: string;
  };
}

export function BaseComparativeCard({
  BaseComparativeCardData,
}: BaseComparativeCardProps) {
  const { activeUserProfileData } = useComparatorDataContext();

  return (
    <BaseCard className="gap-2">
      <div className="flex w-full items-center justify-between">
        <div className="flex items-center gap-2">
          <span className="font-semibold">{activeUserProfileData?.name}</span>
          <span className="italic text-zinc-500">
            {activeUserProfileData?.city}
          </span>
        </div>
        <button className="flex items-center gap-1 rounded bg-sky-100 p-1 font-semibold text-sky-700">
          <span>Alterar</span>
          <ChevronDown size={14} />
        </button>
      </div>
      <div className="flex w-full flex-col items-center justify-evenly gap-1 lg:flex-row lg:flex-wrap">
        <div className="flex w-full items-center gap-1 rounded bg-zinc-50 p-1 text-xs italic shadow-md lg:w-2/5">
          <Image
            src="/Logos/facebook.svg"
            alt=""
            width={50}
            height={50}
            className="h-6 w-6 rounded"
          />
          <span>@{BaseComparativeCardData.facebook}</span>
        </div>
        <div className="flex w-full items-center gap-1 rounded bg-zinc-50 p-1 text-xs italic shadow-md lg:w-2/5">
          <Image
            src="/Logos/instagram.svg"
            alt=""
            width={50}
            height={50}
            className="h-6 w-6 rounded"
          />
          <span>@{BaseComparativeCardData.instagram}</span>
        </div>
        <div className="flex w-full items-center gap-1 rounded bg-zinc-50 p-1 text-xs italic shadow-md lg:w-2/5">
          <Image
            src="/Logos/tiktok.svg"
            alt=""
            width={50}
            height={50}
            className="h-6 w-6 rounded"
          />
          <span>@{BaseComparativeCardData.tiktok}</span>
        </div>
        <div className="flex w-full items-center gap-1 rounded bg-zinc-50 p-1 text-xs italic shadow-md lg:w-2/5">
          <Image
            src="/Logos/youtube.svg"
            alt=""
            width={50}
            height={50}
            className="h-6 w-6 rounded"
          />
          <span>@{BaseComparativeCardData.youtube}</span>
        </div>
      </div>
    </BaseCard>
  );
}
