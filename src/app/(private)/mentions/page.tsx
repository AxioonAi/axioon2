import { twMerge } from "tailwind-merge";
import { AuthorMentionsList } from "@/components/app/mentions/AuthorMentionsList";
import { CommentsSummary } from "@/components/app/mentions/CommentsSummary";
import { MentionsBaseCard } from "@/components/app/mentions/MentionsBaseCard";
import { MentionsDonutGraph } from "@/components/app/mentions/MentionsDonutGraph";
import { MentionsSource } from "@/components/app/mentions/MentionsSource";
import { NewReport } from "@/components/app/mentions/NewReport";
import { PositiveNegativeCommentsChart } from "@/components/app/mentions/PositiveNegativeCommentsChart";
import { PostsAndComments } from "@/components/app/mentions/PostsAndComments";
import { WordCloud } from "@/components/app/mentions/WordCloud";
import { WordsList } from "@/components/app/mentions/WordsList";
import { PostsAndCommentsData } from "@/components/data/HomeData";
import {
  AuthorMentionsData,
  CommentsSummaryData,
  MentionsBaseCardData,
  MentionsDonutGraphData,
  MentionsSourceData,
  PositiveNegativeCommentsData,
  ScoreGaugeChartData,
  WordCloudData,
  WordsListData,
} from "@/components/data/MentionsData";
import { ScoreGaugeChart } from "@/components/app/mentions/ScoreGaugeChart";

export default function Mentions() {
  return (
    <div className="grid grid-cols-12 gap-8">
      <div className="col-span-12 grid h-[120vh] grid-cols-12 grid-rows-11 gap-8">
        {MentionsBaseCardData.map((data, index) => (
          <div className="col-span-2 row-span-1" key={index}>
            <MentionsBaseCard MentionsBaseCardData={data} />
          </div>
        ))}

        <div className="col-span-4 row-span-1">
          <NewReport />
        </div>
        <div className="col-span-8 row-span-10">
          <PostsAndComments PostsAndCommentsData={PostsAndCommentsData} />
        </div>
        <div className="col-span-4 row-span-3">
          <CommentsSummary CommentsSummaryData={CommentsSummaryData} />
        </div>
        <div className="col-span-4 row-span-4">
          <MentionsDonutGraph MentionsDonutGraphData={MentionsDonutGraphData} />
        </div>
        <div className="col-span-4 row-span-3">
          <MentionsSource MentionsSourceData={MentionsSourceData} />
        </div>
      </div>
      <div className="col-span-12 grid h-[100vh] grid-cols-12 grid-rows-11 gap-8">
        <div className="col-span-8 row-span-5">
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
                    <strong className="text-xl">{data.value}</strong>
                    <span>{data.title}</span>
                  </div>
                </div>
              ),
            )}
          />
        </div>
        <div className="col-span-4 row-span-4">
          <AuthorMentionsList AuthorMentionsData={AuthorMentionsData} />
        </div>
        <div className="col-span-4 row-span-2">
          <ScoreGaugeChart ScoreGaugeChartData={ScoreGaugeChartData[0]} />
        </div>
        <div className="col-span-5 row-span-5">
          <WordCloud WordCloudData={WordCloudData} />
        </div>
        <div className="col-span-3 row-span-5">
          <WordsList WordsListData={WordsListData} />
        </div>
        <div className="col-span-4 row-span-2">
          <ScoreGaugeChart ScoreGaugeChartData={ScoreGaugeChartData[1]} />
        </div>
        <div className="col-span-4 row-span-2">
          <ScoreGaugeChart ScoreGaugeChartData={ScoreGaugeChartData[2]} />
        </div>
      </div>
    </div>
  );
}
