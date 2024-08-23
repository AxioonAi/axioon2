import { MentionsSource } from "@/components/app/mentions/MentionsSource";
import {
  CommentsDonutGraphData,
  LineGradientChartData,
  ScoreGaugeChartData,
} from "@/components/data/HomeData";
import { MentionsHeaderCard } from "@/components/app/mentions/MentionsHeaderCard";
import { ScoreGaugeChart } from "@/components/app/mentions/ScoreGaugeChart";
import { MentionsMainActors } from "@/components/app/mentions/MentionsMainActors";
import { MentionsMainInfluencers } from "@/components/app/mentions/MentionsMainInfluencers";
import { MentionsDetractors } from "@/components/app/mentions/MentionsDetractors";
import { MentionsDefensors } from "@/components/app/mentions/MentionsDefensors";
import { MentionsPostsAndComments } from "@/components/app/mentions/MentionsPostsAndComments";
import { LineGradientChart } from "@/components/app/mentions/LineGradientChart";
import { CommentsDonutGraph } from "@/components/app/mentions/CommentsDonutGraph";
import { MentionsSelector } from "@/components/app/mentions/MentionsSelector";
import { Hashtags } from "@/components/app/mentions/Hashtags";
import { Words } from "@/components/app/mentions/Words";
import { Comments } from "@/components/app/mentions/Comments";

export default function Mentions() {
  return (
    <div className="flex flex-col gap-4 pb-20 lg:grid lg:grid-cols-12">
      <div className="lg:col-span-12 lg:row-span-2">
        <MentionsHeaderCard title="Menções" />
      </div>
      <div className="flex flex-col gap-4 lg:col-span-12 lg:row-span-2 lg:grid lg:grid-cols-12">
        <div className="lg:col-span-12 lg:row-span-2">
          <MentionsSelector />
        </div>
        {/* <div className="lg:col-span-12 lg:row-span-4">
          <IndicatorsCards />
        </div> */}
      </div>
      <div className="flex flex-col gap-4 lg:col-span-12 lg:grid lg:h-[80vh] lg:grid-cols-12 lg:grid-rows-9">
        <div className="lg:col-span-8 lg:row-span-4">
          <LineGradientChart LineGradientChartData={LineGradientChartData} />
        </div>
        <div className="lg:col-span-4 lg:row-span-4">
          <ScoreGaugeChart
            className="h-56"
            ScoreGaugeChartData={ScoreGaugeChartData}
          />
        </div>
        <div className="lg:col-span-7 lg:row-span-5">
          <CommentsDonutGraph CommentsDonutGraphData={CommentsDonutGraphData} />
        </div>
        <div className="lg:col-span-5 lg:row-span-5">
          <MentionsSource />
        </div>
        {/* <div className="lg:col-span-12 lg:row-span-3">
          <MentionsSentimentChart
            MentionsSentimentChartData={MentionsSentimentChartData}
          />
        </div> */}
      </div>
      <div className="flex flex-col gap-4 lg:col-span-12 lg:grid lg:h-[150vh] lg:grid-cols-12 lg:grid-rows-12">
        <div className="lg:col-span-12 lg:row-span-4">
          <MentionsMainActors />
        </div>
        <div className="lg:col-span-6 lg:row-span-4">
          <MentionsDetractors />
        </div>
        <div className="lg:col-span-6 lg:row-span-4">
          <MentionsDefensors />
        </div>
        <div className="lg:col-span-12 lg:row-span-4">
          <MentionsMainInfluencers />
        </div>
      </div>
      <div className="flex flex-col gap-4 lg:col-span-12 lg:grid lg:h-screen lg:grid-cols-12 lg:grid-rows-12">
        <Words />
        <Hashtags />
        <Comments />
      </div>
      <div className="lg:col-span-12">
        <MentionsPostsAndComments />
      </div>
    </div>
  );
}
