"use client";
import { BaseCard } from "@/components/global/BaseCard/BaseCard";
import { BaseCardFooter } from "@/components/global/BaseCard/BaseCardFooter";
import { ScrollArea } from "@/components/global/scroll-area";
import { useComparatorDataContext } from "@/context/ComparatorData";
import { shortenNumber } from "@/utils/utils";
import dynamic from "next/dynamic";
import Image from "next/image";
import { useEffect, useState } from "react";
const ReactApexChart = dynamic(() => import("react-apexcharts"), {
  ssr: false,
});

interface FacebookPostsProps {
  url: string;
  date: string;
  like: number;
  commentCount: number;
  sentiment: number;
}

interface InstagramPostsProps {
  url: string;
  pubDate: string;
  like: number;
  commentCount: number;
  sentiment: number;
}

interface TiktokPostsProps {
  url: string;
  date: string;
  like: number;
  commentCount: number;
  sentiment: number;
}

interface YoutubePostsProps {
  url: string;
  date: string;
  like: number;
  commentCount: number;
  sentiment: number | null;
}

interface SeriesProps {
  name: string;
  type: string;
  data: number[];
}

export function PostsDetailsComparison() {
  const {
    activeUserData,
    passiveUserData,
    activeUserProfileData,
    passiveUserProfileData,
  } = useComparatorDataContext();

  const [activeFacebookPosts, setActiveFacebookPosts] =
    useState<FacebookPostsProps[]>();
  const [activeInstagramPosts, setActiveInstagramPosts] =
    useState<InstagramPostsProps[]>();
  const [activeTiktokPosts, setActiveTiktokPosts] =
    useState<TiktokPostsProps[]>();
  const [activeYoutubePosts, setActiveYoutubePosts] =
    useState<YoutubePostsProps[]>();
  const [passiveFacebookPosts, setPassiveFacebookPosts] =
    useState<FacebookPostsProps[]>();
  const [passiveInstagramPosts, setPassiveInstagramPosts] =
    useState<InstagramPostsProps[]>();
  const [passiveTiktokPosts, setPassiveTiktokPosts] =
    useState<TiktokPostsProps[]>();
  const [passiveYoutubePosts, setPassiveYoutubePosts] =
    useState<YoutubePostsProps[]>();

  useEffect(() => {
    if (activeUserData) {
      setActiveFacebookPosts(
        activeUserData.posts.facebook &&
          activeUserData.posts.facebook.map((post) => ({
            url: post.url,
            date: post.date,
            like: post.like,
            commentCount: post.commentCount,
            sentiment: post.sentiment,
          })),
      );
      setActiveInstagramPosts(
        activeUserData.posts.instagram &&
          activeUserData.posts.instagram.map((post) => ({
            url: post.url,
            pubDate: post.pubDate,
            like: post.like,
            commentCount: post.commentCount,
            sentiment: post.sentiment,
          })),
      );
      setActiveTiktokPosts(
        activeUserData.posts.tiktok &&
          activeUserData.posts.tiktok.map((post) => ({
            url: post.url,
            date: post.date,
            like: post.like,
            commentCount: post.commentCount,
            sentiment: post.sentiment,
          })),
      );
      setActiveYoutubePosts(
        activeUserData.posts.youtube &&
          activeUserData.posts.youtube.map((post) => ({
            url: post.url,
            date: post.date,
            like: post.like,
            commentCount: post.commentCount,
            sentiment: post.sentiment,
          })),
      );
    }
  }, [activeUserData]);

  useEffect(() => {
    if (passiveUserData) {
      setPassiveFacebookPosts(
        passiveUserData.posts.facebook &&
          passiveUserData.posts.facebook.map((post) => ({
            url: post.url,
            date: post.date,
            like: post.like,
            commentCount: post.commentCount,
            sentiment: post.sentiment,
          })),
      );
      setPassiveInstagramPosts(
        passiveUserData.posts.instagram &&
          passiveUserData.posts.instagram.map((post) => ({
            url: post.url,
            pubDate: post.pubDate,
            like: post.like,
            commentCount: post.commentCount,
            sentiment: post.sentiment,
          })),
      );
      setPassiveTiktokPosts(
        passiveUserData.posts.tiktok &&
          passiveUserData.posts.tiktok.map((post) => ({
            url: post.url,
            date: post.date,
            like: post.like,
            commentCount: post.commentCount,
            sentiment: post.sentiment,
          })),
      );
      setPassiveYoutubePosts(
        passiveUserData.posts.youtube &&
          passiveUserData.posts.youtube.map((post) => ({
            url: post.url,
            date: post.date,
            like: post.like,
            commentCount: post.commentCount,
            sentiment: post.sentiment,
          })),
      );
    }
  }, [passiveUserData]);

  return (
    <BaseCard slit className="p-0 lg:col-span-12">
      <div className="relative flex w-full flex-col items-center justify-between border-b border-b-zinc-700/50 px-4 py-2 xl:px-8 xl:py-4">
        <strong className="text-sm lg:text-base xl:hidden 2xl:text-lg">
          DETALHES DE POSTS
        </strong>
        <div className="flex w-full items-center justify-between">
          <div className="absolute left-2 h-1/2 w-1 rounded bg-sky-900 xl:left-4" />
          <strong className="text-xs lg:text-sm 2xl:text-base">
            {activeUserProfileData?.name}
          </strong>
          <strong className="hidden text-sm lg:text-base xl:block 2xl:text-lg">
            DETALHES DE POSTS ATUAIS
          </strong>
          <strong className="text-xs lg:text-sm 2xl:text-base">
            {passiveUserProfileData?.name}
          </strong>
          <div className="absolute right-2 h-1/2 w-1 rounded bg-sky-900 xl:right-4" />
        </div>
      </div>
      <div className="flex w-full flex-col items-center">
        <div className="flex w-full flex-col">
          <div className="flex w-full flex-col items-center justify-between gap-4 py-4 xl:flex-row">
            <div className="flex h-full w-full flex-col justify-center">
              <div className="flex h-80 w-full flex-col overflow-x-scroll p-4 lg:mb-0 lg:overflow-x-auto">
                {activeFacebookPosts ? (
                  <ScrollArea className="h-full w-full">
                    {activeFacebookPosts
                      .sort((a, b) => b.sentiment - a.sentiment)
                      .map((item, index) => (
                        <div
                          className="flex w-max gap-4 border-b border-b-zinc-300 p-4 text-xs md:grid md:w-full md:grid-cols-9 md:text-sm xl:w-full 2xl:text-base 3xl:text-lg"
                          key={index}
                        >
                          <div className="flex justify-center lg:col-span-1">
                            <Image
                              src="/Logos/FacebookLogo.png"
                              alt=""
                              width={200}
                              height={200}
                              className="h-10 w-10 rounded-lg"
                            />
                          </div>
                          <div className="flex w-40 flex-col justify-center lg:col-span-2">
                            <span className="truncate text-zinc-500">Data</span>
                            <span className="truncate font-semibold">
                              {new Date(item.date).toLocaleDateString("pt-BR")}
                            </span>
                          </div>
                          <div className="flex flex-col justify-center lg:col-span-2">
                            <span className="text-zinc-500">Likes</span>
                            <span className="font-semibold">
                              {shortenNumber(item.like)}
                            </span>
                          </div>
                          <div className="flex flex-col justify-center lg:col-span-2">
                            <span className="text-zinc-500">Comentários</span>
                            <span className="font-semibold">
                              {shortenNumber(item.commentCount)}
                            </span>
                          </div>
                          <div className="flex flex-col justify-center lg:col-span-2">
                            <span className="text-zinc-500">Score Axioon</span>
                            <span className="font-semibold">
                              {item.sentiment
                                ? item.sentiment.toFixed(2)
                                : "N/A"}
                            </span>
                          </div>
                        </div>
                      ))}
                  </ScrollArea>
                ) : (
                  <span className="mx-auto w-max text-sm text-zinc-500">
                    Nenhum Post Encontrado.
                  </span>
                )}
              </div>
            </div>
            <div className="xl:h-11/12 my-auto h-px w-11/12 bg-black xl:w-1" />
            <div className="flex h-full w-full flex-col justify-center">
              <div className="flex h-80 w-full flex-col overflow-x-scroll p-4 lg:mb-0 lg:overflow-x-auto">
                {passiveFacebookPosts ? (
                  <ScrollArea className="h-full w-full">
                    {passiveFacebookPosts
                      .sort((a, b) => b.sentiment - a.sentiment)
                      .map((item, index) => (
                        <div
                          className="flex w-max gap-4 border-b border-b-zinc-300 p-4 text-xs md:grid md:w-full md:grid-cols-9 md:text-sm xl:w-full 2xl:text-base 3xl:text-lg"
                          key={index}
                        >
                          <div className="flex justify-center lg:col-span-1">
                            <Image
                              src="/Logos/FacebookLogo.png"
                              alt=""
                              width={200}
                              height={200}
                              className="h-10 w-10 rounded-lg"
                            />
                          </div>
                          <div className="flex w-40 flex-col justify-center lg:col-span-2">
                            <span className="truncate text-zinc-500">Data</span>
                            <span className="truncate font-semibold">
                              {new Date(item.date).toLocaleDateString("pt-BR")}
                            </span>
                          </div>
                          <div className="flex flex-col justify-center lg:col-span-2">
                            <span className="text-zinc-500">Likes</span>
                            <span className="font-semibold">
                              {shortenNumber(item.like)}
                            </span>
                          </div>
                          <div className="flex flex-col justify-center lg:col-span-2">
                            <span className="text-zinc-500">Comentários</span>
                            <span className="font-semibold">
                              {shortenNumber(item.commentCount)}
                            </span>
                          </div>
                          <div className="flex flex-col justify-center lg:col-span-2">
                            <span className="text-zinc-500">Score Axioon</span>
                            <span className="font-semibold">
                              {item.sentiment
                                ? item.sentiment.toFixed(2)
                                : "N/A"}
                            </span>
                          </div>
                        </div>
                      ))}
                  </ScrollArea>
                ) : (
                  <span className="mx-auto w-max text-sm text-zinc-500">
                    Nenhum Post Encontrado.
                  </span>
                )}
              </div>
            </div>
          </div>
        </div>
        <div className="h-1 w-full bg-zinc-200" />
        <div className="flex w-full flex-col">
          <div className="flex w-full flex-col items-center justify-between gap-4 py-4 xl:flex-row">
            <div className="flex h-full w-full flex-col justify-center">
              <div className="flex h-80 w-full flex-col overflow-x-scroll p-4 lg:mb-0 lg:overflow-x-auto">
                {activeInstagramPosts ? (
                  <ScrollArea className="h-full w-full">
                    {activeInstagramPosts
                      .sort((a, b) => b.sentiment - a.sentiment)
                      .map((item, index) => (
                        <div
                          className="flex w-max gap-4 border-b border-b-zinc-300 p-4 text-xs md:grid md:w-full md:grid-cols-9 md:text-sm xl:w-full 2xl:text-base 3xl:text-lg"
                          key={index}
                        >
                          <div className="flex justify-center lg:col-span-1">
                            <Image
                              src="/Logos/InstagramLogo.png"
                              alt=""
                              width={200}
                              height={200}
                              className="h-10 w-10 rounded-lg"
                            />
                          </div>
                          <div className="flex w-40 flex-col justify-center lg:col-span-2">
                            <span className="truncate text-zinc-500">Data</span>
                            <span className="truncate font-semibold">
                              {new Date(item.pubDate).toLocaleDateString(
                                "pt-BR",
                              )}
                            </span>
                          </div>
                          <div className="flex flex-col justify-center lg:col-span-2">
                            <span className="text-zinc-500">Likes</span>
                            <span className="font-semibold">
                              {shortenNumber(item.like)}
                            </span>
                          </div>
                          <div className="flex flex-col justify-center lg:col-span-2">
                            <span className="text-zinc-500">Comentários</span>
                            <span className="font-semibold">
                              {shortenNumber(item.commentCount)}
                            </span>
                          </div>
                          <div className="flex flex-col justify-center lg:col-span-2">
                            <span className="text-zinc-500">Score Axioon</span>
                            <span className="font-semibold">
                              {item.sentiment
                                ? item.sentiment.toFixed(2)
                                : "N/A"}
                            </span>
                          </div>
                        </div>
                      ))}
                  </ScrollArea>
                ) : (
                  <span className="mx-auto w-max text-sm text-zinc-500">
                    Nenhum Post Encontrado.
                  </span>
                )}
              </div>
            </div>
            <div className="xl:h-11/12 my-auto h-px w-11/12 bg-black xl:w-1" />
            <div className="flex h-full w-full flex-col justify-center">
              <div className="flex h-80 w-full flex-col overflow-x-scroll p-4 lg:mb-0 lg:overflow-x-auto">
                {passiveInstagramPosts ? (
                  <ScrollArea className="h-full w-full">
                    {passiveInstagramPosts
                      .sort((a, b) => b.sentiment - a.sentiment)
                      .map((item, index) => (
                        <div
                          className="flex w-max gap-4 border-b border-b-zinc-300 p-4 text-xs md:grid md:w-full md:grid-cols-9 md:text-sm xl:w-full 2xl:text-base 3xl:text-lg"
                          key={index}
                        >
                          <div className="flex justify-center lg:col-span-1">
                            <Image
                              src="/Logos/InstagramLogo.png"
                              alt=""
                              width={200}
                              height={200}
                              className="h-10 w-10 rounded-lg"
                            />
                          </div>
                          <div className="flex w-40 flex-col justify-center lg:col-span-2">
                            <span className="truncate text-zinc-500">Data</span>
                            <span className="truncate font-semibold">
                              {new Date(item.pubDate).toLocaleDateString(
                                "pt-BR",
                              )}
                            </span>
                          </div>
                          <div className="flex flex-col justify-center lg:col-span-2">
                            <span className="text-zinc-500">Likes</span>
                            <span className="font-semibold">
                              {shortenNumber(item.like)}
                            </span>
                          </div>
                          <div className="flex flex-col justify-center lg:col-span-2">
                            <span className="text-zinc-500">Comentários</span>
                            <span className="font-semibold">
                              {shortenNumber(item.commentCount)}
                            </span>
                          </div>
                          <div className="flex flex-col justify-center lg:col-span-2">
                            <span className="text-zinc-500">Score Axioon</span>
                            <span className="font-semibold">
                              {item.sentiment
                                ? item.sentiment.toFixed(2)
                                : "N/A"}
                            </span>
                          </div>
                        </div>
                      ))}
                  </ScrollArea>
                ) : (
                  <span className="mx-auto w-max text-sm text-zinc-500">
                    Nenhum Post Encontrado.
                  </span>
                )}
              </div>
            </div>
          </div>
        </div>
        <div className="h-1 w-full bg-zinc-200" />
        <div className="flex w-full flex-col">
          <div className="flex w-full flex-col items-center justify-between gap-4 py-4 xl:flex-row">
            <div className="flex h-full w-full flex-col justify-center">
              <div className="flex h-80 w-full flex-col overflow-x-scroll p-4 lg:mb-0 lg:overflow-x-auto">
                {activeTiktokPosts ? (
                  <ScrollArea className="h-full w-full">
                    {activeTiktokPosts
                      .sort((a, b) => b.sentiment - a.sentiment)
                      .map((item, index) => (
                        <div
                          className="flex w-max gap-4 border-b border-b-zinc-300 p-4 text-xs md:grid md:w-full md:grid-cols-9 md:text-sm xl:w-full 2xl:text-base 3xl:text-lg"
                          key={index}
                        >
                          <div className="flex justify-center lg:col-span-1">
                            <Image
                              src="/Logos/TikTokLogo.png"
                              alt=""
                              width={200}
                              height={200}
                              className="h-10 w-10 rounded-lg"
                            />
                          </div>
                          <div className="flex w-40 flex-col justify-center lg:col-span-2">
                            <span className="truncate text-zinc-500">Data</span>
                            <span className="truncate font-semibold">
                              {new Date(item.date).toLocaleDateString("pt-BR")}
                            </span>
                          </div>
                          <div className="flex flex-col justify-center lg:col-span-2">
                            <span className="text-zinc-500">Likes</span>
                            <span className="font-semibold">
                              {shortenNumber(item.like)}
                            </span>
                          </div>
                          <div className="flex flex-col justify-center lg:col-span-2">
                            <span className="text-zinc-500">Comentários</span>
                            <span className="font-semibold">
                              {shortenNumber(item.commentCount)}
                            </span>
                          </div>
                          <div className="flex flex-col justify-center lg:col-span-2">
                            <span className="text-zinc-500">Score Axioon</span>
                            <span className="font-semibold">
                              {item.sentiment
                                ? item.sentiment.toFixed(2)
                                : "N/A"}
                            </span>
                          </div>
                        </div>
                      ))}
                  </ScrollArea>
                ) : (
                  <span className="mx-auto w-max text-sm text-zinc-500">
                    Nenhum Post Encontrado.
                  </span>
                )}
              </div>
            </div>
            <div className="xl:h-11/12 my-auto h-px w-11/12 bg-black xl:w-1" />
            <div className="flex h-full w-full flex-col justify-center">
              <div className="flex h-80 w-full flex-col overflow-x-scroll p-4 lg:mb-0 lg:overflow-x-auto">
                {passiveTiktokPosts ? (
                  <ScrollArea className="h-full w-full">
                    {passiveTiktokPosts
                      .sort((a, b) => b.sentiment - a.sentiment)
                      .map((item, index) => (
                        <div
                          className="flex w-max gap-4 border-b border-b-zinc-300 p-4 text-xs md:grid md:w-full md:grid-cols-9 md:text-sm xl:w-full 2xl:text-base 3xl:text-lg"
                          key={index}
                        >
                          <div className="flex justify-center lg:col-span-1">
                            <Image
                              src="/Logos/TikTokLogo.png"
                              alt=""
                              width={200}
                              height={200}
                              className="h-10 w-10 rounded-lg"
                            />
                          </div>
                          <div className="flex w-40 flex-col justify-center lg:col-span-2">
                            <span className="truncate text-zinc-500">Data</span>
                            <span className="truncate font-semibold">
                              {new Date(item.date).toLocaleDateString("pt-BR")}
                            </span>
                          </div>
                          <div className="flex flex-col justify-center lg:col-span-2">
                            <span className="text-zinc-500">Likes</span>
                            <span className="font-semibold">
                              {shortenNumber(item.like)}
                            </span>
                          </div>
                          <div className="flex flex-col justify-center lg:col-span-2">
                            <span className="text-zinc-500">Comentários</span>
                            <span className="font-semibold">
                              {shortenNumber(item.commentCount)}
                            </span>
                          </div>
                          <div className="flex flex-col justify-center lg:col-span-2">
                            <span className="text-zinc-500">Score Axioon</span>
                            <span className="font-semibold">
                              {item.sentiment
                                ? item.sentiment.toFixed(2)
                                : "N/A"}
                            </span>
                          </div>
                        </div>
                      ))}
                  </ScrollArea>
                ) : (
                  <span className="mx-auto w-max text-sm text-zinc-500">
                    Nenhum Post Encontrado.
                  </span>
                )}
              </div>
            </div>
          </div>
        </div>
        <div className="h-1 w-full bg-zinc-200" />
        <div className="flex w-full flex-col">
          <div className="flex w-full flex-col items-center justify-between gap-4 py-4 xl:flex-row">
            <div className="flex h-full w-full flex-col justify-center">
              <div className="flex h-80 w-full flex-col overflow-x-scroll p-4 lg:mb-0 lg:overflow-x-auto">
                {activeYoutubePosts ? (
                  <ScrollArea className="h-full w-full">
                    {activeYoutubePosts
                      .sort((a, b) => (b.sentiment ?? 0) - (a.sentiment ?? 0))
                      .map((item, index) => (
                        <div
                          className="flex w-max gap-4 border-b border-b-zinc-300 p-4 text-xs md:grid md:w-full md:grid-cols-9 md:text-sm xl:w-full 2xl:text-base 3xl:text-lg"
                          key={index}
                        >
                          <div className="flex justify-center lg:col-span-1">
                            <Image
                              src="/Logos/YoutubeLogo.png"
                              alt=""
                              width={200}
                              height={200}
                              className="h-10 w-10 rounded-lg"
                            />
                          </div>
                          <div className="flex w-40 flex-col justify-center lg:col-span-2">
                            <span className="truncate text-zinc-500">Data</span>
                            <span className="truncate font-semibold">
                              {new Date(item.date).toLocaleDateString("pt-BR")}
                            </span>
                          </div>
                          <div className="flex flex-col justify-center lg:col-span-2">
                            <span className="text-zinc-500">Likes</span>
                            <span className="font-semibold">
                              {shortenNumber(item.like)}
                            </span>
                          </div>
                          <div className="flex flex-col justify-center lg:col-span-2">
                            <span className="text-zinc-500">Comentários</span>
                            <span className="font-semibold">
                              {shortenNumber(item.commentCount)}
                            </span>
                          </div>
                          <div className="flex flex-col justify-center lg:col-span-2">
                            <span className="text-zinc-500">Score Axioon</span>
                            <span className="font-semibold">
                              {item.sentiment
                                ? item.sentiment.toFixed(2)
                                : "N/A"}
                            </span>
                          </div>
                        </div>
                      ))}
                  </ScrollArea>
                ) : (
                  <span className="mx-auto w-max text-sm text-zinc-500">
                    Nenhum Post Encontrado.
                  </span>
                )}
              </div>
            </div>
            <div className="xl:h-11/12 my-auto h-px w-11/12 bg-black xl:w-1" />
            <div className="flex h-full w-full flex-col justify-center">
              <div className="flex h-80 w-full flex-col overflow-x-scroll p-4 lg:mb-0 lg:overflow-x-auto">
                {passiveYoutubePosts ? (
                  <ScrollArea className="h-full w-full">
                    {passiveYoutubePosts
                      .sort((a, b) => (b.sentiment ?? 0) - (a.sentiment ?? 0))
                      .map((item, index) => (
                        <div
                          className="flex w-max gap-4 border-b border-b-zinc-300 p-4 text-xs md:grid md:w-full md:grid-cols-9 md:text-sm xl:w-full 2xl:text-base 3xl:text-lg"
                          key={index}
                        >
                          <div className="flex justify-center lg:col-span-1">
                            <Image
                              src="/Logos/YoutubeLogo.png"
                              alt=""
                              width={200}
                              height={200}
                              className="h-10 w-10 rounded-lg"
                            />
                          </div>
                          <div className="flex w-40 flex-col justify-center lg:col-span-2">
                            <span className="truncate text-zinc-500">Data</span>
                            <span className="truncate font-semibold">
                              {new Date(item.date).toLocaleDateString("pt-BR")}
                            </span>
                          </div>
                          <div className="flex flex-col justify-center lg:col-span-2">
                            <span className="text-zinc-500">Likes</span>
                            <span className="font-semibold">
                              {shortenNumber(item.like)}
                            </span>
                          </div>
                          <div className="flex flex-col justify-center lg:col-span-2">
                            <span className="text-zinc-500">Comentários</span>
                            <span className="font-semibold">
                              {shortenNumber(item.commentCount)}
                            </span>
                          </div>
                          <div className="flex flex-col justify-center lg:col-span-2">
                            <span className="text-zinc-500">Score Axioon</span>
                            <span className="font-semibold">
                              {item.sentiment
                                ? item.sentiment.toFixed(2)
                                : "N/A"}
                            </span>
                          </div>
                        </div>
                      ))}
                  </ScrollArea>
                ) : (
                  <span className="mx-auto w-max text-sm text-zinc-500">
                    Nenhum Post Encontrado.
                  </span>
                )}
              </div>
            </div>
          </div>
        </div>
      </div>
      <BaseCardFooter text="Seguidores por rede social." />
    </BaseCard>
  );
}
