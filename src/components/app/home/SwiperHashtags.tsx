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
import { ChevronLeft, ChevronRight } from "lucide-react";
import { HashtagCard } from "../parameters/HashtagCard";
import { CardWithTitleAndButton } from "../parameters/CardWithTitleAndButton";
import { authGetAPI, AuthPostAPI } from "@/lib/axios";
import { Modal } from "@/components/global/Modal";
import { Spinner } from "@/components/global/Spinner";

interface hashtag {
  id: number;
  hashtag: string;
}

export function SwiperHashtag() {
  const sliderRef = useRef<SwiperRef>(null);
  const [slidesPerView, setSlidesPerView] = useState(3);
  const [hashtag, setHashtag] = useState<hashtag[]>([]);
  const [openModal, setOpenModal] = useState(false);
  const [newHashtag, setNewHashtag] = useState("");
  const [isAddingHashtag, setIsAddingHashtag] = useState(false);
  const skeletonArray = [0, 1, 2, 3, 4];

  async function GetHashtags() {
    const hashtag = await authGetAPI("/hashtag");
    if (hashtag.status === 200) {
      setHashtag(hashtag.body.hashtags);
    }
  }

  async function AddHashtag() {
    setIsAddingHashtag(true);
    if (newHashtag === "") {
      alert("Hashtag não informada");
      return setIsAddingHashtag(false);
    }
    const connect = await AuthPostAPI("/hashtag", {
      hashtag: newHashtag,
    });
    if (connect.status === 200) {
      setNewHashtag("");
      alert("Hashtag adicionada");
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
          secondButtonText="Nova Hashtag"
          secondButtonOnClick={() => setOpenModal(true)}
        />
      </div>
      <div className="flex w-full">
        {hashtag.length !== 0 ? (
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
        ) : (
          <Swiper
            ref={sliderRef}
            slidesPerView={slidesPerView}
            spaceBetween={30}
          >
            {skeletonArray.map((item) => (
              <SwiperSlide key={item} className="py-2">
                <button className="from-gray-10 via-gray-20 to-gray-10 flex w-full flex-row items-center gap-x-4 rounded-md bg-gradient-to-r p-4 shadow-md transition-transform hover:scale-[1.01]" />{" "}
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
          className="flex flex-col p-4"
        >
          <label className="text-lg font-semibold">Adicionar Hashtag</label>
          <div className="flex w-full items-center gap-1 rounded-md bg-white p-2">
            #
            <input
              className="focus:outline-none"
              placeholder="hashtag"
              value={newHashtag}
              onChange={(e) => setNewHashtag(e.target.value)}
            />
          </div>
          <button
            type="submit"
            onClick={() => AddHashtag()}
            disabled={isAddingHashtag}
            className="mt-4 w-full rounded-md bg-sky-600 px-2 py-1 text-white transition-transform hover:scale-[1.02]"
          >
            {isAddingHashtag ? <Spinner /> : "Adicionar"}
          </button>
        </form>
      </Modal>
    </div>
  );
}
