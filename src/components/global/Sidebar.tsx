"use client";

import { twMerge } from "tailwind-merge";
import Image from "next/image";
import { useEffect, useRef, useState } from "react";
import autoAnimate from "@formkit/auto-animate";
import { ChevronDown, PanelLeftClose } from "lucide-react";
import { usePathname } from "next/navigation";
import { useSidebarContext } from "@/context/sidebarStatus";
import { useOffsetContext } from "@/context/test";

export function Sidebar() {
  const { isOpen, setIsOpen } = useSidebarContext();
  const [openAccordion, setOpenAccordion] = useState("");
  const [selectedSection, setSelectedSection] = useState("");
  const parent = useRef(null);
  const { elementName } = useOffsetContext();
  const pathname = usePathname();

  useEffect(() => {
    if (elementName === "Publicações" && pathname === "/") {
      setSelectedSection("Publicações");
    } else {
      setSelectedSection("");
    }
  }, [elementName]);

  useEffect(() => {
    setOpenAccordion(pathname);
  }, [pathname]);

  useEffect(() => {
    parent.current && autoAnimate(parent.current);
  }, [parent]);

  const reveal = (page: string) => {
    if (openAccordion === page) {
      setOpenAccordion("");
    } else {
      setOpenAccordion(page);
    }
  };

  return (
    <div
      className={twMerge(
        "left-0 top-0 z-[1000] flex min-h-full flex-col gap-8 border-r border-r-gray-800 bg-black px-4 pb-10 pt-4 transition-transform md:w-64",
        `${isOpen ? "fixed" : "hidden"}`,
      )}
    >
      <Image
        src="/Logos/logo.svg"
        alt="Logo"
        width={250}
        height={80}
        className="w-full"
      />
      <div className="flex h-full w-full flex-col gap-4 p-2">
        <div className="flex flex-col gap-4" ref={parent}>
          <>
            <button
              className="flex items-center justify-between rounded bg-zinc-400/15 p-2 text-white"
              onClick={() => reveal("/")}
            >
              <div className="flex items-center gap-4">
                <Image
                  src="/Icons/socialMedia.svg"
                  alt=""
                  width={50}
                  height={50}
                  className="h-5 w-5"
                />
                Mídias Sociais
              </div>
              <ChevronDown size={18} className="stroke-[3]" />
            </button>
            {openAccordion === "/" && (
              <div className="flex flex-col gap-2">
                <div className="flex w-full items-center gap-2">
                  <div
                    className={twMerge(
                      "h-1.5 w-1.5 rounded-full border transition duration-300",
                      selectedSection === ""
                        ? "border-white bg-white"
                        : "border-zinc-500 bg-transparent",
                    )}
                  />
                  <span
                    className={twMerge(
                      "transition duration-300",
                      selectedSection === ""
                        ? "font-semibold text-white"
                        : "text-zinc-500",
                    )}
                  >
                    Estatísticas Gerais
                  </span>
                </div>
                <div className="flex w-full items-center gap-2">
                  <div
                    className={twMerge(
                      "h-1.5 w-1.5 rounded-full border",
                      selectedSection === "Publicações"
                        ? "border-white bg-white"
                        : "border-zinc-500 bg-transparent",
                    )}
                  />
                  <span
                    className={twMerge(
                      selectedSection === "Publicações"
                        ? "font-semibold text-white"
                        : "text-zinc-500",
                    )}
                  >
                    Publicações
                  </span>
                </div>
              </div>
            )}
          </>
          <>
            <button
              className="flex items-center justify-between rounded bg-zinc-400/15 p-2 text-white"
              onClick={() => reveal("mentions")}
            >
              <div className="flex items-center gap-4">
                <Image
                  src="/Icons/at.svg"
                  alt=""
                  width={50}
                  height={50}
                  className="h-5 w-5"
                />
                Menções
              </div>
              <ChevronDown size={18} className="stroke-[3]" />
            </button>
            {openAccordion === "mentions" && (
              <div className="flex flex-col gap-2">
                <div className="flex w-full items-center gap-2">
                  <div className="h-1.5 w-1.5 rounded-full border border-zinc-500 bg-transparent" />
                  <span className="text-zinc-500">Estatísticas Gerais</span>
                </div>
                <div className="flex w-full items-center gap-2">
                  <div className="h-1.5 w-1.5 rounded-full border border-zinc-500 bg-transparent" />
                  <span className="text-zinc-500">Autores e Fontes</span>
                </div>
                <div className="flex w-full items-center gap-2">
                  <div className="h-1.5 w-1.5 rounded-full border border-zinc-500 bg-transparent" />
                  <span className="text-zinc-500">Publicações</span>
                </div>
              </div>
            )}
          </>
          <>
            <button
              className="flex items-center justify-between rounded bg-zinc-400/15 p-2 text-white"
              onClick={() => reveal("comparative")}
            >
              <div className="flex items-center gap-4">
                <Image
                  src="/Icons/at.svg"
                  alt=""
                  width={50}
                  height={50}
                  className="h-5 w-5"
                />
                Comparador
              </div>
              <ChevronDown size={18} className="stroke-[3]" />
            </button>
            {openAccordion === "comparative" && (
              <div className="flex flex-col gap-2">
                <div className="flex w-full items-center gap-2">
                  <div className="h-1.5 w-1.5 rounded-full border border-zinc-500 bg-transparent" />
                  <span className="text-zinc-500">Estatísticas Gerais</span>
                </div>
                <div className="flex w-full items-center gap-2">
                  <div className="h-1.5 w-1.5 rounded-full border border-zinc-500 bg-transparent" />
                  <span className="text-zinc-500">Menções</span>
                </div>
                <div className="flex w-full items-center gap-2">
                  <div className="h-1.5 w-1.5 rounded-full border border-zinc-500 bg-transparent" />
                  <span className="text-zinc-500">Publicações</span>
                </div>
              </div>
            )}
          </>
          <>
            <button
              className="flex items-center justify-between rounded bg-zinc-400/15 p-2 text-white"
              onClick={() => reveal("cerberus")}
            >
              <div className="flex items-center gap-4">
                <Image
                  src="/Icons/at.svg"
                  alt=""
                  width={50}
                  height={50}
                  className="h-5 w-5"
                />
                Axioon Cerberus
              </div>
              <ChevronDown size={18} className="stroke-[3]" />
            </button>
            {openAccordion === "cerberus" && (
              <div className="flex flex-col gap-2">
                <div className="flex w-full items-center gap-2">
                  <div className="h-1.5 w-1.5 rounded-full border border-zinc-500 bg-transparent" />
                  <span className="text-zinc-500">Ações Judiciais</span>
                </div>
                <div className="flex w-full items-center gap-2">
                  <div className="h-1.5 w-1.5 rounded-full border border-zinc-500 bg-transparent" />
                  <span className="text-zinc-500">Vínculos</span>
                </div>
                <div className="flex w-full items-center gap-2">
                  <div className="h-1.5 w-1.5 rounded-full border border-zinc-500 bg-transparent" />
                  <span className="text-zinc-500">Eleições Anteriores</span>
                </div>
              </div>
            )}
          </>
          <button className="flex items-center gap-4 rounded bg-zinc-400/15 p-2 text-white">
            <Image
              src="/Icons/ai.svg"
              alt=""
              width={50}
              height={50}
              className="h-5 w-5"
            />
            Axioon AI
          </button>
          <button className="flex items-center gap-4 rounded bg-zinc-400/15 p-2 text-white">
            <Image
              src="/Icons/options.svg"
              alt=""
              width={50}
              height={50}
              className="h-5 w-5"
            />
            Parâmetros
          </button>
          <button
            className="flex h-8 w-14 items-center justify-center rounded bg-zinc-400/15 p-2 text-white md:hidden"
            onClick={() => setIsOpen(false)}
          >
            <PanelLeftClose />
          </button>
        </div>
      </div>
    </div>
  );
}
