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
import { authGetAPI, token as Token } from "@/lib/axios";

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

interface SelectedPoliticianContextProps {
  politicians: Politician[];
  // eslint-disable-next-line no-unused-vars
  setPoliticians: Dispatch<SetStateAction<Politician[]>>;
  selectedPolitician: Politician | null;
  // eslint-disable-next-line no-unused-vars
  setSelectedPolitician: (politician: Politician | null) => void;
}

const SelectedPoliticianContext = createContext(
  {} as SelectedPoliticianContextProps,
);

interface ContextProps {
  children: React.ReactNode;
}

export const SelectedPoliticianContextProvider = ({
  children,
}: ContextProps) => {
  const cookies = useCookies();
  const [politicians, setPoliticians] = useState<Politician[]>([]);
  const [selectedPolitician, setSelectedPolitician] =
    useState<Politician | null>(null);

  async function GetPoliticians() {
    const token = cookies.get(Token);
    const politicians = await authGetAPI("/profile/monitoring", token);
    if (politicians.status === 200) {
      setPoliticians(politicians.body.profile);
    }
  }

  // useEffect(() => {
  //   GetPoliticians();
  //   if (selectedPolitician === null && politicians.length > 0) {
  //     setSelectedPolitician(politicians[0]);
  //   }
  // }, [politicians, selectedPolitician]);

  const value = {
    politicians,
    setPoliticians,
    selectedPolitician,
    setSelectedPolitician,
  };

  return (
    <SelectedPoliticianContext.Provider value={value}>
      {children}
    </SelectedPoliticianContext.Provider>
  );
};

export function useSelectedPoliticianContext() {
  const {
    politicians,
    setPoliticians,
    selectedPolitician,
    setSelectedPolitician,
  } = useContext(SelectedPoliticianContext);

  return {
    politicians,
    setPoliticians,
    selectedPolitician,
    setSelectedPolitician,
  };
}
