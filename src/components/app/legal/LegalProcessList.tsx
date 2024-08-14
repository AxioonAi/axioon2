"use client";
import Image from "next/image";
import { useEffect, useRef, useState } from "react";
import autoAnimate from "@formkit/auto-animate";
import { CircleCheck } from "lucide-react";
import { BaseCard } from "../../global/BaseCard/BaseCard";
import { BaseCardFooter } from "../../global/BaseCard/BaseCardFooter";
import { BaseCardHeader } from "../../global/BaseCard/BaseCardHeader";
import { useLegalDataContext } from "@/context/LegalData";

interface ProcessListProps {
  activePole: string | null;
  area: string | null;
  causeValue: number | null;
  class: string | null;
  court: string | null;
  degree: string | null;
  id: string | null;
  judgingBy: string | null;
  justiceSecret: boolean | null;
  lastUpdate: string | null;
  passivePole: string | null;
  politician_id: string | null;
  startDate: string | null;
  status: string | null;
  subject: string | null;
  system: string | null;
  url: string | null;
}

export function LegalProcessList() {
  const [processList, setProcessList] = useState<ProcessListProps[]>([]);
  const { legalData, isGettingData } = useLegalDataContext();
  const [showMore, setShowMore] = useState<number | null>();
  const parent = useRef(null);

  const reveal = (index: number) => {
    if (showMore === index) {
      setShowMore(null);
    } else {
      setShowMore(index);
    }
  };

  const handleRedirect = (url: string) => {
    if (confirm("Redirecionar para o link?")) {
      return window.open(url, "_blank");
    }
  };

  useEffect(() => {
    parent.current && autoAnimate(parent.current);
  }, [parent]);

  useEffect(() => {
    if (legalData) {
      setProcessList(legalData && legalData.legalData);
    }
  }, [legalData]);

  return (
    <BaseCard className="p-0">
      <BaseCardHeader title="Lista de Protestos" />
      {isGettingData ? (
        <div className="h-full w-full bg-gradient-to-r from-gray-10 via-gray-20 to-gray-10" />
      ) : (
        <div className="mb-12 flex h-[50vh] w-full flex-col justify-around gap-4 overflow-y-scroll p-4 pb-10 text-[10px] lg:h-full xl:text-xs 2xl:text-sm 3xl:text-base">
          {processList.map((item, index) => (
            <div
              ref={parent}
              key={index}
              className="flex w-[675px] gap-2 rounded-md bg-zinc-50 p-2 shadow-md md:w-full lg:px-12 lg:pt-12"
            >
              <Image
                src="/Icons/briefcase.svg"
                width={100}
                height={100}
                alt=""
                className="w-10 self-start"
              />
              <div className="flex w-full flex-col">
                <div className="flex w-full items-center justify-between">
                  <span className="font-semibold">
                    {item.subject ? item.subject : "Não informado"}
                  </span>
                  <div className="flex w-max items-center gap-1 rounded-md border border-zinc-950 bg-green-600 px-2 py-1 text-white">
                    <CircleCheck size={14} />
                    Processo Trânsito Ativo
                  </div>
                </div>
                <span>{item.judgingBy ? item.judgingBy : "Não informado"}</span>
                <div className="flex w-full items-center justify-between border-b border-b-zinc-200 pb-4 italic text-zinc-500">
                  <div className="flex items-center gap-10">
                    <span>
                      {item.startDate
                        ? new Date(item.startDate).toLocaleDateString("pt-BR")
                        : "Não informado"}
                    </span>
                  </div>
                  <button
                    onClick={() => handleRedirect(item.url ? item.url : "")}
                    className="flex w-max items-center gap-2 rounded-md bg-sky-500 px-2 py-1 text-white"
                  >
                    <Image
                      src="/Icons/details.svg"
                      alt=""
                      width={100}
                      height={100}
                      className="w-6"
                    />
                    <span>Ver Detalhes</span>
                  </button>
                </div>

                {showMore === index && (
                  <div
                    className="grid w-full grid-cols-8 justify-items-center gap-4 p-2"
                    key={index}
                  >
                    <div className="col-span-2 flex flex-col gap-2">
                      <div className="flex flex-col">
                        <span className="text-zinc-500">Polo Ativo</span>
                        <span className="font-semibold">
                          {item.activePole ? item.activePole : "Não informado"}
                        </span>
                      </div>
                      <div className="flex flex-col">
                        <span className="text-zinc-500">Polo Passivo</span>
                        <span className="font-semibold">
                          {item.passivePole
                            ? item.passivePole
                            : "Não informado"}
                        </span>
                      </div>
                      <button className="flex w-max items-center gap-1 rounded-md bg-sky-950 px-2 py-1 text-white">
                        <Image
                          src="/Icons/details.svg"
                          alt=""
                          width={100}
                          height={100}
                          className="w-6"
                        />
                        <span>Detalhes de envolvidos</span>
                      </button>
                    </div>
                    <div className="col-span-2 flex flex-col gap-2">
                      <div className="flex flex-col">
                        <span className="text-zinc-500">Grau</span>
                        <span className="font-semibold">
                          {item.degree ? item.degree : "Não informado"}
                        </span>
                      </div>
                      <div className="flex flex-col">
                        <span className="text-zinc-500">Classe</span>
                        <span className="font-semibold">
                          {item.class ? item.class : "Não informado"}
                        </span>
                      </div>
                      <div className="flex flex-col">
                        <span className="text-zinc-500">Assunto</span>
                        <span className="font-semibold">
                          {item.subject ? item.subject : "Não informado"}
                        </span>
                      </div>
                    </div>
                    <div className="col-span-2 flex flex-col gap-2">
                      <div className="flex flex-col">
                        <span className="text-zinc-500">Valor de Causa</span>
                        <span className="font-semibold">
                          {item.causeValue
                            ? item.causeValue.toLocaleString("pt-BR", {
                                style: "currency",
                                currency: "BRL",
                              })
                            : "Não informado"}
                        </span>
                      </div>
                      <div className="flex flex-col">
                        <span className="text-zinc-500">Sistema</span>
                        <span className="font-semibold">
                          {item.system ? item.system : "Não informado"}
                        </span>
                      </div>
                      <div className="flex flex-col">
                        <span className="text-zinc-500">Área</span>
                        <span className="font-semibold">
                          {item.area ? item.area : "Não informado"}
                        </span>
                      </div>
                    </div>
                    <div className="col-span-2 flex flex-col gap-2">
                      <div className="flex flex-col">
                        <span className="text-zinc-500">
                          Segredo de Justiça
                        </span>
                        <span className="font-semibold">
                          {!item.justiceSecret
                            ? "Não informado"
                            : item.justiceSecret
                              ? "Sim"
                              : "Não"}
                        </span>
                      </div>
                    </div>
                  </div>
                )}
                <span
                  onClick={() => reveal(index)}
                  className="mx-auto my-2 cursor-pointer text-gray-500 transition duration-100 hover:text-gray-700 hover:underline"
                >
                  {showMore === index
                    ? "Ver Menos Informações"
                    : "Ver Mais Informações"}
                </span>
              </div>
            </div>
          ))}
        </div>
      )}
      <BaseCardFooter />
    </BaseCard>
  );
}
