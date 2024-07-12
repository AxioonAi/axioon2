"use client";
import { useSidebarContext } from "@/context/sidebarStatus";

export function SideBarCloser() {
  const { isOpen, setIsOpen } = useSidebarContext();
  return (
    <button
      onClick={() => setIsOpen(false)}
      className={`inset-0 z-50 flex-1 ${isOpen ? "absolute md:hidden" : "hidden"} bg-black/20 transition-transform`}
    />
  );
}
