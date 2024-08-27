"use client";

import { twMerge } from "tailwind-merge";
import Image from "next/image";
import { useEffect, useRef, useState } from "react";
import autoAnimate from "@formkit/auto-animate";
import { ChevronDown, ChevronRight } from "lucide-react";
import { usePathname, useRouter } from "next/navigation";
import * as Popover from "@radix-ui/react-popover";
import { useSidebarContext } from "@/context/sidebarStatus";
import { useOffsetContext } from "@/context/test";
import { useSelectedPoliticianContext } from "@/context/SelectedPolitician";

export function Sidebar() {
  const { isOpen, setIsOpen } = useSidebarContext();
  const { politicians, selectedPolitician, setSelectedPolitician } =
    useSelectedPoliticianContext();
  const [openAccordion, setOpenAccordion] = useState("");
  const [selectedSection, setSelectedSection] = useState("");
  const parent = useRef(null);
  const { elementName } = useOffsetContext();
  const pathname = usePathname();
  const router = useRouter();

  // Lógica para colocar highlight na subdivisão específica
  useEffect(() => {
    if (pathname === "/") {
      if (elementName === "Publicações") {
        setSelectedSection("Publicações");
      } else {
        setSelectedSection("");
      }
    }
    if (pathname === "/mentions") {
      if (elementName === "Publicações") {
        setSelectedSection("Publicações");
      } else if (elementName === "keywords") {
        setSelectedSection("Palavras-chave");
      } else if (elementName === "authors") {
        setSelectedSection("Autores");
      } else {
        setSelectedSection("");
      }
    }
    // if (elementName === "Publicações" && pathname === "/") {
    //   setSelectedSection("Publicações");
    // } else {
    //   setSelectedSection("");
    // }
  }, [elementName]);

  useEffect(() => {
    setOpenAccordion(pathname);
  }, [pathname]);

  useEffect(() => {
    parent.current && autoAnimate(parent.current);
  }, [parent]);

  const handleClick = (page: string) => {
    if (openAccordion === page) {
      return setOpenAccordion("");
    } else {
      router.push(page);
      return setOpenAccordion(page);
    }
  };

  return (
    <>
      <div
        className={twMerge(
          "left-0 top-0 z-[1000] flex min-h-full w-2/3 flex-col gap-8 border-r border-r-gray-800 bg-black px-4 pb-10 pt-4 transition duration-300 lg:w-64",
          "lg:fixed",
          isOpen ? "max-lg:fixed" : "max-lg:hidden",
        )}
      >
        <Image
          src="/Logos/logo.svg"
          alt="Logo"
          width={250}
          height={80}
          className="mx-auto w-2/3 lg:w-full"
        />
        <div className="flex h-full w-full flex-col gap-4 p-2 text-xs lg:text-sm 2xl:text-base">
          <Popover.Root>
            <Popover.Trigger className="flex h-10 w-full rounded bg-sky-900/50">
              <div className="flex h-full w-[85%] items-center justify-between gap-2 border-r-2 border-r-black px-2 text-white">
                <Image
                  src="/Icons/user.svg"
                  alt=""
                  width={100}
                  height={100}
                  className="h-5 w-5"
                />
                <span className="w-full truncate">
                  {selectedPolitician?.name}
                </span>
                <ChevronDown />
              </div>
              <div className="flex h-full w-[15%] items-center justify-center">
                <Image
                  src="/Icons/settingWhite.svg"
                  alt=""
                  width={100}
                  height={100}
                  className="h-5 w-5"
                />
              </div>
            </Popover.Trigger>
            <Popover.Content
              className="z-50 flex max-h-96 w-52 flex-col items-center justify-between overflow-y-scroll rounded bg-white text-center text-sm font-semibold shadow"
              sideOffset={5}
              align="start"
            >
              {politicians.map((politician, index) => (
                <button
                  onClick={() => setSelectedPolitician(politician)}
                  key={index}
                  className={twMerge(
                    "w-full border-y border-y-gray-200 px-2 py-1",
                    politician.name === selectedPolitician?.name &&
                      "bg-sky-900/20",
                  )}
                >
                  <span>{politician.name}</span>
                </button>
              ))}
            </Popover.Content>
          </Popover.Root>
          <div className="flex flex-col gap-4" ref={parent}>
            <>
              <button
                className={twMerge(
                  "flex items-center justify-between rounded p-2 text-white",
                  pathname === "/" && "bg-zinc-400/15",
                )}
                onClick={() => handleClick("/")}
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
                {openAccordion === "/" ? (
                  <ChevronDown size={18} className="stroke-[3]" />
                ) : (
                  <ChevronRight size={18} className="stroke-[3]" />
                )}
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
                className={twMerge(
                  "flex items-center justify-between rounded p-2 text-white",
                  pathname === "/mentions" && "bg-zinc-400/15",
                )}
                onClick={() => handleClick("/mentions")}
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
                {openAccordion === "/mentions" ? (
                  <ChevronDown size={18} className="stroke-[3]" />
                ) : (
                  <ChevronRight size={18} className="stroke-[3]" />
                )}
              </button>
              {openAccordion === "/mentions" && (
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
                        "h-1.5 w-1.5 rounded-full border transition duration-300",
                        selectedSection === "Autores"
                          ? "border-white bg-white"
                          : "border-zinc-500 bg-transparent",
                      )}
                    />
                    <span
                      className={twMerge(
                        "transition duration-300",
                        selectedSection === "Autores"
                          ? "font-semibold text-white"
                          : "text-zinc-500",
                      )}
                    >
                      Autores e Fontes
                    </span>
                  </div>
                  <div className="flex w-full items-center gap-2">
                    <div
                      className={twMerge(
                        "h-1.5 w-1.5 rounded-full border transition duration-300",
                        selectedSection === "Palavras-chave"
                          ? "border-white bg-white"
                          : "border-zinc-500 bg-transparent",
                      )}
                    />
                    <span
                      className={twMerge(
                        "transition duration-300",
                        selectedSection === "Palavras-chave"
                          ? "font-semibold text-white"
                          : "text-zinc-500",
                      )}
                    >
                      Palavras Chave
                    </span>
                  </div>
                  <div className="flex w-full items-center gap-2">
                    <div
                      className={twMerge(
                        "h-1.5 w-1.5 rounded-full border transition duration-300",
                        selectedSection === "Publicações"
                          ? "border-white bg-white"
                          : "border-zinc-500 bg-transparent",
                      )}
                    />
                    <span
                      className={twMerge(
                        "transition duration-300",
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
                onClick={() => handleClick("comparator")}
                className="flex items-center justify-between rounded p-2 text-white"
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
              {openAccordion === "/comparator" && (
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
                onClick={() => handleClick("legal")}
                className="flex items-center justify-between rounded p-2 text-white"
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
              {openAccordion === "/legal" && (
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
            <button
              onClick={() => router.push("/ads")}
              className={twMerge(
                "flex items-center gap-4 rounded p-2 text-white",
                pathname === "/ads" && "bg-zinc-400/15",
              )}
            >
              <Image
                src="/Icons/ai.svg"
                alt=""
                width={50}
                height={50}
                className="h-5 w-5"
              />
              Anúncios Meta
            </button>
            <button
              onClick={() => router.push("/ai")}
              className={twMerge(
                "flex items-center gap-4 rounded p-2 text-white",
                pathname === "/ai" && "bg-zinc-400/15",
              )}
            >
              <Image
                src="/Icons/ai.svg"
                alt=""
                width={50}
                height={50}
                className="h-5 w-5"
              />
              Axioon AI
            </button>
            <button
              onClick={() => router.push("/parameters")}
              className={twMerge(
                "flex items-center gap-4 rounded p-2 text-white",
                pathname === "/parameters" && "bg-zinc-400/15",
              )}
            >
              <Image
                src="/Icons/options.svg"
                alt=""
                width={50}
                height={50}
                className="h-5 w-5"
              />
              Parâmetros
            </button>
          </div>
        </div>
      </div>
      <div
        onClick={() => setIsOpen(false)}
        className={twMerge(
          "fixed right-0 top-0 z-[1000] h-full w-1/3 bg-black/50",
          isOpen ? "block" : "hidden",
        )}
      />
    </>
  );
}
