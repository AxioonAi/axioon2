"use client";

import { twMerge } from "tailwind-merge";
import Image from "next/image";
import { useSidebarContext } from "@/context/sidebarStatus";

export function Sidebar() {
  const { isOpen } = useSidebarContext();

  return (
    <div
      className={twMerge(
        "left-0 top-0 z-[1000] flex min-h-full w-1/2 flex-col gap-8 border-r border-r-gray-800 bg-black px-4 pb-10 pt-4 lg:w-64",
        `${isOpen ? "max-lg:fixed lg:block" : "hidden"}`,
      )}
    >
      <Image
        src="/Logos/logo.svg"
        alt="Logo"
        width={250}
        height={80}
        className="w-full"
      />
    </div>
  );
}
