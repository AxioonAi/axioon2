import { EllipsisVertical } from "lucide-react";
import { BaseCard } from "@/components/global/BaseCard/BaseCard";
import { BaseCardHeader } from "@/components/global/BaseCard/BaseCardHeader";
import { BaseCardFooter } from "@/components/global/BaseCard/BaseCardFooter";

interface ExpensesTableProps {
  ExpensesTableData: {
    name: string;
    description: string;
    type: string;
    expenseType: string;
    beneficiary: string;
    date: Date;
    value: number;
  }[];
}

export function ExpensesTable({ ExpensesTableData }: ExpensesTableProps) {
  return (
    <BaseCard className="p-0">
      <BaseCardHeader
        title="Lista detalhada de Despesas"
        children={
          <div className="flex h-8 w-8 items-center justify-center rounded-lg bg-zinc-100 text-zinc-700">
            <EllipsisVertical size={14} />
          </div>
        }
      />
      <div className="mb-12 flex h-80 w-full flex-col overflow-x-scroll overflow-y-scroll p-4 lg:mb-0 lg:h-[73%] lg:overflow-x-auto 3xl:h-4/5">
        {ExpensesTableData.map((item, index) => (
          <div
            className="flex w-max gap-4 border-b border-b-zinc-300 p-4 text-xs lg:grid lg:grid-cols-12 lg:text-sm xl:w-full 2xl:text-base 3xl:text-lg"
            key={index}
          >
            <div className="flex flex-col justify-center lg:col-span-2">
              <span className="text-zinc-500">Nome do Fornecedor</span>
              <span className="font-semibold">{item.name}</span>
            </div>
            <div className="flex flex-col justify-center lg:col-span-1">
              <span className="text-zinc-500">Descrição</span>
              <span className="font-semibold">{item.description}</span>
            </div>
            <div className="flex flex-col justify-center lg:col-span-2">
              <span className="text-zinc-500">Tipo de Recurso</span>
              <span className="font-semibold">{item.type}</span>
            </div>
            <div className="flex flex-col justify-center lg:col-span-2">
              <span className="text-zinc-500">Tipo de Despesas</span>
              <span className="font-semibold">{item.expenseType}</span>
            </div>
            <div className="flex flex-col justify-center lg:col-span-2">
              <span className="text-zinc-500">Beneficiado</span>
              <span className="font-semibold">{item.beneficiary}</span>
            </div>
            <div className="flex flex-col justify-center lg:col-span-1">
              <span className="text-zinc-500">Data da Despesa</span>
              <span className="font-semibold">
                {item.date.toLocaleDateString("pt-BR")}
              </span>
            </div>
            <div className="flex flex-col justify-center lg:col-span-2">
              <span className="text-zinc-500">Valor da Despesa</span>
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
