"use client";
import { twMerge } from "tailwind-merge";
import { useEffect, useState } from "react";
import { PositiveComments } from "./PositiveCommentsChart";
import { PositiveCommentsData } from "@/components/data/ComparatorData";
import { useComparatorDataContext } from "@/context/ComparatorData";

interface PositiveCommentsProps {
  label: string;
  positive: number;
  negative: number;
  neutral: number;
}

interface SeriesProps {
  name: string;
  data: number[];
}

export function PositiveWrapper() {
  const [activeFacebookComments, setActiveFacebookComments] = useState<
    PositiveCommentsProps[]
  >([]);
  const [activeInstagramComments, setActiveInstagramComments] = useState<
    PositiveCommentsProps[]
  >([]);
  const [activeTiktokComments, setActiveTiktokComments] = useState<
    PositiveCommentsProps[]
  >([]);
  const [activeYoutubeComments, setActiveYoutubeComments] = useState<
    PositiveCommentsProps[]
  >([]);
  const [passiveFacebookComments, setPassiveFacebookComments] = useState<
    PositiveCommentsProps[]
  >([]);
  const [passiveInstagramComments, setPassiveInstagramComments] = useState<
    PositiveCommentsProps[]
  >([]);
  const [passiveTiktokComments, setPassiveTiktokComments] = useState<
    PositiveCommentsProps[]
  >([]);
  const [passiveYoutubeComments, setPassiveYoutubeComments] = useState<
    PositiveCommentsProps[]
  >([]);
  const [headerData, setHeaderData] = useState([
    {
      value: 0,
      title: "Comentários Positivos",
      dot: false,
      color: "",
    },
    {
      value: 0,
      title: "Comentários positivos 1",
      dot: true,
      color: "bg-green-600",
    },
    {
      value: 0,
      title: "Comentários Positivos 2",
      dot: true,
      color: "bg-red-600",
    },
  ]);
  const [totalActiveComments, setTotalActiveComments] = useState<
    number | null
  >();
  const [positiveActiveComments, setPositiveActiveComments] = useState<
    number | null
  >();
  const [totalPassiveComments, setTotalPassiveComments] = useState<
    number | null
  >();
  const [positivePassiveComments, setPositivePassiveComments] = useState<
    number | null
  >();
  const [activeSeries, setActiveSeries] = useState<SeriesProps[]>([]);
  const [passiveSeries, setPassiveSeries] = useState<SeriesProps[]>([]);
  const [finalSeries, setFinalSeries] = useState<SeriesProps[]>([]);
  const { activeUserData, passiveUserData } = useComparatorDataContext();

  useEffect(() => {
    if (activeUserData) {
      setActiveFacebookComments(
        activeUserData.commentsData.commentByDays.facebook,
      );
      setActiveInstagramComments(
        activeUserData.commentsData.commentByDays.instagram,
      );
      setActiveTiktokComments(activeUserData.commentsData.commentByDays.tiktok);
      setActiveYoutubeComments(
        activeUserData.commentsData.commentByDays.youtube,
      );
    }
  }, [activeUserData]);

  useEffect(() => {
    const commentsValues = [
      activeFacebookComments,
      activeInstagramComments,
      activeTiktokComments,
      activeYoutubeComments,
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
      const totalValue = orderedFlatCommentsValues.reduce(
        (sum, value) =>
          sum +
          (value?.positive || 0) +
          (value?.negative || 0) +
          (value?.neutral || 0),
        0,
      );
      const positiveValue = orderedFlatCommentsValues.reduce(
        (sum, value) => sum + (value?.positive || 0),
        0,
      );

      const positiveData = orderedFlatCommentsValues.map(
        (value) => value?.positive || 0,
      );

      const newSeries: SeriesProps[] = [
        {
          name: "Comentários Positivos 1",
          data: positiveData,
        },
      ];

      setActiveSeries(newSeries);

      setTotalActiveComments(totalValue);

      setPositiveActiveComments(positiveValue);
    }
  }, [
    activeFacebookComments,
    activeInstagramComments,
    activeTiktokComments,
    activeYoutubeComments,
  ]);

  useEffect(() => {
    if (passiveUserData) {
      setPassiveFacebookComments(
        passiveUserData.commentsData.commentByDays.facebook,
      );
      setPassiveInstagramComments(
        passiveUserData.commentsData.commentByDays.instagram,
      );
      setPassiveTiktokComments(
        passiveUserData.commentsData.commentByDays.tiktok,
      );
      setPassiveYoutubeComments(
        passiveUserData.commentsData.commentByDays.youtube,
      );
    }
  }, [passiveUserData]);

  useEffect(() => {
    const commentsValues = [
      passiveFacebookComments,
      passiveInstagramComments,
      passiveTiktokComments,
      passiveYoutubeComments,
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
      const totalValue = orderedFlatCommentsValues.reduce(
        (sum, value) =>
          sum +
          (value?.positive || 0) +
          (value?.negative || 0) +
          (value?.neutral || 0),
        0,
      );
      const positiveValue = orderedFlatCommentsValues.reduce(
        (sum, value) => sum + (value?.positive || 0),
        0,
      );

      const positiveData = orderedFlatCommentsValues.map(
        (value) => value?.positive || 0,
      );

      const newSeries: SeriesProps[] = [
        {
          name: "Comentários Positivos 2",
          data: positiveData,
        },
      ];

      setPassiveSeries(newSeries);

      setTotalPassiveComments(totalValue);

      setPositivePassiveComments(positiveValue);
    }
  }, [
    passiveFacebookComments,
    passiveInstagramComments,
    passiveTiktokComments,
    passiveYoutubeComments,
  ]);

  useEffect(() => {
    if (activeSeries && activeSeries) {
      setFinalSeries([...activeSeries, ...passiveSeries]);
    }
  }, [activeSeries, passiveSeries]);

  useEffect(() => {
    if (
      totalActiveComments &&
      totalPassiveComments &&
      positiveActiveComments &&
      positivePassiveComments
    ) {
      setHeaderData([
        {
          value: totalActiveComments + totalPassiveComments,
          title: "Total Comentários",
          dot: false,
          color: "",
        },
        {
          value: positiveActiveComments,
          title: "Comentários Positivos 1",
          dot: true,
          color: "bg-sky-500",
        },
        {
          value: positivePassiveComments,
          title: "Comentários Positivos 2",
          dot: true,
          color: "bg-sky-900",
        },
      ]);
    }
  }, [
    positiveActiveComments,
    positivePassiveComments,
    totalActiveComments,
    totalPassiveComments,
  ]);

  return (
    <PositiveComments
      PositiveCommentsData={PositiveCommentsData}
      series={finalSeries}
      headerData={headerData.map((data, index) => (
        <div
          key={index}
          className="flex w-1/3 items-center gap-2 text-[10px] lg:text-xs"
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
