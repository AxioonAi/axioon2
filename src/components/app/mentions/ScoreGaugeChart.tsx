"use client";
import { useEffect, useState } from "react";
// import ReactApexChart from "react-apexcharts";
import { ApexOptions } from "apexcharts";
import Image from "next/image";
import dynamic from "next/dynamic";
import { BaseCard } from "@/components/global/BaseCard/BaseCard";
import { BaseCardHeader } from "@/components/global/BaseCard/BaseCardHeader";
const ReactApexChart = dynamic(() => import("react-apexcharts"), {
  ssr: false,
});

interface ScoreGaugeChartProps {
  ScoreGaugeChartData: {
    name: string;
    sentimentData: {
      name: string;
      value: number;
    }[];
  };
}

export function ScoreGaugeChart({ ScoreGaugeChartData }: ScoreGaugeChartProps) {
  const [value, setValue] = useState(100);

  const [series, setSeries] = useState([value / 10]);
  useEffect(() => {
    if (
      ScoreGaugeChartData.sentimentData &&
      ScoreGaugeChartData.sentimentData[0].value
    ) {
      setValue(Number(ScoreGaugeChartData.sentimentData[0].value.toFixed(0)));
      setSeries([
        Number(ScoreGaugeChartData.sentimentData[0].value.toFixed(0)) / 10,
      ]);
    }
  }, [ScoreGaugeChartData.sentimentData]);

  const [options] = useState<ApexOptions>({
    chart: {
      type: "radialBar",
    },
    plotOptions: {
      radialBar: {
        startAngle: -90,
        endAngle: 90,
        dataLabels: {
          value: {
            fontSize: "20px",
            offsetY: -20,
            fontWeight: "bold",
            color: undefined,
            formatter: (val: number) => {
              return (val * 10).toString();
            },
          },
        },
      },
    },
    fill: {
      type: "gradient",
      gradient: {
        shade: "dark",
        shadeIntensity: 0.15,
        inverseColors: false,
        opacityFrom: 1,
        opacityTo: 1,
        stops: [0, 50, 65, 91],
      },
    },
    stroke: {
      dashArray: 4,
    },
    labels: [""],
  });
  return (
    <BaseCard className="p-0">
      <BaseCardHeader title={"Score " + ScoreGaugeChartData.name} />
      <div className="flex h-full w-full gap-8">
        <ReactApexChart
          options={options}
          series={series}
          type="radialBar"
          height={200}
        />
        <div className="flex items-center gap-2">
          <Image
            src={
              ScoreGaugeChartData.sentimentData[0].value >= 650
                ? "/Icons/positiveScore.svg"
                : ScoreGaugeChartData.sentimentData[0].value < 650 &&
                    ScoreGaugeChartData.sentimentData[0].value >= 450
                  ? "/Icons/neutralScore.svg"
                  : "/Icons/negativeScore.svg"
            }
            width={50}
            height={50}
            alt=""
          />
          <span>
            {ScoreGaugeChartData.sentimentData[0].value >= 650
              ? "Positivo"
              : ScoreGaugeChartData.sentimentData[0].value < 650 &&
                  ScoreGaugeChartData.sentimentData[0].value >= 450
                ? "Neutro"
                : "Negativo"}
          </span>
        </div>
      </div>
    </BaseCard>
  );
}
