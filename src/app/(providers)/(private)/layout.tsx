"use client";
import { twMerge } from "tailwind-merge";
import { Header } from "@/components/global/Header";
import { useSidebarContext } from "@/context/sidebarStatus";

export default function PrivateLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const { isOpen } = useSidebarContext();
  return (
    <div
      className={twMerge(
        "ml-auto flex min-h-screen w-full flex-col self-end bg-zinc-100",
        isOpen ? "ml-64 max-w-[calc(100%-256px)]" : "w-full",
      )}
    >
      <Header />
      <div className="flex h-full flex-col p-4 md:p-8 lg:p-4 xl:p-8">
        {children}
      </div>
    </div>
  );
}
