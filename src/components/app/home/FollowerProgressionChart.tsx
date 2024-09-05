"use client";
import { ApexOptions } from "apexcharts";
import { EllipsisVertical } from "lucide-react";
// import ReactApexChart from "react-apexcharts";
import { useEffect, useState } from "react";
import Image from "next/image";
import dynamic from "next/dynamic";
import { BaseCardHeader } from "@/components/global/BaseCard/BaseCardHeader";
import { BaseCard } from "@/components/global/BaseCard/BaseCard";
import { BaseCardFooter } from "@/components/global/BaseCard/BaseCardFooter";
import { useSocialMediaDataContext } from "@/context/SocialMediaData";
import { Skeleton } from "@/components/global/Skeleton";
const ReactApexChart = dynamic(() => import("react-apexcharts"), {
  ssr: false,
});

interface FollowerProgressionChartProps {
  FollowerProgressionChartData: {
    ChartOptions: {
      series: {
        name: string;
        type: string;
        data: number[];
      }[];
      options: ApexOptions;
    };
  };
}

interface FollowersEvolutionProps {
  date: string;
  followers: number;
}

interface SeriesProps {
  name: string;
  type: string;
  data: number[] | null;
}

export function FollowerProgressionChart({
  FollowerProgressionChartData,
}: FollowerProgressionChartProps) {
  const [selected, setSelected] = useState("facebook");
  const [facebookFollowers, setFacebookFollowers] = useState<
    FollowersEvolutionProps[]
  >([]);
  const [instagramFollowers, setInstagramFollowers] = useState<
    FollowersEvolutionProps[]
  >([]);
  const [tiktokFollowers, setTiktokFollowers] = useState<
    FollowersEvolutionProps[]
  >([]);
  const [youtubeFollowers, setYoutubeFollowers] = useState<
    FollowersEvolutionProps[]
  >([]);
  const [series, setSeries] = useState<SeriesProps[]>([]);
  const { isGettingData, socialMediaData } = useSocialMediaDataContext();

  useEffect(() => {
    if (socialMediaData) {
      setFacebookFollowers(
        socialMediaData.followersEvolution.facebook &&
          socialMediaData.followersEvolution.facebook.map((follower) => ({
            date: follower.date,
            followers: follower.followers_count,
          })),
      );
      setInstagramFollowers(
        socialMediaData.followersEvolution.instagram &&
          socialMediaData.followersEvolution.instagram.map((follower) => ({
            date: follower.date,
            followers: follower.followers,
          })),
      );
      setTiktokFollowers(
        socialMediaData.followersEvolution.tiktok &&
          socialMediaData.followersEvolution.tiktok.map((follower) => ({
            date: follower.date,
            followers: follower.fans,
          })),
      );
      setYoutubeFollowers(
        socialMediaData.followersEvolution.youtube &&
          socialMediaData.followersEvolution.youtube.map((follower) => ({
            date: follower.date,
            followers: follower.channel_total_subs,
          })),
      );
    }
  }, [socialMediaData]);

  useEffect(() => {
    const flatFacebookFollowers =
      facebookFollowers &&
      facebookFollowers.flat().filter((follower) => follower !== null);
    const orderedFlatFacebookFollowers =
      flatFacebookFollowers &&
      flatFacebookFollowers.sort(
        (a, b) => new Date(a.date).getTime() - new Date(b.date).getTime(),
      );
    const facebookSeries = [
      {
        name: "Facebook",
        type: "column",
        data: orderedFlatFacebookFollowers
          ? orderedFlatFacebookFollowers.map((follower) => follower.followers)
          : null,
      },
    ];
    const flatInstagramFollowers =
      instagramFollowers &&
      instagramFollowers.flat().filter((follower) => follower !== null);
    const orderedFlatInstagramFollowers =
      flatInstagramFollowers &&
      flatInstagramFollowers.sort(
        (a, b) => new Date(a.date).getTime() - new Date(b.date).getTime(),
      );
    const instagramSeries = [
      {
        name: "Instagram",
        type: "column",
        data: orderedFlatInstagramFollowers
          ? orderedFlatInstagramFollowers.map((follower) => follower.followers)
          : null,
      },
    ];
    const flatTikTokFollowers =
      tiktokFollowers &&
      tiktokFollowers.flat().filter((follower) => follower !== null);
    const orderedFlatTikTokFollowers =
      flatTikTokFollowers &&
      flatTikTokFollowers.sort(
        (a, b) => new Date(a.date).getTime() - new Date(b.date).getTime(),
      );
    const tikTokSeries = [
      {
        name: "TikTok",
        type: "column",
        data: orderedFlatTikTokFollowers
          ? orderedFlatTikTokFollowers.map((follower) => follower.followers)
          : null,
      },
    ];
    const flatYouTubeFollowers =
      youtubeFollowers &&
      youtubeFollowers.flat().filter((follower) => follower !== null);
    const orderedFlatYouTubeFollowers =
      flatYouTubeFollowers &&
      flatYouTubeFollowers.sort(
        (a, b) => new Date(a.date).getTime() - new Date(b.date).getTime(),
      );
    const youTubeSeries = [
      {
        name: "YouTube",
        type: "column",
        data: orderedFlatYouTubeFollowers
          ? orderedFlatYouTubeFollowers.map((follower) => follower.followers)
          : null,
      },
    ];
    if (selected === "facebook") {
      setSeries(facebookSeries);
    } else if (selected === "instagram") {
      setSeries(instagramSeries);
    } else if (selected === "tiktok") {
      setSeries(tikTokSeries);
    } else if (selected === "youtube") {
      setSeries(youTubeSeries);
    }
  }, [
    facebookFollowers,
    instagramFollowers,
    tiktokFollowers,
    youtubeFollowers,
    selected,
  ]);

  return (
    <BaseCard className="p-0">
      <BaseCardHeader
        title="Evolução de seguidores"
        children={
          <div className="flex h-8 w-8 items-center justify-center rounded-lg bg-zinc-100 text-zinc-700">
            <EllipsisVertical size={14} />
          </div>
        }
      />
      {isGettingData ? (
        <Skeleton className="mx-auto mt-4 h-80 w-11/12" />
      ) : (
        <div className="flex h-96 w-full flex-col justify-center lg:h-full">
          <div className="flex w-full items-center gap-4 overflow-y-hidden overflow-x-scroll px-4 py-8 lg:overflow-x-auto lg:p-2">
            <button
              onClick={() => setSelected("facebook")}
              className={`${
                selected === "facebook" && "bg-primary-100/20 text-primary-100"
              } flex h-10 cursor-pointer items-center gap-2 rounded-full border pr-4 text-sm text-primary-100/70 shadow-md transition duration-200 hover:bg-primary-100/20 hover:text-primary-100`}
            >
              <div className="flex h-10 w-10 items-center justify-center rounded-full bg-primary-100/20">
                <Image
                  className="rounded-md"
                  src="/Logos/FacebookLogo.png"
                  alt=""
                  width={24}
                  height={24}
                />
              </div>
              Facebook
            </button>
            <button
              onClick={() => setSelected("instagram")}
              className={`${
                selected === "instagram" && "bg-primary-100/20 text-primary-100"
              }cursor-pointer flex h-10 items-center gap-2 rounded-full border pr-4 text-sm text-primary-100/70 shadow-md transition duration-200 hover:bg-primary-100/20 hover:text-primary-100`}
            >
              <div className="flex h-10 w-10 items-center justify-center rounded-full bg-primary-100/20">
                <Image
                  className="rounded-md"
                  src="/Logos/InstagramLogo.png"
                  alt=""
                  width={24}
                  height={24}
                />
              </div>
              Instagram
            </button>
            <button
              onClick={() => setSelected("tiktok")}
              className={`${
                selected === "tiktok" && "bg-primary-100/20 text-primary-100"
              }cursor-pointer flex h-10 items-center gap-2 rounded-full border pr-4 text-sm text-primary-100/70 shadow-md transition duration-200 hover:bg-primary-100/20 hover:text-primary-100`}
            >
              <div className="flex h-10 w-10 items-center justify-center rounded-full bg-primary-100/20">
                <Image
                  className="rounded-md"
                  src="/Logos/TikTokLogo.png"
                  alt=""
                  width={24}
                  height={24}
                />
              </div>
              TikTok
            </button>
            <button
              onClick={() => setSelected("youtube")}
              className={`${
                selected === "youtube" && "bg-primary-100/20 text-primary-100"
              }cursor-pointer flex h-10 items-center gap-2 rounded-full border pr-4 text-sm text-primary-100/70 shadow-md transition duration-200 hover:bg-primary-100/20 hover:text-primary-100`}
            >
              <div className="flex h-10 w-10 items-center justify-center rounded-full bg-primary-100/20">
                <Image
                  className="rounded-md"
                  src="/Logos/YouTubeLogo.png"
                  alt=""
                  width={24}
                  height={24}
                />
              </div>
              YouTube
            </button>
          </div>
          <ReactApexChart
            options={FollowerProgressionChartData.ChartOptions.options}
            series={series.map((s) => ({ ...s, data: s.data || [] }))}
            type="line"
          />
        </div>
      )}
      <BaseCardFooter text="Seguidores por dia de cada Rede Social." />
    </BaseCard>
  );
}
