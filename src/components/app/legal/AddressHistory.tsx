import Image from "next/image";
import { BaseCard } from "@/components/global/BaseCard/BaseCard";
import { BaseCardFooter } from "@/components/global/BaseCard/BaseCardFooter";
import { BaseCardHeader } from "@/components/global/BaseCard/BaseCardHeader";

interface AddressHistoryProps {
  AddressHistoryData: {
    address: string;
    zipCode: string;
    city: string;
    state: string;
  }[];
}

export function AddressHistory({ AddressHistoryData }: AddressHistoryProps) {
  return (
    <BaseCard className="p-0">
      <BaseCardHeader title="Histórico de Endereços" />
      <div className="mb-12 flex h-60 flex-wrap justify-around gap-4 overflow-y-scroll p-4 pb-10 text-[10px] lg:h-full xl:text-xs 2xl:text-sm 3xl:text-base">
        {AddressHistoryData && AddressHistoryData.length !== 0 ? (
          AddressHistoryData.map((item, index) => (
            <div
              key={index}
              className="flex h-auto min-h-20 w-full justify-between gap-2 rounded bg-zinc-50 px-8 py-4 shadow-md"
            >
              <div className="flex flex-col gap-2">
                <span className="text-xs font-semibold lg:text-sm 2xl:text-base 3xl:text-lg">
                  {item.address}
                </span>
                <span className="text-[10px] lg:text-xs 2xl:text-sm 3xl:text-base">
                  <strong>{item.zipCode} - </strong>
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
      <BaseCardFooter />
    </BaseCard>
  );
}
