"use client";
import { Menu, Settings } from "lucide-react";
import { useSidebarContext } from "@/context/sidebarStatus";

export function Header() {
  const { isOpen, setIsOpen } = useSidebarContext();
  return (
    <div className="flex h-16 w-full items-center justify-between bg-black px-4 text-sm text-white">
      <button
        className={`flex h-8 w-14 items-center ${isOpen ? "hidden lg:block" : "block"} justify-center rounded bg-zinc-400/15 p-2 text-white`}
        onClick={() => setIsOpen(!isOpen)}
      >
        <Menu />
      </button>

      <div className="ml-auto flex items-center gap-2">
        <strong>Jefferson Isac</strong>
        <Settings />
      </div>
    </div>
  );
}
