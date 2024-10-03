"use client";
import { Swiper, SwiperRef, SwiperSlide } from "swiper/react";
import {
  useCallback,
  useEffect,
  useLayoutEffect,
  useRef,
  useState,
} from "react";
import "swiper/swiper-bundle.css";
import { ChevronLeft, ChevronRight, X } from "lucide-react";
import { useCookies } from "next-client-cookies";
import CreatableSelect from "react-select/creatable";

import { twMerge } from "tailwind-merge";
import { HashtagCard } from "../parameters/HashtagCard";
import { CardWithTitleAndButton } from "../parameters/CardWithTitleAndButton";
import { authGetAPI, AuthPostAPI, token as Token } from "@/lib/axios";
import { Modal } from "@/components/global/Modal";
import { Spinner } from "@/components/global/Spinner";
import { Skeleton } from "@/components/global/Skeleton";

interface hashtag {
  id: number;
  hashtag: string;
}

export function SwiperHashtag() {
  const sliderRef = useRef<SwiperRef>(null);
  const [slidesPerView, setSlidesPerView] = useState(3);
  const [hashtag, setHashtag] = useState<hashtag[]>([]);
  const [openModal, setOpenModal] = useState(false);
  const [newHashtags, setNewHashtags] = useState<string[] | null>(null);
  const [isAddingHashtag, setIsAddingHashtag] = useState(false);
  const [isGettingData, setIsGettingData] = useState(true);
  const cookie = useCookies();

  async function GetHashtags() {
    setIsGettingData(true);
    const token = cookie.get(Token);
    const hashtag = await authGetAPI("/hashtag", token);
    if (hashtag.status === 200) {
      setHashtag(hashtag.body.hashtags);
      return setIsGettingData(false);
    }
    return setIsGettingData(false);
  }

  async function AddHashtag() {
    const token = cookie.get(Token);
    setIsAddingHashtag(true);
    if (newHashtags && newHashtags[0] === "") {
      alert("Hashtag(s) não informada");
      return setIsAddingHashtag(false);
    }
    const connect = await AuthPostAPI(
      "/hashtag",
      {
        hashtag: newHashtags,
      },
      token,
    );
    if (connect.status === 200) {
      setNewHashtags([""]);
      alert("Hashtag(s) adicionada(s)");
      setOpenModal(false);
      GetHashtags();
      return setIsAddingHashtag(false);
    }
    return setIsAddingHashtag(false);
  }

  useEffect(() => {
    GetHashtags();
  }, []);

  const handlePrev = useCallback(() => {
    if (!sliderRef.current) return;
    sliderRef?.current?.swiper?.slidePrev();
  }, []);

  const handleNext = useCallback(() => {
    if (!sliderRef.current) return;
    sliderRef.current?.swiper.slideNext();
  }, []);

  const updateSlidesPerView = useCallback(() => {
    const width = window.innerWidth;
    if (width >= 1400) {
      setSlidesPerView(3.5); // Desktop large
    } else if (width >= 1200) {
      setSlidesPerView(3); // Desktop
    } else if (width >= 768) {
      setSlidesPerView(1.7); // Tablet
    } else if (width >= 520) {
      setSlidesPerView(1.6); // Tablet
    } else {
      setSlidesPerView(1); // Mobile
    }
  }, []);

  useLayoutEffect(() => {
    updateSlidesPerView();
    window.addEventListener("resize", updateSlidesPerView);
    return () => {
      window.removeEventListener("resize", updateSlidesPerView);
    };
  }, [updateSlidesPerView]);

  return (
    <div className="flex w-full flex-col gap-4">
      <div className="col-span-12 rounded-md bg-white shadow-md">
        <CardWithTitleAndButton
          title="Hashtags Monitoradas"
          buttonText={hashtag.length + " de 5 disponíveis"}
          hasTwoButtons={true}
          secondButtonText="Nova(s) Hashtag(s)"
          secondButtonOnClick={() => setOpenModal(true)}
        />
      </div>
      <div className="flex w-full">
        {isGettingData ? (
          <Swiper
            ref={sliderRef}
            slidesPerView={slidesPerView}
            spaceBetween={30}
          >
            <SwiperSlide className="py-2">
              <div className="flex w-80 flex-col rounded-md bg-white p-4 shadow-md">
                <Skeleton className="h-12 w-full" />
              </div>
            </SwiperSlide>
            <SwiperSlide className="py-2">
              <div className="flex w-80 flex-col rounded-md bg-white p-4 shadow-md">
                <Skeleton className="h-12 w-full" />
              </div>
            </SwiperSlide>
            <SwiperSlide className="py-2">
              <div className="flex w-80 flex-col rounded-md bg-white p-4 shadow-md">
                <Skeleton className="h-12 w-full" />
              </div>
            </SwiperSlide>
            <SwiperSlide className="py-2">
              <div className="flex w-80 flex-col rounded-md bg-white p-4 shadow-md">
                <Skeleton className="h-12 w-full" />
              </div>
            </SwiperSlide>
          </Swiper>
        ) : (
          <Swiper
            ref={sliderRef}
            slidesPerView={
              hashtag.length < 3.5 ? hashtag.length : slidesPerView
            }
          >
            {hashtag.map((item) => (
              <SwiperSlide key={item.id} className="py-2">
                <HashtagCard hashtag={item.hashtag} />
              </SwiperSlide>
            ))}
          </Swiper>
        )}
      </div>
      <div className="mt-4 flex justify-between">
        <button
          onClick={() => handlePrev()}
          className="flex h-8 w-8 items-center justify-center rounded bg-white p-2 shadow-md"
        >
          <ChevronLeft className="stroke-[3]" />
        </button>
        <button
          onClick={() => handleNext()}
          className="flex h-8 w-8 items-center justify-center rounded bg-white p-2 shadow-md"
        >
          <ChevronRight className="stroke-[3]" />
        </button>
      </div>
      <Modal show={openModal} onHide={() => setOpenModal(false)}>
        <form
          action={AddHashtag}
          onSubmit={(e) => e.preventDefault()}
          className="flex w-full flex-col gap-4 px-4 pb-4"
        >
          <div className="flex w-full items-center justify-between">
            <label className="text-lg font-semibold">
              Adicionar Hashtag(s)
            </label>
            <button
              onClick={() => setOpenModal(false)}
              className="h-8 w-8 items-center justify-center"
            >
              <X />
            </button>
          </div>
          <div className="flex flex-col">
            <label>Insira uma ou mais Hashtags para monitorar</label>
            <CreatableSelect
              className="w-full"
              isMulti
              components={{
                DropdownIndicator: () => null,
              }}
              placeholder="#hashtag #hashtag #hashtag"
              onChange={(e) =>
                setNewHashtags(
                  // eslint-disable-next-line @typescript-eslint/no-explicit-any
                  e.map((item: any) => item.value),
                )
              }
            />
          </div>
          {/* <div className="flex w-full items-center gap-1 rounded-md bg-white p-2">
            #
            <input
              className="focus:outline-none"
              placeholder="hashtag"
              value={newHashtag}
              onChange={(e) => setNewHashtag(e.target.value)}
            />
          </div> */}
          <button
            type="submit"
            onClick={() => AddHashtag()}
            disabled={isAddingHashtag || !newHashtags}
            className={twMerge(
              "mt-4 w-full rounded-md bg-sky-600 px-2 py-1 text-white",
              isAddingHashtag || !newHashtags
                ? "cursor-not-allowed opacity-70"
                : "transition-transform hover:scale-[1.02] hover:bg-sky-700",
            )}
          >
            {isAddingHashtag ? <Spinner /> : "Adicionar"}
          </button>
        </form>
      </Modal>
    </div>
  );
}
