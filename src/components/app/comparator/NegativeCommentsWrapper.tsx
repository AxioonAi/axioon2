"use client";
import { twMerge } from "tailwind-merge";
import { useEffect, useState } from "react";
import { NegativeComments } from "./NegativeCommentsChart";
import { NegativeCommentsData } from "@/components/data/ComparatorData";
import { useComparatorDataContext } from "@/context/ComparatorData";

interface NegativeCommentsProps {
  label: string;
  negative: number;
  positive: number;
  neutral: number;
}

interface SeriesProps {
  name: string;
  data: number[];
}

export function NegativeWrapper() {
  const [activeFacebookComments, setActiveFacebookComments] = useState<
    NegativeCommentsProps[]
  >([]);
  const [activeInstagramComments, setActiveInstagramComments] = useState<
    NegativeCommentsProps[]
  >([]);
  const [activeTiktokComments, setActiveTiktokComments] = useState<
    NegativeCommentsProps[]
  >([]);
  const [activeYoutubeComments, setActiveYoutubeComments] = useState<
    NegativeCommentsProps[]
  >([]);
  const [passiveFacebookComments, setPassiveFacebookComments] = useState<
    NegativeCommentsProps[]
  >([]);
  const [passiveInstagramComments, setPassiveInstagramComments] = useState<
    NegativeCommentsProps[]
  >([]);
  const [passiveTiktokComments, setPassiveTiktokComments] = useState<
    NegativeCommentsProps[]
  >([]);
  const [passiveYoutubeComments, setPassiveYoutubeComments] = useState<
    NegativeCommentsProps[]
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
  const [negativeActiveComments, setNegativeActiveComments] = useState<
    number | null
  >();
  const [totalPassiveComments, setTotalPassiveComments] = useState<
    number | null
  >();
  const [negativePassiveComments, setNegativePassiveComments] = useState<
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
          (value?.negative || 0) +
          (value?.negative || 0) +
          (value?.neutral || 0),
        0,
      );
      const negativeValue = orderedFlatCommentsValues.reduce(
        (sum, value) => sum + (value?.negative || 0),
        0,
      );

      const negativeData = orderedFlatCommentsValues.map(
        (value) => value?.negative || 0,
      );

      const newSeries: SeriesProps[] = [
        {
          name: "Comentários Positivos 1",
          data: negativeData,
        },
      ];

      setActiveSeries(newSeries);

      setTotalActiveComments(totalValue);

      setNegativeActiveComments(negativeValue);
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
          (value?.negative || 0) +
          (value?.negative || 0) +
          (value?.neutral || 0),
        0,
      );
      const negativeValue = orderedFlatCommentsValues.reduce(
        (sum, value) => sum + (value?.negative || 0),
        0,
      );

      const negativeData = orderedFlatCommentsValues.map(
        (value) => value?.negative || 0,
      );

      const newSeries: SeriesProps[] = [
        {
          name: "Comentários Positivos 2",
          data: negativeData,
        },
      ];

      setPassiveSeries(newSeries);

      setTotalPassiveComments(totalValue);

      setNegativePassiveComments(negativeValue);
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
      negativeActiveComments &&
      negativePassiveComments
    ) {
      setHeaderData([
        {
          value: totalActiveComments + totalPassiveComments,
          title: "Total Comentários",
          dot: false,
          color: "",
        },
        {
          value: negativeActiveComments,
          title: "Comentários Positivos 1",
          dot: true,
          color: "bg-sky-500",
        },
        {
          value: negativePassiveComments,
          title: "Comentários Positivos 2",
          dot: true,
          color: "bg-sky-900",
        },
      ]);
    }
  }, [
    negativeActiveComments,
    negativePassiveComments,
    totalActiveComments,
    totalPassiveComments,
  ]);

  return (
    <NegativeComments
      NegativeCommentsData={NegativeCommentsData}
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
            <strong>{data.value.toFixed(2)}</strong>
            <span>{data.title}</span>
          </div>
        </div>
      ))}
    />
  );
}
