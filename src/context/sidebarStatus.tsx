"use client";

import { createContext, useContext, useEffect, useState } from "react";

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

  useEffect(() => {
    // Define a função que irá verificar o tamanho da tela
    const checkScreenSize = () => {
      if (window.innerWidth > 750) {
        setIsOpen(true);
      }
    };

    // Verifica o tamanho da tela ao montar o componente
    checkScreenSize();

    // Adiciona o event listener para redimensionamento da janela
    window.addEventListener("resize", checkScreenSize);

    // Remove o event listener ao desmontar o componente
    return () => {
      window.removeEventListener("resize", checkScreenSize);
    };
  }, []);

  const value = { isOpen, setIsOpen };

  return <mainContext.Provider value={value}>{children}</mainContext.Provider>;
};

export function useSidebarContext() {
  const { isOpen, setIsOpen } = useContext(mainContext);

  return { isOpen, setIsOpen };
}
