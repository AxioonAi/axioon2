"use client";

import { useCookies } from "next-client-cookies";
import {
  createContext,
  Dispatch,
  SetStateAction,
  useContext,
  useEffect,
  useState,
} from "react";

interface SelectedDateProps {
  startDate: Date | undefined;
  setStartDate: Dispatch<SetStateAction<Date | undefined>>;
  endDate: Date | undefined;
  setEndDate: Dispatch<SetStateAction<Date | undefined>>;
}

const SelectedDate = createContext({} as SelectedDateProps);

interface ContextProps {
  children: React.ReactNode;
}

export const SelectedDateContextProvider = ({ children }: ContextProps) => {
  const cookies = useCookies();
  const [startDate, setStartDate] = useState<Date | undefined>();
  const [endDate, setEndDate] = useState<Date | undefined>();

  useEffect(() => {
    const startDateValue = cookies.get("startDate");
    const endDateValue = cookies.get("endDate");

    if (startDateValue && endDateValue) {
      setStartDate(new Date(startDateValue));
      setEndDate(new Date(endDateValue));
    } else {
      setStartDate(new Date(new Date().getTime() - 30 * 24 * 60 * 60 * 1000));
      setEndDate(new Date());
    }
  }, [cookies.get("startDate"), cookies.get("endDate")]);

  const value = { startDate, setStartDate, endDate, setEndDate };

  return (
    <SelectedDate.Provider value={value}>{children}</SelectedDate.Provider>
  );
};

export function useSelectedDateContext() {
  const { startDate, setStartDate, endDate, setEndDate } =
    useContext(SelectedDate);

  return { startDate, setStartDate, endDate, setEndDate };
}
