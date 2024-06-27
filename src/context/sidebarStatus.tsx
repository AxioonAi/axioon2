"use client";

import { createContext, useContext, useState } from "react";

interface mainContextProps {
  isOpen: boolean;
  setIsOpen: React.Dispatch<React.SetStateAction<boolean>>;
}

const mainContext = createContext({} as mainContextProps);

interface ContextProps {
  children: React.ReactNode;
}

export const SidebarContextProvider = ({ children }: ContextProps) => {
  const [isOpen, setIsOpen] = useState(true);

  const value = { isOpen, setIsOpen };

  return <mainContext.Provider value={value}>{children}</mainContext.Provider>;
};

export function useSidebarContext() {
  const { isOpen, setIsOpen } = useContext(mainContext);

  return { isOpen, setIsOpen };
}
