"use client";

import {
  createContext,
  Dispatch,
  SetStateAction,
  useContext,
  useEffect,
  useState,
} from "react";
import { useSelectedPoliticianContext } from "./SelectedPolitician";
import { authGetAPI } from "@/lib/axios";
import { MentionsDataProps } from "@/types/MentionsData";

interface MentionsDataContextProps {
  startDate: Date;
  setStartDate: Dispatch<SetStateAction<Date>>;
  endDate: Date;
  setEndDate: Dispatch<SetStateAction<Date>>;
  mentionsData: MentionsDataProps | undefined;
  setMentionsData: Dispatch<SetStateAction<MentionsDataProps | undefined>>;
  isGettingData: boolean;
  setIsGettingData: Dispatch<SetStateAction<boolean>>;
}

const MentionsDataContext = createContext({} as MentionsDataContextProps);

interface ContextProps {
  children: React.ReactNode;
}

export const MentionsDataContextProvider = ({ children }: ContextProps) => {
  const [startDate, setStartDate] = useState<Date>(
    new Date(new Date().getTime() - 30 * 24 * 60 * 60 * 1000),
  );
  const [endDate, setEndDate] = useState<Date>(new Date());
  const [mentionsData, setMentionsData] = useState<MentionsDataProps>();
  const [isGettingData, setIsGettingData] = useState(false);
  const { selectedPolitician } = useSelectedPoliticianContext();

  async function GetHashtagsMentionsData() {
    const connect = await authGetAPI(
      `/hashtag/mentions?endDate=2024-06-14&startDate=2024-03-14`,
    );
    console.log("connect: ", connect);
  }

  async function GetMentionsData() {
    setIsGettingData(true);
    const mentionsData = await authGetAPI(
      // `/profile/mentions/${selectedPolitician?.id}?endDate=2024-06-14&startDate=2024-03-14`,
      `/profile/mentions/${selectedPolitician?.id}?endDate=${endDate.getFullYear()}-${endDate.getMonth() + 1}-${endDate.getDate()}&startDate=${startDate.getFullYear()}-${startDate.getMonth() + 1}-${startDate.getDate()}`,
    );
    if (mentionsData.status === 200) {
      setMentionsData(mentionsData.body);
      console.log("mentionsData: ", mentionsData);
      return setIsGettingData(false);
    }
    return setIsGettingData(false);
  }

  useEffect(() => {
    GetHashtagsMentionsData();
    if (selectedPolitician && selectedPolitician.id) {
      GetMentionsData();
    }
  }, [selectedPolitician, startDate, endDate]);

  const value = {
    startDate,
    setStartDate,
    endDate,
    setEndDate,
    mentionsData,
    setMentionsData,
    isGettingData,
    setIsGettingData,
  };

  return (
    <MentionsDataContext.Provider value={value}>
      {children}
    </MentionsDataContext.Provider>
  );
};

export function useMentionsDataContext() {
  const {
    startDate,
    setStartDate,
    endDate,
    setEndDate,
    mentionsData,
    setMentionsData,
    isGettingData,
    setIsGettingData,
  } = useContext(MentionsDataContext);

  return {
    startDate,
    setStartDate,
    endDate,
    setEndDate,
    mentionsData,
    setMentionsData,
    isGettingData,
    setIsGettingData,
  };
}
