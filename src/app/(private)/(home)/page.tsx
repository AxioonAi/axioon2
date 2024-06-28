import { CommentsDonutGraph } from "@/components/app/home/CommentsDonutGraph";
import { CommentsSummary } from "@/components/app/home/CommentsSummary";
import { DefendantsAndDetractorsList } from "@/components/app/home/DefendantsAndDetractorsList";
import { EngagementTimes } from "@/components/app/home/EngagementTimes";
import { PostsAndComments } from "@/components/app/home/PostsAndComments";
import { SocialMediaBaseCard } from "@/components/app/home/SocialMediaBaseCard";
import { WordCloud } from "@/components/app/home/WordCloud";
import { WordsList } from "@/components/app/home/WordsList";
import {
  CommentsDonutGraphData,
  CommentsSummaryData,
  DefendantsAndDetractorsData,
  EngagementTimesData,
  PostsAndCommentsData,
  SocialMediaBaseData,
  WordCloudData,
  WordsListData,
} from "@/components/data/HomeData";
export default function Home() {
  return (
    <div className="grid grid-cols-12 gap-8">
      {SocialMediaBaseData.map((data, index) => (
        <div className="col-span-3" key={index}>
          <SocialMediaBaseCard SocialMediaData={data} />
        </div>
      ))}

      <div className="col-span-12 grid h-[120vh] grid-cols-12 grid-rows-10 gap-8">
        <div className="col-span-8 row-span-10">
          <PostsAndComments PostsAndCommentsData={PostsAndCommentsData} />
        </div>
        <div className="col-span-4 row-span-3">
          <CommentsSummary CommentsSummaryData={CommentsSummaryData} />
        </div>
        <div className="col-span-4 row-span-3">
          <DefendantsAndDetractorsList
            DefendantsAndDetractorsData={DefendantsAndDetractorsData}
          />
        </div>
        <div className="col-span-4 row-span-4">
          <CommentsDonutGraph CommentsDonutGraphData={CommentsDonutGraphData} />
        </div>
      </div>
      <div className="col-span-5">
        <WordCloud WordCloudData={WordCloudData} />
      </div>
      <div className="col-span-3">
        <WordsList WordsListData={WordsListData} />
      </div>
      <div className="col-span-4">
        <EngagementTimes EngagementTimesData={EngagementTimesData} />
      </div>
    </div>
  );
}
