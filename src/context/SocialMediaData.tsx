"use client";

import { authGetAPI, token as Token } from "@/lib/axios";
import { SocialMediaDataProps } from "@/types/SocialMediaData";
import { useCookies } from "next-client-cookies";
import {
  createContext,
  Dispatch,
  SetStateAction,
  useContext,
  useEffect,
  useState,
} from "react";
import { useSelectedDateContext } from "./SelectedDate";
import { useSelectedPoliticianContext } from "./SelectedPolitician";
interface SocialMediaDataContextProps {
  facebook: boolean;
  instagram: boolean;
  tiktok: boolean;
  youtube: boolean;
  setFacebook: Dispatch<SetStateAction<boolean>>;
  setInstagram: Dispatch<SetStateAction<boolean>>;
  setTiktok: Dispatch<SetStateAction<boolean>>;
  setYoutube: Dispatch<SetStateAction<boolean>>;
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
  const { startDate, endDate } = useSelectedDateContext();
  const [facebook, setFacebook] = useState(true);
  const [instagram, setInstagram] = useState(true);
  const [tiktok, setTiktok] = useState(true);
  const [youtube, setYoutube] = useState(true);
  const [staticData, setStaticData] = useState<SocialMediaDataProps>();
  const [socialMediaData, setSocialMediaData] =
    useState<SocialMediaDataProps>();
  const [isGettingData, setIsGettingData] = useState(true);
  const { selectedPolitician } = useSelectedPoliticianContext();

  async function GetStaticData() {
    const token = cookies.get(Token);
    const socialMediaData = await authGetAPI(
      `/profile/media/${selectedPolitician?.id}?endDate=${endDate}&startDate=${startDate}&instagram=true&facebook=true&tiktok=true&youtube=true`,
      token,
    );
    if (socialMediaData.status === 200) {
      setStaticData(socialMediaData.body.data);
    }
  }

  async function GetSocialMediaData() {
    const token = cookies.get(Token);
    const socialMediaData = await authGetAPI(
      `/profile/media/${selectedPolitician?.id}?endDate=${endDate}&startDate=${startDate}&instagram=${instagram}&facebook=${facebook}&tiktok=${tiktok}&youtube=${youtube}`,
      token,
    );
    if (socialMediaData.status === 200) {
      setSocialMediaData(socialMediaData.body.data);
    }
  }

  useEffect(() => {
    async function GetData() {
      try {
        await Promise.all([GetStaticData(), GetSocialMediaData()]);
        setIsGettingData(false); // ✅ set the state when both are done
      } catch (error) {
        console.error("Error fetching data", error);
        // Optional: handle error state here
      }
    }

    if (selectedPolitician?.id) {
      setIsGettingData(true); // Optional: reset state before fetching again
      GetData();
    }
  }, [
    selectedPolitician,
    instagram,
    facebook,
    tiktok,
    youtube,
    startDate,
    endDate,
  ]);

  const value = {
    facebook,
    instagram,
    tiktok,
    youtube,
    setFacebook,
    setInstagram,
    setTiktok,
    setYoutube,
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
    socialMediaData,
    setSocialMediaData,
    staticData,
    setStaticData,
    isGettingData,
    setIsGettingData,
  };
}
