"use client";
import { ApexOptions } from "apexcharts";
import ReactApexChart from "react-apexcharts";
// const ReactApexChart = dynamic(() => import("react-apexcharts"), {
//   ssr: false,
// });

interface DonutChartWithFooterDataProps {
  ChartOptions: {
    options: ApexOptions;
  };
  series: number[];
  footerData: React.ReactNode[];
}

export function DonutChartWithFooterData({
  ChartOptions,
  series,
  footerData,
}: DonutChartWithFooterDataProps) {
  return (
    <div className="flex h-full w-full flex-col items-center justify-between">
      <div className="m-auto">
        <ReactApexChart
          options={ChartOptions.options}
          series={series}
          type="donut"
        />
      </div>
      <div className="mb-12 flex w-full items-center justify-center">
        {footerData.map((idx, index) => (
          <div
            key={index}
            className="flex flex-col items-center justify-center border-x border-dashed border-x-zinc-200 p-4 first:border-l-0 last:border-r-0 lg:p-1 xl:p-2"
          >
            {idx}
          </div>
        ))}
      </div>
    </div>
  );
}
