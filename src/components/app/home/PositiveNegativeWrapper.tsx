"use client";
import { twMerge } from "tailwind-merge";
import { useEffect, useState } from "react";
import { PositiveNegativeCommentsChart } from "./PositiveNegativeComments";
import { PositiveNegativeCommentsData } from "@/components/data/HomeData";
import { useSocialMediaDataContext } from "@/context/SocialMediaData";

interface PositiveNegativeCommentsProps {
  label: string;
  positive: number;
  negative: number;
  neutral: number;
}

interface SeriesProps {
  name: string;
  data: number[];
}

export function PositiveNegativeWrapper() {
  const [facebookComments, setFacebookComments] = useState<
    PositiveNegativeCommentsProps[]
  >([]);
  const [instagramComments, setInstagramComments] = useState<
    PositiveNegativeCommentsProps[]
  >([]);
  const [tiktokComments, setTiktokComments] = useState<
    PositiveNegativeCommentsProps[]
  >([]);
  const [youtubeComments, setYoutubeComments] = useState<
    PositiveNegativeCommentsProps[]
  >([]);
  const [headerData, setHeaderData] = useState([
    {
      value: 0,
      title: "Comentários Positivos",
      dot: true,
      color: "bg-green-600",
    },
    {
      value: 0,
      title: "Comentários Neutros",
      dot: true,
      color: "bg-violet-600",
    },
    {
      value: 0,
      title: "Comentários Negativos",
      dot: true,
      color: "bg-red-600",
    },
  ]);
  const [series, setSeries] = useState<SeriesProps[]>([]);
  const { socialMediaData } = useSocialMediaDataContext();

  useEffect(() => {
    if (socialMediaData) {
      setFacebookComments(socialMediaData.commentsData.commentByDays.facebook);
      setInstagramComments(
        socialMediaData.commentsData.commentByDays.instagram,
      );
      setTiktokComments(socialMediaData.commentsData.commentByDays.tiktok);
      setYoutubeComments(socialMediaData.commentsData.commentByDays.youtube);
    }
  }, [socialMediaData]);

  useEffect(() => {
    const commentsValues = [
      facebookComments,
      instagramComments,
      tiktokComments,
      youtubeComments,
    ];
    const tempHeaderData = [
      {
        value: 0,
        title: "Comentários Positivos",
        dot: true,
        color: "bg-green-600",
      },
      {
        value: 0,
        title: "Comentários Neutros",
        dot: true,
        color: "bg-violet-600",
      },
      {
        value: 0,
        title: "Comentários Negativos",
        dot: true,
        color: "bg-red-600",
      },
    ];
    const flatCommentsValues = commentsValues
      .flat()
      .filter((value) => value !== null);
    const orderedFlatCommentsValues = flatCommentsValues.sort(
      (a, b) => new Date(a.label).getTime() - new Date(b.label).getTime(),
    );

    if (
      orderedFlatCommentsValues.length !== 0 &&
      orderedFlatCommentsValues[0] !== undefined
    ) {
      const positiveValue = orderedFlatCommentsValues.reduce(
        (sum, value) => sum + (value?.positive || 0),
        0,
      );
      const neutralValue = orderedFlatCommentsValues.reduce(
        (sum, value) => sum + (value?.neutral || 0),
        0,
      );
      const negativeValue = orderedFlatCommentsValues.reduce(
        (sum, value) => sum + (value?.negative || 0),
        0,
      );

      const positiveData = orderedFlatCommentsValues.map(
        (value) => value?.positive || 0,
      );

      const neutralData = orderedFlatCommentsValues.map(
        (value) => value?.neutral || 0,
      );
      const negativeData = orderedFlatCommentsValues.map(
        (value) => value?.negative || 0,
      );

      const newSeries: SeriesProps[] = [
        {
          name: "Comentários Positivos",
          data: positiveData,
        },
        {
          name: "Comentários Neutros",
          data: neutralData,
        },
        {
          name: "Comentários Negativos",
          data: negativeData,
        },
      ];

      setSeries(newSeries);

      tempHeaderData[0].value = positiveValue;
      tempHeaderData[1].value = neutralValue;
      tempHeaderData[2].value = negativeValue;
      setHeaderData(tempHeaderData);
    }
  }, [facebookComments, instagramComments, tiktokComments, youtubeComments]);

  return (
    <PositiveNegativeCommentsChart
      PositiveNegativeCommentsData={PositiveNegativeCommentsData}
      series={series}
      headerData={headerData.map((data, index) => (
        <div
          key={index}
          className="flex w-1/3 items-center gap-2 text-[10px] lg:text-xs 2xl:text-sm 3xl:text-base"
        >
          <div
            className={twMerge("min-h-3 min-w-3 rounded-full", data.color)}
          />
          <div className="flex flex-col">
            <strong>{data.value}</strong>
            <span>{data.title}</span>
          </div>
        </div>
      ))}
    />
  );
}
