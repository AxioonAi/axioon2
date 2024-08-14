"use client";

import {
  createContext,
  Dispatch,
  SetStateAction,
  useContext,
  useEffect,
  useState,
} from "react";
import { useCookies } from "next-client-cookies";
import { useSelectedPoliticianContext } from "./SelectedPolitician";
import { authGetAPI, token as Token } from "@/lib/axios";
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
  selectedMentionsType: string;
  setSelectedMentionsType: Dispatch<SetStateAction<string>>;
}

const MentionsDataContext = createContext({} as MentionsDataContextProps);

interface ContextProps {
  children: React.ReactNode;
}

export const MentionsDataContextProvider = ({ children }: ContextProps) => {
  const cookies = useCookies();
  const [startDate, setStartDate] = useState<Date>(
    new Date(new Date().getTime() - 30 * 24 * 60 * 60 * 1000),
  );
  const [endDate, setEndDate] = useState<Date>(new Date());
  const [mentionsData, setMentionsData] = useState<MentionsDataProps>();
  const [isGettingData, setIsGettingData] = useState(false);
  const [selectedMentionsType, setSelectedMentionsType] =
    useState<string>("personal");
  const { selectedPolitician } = useSelectedPoliticianContext();

  async function GetHashtagsMentionsData() {
    const token = cookies.get(Token);
    const connect = await authGetAPI(
      `/hashtag/mentions?endDate=2024-06-14&startDate=2024-03-14`,
      token,
    );
    console.log("connect", connect);
  }

  async function GetMentionsData() {
    const token = cookies.get(Token);
    setIsGettingData(true);
    const mentionsData = await authGetAPI(
      // `/profile/mentions/${selectedPolitician?.id}?endDate=2024-06-14&startDate=2024-03-14`,
      `/profile/mentions/8eb93d97-4852-4cd3-877f-7938dadca2f5?endDate=2024-06-14&startDate=2024-03-14`,
      token,
    );
    console.log("mentionsData", mentionsData);
    if (mentionsData.status === 200) {
      setMentionsData(mentionsData.body);
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
    selectedMentionsType,
    setSelectedMentionsType,
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
    selectedMentionsType,
    setSelectedMentionsType,
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
    selectedMentionsType,
    setSelectedMentionsType,
  };
}
