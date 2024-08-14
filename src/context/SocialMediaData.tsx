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
interface SocialMediaDataContextProps {
  facebook: boolean;
  instagram: boolean;
  tiktok: boolean;
  youtube: boolean;
  setFacebook: Dispatch<SetStateAction<boolean>>;
  setInstagram: Dispatch<SetStateAction<boolean>>;
  setTiktok: Dispatch<SetStateAction<boolean>>;
  setYoutube: Dispatch<SetStateAction<boolean>>;
  startDate: Date;
  setStartDate: Dispatch<SetStateAction<Date>>;
  endDate: Date;
  setEndDate: Dispatch<SetStateAction<Date>>;
  socialMediaData: SocialMediaDataProps | undefined;
  setSocialMediaData: Dispatch<
    SetStateAction<SocialMediaDataProps | undefined>
  >;
  isGettingData: boolean;
  setIsGettingData: Dispatch<SetStateAction<boolean>>;
}

const SocialMediaDataContext = createContext({} as SocialMediaDataContextProps);

interface ContextProps {
  children: React.ReactNode;
}

export const SocialMediaDataContextProvider = ({ children }: ContextProps) => {
  const cookies = useCookies();
  const [facebook, setFacebook] = useState(true);
  const [instagram, setInstagram] = useState(true);
  const [tiktok, setTiktok] = useState(true);
  const [youtube, setYoutube] = useState(true);
  const [startDate, setStartDate] = useState<Date>(
    new Date(new Date().getTime() - 30 * 24 * 60 * 60 * 1000),
  );
  const [endDate, setEndDate] = useState<Date>(new Date());
  const [socialMediaData, setSocialMediaData] =
    useState<SocialMediaDataProps>();
  const [isGettingData, setIsGettingData] = useState(false);
  const { selectedPolitician } = useSelectedPoliticianContext();

  async function GetSocialMediaData() {
    const token = cookies.get(Token);
    setIsGettingData(true);
    const socialMediaData = await authGetAPI(
      `/profile/media/${selectedPolitician?.id}?endDate=2024-06-14&startDate=2024-03-14&instagram=${instagram}&facebook=${facebook}&tiktok=${tiktok}&youtube=${youtube}`,
      token,
    );
    if (socialMediaData.status === 200) {
      setSocialMediaData(socialMediaData.body.data);
      return setIsGettingData(false);
    }
    return setIsGettingData(false);
  }

  useEffect(() => {
    GetSocialMediaData();
  }, [
    selectedPolitician,
    instagram,
    facebook,
    tiktok,
    youtube,
    startDate,
    endDate,
  ]);

  // async function Test() {
  //   const test = await authGetAPI(
  //     `/hashtag/mentions?endDate=2024-06-14&startDate=2024-03-14`,
  //   );
  //   console.log("test: ", test);
  // }

  // useEffect(() => {
  //   Test();
  // }, []);

  const value = {
    facebook,
    instagram,
    tiktok,
    youtube,
    setFacebook,
    setInstagram,
    setTiktok,
    setYoutube,
    startDate,
    setStartDate,
    endDate,
    setEndDate,
    socialMediaData,
    setSocialMediaData,
    isGettingData,
    setIsGettingData,
  };

  return (
    <SocialMediaDataContext.Provider value={value}>
      {children}
    </SocialMediaDataContext.Provider>
  );
};

export function useSocialMediaDataContext() {
  const {
    facebook,
    instagram,
    tiktok,
    youtube,
    setFacebook,
    setInstagram,
    setTiktok,
    setYoutube,
    startDate,
    setStartDate,
    endDate,
    setEndDate,
    socialMediaData,
    setSocialMediaData,
    isGettingData,
    setIsGettingData,
  } = useContext(SocialMediaDataContext);

  return {
    facebook,
    instagram,
    tiktok,
    youtube,
    setFacebook,
    setInstagram,
    setTiktok,
    setYoutube,
    startDate,
    setStartDate,
    endDate,
    setEndDate,
    socialMediaData,
    setSocialMediaData,
    isGettingData,
    setIsGettingData,
  };
}
