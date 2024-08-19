import { CommentsDonutGraph } from "@/components/app/home/CommentsDonutGraph";
import { CommentsSummary } from "@/components/app/home/CommentsSummary";
import { DefendantsAndDetractorsList } from "@/components/app/home/DefendantsAndDetractorsList";
import { EngagementTimes } from "@/components/app/home/EngagementTimes";
import { PostsAndComments } from "@/components/app/home/PostsAndComments";
import { WordCloud } from "@/components/app/home/WordCloud";
import { WordsList } from "@/components/app/home/WordsList";
import {
  CommentsDonutGraphData,
  EngagementTimesData,
  FollowerProgressionChartData,
  LineGradientChartData,
  ScoreGaugeChartData,
  WordCloudData,
} from "@/components/data/HomeData";
import { LineGradientChart } from "@/components/app/home/LineGradientChart";
import { FollowerProgressionChart } from "@/components/app/home/FollowerProgressionChart";
import { HeaderCards } from "@/components/app/home/HeaderCards";
import { IndicatorsCards } from "@/components/app/home/IndicatorsCards";
import { HomeHeaderCard } from "@/components/app/home/HomeHeaderCard";
import { PositiveNegativeWrapper } from "@/components/app/home/PositiveNegativeWrapper";
import { ScoreGaugeChart } from "@/components/app/home/ScoreGaugeChart";

export default function Home() {
  return (
    <div className="flex flex-col gap-4 pb-20 lg:grid lg:grid-cols-12">
      <div className="lg:col-span-12">
        <HomeHeaderCard title="Mídias Sociais" />
      </div>

      <div className="lg:col-span-12">
        <HeaderCards />
        <div className="h-40">
          <IndicatorsCards />
        </div>
      </div>
      <div className="flex flex-col gap-4 lg:col-span-12 lg:grid lg:h-[75vh] lg:grid-cols-12 lg:grid-rows-12">
        <div className="lg:col-span-8 lg:row-span-5">
          <LineGradientChart LineGradientChartData={LineGradientChartData} />
        </div>
        <div className="col-span-4 row-span-5">
          <ScoreGaugeChart ScoreGaugeChartData={ScoreGaugeChartData} />
        </div>
        <div className="col-span-7 row-span-7">
          <FollowerProgressionChart
            FollowerProgressionChartData={FollowerProgressionChartData}
          />
        </div>
        <div className="col-span-5 row-span-7">
          <EngagementTimes EngagementTimesData={EngagementTimesData} />
        </div>
      </div>
      <div className="flex flex-col gap-4 lg:col-span-12 lg:grid lg:h-[120vh] lg:grid-cols-12 lg:grid-rows-12">
        <div className="lg:col-span-7 lg:row-span-4">
          <CommentsSummary />
        </div>
        <div className="lg:col-span-5 lg:row-span-4">
          <CommentsDonutGraph CommentsDonutGraphData={CommentsDonutGraphData} />
        </div>
        <div className="lg:col-span-8 lg:row-span-4">
          <PositiveNegativeWrapper />
        </div>
        <div className="lg:col-span-4 lg:row-span-4">
          <DefendantsAndDetractorsList />
        </div>
        <div className="lg:col-span-7 lg:row-span-4">
          <WordCloud WordCloudData={WordCloudData} />
        </div>
        <div className="lg:col-span-5 lg:row-span-4">
          <WordsList />
        </div>
      </div>
      <div className="lg:col-span-12">
        <PostsAndComments />
      </div>
    </div>
  );
}
