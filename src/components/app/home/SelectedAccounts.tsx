"use client";
import Image from "next/image";
import { BaseCard } from "@/components/global/BaseCard/BaseCard";
import { useSocialMediaDataContext } from "@/context/SocialMediaData";
import { Skeleton } from "@/components/global/Skeleton";

export function SelectedAccounts() {
  const {
    facebook,
    instagram,
    tiktok,
    youtube,
    socialMediaData,
    isGettingData,
  } = useSocialMediaDataContext();
  return (
    <BaseCard className="items-center">
      {isGettingData ? (
        <Skeleton className="h-10 w-full" />
      ) : (
        <div className="flex w-full flex-col items-center justify-between lg:flex-row">
          <span className="font-semibold">Redes Sociais Selecionadas:</span>
          <span className="text-sm text-zinc-400">
            Clique nos botões acima para alterar quais redes devem ser exibidas
          </span>
          <div className="flex w-48 items-center justify-end gap-2">
            {socialMediaData?.staticData.facebookData && facebook && (
              <Image
                src="/Logos/facebookLogo.png"
                alt=""
                width={200}
                height={200}
                className="h-10 w-10 rounded-md object-cover"
              />
            )}
            {socialMediaData?.staticData.instagramData && instagram && (
              <Image
                src="/Logos/instagramLogo.png"
                alt=""
                width={200}
                height={200}
                className="h-10 w-10 rounded-md object-cover"
              />
            )}
            {socialMediaData?.staticData.tiktokData && tiktok && (
              <Image
                src="/Logos/tiktokLogo.png"
                alt=""
                width={200}
                height={200}
                className="h-10 w-10 rounded-md object-cover"
              />
            )}
            {socialMediaData?.staticData.youtubeData && youtube && (
              <Image
                src="/Logos/youtubeLogo.png"
                alt=""
                width={200}
                height={200}
                className="h-10 w-10 rounded-md object-cover"
              />
            )}
          </div>
        </div>
      )}
    </BaseCard>
  );
}
