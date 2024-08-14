import Image from "next/image";
import { twMerge } from "tailwind-merge";
import { BaseCard } from "@/components/global/BaseCard/BaseCard";
import { useSocialMediaDataContext } from "@/context/SocialMediaData";

interface SocialMediaBaseCardProps {
  SocialMediaData: {
    followers: number;
    following: number;
    name: string;
    posts: number;
    username?: string;
  } | null;
  platform: string;
}

export function SocialMediaBaseCard({
  SocialMediaData,
  platform,
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
      {SocialMediaData === null ? (
        <div
          className={twMerge(
            "absolute flex h-full w-full flex-col items-center justify-center rounded-lg bg-white/50 backdrop-blur-sm",
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
            O Perfil Selecionado Não Possui {platform} cadastrado
          </span>
        </div>
      ) : (
        <button
          onClick={() => {
            if (platform === "Facebook") {
              return setFacebook(!facebook);
            } else if (platform === "Instagram") {
              return setInstagram(!instagram);
            } else if (platform === "TikTok") {
              return setTiktok(!tiktok);
            } else {
              return setYoutube(!youtube);
            }
          }}
          className={twMerge(
            "flex flex-col p-2 xl:p-4",
            platform === "Facebook"
              ? facebook
                ? "opacity-100"
                : "opacity-50"
              : platform === "Instagram"
                ? instagram
                  ? "opacity-100"
                  : "opacity-50"
                : platform === "TikTok"
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
              src={"/Logos/" + platform + ".svg"}
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
                {SocialMediaData.username ? "@" + SocialMediaData.username : ""}
              </span>
            </div>
          </div>
          <div className="mt-1 flex w-full items-center justify-evenly">
            <div className="flex h-full flex-col items-center justify-center">
              <strong className="text-xs xl:text-sm 3xl:text-base">
                {SocialMediaData.posts}
              </strong>
              <span className="text-[10px] xl:text-xs 3xl:text-base">
                Posts
              </span>
            </div>
            <div className="flex h-full flex-col items-center justify-center">
              <strong className="text-xs xl:text-sm 3xl:text-base">
                {SocialMediaData.followers}
              </strong>
              <span className="text-[10px] xl:text-xs 3xl:text-base">
                Seguidores
              </span>
            </div>
            <div className="flex h-full flex-col items-center justify-center">
              <strong className="text-xs xl:text-sm 3xl:text-base">
                {SocialMediaData.following}
              </strong>
              <span className="text-[10px] xl:text-xs 3xl:text-base">
                Seguindo
              </span>
            </div>
          </div>
        </button>
      )}
    </BaseCard>
  );
}
