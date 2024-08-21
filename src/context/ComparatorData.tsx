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
import { SocialMediaDataProps } from "@/types/SocialMediaData";
import { MentionsDataProps } from "@/types/MentionsData";

interface Politician {
  campaignNumber: number;
  city: string;
  facebook: string;
  id: string;
  image: string;
  instagram: string;
  name: string;
  politicalGroup: string;
  tiktok: string;
  youtube: string;
}

interface ComparatorDataContextProps {
  startDate: Date | undefined;
  setStartDate: Dispatch<SetStateAction<Date | undefined>>;
  endDate: Date | undefined;
  setEndDate: Dispatch<SetStateAction<Date | undefined>>;
  activeUserData: SocialMediaDataProps | undefined;
  setActiveUserData: Dispatch<SetStateAction<SocialMediaDataProps | undefined>>;
  passiveUserData: SocialMediaDataProps | undefined;
  setPassiveUserData: Dispatch<
    SetStateAction<SocialMediaDataProps | undefined>
  >;
  activeUserProfileData: Politician | undefined;
  setActiveUserProfileData: Dispatch<SetStateAction<Politician | undefined>>;
  passiveUserProfileData: Politician | undefined;
  setPassiveUserProfileData: Dispatch<SetStateAction<Politician | undefined>>;
  isGettingData: boolean;
  setIsGettingData: Dispatch<SetStateAction<boolean>>;
  activeUserMentionsData: MentionsDataProps | undefined;
  setActiveUserMentionsData: Dispatch<
    SetStateAction<MentionsDataProps | undefined>
  >;
  passiveUserMentionsData: MentionsDataProps | undefined;
  setPassiveUserMentionsData: Dispatch<
    SetStateAction<MentionsDataProps | undefined>
  >;
}

const ComparatorDataContext = createContext({} as ComparatorDataContextProps);

interface ContextProps {
  children: React.ReactNode;
}

export const ComparatorDataContextProvider = ({ children }: ContextProps) => {
  const cookies = useCookies();
  const { selectedPolitician, politicians } = useSelectedPoliticianContext();
  const [startDate, setStartDate] = useState<Date | undefined>(
    new Date(new Date().getTime() - 30 * 24 * 60 * 60 * 1000),
  );
  const [endDate, setEndDate] = useState<Date | undefined>(new Date());
  const [activeUserData, setActiveUserData] = useState<SocialMediaDataProps>();
  const [passiveUserData, setPassiveUserData] =
    useState<SocialMediaDataProps>();
  const [activeUserMentionsData, setActiveUserMentionsData] =
    useState<MentionsDataProps>();
  const [passiveUserMentionsData, setPassiveUserMentionsData] =
    useState<MentionsDataProps>();

  const [activeUserProfileData, setActiveUserProfileData] = useState<
    Politician | undefined
  >();
  const [passiveUserProfileData, setPassiveUserProfileData] = useState<
    Politician | undefined
  >();

  const [isGettingData, setIsGettingData] = useState(true);

  async function GetSocialMediaData() {
    setIsGettingData(true);
    const token = cookies.get(Token);
    const [activeUser, passiveUser] = await Promise.all([
      authGetAPI(
        // `/profile/media/8eb93d97-4852-4cd3-877f-7938dadca2f5?endDate=2024-06-14&startDate=2024-03-14&instagram=true&facebook=true&tiktok=true&youtube=true`,
        `/profile/media/8eb93d97-4852-4cd3-877f-7938dadca2f5?endDate=${endDate}&startDate=${startDate}&instagram=true&facebook=true&tiktok=true&youtube=true`,
        token,
      ),
      authGetAPI(
        // `/profile/media/4e7f0981-ae98-40f9-832e-e0770e98d8f2?endDate=2024-06-14&startDate=2024-03-14&instagram=true&facebook=true&tiktok=true&youtube=true`,
        `/profile/media/8eb93d97-4852-4cd3-877f-7938dadca2f5?endDate=${endDate}&startDate=${startDate}&instagram=true&facebook=true&tiktok=true&youtube=true`,
        token,
      ),
    ]);
    if (activeUser.status === 200 && passiveUser.status === 200) {
      setActiveUserData(activeUser.body.data);
      setPassiveUserData(passiveUser.body.data);
    }
  }

  async function GetMentionsData() {
    const token = cookies.get(Token);
    setIsGettingData(true);
    const [activeUser, passiveUser] = await Promise.all([
      authGetAPI(
        // `/profile/mentions/8eb93d97-4852-4cd3-877f-7938dadca2f5?endDate=2024-06-14&startDate=2024-03-14`,
        `/profile/mentions/8eb93d97-4852-4cd3-877f-7938dadca2f5?endDate=${endDate}&startDate=${startDate}`,
        token,
      ),
      authGetAPI(
        // `/profile/mentions/8eb93d97-4852-4cd3-877f-7938dadca2f5?endDate=2024-06-14&startDate=2024-03-14`,
        `/profile/mentions/8eb93d97-4852-4cd3-877f-7938dadca2f5?endDate=${endDate}&startDate=${startDate}`,
        token,
      ),
    ]);
    if (activeUser.status === 200 && passiveUser.status === 200) {
      setActiveUserMentionsData(activeUser.body);
      setPassiveUserMentionsData(passiveUser.body);
    }
  }

  useEffect(() => {
    if (selectedPolitician) {
      setActiveUserProfileData(
        politicians.find(
          (politician) => politician.id === selectedPolitician.id,
        ),
      );
      setPassiveUserProfileData(
        politicians.filter(
          (politician) => politician.id !== selectedPolitician.id,
        )[0],
      );
    }
  }, [selectedPolitician]);

  useEffect(() => {
    async function GetData() {
      setIsGettingData(true);
      await Promise.all([GetSocialMediaData(), GetMentionsData()]);
      setTimeout(() => {
        setIsGettingData(false);
      }, 1500);
    }

    GetData();
  }, [selectedPolitician, startDate, endDate]);

  const value = {
    startDate,
    setStartDate,
    endDate,
    setEndDate,
    activeUserData,
    setActiveUserData,
    passiveUserData,
    setPassiveUserData,
    activeUserProfileData,
    setActiveUserProfileData,
    passiveUserProfileData,
    setPassiveUserProfileData,
    isGettingData,
    setIsGettingData,
    activeUserMentionsData,
    setActiveUserMentionsData,
    passiveUserMentionsData,
    setPassiveUserMentionsData,
  };

  return (
    <ComparatorDataContext.Provider value={value}>
      {children}
    </ComparatorDataContext.Provider>
  );
};

export function useComparatorDataContext() {
  const {
    startDate,
    setStartDate,
    endDate,
    setEndDate,
    activeUserData,
    setActiveUserData,
    passiveUserData,
    setPassiveUserData,
    activeUserProfileData,
    setActiveUserProfileData,
    passiveUserProfileData,
    setPassiveUserProfileData,
    isGettingData,
    setIsGettingData,
    activeUserMentionsData,
    setActiveUserMentionsData,
    passiveUserMentionsData,
    setPassiveUserMentionsData,
  } = useContext(ComparatorDataContext);

  return {
    startDate,
    setStartDate,
    endDate,
    setEndDate,
    activeUserData,
    setActiveUserData,
    passiveUserData,
    setPassiveUserData,
    activeUserProfileData,
    setActiveUserProfileData,
    passiveUserProfileData,
    setPassiveUserProfileData,
    isGettingData,
    setIsGettingData,
    activeUserMentionsData,
    setActiveUserMentionsData,
    passiveUserMentionsData,
    setPassiveUserMentionsData,
  };
}
