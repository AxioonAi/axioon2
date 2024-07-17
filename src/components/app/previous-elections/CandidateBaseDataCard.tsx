"use client";
import { EllipsisVertical } from "lucide-react";
import Image from "next/image";
import { BaseCard } from "@/components/global/BaseCard/BaseCard";
import { BaseCardHeader } from "@/components/global/BaseCard/BaseCardHeader";

interface CandidateBaseDataCardProps {
  CandidateBaseDataCardData: {
    PersonalData: {
      fullName: string;
      gender: string;
      relationshipStatus: string;
      schooling: string;
      profession: string;
      birthDate: Date;
      nationality: string;
      race: string;
      email: string;
    };
    ElectoralData: {
      electionName: string;
      electionNumber: number;
      electionType: string;
      electionRole: string;
      electionResult: boolean;
      electionCoalition: {
        name: string;
        length: number;
      };
      electionPlace: {
        city: string;
        state: string;
      };
      electionParty: {
        number: number;
        name: string;
      };
      url: string;
    };
    financialData: {
      electionSpend: number;
      firstRoundSpend: number;
      secondRoundSpend: number;
      declaredValue: number;
    };
  };
}

export function CandidateBaseDataCard({
  CandidateBaseDataCardData,
}: CandidateBaseDataCardProps) {
  const handleRedirect = (url: string) => {
    if (confirm("Redirecionar para o link?")) {
      return window.open(url, "_blank");
    }
  };

  return (
    <BaseCard className="p-0">
      <BaseCardHeader
        title="Perfil Eleitoral do Candidato"
        children={
          <div className="flex h-8 w-8 items-center justify-center rounded-lg bg-zinc-100 text-zinc-700">
            <EllipsisVertical size={14} />
          </div>
        }
      />
      <div className="flex w-full flex-col items-center justify-between gap-2 p-4 text-[10px] lg:flex-row xl:gap-16 xl:px-8 xl:text-xs 2xl:text-sm 3xl:text-base">
        <div className="flex gap-1">
          <Image
            src="/Photos/avatar1.png"
            alt=""
            width={100}
            height={100}
            className="h-10 w-10 xl:h-14 xl:w-14"
          />
          <div className="flex flex-col gap-1 xl:max-w-[30rem]">
            <div className="grid grid-flow-col grid-cols-2 grid-rows-4 gap-1 xl:grid-cols-3 xl:grid-rows-3">
              <div className="col-span-1 row-span-1 flex flex-col">
                <span className="text-zinc-500">Nome Completo</span>
                <span className="font-semibold">
                  {CandidateBaseDataCardData.PersonalData.fullName}
                </span>
              </div>
              <div className="col-span-1 row-span-1 flex flex-col">
                <span className="text-zinc-500">Gênero</span>
                <span className="font-semibold">
                  {CandidateBaseDataCardData.PersonalData.gender}
                </span>
              </div>
              <div className="col-span-1 row-span-1 flex flex-col">
                <span className="text-zinc-500">Estado Civil</span>
                <span className="font-semibold">
                  {CandidateBaseDataCardData.PersonalData.relationshipStatus}
                </span>
              </div>
              <div className="col-span-1 row-span-1 flex flex-col">
                <span className="text-zinc-500">Nível de Instrução</span>
                <span className="font-semibold">
                  {CandidateBaseDataCardData.PersonalData.schooling}
                </span>
              </div>
              <div className="col-span-1 row-span-1 flex flex-col">
                <span className="text-zinc-500">Ocupação</span>
                <span className="font-semibold">
                  {CandidateBaseDataCardData.PersonalData.profession}
                </span>
              </div>
              <div className="col-span-1 row-span-1 flex flex-col">
                <span className="text-zinc-500">Data de Nascimento</span>
                <span className="font-semibold">
                  {new Date(
                    CandidateBaseDataCardData.PersonalData.birthDate,
                  ).toLocaleDateString("pt-BR")}
                </span>
              </div>
              <div className="col-span-1 row-span-1 flex flex-col">
                <span className="text-zinc-500">Nacionalidade</span>
                <span className="font-semibold">
                  {CandidateBaseDataCardData.PersonalData.nationality}
                </span>
              </div>
              <div className="col-span-1 row-span-1 flex flex-col">
                <span className="text-zinc-500">Cor/Raça</span>
                <span className="font-semibold">
                  {CandidateBaseDataCardData.PersonalData.race}
                </span>
              </div>
            </div>
            <div className="col-span-2 row-span-1 flex flex-col lg:col-span-1 lg:row-span-1">
              <span className="text-zinc-500">Email</span>
              <span className="font-semibold">
                {CandidateBaseDataCardData.PersonalData.email}
              </span>
            </div>
          </div>
        </div>
        <div className="h-full w-px bg-zinc-200 shadow-md" />

        <div className="grid grid-cols-2 grid-rows-4 gap-1 xl:grid-flow-col xl:grid-cols-3 xl:grid-rows-4">
          <div className="col-span-1 row-span-1 flex flex-col">
            <span className="text-zinc-500">Nome de Urna</span>
            <span className="font-semibold">
              {CandidateBaseDataCardData.ElectoralData.electionName}
            </span>
          </div>
          <div className="col-span-1 row-span-1 flex flex-col">
            <span className="text-zinc-500">Número de Urna</span>
            <span className="font-semibold">
              {CandidateBaseDataCardData.ElectoralData.electionNumber}
            </span>
          </div>
          <div className="col-span-1 row-span-1 flex flex-col">
            <span className="text-zinc-500">Tipo de Eleição</span>
            <span className="font-semibold">
              {CandidateBaseDataCardData.ElectoralData.electionType}
            </span>
          </div>
          <div className="col-span-1 row-span-1 flex flex-col">
            <span className="text-zinc-500">Cargo Concorrido</span>
            <span className="font-semibold">
              {CandidateBaseDataCardData.ElectoralData.electionRole}
            </span>
          </div>
          <div className="col-span-1 row-span-1 flex flex-col">
            <span className="text-zinc-500">Foi Eleito</span>
            <span className="font-semibold">
              {CandidateBaseDataCardData.ElectoralData.electionResult
                ? "Sim"
                : "Não"}
            </span>
          </div>
          <div className="col-span-1 row-span-1 flex flex-col">
            <span className="text-zinc-500">Coligação</span>
            <span className="font-semibold">
              {CandidateBaseDataCardData.ElectoralData.electionCoalition.name}
            </span>
          </div>
          <div className="col-span-1 row-span-1 flex flex-col">
            <span className="text-zinc-500">Composição da Coligação</span>
            <span className="font-semibold">
              {CandidateBaseDataCardData.ElectoralData.electionCoalition.length}
            </span>
          </div>
          <div className="col-span-1 row-span-1 flex flex-col">
            <span className="text-zinc-500">Local de Candidatura</span>
            <span className="font-semibold">
              {CandidateBaseDataCardData.ElectoralData.electionPlace.city} -
              {CandidateBaseDataCardData.ElectoralData.electionPlace.state}
            </span>
          </div>
          <div className="col-span-1 row-span-1 flex flex-col lg:row-start-2">
            <span className="text-zinc-500">Número do Partido</span>
            <span className="font-semibold">
              {CandidateBaseDataCardData.ElectoralData.electionParty.number}
            </span>
          </div>
          <div className="col-span-1 row-span-1 flex flex-col">
            <span className="text-zinc-500">Partido</span>
            <span className="font-semibold">
              {CandidateBaseDataCardData.ElectoralData.electionParty.name}
            </span>
          </div>
          <div className="col-span-1 row-span-1 flex flex-col">
            <button
              onClick={() => {
                handleRedirect(CandidateBaseDataCardData.ElectoralData.url);
              }}
              className="flex w-max items-center gap-2 rounded bg-sky-600 px-1 py-0.5 text-white xl:px-2 xl:py-1"
            >
              <span>Ver Detalhes</span>
              <Image
                src="/Icons/info.svg"
                alt=""
                width={50}
                height={50}
                className="h-4 w-4 xl:h-6 xl:w-6"
              />
            </button>
          </div>
        </div>
        <div className="h-full w-px bg-zinc-200 shadow-md" />
        <div className="grid grid-flow-col grid-cols-1 grid-rows-4 justify-items-center gap-1 lg:justify-items-start">
          <div className="col-span-1 row-span-1 flex flex-col">
            <span className="text-zinc-500">Valor gasto em Campanha</span>
            <span className="font-semibold">
              {CandidateBaseDataCardData.financialData.electionSpend.toLocaleString(
                "pt-BR",
                { style: "currency", currency: "BRL" },
              )}
            </span>
          </div>
          <div className="col-span-1 row-span-1 flex flex-col">
            <span className="text-zinc-500">Valor gasto em Primeiro Turno</span>
            <span className="font-semibold">
              {CandidateBaseDataCardData.financialData.firstRoundSpend.toLocaleString(
                "pt-BR",
                { style: "currency", currency: "BRL" },
              )}
            </span>
          </div>
          <div className="col-span-1 row-span-1 flex flex-col">
            <span className="text-zinc-500">Valor gasto em Segundo Turno</span>
            <span className="font-semibold">
              {CandidateBaseDataCardData.financialData.secondRoundSpend.toLocaleString(
                "pt-BR",
                { style: "currency", currency: "BRL" },
              )}
            </span>
          </div>
          <div className="col-span-1 row-span-1 flex flex-col">
            <span className="text-zinc-500">
              Valor total de Bens Declarados
            </span>
            <span className="font-semibold">
              {CandidateBaseDataCardData.financialData.declaredValue.toLocaleString(
                "pt-BR",
                { style: "currency", currency: "BRL" },
              )}
            </span>
          </div>
        </div>
      </div>
    </BaseCard>
  );
}
