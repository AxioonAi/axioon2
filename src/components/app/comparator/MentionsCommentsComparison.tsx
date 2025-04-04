"use client";
import { BaseCard } from "@/components/global/BaseCard/BaseCard";
import { BaseCardFooter } from "@/components/global/BaseCard/BaseCardFooter";
import { useComparatorDataContext } from "@/context/ComparatorData";
import { shortenNumber } from "@/utils/utils";
import { Globe } from "lucide-react";
import Image from "next/image";
import { useEffect, useState } from "react";

export function MentionsCommentsComparison() {
  const [activeFacebookComments, setActiveFacebookComments] = useState<
    number | null
  >(null);
  const [activeInstagramComments, setActiveInstagramComments] = useState<
    number | null
  >(null);
  const [activeTiktokComments, setActiveTiktokComments] = useState<
    number | null
  >(null);
  const [activeYoutubeComments, setActiveYoutubeComments] = useState<
    number | null
  >(null);
  const [passiveFacebookComments, setPassiveFacebookComments] = useState<
    number | null
  >(null);
  const [passiveInstagramComments, setPassiveInstagramComments] = useState<
    number | null
  >(null);
  const [passiveTiktokComments, setPassiveTiktokComments] = useState<
    number | null
  >(null);
  const [passiveYoutubeComments, setPassiveYoutubeComments] = useState<
    number | null
  >(null);
  const [activeInstagramPosts, setActiveInstagramPosts] = useState<
    number | null
  >(null);
  const [activeNewsPosts, setActiveNewsPosts] = useState<number | null>(null);
  const [passiveInstagramPosts, setPassiveInstagramPosts] = useState<
    number | null
  >(null);
  const [passiveNewsPosts, setPassiveNewsPosts] = useState<number | null>(null);
  const {
    activeUserData,
    passiveUserData,
    activeUserMentionsData,
    passiveUserMentionsData,
    activeUserProfileData,
    passiveUserProfileData,
  } = useComparatorDataContext();

  useEffect(() => {
    if (activeUserMentionsData) {
      setActiveInstagramPosts(
        activeUserMentionsData.mentions.mentionQuantity.instagram || 0,
      );
      setActiveNewsPosts(
        activeUserMentionsData.mentions.mentionQuantity.news || 0,
      );
    }
  }, [activeUserMentionsData]);

  useEffect(() => {
    if (passiveUserMentionsData) {
      setPassiveInstagramPosts(
        passiveUserMentionsData.mentions.mentionQuantity.instagram || 0,
      );
      setPassiveNewsPosts(
        passiveUserMentionsData.mentions.mentionQuantity.news || 0,
      );
    }
  }, [passiveUserMentionsData]);

  return (
    <BaseCard slit className="p-0 lg:col-span-12">
      <div className="relative flex w-full flex-col items-center justify-between border-b border-b-zinc-700/50 px-4 py-2 xl:px-8 xl:py-4">
        <strong className="text-sm lg:text-base xl:hidden 2xl:text-lg">
          TOTAL DE POSTAGENS
        </strong>
        <div className="flex w-full items-center justify-between">
          <div className="absolute left-2 h-1/2 w-1 rounded bg-sky-900 xl:left-4" />
          <strong className="text-xs lg:text-sm 2xl:text-base">
            {activeUserProfileData?.name}
          </strong>
          <strong className="hidden text-sm lg:text-base xl:block 2xl:text-lg">
            QUANTIDADE TOTAL DE POSTAGENS
          </strong>
          <strong className="text-xs lg:text-sm 2xl:text-base">
            {passiveUserProfileData?.name}
          </strong>
          <div className="absolute right-2 h-1/2 w-1 rounded bg-sky-900 xl:right-4" />
        </div>
      </div>

      <div className="flex w-full items-center justify-between gap-4 py-4">
        <div className="flex flex-wrap items-center justify-center justify-items-center gap-2 lg:grid lg:w-1/2 lg:grid-cols-2">
          <div className="flex flex-col text-zinc-700 lg:col-span-1">
            <span className="mx-auto font-semibold">Instagram</span>
            <div className="flex items-center gap-2">
              <Image
                src="/Logos/InstagramLogo.png"
                alt=""
                width={500}
                height={500}
                className="h-max w-10 object-contain"
              />
              <div className="flex items-center gap-1">
                <span className="text-lg font-semibold">
                  {activeInstagramPosts
                    ? shortenNumber(activeInstagramPosts)
                    : "N/A"}
                </span>
                <span className="hidden text-sm xl:block">Posts</span>
              </div>
            </div>
          </div>
          <div className="flex flex-col text-zinc-700 lg:col-span-1">
            <span className="mx-auto font-semibold">Notícias</span>
            <div className="flex items-center gap-2">
              <Globe className="h-max w-10 object-contain" />
              <div className="flex items-center gap-1">
                <span className="text-lg font-semibold">
                  {activeNewsPosts ? shortenNumber(activeNewsPosts) : "N/A"}
                </span>
                <span className="hidden text-sm xl:block">Posts</span>
              </div>
            </div>
          </div>
        </div>
        <div className="h-11/12 my-auto w-1 bg-black" />
        <div className="flex flex-wrap items-center justify-center justify-items-center gap-2 lg:grid lg:w-1/2 lg:grid-cols-2">
          <div className="flex flex-col text-zinc-700 lg:col-span-1">
            <span className="mx-auto font-semibold">Instagram</span>
            <div className="flex items-center gap-2">
              <Image
                src="/Logos/InstagramLogo.png"
                alt=""
                width={500}
                height={500}
                className="h-max w-10 object-contain"
              />
              <div className="flex items-center gap-1">
                <span className="text-lg font-semibold">
                  {passiveInstagramPosts
                    ? shortenNumber(passiveInstagramPosts)
                    : "N/A"}
                </span>
                <span className="hidden text-sm xl:block">Posts</span>
              </div>
            </div>
          </div>
          <div className="flex flex-col text-zinc-700 lg:col-span-1">
            <span className="mx-auto font-semibold">Notícias</span>
            <div className="flex items-center gap-2">
              <Globe className="h-max w-10 object-contain" />
              <div className="flex items-center gap-1">
                <span className="text-lg font-semibold">
                  {passiveNewsPosts ? shortenNumber(passiveNewsPosts) : "N/A"}
                </span>
                <span className="hidden text-sm xl:block">Posts</span>
              </div>
            </div>
          </div>
        </div>
      </div>
      <BaseCardFooter text="Posts por rede social." />
    </BaseCard>
  );
}
