"use client";
import { FollowerProgressionChartData } from "@/components/data/ComparatorData";
import { BaseCard } from "@/components/global/BaseCard/BaseCard";
import { BaseCardFooter } from "@/components/global/BaseCard/BaseCardFooter";
import { useComparatorDataContext } from "@/context/ComparatorData";
import { shortenNumber } from "@/utils/utils";
import dynamic from "next/dynamic";
import Image from "next/image";
import { useEffect, useState } from "react";
const ReactApexChart = dynamic(() => import("react-apexcharts"), {
  ssr: false,
});

interface FollowersEvolutionProps {
  date: string;
  followers: number;
}

interface SeriesProps {
  name: string;
  type: string;
  data: number[];
}

export function FollowersEvolutionComparison() {
  const {
    activeUserData,
    passiveUserData,
    activeUserProfileData,
    passiveUserProfileData,
  } = useComparatorDataContext();

  const [activeFacebookFollowers, setActiveFacebookFollowers] =
    useState<FollowersEvolutionProps[]>();
  const [activeInstagramFollowers, setActiveInstagramFollowers] =
    useState<FollowersEvolutionProps[]>();
  const [activeTiktokFollowers, setActiveTiktokFollowers] =
    useState<FollowersEvolutionProps[]>();
  const [activeYoutubeFollowers, setActiveYoutubeFollowers] =
    useState<FollowersEvolutionProps[]>();
  const [passiveFacebookFollowers, setPassiveFacebookFollowers] =
    useState<FollowersEvolutionProps[]>();
  const [passiveInstagramFollowers, setPassiveInstagramFollowers] =
    useState<FollowersEvolutionProps[]>();
  const [passiveTiktokFollowers, setPassiveTiktokFollowers] =
    useState<FollowersEvolutionProps[]>();
  const [passiveYoutubeFollowers, setPassiveYoutubeFollowers] =
    useState<FollowersEvolutionProps[]>();
  const [activeFacebookSeries, setActiveFacebookSeries] =
    useState<SeriesProps[]>();
  const [activeInstagramSeries, setActiveInstagramSeries] =
    useState<SeriesProps[]>();
  const [activeTiktokSeries, setActiveTiktokSeries] = useState<SeriesProps[]>();
  const [activeYoutubeSeries, setActiveYoutubeSeries] =
    useState<SeriesProps[]>();
  const [passiveFacebookSeries, setPassiveFacebookSeries] =
    useState<SeriesProps[]>();
  const [passiveInstagramSeries, setPassiveInstagramSeries] =
    useState<SeriesProps[]>();
  const [passiveTiktokSeries, setPassiveTiktokSeries] =
    useState<SeriesProps[]>();
  const [passiveYoutubeSeries, setPassiveYoutubeSeries] =
    useState<SeriesProps[]>();

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
    const flatActiveFacebookFollowers =
      activeFacebookFollowers &&
      activeFacebookFollowers.flat().filter((follower) => follower !== null);
    const ordeREDFlatActiveFacebookFollowers =
      flatActiveFacebookFollowers &&
      flatActiveFacebookFollowers.sort(
        (a, b) => new Date(a.date).getTime() - new Date(b.date).getTime(),
      );
    const facebookActiveSeries = [
      {
        name: "Facebook",
        type: "column",
        data: ordeREDFlatActiveFacebookFollowers
          ? ordeREDFlatActiveFacebookFollowers.map(
              (follower) => follower.followers,
            )
          : [],
      },
    ];

    const flatActiveInstagramFollowers =
      activeInstagramFollowers &&
      activeInstagramFollowers.flat().filter((follower) => follower !== null);
    const ordeREDFlatActiveInstagramFollowers =
      flatActiveInstagramFollowers &&
      flatActiveInstagramFollowers.sort(
        (a, b) => new Date(a.date).getTime() - new Date(b.date).getTime(),
      );
    const instagramActiveSeries = [
      {
        name: "Instagram",
        type: "column",
        data: ordeREDFlatActiveInstagramFollowers
          ? ordeREDFlatActiveInstagramFollowers.map(
              (follower) => follower.followers,
            )
          : [],
      },
    ];

    const flatActiveTikTokFollowers =
      activeTiktokFollowers &&
      activeTiktokFollowers.flat().filter((follower) => follower !== null);
    const ordeREDFlatActiveTikTokFollowers =
      flatActiveTikTokFollowers &&
      flatActiveTikTokFollowers.sort(
        (a, b) => new Date(a.date).getTime() - new Date(b.date).getTime(),
      );
    const tikTokActiveSeries = [
      {
        name: "TikTok",
        type: "column",
        data: ordeREDFlatActiveTikTokFollowers
          ? ordeREDFlatActiveTikTokFollowers.map(
              (follower) => follower.followers,
            )
          : [],
      },
    ];

    const flatActiveYouTubeFollowers =
      activeYoutubeFollowers &&
      activeYoutubeFollowers.flat().filter((follower) => follower !== null);
    const ordeREDFlatActiveYouTubeFollowers =
      flatActiveYouTubeFollowers &&
      flatActiveYouTubeFollowers.sort(
        (a, b) => new Date(a.date).getTime() - new Date(b.date).getTime(),
      );
    const youTubeActiveSeries = [
      {
        name: "YouTube",
        type: "column",
        data: ordeREDFlatActiveYouTubeFollowers
          ? ordeREDFlatActiveYouTubeFollowers.map(
              (follower) => follower.followers,
            )
          : [],
      },
    ];

    setActiveFacebookSeries(facebookActiveSeries);
    setActiveInstagramSeries(instagramActiveSeries);
    setActiveTiktokSeries(tikTokActiveSeries);
    setActiveYoutubeSeries(youTubeActiveSeries);
  }, [
    activeFacebookFollowers,
    activeInstagramFollowers,
    activeTiktokFollowers,
    activeYoutubeFollowers,
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
    const flatPassiveFacebookFollowers =
      passiveFacebookFollowers &&
      passiveFacebookFollowers.flat().filter((follower) => follower !== null);
    const orderedFlatPassiveFacebookFollowers =
      flatPassiveFacebookFollowers &&
      flatPassiveFacebookFollowers.sort(
        (a, b) => new Date(a.date).getTime() - new Date(b.date).getTime(),
      );
    const facebookPassiveSeries = [
      {
        name: "Facebook",
        type: "column",
        data: orderedFlatPassiveFacebookFollowers
          ? orderedFlatPassiveFacebookFollowers.map(
              (follower) => follower.followers,
            )
          : [],
      },
    ];

    const flatPassiveInstagramFollowers =
      passiveInstagramFollowers &&
      passiveInstagramFollowers.flat().filter((follower) => follower !== null);
    const orderedFlatPassiveInstagramFollowers =
      flatPassiveInstagramFollowers &&
      flatPassiveInstagramFollowers.sort(
        (a, b) => new Date(a.date).getTime() - new Date(b.date).getTime(),
      );
    const instagramPassiveSeries = [
      {
        name: "Instagram",
        type: "column",
        data: orderedFlatPassiveInstagramFollowers
          ? orderedFlatPassiveInstagramFollowers.map(
              (follower) => follower.followers,
            )
          : [],
      },
    ];

    const flatPassiveTikTokFollowers =
      passiveTiktokFollowers &&
      passiveTiktokFollowers.flat().filter((follower) => follower !== null);
    const orderedFlatPassiveTikTokFollowers =
      flatPassiveTikTokFollowers &&
      flatPassiveTikTokFollowers.sort(
        (a, b) => new Date(a.date).getTime() - new Date(b.date).getTime(),
      );
    const tikTokPassiveSeries = [
      {
        name: "TikTok",
        type: "column",
        data: orderedFlatPassiveTikTokFollowers
          ? orderedFlatPassiveTikTokFollowers.map(
              (follower) => follower.followers,
            )
          : [],
      },
    ];

    const flatPassiveYouTubeFollowers =
      passiveYoutubeFollowers &&
      passiveYoutubeFollowers.flat().filter((follower) => follower !== null);
    const orderedFlatPassiveYouTubeFollowers =
      flatPassiveYouTubeFollowers &&
      flatPassiveYouTubeFollowers.sort(
        (a, b) => new Date(a.date).getTime() - new Date(b.date).getTime(),
      );
    const youTubePassiveSeries = [
      {
        name: "YouTube",
        type: "column",
        data: orderedFlatPassiveYouTubeFollowers
          ? orderedFlatPassiveYouTubeFollowers.map(
              (follower) => follower.followers,
            )
          : [],
      },
    ];

    setPassiveFacebookSeries(facebookPassiveSeries);
    setPassiveInstagramSeries(instagramPassiveSeries);
    setPassiveTiktokSeries(tikTokPassiveSeries);
    setPassiveYoutubeSeries(youTubePassiveSeries);
  }, [
    passiveFacebookFollowers,
    passiveInstagramFollowers,
    passiveTiktokFollowers,
    passiveYoutubeFollowers,
  ]);

  return (
    <BaseCard slit className="p-0 lg:col-span-12">
      <div className="relative flex w-full flex-col items-center justify-between border-b border-b-zinc-700/50 px-4 py-2 xl:px-8 xl:py-4">
        <strong className="text-sm lg:text-base xl:hidden 2xl:text-lg">
          EVOLUÇÃO DE SEGUIDORES
        </strong>
        <div className="flex w-full items-center justify-between">
          <div className="absolute left-2 h-1/2 w-1 rounded bg-sky-900 xl:left-4" />
          <strong className="text-xs lg:text-sm 2xl:text-base">
            {activeUserProfileData?.name}
          </strong>
          <strong className="hidden text-sm lg:text-base xl:block 2xl:text-lg">
            EVOLUÇÃO DE SEGUIDORES EM CADA PLATAFORMA
          </strong>
          <strong className="text-xs lg:text-sm 2xl:text-base">
            {passiveUserProfileData?.name}
          </strong>
          <div className="absolute right-2 h-1/2 w-1 rounded bg-sky-900 xl:right-4" />
        </div>
      </div>

      <div className="flex w-full flex-col items-center">
        <div className="flex w-full flex-col">
          <div className="flex w-full items-center justify-between p-4">
            <div className="flex items-center gap-2 text-zinc-700">
              <Image
                src="/Logos/FacebookLogo.png"
                alt=""
                width={500}
                height={500}
                className="h-max w-10 object-contain"
              />
              <div className="flex items-center gap-1">
                <span className="text-lg font-semibold">
                  {activeFacebookFollowers
                    ? shortenNumber(
                        activeFacebookFollowers[
                          activeFacebookFollowers.length - 1
                        ]?.followers || 0,
                      )
                    : "N/A"}
                </span>
                <span className="hidden text-sm xl:block">Seguidores</span>
              </div>
            </div>
            <div className="flex items-center gap-2 text-zinc-700">
              <Image
                src="/Logos/FacebookLogo.png"
                alt=""
                width={500}
                height={500}
                className="h-max w-10 object-contain"
              />
              <div className="flex items-center gap-1">
                <span className="text-lg font-semibold">
                  {passiveFacebookFollowers
                    ? shortenNumber(
                        passiveFacebookFollowers[
                          passiveFacebookFollowers.length - 1
                        ]?.followers || 0,
                      )
                    : "N/A"}
                </span>
                <span className="hidden text-sm xl:block">Seguidores</span>
              </div>
            </div>
          </div>
          <div className="flex w-full flex-col items-center justify-between gap-4 py-4 xl:flex-row">
            <div className="flex h-full w-full flex-col justify-center">
              {activeFacebookFollowers ? (
                <ReactApexChart
                  options={FollowerProgressionChartData.ChartOptions.options}
                  series={activeFacebookSeries as SeriesProps[]}
                  type="line"
                />
              ) : (
                <span className="mx-auto w-max text-sm text-zinc-500">
                  Nenhum Seguidor Encontrado.
                </span>
              )}
            </div>
            <div className="xl:h-11/12 my-auto h-px w-11/12 bg-black xl:w-1" />
            <div className="flex h-full w-full flex-col justify-center">
              {passiveFacebookFollowers ? (
                <ReactApexChart
                  options={FollowerProgressionChartData.ChartOptions.options}
                  series={passiveFacebookSeries as SeriesProps[]}
                  type="line"
                />
              ) : (
                <span className="mx-auto w-max text-sm text-zinc-500">
                  Nenhum Seguidor Encontrado.
                </span>
              )}
            </div>
          </div>
        </div>
        <div className="h-1 w-full bg-zinc-200" />
        <div className="flex w-full flex-col">
          <div className="flex w-full items-center justify-between p-4">
            <div className="flex items-center gap-2 text-zinc-700">
              <Image
                src="/Logos/InstagramLogo.png"
                alt=""
                width={500}
                height={500}
                className="h-max w-10 object-contain"
              />
              <div className="flex items-center gap-1">
                <span className="text-lg font-semibold">
                  {activeInstagramFollowers
                    ? shortenNumber(
                        activeInstagramFollowers[
                          activeInstagramFollowers.length - 1
                        ]?.followers || 0,
                      )
                    : "N/A"}
                </span>
                <span className="hidden text-sm xl:block">Seguidores</span>
              </div>
            </div>
            <div className="flex items-center gap-2 text-zinc-700">
              <Image
                src="/Logos/InstagramLogo.png"
                alt=""
                width={500}
                height={500}
                className="h-max w-10 object-contain"
              />
              <div className="flex items-center gap-1">
                <span className="text-lg font-semibold">
                  {passiveInstagramFollowers
                    ? shortenNumber(
                        passiveInstagramFollowers[
                          passiveInstagramFollowers.length - 1
                        ]?.followers || 0,
                      )
                    : "N/A"}
                </span>
                <span className="hidden text-sm xl:block">Seguidores</span>
              </div>
            </div>
          </div>
          <div className="flex w-full flex-col items-center justify-between gap-4 py-4 xl:flex-row">
            <div className="flex h-full w-full flex-col justify-center">
              {activeInstagramFollowers ? (
                <ReactApexChart
                  options={FollowerProgressionChartData.ChartOptions.options}
                  series={activeInstagramSeries as SeriesProps[]}
                  type="line"
                />
              ) : (
                <span className="mx-auto w-max text-sm text-zinc-500">
                  Nenhum Seguidor Encontrado.
                </span>
              )}
            </div>
            <div className="xl:h-11/12 my-auto h-px w-11/12 bg-black xl:w-1" />
            <div className="flex h-full w-full flex-col justify-center">
              {passiveInstagramFollowers ? (
                <ReactApexChart
                  options={FollowerProgressionChartData.ChartOptions.options}
                  series={passiveInstagramSeries as SeriesProps[]}
                  type="line"
                />
              ) : (
                <span className="mx-auto w-max text-sm text-zinc-500">
                  Nenhum Seguidor Encontrado.
                </span>
              )}
            </div>
          </div>
        </div>
        <div className="h-1 w-full bg-zinc-200" />
        <div className="flex w-full flex-col">
          <div className="flex w-full items-center justify-between p-4">
            <div className="flex items-center gap-2 text-zinc-700">
              <Image
                src="/Logos/TikTokLogo.png"
                alt=""
                width={500}
                height={500}
                className="h-max w-10 object-contain"
              />
              <div className="flex items-center gap-1">
                <span className="text-lg font-semibold">
                  {activeTiktokFollowers
                    ? shortenNumber(
                        activeTiktokFollowers[activeTiktokFollowers.length - 1]
                          ?.followers || 0,
                      )
                    : "N/A"}
                </span>
                <span className="hidden text-sm xl:block">Seguidores</span>
              </div>
            </div>
            <div className="flex items-center gap-2 text-zinc-700">
              <Image
                src="/Logos/TiktokLogo.png"
                alt=""
                width={500}
                height={500}
                className="h-max w-10 object-contain"
              />
              <div className="flex items-center gap-1">
                <span className="text-lg font-semibold">
                  {passiveTiktokFollowers
                    ? shortenNumber(
                        passiveTiktokFollowers[
                          passiveTiktokFollowers.length - 1
                        ]?.followers || 0,
                      )
                    : "N/A"}
                </span>
                <span className="hidden text-sm xl:block">Seguidores</span>
              </div>
            </div>
          </div>
          <div className="flex w-full flex-col items-center justify-between gap-4 py-4 xl:flex-row">
            <div className="flex h-full w-full flex-col justify-center">
              {activeTiktokFollowers ? (
                <ReactApexChart
                  options={FollowerProgressionChartData.ChartOptions.options}
                  series={activeTiktokSeries as SeriesProps[]}
                  type="line"
                />
              ) : (
                <span className="mx-auto w-max text-sm text-zinc-500">
                  Nenhum Seguidor Encontrado.
                </span>
              )}
            </div>
            <div className="xl:h-11/12 my-auto h-px w-11/12 bg-black xl:w-1" />
            <div className="flex h-full w-full flex-col justify-center">
              {passiveTiktokFollowers ? (
                <ReactApexChart
                  options={FollowerProgressionChartData.ChartOptions.options}
                  series={passiveTiktokSeries as SeriesProps[]}
                  type="line"
                />
              ) : (
                <span className="mx-auto w-max text-sm text-zinc-500">
                  Nenhum Seguidor Encontrado.
                </span>
              )}
            </div>
          </div>
        </div>
        <div className="h-1 w-full bg-zinc-200" />
        <div className="flex w-full flex-col">
          <div className="flex w-full items-center justify-between p-4">
            <div className="flex items-center gap-2 text-zinc-700">
              <Image
                src="/Logos/YouTubeLogo.png"
                alt=""
                width={500}
                height={500}
                className="h-max w-10 object-contain"
              />
              <div className="flex items-center gap-1">
                <span className="text-lg font-semibold">
                  {activeYoutubeFollowers
                    ? shortenNumber(
                        activeYoutubeFollowers[
                          activeYoutubeFollowers.length - 1
                        ]?.followers || 0,
                      )
                    : "N/A"}
                </span>
                <span className="hidden text-sm xl:block">Seguidores</span>
              </div>
            </div>
            <div className="flex items-center gap-2 text-zinc-700">
              <Image
                src="/Logos/YoutubeLogo.png"
                alt=""
                width={500}
                height={500}
                className="h-max w-10 object-contain"
              />
              <div className="flex items-center gap-1">
                <span className="text-lg font-semibold">
                  {passiveYoutubeFollowers
                    ? shortenNumber(
                        passiveYoutubeFollowers[
                          passiveYoutubeFollowers.length - 1
                        ]?.followers || 0,
                      )
                    : "N/A"}
                </span>
                <span className="hidden text-sm xl:block">Seguidores</span>
              </div>
            </div>
          </div>
          <div className="flex w-full flex-col items-center justify-between gap-4 py-4 xl:flex-row">
            <div className="flex h-full w-full flex-col justify-center">
              {activeYoutubeFollowers ? (
                <ReactApexChart
                  options={FollowerProgressionChartData.ChartOptions.options}
                  series={activeYoutubeSeries as SeriesProps[]}
                  type="line"
                />
              ) : (
                <span className="mx-auto w-max text-sm text-zinc-500">
                  Nenhum Seguidor Encontrado.
                </span>
              )}
            </div>
            <div className="xl:h-11/12 my-auto h-px w-11/12 bg-black xl:w-1" />
            <div className="flex h-full w-full flex-col justify-center">
              {passiveYoutubeFollowers ? (
                <ReactApexChart
                  options={FollowerProgressionChartData.ChartOptions.options}
                  series={passiveYoutubeSeries as SeriesProps[]}
                  type="line"
                />
              ) : (
                <span className="mx-auto w-max text-sm text-zinc-500">
                  Nenhum Seguidor Encontrado.
                </span>
              )}
            </div>
          </div>
        </div>
      </div>
      <BaseCardFooter text="Seguidores por rede social." />
    </BaseCard>
  );
}
