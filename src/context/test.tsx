"use client";

import {
  createContext,
  Dispatch,
  SetStateAction,
  useContext,
  useEffect,
  useRef,
  useState,
} from "react";

interface offsetContextProps {
  elementRef: React.RefObject<HTMLDivElement>;
  isVisible: boolean;
  elementName: string;
  setElementName: Dispatch<SetStateAction<string>>;
}

const offsetContext = createContext({} as offsetContextProps);

interface ContextProps {
  children: React.ReactNode;
}

export const OffsetContextProvider = ({ children }: ContextProps) => {
  const [isVisible, setIsVisible] = useState(false);
  const [elementName, setElementName] = useState("");
  const elementRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        setIsVisible(entry.isIntersecting);
      },
      {
        root: null, // Use the viewport as the root
        rootMargin: "0px",
        threshold: 0.1, // Adjust this threshold as needed
      },
    );

    if (elementRef.current) {
      observer.observe(elementRef.current);
    }

    return () => {
      if (elementRef.current) {
        observer.unobserve(elementRef.current);
      }
    };
  }, [elementRef]);

  const value = { elementRef, isVisible, elementName, setElementName };

  return (
    <offsetContext.Provider value={value}>{children}</offsetContext.Provider>
  );
};

export function useOffsetContext() {
  const { elementRef, isVisible, elementName, setElementName } =
    useContext(offsetContext);

  return { elementRef, isVisible, elementName, setElementName };
}
