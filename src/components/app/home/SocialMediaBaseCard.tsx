import Image from "next/image";
import { BaseCard } from "@/components/global/BaseCard/BaseCard";

interface SocialMediaBaseCardProps {
  SocialMediaData: {
    icon: string;
    name: string;
    username: string;
    dataPoints: {
      value: number;
      name: string;
    }[];
    description: string;
  };
}

export function SocialMediaBaseCard({
  SocialMediaData,
}: SocialMediaBaseCardProps) {
  return (
    <BaseCard className="gap-8">
      <div className="flex w-full items-center gap-4 border-b border-b-zinc-700/50 pb-2">
        <Image
          src={SocialMediaData.icon}
          alt="icon"
          width={200}
          height={200}
          className="h-16 w-16 rounded-lg"
          quality={100}
          priority
        />
        <div className="flex h-full flex-col justify-center">
          <strong className="text-lg leading-4">{SocialMediaData.name}</strong>
          <span>@{SocialMediaData.username}</span>
        </div>
      </div>
      <div className="flex w-full items-center justify-evenly">
        {SocialMediaData.dataPoints.map((dataPoint) => (
          <div
            className="flex flex-col items-center gap-1"
            key={dataPoint.name}
          >
            <strong>{dataPoint.value}</strong>
            <span className="text-sm">{dataPoint.name}</span>
          </div>
        ))}
      </div>
      <span className="text-xs">{SocialMediaData.description}</span>
    </BaseCard>
  );
}
