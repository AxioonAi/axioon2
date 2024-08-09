"use client";
import { useEffect, useRef, useState } from "react";
import { twMerge } from "tailwind-merge";
import { BaseComparativeCard } from "./BaseComparativeCard";
import { BaseComparativeCardData } from "@/components/data/ComparatorData";
import { BaseCard } from "@/components/global/BaseCard/BaseCard";

export function ComparatorStickyCards() {
  const [isVisible, setIsVisible] = useState(false);
  const elementRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        setIsVisible(entry.isIntersecting);
      },
      {
        root: null, // Use the viewport as the root
        rootMargin: "0px",
        threshold: 0.9, // Adjust this threshold as needed
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
  }, []);

  return (
    <div
      ref={elementRef}
      className="z-50 flex flex-col gap-4 lg:col-span-12 lg:grid lg:grid-cols-12"
    >
      <div
        className={twMerge("h-48 lg:col-span-12", isVisible ? "hidden" : "")}
      />
      <div
        className={twMerge(
          "flex flex-col gap-4 lg:col-span-12 lg:grid lg:grid-cols-12",
          isVisible ? "" : "fixed top-4 pr-8",
        )}
      >
        <div className="lg:col-span-3">
          <BaseComparativeCard
            BaseComparativeCardData={BaseComparativeCardData}
          />
        </div>
        <div className="lg:col-span-6">
          <BaseCard>1</BaseCard>
        </div>
        <div className="lg:col-span-3">
          <BaseComparativeCard
            BaseComparativeCardData={BaseComparativeCardData}
          />
        </div>
      </div>
    </div>
  );
}
