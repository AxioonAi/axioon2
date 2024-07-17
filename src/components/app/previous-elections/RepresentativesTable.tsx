import { EllipsisVertical } from "lucide-react";
import { BaseCard } from "@/components/global/BaseCard/BaseCard";
import { BaseCardHeader } from "@/components/global/BaseCard/BaseCardHeader";
import { BaseCardFooter } from "@/components/global/BaseCard/BaseCardFooter";

interface RepresentativesTableProps {
  RepresentativesTableData: {
    name: string;
    role: string;
    startDate: Date;
    endDate: Date;
  }[];
}

export function RepresentativesTable({
  RepresentativesTableData,
}: RepresentativesTableProps) {
  return (
    <BaseCard className="p-0">
      <BaseCardHeader
        title="Lista de Representantes"
        children={
          <div className="flex h-8 w-8 items-center justify-center rounded-lg bg-zinc-100 text-zinc-700">
            <EllipsisVertical size={14} />
          </div>
        }
      />
      <div className="mb-12 flex h-80 w-full flex-col overflow-x-scroll overflow-y-scroll p-4 text-xs lg:mb-0 lg:h-[73%] lg:overflow-x-auto lg:text-sm 2xl:text-base 3xl:h-4/5 3xl:text-lg">
        {RepresentativesTableData.map((item, index) => (
          <div
            className="flex w-max gap-4 border-b border-b-zinc-300 p-4 text-xs lg:grid lg:grid-cols-12 lg:text-sm xl:w-full 2xl:text-base 3xl:text-lg"
            key={index}
          >
            <div className="flex flex-col justify-center lg:col-span-3">
              <span className="text-zinc-500">Nome</span>
              <span className="font-semibold">{item.name}</span>
            </div>
            <div className="flex flex-col justify-center lg:col-span-3">
              <span className="text-zinc-500">Cargo</span>
              <span className="font-semibold">{item.role}</span>
            </div>
            <div className="flex flex-col justify-center lg:col-span-3">
              <span className="text-zinc-500">Início</span>
              <span className="font-semibold">
                {item.startDate.toLocaleDateString("pt-BR")}
              </span>
            </div>
            <div className="flex flex-col justify-center lg:col-span-3">
              <span className="text-zinc-500">Final</span>
              <span className="font-semibold">
                {item.endDate.toLocaleDateString("pt-BR")}
              </span>
            </div>
          </div>
        ))}
      </div>
      <BaseCardFooter />
    </BaseCard>
  );
}
