import Image from "next/image";
import { twMerge } from "tailwind-merge";
import { BaseCard } from "@/components/global/BaseCard/BaseCard";
import { useSocialMediaDataContext } from "@/context/SocialMediaData";

interface SocialMediaBaseCardProps {
  SocialMediaData: {
    icon: string;
    name: string;
    username: string;
    dataPoints: {
      value: number;
      name: string;
    }[];
    exists: boolean;
    platformName: string;
  };
}

export function SocialMediaBaseCard({
  SocialMediaData,
}: SocialMediaBaseCardProps) {
  const {
    setFacebook,
    setInstagram,
    setTiktok,
    setYoutube,
    facebook,
    instagram,
    tiktok,
    youtube,
  } = useSocialMediaDataContext();
  return (
    <BaseCard className="relative h-36 gap-8 overflow-hidden p-0">
      <div
        className={twMerge(
          "absolute flex h-full w-full flex-col items-center justify-center rounded-lg bg-white/50 backdrop-blur-sm",
          SocialMediaData.exists && "hidden",
        )}
      >
        <Image
          src="/Icons/noSocialMedia.svg"
          alt=""
          width={50}
          height={50}
          className="h-10 w-10"
        />
        <span className="w-2/3 text-center text-xs font-semibold italic">
          O Perfil Selecionado Não Possui {SocialMediaData.platformName}{" "}
          cadastrado
        </span>
      </div>
      <button
        onClick={() => {
          if (SocialMediaData.platformName === "Facebook") {
            return setFacebook(!facebook);
          } else if (SocialMediaData.platformName === "Instagram") {
            return setInstagram(!instagram);
          } else if (SocialMediaData.platformName === "TikTok") {
            return setTiktok(!tiktok);
          } else {
            return setYoutube(!youtube);
          }
        }}
        className={twMerge(
          "flex flex-col p-2 xl:p-4",
          SocialMediaData.platformName === "Facebook"
            ? facebook
              ? "opacity-100"
              : "opacity-50"
            : SocialMediaData.platformName === "Instagram"
              ? instagram
                ? "opacity-100"
                : "opacity-50"
              : SocialMediaData.platformName === "TikTok"
                ? tiktok
                  ? "opacity-100"
                  : "opacity-50"
                : youtube
                  ? "opacity-100"
                  : "opacity-50",
        )}
      >
        <div className="flex w-full items-center gap-4 border-b border-b-zinc-700/50 pb-2">
          <Image
            src={SocialMediaData.icon}
            alt="icon"
            width={200}
            height={200}
            className="h-8 w-8 rounded-lg xl:h-14 xl:w-14"
            quality={100}
            priority
          />
          <div className="flex h-full flex-col justify-center">
            <strong className="text-[10px] leading-4 xl:text-xs 3xl:text-sm">
              {SocialMediaData.name}
            </strong>
            <span className="text-xs xl:text-sm 3xl:text-base">
              @{SocialMediaData.username}
            </span>
          </div>
        </div>
        <div className="mt-1 flex w-full items-center justify-evenly">
          {SocialMediaData.dataPoints.map((dataPoint) => (
            <div
              className="flex h-full flex-col items-center justify-center"
              key={dataPoint.name}
            >
              <strong className="text-xs xl:text-sm 3xl:text-base">
                {dataPoint.value}
              </strong>
              <span className="text-[10px] xl:text-xs 3xl:text-base">
                {dataPoint.name}
              </span>
            </div>
          ))}
        </div>
      </button>
    </BaseCard>
  );
}
