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
  startDate: Date | undefined;
  setStartDate: Dispatch<SetStateAction<Date | undefined>>;
  endDate: Date | undefined;
  setEndDate: Dispatch<SetStateAction<Date | undefined>>;
  staticData: SocialMediaDataProps | undefined;
  setStaticData: Dispatch<SetStateAction<SocialMediaDataProps | undefined>>;
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
  const [startDate, setStartDate] = useState<Date | undefined>(
    new Date(new Date().getTime() - 30 * 24 * 60 * 60 * 1000),
  );
  const [endDate, setEndDate] = useState<Date | undefined>(new Date());
  const [staticData, setStaticData] = useState<SocialMediaDataProps>();
  const [socialMediaData, setSocialMediaData] =
    useState<SocialMediaDataProps>();
  const [isGettingData, setIsGettingData] = useState(true);
  const { selectedPolitician } = useSelectedPoliticianContext();

  async function GetStaticData() {
    setIsGettingData(true);
    const token = cookies.get(Token);
    const socialMediaData = await authGetAPI(
      `/profile/media/8eb93d97-4852-4cd3-877f-7938dadca2f5?endDate=2024-06-14&startDate=2024-03-14&instagram=true&facebook=true&tiktok=true&youtube=true`,
      token,
    );
    if (socialMediaData.status === 200) {
      setStaticData(socialMediaData.body.data);
    }
  }

  async function GetSocialMediaData() {
    setIsGettingData(true);
    const token = cookies.get(Token);
    const socialMediaData = await authGetAPI(
      `/profile/media/8eb93d97-4852-4cd3-877f-7938dadca2f5?endDate=2024-06-14&startDate=2024-03-14&instagram=${instagram}&facebook=${facebook}&tiktok=${tiktok}&youtube=${youtube}`,
      token,
    );
    console.log("socialMediaData: ", socialMediaData.body.data);
    if (socialMediaData.status === 200) {
      setSocialMediaData(socialMediaData.body.data);
    }
  }

  useEffect(() => {
    async function GetData() {
      setIsGettingData(true);
      await Promise.all([GetStaticData(), GetSocialMediaData()]);
      setTimeout(() => {
        setIsGettingData(false);
      }, 1500);
    }

    GetData();
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
    staticData,
    setStaticData,

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
    staticData,
    setStaticData,
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
    staticData,
    setStaticData,
    isGettingData,
    setIsGettingData,
  };
}
