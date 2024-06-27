"use client";
import { ApexOptions } from "apexcharts";
import ReactApexChart from "react-apexcharts";

interface DonutChartWithFooterDataProps {
  ChartOptions: {
    series: number[];
    options: ApexOptions;
  };
  footerData: React.ReactNode[];
}

export function DonutChartWithFooterData({
  ChartOptions,
  footerData,
}: DonutChartWithFooterDataProps) {
  return (
    <div className="flex h-full w-full flex-col items-center justify-between">
      <div className="m-auto">
        <ReactApexChart
          options={ChartOptions.options}
          series={ChartOptions.series}
          type="donut"
        />
      </div>
      <div className="flex w-full items-center justify-between border-t border-dashed border-t-zinc-200">
        {footerData.map((idx) => (
          <div className="flex h-full w-full flex-col items-center justify-center border-x border-dashed border-x-zinc-200 py-4 first:border-l-0 last:border-r-0">
            {idx}
          </div>
        ))}
      </div>
    </div>
  );
}
