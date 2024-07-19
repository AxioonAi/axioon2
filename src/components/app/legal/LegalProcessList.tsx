"use client";
import Image from "next/image";
import { useEffect, useRef, useState } from "react";
import autoAnimate from "@formkit/auto-animate";
import { CircleCheck } from "lucide-react";
import { BaseCard } from "../../global/BaseCard/BaseCard";
import { BaseCardFooter } from "../../global/BaseCard/BaseCardFooter";
import { BaseCardHeader } from "../../global/BaseCard/BaseCardHeader";

interface LegalProcessProps {
  LegalProcessData: {
    title: string;
    subtitle: string;
    startDate: Date;
    endDate: Date;
    data: {
      activePole: string;
      passivePole: string;
      url: string;
      degree: string;
      class: string;
      subject: string;
      value: number;
      system: string;
      area: string;
      justiceSecret: boolean;
    };
  }[];
}

export function LegalProcessList({ LegalProcessData }: LegalProcessProps) {
  const [showMore, setShowMore] = useState<number | null>();
  const parent = useRef(null);

  const reveal = (index: number) => {
    if (showMore === index) {
      setShowMore(null);
    } else {
      setShowMore(index);
    }
  };

  useEffect(() => {
    parent.current && autoAnimate(parent.current);
  }, [parent]);

  return (
    <BaseCard className="p-0">
      <BaseCardHeader title="Lista de Protestos" />
      <div className="mb-12 flex h-[50vh] w-full flex-col justify-around gap-4 overflow-y-scroll p-4 pb-10 text-[10px] lg:h-full xl:text-xs 2xl:text-sm 3xl:text-base">
        {LegalProcessData.map((item, index) => (
          <div
            ref={parent}
            key={index}
            className="flex w-[675px] gap-2 rounded-md bg-zinc-50 p-2 shadow-md md:w-full lg:p-12"
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
                <span className="font-semibold">{item.title}</span>
                <div className="flex w-max items-center gap-1 rounded-md border border-zinc-950 bg-green-600 px-2 py-1 text-white">
                  <CircleCheck size={14} />
                  Processo Trânsito Ativo
                </div>
              </div>
              <span>{item.subtitle}</span>
              <div className="flex w-full items-center justify-between border-b border-b-zinc-200 pb-4 italic text-zinc-500">
                <div className="flex items-center gap-10">
                  <span>
                    {new Date(item.startDate).toLocaleDateString("pt-BR")}
                  </span>
                  <span>
                    {new Date(item.endDate).toLocaleDateString("pt-BR")}
                  </span>
                </div>
                <button
                  onClick={() => reveal(index)}
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
                        {item.data.activePole}
                      </span>
                    </div>
                    <div className="flex flex-col">
                      <span className="text-zinc-500">Polo Passivo</span>
                      <span className="font-semibold">
                        {item.data.passivePole}
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
                      <span className="font-semibold">{item.data.degree}</span>
                    </div>
                    <div className="flex flex-col">
                      <span className="text-zinc-500">Classe</span>
                      <span className="font-semibold">{item.data.class}</span>
                    </div>
                    <div className="flex flex-col">
                      <span className="text-zinc-500">Assunto</span>
                      <span className="font-semibold">{item.data.subject}</span>
                    </div>
                  </div>
                  <div className="col-span-2 flex flex-col gap-2">
                    <div className="flex flex-col">
                      <span className="text-zinc-500">Valor de Causa</span>
                      <span className="font-semibold">
                        {item.data.value.toLocaleString("pt-BR", {
                          style: "currency",
                          currency: "BRL",
                        })}
                      </span>
                    </div>
                    <div className="flex flex-col">
                      <span className="text-zinc-500">Sistema</span>
                      <span className="font-semibold">{item.data.system}</span>
                    </div>
                    <div className="flex flex-col">
                      <span className="text-zinc-500">Área</span>
                      <span className="font-semibold">{item.data.area}</span>
                    </div>
                  </div>
                  <div className="col-span-2 flex flex-col gap-2">
                    <div className="flex flex-col">
                      <span className="text-zinc-500">Segredo de Justiça</span>
                      <span className="font-semibold">
                        {item.data.justiceSecret ? "Sim" : "Não"}
                      </span>
                    </div>
                  </div>
                </div>
              )}
            </div>
          </div>
        ))}
      </div>
      <BaseCardFooter />
    </BaseCard>
  );
}
