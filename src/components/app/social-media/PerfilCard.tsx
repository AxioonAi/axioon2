import Image from "next/image";
import React from "react";

// Definindo a interface para os dados do político
interface Politician {
  name: string;
  city: string;
  socialMedia: {
    youtube: string;
    tiktok: string;
    instagram: string;
    facebook: string;
  };
}

// Alterando o componente para receber os dados como props
interface PerfilCardProps {
  politician: Politician;
}

export function PerfilCard({ politician }: PerfilCardProps) {
  return (
    <div className="flex flex-col rounded-md bg-white p-4">
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
        <a
          href={`https://www.youtube.com/${politician.socialMedia.youtube}`}
          className="col-span-1 row-span-1 flex h-full flex-row items-center justify-start gap-2 rounded-md bg-zinc-50 p-2 text-black shadow-md"
        >
          <Image
            alt=""
            width={100}
            height={100}
            className="h-full w-6 rounded-md"
            src={"/Logos/youtube.svg"}
          />
          <span className="text-small max-w-full overflow-hidden truncate whitespace-nowrap">
            {politician.socialMedia.youtube}
          </span>
        </a>
        <a
          href={`https://www.tiktok.com/@${politician.socialMedia.tiktok}`}
          className="col-span-1 row-span-1 flex h-full flex-row items-center justify-start gap-2 rounded-md bg-zinc-50 p-2 text-black shadow-md"
        >
          <Image
            alt=""
            width={100}
            height={100}
            className="h-full w-6 rounded-md"
            src={"/Logos/tiktok.svg"}
          />
          <span className="text-small max-w-full overflow-hidden truncate whitespace-nowrap">
            {politician.socialMedia.tiktok}
          </span>
        </a>
        <a
          href={`https://www.instagram.com/${politician.socialMedia.instagram}`}
          className="col-span-1 row-span-1 flex h-full flex-row items-center justify-start gap-2 rounded-md bg-zinc-50 p-2 text-black shadow-md"
        >
          <Image
            alt=""
            width={100}
            height={100}
            className="h-full w-6 rounded-md"
            src={"/Logos/instagram.svg"}
          />
          <span className="text-small max-w-full overflow-hidden truncate whitespace-nowrap">
            {politician.socialMedia.instagram}
          </span>
        </a>
        <a
          href={`https://www.facebook.com/${politician.socialMedia.facebook}`}
          className="col-span-1 row-span-1 flex h-full flex-row items-center justify-start gap-2 rounded-md bg-zinc-50 p-2 text-black shadow-md"
        >
          <Image
            alt=""
            width={100}
            height={100}
            className="h-full w-6 rounded-md"
            src={"/Logos/facebook.svg"}
          />
          <span className="text-small max-w-full overflow-hidden truncate whitespace-nowrap">
            {politician.socialMedia.facebook}
          </span>
        </a>
      </div>
    </div>
  );
}
