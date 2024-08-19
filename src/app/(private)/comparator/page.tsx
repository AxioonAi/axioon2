import { CommentsBySentiment } from "@/components/app/comparator/CommentsBySentiment";
import { ComparatorHeaderCard } from "@/components/app/comparator/ComparatorHeaderCard";
import { LineGradientChart } from "@/components/app/comparator/LineGradientChart";
import {
  CommentsBySentimentData,
  FollowerProgressionChartData,
  FollowersDonutByGenderChartData,
  FollowersDonutChartData,
  LineGradientChartData,
  ScoreGaugeChartData,
} from "@/components/data/ComparatorData";
import { ComparatorStickyCards } from "@/components/app/comparator/ComparatorStickyCards";
import { ActiveScoreGaugeChart } from "@/components/app/comparator/ActiveScoreGaugeChart";
import { PassiveScoreGaugeChart } from "@/components/app/comparator/PassiveScoreGaugeChart";
import { ActiveFollowersByGenderDonutChart } from "@/components/app/comparator/ActiveFollowersByGenderDonutChart";
import { PassiveFollowersByGenderDonutChart } from "@/components/app/comparator/PassiveFollowersByGenderDonutChart";
import { PassiveFollowersDonutChart } from "@/components/app/comparator/PassiveFollowersDonutChart";
import { ActiveFollowersDonutChart } from "@/components/app/comparator/ActiveFollowersDonutChart";
import { FollowerProgressionChart } from "@/components/app/comparator/FollowerProgressionChart";

export default function Comparator() {
  return (
    <div className="flex flex-col gap-4 pb-20 lg:grid lg:grid-cols-12">
      <div className="lg:col-span-12">
        <ComparatorHeaderCard title="Comparador" />
      </div>
      <ComparatorStickyCards />
      <div className="flex flex-col gap-4 lg:col-span-12 lg:grid lg:h-[120vh] lg:grid-cols-12 lg:grid-rows-12">
        <div className="lg:col-span-3 lg:row-span-4">
          <ActiveFollowersDonutChart
            FollowersDonutChartData={FollowersDonutChartData}
          />
        </div>
        <div className="lg:col-span-6 lg:row-span-4">
          <FollowerProgressionChart
            FollowerProgressionChartData={FollowerProgressionChartData}
          />
        </div>
        <div className="lg:col-span-3 lg:row-span-4">
          <PassiveFollowersDonutChart
            FollowersDonutChartData={FollowersDonutChartData}
          />
        </div>
        <div className="lg:col-span-3 lg:row-span-4">
          <ActiveScoreGaugeChart ScoreGaugeChartData={ScoreGaugeChartData} />
        </div>
        <div className="lg:col-span-6 lg:row-span-4">
          <LineGradientChart LineGradientChartData={LineGradientChartData} />
        </div>
        <div className="lg:col-span-3 lg:row-span-4">
          <PassiveScoreGaugeChart ScoreGaugeChartData={ScoreGaugeChartData} />
        </div>
        <div className="lg:col-span-4 lg:row-span-4">
          <ActiveFollowersByGenderDonutChart
            FollowersDonutChartData={FollowersDonutByGenderChartData}
          />
        </div>
        <div className="lg:col-span-4 lg:row-span-4">
          <CommentsBySentiment
            CommentsBySentimentData={CommentsBySentimentData}
          />
        </div>
        <div className="lg:col-span-4 lg:row-span-4">
          <PassiveFollowersByGenderDonutChart
            FollowersDonutChartData={FollowersDonutByGenderChartData}
          />
        </div>
      </div>
      {/*  <div className="flex flex-col gap-4 lg:col-span-12 lg:grid lg:h-screen lg:grid-cols-12 lg:grid-rows-12">
        <div className="lg:col-span-4 lg:row-span-4">
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
        </div>
      </div>
      <div className="lg:col-span-12 lg:row-span-4">
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
