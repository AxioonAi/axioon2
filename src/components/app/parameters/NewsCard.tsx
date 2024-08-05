import Image from "next/image";
import React from "react";

// Definindo a interface para os dados da notícia
interface News {
  name: string;
  state_capital_id: string;
  website_logo: string;
  url: string;
  id: string;
}

// Alterando o componente para receber os dados como props
interface NewsCardProps {
  news: News;
}

export function NewsCard({ news }: NewsCardProps) {
  return (
    <button className="flex w-full items-center justify-between rounded-md bg-white p-4 shadow-md transition-transform hover:scale-[1.01]">
      <div className="flex flex-col items-start self-start">
        <h2 className="text-lg font-semibold">{news.name}</h2>
        <a href={news.url} className="text-sm text-gray-500">
          {news.url}
        </a>
      </div>
      <div className="flex items-center justify-center">
        {news.website_logo ? (
          <Image
            className="rounded-md"
            src={news.website_logo}
            alt=""
            width={48}
            height={48}
          />
        ) : (
          <div className="bg-gray-20 h-20 w-20 rounded-md" />
        )}
      </div>
    </button>
  );
}
