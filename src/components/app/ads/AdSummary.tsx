"use client";
import { EllipsisVertical } from "lucide-react";
import Image from "next/image";
import { useEffect, useState } from "react";
import { BaseCard } from "@/components/global/BaseCard/BaseCard";
import { BaseCardHeader } from "@/components/global/BaseCard/BaseCardHeader";
import { useAdsDataContext } from "@/context/AdsData";
import { Skeleton } from "@/components/global/Skeleton";
import { shortenNumber } from "@/utils/masks";

interface AdSummaryProps {
  id: string;
  status: string;
  average_spend: number;
  average_impressions: number;
  start_date: string;
  end_date?: string;
  url?: string;
}

export function AdSummary() {
  const { adsData, isGettingData } = useAdsDataContext();
  const [ads, setAds] = useState<AdSummaryProps[]>([]);

  const handleRedirect = (id: string) => {
    if (confirm("Redirecionar para o link?")) {
      return window.open(
        "https://www.facebook.com/ads/library/?id=" + id,
        "_blank",
      );
    }
  };

  useEffect(() => {
    if (adsData) {
      setAds(adsData?.ads);
    }
  }, [adsData]);

  return (
    <BaseCard className="p-0">
      <BaseCardHeader
        title="Anúncios"
        children={
          <div className="flex h-8 w-8 items-center justify-center rounded-lg bg-zinc-100 text-zinc-700">
            <EllipsisVertical size={14} />
          </div>
        }
      />
      {isGettingData ? (
        <Skeleton className="mx-auto mt-4 h-[17rem] w-11/12" />
      ) : (
        <div className="flex h-full w-full flex-wrap justify-center gap-4 overflow-y-scroll p-2 lg:p-4">
          {ads.map((item, index) => (
            <div
              key={index}
              className="flex w-full flex-col gap-2 rounded-lg bg-zinc-50 p-2 text-xs shadow-md lg:w-[48%] lg:text-sm 2xl:text-base 3xl:text-lg"
            >
              <div className="flex w-full justify-between">
                <div className="flex items-center gap-1">
                  <span>ID:</span>
                  <strong>{item.id}</strong>
                </div>
                <div className="flex items-center gap-1 rounded-md border border-sky-950 px-1 py-0.5 lg:p-2">
                  <Image
                    src={
                      item.status === "INACTIVE"
                        ? "/Icons/inactiveAd.svg"
                        : "/Icons/activeAd.svg"
                    }
                    alt=""
                    width={50}
                    height={50}
                    className="h-4 w-4 lg:h-6 lg:w-6"
                  />
                  <strong>
                    {item.status === "INACTIVE" ? "Inativo" : "Ativo"}
                  </strong>
                </div>
              </div>
              <div className="flex items-center gap-1">
                <span>Média do R$ investido:</span>
                <strong>
                  {item.average_spend.toLocaleString("pt-BR", {
                    style: "currency",
                    currency: "BRL",
                  })}
                </strong>
              </div>
              <div className="flex items-center gap-1">
                <span>Média de Público atingido:</span>
                <strong>{shortenNumber(item.average_impressions)}</strong>
              </div>
              <div className="flex items-center gap-1">
                <span>
                  {item.end_date ? "Veiculado entre:" : "Iniciado em:"}
                </span>
                <strong>
                  {new Date(item.start_date).toLocaleDateString("pt-BR")}
                  {item.end_date && " - "}
                  {item.end_date &&
                    new Date(item.end_date).toLocaleDateString("pt-BR")}
                </strong>
              </div>
              <button
                onClick={() => handleRedirect(item.id)}
                className="mx-auto rounded-lg bg-sky-700 px-2 py-1 text-white"
              >
                Ver Detalhes
              </button>
            </div>
          ))}
        </div>
      )}
    </BaseCard>
  );
}
