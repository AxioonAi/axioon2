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

interface SocialMediaDataContextProps {
  facebook: boolean;
  instagram: boolean;
  tiktok: boolean;
  youtube: boolean;
  setFacebook: Dispatch<SetStateAction<boolean>>;
  setInstagram: Dispatch<SetStateAction<boolean>>;
  setTiktok: Dispatch<SetStateAction<boolean>>;
  setYoutube: Dispatch<SetStateAction<boolean>>;
}

const SocialMediaDataContext = createContext({} as SocialMediaDataContextProps);

interface ContextProps {
  children: React.ReactNode;
}

export const SocialMediaDataContextProvider = ({ children }: ContextProps) => {
  const [facebook, setFacebook] = useState(false);
  const [instagram, setInstagram] = useState(false);
  const [tiktok, setTiktok] = useState(false);
  const [youtube, setYoutube] = useState(false);
  const { selectedPolitician } = useSelectedPoliticianContext();

  async function GetSocialMediaData() {
    const socialMediaData = await authGetAPI(
      `/profile/media/${selectedPolitician?.id}?endDate=${new Date().toISOString().split("T")[0]}&startDate=${new Date(new Date().getTime() - 7 * 24 * 60 * 60 * 1000).toISOString().split("T")[0]}&instagram=${instagram}&facebook=${facebook}&tiktok=${tiktok}&youtube=${youtube}`,
    );
  }

  async function Test() {
    const test = await authGetAPI(
      `/hashtag/mentions?endDate=2024-08-05&startDate=2024-07-05`,
    );
  }

  useEffect(() => {
    Test();
  }, [selectedPolitician]);

  useEffect(() => {
    GetSocialMediaData();
  }, [selectedPolitician]);

  const value = {
    facebook,
    instagram,
    tiktok,
    youtube,
    setFacebook,
    setInstagram,
    setTiktok,
    setYoutube,
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
  };
}
