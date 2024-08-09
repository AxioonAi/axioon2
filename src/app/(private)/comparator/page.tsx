import { twMerge } from "tailwind-merge";
import { BaseComparativeCard } from "@/components/app/comparator/BaseComparativeCard";
import { CommentsBySentiment } from "@/components/app/comparator/CommentsBySentiment";
import { CommentsDonutChart } from "@/components/app/comparator/CommentsDonutChart";
import { ComparatorHeaderCard } from "@/components/app/comparator/ComparatorHeaderCard";
import { FollowerProgressionChart } from "@/components/app/comparator/FollowerProgressionChart";
import { FollowersDonutChart } from "@/components/app/comparator/FollowersDonutChart";
import { LineGradientChart } from "@/components/app/comparator/LineGradientChart";
import { PositiveCommentsChart } from "@/components/app/comparator/PositiveCommentsChart";
import { WordCloud } from "@/components/app/home/WordCloud";
import { ScoreGaugeChart } from "@/components/app/mentions/ScoreGaugeChart";
import {
  BaseComparativeCardData,
  CommentsBySentimentData,
  CommentsDonutChartData,
  FollowerProgressionChartData,
  FollowersDonutChartData,
  LineGradientChartData,
  LineGradientMentionsChartData,
  NegativeCommentsData,
  PositiveCommentsData,
  ScoreGaugeChartData,
  WordCloudData,
} from "@/components/data/ComparatorData";
import { NegativeCommentsChart } from "@/components/app/comparator/NegativeCommentsChart";
import { MentionsSentimentChart } from "@/components/app/mentions/MentionsSentimentChart";
import { MentionsSentimentChartData } from "@/components/data/MentionsData";
import { AgeAndGenderChart } from "@/components/app/ads/AgeAndGenderChart";
import { AgeAndGenderData } from "@/components/data/AdsData";
import { LineGradientMentionsChart } from "@/components/app/comparator/LineGradientMentionsChart";
import { BaseCard } from "@/components/global/BaseCard/BaseCard";
import { ComparatorStickyCards } from "@/components/app/comparator/ComparatorStickyCards";

export default function Comparator() {
  return (
    <div className="flex flex-col gap-4 pb-20 lg:grid lg:grid-cols-12">
      <div className="lg:col-span-12">
        <ComparatorHeaderCard title="Comparador" />
      </div>
      <ComparatorStickyCards />
      <div className="flex flex-col gap-4 lg:col-span-12 lg:grid lg:h-[120vh] lg:grid-cols-12 lg:grid-rows-12">
        <div className="lg:col-span-3 lg:row-span-4">
          <FollowersDonutChart
            FollowersDonutChartData={FollowersDonutChartData}
          />
        </div>
        <div className="lg:col-span-6 lg:row-span-4">
          <FollowerProgressionChart
            FollowerProgressionChartData={FollowerProgressionChartData}
          />
        </div>
        <div className="lg:col-span-3 lg:row-span-4">
          <FollowersDonutChart
            FollowersDonutChartData={FollowersDonutChartData}
          />
        </div>
        {/*  <div className="lg:col-span-3 lg:row-span-4">
          <ScoreGaugeChart ScoreGaugeChartData={ScoreGaugeChartData} />
        </div>
        <div className="lg:col-span-6 lg:row-span-4">
          <LineGradientChart LineGradientChartData={LineGradientChartData} />
        </div>
        <div className="lg:col-span-3 lg:row-span-4">
          <ScoreGaugeChart ScoreGaugeChartData={ScoreGaugeChartData} />
        </div>
        <div className="lg:col-span-4 lg:row-span-4">
          <CommentsDonutChart CommentsDonutChartData={CommentsDonutChartData} />
        </div>
        <div className="lg:col-span-4 lg:row-span-4">
          <CommentsBySentiment
            CommentsBySentimentData={CommentsBySentimentData}
          />
        </div>
        <div className="lg:col-span-4 lg:row-span-4">
          <CommentsDonutChart CommentsDonutChartData={CommentsDonutChartData} />
        </div> */}
      </div>
      <div className="flex flex-col gap-4 lg:col-span-12 lg:grid lg:h-screen lg:grid-cols-12 lg:grid-rows-12">
        {/* <div className="lg:col-span-4 lg:row-span-4">
          <WordCloud WordCloudData={WordCloudData} />
        </div>
        <div className="lg:col-span-4 lg:row-span-4">
          <WordCloud WordCloudData={WordCloudData} />
        </div>
        <div className="lg:col-span-4 lg:row-span-4">
          <WordCloud WordCloudData={WordCloudData} />
        </div>
        <div className="lg:col-span-6 lg:row-span-4">
          <PositiveCommentsChart
            PositiveCommentsChartData={PositiveCommentsData}
            headerData={PositiveCommentsData.headerData.map((data, index) => (
              <div
                key={index}
                className="flex w-1/3 items-center gap-1 text-[10px] lg:text-xs 2xl:text-sm 3xl:text-base"
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
            ))}
          />
        </div>
        <div className="lg:col-span-6 lg:row-span-4">
          <NegativeCommentsChart
            NegativeCommentsChartData={NegativeCommentsData}
            headerData={PositiveCommentsData.headerData.map((data, index) => (
              <div
                key={index}
                className="flex w-1/3 items-center gap-1 text-[10px] lg:text-xs 2xl:text-sm 3xl:text-base"
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
            ))}
          />
        </div>
        <div className="lg:col-span-3 lg:row-span-4">
          <ScoreGaugeChart ScoreGaugeChartData={ScoreGaugeChartData} />
        </div>
        <div className="lg:col-span-6 lg:row-span-4">
          <LineGradientMentionsChart
            LineGradientMentionsChartData={LineGradientMentionsChartData}
          />
        </div>
        <div className="lg:col-span-3 lg:row-span-4">
          <ScoreGaugeChart ScoreGaugeChartData={ScoreGaugeChartData} />
        </div> */}
      </div>
      {/* <div className="lg:col-span-12 lg:row-span-4">
        <MentionsSentimentChart
          MentionsSentimentChartData={MentionsSentimentChartData}
        />
      </div>
      <div className="flex flex-col gap-4 lg:col-span-12 lg:grid lg:h-[120vh] lg:grid-cols-12 lg:grid-rows-12">
        <div className="lg:col-span-4 lg:row-span-4">
          <WordCloud WordCloudData={WordCloudData} />
        </div>
        <div className="lg:col-span-4 lg:row-span-4">
          <WordCloud WordCloudData={WordCloudData} />
        </div>
        <div className="lg:col-span-4 lg:row-span-4">
          <WordCloud WordCloudData={WordCloudData} />
        </div>
        <div className="lg:col-span-8 lg:row-span-4">
          <AgeAndGenderChart AgeAndGenderData={AgeAndGenderData} />
        </div>
        <div className="lg:col-span-4 lg:row-span-4">
          <FollowersDonutChart
            FollowersDonutChartData={FollowersDonutChartData}
          />
        </div>
        <div className="lg:col-span-8 lg:row-span-4">
          <AgeAndGenderChart AgeAndGenderData={AgeAndGenderData} />
        </div>
        <div className="lg:col-span-4 lg:row-span-4">
          <FollowersDonutChart
            FollowersDonutChartData={FollowersDonutChartData}
          />
        </div>
      </div> */}
    </div>
  );
}
