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
import { Skeleton } from "@/components/global/Skeleton";
import { useComparatorDataContext } from "@/context/ComparatorData";
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
  data: number[];
}

export function FollowerProgressionChart({
  FollowerProgressionChartData,
}: FollowerProgressionChartProps) {
  const [selected, setSelected] = useState("facebook");
  const [activeFacebookFollowers, setActiveFacebookFollowers] = useState<
    FollowersEvolutionProps[]
  >([]);
  const [activeInstagramFollowers, setActiveInstagramFollowers] = useState<
    FollowersEvolutionProps[]
  >([]);
  const [activeTiktokFollowers, setActiveTiktokFollowers] = useState<
    FollowersEvolutionProps[]
  >([]);
  const [activeYoutubeFollowers, setActiveYoutubeFollowers] = useState<
    FollowersEvolutionProps[]
  >([]);
  const [passiveFacebookFollowers, setPassiveFacebookFollowers] = useState<
    FollowersEvolutionProps[]
  >([]);
  const [passiveInstagramFollowers, setPassiveInstagramFollowers] = useState<
    FollowersEvolutionProps[]
  >([]);
  const [passiveTiktokFollowers, setPassiveTiktokFollowers] = useState<
    FollowersEvolutionProps[]
  >([]);
  const [passiveYoutubeFollowers, setPassiveYoutubeFollowers] = useState<
    FollowersEvolutionProps[]
  >([]);
  const [activeSeries, setActiveSeries] = useState<SeriesProps[]>([]);
  const [passiveSeries, setPassiveSeries] = useState<SeriesProps[]>([]);
  const [finalSeries, setFinalSeries] = useState<SeriesProps[]>([]);
  // const [dates, setDates] = useState<string[]>([]);
  const { isGettingData, activeUserData, passiveUserData } =
    useComparatorDataContext();

  useEffect(() => {
    if (activeUserData) {
      setActiveFacebookFollowers(
        activeUserData.followersEvolution.facebook &&
          activeUserData.followersEvolution.facebook.map((follower) => ({
            date: follower.date,
            followers: follower.followers_count,
          })),
      );
      setActiveInstagramFollowers(
        activeUserData.followersEvolution.instagram &&
          activeUserData.followersEvolution.instagram.map((follower) => ({
            date: follower.date,
            followers: follower.followers,
          })),
      );
      setActiveTiktokFollowers(
        activeUserData.followersEvolution.tiktok &&
          activeUserData.followersEvolution.tiktok.map((follower) => ({
            date: follower.date,
            followers: follower.fans,
          })),
      );
      setActiveYoutubeFollowers(
        activeUserData.followersEvolution.youtube &&
          activeUserData.followersEvolution.youtube.map((follower) => ({
            date: follower.date,
            followers: follower.channel_total_subs,
          })),
      );
    }
  }, [activeUserData]);

  useEffect(() => {
    const flatactiveFacebookFollowers =
      activeFacebookFollowers &&
      activeFacebookFollowers.flat().filter((follower) => follower !== null);
    const orderedFlatactiveFacebookFollowers =
      flatactiveFacebookFollowers &&
      flatactiveFacebookFollowers.sort(
        (a, b) => new Date(a.date).getTime() - new Date(b.date).getTime(),
      );
    const facebookActiveSeries = [
      {
        name: "Facebook",
        type: "column",
        data: orderedFlatactiveFacebookFollowers
          ? orderedFlatactiveFacebookFollowers.map(
              (follower) => follower.followers,
            )
          : [],
      },
    ];

    const flatactiveInstagramFollowers =
      activeInstagramFollowers &&
      activeInstagramFollowers.flat().filter((follower) => follower !== null);
    const orderedFlatactiveInstagramFollowers =
      flatactiveInstagramFollowers &&
      flatactiveInstagramFollowers.sort(
        (a, b) => new Date(a.date).getTime() - new Date(b.date).getTime(),
      );
    const instagramActiveSeries = [
      {
        name: "Instagram",
        type: "column",
        data: orderedFlatactiveInstagramFollowers
          ? orderedFlatactiveInstagramFollowers.map(
              (follower) => follower.followers,
            )
          : [],
      },
    ];

    const flatactiveTikTokFollowers =
      activeTiktokFollowers &&
      activeTiktokFollowers.flat().filter((follower) => follower !== null);
    const orderedFlatactiveTikTokFollowers =
      flatactiveTikTokFollowers &&
      flatactiveTikTokFollowers.sort(
        (a, b) => new Date(a.date).getTime() - new Date(b.date).getTime(),
      );
    const tikTokActiveSeries = [
      {
        name: "TikTok",
        type: "column",
        data: orderedFlatactiveTikTokFollowers
          ? orderedFlatactiveTikTokFollowers.map(
              (follower) => follower.followers,
            )
          : [],
      },
    ];

    const flatactiveYouTubeFollowers =
      activeYoutubeFollowers &&
      activeYoutubeFollowers.flat().filter((follower) => follower !== null);
    const orderedFlatactiveYouTubeFollowers =
      flatactiveYouTubeFollowers &&
      flatactiveYouTubeFollowers.sort(
        (a, b) => new Date(a.date).getTime() - new Date(b.date).getTime(),
      );
    const youTubeActiveSeries = [
      {
        name: "YouTube",
        type: "column",
        data: orderedFlatactiveYouTubeFollowers
          ? orderedFlatactiveYouTubeFollowers.map(
              (follower) => follower.followers,
            )
          : [],
      },
    ];

    if (selected === "facebook") {
      setActiveSeries(facebookActiveSeries);
    } else if (selected === "instagram") {
      setActiveSeries(instagramActiveSeries);
    } else if (selected === "tiktok") {
      setActiveSeries(tikTokActiveSeries);
    } else if (selected === "youtube") {
      setActiveSeries(youTubeActiveSeries);
    }
  }, [
    activeFacebookFollowers,
    activeInstagramFollowers,
    activeTiktokFollowers,
    activeYoutubeFollowers,
    selected,
  ]);

  useEffect(() => {
    if (passiveUserData) {
      setPassiveFacebookFollowers(
        passiveUserData.followersEvolution.facebook &&
          passiveUserData.followersEvolution.facebook.map((follower) => ({
            date: follower.date,
            followers: follower.followers_count,
          })),
      );
      setPassiveInstagramFollowers(
        passiveUserData.followersEvolution.instagram &&
          passiveUserData.followersEvolution.instagram.map((follower) => ({
            date: follower.date,
            followers: follower.followers,
          })),
      );
      setPassiveTiktokFollowers(
        passiveUserData.followersEvolution.tiktok &&
          passiveUserData.followersEvolution.tiktok.map((follower) => ({
            date: follower.date,
            followers: follower.fans,
          })),
      );
      setPassiveYoutubeFollowers(
        passiveUserData.followersEvolution.youtube &&
          passiveUserData.followersEvolution.youtube.map((follower) => ({
            date: follower.date,
            followers: follower.channel_total_subs,
          })),
      );
    }
  }, [passiveUserData]);

  useEffect(() => {
    const flatpassiveFacebookFollowers =
      passiveFacebookFollowers &&
      passiveFacebookFollowers.flat().filter((follower) => follower !== null);
    const orderedFlatpassiveFacebookFollowers =
      flatpassiveFacebookFollowers &&
      flatpassiveFacebookFollowers.sort(
        (a, b) => new Date(a.date).getTime() - new Date(b.date).getTime(),
      );
    const facebookPassiveSeries = [
      {
        name: "Facebook",
        type: "column",
        data: orderedFlatpassiveFacebookFollowers
          ? orderedFlatpassiveFacebookFollowers.map(
              (follower) => follower.followers,
            )
          : [],
      },
    ];

    const flatpassiveInstagramFollowers =
      passiveInstagramFollowers &&
      passiveInstagramFollowers.flat().filter((follower) => follower !== null);
    const orderedFlatpassiveInstagramFollowers =
      flatpassiveInstagramFollowers &&
      flatpassiveInstagramFollowers.sort(
        (a, b) => new Date(a.date).getTime() - new Date(b.date).getTime(),
      );
    const instagramPassiveSeries = [
      {
        name: "Instagram",
        type: "column",
        data: orderedFlatpassiveInstagramFollowers
          ? orderedFlatpassiveInstagramFollowers.map(
              (follower) => follower.followers,
            )
          : [],
      },
    ];

    const flatpassiveTikTokFollowers =
      passiveTiktokFollowers &&
      passiveTiktokFollowers.flat().filter((follower) => follower !== null);
    const orderedFlatpassiveTikTokFollowers =
      flatpassiveTikTokFollowers &&
      flatpassiveTikTokFollowers.sort(
        (a, b) => new Date(a.date).getTime() - new Date(b.date).getTime(),
      );
    const tikTokPassiveSeries = [
      {
        name: "TikTok",
        type: "column",
        data: orderedFlatpassiveTikTokFollowers
          ? orderedFlatpassiveTikTokFollowers.map(
              (follower) => follower.followers,
            )
          : [],
      },
    ];

    const flatpassiveYouTubeFollowers =
      passiveYoutubeFollowers &&
      passiveYoutubeFollowers.flat().filter((follower) => follower !== null);
    const orderedFlatpassiveYouTubeFollowers =
      flatpassiveYouTubeFollowers &&
      flatpassiveYouTubeFollowers.sort(
        (a, b) => new Date(a.date).getTime() - new Date(b.date).getTime(),
      );
    const youTubePassiveSeries = [
      {
        name: "YouTube",
        type: "column",
        data: orderedFlatpassiveYouTubeFollowers
          ? orderedFlatpassiveYouTubeFollowers.map(
              (follower) => follower.followers,
            )
          : [],
      },
    ];

    if (selected === "facebook") {
      setPassiveSeries(facebookPassiveSeries);
    } else if (selected === "instagram") {
      setPassiveSeries(instagramPassiveSeries);
    } else if (selected === "tiktok") {
      setPassiveSeries(tikTokPassiveSeries);
    } else if (selected === "youtube") {
      setPassiveSeries(youTubePassiveSeries);
    }
  }, [
    passiveFacebookFollowers,
    passiveInstagramFollowers,
    passiveTiktokFollowers,
    passiveYoutubeFollowers,
    selected,
  ]);

  useEffect(() => {
    if (activeSeries && passiveSeries) {
      setFinalSeries([...activeSeries, ...passiveSeries]);
    }
  }, [activeSeries, passiveSeries]);

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
        <div className="flex h-96 w-full flex-col lg:h-full">
          <div className="mt-2 flex w-full items-center gap-4 overflow-y-hidden overflow-x-scroll p-4 lg:mt-0 lg:gap-2 lg:overflow-x-auto lg:p-1">
            <button
              onClick={() => setSelected("facebook")}
              className={`${
                selected === "facebook" && "bg-primary-100/20 text-primary-100"
              } flex h-6 cursor-pointer items-center gap-2 rounded-full border pr-4 text-[10px] text-primary-100/70 shadow-md transition duration-200 hover:bg-primary-100/20 hover:text-primary-100 lg:h-8 lg:text-xs xl:text-sm`}
            >
              <div className="flex h-6 w-6 items-center justify-center rounded-full bg-primary-100/20 lg:h-8 lg:w-8">
                <Image
                  className="h-3 w-3 rounded-md lg:h-5 lg:w-5"
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
              }cursor-pointer flex h-6 items-center gap-2 rounded-full border pr-4 text-[10px] text-primary-100/70 shadow-md transition duration-200 hover:bg-primary-100/20 hover:text-primary-100 lg:h-8 lg:text-xs xl:text-sm`}
            >
              <div className="flex h-6 w-6 items-center justify-center rounded-full bg-primary-100/20 lg:h-8 lg:w-8">
                <Image
                  className="h-3 w-3 rounded-md lg:h-5 lg:w-5"
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
              }cursor-pointer flex h-6 items-center gap-2 rounded-full border pr-4 text-[10px] text-primary-100/70 shadow-md transition duration-200 hover:bg-primary-100/20 hover:text-primary-100 lg:h-8 lg:text-xs xl:text-sm`}
            >
              <div className="flex h-6 w-6 items-center justify-center rounded-full bg-primary-100/20 lg:h-8 lg:w-8">
                <Image
                  className="h-3 w-3 rounded-md lg:h-5 lg:w-5"
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
              }cursor-pointer flex h-6 items-center gap-2 rounded-full border pr-4 text-[10px] text-primary-100/70 shadow-md transition duration-200 hover:bg-primary-100/20 hover:text-primary-100 lg:h-8 lg:text-xs xl:text-sm`}
            >
              <div className="flex h-6 w-6 items-center justify-center rounded-full bg-primary-100/20 lg:h-8 lg:w-8">
                <Image
                  className="h-3 w-3 rounded-md lg:h-5 lg:w-5"
                  src="/Logos/YouTubeLogo.png"
                  alt=""
                  width={24}
                  height={24}
                />
              </div>
              YouTube
            </button>
          </div>
          <div className="flex h-full w-full flex-col justify-center">
            <ReactApexChart
              options={FollowerProgressionChartData.ChartOptions.options}
              series={finalSeries as SeriesProps[]}
              type="line"
            />
          </div>
        </div>
      )}
      <BaseCardFooter text="Comparador de seguidores por dia de cada Rede Social." />
    </BaseCard>
  );
}
