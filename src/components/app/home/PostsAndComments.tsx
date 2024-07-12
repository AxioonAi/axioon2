"use client";
import { ChevronDown, EllipsisVertical } from "lucide-react";
import { useEffect, useRef, useState } from "react";
import Image from "next/image";
import autoAnimate from "@formkit/auto-animate";
import { BaseCard } from "@/components/global/BaseCard/BaseCard";
import { BaseCardHeader } from "@/components/global/BaseCard/BaseCardHeader";
import { useOffsetContext } from "@/context/test";

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

export function PostsAndComments({
  PostsAndCommentsData,
}: PostsAndCommentsProps) {
  const [show, setShow] = useState<number | null>();
  const parent = useRef(null);
  const { elementRef, isVisible, elementName, setElementName } =
    useOffsetContext();

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
    <BaseCard className="p-0">
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
      <div className="flex h-full max-h-[60vh] w-full flex-col gap-4 overflow-y-scroll p-4">
        {PostsAndCommentsData.map((item, index) => (
          <div ref={parent} className="flex w-full flex-col gap-2">
            <div
              onClick={() => reveal(index)}
              key={index}
              className="flex w-full gap-2 rounded-lg bg-zinc-50 p-2 shadow-md"
            >
              <Image
                src={"/Logos/" + item.socialMedia + ".svg"}
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
                        {item.url}
                      </span>
                      <span className="text-[10px] italic text-zinc-500 lg:text-xs 2xl:text-sm 3xl:text-base">
                        {item.userName} ({item.followers} seguidores)
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
                        <span>{item.likesCount}</span>
                      </div>
                      <div className="flex flex-col items-center gap-1 text-xs sm:flex-row lg:text-sm 2xl:text-base 3xl:text-lg">
                        <Image
                          src={"/Logos/tiktokComment.svg"}
                          alt={""}
                          width={40}
                          height={40}
                          className="h-4 w-4 sm:h-6 sm:w-6 3xl:h-10 3xl:w-10"
                        />
                        <span>{item.commentsCount}</span>
                      </div>
                      <div className="flex flex-col items-center gap-1 text-xs sm:flex-row lg:text-sm 2xl:text-base 3xl:text-lg">
                        <Image
                          src={"/Logos/tiktokView.svg"}
                          alt={""}
                          width={40}
                          height={40}
                          className="h-4 w-4 sm:h-6 sm:w-6 3xl:h-10 3xl:w-10"
                        />
                        <span>{item.viewsCount}</span>
                      </div>
                    </div>
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
                        className="h-4 w-4 sm:h-6 sm:w-6 3xl:h-10 3xl:w-10"
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
                        className="h-4 w-4 sm:h-6 sm:w-6 3xl:h-10 3xl:w-10"
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
                        className="h-4 w-4 sm:h-6 sm:w-6 3xl:h-10 3xl:w-10"
                      />
                    </div>
                  </div>
                </div>
              </div>
            </div>
            {show === index && (
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
            )}
          </div>
        ))}
      </div>
    </BaseCard>
  );
}
