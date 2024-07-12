"use client"; // Certifique-se de que este componente é um Client Component

import { PlusCircle } from "lucide-react";
import React from "react";

interface CardWithTitleAndButtonProps {
  title: string;
  buttonText: string;
  hasTwoButtons?: boolean;
  secondButtonText?: string;
}

export function CardWithTitleAndButton({
  title,
  buttonText,
  hasTwoButtons,
  secondButtonText,
}: CardWithTitleAndButtonProps) {
  return (
    <div className="rounded-md bg-white p-5">
      <div className="flex items-center justify-between">
        <div className="flex flex-row items-center gap-1">
          <div className="h-8 w-2 rounded-full bg-sky-900" />
          <h1 className="text-md font-bold md:text-xl">{title}</h1>
        </div>
        <div className="flex flex-col items-center gap-1 md:flex-row md:gap-4">
          <button className="whitespace-nowrap rounded-md bg-sky-600 px-2 py-1 text-[10px] text-white transition-transform hover:scale-105 hover:bg-sky-700 md:py-2 md:text-sm">
            {buttonText}
          </button>
          {hasTwoButtons && (
            <button className="flex items-center gap-2 whitespace-nowrap rounded-md bg-green-700 px-2 py-1 text-[10px] text-white transition-transform hover:scale-105 hover:bg-green-800 md:py-2 md:text-sm">
              {secondButtonText}
              <PlusCircle size={20} />
            </button>
          )}
        </div>
      </div>
    </div>
  );
}
