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
import { NewsCard } from "../parameters/NewsCard";
import { CardWithTitleAndButton } from "../parameters/CardWithTitleAndButton";
import { authGetAPI, AuthPostAPI, token as Token } from "@/lib/axios";
import { Modal } from "@/components/global/Modal";
import { Spinner } from "@/components/global/Spinner";
import { Skeleton } from "@/components/global/Skeleton";

interface News {
  id: string;
  name: string;
  website_logo: string;
  state_capital_id: string;
  url: string;
}

export function SwiperNews() {
  const cookies = useCookies();
  const sliderRef = useRef<SwiperRef>(null);
  const [slidesPerView, setSlidesPerView] = useState(3);
  const [news, setNews] = useState<News[]>([]);
  const [openModal, setOpenModal] = useState(false);
  const [newWebsiteUrls, setNewWebsiteUrls] = useState<string[] | null>(null);
  const [isAddingWebsite, setIsAddingWebsite] = useState(false);
  const [isGettingData, setIsGettingData] = useState(true);

  async function GetNews() {
    setIsGettingData(true);
    const token = cookies.get(Token);
    const news = await authGetAPI("/website", token);
    if (news.status === 200) {
      setNews(news.body.websites);
      return setIsGettingData(false);
    }
    return setIsGettingData(false);
  }

  async function AddWebsite() {
    const token = cookies.get(Token);
    setIsAddingWebsite(true);
    if (newWebsiteUrls && newWebsiteUrls[0] === "") {
      alert("Url não informada");
      return setIsAddingWebsite(false);
    }
    const connect = await AuthPostAPI(
      "/website/request",
      {
        url: newWebsiteUrls,
      },
      token,
    );
    if (connect.status === 200) {
      setNewWebsiteUrls([""]);
      alert("Requisição efetuada com sucesso");
      setOpenModal(false);
      return setIsAddingWebsite(false);
    }
    return setIsAddingWebsite(false);
  }

  useEffect(() => {
    GetNews();
  }, []);

  const handlePrev = useCallback(() => {
    if (!sliderRef.current) return;
    sliderRef.current.swiper.slidePrev();
  }, []);

  const handleNext = useCallback(() => {
    if (!sliderRef.current) return;
    sliderRef.current.swiper.slideNext();
  }, []);

  const updateSlidesPerView = useCallback(() => {
    const width = window.innerWidth;
    if (width >= 1400) {
      setSlidesPerView(3.5); // Desktop large
    } else if (width >= 1200) {
      setSlidesPerView(3.2); // Desktop
    } else if (width >= 968) {
      setSlidesPerView(2.1);
    } else if (width >= 600) {
      setSlidesPerView(1.7); // Tablet
    } else {
      setSlidesPerView(1.2); // Mobile
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
          title="Sites e Portais monitorados"
          buttonText="Solicitar novo(s) Portal(is)"
          firstButtonOnClick={() => setOpenModal(true)}
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
                <Skeleton className="h-20 w-full" />
              </div>
            </SwiperSlide>
            <SwiperSlide className="py-2">
              <div className="flex w-80 flex-col rounded-md bg-white p-4 shadow-md">
                <Skeleton className="h-20 w-full" />
              </div>
            </SwiperSlide>
            <SwiperSlide className="py-2">
              <div className="flex w-80 flex-col rounded-md bg-white p-4 shadow-md">
                <Skeleton className="h-20 w-full" />
              </div>
            </SwiperSlide>
            <SwiperSlide className="py-2">
              <div className="flex w-80 flex-col rounded-md bg-white p-4 shadow-md">
                <Skeleton className="h-20 w-full" />
              </div>
            </SwiperSlide>
          </Swiper>
        ) : (
          <Swiper
            ref={sliderRef}
            slidesPerView={slidesPerView}
            spaceBetween={30}
          >
            {news.map((item) => (
              <SwiperSlide key={item.id} className="py-2">
                <NewsCard news={item} />
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
          action={AddWebsite}
          onSubmit={(e) => e.preventDefault()}
          className="flex w-full flex-col px-4 pb-4"
        >
          <div className="flex w-full items-center justify-between">
            <label className="text-lg font-semibold">Adicionar Sites</label>
            <button
              onClick={() => setOpenModal(false)}
              className="h-8 w-8 items-center justify-center"
            >
              <X />
            </button>
          </div>
          <CreatableSelect
            className="w-full"
            isMulti
            placeholder="https://exemplo.com.br"
            onChange={(e) =>
              setNewWebsiteUrls(
                // eslint-disable-next-line @typescript-eslint/no-explicit-any
                e.map((item: any) => item.value),
              )
            }
          />
          <button
            type="submit"
            onClick={() => AddWebsite()}
            disabled={isAddingWebsite || !newWebsiteUrls}
            className={twMerge(
              "mt-4 w-full rounded-md bg-sky-600 px-2 py-1 text-white",
              isAddingWebsite || !newWebsiteUrls
                ? "cursor-not-allowed opacity-70"
                : "transition-transform hover:scale-[1.02] hover:bg-sky-700",
            )}
          >
            {isAddingWebsite ? <Spinner /> : "Enviar"}
          </button>
        </form>
      </Modal>
    </div>
  );
}
