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
import { useSelectedDateContext } from "./SelectedDate";
import { authGetAPI, token as Token } from "@/lib/axios";
import {
  HashtagsMentionsDataProps,
  MentionsDataProps,
} from "@/types/MentionsData";

interface MentionsDataContextProps {
  mentionsData: MentionsDataProps | undefined;
  setMentionsData: Dispatch<SetStateAction<MentionsDataProps | undefined>>;
  isGettingData: boolean;
  setIsGettingData: Dispatch<SetStateAction<boolean>>;
  selectedMentionsType: string;
  setSelectedMentionsType: Dispatch<SetStateAction<string>>;
  hashtagData: HashtagsMentionsDataProps | undefined;
  setHashtagData: Dispatch<
    SetStateAction<HashtagsMentionsDataProps | undefined>
  >;
}

const MentionsDataContext = createContext({} as MentionsDataContextProps);

interface ContextProps {
  children: React.ReactNode;
}

export const MentionsDataContextProvider = ({ children }: ContextProps) => {
  const cookies = useCookies();
  const { startDate, setStartDate, endDate, setEndDate } =
    useSelectedDateContext();
  const [mentionsData, setMentionsData] = useState<MentionsDataProps>();
  const [hashtagData, setHashtagData] = useState<HashtagsMentionsDataProps>();
  const [isGettingData, setIsGettingData] = useState(true);
  const [selectedMentionsType, setSelectedMentionsType] =
    useState<string>("personal");
  const { selectedPolitician } = useSelectedPoliticianContext();

  const token = cookies.get(Token);
  async function GetHashtagsMentionsData() {
    const hashtagData = await authGetAPI(
      `/hashtag/mentions?endDate=${endDate}&startDate=${startDate}`,
      token,
    );
    if (hashtagData.status === 200) {
      setHashtagData(hashtagData.body);
    }
  }

  async function GetMentionsData() {
    const token = cookies.get(Token);
    setIsGettingData(true);
    const mentionsData = await authGetAPI(
      // `/profile/mentions/${selectedPolitician?.id}?endDate=2024-06-14&startDate=2024-03-14`,
      `/profile/mentions/8eb93d97-4852-4cd3-877f-7938dadca2f5?endDate=2024-06-14&startDate=2024-03-14`,
      token,
    );
    if (mentionsData.status === 200) {
      setMentionsData(mentionsData.body);
      return setTimeout(() => {
        setIsGettingData(false);
      }, 1000);
    }
    return setTimeout(() => {
      setIsGettingData(false);
    }, 1000);
  }

  useEffect(() => {
    if (selectedPolitician && selectedPolitician.id) {
      GetHashtagsMentionsData();
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
    hashtagData,
    setHashtagData,
  };

  return (
    <MentionsDataContext.Provider value={value}>
      {children}
    </MentionsDataContext.Provider>
  );
};

export function useMentionsDataContext() {
  const {
    mentionsData,
    setMentionsData,
    isGettingData,
    setIsGettingData,
    selectedMentionsType,
    setSelectedMentionsType,
    hashtagData,
    setHashtagData,
  } = useContext(MentionsDataContext);

  return {
    mentionsData,
    setMentionsData,
    isGettingData,
    setIsGettingData,
    selectedMentionsType,
    setSelectedMentionsType,
    hashtagData,
    setHashtagData,
  };
}
