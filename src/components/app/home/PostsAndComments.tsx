"use client";
import { ChevronDown, EllipsisVertical } from "lucide-react";
import { useEffect, useRef, useState } from "react";
import Image from "next/image";
import { twMerge } from "tailwind-merge";
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
                      <span className="text-xs font-semibold">{item.url}</span>
                      <span className="text-[10px] italic text-zinc-500">
                        {item.userName} ({item.followers} seguidores)
                      </span>
                    </div>
                  </div>
                  <span>{item.date}</span>
                </div>
                <div className="flex w-full flex-col gap-2">
                  <div className="flex w-full justify-between">
                    <span className="max-w-[90%] text-sm">{item.text}</span>
                  </div>
                  <div className="flex w-full items-center justify-between">
                    <div
                      className={twMerge(
                        "flex items-center gap-2 text-xs",
                        item.socialMedia === "facebook"
                          ? "text-blue-800"
                          : item.socialMedia === "instagram"
                            ? "text-rose-600"
                            : item.socialMedia === "tiktok"
                              ? "text-black"
                              : "text-[#ff0000]",
                      )}
                    >
                      <div className="flex items-center gap-1">
                        <Image
                          src={"/Logos/" + item.socialMedia + "Like.svg"}
                          alt={""}
                          width={40}
                          height={40}
                          className="h-6 w-6"
                        />
                        <span>{item.likesCount}</span>
                      </div>
                      <div className="flex items-center gap-1">
                        <Image
                          src={"/Logos/" + item.socialMedia + "Comment.svg"}
                          alt={""}
                          width={40}
                          height={40}
                          className="h-6 w-6"
                        />
                        <span>{item.commentsCount}</span>
                      </div>
                      <div className="flex items-center gap-1">
                        <Image
                          src={"/Logos/" + item.socialMedia + "View.svg"}
                          alt={""}
                          width={40}
                          height={40}
                          className="h-6 w-6"
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
                        className="h-6 w-6"
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
                        className="h-6 w-6"
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
                        className="h-6 w-6"
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
                      className="flex w-full items-center justify-between rounded-lg bg-zinc-50 p-2 shadow-md"
                    >
                      <div className="flex gap-4">
                        <Image
                          src="/Icons/comment.svg"
                          alt={""}
                          width={40}
                          height={40}
                          className="h-6 w-6"
                        />
                        <div className="flex w-full flex-col text-xs">
                          <strong>{comment.name}</strong>
                          <span className="max-w-[80%] text-zinc-500">
                            {comment.comment}
                          </span>
                        </div>
                      </div>
                      <div className="flex h-full items-center gap-8 text-xs">
                        {/* <div className="flex h-full flex-col items-center justify-between gap-2">
                          <div className="flex items-center gap-1">
                            <Image
                              src={"/Logos/" + item.socialMedia + "Like.svg"}
                              alt={""}
                              width={40}
                              height={40}
                              className="h-4 w-4"
                            />
                            <span>{comment.likesCount}</span>
                          </div>
                          <div className="flex items-center gap-1">
                            <Image
                              src={"/Logos/" + item.socialMedia + "Comment.svg"}
                              alt={""}
                              width={40}
                              height={40}
                              className="h-4 w-4"
                            />
                            <span>{comment.commentsCount}</span>
                          </div>
                        </div> */}
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
                              className="h-4 w-4"
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
                              className="h-4 w-4"
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
                              className="h-4 w-4"
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
