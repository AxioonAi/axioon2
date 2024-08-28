import { CommentsBySentiment } from "@/components/app/comparator/CommentsBySentiment";
import { ComparatorHeaderCard } from "@/components/app/comparator/ComparatorHeaderCard";
import { LineGradientChart } from "@/components/app/comparator/LineGradientChart";
import {
  FollowerProgressionChartData,
  FollowersDonutByGenderChartData,
  FollowersDonutChartData,
  LineGradientChartData,
  LineGradientSentimentChartData,
  ScoreGaugeChartData,
  WordCloudData,
} from "@/components/data/ComparatorData";
import { ComparatorStickyCards } from "@/components/app/comparator/ComparatorStickyCards";
import { ActiveScoreGaugeChart } from "@/components/app/comparator/ActiveScoreGaugeChart";
import { PassiveScoreGaugeChart } from "@/components/app/comparator/PassiveScoreGaugeChart";
import { ActiveFollowersByGenderDonutChart } from "@/components/app/comparator/ActiveFollowersByGenderDonutChart";
import { PassiveFollowersByGenderDonutChart } from "@/components/app/comparator/PassiveFollowersByGenderDonutChart";
import { PassiveFollowersDonutChart } from "@/components/app/comparator/PassiveFollowersDonutChart";
import { ActiveFollowersDonutChart } from "@/components/app/comparator/ActiveFollowersDonutChart";
import { FollowerProgressionChart } from "@/components/app/comparator/FollowerProgressionChart";
import { ActiveWordCloud } from "@/components/app/comparator/ActiveWordCloud";
import { PassiveWordCloud } from "@/components/app/comparator/PassiveWordCloud";
import { WordCloud } from "@/components/app/comparator/WordCloud";
import { PositiveWrapper } from "@/components/app/comparator/PositiveCommentsWrapper";
import { NegativeWrapper } from "@/components/app/comparator/NegativeCommentsWrapper";
import { LineGradientMentionsChart } from "@/components/app/comparator/LineGradientMentionsChart";
import { ActiveMentionsScoreGaugeChart } from "@/components/app/comparator/ActiveMentionsScoreGaugeChart";
import { PassiveMentionsScoreGaugeChart } from "@/components/app/comparator/PassiveMentionsScoreGaugeChart";
import { ActiveMentionsWordCloud } from "@/components/app/comparator/ActiveMentionsWordCloud";
import { PassiveMentionsWordCloud } from "@/components/app/comparator/PassiveMentionsWordCloud";
import { MentionsWordCloud } from "@/components/app/comparator/MentionsWordCloud";
import { AgeAndGenderData } from "@/components/data/AdsData";
import { ActiveAgeAndGenderChart } from "@/components/app/comparator/ActiveAgeAndGenderChart";
import { PassiveAgeAndGenderChart } from "@/components/app/comparator/PassiveAgeAndGenderChart";

export default function Comparator() {
  return (
    <div className="flex flex-col gap-4 pb-20 lg:grid lg:grid-cols-12">
      <div className="lg:col-span-12">
        <ComparatorHeaderCard title="Comparador" />
      </div>
      <ComparatorStickyCards />
      <div className="flex flex-col gap-4 lg:col-span-12 lg:grid lg:h-[120vh] lg:grid-cols-12 lg:grid-rows-12">
        <div className="lg:col-span-4 lg:row-span-4 2xl:col-span-3">
          <ActiveFollowersDonutChart
            FollowersDonutChartData={FollowersDonutChartData}
          />
        </div>
        <div className="lg:col-span-4 lg:row-span-4 2xl:col-span-6">
          <FollowerProgressionChart
            FollowerProgressionChartData={FollowerProgressionChartData}
          />
        </div>
        <div className="lg:col-span-4 lg:row-span-4 2xl:col-span-3">
          <PassiveFollowersDonutChart
            FollowersDonutChartData={FollowersDonutChartData}
          />
        </div>
        <div className="lg:col-span-3 lg:row-span-4">
          <ActiveScoreGaugeChart ScoreGaugeChartData={ScoreGaugeChartData} />
        </div>
        <div className="lg:col-span-6 lg:row-span-4">
          <LineGradientChart
            LineGradientChartData={LineGradientSentimentChartData}
          />
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
          <CommentsBySentiment />
        </div>
        <div className="lg:col-span-4 lg:row-span-4">
          <PassiveFollowersByGenderDonutChart
            FollowersDonutChartData={FollowersDonutByGenderChartData}
          />
        </div>
      </div>
      <div className="flex flex-col gap-4 lg:col-span-12 lg:grid lg:h-screen lg:grid-cols-12 lg:grid-rows-12">
        <div className="lg:col-span-4 lg:row-span-4">
          <ActiveWordCloud WordCloudData={WordCloudData} />
        </div>
        <div className="lg:col-span-4 lg:row-span-4">
          <WordCloud WordCloudData={WordCloudData} />
        </div>
        <div className="lg:col-span-4 lg:row-span-4">
          <PassiveWordCloud WordCloudData={WordCloudData} />
        </div>
        <div className="lg:col-span-6 lg:row-span-4">
          <PositiveWrapper />
        </div>
        <div className="lg:col-span-6 lg:row-span-4">
          <NegativeWrapper />
        </div>
        <div className="lg:col-span-3 lg:row-span-4">
          <ActiveMentionsScoreGaugeChart
            ScoreGaugeChartData={ScoreGaugeChartData}
          />
        </div>
        <div className="lg:col-span-6 lg:row-span-4">
          <LineGradientMentionsChart
            LineGradientChartData={LineGradientChartData}
          />
        </div>
        <div className="lg:col-span-3 lg:row-span-4">
          <PassiveMentionsScoreGaugeChart
            ScoreGaugeChartData={ScoreGaugeChartData}
          />
        </div>
      </div>
      <div className="flex flex-col gap-4 lg:col-span-12 lg:grid lg:h-[120vh] lg:grid-cols-12 lg:grid-rows-12">
        <div className="lg:col-span-4 lg:row-span-4">
          <ActiveMentionsWordCloud WordCloudData={WordCloudData} />
        </div>
        <div className="lg:col-span-4 lg:row-span-4">
          <MentionsWordCloud WordCloudData={WordCloudData} />
        </div>
        <div className="lg:col-span-4 lg:row-span-4">
          <PassiveMentionsWordCloud WordCloudData={WordCloudData} />
        </div>
        <div className="lg:col-span-8 lg:row-span-4">
          <ActiveAgeAndGenderChart AgeAndGenderData={AgeAndGenderData} />
        </div>
        <div className="lg:col-span-4 lg:row-span-4">
          <ActiveFollowersByGenderDonutChart
            FollowersDonutChartData={FollowersDonutByGenderChartData}
          />
        </div>
        <div className="lg:col-span-8 lg:row-span-4">
          <PassiveAgeAndGenderChart AgeAndGenderData={AgeAndGenderData} />
        </div>
        <div className="lg:col-span-4 lg:row-span-4">
          <PassiveFollowersByGenderDonutChart
            FollowersDonutChartData={FollowersDonutByGenderChartData}
          />
        </div>
      </div>
    </div>
  );
}
