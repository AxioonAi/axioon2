"use client";

import { useCookies } from "next-client-cookies";
import { createContext, useContext, useEffect, useState } from "react";

interface mainContextProps {
  isOpen: boolean | null;
  setIsOpen: React.Dispatch<React.SetStateAction<boolean | null>>;
}

const mainContext = createContext({} as mainContextProps);

interface ContextProps {
  children: React.ReactNode;
}

export const SidebarContextProvider = ({ children }: ContextProps) => {
  const [isOpen, setIsOpen] = useState<boolean | null>(null);
  const cookies = useCookies();

  const value = { isOpen, setIsOpen };

  useEffect(() => {
    const isOpenValue = cookies.get("isOpen");
    if (isOpenValue) {
      setIsOpen(JSON.parse(isOpenValue));
    }
  }, []);

  useEffect(() => {
    if (isOpen !== null) {
      cookies.set("isOpen", JSON.stringify(isOpen));
    }
  }, [isOpen]);

  return <mainContext.Provider value={value}>{children}</mainContext.Provider>;
};

export function useSidebarContext() {
  const { isOpen, setIsOpen } = useContext(mainContext);

  return { isOpen, setIsOpen };
}
