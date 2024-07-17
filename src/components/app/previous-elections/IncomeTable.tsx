import { EllipsisVertical } from "lucide-react";
import { BaseCard } from "@/components/global/BaseCard/BaseCard";
import { BaseCardHeader } from "@/components/global/BaseCard/BaseCardHeader";
import { BaseCardFooter } from "@/components/global/BaseCard/BaseCardFooter";

interface IncomeTableProps {
  IncomeTableData: {
    id: string;
    name: string;
    type: string;
    date: Date;
    value: number;
  }[];
}

export function IncomeTable({ IncomeTableData }: IncomeTableProps) {
  return (
    <BaseCard className="p-0">
      <BaseCardHeader
        title="Lista detalhada de Receitas"
        children={
          <div className="flex h-8 w-8 items-center justify-center rounded-lg bg-zinc-100 text-zinc-700">
            <EllipsisVertical size={14} />
          </div>
        }
      />
      <div className="mb-12 flex h-80 w-full flex-col overflow-x-scroll overflow-y-scroll p-4 lg:mb-0 lg:h-[73%] lg:overflow-x-auto 3xl:h-4/5">
        {IncomeTableData.map((item, index) => (
          <div
            className="flex w-max gap-4 border-b border-b-zinc-300 p-4 text-xs lg:grid lg:grid-cols-10 lg:text-sm xl:w-full 2xl:text-base 3xl:text-lg"
            key={index}
          >
            <div className="flex flex-col justify-center lg:col-span-2">
              <span className="text-zinc-500">
                Número do Documento de Doação
              </span>
              <span className="font-semibold">{item.id}</span>
            </div>
            <div className="flex flex-col justify-center lg:col-span-2">
              <span className="text-zinc-500">Nome do Doador</span>
              <span className="font-semibold">{item.name}</span>
            </div>
            <div className="flex flex-col justify-center lg:col-span-2">
              <span className="text-zinc-500">Tipo de Recurso</span>
              <span className="font-semibold">{item.type}</span>
            </div>
            <div className="flex flex-col justify-center lg:col-span-2">
              <span className="text-zinc-500">Data de Doação</span>
              <span className="font-semibold">
                {item.date.toLocaleDateString("pt-BR")}
              </span>
            </div>
            <div className="flex flex-col justify-center lg:col-span-2">
              <span className="text-zinc-500">Valor da Doação</span>
              <span className="font-semibold">
                {item.value.toLocaleString("pt-BR", {
                  style: "currency",
                  currency: "BRL",
                })}
              </span>
            </div>
          </div>
        ))}
      </div>
      <BaseCardFooter />
    </BaseCard>
  );
}
