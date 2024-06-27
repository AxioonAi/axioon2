import { BaseCard } from "@/components/global/BaseCard/BaseCard";

export default function Mentions() {
  return (
    <div className="grid grid-cols-12 grid-rows-12 gap-8">
      <div className="col-span-2 row-span-1">
        <BaseCard>a</BaseCard>
      </div>
      <div className="col-span-2 row-span-1">
        <BaseCard>a</BaseCard>
      </div>
      <div className="col-span-2 row-span-1">
        <BaseCard>a</BaseCard>
      </div>
      <div className="col-span-2 row-span-1">
        <BaseCard>a</BaseCard>
      </div>
      <div className="col-span-4 row-span-2">
        <BaseCard>a</BaseCard>
      </div>
      <div className="col-span-8 row-span-11">
        <BaseCard>a</BaseCard>
      </div>
      <div className="col-span-4 row-span-3">
        <BaseCard>a</BaseCard>
      </div>
      <div className="col-span-4 row-span-4">
        <BaseCard>a</BaseCard>
      </div>
      <div className="col-span-4 row-span-3">
        <BaseCard>a</BaseCard>
      </div>
      <div className="col-span-12 grid h-[80vh] grid-cols-12 grid-rows-11 gap-8">
        <div className="col-span-8 row-span-6">
          <BaseCard>a</BaseCard>
        </div>
        <div className="col-span-4 row-span-5">
          <BaseCard>a</BaseCard>
        </div>
        <div className="col-span-4 row-span-2">
          <BaseCard>a</BaseCard>
        </div>
        <div className="col-span-5 row-span-5">
          <BaseCard>a</BaseCard>
        </div>
        <div className="col-span-3 row-span-5">
          <BaseCard>a</BaseCard>
        </div>
        <div className="col-span-4 row-span-2">
          <BaseCard>a</BaseCard>
        </div>
        <div className="col-span-4 row-span-2">
          <BaseCard>a</BaseCard>
        </div>
      </div>
    </div>
  );
}
