"use client";
import { MentionsSource } from "@/components/app/mentions/MentionsSource";
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
import { IndicatorsCards } from "@/components/app/mentions/IndicatorsCards";
import { useMentionsDataContext } from "@/context/MentionsData";
import { HashtagsLineGradientChart } from "@/components/app/mentions/HashtagsLineGradientChart";
import { HashtagsScoreGaugeChart } from "@/components/app/mentions/HashtagsScoreGaugeChart";
import { HashtagsCommentsDonutGraph } from "@/components/app/mentions/HashtagsCommentsDonutGraph";
import { HashtagsMentionsSource } from "@/components/app/mentions/HashtagsMentionsSource";
import { HashtagsMentionsMainActors } from "@/components/app/mentions/HashtagsMentionsMainActors";
import { HashtagsMentionsDetractors } from "@/components/app/mentions/HashtagsMentionsDetractors";
import { HashtagsMentionsDefensors } from "@/components/app/mentions/HashtagsMentionsDefensors";
import { HashtagsMentionsMainInfluencers } from "@/components/app/mentions/HashtagsMentionsMainInfluencers";
import { HashtagsMentionsPostsAndComments } from "@/components/app/mentions/HashtagsMentionsPostsAndComments";
import { HashtagsWords } from "@/components/app/mentions/HashtagsWords";
import { HashtagsHashtags } from "@/components/app/mentions/HashtagsHashtags";
import { HashtagsComments } from "@/components/app/mentions/HashtagsComments";
import {
  CommentsDonutGraphData,
  LineGradientChartData,
  ScoreGaugeChartData,
} from "@/components/data/MentionsData";

export default function Mentions() {
  const { selectedMentionsType } = useMentionsDataContext();
  return (
    <div className="flex flex-col gap-4 pb-28 lg:grid lg:grid-cols-12">
      <div className="lg:col-span-12 lg:row-span-2">
        <MentionsHeaderCard title="Menções" />
      </div>
      <div className="lg:col-span-12 lg:row-span-2">
        <MentionsSelector />
      </div>
      {selectedMentionsType === "personal" ? (
        <>
          <div className="lg:col-span-12 lg:row-span-4">
            <IndicatorsCards />
          </div>
          <div className="flex flex-col gap-4 lg:col-span-12 lg:grid lg:h-[110vh] lg:grid-cols-12 lg:grid-rows-9 2xl:h-[80vh]">
            <div className="lg:col-span-8 lg:row-span-4">
              <LineGradientChart
                LineGradientChartData={LineGradientChartData}
              />
            </div>
            <div className="lg:col-span-4 lg:row-span-4">
              <ScoreGaugeChart
                className="h-56"
                ScoreGaugeChartData={ScoreGaugeChartData}
              />
            </div>
            <div className="lg:col-span-7 lg:row-span-5">
              <CommentsDonutGraph
                CommentsDonutGraphData={CommentsDonutGraphData}
              />
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
          <div className="flex flex-col gap-4 lg:col-span-12 lg:grid lg:h-[180vh] lg:grid-cols-12 lg:grid-rows-12 2xl:h-[150vh]">
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
          <div className="flex flex-col gap-4 lg:col-span-12 lg:grid lg:h-[130vh] lg:grid-cols-12 lg:grid-rows-12 2xl:h-screen">
            <Words />
            <Hashtags />
            <Comments />
          </div>
          <div className="lg:col-span-12">
            <MentionsPostsAndComments />
          </div>
        </>
      ) : (
        <>
          <div className="flex flex-col gap-4 lg:col-span-12 lg:grid lg:h-[120vh] lg:grid-cols-12 lg:grid-rows-9 2xl:h-[80vh]">
            <div className="lg:col-span-8 lg:row-span-4">
              <HashtagsLineGradientChart
                LineGradientChartData={LineGradientChartData}
              />
            </div>
            <div className="lg:col-span-4 lg:row-span-4">
              <HashtagsScoreGaugeChart
                className="h-56"
                ScoreGaugeChartData={ScoreGaugeChartData}
              />
            </div>
            <div className="lg:col-span-7 lg:row-span-5">
              <HashtagsCommentsDonutGraph
                CommentsDonutGraphData={CommentsDonutGraphData}
              />
            </div>
            <div className="lg:col-span-5 lg:row-span-5">
              <HashtagsMentionsSource />
            </div>
          </div>
          <div className="flex flex-col gap-4 lg:col-span-12 lg:grid lg:h-[180vh] lg:grid-cols-12 lg:grid-rows-12 2xl:h-[150vh]">
            <div className="lg:col-span-12 lg:row-span-4">
              <HashtagsMentionsMainActors />
            </div>
            <div className="lg:col-span-6 lg:row-span-4">
              <HashtagsMentionsDetractors />
            </div>
            <div className="lg:col-span-6 lg:row-span-4">
              <HashtagsMentionsDefensors />
            </div>
            <div className="lg:col-span-12 lg:row-span-4">
              <HashtagsMentionsMainInfluencers />
            </div>
          </div>
          <div className="flex flex-col gap-4 lg:col-span-12 lg:grid lg:h-[120vh] lg:grid-cols-12 lg:grid-rows-12 2xl:h-screen">
            <HashtagsWords />
            <HashtagsHashtags />
            <HashtagsComments />
          </div>
          <div className="lg:col-span-12">
            <HashtagsMentionsPostsAndComments />
          </div>
        </>
      )}
    </div>
  );
}
