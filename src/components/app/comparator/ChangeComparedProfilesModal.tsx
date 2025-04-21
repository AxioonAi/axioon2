"use client";
import { Modal } from "@/components/global/Modal";
import { ScrollArea } from "@/components/global/scroll-area";
import { Politician, useComparatorDataContext } from "@/context/ComparatorData";
import { useSelectedPoliticianContext } from "@/context/SelectedPolitician";
import { cn } from "@/utils/utils";
import { Check, ChevronRight, UserCircle } from "lucide-react";
import Image from "next/image";
import { useState } from "react";

interface ChangeComparedProfilesModalProps {
  show: boolean;
  onHide: () => void;
}

export function ChangeComparedProfilesModal({
  show,
  onHide,
}: ChangeComparedProfilesModalProps) {
  const { politicians } = useSelectedPoliticianContext();
  const {
    activeUserProfileData,
    setActiveUserProfileData,
    passiveUserProfileData,
    setPassiveUserProfileData,
  } = useComparatorDataContext();
  const [currentStep, setCurrentStep] = useState(1);

  const handleNextStep = () => {
    if (currentStep === 1) {
      setCurrentStep(2);
    }
    if (currentStep === 2 && localActiveProfile && localPassiveProfile) {
      setActiveUserProfileData(localActiveProfile);
      setPassiveUserProfileData(localPassiveProfile);
      onHide();
    }
  };

  const [isActiveProfileSelected, setIsActiveProfileSelected] = useState(false);
  const [isPassiveProfileSelected, setIsPassiveProfileSelected] =
    useState(false);
  const [localActiveProfile, setLocalActiveProfile] =
    useState<Politician | null>(null);
  const [localPassiveProfile, setLocalPassiveProfile] =
    useState<Politician | null>(null);

  return (
    <Modal
      show={show}
      onHide={onHide}
      className="h-[85vh] overflow-hidden p-0 lg:w-[80vw]"
    >
      <div className="flex h-full w-full">
        <div className="flex h-full w-1/2 flex-col items-center justify-between p-8">
          <Image
            src="/axionLogo.png"
            alt=""
            width={1000}
            height={250}
            className="h-20 w-max object-contain"
          />
          {currentStep === 1 ? (
            <div className="flex flex-col gap-2">
              <span className="text-xl font-semibold">
                Vamos selecionar os Perfis
              </span>
              <span>
                Aqui você poderá selecionar os Perfis que serão Comparados
              </span>
            </div>
          ) : (
            <div className="flex flex-col gap-2">
              <span>
                Aqui você poderá selecionar os Perfis que serão Comparados
              </span>
              <div className="flex flex-col">
                <div className="flex items-center gap-2">
                  <UserCircle className="h-5" />
                  <span className="text-lg font-semibold">
                    Seleção Perfil 1:
                  </span>
                </div>
                <button
                  onClick={() =>
                    setIsActiveProfileSelected(!isActiveProfileSelected)
                  }
                  className="bg-darkBlueAxion/50 border-darkBlueAxion flex h-10 w-full items-center rounded-lg border pl-4 text-start text-white"
                >
                  <span className="flex-1">{localActiveProfile?.name}</span>
                </button>
                {isActiveProfileSelected && (
                  <ScrollArea className="h-60">
                    {politicians
                      .sort((a, b) => a.name.localeCompare(b.name))
                      .map((user, index) => (
                        <div key={`word-${index}`} className="p-0 shadow-none">
                          <div
                            onClick={() => {
                              setLocalActiveProfile(user);
                              setIsActiveProfileSelected(false);
                            }}
                            className={cn(
                              "text-default-600 flex w-full cursor-pointer items-center justify-between hover:bg-zinc-100",
                              user.id === localActiveProfile?.id &&
                                "bg-zinc-100",
                            )}
                          >
                            {user.name}
                            <Check
                              className={cn("mr-2 h-4 w-4", {
                                hidden: user.id !== localActiveProfile?.id,
                              })}
                            />
                          </div>
                        </div>
                      ))}
                  </ScrollArea>
                )}
              </div>
              {localActiveProfile && (
                <div className="flex flex-col">
                  <div className="flex items-center gap-2">
                    <UserCircle className="h-5" />
                    <span className="text-lg font-semibold">
                      Seleção Perfil 2:
                    </span>
                  </div>
                  <button
                    onClick={() =>
                      setIsPassiveProfileSelected(!isPassiveProfileSelected)
                    }
                    className="bg-darkBlueAxion/50 border-darkBlueAxion flex h-10 w-full items-center rounded-lg border pl-4 text-start text-white"
                  >
                    <span className="flex-1">{localPassiveProfile?.name}</span>
                  </button>
                  {isPassiveProfileSelected && (
                    <ScrollArea className="h-60">
                      {politicians
                        .sort((a, b) => a.name.localeCompare(b.name))
                        .filter((user) => user.id !== localActiveProfile.id)
                        .map((user, index) => (
                          <div
                            key={`word-${index}`}
                            className="p-0 shadow-none"
                          >
                            <div
                              onClick={() => {
                                setLocalPassiveProfile(user);
                                setIsPassiveProfileSelected(false);
                              }}
                              className={cn(
                                "text-default-600 flex w-full cursor-pointer items-center justify-between hover:bg-zinc-100",
                                user.id === localPassiveProfile?.id &&
                                  "bg-zinc-100",
                              )}
                            >
                              {user.name}
                              <Check
                                className={cn("mr-2 h-4 w-4", {
                                  hidden: user.id !== localPassiveProfile?.id,
                                })}
                              />
                            </div>
                          </div>
                        ))}
                    </ScrollArea>
                  )}
                </div>
              )}
            </div>
          )}
          <button
            onClick={handleNextStep}
            className="bg-darkBlueAxion flex items-center gap-4 rounded-lg p-4 text-lg font-semibold text-white"
          >
            <span>Iniciar Comparação</span>
            <ChevronRight />
          </button>
        </div>
        <div className="relative flex h-full w-1/2 flex-col items-center">
          <Image
            src="/changeComparisonBackground.png"
            alt=""
            width={1000}
            height={2500}
            className="h-full w-full object-fill"
          />
        </div>
      </div>
    </Modal>
  );
}
