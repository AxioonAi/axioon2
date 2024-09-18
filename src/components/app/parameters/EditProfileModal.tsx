"use client";
import { useEffect, useState } from "react";
import { useCookies } from "next-client-cookies";
import { Loader2 } from "lucide-react";
import { Politician } from "../home/SwiperPoliticians";
import { Modal } from "@/components/global/Modal";
import { AuthPutAPI, token as Token } from "@/lib/axios";
import { maskCpf } from "@/utils/masks";

interface EditProfileModalProps {
  open: boolean;
  // eslint-disable-next-line no-unused-vars
  setOpen: (open: boolean) => void;
  id: string;
  politicians: Politician[];
  GetPoliticians: () => void;
}

export function EditProfileModal({
  open,
  setOpen,
  id,
  politicians,
  GetPoliticians,
}: EditProfileModalProps) {
  const cookies = useCookies();
  const [isEditing, setIsEditing] = useState(false);
  const [selectedPolitician, setSelectedPolitician] = useState<Politician>({
    campaignNumber: 0,
    city: "",
    cpf: null,
    facebook: null,
    id: "",
    image: "",
    instagram: null,
    name: "",
    politicalGroup: "",
    tiktok: null,
    youtube: null,
  });

  useEffect(() => {
    if (open && politicians.find((p) => p.id === id)) {
      setSelectedPolitician(politicians.find((p) => p.id === id) as Politician);
    }
  }, [open]);

  async function EditPoliticianProfile() {
    setIsEditing(true);
    const token = cookies.get(Token);
    const organized = {
      cpf: selectedPolitician.cpf === "" ? null : selectedPolitician.cpf,
      facebook:
        selectedPolitician.facebook === "" ? null : selectedPolitician.facebook,
      instagram:
        selectedPolitician.instagram === ""
          ? null
          : selectedPolitician.instagram,
      tiktok:
        selectedPolitician.tiktok === "" ? null : selectedPolitician.tiktok,
      youtube:
        selectedPolitician.youtube === "" ? null : selectedPolitician.youtube,
    };
    const connect = await AuthPutAPI(`/profile/${id}`, organized, token);
    if (connect.status === 200) {
      alert("Editado com sucesso");
      GetPoliticians();
      setOpen(false);
      return setIsEditing(false);
    }
    alert("Erro ao editar perfil");
    return setIsEditing(false);
  }

  return (
    <Modal show={open} onHide={() => setOpen(false)}>
      <div className="flex w-full flex-col gap-2 p-2">
        <span className="text-lg font-semibold">Editar Perfil</span>
        <div className="flex w-full flex-col gap-2 p-2">
          <div className="m-auto flex w-[48%] flex-col">
            <label className="text-sm" htmlFor="cpf">
              Cpf:
            </label>
            <input
              className="rounded border border-gray-40 p-2 transition duration-300"
              type="text"
              id="cpf"
              value={selectedPolitician?.cpf || ""}
              onChange={(e) =>
                setSelectedPolitician({
                  ...selectedPolitician,
                  cpf: maskCpf(e.target.value),
                })
              }
            />
          </div>
          <div className="flex flex-wrap gap-2">
            <div className="flex w-[48%] flex-col">
              <label className="text-sm" htmlFor="facebook">
                Facebook:
              </label>
              <input
                className="rounded border border-gray-40 p-2 transition duration-300"
                type="text"
                id="facebook"
                value={selectedPolitician?.facebook || ""}
                onChange={(e) =>
                  setSelectedPolitician({
                    ...selectedPolitician,
                    facebook: e.target.value,
                  })
                }
              />
            </div>
            <div className="flex w-[48%] flex-col">
              <label className="text-sm" htmlFor="instagram">
                Instagram:
              </label>
              <input
                className="rounded border border-gray-40 p-2 transition duration-300"
                type="text"
                id="instagram"
                value={selectedPolitician?.instagram || ""}
                onChange={(e) =>
                  setSelectedPolitician({
                    ...selectedPolitician,
                    instagram: e.target.value,
                  })
                }
              />
            </div>
            <div className="flex w-[48%] flex-col">
              <label className="text-sm" htmlFor="tiktok">
                TikTok:
              </label>
              <input
                className="rounded border border-gray-40 p-2 transition duration-300"
                type="text"
                id="tiktok"
                value={selectedPolitician?.tiktok || ""}
                onChange={(e) =>
                  setSelectedPolitician({
                    ...selectedPolitician,
                    tiktok: e.target.value,
                  })
                }
              />
            </div>
            <div className="flex w-[48%] flex-col">
              <label className="text-sm" htmlFor="youTube">
                YouTube:
              </label>
              <input
                className="rounded border border-gray-40 p-2 transition duration-300"
                type="text"
                id="youTube"
                value={selectedPolitician?.youtube || ""}
                onChange={(e) =>
                  setSelectedPolitician({
                    ...selectedPolitician,
                    youtube: e.target.value,
                  })
                }
              />
            </div>
          </div>
        </div>
        <button
          disabled={isEditing}
          onClick={() => EditPoliticianProfile()}
          className="m-auto flex w-max items-center gap-2 rounded-md bg-primary-100 px-2 py-1 text-white"
        >
          {isEditing ? (
            <>
              <Loader2 className="h-4 w-4 animate-spin" />
              <span>Editando...</span>
            </>
          ) : (
            "Editar Perfil"
          )}
        </button>
      </div>
    </Modal>
  );
}
