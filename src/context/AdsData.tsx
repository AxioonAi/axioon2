"use client";

import { useCookies } from "next-client-cookies";
import { createContext, useContext, useEffect, useState } from "react";
import { useSelectedPoliticianContext } from "./SelectedPolitician";
import { useSelectedDateContext } from "./SelectedDate";
import { authGetAPI, token as Token } from "@/lib/axios";

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

interface AdsDataContextProps {
  adsData: AdsDataProps | undefined;
  setAdsData: React.Dispatch<React.SetStateAction<AdsDataProps | undefined>>;
  isGettingData: boolean;
  setIsGettingData: React.Dispatch<React.SetStateAction<boolean>>;
}

const AdsDataContext = createContext({} as AdsDataContextProps);

interface ContextProps {
  children: React.ReactNode;
}

export const AdsDataContextProvider = ({ children }: ContextProps) => {
  const cookies = useCookies();
  const { startDate, endDate } = useSelectedDateContext();
  const { selectedPolitician } = useSelectedPoliticianContext();
  const [adsData, setAdsData] = useState<AdsDataProps | undefined>();
  const [isGettingData, setIsGettingData] = useState(false);

  async function GetAdsData() {
    setIsGettingData(true);
    const token = cookies.get(Token);
    const ads = await authGetAPI(
      `/profile/advertising/${selectedPolitician?.id}?endDate=${endDate}&startDate=${startDate}`,
      // "/profile/advertising/bef3421d-8c74-4758-8aaf-6e898e1f26b1?startDate=2024-06-14&endDate=2024-06-14",
      token,
    );
    if (ads.status === 200) {
      setAdsData(ads.body.advertising);
      return setTimeout(() => {
        setIsGettingData(false);
      }, 1500);
    }
    return setTimeout(() => {
      setIsGettingData(false);
    }, 1500);
  }

  useEffect(() => {
    if (selectedPolitician?.id) {
      GetAdsData();
    }
  }, [selectedPolitician, startDate, endDate]);

  const value = {
    adsData,
    setAdsData,
    isGettingData,
    setIsGettingData,
  };

  return (
    <AdsDataContext.Provider value={value}>{children}</AdsDataContext.Provider>
  );
};

export function useAdsDataContext() {
  const { adsData, setAdsData, isGettingData, setIsGettingData } =
    useContext(AdsDataContext);

  return {
    adsData,
    setAdsData,
    isGettingData,
    setIsGettingData,
  };
}
