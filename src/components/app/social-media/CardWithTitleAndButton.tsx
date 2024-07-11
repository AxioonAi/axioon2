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
          <h1 className="text-xl font-bold">{title}</h1>
        </div>
        <div className="flex flex-row items-center gap-4">
          <button className="rounded-md bg-sky-600 px-5 py-2 text-sm text-white transition-transform hover:scale-105 hover:bg-sky-700">
            {buttonText}
          </button>
          {hasTwoButtons && (
            <button className="flex items-center gap-2 rounded-md bg-green-700 px-2 py-2 text-sm text-white transition-transform hover:scale-105 hover:bg-green-800">
              {secondButtonText}
              <PlusCircle size={20} />
            </button>
          )}
        </div>
      </div>
    </div>
  );
}
