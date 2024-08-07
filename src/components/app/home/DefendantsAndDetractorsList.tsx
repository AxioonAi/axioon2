"use client";
import { ChevronDown } from "lucide-react";
import { useEffect, useState } from "react";
import { BaseCard } from "@/components/global/BaseCard/BaseCard";
import { BaseCardHeader } from "@/components/global/BaseCard/BaseCardHeader";
import { BaseCardFooter } from "@/components/global/BaseCard/BaseCardFooter";
import { useSocialMediaDataContext } from "@/context/SocialMediaData";

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
          {engagersList.map((user, index) => (
            <div
              key={index}
              className="flex w-full items-center justify-between"
            >
              <div className="flex items-center gap-2">
                <div className="flex h-10 w-10 items-center justify-center rounded-full bg-sky-500/10 p-2 text-sky-500">
                  {user.userName.slice(0, 1)}
                </div>
                <div className="flex h-full flex-col justify-between">
                  <strong>{user.userName}</strong>
                  <span className="text-sm text-zinc-500">
                    Sentimento: {user.sentiment}
                  </span>
                </div>
              </div>
              <strong> {user.comments}</strong>
            </div>
          ))}
        </div>
      )}
      <BaseCardFooter />
    </BaseCard>
  );
}
