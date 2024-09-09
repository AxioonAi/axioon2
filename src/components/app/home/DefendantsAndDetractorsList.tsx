"use client";
import { ChevronDown } from "lucide-react";
import { useEffect, useState } from "react";
import { twMerge } from "tailwind-merge";
import {
  Popover,
  PopoverArrow,
  PopoverContent,
  PopoverTrigger,
} from "@radix-ui/react-popover";
import { BaseCard } from "@/components/global/BaseCard/BaseCard";
import { BaseCardHeader } from "@/components/global/BaseCard/BaseCardHeader";
import { BaseCardFooter } from "@/components/global/BaseCard/BaseCardFooter";
import { useSocialMediaDataContext } from "@/context/SocialMediaData";
import { Skeleton } from "@/components/global/Skeleton";

interface EngagersProps {
  comments: number;
  followers: number;
  id: string;
  negativeComments: number;
  neutralComments: number;
  positiveComments: number;
  sentiment: number;
  userName: string;
}

export function DefendantsAndDetractorsList() {
  const [facebookEngagers, setFacebookEngagers] = useState<EngagersProps[]>([]);
  const [instagramEngagers, setInstagramEngagers] = useState<EngagersProps[]>(
    [],
  );
  const [tiktokEngagers, setTiktokEngagers] = useState<EngagersProps[]>([]);
  const [youtubeEngagers, setYoutubeEngagers] = useState<EngagersProps[]>([]);
  const [engagersList, setEngagersList] = useState<EngagersProps[]>([]);
  const { isGettingData, socialMediaData } = useSocialMediaDataContext();
  const [filter, setFilter] = useState<string>("desc");

  useEffect(() => {
    if (socialMediaData) {
      setFacebookEngagers(socialMediaData.commentsData.engagers.facebook);
      setInstagramEngagers(socialMediaData.commentsData.engagers.instagram);
      setTiktokEngagers(socialMediaData.commentsData.engagers.tiktok);
      setYoutubeEngagers(socialMediaData.commentsData.engagers.youtube);
    }
  }, [socialMediaData]);

  useEffect(() => {
    const engagers = [
      facebookEngagers,
      instagramEngagers,
      tiktokEngagers,
      youtubeEngagers,
    ];
    const flatEngagers = engagers
      .flat()
      .filter((engager) => engager !== null)
      .filter((engager) => engager !== undefined);

    const sortedFlatEngagers = flatEngagers.sort(
      (a, b) => b.comments - a.comments,
    );

    setEngagersList(sortedFlatEngagers);
  }, [facebookEngagers, instagramEngagers, tiktokEngagers, youtubeEngagers]);

  return (
    <BaseCard className="p-0">
      <BaseCardHeader
        title="Defensores e Detratores"
        children={
          <Popover>
            <PopoverTrigger asChild>
              <button className="flex items-center gap-2 text-xs text-zinc-500">
                <span>Filtros</span>
                <ChevronDown size={14} />
              </button>
            </PopoverTrigger>
            <PopoverContent className="z-[9999] flex w-40 flex-col overflow-hidden rounded-md border border-zinc-400 bg-white shadow outline-none">
              <PopoverArrow />
              <button
                onClick={() => setFilter("desc")}
                className={twMerge(
                  "flex w-full items-center justify-center border-y border-y-zinc-200 p-1 text-xs transition duration-100 hover:bg-darkBlueAxion/10",
                  filter === "desc" && "bg-darkBlueAxion/10",
                )}
              >
                Defensores
              </button>
              <button
                onClick={() => setFilter("asc")}
                className={twMerge(
                  "flex w-full items-center justify-center border-y border-y-zinc-200 p-1 text-xs transition duration-100 hover:bg-darkBlueAxion/10",
                  filter === "asc" && "bg-darkBlueAxion/10",
                )}
              >
                Detratores
              </button>
              <button
                onClick={() => setFilter("ascPosts")}
                className={twMerge(
                  "flex w-full items-center justify-center border-y border-y-zinc-200 p-1 text-xs transition duration-100 hover:bg-darkBlueAxion/10",
                  filter === "ascPosts" && "bg-darkBlueAxion/10",
                )}
              >
                Mais Ativos
              </button>
              <button
                onClick={() => setFilter("descPosts")}
                className={twMerge(
                  "flex w-full items-center justify-center border-y border-y-zinc-200 p-1 text-xs transition duration-100 hover:bg-darkBlueAxion/10",
                  filter === "descPosts" && "bg-darkBlueAxion/10",
                )}
              >
                Menos Ativos
              </button>
            </PopoverContent>
          </Popover>
        }
      />
      {isGettingData ? (
        <Skeleton className="mx-auto mt-4 h-[17rem] w-11/12" />
      ) : (
        <div className="flex h-80 w-full flex-col gap-4 overflow-y-scroll p-4 lg:mb-0 lg:h-[74%] 2xl:h-3/4 3xl:h-4/5">
          {engagersList
            .sort((a, b) =>
              filter === "asc"
                ? a.sentiment - b.sentiment
                : filter === "desc"
                  ? b.sentiment - a.sentiment
                  : filter === "ascPosts"
                    ? b.comments - a.comments
                    : a.comments - b.comments,
            )
            .map((user, index) => (
              <div
                key={index}
                className="flex w-full items-center justify-between"
              >
                <div className="flex w-full items-center gap-2">
                  <div className="flex h-10 w-10 items-center justify-center rounded-full bg-sky-500/10 p-2 text-base text-sky-500">
                    {user.userName.slice(0, 1)}
                  </div>
                  <div className="flex h-full w-full flex-col justify-between text-xs lg:text-sm 3xl:text-base">
                    <strong className="w-48 truncate md:w-full lg:w-32 xl:w-60 2xl:w-full">
                      {user.userName}
                    </strong>
                    <span className="text-[10px] lg:text-xs xl:text-sm">
                      {user.sentiment >= 500 ? "Defensor" : "Detrator"} {""}
                      <span
                        className={twMerge(
                          "font-semibold",
                          user.sentiment >= 650
                            ? "text-green-500"
                            : user.sentiment < 650 && user.sentiment >= 450
                              ? "text-violet-600"
                              : "text-red-500",
                        )}
                      >
                        {user.sentiment.toFixed(1)}
                      </span>
                    </span>
                  </div>
                </div>
                <strong> {user.comments}</strong>
              </div>
            ))}
        </div>
      )}
      <BaseCardFooter text="Lista dos principais comentadores por sentimento." />
    </BaseCard>
  );
}
