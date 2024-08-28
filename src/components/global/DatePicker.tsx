"use client";
import * as Popover from "@radix-ui/react-popover";
import { DateRange, DayPicker } from "react-day-picker";
import { ptBR } from "date-fns/locale";
import { useCookies } from "next-client-cookies";
import { useEffect, useState } from "react";
import Image from "next/image";
import { useSelectedDateContext } from "@/context/SelectedDate";

export function DatePicker() {
  const { startDate, endDate, setStartDate, setEndDate } =
    useSelectedDateContext();
  const cookies = useCookies();

  const [selectedStartDate, setSelectedStartDate] = useState<
    Date | undefined
  >();

  const [selectedEndDate, setSelectedEndDate] = useState<Date | undefined>();

  useEffect(() => {
    if (startDate && endDate) {
      setSelectedStartDate(startDate);
      setSelectedEndDate(endDate);
    }
  }, [startDate, endDate]);

  const HandleDateUpdate = () => {
    if (selectedStartDate && selectedEndDate) {
      cookies.set("startDate", selectedStartDate.toISOString());
      cookies.set("endDate", selectedEndDate.toISOString());
      setStartDate(selectedStartDate);
      setEndDate(selectedEndDate);
    }
  };
  return (
    <Popover.Root>
      <Popover.Trigger className="flex items-center gap-1 rounded bg-sky-700 px-1.5 py-1 text-[10px] text-white lg:text-xs 2xl:text-sm 3xl:text-base">
        <span>
          {startDate?.toLocaleDateString("pt-BR")} -{" "}
          {endDate?.toLocaleDateString("pt-BR")}
        </span>
        <Image
          src="/Icons/calendar.svg"
          alt=""
          width={50}
          height={50}
          className="h-4 w-4"
        />
      </Popover.Trigger>
      <Popover.Content
        className="z-50 flex flex-col items-center justify-between rounded bg-white p-4 text-center text-sm font-semibold shadow-md"
        align="end"
        sideOffset={5}
        side="bottom"
      >
        <div className="flex h-full w-full flex-col gap-2 p-2">
          <DayPicker
            mode="range"
            required
            selected={{ from: selectedStartDate, to: selectedEndDate }}
            locale={ptBR}
            onSelect={(range: DateRange | undefined) => {
              if (range) {
                setSelectedStartDate(range.from);
                setSelectedEndDate(range.to);
              }
            }}
            classNames={{
              range_end: "text-white bg-sky-600",
              range_start: "bg-sky-600 text-white",
              today: "",
              selected:
                " border-red-500 ring-red-500 bg-sky-600 rounded-full outline-red-500",
            }}
          />
          <button
            onClick={HandleDateUpdate}
            className="rounded bg-sky-600 px-1.5 py-1 text-[10px] text-white lg:text-xs 2xl:text-sm 3xl:text-base"
          >
            Alterar Datas
          </button>
        </div>
      </Popover.Content>
    </Popover.Root>
  );
}
