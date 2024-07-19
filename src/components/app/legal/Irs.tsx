import Image from "next/image";
import { BaseCard } from "@/components/global/BaseCard/BaseCard";
import { BaseCardHeader } from "@/components/global/BaseCard/BaseCardHeader";
import { BaseCardFooter } from "@/components/global/BaseCard/BaseCardFooter";

interface IrsProps {
  IrsData: {
    fullName: string;
    personalData: {
      estimatedIncome: string;
      estimatedProperty: string;
    };
    incomeTax: {
      year: number;
      situation: string;
      bankAgency: string;
    }[];
  };
}

export function Irs({ IrsData }: IrsProps) {
  return (
    <BaseCard className="p-0">
      <BaseCardHeader title="Dados da Receita Federal" />
      <div className="flex w-full flex-col">
        <div className="flex items-center gap-4 p-4">
          <Image
            src="/Logos/irs.png"
            width={100}
            height={100}
            alt=""
            className="w-1/3 md:w-40 lg:w-1/4 xl:w-40"
          />
          <div className="flex flex-col text-[10px] text-black lg:text-xs 2xl:text-sm 3xl:text-base">
            <strong>{IrsData && IrsData.fullName}</strong>
            <span>
              Status: <strong>Regular</strong>
            </span>
            <span>
              Estimativa de Receita Mensal:{" "}
              <strong>
                {IrsData &&
                  IrsData.personalData &&
                  IrsData.personalData.estimatedIncome}
              </strong>
            </span>
            <span>
              Estimativa de Patrimônio Líquido:
              <strong>
                {IrsData &&
                  IrsData.personalData &&
                  IrsData.personalData.estimatedProperty}
              </strong>
            </span>
          </div>
        </div>
        <div className="mb-12 flex h-60 flex-wrap justify-around gap-4 overflow-y-scroll pb-10 lg:mb-0 lg:h-[14.75rem] xl:h-[14.25rem] 2xl:h-[16.75rem] 3xl:h-[26rem]">
          {IrsData && IrsData.incomeTax.length !== 0 ? (
            IrsData.incomeTax.map((item, index) => (
              <div
                key={index}
                className="flex h-auto min-h-16 w-11/12 flex-col items-center justify-between gap-2 rounded-md bg-zinc-50 p-2 shadow-md xl:w-[45%]"
              >
                <strong className="text-[10px] text-[#031E53] lg:text-xs 2xl:text-sm 3xl:text-base">
                  {item.year}
                </strong>
                <strong className="text-center text-xs lg:text-sm 2xl:text-base 3xl:text-lg">
                  {item.situation}
                </strong>
                <strong className="text-[10px] text-zinc-500 lg:text-xs 2xl:text-sm 3xl:text-base">
                  {item.bankAgency}
                </strong>
              </div>
            ))
          ) : (
            <span className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 transform">
              Não conseguimos encontrar esses dados.
            </span>
          )}
        </div>
      </div>
      <BaseCardFooter />
    </BaseCard>
  );
}
