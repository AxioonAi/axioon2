"use client";
import { ApexOptions } from "apexcharts";
import { EllipsisVertical } from "lucide-react";
import ReactApexChart from "react-apexcharts";
import { useEffect, useState } from "react";
import Image from "next/image";
import { BaseCardHeader } from "@/components/global/BaseCard/BaseCardHeader";
import { BaseCard } from "@/components/global/BaseCard/BaseCard";
import { BaseCardFooter } from "@/components/global/BaseCard/BaseCardFooter";
import { useSocialMediaDataContext } from "@/context/SocialMediaData";

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
  data: number[];
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
  // const [dates, setDates] = useState<string[]>([]);
  const { isGettingData, socialMediaData } = useSocialMediaDataContext();

  useEffect(() => {
    if (socialMediaData) {
      setFacebookFollowers(
        socialMediaData.followersEvolution.facebook.map((follower) => ({
          date: follower.date,
          followers: follower.followers_count,
        })),
      );
      setInstagramFollowers(
        socialMediaData.followersEvolution.instagram.map((follower) => ({
          date: follower.date,
          followers: follower.followers,
        })),
      );
      setTiktokFollowers(
        socialMediaData.followersEvolution.tiktok.map((follower) => ({
          date: follower.date,
          followers: follower.fans,
        })),
      );
      setYoutubeFollowers(
        socialMediaData.followersEvolution.youtube.map((follower) => ({
          date: follower.date,
          followers: follower.channel_total_subs,
        })),
      );
    }
  }, [socialMediaData]);

  useEffect(() => {
    const flatFacebookFollowers = facebookFollowers
      .flat()
      .filter((follower) => follower !== null);
    const orderedFlatFacebookFollowers = flatFacebookFollowers.sort(
      (a, b) => new Date(a.date).getTime() - new Date(b.date).getTime(),
    );
    const facebookSeries = [
      {
        name: "Facebook",
        type: "column",
        data: orderedFlatFacebookFollowers.map(
          (follower) => follower.followers,
        ),
      },
    ];

    // const facebookDates = orderedFlatFacebookFollowers.map(
    //   (follower) => follower.date,
    // );

    const flatInstagramFollowers = instagramFollowers
      .flat()
      .filter((follower) => follower !== null);
    const orderedFlatInstagramFollowers = flatInstagramFollowers.sort(
      (a, b) => new Date(a.date).getTime() - new Date(b.date).getTime(),
    );
    const instagramSeries = [
      {
        name: "Instagram",
        type: "column",
        data: orderedFlatInstagramFollowers.map(
          (follower) => follower.followers,
        ),
      },
    ];

    // const instagramDates = orderedFlatInstagramFollowers.map(
    //   (follower) => follower.date,
    // );

    const flatTikTokFollowers = tiktokFollowers
      .flat()
      .filter((follower) => follower !== null);
    const orderedFlatTikTokFollowers = flatTikTokFollowers.sort(
      (a, b) => new Date(a.date).getTime() - new Date(b.date).getTime(),
    );
    const tikTokSeries = [
      {
        name: "TikTok",
        type: "column",
        data: orderedFlatTikTokFollowers.map((follower) => follower.followers),
      },
    ];

    // const tikTokDates = orderedFlatTikTokFollowers.map(
    //   (follower) => follower.date,
    // );

    const flatYouTubeFollowers = youtubeFollowers
      .flat()
      .filter((follower) => follower !== null);
    const orderedFlatYouTubeFollowers = flatYouTubeFollowers.sort(
      (a, b) => new Date(a.date).getTime() - new Date(b.date).getTime(),
    );
    const youTubeSeries = [
      {
        name: "YouTube",
        type: "column",
        data: orderedFlatYouTubeFollowers.map((follower) => follower.followers),
      },
    ];

    // const youTubeDates = orderedFlatYouTubeFollowers.map(
    //   (follower) => follower.date,
    // );

    if (selected === "facebook") {
      setSeries(facebookSeries);
      // setDates(facebookDates);
    } else if (selected === "instagram") {
      setSeries(instagramSeries);
      // setDates(instagramDates);
    } else if (selected === "tiktok") {
      setSeries(tikTokSeries);
      // setDates(tikTokDates);
    } else if (selected === "youtube") {
      setSeries(youTubeSeries);
      // setDates(youTubeDates);
    }
  }, [
    facebookFollowers,
    instagramFollowers,
    tiktokFollowers,
    youtubeFollowers,
    selected,
    // dates,
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
        <div className="h-full w-full bg-gradient-to-r from-gray-10 via-gray-20 to-gray-10" />
      ) : (
        <div className="flex h-96 w-full flex-col lg:h-full">
          <div className="mt-2 flex w-full items-center gap-4 overflow-y-hidden overflow-x-scroll p-4 lg:overflow-x-auto">
            <div
              onClick={() => setSelected("facebook")}
              className={`${
                selected === "facebook" && "bg-primary-100/20 text-primary-100"
              } flex h-10 cursor-pointer items-center gap-2 rounded-full border pr-4 text-sm text-primary-100/70 shadow-md transition duration-200 hover:bg-primary-100/20 hover:text-primary-100`}
            >
              <div className="flex h-10 w-10 items-center justify-center rounded-full bg-primary-100/20">
                <Image
                  className="rounded-md"
                  src="/Logos/facebook.svg"
                  alt=""
                  width={24}
                  height={24}
                />
              </div>
              Facebook
            </div>
            <div
              onClick={() => setSelected("instagram")}
              className={`${
                selected === "instagram" && "bg-primary-100/20 text-primary-100"
              }cursor-pointer flex h-10 items-center gap-2 rounded-full border pr-4 text-sm text-primary-100/70 shadow-md transition duration-200 hover:bg-primary-100/20 hover:text-primary-100`}
            >
              <div className="flex h-10 w-10 items-center justify-center rounded-full bg-primary-100/20">
                <Image
                  className="rounded-md"
                  src="/Logos/instagram.svg"
                  alt=""
                  width={24}
                  height={24}
                />
              </div>
              Instagram
            </div>
            <div
              onClick={() => setSelected("tiktok")}
              className={`${
                selected === "tiktok" && "bg-primary-100/20 text-primary-100"
              }cursor-pointer flex h-10 items-center gap-2 rounded-full border pr-4 text-sm text-primary-100/70 shadow-md transition duration-200 hover:bg-primary-100/20 hover:text-primary-100`}
            >
              <div className="flex h-10 w-10 items-center justify-center rounded-full bg-primary-100/20">
                <Image
                  className="rounded-md"
                  src="/Logos/tiktok.svg"
                  alt=""
                  width={24}
                  height={24}
                />
              </div>
              TikTok
            </div>
            <div
              onClick={() => setSelected("youtube")}
              className={`${
                selected === "youtube" && "bg-primary-100/20 text-primary-100"
              }cursor-pointer flex h-10 items-center gap-2 rounded-full border pr-4 text-sm text-primary-100/70 shadow-md transition duration-200 hover:bg-primary-100/20 hover:text-primary-100`}
            >
              <div className="flex h-10 w-10 items-center justify-center rounded-full bg-primary-100/20">
                <Image
                  className="rounded-md"
                  src="/Logos/youtube.svg"
                  alt=""
                  width={24}
                  height={24}
                />
              </div>
              YouTube
            </div>
          </div>
          <ReactApexChart
            options={FollowerProgressionChartData.ChartOptions.options}
            series={series as SeriesProps[]}
            type="line"
          />
        </div>
      )}
      <BaseCardFooter />
    </BaseCard>
  );
}
