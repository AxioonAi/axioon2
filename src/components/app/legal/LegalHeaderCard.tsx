"use client";
import { twMerge } from "tailwind-merge";
import Image from "next/image";
import { BaseCard } from "@/components/global/BaseCard/BaseCard";

interface LegalHeaderCardProps {
  title: string;
  color?: string;
}

export function LegalHeaderCard({
  title,
  color = "bg-sky-900",
}: LegalHeaderCardProps) {
  return (
    <BaseCard>
      <div className="flex h-full w-full justify-between">
        <div className="flex items-center pl-4">
          <div
            className={twMerge("absolute left-4 h-1/2 w-1 rounded", color)}
          />
          <strong>{title}</strong>
        </div>
        <div className="flex flex-col items-center gap-2 lg:flex-row">
          <button className="flex items-center gap-1 rounded bg-sky-600 px-1.5 py-1 text-[10px] text-white lg:text-xs 2xl:text-sm 3xl:text-base">
            <span>Relatório</span>
            <Image
              src="/Icons/download.svg"
              alt=""
              width={50}
              height={50}
              className="h-4 w-4"
            />
          </button>
        </div>
      </div>
    </BaseCard>
  );
}
