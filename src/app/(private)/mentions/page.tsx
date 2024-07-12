import { twMerge } from "tailwind-merge";
import { AuthorMentionsList } from "@/components/app/mentions/AuthorMentionsList";
import { CommentsSummary } from "@/components/app/mentions/CommentsSummary";
import { MentionsBaseCard } from "@/components/app/mentions/MentionsBaseCard";
import { MentionsDonutGraph } from "@/components/app/mentions/MentionsDonutGraph";
import { MentionsSource } from "@/components/app/mentions/MentionsSource";
import { NewReport } from "@/components/app/mentions/NewReport";
import { PositiveNegativeCommentsChart } from "@/components/app/mentions/PositiveNegativeCommentsChart";
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
  AuthorMentionsData,
  CommentsSummaryData,
  MentionsBaseCardData,
  MentionsDefensorsData,
  MentionsDetractorsData,
  MentionsDonutGraphData,
  MentionsMainActorsData,
  MentionsMainInfluencersData,
  MentionsSentimentChartData,
  MentionsSourceData,
  PositiveNegativeCommentsData,
  WordCloudData,
  WordsListData,
} from "@/components/data/MentionsData";
import { CardWithTitleAndButton } from "@/components/app/social-media/CardWithTitleAndButton";
import { MentionsHeaderCard } from "@/components/app/mentions/MentionsHeaderCard";
import { IndicatorsBaseCard } from "@/components/app/home/IndicatorsBaseCard";
import { LineGradientChart } from "@/components/app/home/LineGradientChart";
import { ScoreGaugeChart } from "@/components/app/mentions/ScoreGaugeChart";
import { CommentsDonutGraph } from "@/components/app/home/CommentsDonutGraph";
import { MentionsSentimentChart } from "@/components/app/mentions/MentionsSentimentChart";
import { MentionsMainActors } from "@/components/app/mentions/MentionsMainActors";
import { BaseCard } from "@/components/global/BaseCard/BaseCard";
import { MentionsMainInfluencers } from "@/components/app/mentions/MentionsMainInfluencers";
import { MentionsDetractors } from "@/components/app/mentions/MentionsDetractors";
import { MentionsDefensors } from "@/components/app/mentions/MentionsDefensors";
import { PostsAndComments } from "@/components/app/home/PostsAndComments";

export default function Mentions() {
  return (
    <div className="grid grid-cols-12 gap-4">
      <div className="col-span-12 grid h-[150vh] grid-cols-12 grid-rows-12 gap-4">
        <div className="col-span-12 row-span-2 grid grid-cols-12 grid-rows-7 gap-4">
          <div className="col-span-12 row-span-3">
            <MentionsHeaderCard title="Menções" />
          </div>
          {IndicatorsBaseCardData.map((data, index) => (
            <div className="col-span-4 row-span-4" key={index}>
              <IndicatorsBaseCard
                IndicatorsData={data.IndicatorsData}
                ChartOptions={data.ChartOptions}
              />
            </div>
          ))}
        </div>
        <div className="col-span-8 row-span-3">
          <LineGradientChart LineGradientChartData={LineGradientChartData} />
        </div>
        <div className="col-span-4 row-span-3">
          <ScoreGaugeChart ScoreGaugeChartData={ScoreGaugeChartData} />
        </div>
        <div className="col-span-5 row-span-3">
          <CommentsDonutGraph CommentsDonutGraphData={CommentsDonutGraphData} />
        </div>
        <div className="col-span-7 row-span-3">
          <MentionsSource MentionsSourceData={MentionsSourceData} />
        </div>
        <div className="col-span-12 row-span-4">
          <MentionsSentimentChart
            MentionsSentimentChartData={MentionsSentimentChartData}
          />
        </div>
      </div>
      <div className="col-span-12 grid h-[120vh] grid-cols-12 grid-rows-12 gap-4">
        <div className="col-span-12 row-span-4">
          <MentionsMainActors MentionsMainActorsData={MentionsMainActorsData} />
        </div>
        <div className="col-span-6 row-span-4">
          <MentionsDetractors MentionsDetractorsData={MentionsDetractorsData} />
        </div>
        <div className="col-span-6 row-span-4">
          <MentionsDefensors MentionsDefensorsData={MentionsDefensorsData} />
        </div>
        <div className="col-span-12 row-span-4">
          <MentionsMainInfluencers
            MentionsMainInfluencersData={MentionsMainInfluencersData}
          />
        </div>
      </div>
      <div className="col-span-12 grid h-[120vh] grid-cols-12 grid-rows-12 gap-4">
        <div className="col-span-7 row-span-4">
          <WordCloud WordCloudData={WordCloudData} />
        </div>
        <div className="col-span-5 row-span-4">
          <WordsList WordsListData={WordsListData} />
        </div>
        <div className="col-span-5 row-span-4">
          <WordsList WordsListData={WordsListData} />
        </div>
        <div className="col-span-7 row-span-4">
          <WordCloud WordCloudData={WordCloudData} />
        </div>
        <div className="col-span-7 row-span-4">
          <CommentsSummary CommentsSummaryData={CommentsSummaryData} />
        </div>
        <div className="col-span-5 row-span-4">
          <CommentsDonutGraph CommentsDonutGraphData={CommentsDonutGraphData} />
        </div>
      </div>
      <div className="col-span-12">
        <PostsAndComments PostsAndCommentsData={PostsAndCommentsData} />
      </div>
    </div>
  );
}
