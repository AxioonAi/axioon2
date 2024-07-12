import { twMerge } from "tailwind-merge";
import { CommentsDonutGraph } from "@/components/app/home/CommentsDonutGraph";
import { CommentsSummary } from "@/components/app/home/CommentsSummary";
import { DefendantsAndDetractorsList } from "@/components/app/home/DefendantsAndDetractorsList";
import { EngagementTimes } from "@/components/app/home/EngagementTimes";
import { PostsAndComments } from "@/components/app/home/PostsAndComments";
import { WordCloud } from "@/components/app/home/WordCloud";
import { WordsList } from "@/components/app/home/WordsList";
import { PositiveNegativeCommentsChart } from "@/components/app/mentions/PositiveNegativeCommentsChart";
import {
  CommentsDonutGraphData,
  CommentsSummaryData,
  DefendantsAndDetractorsData,
  EngagementTimesData,
  FollowerProgressionChartData,
  LineGradientChartData,
  PositiveNegativeCommentsData,
  PostsAndCommentsData,
  ScoreGaugeChartData,
  WordCloudData,
  WordsListData,
} from "@/components/data/HomeData";
import { ScoreGaugeChart } from "@/components/app/mentions/ScoreGaugeChart";
import { LineGradientChart } from "@/components/app/home/LineGradientChart";
import { FollowerProgressionChart } from "@/components/app/home/FollowerProgressionChart";
import { HeaderCards } from "@/components/app/home/HeaderCards";
import { IndicatorsCards } from "@/components/app/home/IndicatorsCards";

export default function Home() {
  return (
    <div className="flex flex-col gap-4 pb-20 lg:grid lg:grid-cols-12">
      <div className="lg:col-span-12">
        <HeaderCards />
        <IndicatorsCards />
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
          <CommentsSummary CommentsSummaryData={CommentsSummaryData} />
        </div>
        <div className="lg:col-span-5 lg:row-span-4">
          <CommentsDonutGraph CommentsDonutGraphData={CommentsDonutGraphData} />
        </div>
        <div className="lg:col-span-8 lg:row-span-4">
          <PositiveNegativeCommentsChart
            PositiveNegativeCommentsData={PositiveNegativeCommentsData}
            headerData={PositiveNegativeCommentsData.headerData.map(
              (data, index) => (
                <div
                  key={index}
                  className="flex w-1/3 items-center gap-2 text-[10px] lg:text-xs 2xl:text-sm 3xl:text-base"
                >
                  <div
                    className={twMerge(
                      "min-h-3 min-w-3 rounded-full",
                      data.color,
                    )}
                  />
                  <div className="flex flex-col">
                    <strong>{data.value}</strong>
                    <span>{data.title}</span>
                  </div>
                </div>
              ),
            )}
          />
        </div>
        <div className="lg:col-span-4 lg:row-span-4">
          <DefendantsAndDetractorsList
            DefendantsAndDetractorsData={DefendantsAndDetractorsData}
          />
        </div>
        <div className="lg:col-span-7 lg:row-span-4">
          <WordCloud WordCloudData={WordCloudData} />
        </div>
        <div className="lg:col-span-5 lg:row-span-4">
          <WordsList WordsListData={WordsListData} />
        </div>
      </div>
      <div className="lg:col-span-12">
        <PostsAndComments PostsAndCommentsData={PostsAndCommentsData} />
      </div>
    </div>
  );
}
