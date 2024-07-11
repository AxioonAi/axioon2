import Image from "next/image";
import React from "react";

// Definindo a interface para os dados da notícia
interface News {
  title: string;
  url: string;
  icon: string;
}

// Alterando o componente para receber os dados como props
interface NewsCardProps {
  news: News;
}

export function NewsCard({ news }: NewsCardProps) {
  return (
    <div className="flex w-full items-center justify-between rounded-md bg-white p-4 shadow-lg">
      <div className="flex flex-col">
        <h2 className="text-lg font-semibold">{news.title}</h2>
        <a href={news.url} className="text-sm text-gray-500">
          {news.url}
        </a>
      </div>
      <div className="flex items-center justify-center">
        <Image
          className="rounded-md"
          src={news.icon}
          alt={news.title}
          width={48}
          height={48}
        />
      </div>
    </div>
  );
}
