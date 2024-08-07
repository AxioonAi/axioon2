"use client";
import { ApexOptions } from "apexcharts";
import { EllipsisVertical } from "lucide-react";
import ReactApexChart from "react-apexcharts";
import { BaseCardHeader } from "@/components/global/BaseCard/BaseCardHeader";
import { BaseCard } from "@/components/global/BaseCard/BaseCard";
import { BaseCardFooter } from "@/components/global/BaseCard/BaseCardFooter";
import { useSocialMediaDataContext } from "@/context/SocialMediaData";

interface FollowerProgressionChartProps {
  FollowerProgressionChartData: {
    ChartOptions: {
      series: {
        name: string;
        type: string;
        data: number[];
      }[];
      options: ApexOptions;
    };
  };
}

// interface FollowersEvolutionProps {
//   date: string;
//   followers: number;
// }

export function FollowerProgressionChart({
  FollowerProgressionChartData,
}: FollowerProgressionChartProps) {
  // const [facebookFollowers, setFacebookFollowers] = useState<
  //   FollowersEvolutionProps[]
  // >([]);
  // const [instagramFollowers, setInstagramFollowers] = useState<
  //   FollowersEvolutionProps[]
  // >([]);
  // const [tiktokFollowers, setTiktokFollowers] = useState<
  //   FollowersEvolutionProps[]
  // >([]);
  // const [youtubeFollowers, setYoutubeFollowers] = useState<
  //   FollowersEvolutionProps[]
  // >([]);
  const { isGettingData } = useSocialMediaDataContext();

  // useEffect(() => {
  //   if (socialMediaData) {
  //     setFacebookFollowers(socialMediaData.followersEvolution.facebook);
  //     setInstagramFollowers(socialMediaData.followersEvolution.instagram);
  //     setTiktokFollowers(socialMediaData.followersEvolution.tiktok);
  //     setYoutubeFollowers(socialMediaData.followersEvolution.youtube);
  //   }
  // }, [socialMediaData]);

  // useEffect(() => {
  //   const followers = [
  //     facebookFollowers,
  //     instagramFollowers,
  //     tiktokFollowers,
  //     youtubeFollowers,
  //   ];

  //   // const flatFollowers = followers
  //   //   .flat()
  //   //   .filter((follower) => follower !== null);
  //   // const orderedFlatFollowers = flatFollowers.sort(
  //   //   (a, b) => new Date(a.date).getTime() - new Date(b.date).getTime(),
  //   // );
  // }, [
  //   facebookFollowers,
  //   instagramFollowers,
  //   tiktokFollowers,
  //   youtubeFollowers,
  // ]);

  return (
    <BaseCard className="p-0">
      <BaseCardHeader
        title="Evolução de seguidores"
        children={
          <div className="flex h-8 w-8 items-center justify-center rounded-lg bg-zinc-100 text-zinc-700">
            <EllipsisVertical size={14} />
          </div>
        }
      />
      {isGettingData ? (
        <div className="h-full w-full bg-gradient-to-r from-gray-10 via-gray-20 to-gray-10" />
      ) : (
        <div className="flex h-96 w-full flex-col lg:h-full">
          <ReactApexChart
            options={FollowerProgressionChartData.ChartOptions.options}
            series={FollowerProgressionChartData.ChartOptions.series}
            type="line"
          />
        </div>
      )}
      <BaseCardFooter />
    </BaseCard>
  );
}
