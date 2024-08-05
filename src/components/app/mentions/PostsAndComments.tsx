"use client";
import { ChevronDown, EllipsisVertical } from "lucide-react";
import { useEffect, useRef, useState } from "react";
import Image from "next/image";
import { twMerge } from "tailwind-merge";
import autoAnimate from "@formkit/auto-animate";
import { BaseCard } from "@/components/global/BaseCard/BaseCard";
import { BaseCardHeader } from "@/components/global/BaseCard/BaseCardHeader";

interface PostsAndCommentsProps {
  PostsAndCommentsData: {
    socialMedia: string;
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
          <div className="flex items-center gap-2">
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
      <div className="flex h-full w-full flex-col gap-4 overflow-y-scroll p-4">
        {PostsAndCommentsData.map((item, index) => (
          <div key={index} ref={parent} className="flex w-full flex-col gap-2">
            <div
              onClick={() => reveal(index)}
              className="flex w-full gap-2 rounded-lg border border-sky-700 p-2"
            >
              <Image
                src={"/Logos/" + item.socialMedia + ".svg"}
                alt={""}
                width={40}
                height={40}
                className="h-8 w-8 rounded-lg"
              />
              <div className="flex w-full flex-col gap-2">
                <div className="flex w-full justify-between">
                  <span className="max-w-[90%]">{item.text}</span>
                  <div
                    className={twMerge(
                      "h-max rounded px-2 py-1 text-xs",
                      item.sentiment === "Positivo"
                        ? "bg-teal-600/10 text-teal-600"
                        : item.sentiment === "Neutro"
                          ? "bg-violet-600/10 text-violet-600"
                          : "bg-red-600/10 text-red-600",
                    )}
                  >
                    {item.sentiment}
                  </div>
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
                  <span>{item.date}</span>
                </div>
              </div>
            </div>
            {show === index && (
              <div className="flex min-h-40 w-full items-center gap-2">
                <span className="rotate-[-90deg] text-zinc-500">
                  Comentários
                </span>
                <div className="flex flex-col gap-2">
                  {item.comments.map((comment, index) => (
                    <div
                      key={index}
                      className="flex w-full items-center justify-between rounded-lg border border-sky-950 p-2"
                    >
                      <div className="flex items-center gap-4">
                        <Image
                          src={comment.photo}
                          alt={""}
                          width={40}
                          height={40}
                          className="h-8 w-8 rounded-full"
                        />
                        <div className="flex w-full flex-col text-xs">
                          <strong>{comment.name}</strong>
                          <span className="max-w-[80%] text-zinc-500">
                            {comment.comment}
                          </span>
                        </div>
                      </div>
                      <div className="flex h-full items-center gap-8 text-xs">
                        <div className="flex h-full flex-col items-center justify-between gap-2">
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
                        </div>
                        <div className="flex h-full flex-col items-center justify-between gap-2">
                          <div className="commentScore relative h-2 w-32 rounded bg-gradient-to-r from-[#EF322C] from-15% via-[#FAC816] to-[#66AA43] to-85%">
                            <div
                              className="bar absolute h-2 w-1 -translate-x-1/2 rounded bg-[#3c3c3c]"
                              style={{
                                marginLeft: `${comment.sentiment / 10}%`,
                              }}
                            />
                          </div>
                          <span>{comment.date}</span>
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
