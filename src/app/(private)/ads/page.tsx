import { AdSummary } from "@/components/app/ads/AdSummary";
import { AgeAndGenderChart } from "@/components/app/ads/AgeAndGenderChart";
import { CommentsDonutGraph } from "@/components/app/home/CommentsDonutGraph";
import { IndicatorsCards } from "@/components/app/home/IndicatorsCards";
import { MentionsHeaderCard } from "@/components/app/mentions/MentionsHeaderCard";
import { AdSummaryData, AgeAndGenderData } from "@/components/data/AdsData";
import { CommentsDonutGraphData } from "@/components/data/HomeData";

export default function Ads() {
  return (
    <div className="flex flex-col gap-4 pb-20 lg:grid lg:grid-cols-12">
      <div className="flex flex-col gap-4 lg:col-span-12 lg:row-span-2 lg:grid lg:grid-cols-12 lg:grid-rows-7">
        <div className="lg:col-span-12 lg:row-span-3">
          <MentionsHeaderCard title="Menções" />
        </div>
        <div className="lg:col-span-12 lg:row-span-4">
          <IndicatorsCards />
        </div>
      </div>
      <div className="flex flex-col gap-4 lg:col-span-12 lg:grid lg:h-[80vh] lg:grid-cols-12 lg:grid-rows-10">
        <div className="lg:col-span-7 lg:row-span-5 xl:col-span-8">
          <AgeAndGenderChart AgeAndGenderData={AgeAndGenderData} />
        </div>
        <div className="lg:col-span-5 lg:row-span-5 xl:col-span-4">
          <CommentsDonutGraph CommentsDonutGraphData={CommentsDonutGraphData} />
        </div>
        <div className="lg:col-span-12 lg:row-span-7">
          <AdSummary AdSummaryData={AdSummaryData} />
        </div>
      </div>
    </div>
  );
}
