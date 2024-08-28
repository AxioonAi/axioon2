"use client";
import { useEffect, useRef, useState } from "react";
import { twMerge } from "tailwind-merge";
import Image from "next/image";
import * as Popover from "@radix-ui/react-popover";
import { ChevronDown } from "lucide-react";
import { BaseCard } from "@/components/global/BaseCard/BaseCard";
import { useComparatorDataContext } from "@/context/ComparatorData";
import { useSelectedPoliticianContext } from "@/context/SelectedPolitician";
import { BaseCardFooter } from "@/components/global/BaseCard/BaseCardFooter";

export function ComparatorStickyCards() {
  const {
    activeUserProfileData,
    setActiveUserProfileData,
    passiveUserProfileData,
    setPassiveUserProfileData,
  } = useComparatorDataContext();
  const { politicians } = useSelectedPoliticianContext();
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
      className={twMerge(
        "z-50 flex flex-col gap-4 lg:col-span-12 lg:grid lg:grid-cols-12",
      )}
    >
      <div
        className={twMerge(
          "h-[26rem] lg:col-span-12 lg:h-60 xl:h-40",
          isVisible ? "hidden" : "",
        )}
      />
      <div
        className={twMerge(
          "flex flex-col gap-4 lg:col-span-12 lg:grid lg:grid-cols-12",
          isVisible
            ? ""
            : "fixed top-0 w-[calc(100%-32px)] bg-white/30 pt-8 shadow-2xl backdrop-blur-sm md:w-[calc(100%-64px)] lg:right-4 lg:w-[calc(100%-288px)] xl:right-8 xl:w-[calc(100%-320px)]",
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
          <BaseCard className="h-full w-full gap-4 p-0">
            <div className="flex w-full py-4">
              <div className="flex w-full items-center justify-between px-4">
                <Popover.Root>
                  <Popover.Trigger className="flex h-10 w-1/4 rounded bg-sky-900/80">
                    <div className="flex h-full w-[85%] items-center justify-between gap-2 border-r-2 border-r-black px-2 text-white">
                      <Image
                        src="/Icons/user.svg"
                        alt=""
                        width={100}
                        height={100}
                        className="h-5 w-5"
                      />
                      <span className="w-full truncate">
                        {activeUserProfileData?.name}
                      </span>
                      <ChevronDown />
                    </div>
                    <div className="flex h-full w-[15%] items-center justify-center">
                      <Image
                        src="/Icons/settingWhite.svg"
                        alt=""
                        width={100}
                        height={100}
                        className="h-5 w-5"
                      />
                    </div>
                  </Popover.Trigger>
                  <Popover.Content
                    className="z-50 flex max-h-96 w-52 flex-col items-center justify-between overflow-y-scroll rounded bg-white text-center text-sm font-semibold shadow"
                    sideOffset={5}
                    align="start"
                  >
                    {politicians.map((politician, index) => (
                      <button
                        onClick={() => setActiveUserProfileData(politician)}
                        key={index}
                        className={twMerge(
                          "w-full border-y border-y-gray-200 px-2 py-1",
                          politician.name === activeUserProfileData?.name &&
                            "bg-sky-900/20",
                        )}
                      >
                        <span>{politician.name}</span>
                      </button>
                    ))}
                  </Popover.Content>
                </Popover.Root>
                <span className="text-center font-semibold">
                  Selecione os Perfis que deseja Comparar
                </span>
                <Popover.Root>
                  <Popover.Trigger className="flex h-10 w-1/4 rounded bg-sky-900/80">
                    <div className="flex h-full w-[85%] items-center justify-between gap-2 border-r-2 border-r-black px-2 text-white">
                      <Image
                        src="/Icons/user.svg"
                        alt=""
                        width={100}
                        height={100}
                        className="h-5 w-5"
                      />
                      <span className="w-full truncate">
                        {passiveUserProfileData?.name}
                      </span>
                      <ChevronDown />
                    </div>
                    <div className="flex h-full w-[15%] items-center justify-center">
                      <Image
                        src="/Icons/settingWhite.svg"
                        alt=""
                        width={100}
                        height={100}
                        className="h-5 w-5"
                      />
                    </div>
                  </Popover.Trigger>
                  <Popover.Content
                    className="z-50 flex max-h-96 w-52 flex-col items-center justify-between overflow-y-scroll rounded bg-white text-center text-sm font-semibold shadow"
                    sideOffset={5}
                    align="start"
                  >
                    {politicians.map((politician, index) => (
                      <button
                        onClick={() => setPassiveUserProfileData(politician)}
                        key={index}
                        className={twMerge(
                          "w-full border-y border-y-gray-200 px-2 py-1",
                          politician.name === passiveUserProfileData?.name &&
                            "bg-sky-900/20",
                        )}
                      >
                        <span>{politician.name}</span>
                      </button>
                    ))}
                  </Popover.Content>
                </Popover.Root>
              </div>
            </div>
            <BaseCardFooter />
          </BaseCard>
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
