"use client";
import { CircleCheck } from "lucide-react";
import { BaseCard } from "@/components/global/BaseCard/BaseCard";
import { BaseCardFooter } from "@/components/global/BaseCard/BaseCardFooter";
import { BaseCardHeader } from "@/components/global/BaseCard/BaseCardHeader";
import { useLegalDataContext } from "@/context/LegalData";
import { Skeleton } from "@/components/global/Skeleton";

interface OpenDebtsProps {
  OpenDebtsData: {
    title: string;
    subtitle: string;
    type: string;
    value: number;
    id: string;
    place: {
      city: string;
      state: string;
    };
  }[];
}

export function OpenDebts({ OpenDebtsData }: OpenDebtsProps) {
  const { isGettingData } = useLegalDataContext();
  return (
    <BaseCard className="p-0">
      <BaseCardHeader title="Consulta de Débitos Ativos" />
      <div className="mb-12 flex h-80 flex-wrap justify-around gap-4 overflow-y-scroll p-4 pb-10 text-[10px] lg:h-full xl:text-xs 2xl:text-sm 3xl:text-base">
        {isGettingData ? (
          <Skeleton className="mx-auto mt-4 h-[21rem] w-11/12" />
        ) : OpenDebtsData && OpenDebtsData.length !== 0 ? (
          OpenDebtsData.map((item, index) => (
            <div
              key={index}
              className="flex h-auto min-h-32 w-full flex-col justify-between gap-2 rounded bg-zinc-50 px-4 py-2 shadow-md"
            >
              <div className="flex items-center justify-between gap-2">
                <div className="flex flex-col">
                  <span className="font-semibold">{item.title}</span>
                  <span>{item.subtitle}</span>
                </div>
                <div className="flex w-max items-center gap-1 rounded-md border border-zinc-950 bg-green-600 px-2 py-1 text-white">
                  <CircleCheck size={14} />
                  Débito Ativo
                </div>
              </div>
              <div className="flex w-full flex-wrap items-center gap-4">
                <div className="flex flex-col">
                  <span className="text-zinc-500">Tipo de Débito</span>
                  <span className="text-xs font-semibold lg:text-sm 2xl:text-base 3xl:text-lg">
                    {item.type}
                  </span>
                </div>
                <div className="flex flex-col">
                  <span className="text-zinc-500">Valor</span>
                  <span className="text-xs font-semibold lg:text-sm 2xl:text-base 3xl:text-lg">
                    {item.value.toLocaleString("pt-BR", {
                      style: "currency",
                      currency: "BRL",
                    })}
                  </span>
                </div>
                <div className="flex flex-col">
                  <span className="text-zinc-500">Número de Registro</span>
                  <span className="text-xs font-semibold lg:text-sm 2xl:text-base 3xl:text-lg">
                    {item.id}
                  </span>
                </div>
                <div className="flex flex-col">
                  <span className="text-zinc-500">Cidade de Registro</span>
                  <span className="text-xs font-semibold lg:text-sm 2xl:text-base 3xl:text-lg">
                    {item.place.city} - {item.place.state}
                  </span>
                </div>
              </div>
            </div>
          ))
        ) : (
          <span className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 transform">
            Não conseguimos encontrar esses dados.
          </span>
        )}
      </div>
      <BaseCardFooter />
    </BaseCard>
  );
}
