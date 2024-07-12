import { CommentsSummary } from "@/components/app/mentions/CommentsSummary";
import { MentionsSource } from "@/components/app/mentions/MentionsSource";
import { WordCloud } from "@/components/app/mentions/WordCloud";
import { WordsList } from "@/components/app/mentions/WordsList";
import {
  CommentsDonutGraphData,
  IndicatorsBaseCardData,
  LineGradientChartData,
  PostsAndCommentsData,
  ScoreGaugeChartData,
} from "@/components/data/HomeData";
import {
  CommentsSummaryData,
  MentionsDefensorsData,
  MentionsDetractorsData,
  MentionsMainActorsData,
  MentionsMainInfluencersData,
  MentionsSentimentChartData,
  MentionsSourceData,
  WordCloudData,
  WordsListData,
} from "@/components/data/MentionsData";
import { MentionsHeaderCard } from "@/components/app/mentions/MentionsHeaderCard";
import { IndicatorsBaseCard } from "@/components/app/home/IndicatorsBaseCard";
import { LineGradientChart } from "@/components/app/home/LineGradientChart";
import { ScoreGaugeChart } from "@/components/app/mentions/ScoreGaugeChart";
import { CommentsDonutGraph } from "@/components/app/home/CommentsDonutGraph";
import { MentionsSentimentChart } from "@/components/app/mentions/MentionsSentimentChart";
import { MentionsMainActors } from "@/components/app/mentions/MentionsMainActors";
import { MentionsMainInfluencers } from "@/components/app/mentions/MentionsMainInfluencers";
import { MentionsDetractors } from "@/components/app/mentions/MentionsDetractors";
import { MentionsDefensors } from "@/components/app/mentions/MentionsDefensors";
import { PostsAndComments } from "@/components/app/home/PostsAndComments";
import { IndicatorsCards } from "@/components/app/home/IndicatorsCards";

export default function Mentions() {
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
      <div className="flex flex-col gap-4 lg:col-span-12 lg:grid lg:h-[120vh] lg:grid-cols-12 lg:grid-rows-10">
        <div className="lg:col-span-8 lg:row-span-3">
          <LineGradientChart LineGradientChartData={LineGradientChartData} />
        </div>
        <div className="lg:col-span-4 lg:row-span-3">
          <ScoreGaugeChart ScoreGaugeChartData={ScoreGaugeChartData} />
        </div>
        <div className="lg:col-span-5 lg:row-span-3">
          <CommentsDonutGraph CommentsDonutGraphData={CommentsDonutGraphData} />
        </div>
        <div className="lg:col-span-7 lg:row-span-3">
          <MentionsSource MentionsSourceData={MentionsSourceData} />
        </div>
        <div className="lg:col-span-12 lg:row-span-4">
          <MentionsSentimentChart
            MentionsSentimentChartData={MentionsSentimentChartData}
          />
        </div>
      </div>
      <div className="flex flex-col gap-4 lg:col-span-12 lg:grid lg:h-[120vh] lg:grid-cols-12 lg:grid-rows-12">
        <div className="lg:col-span-12 lg:row-span-4">
          <MentionsMainActors MentionsMainActorsData={MentionsMainActorsData} />
        </div>
        <div className="lg:col-span-6 lg:row-span-4">
          <MentionsDetractors MentionsDetractorsData={MentionsDetractorsData} />
        </div>
        <div className="lg:col-span-6 lg:row-span-4">
          <MentionsDefensors MentionsDefensorsData={MentionsDefensorsData} />
        </div>
        <div className="lg:col-span-12 lg:row-span-4">
          <MentionsMainInfluencers
            MentionsMainInfluencersData={MentionsMainInfluencersData}
          />
        </div>
      </div>
      <div className="flex flex-col gap-4 lg:col-span-12 lg:grid lg:h-[120vh] lg:grid-cols-12 lg:grid-rows-12">
        <div className="lg:col-span-7 lg:row-span-4">
          <WordCloud WordCloudData={WordCloudData} />
        </div>
        <div className="lg:col-span-5 lg:row-span-4">
          <WordsList WordsListData={WordsListData} />
        </div>
        <div className="lg:col-span-5 lg:row-span-4">
          <WordsList WordsListData={WordsListData} />
        </div>
        <div className="lg:col-span-7 lg:row-span-4">
          <WordCloud WordCloudData={WordCloudData} />
        </div>
        <div className="lg:col-span-7 lg:row-span-4">
          <CommentsSummary CommentsSummaryData={CommentsSummaryData} />
        </div>
        <div className="lg:col-span-5 lg:row-span-4">
          <CommentsDonutGraph CommentsDonutGraphData={CommentsDonutGraphData} />
        </div>
      </div>
      <div className="lg:col-span-12">
        <PostsAndComments PostsAndCommentsData={PostsAndCommentsData} />
      </div>
    </div>
  );
}
