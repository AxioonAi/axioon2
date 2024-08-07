"use client";
import { ChevronDown, EllipsisVertical } from "lucide-react";
import { useEffect, useRef, useState } from "react";
import Image from "next/image";
import autoAnimate from "@formkit/auto-animate";
import { BaseCard } from "@/components/global/BaseCard/BaseCard";
import { BaseCardHeader } from "@/components/global/BaseCard/BaseCardHeader";
import { useOffsetContext } from "@/context/test";
import { useSocialMediaDataContext } from "@/context/SocialMediaData";

interface PostsAndCommentsProps {
  PostsAndCommentsData: {
    socialMedia: string;
    url: string;
    userName: string;
    followers: number;
    text: string;
    sentiment: string;
    likesCount: number;
    commentsCount: number;
    viewsCount: number;
    date: string;
    comments: {
      photo: string;
      name: string;
      comment: string;
      likesCount: number;
      commentsCount: number;
      sentiment: number;
      date: string;
    }[];
  }[];
}

interface FacebookPostsProps {
  commentCount: number;
  created_at?: string;
  date: string;
  engagement: number;
  id: string;
  like: number;
  percentage: number;
  politician_id: string;
  sentiment: number;
  shares: number;
  text: string;
  thumbnail: string;
  url: string;
  comments: {
    authorGender: string;
    date: string;
    engager: boolean | null;
    facebookEngagerId: string | null;
    id: string;
    likeCount: number;
    politician_id: string;
    postUrl: string;
    post_id: string;
    sentimentAnalysis: number;
    text: string;
    username: string;
  }[];
}

interface InstagramPostsProps {
  commentCount: number;
  created_at: string;
  date?: string;
  description: string;
  engagement: number;
  id: string;
  imgUrl: string;
  like: number;
  percentage: number;
  playCount: number;
  politician_id: string;
  postId: string;
  postUrl: string;
  pubDate: string;
  sentiment: number;
  text: string;
  url: string;
  username: string;
  viewCount: number;
  comments: {
    authorGender: string;
    engager: boolean | null;
    id: string;
    instagramEngagerId: string | null;
    likeCount: number;
    ownerProfilePicUrl: string;
    politician_id: string;
    post_id: string;
    sentimentAnalysis: number;
    text: string;
    timestamp: string;
    username: string;
  }[];
}

interface TiktokPostsProps {
  commentCount: number;
  date: string;
  created_at?: string;
  engagement: number;
  id: string;
  like: number;
  percentage: number;
  playCount: number;
  politician_id: string;
  sentiment: number;
  shares: number;
  text: string;
  url: string;
  comments: {
    authorGender: string;
    date: string;
    engager: {
      createdAt: string;
      fans: number;
      heart: number;
      id: string;
      name: string;
      updatedAt: string;
      username: string;
    } | null;
    id: string;
    likeCount: string;
    politician_id: string;
    replyCount: number;
    sentimentAnalysis: number;
    text: string;
    tiktokEngagerId: string | null;
    username: string;
    video_id: string;
  }[];
}

interface YoutubePostsProps {
  commentCount: number;
  created_at: string;
  date: string;
  description: string;
  duration: string;
  engagement: number;
  id: string;
  imgUrl: string;
  like: number;
  percentage: number;
  politician_id: string;
  sentiment: number | null;
  text: string;
  title: string;
  url: string;
  views: number;
}

interface FinalPostsProps {
  date?: string;
  url: string;
  username?: string;
  text: string;
  like: number;
  commentCount: number;
  viewCount?: number;
  playCount?: number;
  views?: number;
  sentiment: number | null;
}

