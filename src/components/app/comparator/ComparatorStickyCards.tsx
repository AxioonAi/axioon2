"use client";
import { BaseCard } from "@/components/global/BaseCard/BaseCard";
import { useComparatorDataContext } from "@/context/ComparatorData";
import { AlignStartVertical } from "lucide-react";
import { useState } from "react";
import { twMerge } from "tailwind-merge";
import { ChangeComparedProfilesModal } from "./ChangeComparedProfilesModal";

export function ComparatorStickyCards() {
  const {
    activeUserProfileData,
    setActiveUserProfileData,
    passiveUserProfileData,
    setPassiveUserProfileData,
  } = useComparatorDataContext();
  const [showChangeComparedProfilesModal, setShowChangeComparedProfilesModal] =
    useState(false);
  const [isModalOpen, setIsModalOpen] = useState(false);

  return (
    <>
      <div className="flex w-full flex-col items-center lg:col-span-12">
        <div
          onClick={() => {
            setShowChangeComparedProfilesModal(true);
            setIsModalOpen(true);
          }}
          className="bg-darkBlueAxion flex w-3/4 cursor-pointer items-center justify-center gap-2 rounded-t-md p-2 text-sm text-white xl:w-1/5"
        >
          <span>ALTERAR COMPARADOS</span>
          <AlignStartVertical />
        </div>
        <div className={twMerge("flex w-full flex-col gap-4 xl:w-1/2")}>
          {/* <div className="lg:col-span-3">
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
                  src="/Logos/FacebookLogo.png"
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
                  src="/Logos/InstagramLogo.png"
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
                  src="/Logos/TikTokLogo.png"
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
                  src="/Logos/YouTubeLogo.png"
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
        </div> */}
          <div>
            <BaseCard className="h-full w-full gap-1 p-0 lg:gap-4">
              <div className="flex w-full flex-col pt-2 lg:flex-row lg:py-4">
                <span className="text-center font-semibold lg:hidden">
                  Selecione os Perfis que deseja Comparar
                </span>
                <div className="flex w-full items-center justify-between gap-2 p-4">
                  <div className="flex h-full w-full flex-col items-center xl:flex-row xl:gap-2">
                    <span className="text-lg font-semibold">
                      {activeUserProfileData?.name}
                    </span>
                    <span className="text-sm">
                      {/* {activeUserProfileData?.city} */}
                    </span>
                  </div>
                  <div className="h-full w-0.5 bg-black" />
                  <div className="flex h-full w-full flex-col items-center xl:flex-row xl:justify-end xl:gap-2">
                    <span className="text-lg font-semibold">
                      {passiveUserProfileData?.name}
                    </span>
                    <span className="text-sm">
                      {/* {passiveUserProfileData?.city} */}
                    </span>
                  </div>
                </div>
              </div>
            </BaseCard>
          </div>
          {/* <div className="lg:col-span-3">
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
                  src="/Logos/FacebookLogo.png"
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
                  src="/Logos/InstagramLogo.png"
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
                  src="/Logos/TikTokLogo.png"
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
                  src="/Logos/YouTubeLogo.png"
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
        </div> */}
        </div>
      </div>
      {isModalOpen && (
        <ChangeComparedProfilesModal
          show={showChangeComparedProfilesModal}
          onHide={() => {
            setShowChangeComparedProfilesModal(false);
            setIsModalOpen(false);
          }}
        />
      )}
    </>
  );
}
