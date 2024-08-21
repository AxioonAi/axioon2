"use client";
import { useEffect, useRef, useState } from "react";
import { twMerge } from "tailwind-merge";
import Image from "next/image";
import { BaseCard } from "@/components/global/BaseCard/BaseCard";
import { useComparatorDataContext } from "@/context/ComparatorData";

export function ComparatorStickyCards() {
  const { activeUserProfileData, passiveUserProfileData } =
    useComparatorDataContext();
  const [isVisible, setIsVisible] = useState(false);
  const elementRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        setIsVisible(entry.isIntersecting);
      },
      {
        root: null, // Use the viewport as the root
        rootMargin: "0px",
        threshold: 0.9, // Adjust this threshold as needed
      },
    );

    if (elementRef.current) {
      observer.observe(elementRef.current);
    }

    return () => {
      if (elementRef.current) {
        observer.unobserve(elementRef.current);
      }
    };
  }, []);

  return (
    <div
      ref={elementRef}
      className="z-50 flex flex-col gap-4 lg:col-span-12 lg:grid lg:grid-cols-12"
    >
      <div
        className={twMerge(
          "h-[26rem] lg:col-span-12 lg:h-80 xl:h-60 2xl:h-40",
          isVisible ? "hidden" : "",
        )}
      />
      <div
        className={twMerge(
          "flex flex-col gap-4 md:w-full lg:col-span-12 lg:grid lg:w-auto lg:grid-cols-12",
          isVisible ? "" : "fixed top-4 pr-4 md:pr-16 lg:pr-4 xl:pr-8 2xl:pr-8",
        )}
      >
        <div className="lg:col-span-3">
          <BaseCard className="gap-2">
            <div className="flex w-full items-center justify-between">
              <div className="flex items-center gap-2">
                <span className="text-sm font-semibold">
                  {activeUserProfileData?.name}
                </span>
                <span className="text-xs italic text-zinc-500">
                  {activeUserProfileData?.city}
                </span>
              </div>
              {/* <button className="flex items-center gap-1 rounded bg-sky-100 p-1 font-semibold text-sky-700">
                <span>Alterar</span>
                <ChevronDown size={14} />
              </button> */}
            </div>
            <div className="flex w-full flex-wrap items-center justify-evenly gap-1">
              <div className="flex w-[45%] items-center gap-1 rounded bg-zinc-50 p-1 text-xs italic shadow-md lg:w-full xl:w-[45%]">
                <Image
                  src="/Logos/facebook.svg"
                  alt=""
                  width={50}
                  height={50}
                  className="h-5 w-5 rounded"
                />
                <span className="truncate">
                  @{activeUserProfileData?.facebook}
                </span>
              </div>
              <div className="flex w-[45%] items-center gap-1 rounded bg-zinc-50 p-1 text-xs italic shadow-md lg:w-full xl:w-[45%]">
                <Image
                  src="/Logos/instagram.svg"
                  alt=""
                  width={50}
                  height={50}
                  className="h-5 w-5 rounded"
                />
                <span className="truncate">
                  @{activeUserProfileData?.instagram}
                </span>
              </div>
              <div className="flex w-[45%] items-center gap-1 rounded bg-zinc-50 p-1 text-xs italic shadow-md lg:w-full xl:w-[45%]">
                <Image
                  src="/Logos/tiktok.svg"
                  alt=""
                  width={50}
                  height={50}
                  className="h-5 w-5 rounded"
                />
                <span className="truncate">
                  @{activeUserProfileData?.tiktok}
                </span>
              </div>
              <div className="flex w-[45%] items-center gap-1 rounded bg-zinc-50 p-1 text-xs italic shadow-md lg:w-full xl:w-[45%]">
                <Image
                  src="/Logos/youtube.svg"
                  alt=""
                  width={50}
                  height={50}
                  className="h-5 w-5 rounded"
                />
                <span className="truncate">
                  @{activeUserProfileData?.youtube}
                </span>
              </div>
            </div>
          </BaseCard>
        </div>
        <div className="lg:col-span-6">
          <BaseCard>1</BaseCard>
        </div>
        <div className="lg:col-span-3">
          <BaseCard className="gap-2">
            <div className="flex w-full items-center justify-between">
              <div className="flex items-center gap-2">
                <span className="text-sm font-semibold">
                  {passiveUserProfileData?.name}
                </span>
                <span className="text-xs italic text-zinc-500">
                  {passiveUserProfileData?.city}
                </span>
              </div>
              {/* <button className="flex items-center gap-1 rounded bg-sky-100 p-1 font-semibold text-sky-700">
                <span>Alterar</span>
                <ChevronDown size={14} />
              </button> */}
            </div>
            <div className="flex w-full flex-wrap items-center justify-evenly gap-1">
              <div className="flex w-[45%] items-center gap-1 rounded bg-zinc-50 p-1 text-xs italic shadow-md lg:w-full xl:w-[45%]">
                <Image
                  src="/Logos/facebook.svg"
                  alt=""
                  width={50}
                  height={50}
                  className="h-5 w-5 rounded"
                />
                <span className="truncate">
                  @{passiveUserProfileData?.facebook}
                </span>
              </div>
              <div className="flex w-[45%] items-center gap-1 rounded bg-zinc-50 p-1 text-xs italic shadow-md lg:w-full xl:w-[45%]">
                <Image
                  src="/Logos/instagram.svg"
                  alt=""
                  width={50}
                  height={50}
                  className="h-5 w-5 rounded"
                />
                <span className="truncate">
                  @{passiveUserProfileData?.instagram}
                </span>
              </div>
              <div className="flex w-[45%] items-center gap-1 rounded bg-zinc-50 p-1 text-xs italic shadow-md lg:w-full xl:w-[45%]">
                <Image
                  src="/Logos/tiktok.svg"
                  alt=""
                  width={50}
                  height={50}
                  className="h-5 w-5 rounded"
                />
                <span className="truncate">
                  @{passiveUserProfileData?.tiktok}
                </span>
              </div>
              <div className="flex w-[45%] items-center gap-1 rounded bg-zinc-50 p-1 text-xs italic shadow-md lg:w-full xl:w-[45%]">
                <Image
                  src="/Logos/youtube.svg"
                  alt=""
                  width={50}
                  height={50}
                  className="h-5 w-5 rounded"
                />
                <span className="truncate">
                  @{passiveUserProfileData?.youtube}
                </span>
              </div>
            </div>
          </BaseCard>
        </div>
      </div>
    </div>
  );
}