export function PostsAndComments({
  PostsAndCommentsData,
}: PostsAndCommentsProps) {
  const [show, setShow] = useState<number | null>();
  const parent = useRef(null);
  const { elementRef, isVisible, elementName, setElementName } =
    useOffsetContext();
  const [facebookPosts, setFacebookPosts] = useState<FacebookPostsProps[]>([]);
  const [instagramPosts, setInstagramPosts] = useState<InstagramPostsProps[]>(
    [],
  );
  const [tiktokPosts, setTiktokPosts] = useState<TiktokPostsProps[]>([]);
  const [youtubePosts, setYoutubePosts] = useState<YoutubePostsProps[]>([]);
  const [orderedFacebookPosts, setOrderedFacebookPosts] = useState<
    FacebookPostsProps[]
  >([]);
  const [orderedInstagramPosts, setOrderedInstagramPosts] = useState<
    InstagramPostsProps[]
  >([]);
  const [orderedTiktokPosts, setOrderedTiktokPosts] = useState<
    TiktokPostsProps[]
  >([]);
  const [orderedYoutubePosts, setOrderedYoutubePosts] = useState<
    YoutubePostsProps[]
  >([]);
  const [finalPostData, setFinalPostData] = useState<FinalPostsProps[]>([]);
  const { isGettingData, socialMediaData } = useSocialMediaDataContext();

  useEffect(() => {
    if (socialMediaData) {
      setFacebookPosts(socialMediaData.posts.facebook);
      setInstagramPosts(socialMediaData.posts.instagram);
      setTiktokPosts(socialMediaData.posts.tiktok);
      setYoutubePosts(socialMediaData.posts.youtube);
    }
  }, [socialMediaData]);

  useEffect(() => {
    if (facebookPosts) {
      setOrderedFacebookPosts(
        facebookPosts.sort(
          (a, b) => new Date(b.date).getTime() - new Date(a.date).getTime(),
        ),
      );
    }
    if (instagramPosts) {
      setOrderedInstagramPosts(
        instagramPosts.sort(
          (a, b) =>
            new Date(b.created_at).getTime() - new Date(a.created_at).getTime(),
        ),
      );
    }
    if (tiktokPosts) {
      setOrderedTiktokPosts(
        tiktokPosts.sort(
          (a, b) => new Date(b.date).getTime() - new Date(a.date).getTime(),
        ),
      );
    }
    if (youtubePosts) {
      setOrderedYoutubePosts(
        youtubePosts.sort(
          (a, b) => new Date(b.date).getTime() - new Date(a.date).getTime(),
        ),
      );
    }
    const orderedPosts = [
      orderedFacebookPosts,
      orderedInstagramPosts,
      orderedTiktokPosts,
      orderedYoutubePosts,
    ];

    const flatOrderedPosts = orderedPosts.flat();

    if (flatOrderedPosts) {
      const postsWithCreatedAt = flatOrderedPosts.filter(
        (post) => post.created_at,
      );
      const postsWithoutCreatedAt = flatOrderedPosts.filter(
        (post) => !post.created_at,
      );
      const postsWithDate = postsWithCreatedAt.map((post) => ({
        ...post,
        date: post.created_at,
      }));
      const allPosts = [...postsWithDate, ...postsWithoutCreatedAt];
      const orderedAllPosts = allPosts.sort(
        (a, b) =>
          new Date(b.date as string).getTime() -
          new Date(a.date as string).getTime(),
      );
      setFinalPostData(orderedAllPosts);
    }
  }, [
    facebookPosts,
    instagramPosts,
    tiktokPosts,
    youtubePosts,
    orderedFacebookPosts,
    orderedInstagramPosts,
    orderedTiktokPosts,
    orderedYoutubePosts,
  ]);

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

  const reveal = (index: number) => {
    if (show === index) {
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
            <button className="flex items-center gap-2 rounded bg-sky-700 px-2 py-1 text-xs text-white">
              <span>Ordenar</span>
              <ChevronDown size={14} />
            </button>
            <div className="flex h-8 w-8 items-center justify-center rounded-lg bg-zinc-100 text-zinc-700">
              <EllipsisVertical size={14} />
            </div>
          </div>
        }
      />
      {isGettingData ? (
        <div className="h-full w-full bg-gradient-to-r from-gray-10 via-gray-20 to-gray-10" />
      ) : (
        <div className="flex h-full max-h-[60vh] w-full flex-col gap-4 overflow-y-scroll p-4">
          {finalPostData.map((item, index) => (
            <div
              key={index}
              ref={parent}
              className="flex w-full flex-col gap-2"
            >
              <div
                onClick={() => reveal(index)}
                className="flex w-full gap-2 rounded-lg bg-zinc-50 p-2 shadow-md"
              >
                <Image
                  src={
                    "/Logos/" +
                    item.url.split("/")[2].split(".")[1].toLowerCase() +
                    ".svg"
                  }
                  alt={""}
                  width={40}
                  height={40}
                  className="h-8 w-8 rounded-lg"
                />
                <div className="flex h-full w-full flex-col">
                  <div className="flex w-full items-center justify-between">
                    <div className="flex items-center gap-2">
                      <div className="flex flex-col">
                        <span className="text-xs font-semibold lg:text-sm 2xl:text-base 3xl:text-lg">
                          {item.url.split("/")[2].split("/")[0].split(".")[1]}
                        </span>
                        <span className="text-[10px] italic text-zinc-500 lg:text-xs 2xl:text-sm 3xl:text-base">
                          {item.username ? item.username : ""}
                        </span>
                      </div>
                    </div>
                    <span className="text-[10px] lg:text-xs 2xl:text-sm 3xl:text-base">
                      {item.date}
                    </span>
                  </div>
                  <div className="flex w-full flex-col gap-2">
                    <div className="flex w-full justify-between">
                      <span className="max-w-[90%] text-xs lg:text-sm 2xl:text-base 3xl:text-lg">
                        {item.text}
                      </span>
                    </div>
                    <div className="flex w-full items-center justify-between">
                      <div className="flex items-center gap-2 text-xs text-black">
                        <div className="flex flex-col items-center gap-1 text-xs sm:flex-row lg:text-sm 2xl:text-base 3xl:text-lg">
                          <Image
                            src={"/Logos/tiktokLike.svg"}
                            alt={""}
                            width={40}
                            height={40}
                            className="h-4 w-4 sm:h-6 sm:w-6 3xl:h-10 3xl:w-10"
                          />
                          <span>{item.like > 0 ? item.like : 0}</span>
                        </div>
                        <div className="flex flex-col items-center gap-1 text-xs sm:flex-row lg:text-sm 2xl:text-base 3xl:text-lg">
                          <Image
                            src={"/Logos/tiktokComment.svg"}
                            alt={""}
                            width={40}
                            height={40}
                            className="h-4 w-4 sm:h-6 sm:w-6 3xl:h-10 3xl:w-10"
                          />
                          <span>{item.commentCount}</span>
                        </div>
                        <div className="flex flex-col items-center gap-1 text-xs sm:flex-row lg:text-sm 2xl:text-base 3xl:text-lg">
                          <Image
                            src={"/Logos/tiktokView.svg"}
                            alt={""}
                            width={40}
                            height={40}
                            className="h-4 w-4 sm:h-6 sm:w-6 3xl:h-10 3xl:w-10"
                          />
                          <span>
                            {item.viewCount
                              ? item.viewCount
                              : item.playCount
                                ? item.playCount
                                : item.views
                                  ? item.views
                                  : ""}
                          </span>
                        </div>
                      </div>
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
                          className="h-4 w-4 sm:h-6 sm:w-6 3xl:h-10 3xl:w-10"
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
              {/* {show === index && (
                <div className="flex min-h-40 w-full items-center justify-end gap-2">
                  <div className="flex w-11/12 flex-col gap-2">
                    {item.comments.map((comment, index) => (
                      <div
                        key={index}
                        className="flex w-full flex-col items-end justify-between rounded-lg bg-zinc-50 p-2 shadow-md lg:flex-row lg:items-center"
                      >
                        <div className="flex gap-4">
                          <Image
                            src="/Icons/comment.svg"
                            alt={""}
                            width={40}
                            height={40}
                            className="h-4 w-4 sm:h-6 sm:w-6 3xl:h-10 3xl:w-10"
                          />
                          <div className="flex w-full flex-col text-xs lg:text-sm 2xl:text-base 3xl:text-lg">
                            <strong>{comment.name}</strong>
                            <span className="w-full text-zinc-500 lg:max-w-[80%]">
                              {comment.comment}
                            </span>
                          </div>
                        </div>
                        <div className="flex h-full items-end gap-8 text-xs lg:text-sm 2xl:text-base 3xl:text-lg">
                          <div className="flex h-full flex-col items-end justify-between gap-2">
                            <span>{comment.date}</span>
                            <div className="flex items-center gap-2">
                              <Image
                                src={
                                  item.sentiment === "Negativo"
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
                                  item.sentiment === "Neutro"
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
                                  item.sentiment === "Positivo"
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
              )} */}
            </div>
          ))}
        </div>
      )}
    </BaseCard>
  );
}
