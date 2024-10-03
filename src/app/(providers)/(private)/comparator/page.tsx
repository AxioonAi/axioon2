"use client";
import Image from "next/image";
import { twMerge } from "tailwind-merge";
import { useEffect, useState } from "react";
import { useCookies } from "next-client-cookies";
import { X } from "lucide-react";
import { CommentsBySentiment } from "@/components/app/comparator/CommentsBySentiment";
import { ComparatorHeaderCard } from "@/components/app/comparator/ComparatorHeaderCard";
import { LineGradientChart } from "@/components/app/comparator/LineGradientChart";
import {
  AgeAndGenderData,
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
import { ActiveAgeAndGenderChart } from "@/components/app/comparator/ActiveAgeAndGenderChart";
import { PassiveAgeAndGenderChart } from "@/components/app/comparator/PassiveAgeAndGenderChart";

export default function Comparator() {
  const cookies = useCookies();
  const [isModalOpen, setIsModalOpen] = useState<boolean | null>(null);
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    if (cookies.get("closed-modal-comparator") === "true") {
      setIsModalOpen(false);
    } else {
      setIsModalOpen(true);
    }
  }, [
    cookies.get("closed-modal-comparator")
      ? cookies.get("closed-modal-comparator")
      : null,
  ]);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 0);
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <>
      {isModalOpen && (
        <div className="fixed bottom-0 left-0 right-0 top-0 z-[1002] flex w-full items-center justify-center transition-opacity duration-300 ease-in-out">
          <button
            onClick={() => {
              setIsModalOpen(false);
              cookies.set("closed-modal-comparator", "true");
            }}
            className="absolute z-40 h-full w-full bg-black/50"
          />
          <div className="relative z-50 flex flex-col items-center justify-center">
            <div className="scrollbar-thin scrollbar-track-transparent scrollbar-thumb-input_bg relative z-20 flex h-auto w-[95vw] flex-col items-center justify-start rounded-xl bg-gray-10 p-2 pt-8 lg:w-[80vw]">
              <X
                className="absolute right-0 top-0 m-2 cursor-pointer"
                onClick={() => {
                  setIsModalOpen(false);
                  cookies.set("closed-modal-comparator", "true");
                }}
              />
              <div className="hidden lg:flex lg:w-full">
                <Image
                  src="/169.png"
                  alt=""
                  width={1000}
                  height={600}
                  className="aspect-[9/16] h-full w-full object-contain lg:aspect-video"
                />
              </div>
              <div className="lg:hidden">
                <Image
                  src="/916.png"
                  alt=""
                  width={1000}
                  height={600}
                  className="aspect-[9/16] h-full w-full object-contain lg:aspect-video"
                />
              </div>
            </div>
            {/* <div className="absolute bottom-0 right-0 z-10 h-full max-w-[500px] bg-[#D356F3] blur-sm" /> */}
          </div>
        </div>
      )}
      <div className="flex flex-col gap-4 pb-28 lg:grid lg:grid-cols-12">
        <div className="lg:fixed lg:bottom-0 lg:right-0 lg:z-[999]">
          <Image
            src="/169.png"
            alt=""
            width={1000}
            height={1000}
            className={twMerge(
              "w-[480px] rounded-md transition duration-200 lg:rounded-none lg:rounded-tl-md",
              isScrolled && "lg:scale-50",
            )}
            style={{ transformOrigin: "bottom right" }}
          />
        </div>
        <div className="lg:col-span-12">
          <ComparatorHeaderCard title="Comparador" />
        </div>
        <ComparatorStickyCards />

        <div className="flex flex-col gap-4 lg:col-span-12 lg:grid lg:h-[150vh] lg:grid-cols-12 lg:grid-rows-12 2xl:h-[120vh]">
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
        <div className="flex flex-col gap-4 lg:col-span-12 lg:grid lg:h-[140vh] lg:grid-cols-12 lg:grid-rows-12 2xl:h-screen">
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
        <div className="flex flex-col gap-4 lg:col-span-12 lg:grid lg:h-[140vh] lg:grid-cols-12 lg:grid-rows-12 2xl:h-[120vh]">
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
    </>
  );
}
