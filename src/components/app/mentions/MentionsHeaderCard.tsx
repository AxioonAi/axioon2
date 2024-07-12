"use client";
import { twMerge } from "tailwind-merge";
import Image from "next/image";
import { BaseCard } from "@/components/global/BaseCard/BaseCard";

interface MentionsHeaderCardProps {
  title: string;
  color?: string;
}

export function MentionsHeaderCard({
  title,
  color = "bg-sky-900",
}: MentionsHeaderCardProps) {
  return (
    <BaseCard>
      <div className="flex h-full w-full justify-between">
        <div className="flex items-center pl-4">
          <div
            className={twMerge("absolute left-4 h-1/2 w-1 rounded", color)}
          />
          <strong>{title}</strong>
        </div>
        <div className="flex items-center gap-2">
          <button className="flex items-center gap-1 rounded bg-sky-700 px-1.5 py-1 text-sm text-white">
            <span>07/04/2024 - 07/06/2024</span>
            <Image
              src="/Icons/calendar.svg"
              alt=""
              width={50}
              height={50}
              className="h-4 w-4"
            />
          </button>
          <button className="flex items-center gap-1 rounded bg-sky-600 px-1.5 py-1 text-sm text-white">
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
