"use client";
import Image from "next/image";
import { useEffect, useState } from "react";
import { BaseCard } from "@/components/global/BaseCard/BaseCard";
import { BaseCardFooter } from "@/components/global/BaseCard/BaseCardFooter";
import { BaseCardHeader } from "@/components/global/BaseCard/BaseCardHeader";
import { useLegalDataContext } from "@/context/LegalData";

interface EconomicRelationshipsDataProps {
  cnpj: string;
  country: string;
  endDate: string;
  id: string;
  name: string;
  politician_id: string;
  relationshipLevel: string;
  relationshipType: string;
  startDate: string;
}

export function EconomicRelationships() {
  const [economicRelationships, setEconomicRelationships] = useState<
    EconomicRelationshipsDataProps[]
  >([]);
  const { legalData, isGettingData } = useLegalDataContext();

  useEffect(() => {
    if (legalData) {
      setEconomicRelationships(legalData.economicRelationship);
    }
  }, [legalData]);

  return (
    <BaseCard className="p-0">
      <BaseCardHeader title="Relacionamentos Econômicos" />
      {isGettingData ? (
        <div className="h-full w-full bg-gradient-to-r from-gray-10 via-gray-20 to-gray-10" />
      ) : (
        <div className="mb-12 flex h-80 flex-wrap justify-around gap-4 overflow-y-scroll p-4 pb-10 text-[10px] lg:h-full xl:text-xs 2xl:text-sm 3xl:text-base">
          {economicRelationships && economicRelationships.length !== 0 ? (
            economicRelationships.map((item, index) => (
              <div
                key={index}
                className="flex h-auto min-h-32 w-full flex-col justify-between gap-2 rounded bg-zinc-50 px-4 py-2 shadow-md"
              >
                <div className="flex items-center justify-between gap-2">
                  <div className="flex flex-col">
                    <span className="text-xs font-semibold lg:text-sm 2xl:text-base 3xl:text-lg">
                      {item.name}
                    </span>
                    <span>{item.cnpj}</span>
                    <span>
                      {item.country} -{" "}
                      {item.relationshipLevel === "DIRECT"
                        ? "Direto"
                        : "Indireto"}
                    </span>
                  </div>
                  <Image
                    src="/Icons/briefcase.svg"
                    alt=""
                    width={100}
                    height={100}
                    className="w-6 lg:w-10"
                  />
                </div>
                <div className="flex w-full items-center justify-between gap-4 text-zinc-500">
                  <span>
                    Data de início:{" "}
                    {new Date(item.startDate).toLocaleDateString("pt-BR")}
                  </span>
                  <span>
                    Data de encerramento:{" "}
                    {new Date(item.endDate).toLocaleDateString("pt-BR")}
                  </span>
                </div>
              </div>
            ))
          ) : (
            <span className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 transform">
              Não conseguimos encontrar esses dados.
            </span>
          )}
        </div>
      )}
      <BaseCardFooter />
    </BaseCard>
  );
}
