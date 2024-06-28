import Image from "next/image";
import { twMerge } from "tailwind-merge";
import { BaseCard } from "@/components/global/BaseCard/BaseCard";

interface MentionsBaseCardProps {
  MentionsBaseCardData: {
    icon: string;
    color: string;
    value: number;
    description: string;
  };
}

export function MentionsBaseCard({
  MentionsBaseCardData,
}: MentionsBaseCardProps) {
  return (
    <BaseCard>
      <div className="flex h-full w-full gap-2">
        <div
          className={twMerge(
            "flex h-12 w-12 items-center justify-center rounded-lg p-2",
            MentionsBaseCardData.color,
          )}
        >
          <Image
            src={MentionsBaseCardData.icon}
            alt=""
            width={50}
            height={50}
            className="h-6 w-6"
          />
        </div>
        <div className="flex flex-col">
          <strong>{MentionsBaseCardData.value}</strong>
          <span className="text-zinc-500">
            {MentionsBaseCardData.description}
          </span>
        </div>
      </div>
    </BaseCard>
  );
}
