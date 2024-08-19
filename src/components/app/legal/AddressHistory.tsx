"use client";
import Image from "next/image";
import { useEffect, useState } from "react";
import { BaseCard } from "@/components/global/BaseCard/BaseCard";
import { BaseCardFooter } from "@/components/global/BaseCard/BaseCardFooter";
import { BaseCardHeader } from "@/components/global/BaseCard/BaseCardHeader";
import { useLegalDataContext } from "@/context/LegalData";
import { Skeleton } from "@/components/global/Skeleton";

interface AddressessProps {
  address: string;
  addressType: string;
  city: string;
  country: string;
  id: string;
  neighborhood: string;
  politician_id: string;
  state: string;
  zipcode: string;
}

export function AddressHistory() {
  const [addressess, setAddressess] = useState<AddressessProps[]>([]);
  const { legalData, isGettingData } = useLegalDataContext();

  useEffect(() => {
    if (legalData) {
      setAddressess(legalData.address);
    }
  }, [legalData]);

  return (
    <BaseCard className="p-0">
      <BaseCardHeader title="Histórico de Endereços" />
      {isGettingData ? (
        <Skeleton className="mx-auto mt-4 h-96 w-11/12" />
      ) : (
        <div className="mb-12 flex h-60 flex-wrap justify-around gap-4 overflow-y-scroll p-4 pb-10 text-[10px] lg:h-full xl:text-xs 2xl:text-sm 3xl:text-base">
          {addressess && addressess.length !== 0 ? (
            addressess.map((item, index) => (
              <div
                key={index}
                className="flex h-auto min-h-20 w-full justify-between gap-2 rounded bg-zinc-50 px-8 py-4 shadow-md"
              >
                <div className="flex flex-col gap-2">
                  <span className="text-xs font-semibold lg:text-sm 2xl:text-base 3xl:text-lg">
                    {item.address}
                  </span>
                  <span className="text-[10px] lg:text-xs 2xl:text-sm 3xl:text-base">
                    <strong>{item.zipcode} - </strong>
                    {item.city} - {item.state}
                  </span>
                </div>
                <Image
                  src="/Icons/briefcase.svg"
                  width={100}
                  height={100}
                  alt=""
                  className="w-6 lg:w-10"
                />
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
