import Image from "next/image";
import React from "react";

// Definindo a interface para os dados do político
interface Politician {
  name: string;
  city: string;
  youtube: string;
  tiktok: string;
  instagram: string;
  facebook: string;
}

// Alterando o componente para receber os dados como props
interface PerfilCardProps {
  politician: Politician;
}

export function PerfilCard({ politician }: PerfilCardProps) {
  const handleClick = (name: string, username: string) => {
    if (!username) {
      return alert("Nome do perfil não informado");
    }
    if (name === "youtube") {
      const url = `https://www.youtube.com/@${username}`;
      if (confirm("Acessar o canal?")) {
        return window.open(url, "_blank");
      }
    } else if (name === "tiktok") {
      const url = `https://www.tiktok.com/@${username}`;
      if (confirm("Acessar o perfil?")) {
        return window.open(url, "_blank");
      }
    } else if (name === "instagram") {
      const url = `https://www.instagram.com/${username}`;
      if (confirm("Acessar o perfil?")) {
        return window.open(url, "_blank");
      }
    } else {
      const url = `https://www.facebook.com/${username}`;
      if (confirm("Acessar o perfil?")) {
        return window.open(url, "_blank");
      }
    }
  };

  return (
    <div className="flex w-max max-w-80 flex-col rounded-md bg-white p-4 shadow-md">
      <div className="flex flex-col">
        <div className="flex flex-row items-center justify-between">
          <h2 className="max-w-[60%] overflow-hidden truncate whitespace-nowrap text-lg font-semibold">
            {politician.name}
          </h2>
          <div className="flex cursor-pointer flex-row items-center justify-between gap-1 rounded-lg bg-sky-100 px-1 py-0.5 text-sm font-bold text-sky-700 transition-colors hover:bg-sky-200">
            Ajustes
            <Image
              className="h-6 w-6"
              src={"/Icons/setting.svg"}
              alt=""
              width={100}
              height={100}
            />
          </div>
        </div>
        <h3 className="text-sm text-black">{politician.city}</h3>
      </div>
      <div className="grid grid-cols-2 gap-x-4 gap-y-4">
        <button
          onClick={() => handleClick("youtube", politician.youtube)}
          className="col-span-1 row-span-1 flex h-full flex-row items-center justify-start gap-2 rounded-md bg-zinc-50 p-2 text-black shadow-md"
        >
          <Image
            alt=""
            width={100}
            height={100}
            className="h-full w-6 rounded-md"
            src={"/Logos/YouTubeLogo.png"}
          />
          <span className="text-small max-w-full overflow-hidden truncate whitespace-nowrap">
            {politician.youtube}
          </span>
        </button>
        <button
          onClick={() => handleClick("tiktok", politician.tiktok)}
          className="col-span-1 row-span-1 flex h-full flex-row items-center justify-start gap-2 rounded-md bg-zinc-50 p-2 text-black shadow-md"
        >
          <Image
            alt=""
            width={100}
            height={100}
            className="h-full w-6 rounded-md"
            src={"/Logos/TikTokLogo.png"}
          />
          <span className="text-small max-w-full overflow-hidden truncate whitespace-nowrap">
            {politician.tiktok}
          </span>
        </button>
        <button
          onClick={() => handleClick("instagram", politician.instagram)}
          className="col-span-1 row-span-1 flex h-full flex-row items-center justify-start gap-2 rounded-md bg-zinc-50 p-2 text-black shadow-md"
        >
          <Image
            alt=""
            width={100}
            height={100}
            className="h-full w-6 rounded-md"
            src={"/Logos/InstagramLogo.png"}
          />
          <span className="text-small max-w-full overflow-hidden truncate whitespace-nowrap">
            {politician.instagram}
          </span>
        </button>
        <button
          onClick={() => handleClick("facebook", politician.facebook)}
          className="col-span-1 row-span-1 flex h-full flex-row items-center justify-start gap-2 rounded-md bg-zinc-50 p-2 text-black shadow-md"
        >
          <Image
            alt=""
            width={100}
            height={100}
            className="h-full w-6 rounded-md"
            src={"/Logos/FacebookLogo.png"}
          />
          <span className="text-small max-w-full overflow-hidden truncate whitespace-nowrap">
            {politician.facebook}
          </span>
        </button>
      </div>
    </div>
  );
}
