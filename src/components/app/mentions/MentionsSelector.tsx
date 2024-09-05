"use client";
import { twMerge } from "tailwind-merge";
import { BaseCard } from "@/components/global/BaseCard/BaseCard";
import { useMentionsDataContext } from "@/context/MentionsData";

export function MentionsSelector() {
  const { selectedMentionsType, setSelectedMentionsType } =
    useMentionsDataContext();

  return (
    <BaseCard>
      <div className="flex w-full items-center justify-center gap-4 text-xs lg:text-sm xl:text-base 2xl:text-lg">
        <button
          onClick={() => setSelectedMentionsType("personal")}
          className={twMerge(
            "h-10 w-full rounded-md bg-gray-200 font-semibold shadow-sm transition duration-200",
            selectedMentionsType === "personal" ? "bg-sky-900 text-white" : "",
          )}
        >
          Menções Pessoais
        </button>
        <button
          disabled
          onClick={() => setSelectedMentionsType("hashtag")}
          className={twMerge(
            "h-10 w-full rounded-md bg-gray-200 font-semibold shadow-sm transition duration-200",
            selectedMentionsType === "hashtag" ? "bg-sky-900 text-white" : "",
          )}
        >
          Menções Hashtags
        </button>
      </div>
    </BaseCard>
  );
}
