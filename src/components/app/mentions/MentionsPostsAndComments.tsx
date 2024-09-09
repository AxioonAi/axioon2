"use client";
import { ChevronDown, EllipsisVertical } from "lucide-react";
import { useEffect, useRef, useState } from "react";
import autoAnimate from "@formkit/auto-animate";
import { twMerge } from "tailwind-merge";
import Image from "next/image";
import {
  Popover,
  PopoverArrow,
  PopoverContent,
  PopoverTrigger,
} from "@radix-ui/react-popover";
import { BaseCard } from "@/components/global/BaseCard/BaseCard";
import { BaseCardHeader } from "@/components/global/BaseCard/BaseCardHeader";
import { useOffsetContext } from "@/context/test";
import { useMentionsDataContext } from "@/context/MentionsData";
import { Skeleton } from "@/components/global/Skeleton";
import { shortenNumber } from "@/utils/masks";

interface InstagramPostsProps {
  commentCount: number;
  description: string;
  id: string;
  imgUrl: string;
  likeCount: number;
  ownerFullName: string;
  ownerUsername: string;
  playCount: number;
  postId: string;
  postUrl: string;
  pubDate: string;
  date?: string;
  sentimentAnalysis: number;
  text: string;
  url: string;
  username: string;
  viewCount: number;
  comments: {
    authorGender: string;
    id: string;
    likeCount: number;
    ownerProfilePicUrl: string;
    post_id: string;
    sentimentAnalysis: number;
    text: string;
    timestamp: string;
    username: string;
  }[];
}

interface newsPostsProps {
  date: string;
  sentiment: number;
  sentimentClassification: string;
  title: string;
  url: string;
  websiteName: string;
  pubDate?: string;
}

interface FinalPostsProps {
  date?: string;
  sentimentClassification?: string;
  title?: string;
  websiteName?: string;
  pubDate?: string;
  url: string;
  username?: string;
  text: string;
  like: number;
  commentCount: number;
  viewCount?: number;
  playCount?: number;
  views?: number;
  sentiment: number | null;
  comments: {
    authorGender: string;
    date?: string;
    timestamp?: string;
    id: string;
    likeCount: string;
    post_id?: string;
    video_id?: string;
    sentimentAnalysis: number;
    text: string;
    username: string;
    ownerProfilePicUrl?: string;
    replyCount?: string;
  }[];
}

