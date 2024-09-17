"use client";
import { Menu, Settings } from "lucide-react";
import {
  Popover,
  PopoverArrow,
  PopoverContent,
  PopoverTrigger,
} from "@radix-ui/react-popover";
import { useCookies } from "next-client-cookies";
import { useRouter } from "next/navigation";
import { useSidebarContext } from "@/context/sidebarStatus";

export function Header() {
  const { isOpen, setIsOpen } = useSidebarContext();
  const cookies = useCookies();
  const router = useRouter();

  return (
    <div className="flex h-16 w-full items-center justify-between bg-black px-4 text-sm text-white">
      <button
        className={`flex h-8 w-14 items-center ${isOpen ? "hidden lg:flex" : "flex"} justify-center rounded bg-zinc-400/15 p-2 text-white`}
        onClick={() => setIsOpen(!isOpen)}
      >
        <Menu />
      </button>

      <Popover>
        <PopoverTrigger asChild>
          <div className="ml-auto flex items-center gap-2">
            <strong>Jefferson Isac</strong>
            <Settings />
          </div>
        </PopoverTrigger>
        <PopoverContent className="z-[9999999] overflow-hidden rounded-md border bg-white text-black">
          <PopoverArrow className="fill-white" />
          <button
            onClick={() => {
              if (confirm("Tem certeza que deseja sair?")) {
                cookies.remove("axioonToken");
                cookies.remove("axioonRefreshToken");
                router.push("/login");
              }
            }}
            className="px-2 py-1 hover:bg-zinc-100"
          >
            Sair
          </button>
        </PopoverContent>
      </Popover>
    </div>
  );
}
