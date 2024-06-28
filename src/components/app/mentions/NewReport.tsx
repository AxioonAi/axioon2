import { FileCheck } from "lucide-react";
import { BaseCard } from "@/components/global/BaseCard/BaseCard";

export function NewReport() {
  return (
    <BaseCard className="cursor-pointer flex-row items-center justify-center gap-8 bg-gray-800 text-2xl text-white transition duration-300 hover:shadow-lg hover:shadow-black/30">
      <strong>Gerar Novo Relatório</strong>
      <div className="flex h-14 w-14 items-center justify-center rounded-lg bg-sky-700 p-2 text-sky-300">
        <FileCheck size={30} />
      </div>
    </BaseCard>
  );
}