export function MentionsPostsAndComments() {
  const [show, setShow] = useState<number | null>();
  const parent = useRef(null);
  const { elementRef, isVisible, elementName, setElementName } =
    useOffsetContext();
  const [instagramPosts, setInstagramPosts] = useState<InstagramPostsProps[]>(
    [],
  );
  const [websitePosts, setWebsitePosts] = useState<newsPostsProps[]>([]);
  const [orderedInstagramPosts, setOrderedInstagramPosts] = useState<
    InstagramPostsProps[]
  >([]);
  const [orderedWebsitePosts, setOrderedWebsitePosts] = useState<
    newsPostsProps[]
  >([]);
  const [finalPostData, setFinalPostData] = useState<FinalPostsProps[]>([]);
  const { isGettingData, mentionsData } = useMentionsDataContext();
  const [filter, setFilter] = useState<string>("desc");

  useEffect(() => {
    if (mentionsData) {
      setInstagramPosts(mentionsData.mentions.posts.instagram);
      setWebsitePosts(mentionsData.mentions.posts.news);
    }
  }, [mentionsData]);

  useEffect(() => {
    if (instagramPosts) {
      setOrderedInstagramPosts(
        instagramPosts.sort(
          (a, b) =>
            new Date(b.pubDate).getTime() - new Date(a.pubDate).getTime(),
        ),
      );
    }
    if (websitePosts) {
      setOrderedWebsitePosts(
        websitePosts.sort(
          (a, b) => new Date(b.date).getTime() - new Date(a.date).getTime(),
        ),
      );
    }

    const orderedPosts = [orderedInstagramPosts, orderedWebsitePosts];

    const flatOrderedPosts = orderedPosts.flat();

    if (flatOrderedPosts) {
      const postsWithPubDate = flatOrderedPosts.filter((post) => post.pubDate);
      const postsWithoutPubDate = flatOrderedPosts.filter(
        (post) => !post.pubDate,
      );
      const postsWithDate = postsWithPubDate.map((post) => ({
        ...post,
        date: post.pubDate,
      }));
      const allPosts = [...postsWithDate, ...postsWithoutPubDate];
      const orderedAllPosts = allPosts.sort(
        (a, b) =>
          new Date(b.date as string).getTime() -
          new Date(a.date as string).getTime(),
      );
      setFinalPostData(orderedAllPosts as FinalPostsProps[]);
    }
  }, [instagramPosts, orderedInstagramPosts]);

  useEffect(() => {
    if (isVisible) {
      setElementName("Publicações");
    } else {
      setElementName("");
    }
  }, [isVisible, elementName]);

  useEffect(() => {
    parent.current && autoAnimate(parent.current);
  }, [parent]);

  const reveal = (
    websiteName: string | undefined,
    url: string,
    index: number,
  ) => {
    if (websiteName) {
      if (confirm("Redirecionar para o link?")) {
        return window.open(url, "_blank");
      }
    } else if (show === index) {
      setShow(null);
    } else {
      setShow(index);
    }
  };

  return (
    <BaseCard className="min-h-96 overflow-hidden p-0">
      <BaseCardHeader
        title="Comentários"
        children={
          <div className="flex items-center gap-2" ref={elementRef}>
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
                  onClick={() => setFilter("")}
                  className={twMerge(
                    "flex w-full items-center justify-center border-y border-y-zinc-200 p-1 text-xs transition duration-100 hover:bg-darkBlueAxion/10",
                    filter === "" && "bg-darkBlueAxion/10",
                  )}
                >
                  Todas
                </button>
                <button
                  onClick={() => setFilter("positive")}
                  className={twMerge(
                    "flex w-full items-center justify-center border-y border-y-zinc-200 p-1 text-xs transition duration-100 hover:bg-darkBlueAxion/10",
                    filter === "positive" && "bg-darkBlueAxion/10",
                  )}
                >
                  Positivas
                </button>
                <button
                  onClick={() => setFilter("neutral")}
                  className={twMerge(
                    "flex w-full items-center justify-center border-y border-y-zinc-200 p-1 text-xs transition duration-100 hover:bg-darkBlueAxion/10",
                    filter === "neutral" && "bg-darkBlueAxion/10",
                  )}
                >
                  Neutras
                </button>
                <button
                  onClick={() => setFilter("negative")}
                  className={twMerge(
                    "flex w-full items-center justify-center border-y border-y-zinc-200 p-1 text-xs transition duration-100 hover:bg-darkBlueAxion/10",
                    filter === "negative" && "bg-darkBlueAxion/10",
                  )}
                >
                  Negativas
                </button>
                <button
                  onClick={() => setFilter("desc")}
                  className={twMerge(
                    "flex w-full items-center justify-center border-y border-y-zinc-200 p-1 text-xs transition duration-100 hover:bg-darkBlueAxion/10",
                    filter === "desc" && "bg-darkBlueAxion/10",
                  )}
                >
                  Descendente
                </button>
                <button
                  onClick={() => setFilter("asc")}
                  className={twMerge(
                    "flex w-full items-center justify-center border-y border-y-zinc-200 p-1 text-xs transition duration-100 hover:bg-darkBlueAxion/10",
                    filter === "asc" && "bg-darkBlueAxion/10",
                  )}
                >
                  Ascendente
                </button>
              </PopoverContent>
            </Popover>
            <div className="flex h-8 w-8 items-center justify-center rounded-lg bg-zinc-100 text-zinc-700">
              <EllipsisVertical size={14} />
            </div>
          </div>
        }
      />
      {isGettingData ? (
        <Skeleton className="mx-auto mt-4 h-[17rem] w-11/12" />
      ) : (
        <div className="flex h-full max-h-[60vh] w-full flex-col gap-4 overflow-y-scroll p-4">
          {finalPostData
            .filter((item) =>
              filter === "positive"
                ? item.sentiment && item.sentiment >= 650
                : filter === "neutral"
                  ? item.sentiment &&
                    item.sentiment < 650 &&
                    item.sentiment >= 450
                  : filter === "negative"
                    ? item.sentiment && item.sentiment < 450
                    : true,
            )
            .sort((a, b) =>
              filter === "desc"
                ? (b.sentiment ? b.sentiment : 0) -
                  (a.sentiment ? a.sentiment : 0)
                : filter === "asc"
                  ? (a.sentiment ? a.sentiment : 0) -
                    (b.sentiment ? b.sentiment : 0)
                  : 0,
            )
            .map((item, index) => (
              <div
                key={index}
                ref={parent}
                className="flex w-full flex-col gap-2"
              >
                <div
                  onClick={() => reveal(item.websiteName, item.url, index)}
                  className={twMerge(
                    "flex w-full gap-2 rounded-lg bg-zinc-50 p-2 shadow-md",
                    "cursor-pointer transition duration-200 hover:scale-[1.001] hover:bg-zinc-100",
                  )}
                >
                  <Image
                    src={
                      item.url.split("/")[2].split(".")[1].toLowerCase() ===
                      "instagram"
                        ? "/Logos/InstagramLogo.png"
                        : "/Icons/siteIcon.png"
                    }
                    alt={""}
                    width={40}
                    height={40}
                    className="h-8 w-8 rounded-lg"
                    onClick={() => window.open(item.url, "_blank")}
                  />
                  <div className="flex h-full w-full flex-col">
                    <div className="flex w-full items-center justify-between">
                      <div className="flex items-center gap-2">
                        <div className="flex flex-col">
                          <span className="text-xs font-semibold lg:text-sm 2xl:text-base 3xl:text-lg">
                            {item.websiteName
                              ? item.websiteName
                              : item.url
                                  .split("/")[2]
                                  .split("/")[0]
                                  .split(".")[1]}
                          </span>
                          <span className="text-[10px] italic text-zinc-500 lg:text-xs 2xl:text-sm 3xl:text-base">
                            {item.username ? item.username : ""}
                          </span>
                        </div>
                      </div>
                      <span className="text-[10px] lg:text-xs 2xl:text-sm 3xl:text-base">
                        {new Date(item.date as string).toLocaleDateString(
                          "pt-BR",
                        )}
                      </span>
                    </div>
                    <div className="flex w-full flex-col gap-2">
                      <div className="flex w-full justify-between">
                        <span className="max-w-[90%] text-xs lg:text-sm 2xl:text-base 3xl:text-lg">
                          {item.title ? item.title : item.text ? item.text : ""}
                        </span>
                      </div>
                      <div
                        className={twMerge(
                          "flex w-full items-center justify-between",
                          item.websiteName && "justify-end",
                        )}
                      >
                        {!item.websiteName && (
                          <div className="flex items-center gap-2 text-xs text-black">
                            <div className="flex flex-col items-center gap-1 text-xs sm:flex-row lg:text-sm 2xl:text-base 3xl:text-lg">
                              <Image
                                src={"/Logos/tiktokLike.svg"}
                                alt={""}
                                width={40}
                                height={40}
                                className="h-4 w-4 sm:h-5 sm:w-5 3xl:h-8 3xl:w-8"
                              />
                              <span>
                                {item.like > 0 ? shortenNumber(item.like) : 0}
                              </span>
                            </div>
                            <div className="flex flex-col items-center gap-1 text-xs sm:flex-row lg:text-sm 2xl:text-base 3xl:text-lg">
                              <Image
                                src={"/Logos/tiktokComment.svg"}
                                alt={""}
                                width={40}
                                height={40}
                                className="h-4 w-4 sm:h-5 sm:w-5 3xl:h-8 3xl:w-8"
                              />
                              <span>{shortenNumber(item.commentCount)}</span>
                            </div>
                            {item.viewCount || item.playCount || item.views ? (
                              <div className="flex flex-col items-center gap-1 text-xs sm:flex-row lg:text-sm 2xl:text-base 3xl:text-lg">
                                <Image
                                  src={"/Logos/tiktokView.svg"}
                                  alt={""}
                                  width={40}
                                  height={40}
                                  className="h-4 w-4 sm:h-5 sm:w-5 3xl:h-8 3xl:w-8"
                                />
                                <span>
                                  {item.viewCount
                                    ? shortenNumber(item.viewCount)
                                    : item.playCount
                                      ? shortenNumber(item.playCount)
                                      : item.views
                                        ? shortenNumber(item.views)
                                        : ""}
                                </span>
                              </div>
                            ) : (
                              <></>
                            )}
                          </div>
                        )}
                        <div className="flex items-center gap-2">
                          <Image
                            src={
                              item.sentiment && item.sentiment <= 450
                                ? "/Icons/negativeSmile.svg"
                                : "/Icons/negativeSmileOff.svg"
                            }
                            alt=""
                            width={50}
                            height={50}
                            className="h-4 w-4 sm:h-6 sm:w-6 3xl:h-10 3xl:w-10"
                          />
                          <Image
                            src={
                              item.sentiment &&
                              item.sentiment >= 451 &&
                              item.sentiment <= 650
                                ? "/Icons/neutralSmile.svg"
                                : "/Icons/neutralSmileOff.svg"
                            }
                            alt=""
                            width={50}
                            height={50}
                            className="h-4 w-4 sm:h-6 sm:w-6 3xl:h-10 3xl:w-10"
                          />
                          <Image
                            src={
                              item.sentiment && item.sentiment >= 651
                                ? "/Icons/positiveSmile.svg"
                                : "/Icons/positiveSmileOff.svg"
                            }
                            alt=""
                            width={50}
                            height={50}
                            className="h-4 w-4 sm:h-6 sm:w-6 3xl:h-10 3xl:w-10"
                          />
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                {show === index && item.comments.length !== 0 && (
                  <div className="flex min-h-40 w-full items-center justify-end gap-2">
                    <div className="flex w-11/12 flex-col gap-2">
                      {item.comments.map((comment, index) => (
                        <div
                          key={index}
                          className="flex w-full flex-col justify-between rounded-lg bg-zinc-50 p-2 shadow-md lg:flex-row lg:items-center"
                        >
                          <div className="flex w-full gap-4 lg:max-w-[80%]">
                            <Image
                              src="/Icons/user.svg"
                              alt={""}
                              width={40}
                              height={40}
                              className="h-4 w-4 sm:h-6 sm:w-6 3xl:h-10 3xl:w-10"
                            />
                            <div className="flex w-full flex-col text-xs lg:text-sm 2xl:text-base 3xl:text-lg">
                              <strong>{comment.username}</strong>
                              <span className="w-full text-zinc-500">
                                {comment.text}
                              </span>
                            </div>
                          </div>
                          <div className="flex h-full items-end gap-8 self-end text-xs lg:text-sm 2xl:text-base 3xl:text-lg">
                            <div className="flex h-full flex-col items-end justify-between gap-2">
                              <span>
                                {comment.date
                                  ? new Date(
                                      comment.date as string,
                                    ).toLocaleDateString("pt-BR")
                                  : comment.timestamp
                                    ? new Date(
                                        comment.timestamp as string,
                                      ).toLocaleDateString("pt-BR")
                                    : ""}
                              </span>
                              <div className="flex items-center gap-2">
                                <Image
                                  src={
                                    item.sentiment && item.sentiment <= 350
                                      ? "/Icons/negativeSmile.svg"
                                      : "/Icons/negativeSmileOff.svg"
                                  }
                                  alt=""
                                  width={50}
                                  height={50}
                                  className="h-4 w-4 sm:h-5 sm:w-5 3xl:h-8 3xl:w-8"
                                />
                                <Image
                                  src={
                                    item.sentiment &&
                                    item.sentiment >= 351 &&
                                    item.sentiment <= 650
                                      ? "/Icons/neutralSmile.svg"
                                      : "/Icons/neutralSmileOff.svg"
                                  }
                                  alt=""
                                  width={50}
                                  height={50}
                                  className="h-4 w-4 sm:h-5 sm:w-5 3xl:h-8 3xl:w-8"
                                />
                                <Image
                                  src={
                                    item.sentiment && item.sentiment >= 651
                                      ? "/Icons/positiveSmile.svg"
                                      : "/Icons/positiveSmileOff.svg"
                                  }
                                  alt=""
                                  width={50}
                                  height={50}
                                  className="h-4 w-4 sm:h-5 sm:w-5 3xl:h-8 3xl:w-8"
                                />
                              </div>
                            </div>
                          </div>
                        </div>
                      ))}
                    </div>
                  </div>
                )}
              </div>
            ))}
        </div>
      )}
    </BaseCard>
  );
}
