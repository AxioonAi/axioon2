import { AddressHistory } from "@/components/app/legal/AddressHistory";
import { EconomicRelationships } from "@/components/app/legal/EconomicRelationships";
import { Irs } from "@/components/app/legal/Irs";
import { LegalHeaderCard } from "@/components/app/legal/LegalHeaderCard";
import { LegalProcessList } from "@/components/app/legal/LegalProcessList";
import { OpenDebts } from "@/components/app/legal/OpenDebts";
import { ProtestList } from "@/components/app/legal/ProtestList";

export default function Legal() {
  return (
    <div className="flex flex-col gap-4 pb-20 lg:grid lg:grid-cols-12">
      <div className="lg:col-span-12 lg:row-span-1">
        <LegalHeaderCard title="Jurídico" />
      </div>
      <div className="flex flex-col gap-4 lg:col-span-12 lg:grid lg:h-screen lg:grid-cols-12 lg:grid-rows-12">
        <div className="lg:col-span-6 lg:row-span-6">
          <Irs />
        </div>
        <div className="lg:col-span-6 lg:row-span-6">
          <AddressHistory />
        </div>
        <div className="lg:col-span-6 lg:row-span-6">
          <OpenDebts />
        </div>
        <div className="lg:col-span-6 lg:row-span-6">
          <EconomicRelationships />
        </div>
      </div>
      <div className="flex flex-col gap-4 lg:col-span-12 lg:grid lg:h-screen lg:grid-cols-12 lg:grid-rows-12">
        <div className="lg:col-span-12 lg:row-span-6">
          <ProtestList />
        </div>
        <div className="lg:col-span-12 lg:row-span-6">
          <LegalProcessList />
        </div>
      </div>
    </div>
  );
}
