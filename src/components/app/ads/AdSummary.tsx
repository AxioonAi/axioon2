"use client";
import { EllipsisVertical } from "lucide-react";
import Image from "next/image";
import { BaseCard } from "@/components/global/BaseCard/BaseCard";
import { BaseCardHeader } from "@/components/global/BaseCard/BaseCardHeader";

interface AdSummaryProps {
  AdSummaryData: {
    id: number;
    active: boolean;
    spendRange: number;
    reach: string;
    startDate: Date;
    endDate?: Date;
    url: string;
  }[];
}

export function AdSummary({ AdSummaryData }: AdSummaryProps) {
  const handleRedirect = (url: string) => {
    if (confirm("Redirecionar para o link?")) {
      return window.open(url, "_blank");
    }
  };

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
      <div className="flex h-full w-full flex-wrap justify-center gap-4 overflow-y-scroll p-2 lg:p-4">
        {AdSummaryData.map((item, index) => (
          <div
            key={index}
            className="flex w-full flex-col gap-2 rounded-lg bg-zinc-50 p-2 text-xs shadow-md lg:w-[48%] lg:text-sm 2xl:text-base 3xl:text-lg"
          >
            <div className="flex w-full justify-between">
              <div className="flex items-center gap-1">
                <span>Id do Anúncio:</span>
                <strong>{item.id}</strong>
              </div>
              <div className="flex items-center gap-1 rounded-md border border-sky-950 px-1 py-0.5 lg:p-2">
                <Image
                  src={
                    item.active
                      ? "/Icons/activeAd.svg"
                      : "/Icons/inactiveAd.svg"
                  }
                  alt=""
                  width={50}
                  height={50}
                  className="h-4 w-4 lg:h-6 lg:w-6"
                />
                <strong>{item.active ? "Ativo" : "Inativo"}</strong>
              </div>
            </div>
            <div className="flex items-center gap-1">
              <span>Média do R$ investido:</span>
              <strong>
                {item.spendRange.toLocaleString("pt-BR", {
                  style: "currency",
                  currency: "BRL",
                })}
              </strong>
            </div>
            <div className="flex items-center gap-1">
              <span>Média de Público atingido:</span>
              <strong>{item.reach}</strong>
            </div>
            <div className="flex items-center gap-1">
              <span>{item.endDate ? "Veiculado entre:" : "Iniciado em:"}</span>
              <strong>
                {item.startDate.toLocaleDateString("pt-BR")}
                {item.endDate && " - "}
                {item.endDate && item.endDate.toLocaleDateString("pt-BR")}
              </strong>
            </div>
            <button
              onClick={() => handleRedirect(item.url)}
              className="mx-auto rounded-lg bg-sky-700 px-2 py-1 text-white"
            >
              Ver Detalhes
            </button>
          </div>
        ))}
      </div>
    </BaseCard>
  );
}
