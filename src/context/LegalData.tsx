"use client";

import { createContext, useContext, useEffect, useState } from "react";
import { useCookies } from "next-client-cookies";
import { useSelectedPoliticianContext } from "./SelectedPolitician";
import { authGetAPI, token as Token } from "@/lib/axios";
import { LegalDataProps } from "@/types/LegalData";

interface LegalDataContextProps {
  isGettingData: boolean;
  setIsGettingData: React.Dispatch<React.SetStateAction<boolean>>;
  legalData: LegalDataProps | undefined;
  setLegalData: React.Dispatch<
    React.SetStateAction<LegalDataProps | undefined>
  >;
}

const LegalDataContext = createContext({} as LegalDataContextProps);

interface ContextProps {
  children: React.ReactNode;
}

export const LegalDataContextProvider = ({ children }: ContextProps) => {
  const cookies = useCookies();
  const [isGettingData, setIsGettingData] = useState(true);
  const [legalData, setLegalData] = useState<LegalDataProps>();
  const { selectedPolitician } = useSelectedPoliticianContext();

  async function GetLegalData() {
    setIsGettingData(true);
    const token = cookies.get(Token);
    const legal = await authGetAPI(
      `/profile/legal/${selectedPolitician?.id}`,
      token,
    );
    if (legal.status === 200) {
      setLegalData(legal.body.politicianProfile);
      return setTimeout(() => {
        setIsGettingData(false);
      }, 1500);
    }
    return setTimeout(() => {
      setIsGettingData(false);
    }, 1500);
  }

  useEffect(() => {
    GetLegalData();
  }, [selectedPolitician]);

  const value = { isGettingData, setIsGettingData, legalData, setLegalData };

  return (
    <LegalDataContext.Provider value={value}>
      {children}
    </LegalDataContext.Provider>
  );
};

export function useLegalDataContext() {
  const { isGettingData, setIsGettingData, legalData, setLegalData } =
    useContext(LegalDataContext);

  return { isGettingData, setIsGettingData, legalData, setLegalData };
}
