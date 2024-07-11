import { twMerge } from "tailwind-merge";
import { CommentsDonutGraph } from "@/components/app/home/CommentsDonutGraph";
import { CommentsSummary } from "@/components/app/home/CommentsSummary";
import { DefendantsAndDetractorsList } from "@/components/app/home/DefendantsAndDetractorsList";
import { EngagementTimes } from "@/components/app/home/EngagementTimes";
import { PostsAndComments } from "@/components/app/home/PostsAndComments";
import { SocialMediaBaseCard } from "@/components/app/home/SocialMediaBaseCard";
import { WordCloud } from "@/components/app/home/WordCloud";
import { WordsList } from "@/components/app/home/WordsList";
import { PositiveNegativeCommentsChart } from "@/components/app/mentions/PositiveNegativeCommentsChart";
import {
  CommentsDonutGraphData,
  CommentsSummaryData,
  DefendantsAndDetractorsData,
  EngagementTimesData,
  FollowerProgressionChartData,
  IndicatorsBaseCardData,
  LineGradientChartData,
  PositiveNegativeCommentsData,
  PostsAndCommentsData,
  ScoreGaugeChartData,
  SocialMediaBaseData,
  WordCloudData,
  WordsListData,
} from "@/components/data/HomeData";
import { IndicatorsBaseCard } from "@/components/app/home/IndicatorsBaseCard";
import { ScoreGaugeChart } from "@/components/app/mentions/ScoreGaugeChart";
import { LineGradientChart } from "@/components/app/home/LineGradientChart";
import { FollowerProgressionChart } from "@/components/app/home/FollowerProgressionChart";

export default function Home() {
  return (
    <div className="grid grid-cols-12 gap-4">
      <div className="col-span-12 grid h-[120vh] grid-cols-12 grid-rows-12 gap-4">
        <div className="col-span-12 row-span-3 grid grid-cols-12 grid-rows-5 gap-4">
          {SocialMediaBaseData.map((data, index) => (
            <div className="col-span-3 row-span-3" key={index}>
              <SocialMediaBaseCard SocialMediaData={data} />
            </div>
          ))}

          {IndicatorsBaseCardData.map((data, index) => (
            <div className="col-span-4 row-span-2" key={index}>
              <IndicatorsBaseCard
                IndicatorsData={data.IndicatorsData}
                ChartOptions={data.ChartOptions}
              />
            </div>
          ))}
        </div>
        <div className="col-span-8 row-span-4">
          <LineGradientChart LineGradientChartData={LineGradientChartData} />
        </div>
        <div className="col-span-4 row-span-4">
          <ScoreGaugeChart ScoreGaugeChartData={ScoreGaugeChartData} />
        </div>
        <div className="col-span-7 row-span-5">
          <FollowerProgressionChart
            FollowerProgressionChartData={FollowerProgressionChartData}
          />
        </div>
        <div className="col-span-5 row-span-5">
          <EngagementTimes EngagementTimesData={EngagementTimesData} />
        </div>
      </div>
      <div className="col-span-12 grid h-[150vh] grid-cols-12 grid-rows-12 gap-4">
        <div className="col-span-7 row-span-4">
          <CommentsSummary CommentsSummaryData={CommentsSummaryData} />
        </div>
        <div className="col-span-5 row-span-4">
          <CommentsDonutGraph CommentsDonutGraphData={CommentsDonutGraphData} />
        </div>
        <div className="col-span-8 row-span-4">
          <PositiveNegativeCommentsChart
            PositiveNegativeCommentsData={PositiveNegativeCommentsData}
            headerData={PositiveNegativeCommentsData.headerData.map(
              (data, index) => (
                <div
                  key={index}
                  className="flex w-1/3 items-center gap-2 text-xs"
                >
                  <div
                    className={twMerge("h-3 w-3 rounded-full", data.color)}
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
        <div className="col-span-4 row-span-4">
          <DefendantsAndDetractorsList
            DefendantsAndDetractorsData={DefendantsAndDetractorsData}
          />
        </div>
        <div className="col-span-7 row-span-4">
          <WordCloud WordCloudData={WordCloudData} />
        </div>
        <div className="col-span-5 row-span-4">
          <WordsList WordsListData={WordsListData} />
        </div>
      </div>
      <div className="col-span-12">
        <PostsAndComments PostsAndCommentsData={PostsAndCommentsData} />
      </div>
    </div>
  );
}
