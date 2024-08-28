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

interface AdsDataProps {
  ads: {
    average_impressions: number;
    average_spend: number;
    end_date?: string;
    id: string;
    start_date: string;
    status: string;
  }[];
  public_by_age_and_gender: {
    age_group: string;
    gender: string;
    value: number;
  }[];
  public_by_gender: {
    female: number;
    male: number;
    unknown: number;
  };
  total_ads: number;
  total_impressions: number;
  total_spend: number;
}

interface ComparatorDataContextProps {
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
  activeAdsData: AdsDataProps | undefined;
  setActiveAdsData: Dispatch<SetStateAction<AdsDataProps | undefined>>;
  passiveAdsData: AdsDataProps | undefined;
  setPassiveAdsData: Dispatch<SetStateAction<AdsDataProps | undefined>>;
}

const ComparatorDataContext = createContext({} as ComparatorDataContextProps);

interface ContextProps {
  children: React.ReactNode;
}

export const ComparatorDataContextProvider = ({ children }: ContextProps) => {
  const cookies = useCookies();
  const { startDate, endDate } = useSelectedDateContext();
  const { selectedPolitician, politicians } = useSelectedPoliticianContext();
  const [activeUserData, setActiveUserData] = useState<SocialMediaDataProps>();
  const [passiveUserData, setPassiveUserData] =
    useState<SocialMediaDataProps>();
  const [activeUserMentionsData, setActiveUserMentionsData] =
    useState<MentionsDataProps>();
  const [passiveUserMentionsData, setPassiveUserMentionsData] =
    useState<MentionsDataProps>();
  const [activeAdsData, setActiveAdsData] = useState<AdsDataProps>();
  const [passiveAdsData, setPassiveAdsData] = useState<AdsDataProps>();

  const [activeUserProfileData, setActiveUserProfileData] = useState<
    Politician | undefined
  >();
  const [passiveUserProfileData, setPassiveUserProfileData] = useState<
    Politician | undefined
  >();

  const [isGettingData, setIsGettingData] = useState(true);

  async function GetSocialMediaData() {
    const token = cookies.get(Token);
    if (!selectedPolitician?.id) {
      return;
    }
    const [activeUser, passiveUser] = await Promise.all([
      authGetAPI(
        // `/profile/media/8eb93d97-4852-4cd3-877f-7938dadca2f5?endDate=2024-06-14&startDate=2024-03-14&instagram=true&facebook=true&tiktok=true&youtube=true`,
        `/profile/media/${activeUserProfileData?.id}?endDate=${endDate}&startDate=${startDate}&instagram=true&facebook=true&tiktok=true&youtube=true`,
        token,
      ),
      authGetAPI(
        // `/profile/media/4e7f0981-ae98-40f9-832e-e0770e98d8f2?endDate=2024-06-14&startDate=2024-03-14&instagram=true&facebook=true&tiktok=true&youtube=true`,
        `/profile/media/${passiveUserProfileData?.id}?endDate=${endDate}&startDate=${startDate}&instagram=true&facebook=true&tiktok=true&youtube=true`,
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
    const [activeUser, passiveUser] = await Promise.all([
      authGetAPI(
        // `/profile/mentions/8eb93d97-4852-4cd3-877f-7938dadca2f5?endDate=2024-06-14&startDate=2024-03-14`,
        `/profile/mentions/${activeUserProfileData?.id}?endDate=${endDate}&startDate=${startDate}`,
        token,
      ),
      authGetAPI(
        // `/profile/mentions/8eb93d97-4852-4cd3-877f-7938dadca2f5?endDate=2024-06-14&startDate=2024-03-14`,
        `/profile/mentions/${passiveUserProfileData?.id}?endDate=${endDate}&startDate=${startDate}`,
        token,
      ),
    ]);
    if (activeUser.status === 200 && passiveUser.status === 200) {
      setActiveUserMentionsData(activeUser.body);
      setPassiveUserMentionsData(passiveUser.body);
    }
  }

  async function GetAdsData() {
    const token = cookies.get(Token);
    const [activeUser, passiveUser] = await Promise.all([
      authGetAPI(
        `/profile/advertising/${activeUserProfileData?.id}?endDate=${endDate}&startDate=${startDate}`,
        token,
      ),
      authGetAPI(
        `/profile/advertising/${passiveUserProfileData?.id}?endDate=${endDate}&startDate=${startDate}`,
        token,
      ),
    ]);

    if (activeUser.status === 200 && passiveUser.status === 200) {
      setActiveAdsData(activeUser.body.advertising);
      setPassiveAdsData(passiveUser.body.advertising);
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
      await Promise.all([
        GetSocialMediaData(),
        GetMentionsData(),
        GetAdsData(),
      ]);
      setTimeout(() => {
        setIsGettingData(false);
      }, 1500);
    }
    if (activeUserProfileData?.id && passiveUserProfileData?.id) {
      GetData();
    }
  }, [
    selectedPolitician,
    startDate,
    endDate,
    activeUserProfileData,
    passiveUserProfileData,
  ]);

  const value = {
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
    activeAdsData,
    setActiveAdsData,
    passiveAdsData,
    setPassiveAdsData,
  };

  return (
    <ComparatorDataContext.Provider value={value}>
      {children}
    </ComparatorDataContext.Provider>
  );
};

export function useComparatorDataContext() {
  const {
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
    activeAdsData,
    setActiveAdsData,
    passiveAdsData,
    setPassiveAdsData,
  } = useContext(ComparatorDataContext);

  return {
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
    activeAdsData,
    setActiveAdsData,
    passiveAdsData,
    setPassiveAdsData,
  };
}
