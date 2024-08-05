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
import { NewsCard } from "../parameters/NewsCard";
import { CardWithTitleAndButton } from "../parameters/CardWithTitleAndButton";
import { authGetAPI, AuthPostAPI } from "@/lib/axios";
import { Modal } from "@/components/global/Modal";
import { Spinner } from "@/components/global/Spinner";

interface News {
  id: string;
  name: string;
  website_logo: string;
  state_capital_id: string;
  url: string;
}

export function SwiperNews() {
  const sliderRef = useRef<SwiperRef>(null);
  const [slidesPerView, setSlidesPerView] = useState(3);
  const [news, setNews] = useState<News[]>([]);
  const [openModal, setOpenModal] = useState(false);
  const [newWebsiteUrl, setNewWebsiteUrl] = useState("");
  const [isAddingWebsite, setIsAddingWebsite] = useState(false);
  const skeletonArray = [0, 1, 2, 3, 4];

  async function GetNews() {
    const news = await authGetAPI("/website");
    if (news.status === 200) {
      setNews(news.body.websites);
    }
  }

  async function AddWebsite() {
    let formattedUrl = "";
    setIsAddingWebsite(true);
    if (newWebsiteUrl === "") {
      alert("Url não informada");
      return setIsAddingWebsite(false);
    }
    if (!newWebsiteUrl.includes("https://")) {
      formattedUrl = `https://${newWebsiteUrl}`;
    }
    const connect = await AuthPostAPI("/website/request", {
      url: formattedUrl === "" ? newWebsiteUrl : formattedUrl,
    });
    if (connect.status === 200) {
      setNewWebsiteUrl("");
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
          buttonText="Solicitar novo Portal"
          firstButtonOnClick={() => setOpenModal(true)}
        />
      </div>
      <div className="flex w-full">
        {news.length !== 0 ? (
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
        ) : (
          <Swiper
            ref={sliderRef}
            slidesPerView={slidesPerView}
            spaceBetween={30}
          >
            {skeletonArray.map((item) => (
              <SwiperSlide key={item} className="py-2">
                <button className="from-gray-10 via-gray-20 to-gray-10 flex h-28 w-[26.75rem] items-center justify-between rounded-md bg-gradient-to-r p-4 shadow-md transition-transform hover:scale-[1.01]" />{" "}
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
          className="flex flex-col p-4"
        >
          <label className="text-lg font-semibold">
            Enviar Pedido de Portal
          </label>
          <div className="flex w-full items-center gap-1 rounded-md bg-white p-2">
            <input
              className="focus:outline-none"
              placeholder="https://www.site.com.br"
              value={newWebsiteUrl}
              onChange={(e) => setNewWebsiteUrl(e.target.value)}
            />
          </div>
          <button
            type="submit"
            onClick={() => AddWebsite()}
            disabled={isAddingWebsite}
            className="mt-4 w-full rounded-md bg-sky-600 px-2 py-1 text-white transition-transform hover:scale-[1.02]"
          >
            {isAddingWebsite ? <Spinner /> : "Enviar"}
          </button>
        </form>
      </Modal>
    </div>
  );
}
