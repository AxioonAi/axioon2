"use client";
import { CommentsComparison } from "@/components/app/comparator/CommentsComparison";
import { CommentsDetailsComparison } from "@/components/app/comparator/CommentsDetailsComparison";
import { CommentsGenderComparison } from "@/components/app/comparator/CommentsGenderComparison";
import { ComparatorCategories } from "@/components/app/comparator/ComparatorCategories";
import { ComparatorHeaderCard } from "@/components/app/comparator/ComparatorHeaderCard";
import { ComparatorStickyCards } from "@/components/app/comparator/ComparatorStickyCards";
import { FollowersComparison } from "@/components/app/comparator/FollowersComparison";
import { FollowersEvolutionComparison } from "@/components/app/comparator/FollowersEvolutionComparison";
import { MentionsAgeAndGenderComparison } from "@/components/app/comparator/MentionsAgeAndGenderComparison";
import { MentionsCommentsComparison } from "@/components/app/comparator/MentionsCommentsComparison";
import { MentionsCommentsDetailsComparison } from "@/components/app/comparator/MentionsCommentsDetailsComparison";
import { MentionsCommentsGenderComparison } from "@/components/app/comparator/MentionsCommentsGenderComparison";
import { MentionsScoreComparison } from "@/components/app/comparator/MentionsScoreComparison";
import { MentionsSentimentComparison } from "@/components/app/comparator/MentionsSentimentComparison";
import { PostsComparison } from "@/components/app/comparator/PostsComparison";
import { PostsDetailsComparison } from "@/components/app/comparator/PostsDetailsComparison";
import { ProfileSentimentComparison } from "@/components/app/comparator/ProfileSentimentComparison";
import { ScoreComparison } from "@/components/app/comparator/ScoreComparison";
import { SocialComparison } from "@/components/app/comparator/SocialComparison";
import { useComparatorDataContext } from "@/context/ComparatorData";
import { cn } from "@/utils/utils";
import { useCookies } from "next-client-cookies";
import Image from "next/image";
import { useEffect, useState } from "react";

export default function Comparator() {
  const cookies = useCookies();
  const { isGettingData } = useComparatorDataContext();
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

  const [isLoading, setIsLoading] = useState(true);
  const [selectedCategory, setSelectedCategory] = useState<string>("followers");

  useEffect(() => {
    setIsLoading(true);
    if (!isGettingData) {
      setTimeout(() => {
        setIsLoading(false);
      }, 500);
    }
  }, [isGettingData]);

  return (
    <>
      <Image
        src="/loaderBackground.png"
        alt=""
        width={2000}
        height={1250}
        quality={100}
        className={cn(
          "fixed left-0 top-0 z-[1050] h-full w-full transition duration-1000",
          !isLoading && "pointer-events-none opacity-0",
        )}
      />
      <Image
        src="/logoWhite.png"
        alt=""
        width={2000}
        height={750}
        quality={100}
        className={cn(
          "fixed left-1/2 top-1/2 z-[1050] w-2/3 -translate-x-1/2 -translate-y-1/2 animate-pulse transition duration-1000 lg:w-80",
          !isLoading && "pointer-events-none animate-none opacity-0",
        )}
      />

      <div className="flex flex-col gap-4 pb-28 lg:grid lg:grid-cols-12">
        <div className="lg:col-span-12">
          <ComparatorHeaderCard title="Comparador" />
        </div>
        <ComparatorStickyCards />
        <ComparatorCategories
          selectedCategory={selectedCategory}
          setSelectedCategory={setSelectedCategory}
        />

        {selectedCategory === "followers" ? (
          <>
            <FollowersComparison />
            <FollowersEvolutionComparison />
          </>
        ) : selectedCategory === "posts" ? (
          <>
            <PostsComparison />
            <PostsDetailsComparison />
          </>
        ) : selectedCategory === "comments" ? (
          <>
            <CommentsComparison />
            <CommentsDetailsComparison />
            <CommentsGenderComparison />
            {/* <CommentsWordCloudsComparison /> */}
          </>
        ) : selectedCategory === "mentions" ? (
          <>
            <MentionsCommentsComparison />
            <MentionsCommentsDetailsComparison />
            <MentionsCommentsGenderComparison />
            <MentionsAgeAndGenderComparison />
            {/* <MentionsCommentsWordCloudsComparison /> */}
          </>
        ) : selectedCategory === "score" ? (
          <>
            <ScoreComparison />
            <ProfileSentimentComparison />
            <MentionsScoreComparison />
            <MentionsSentimentComparison />
          </>
        ) : selectedCategory === "social" ? (
          <>
            <SocialComparison />
          </>
        ) : (
          <></>
        )}
      </div>
    </>
  );
}
