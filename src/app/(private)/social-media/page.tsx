import { CardWithTitleAndButton } from "@/components/app/social-media/CardWithTitleAndButton";
import { HashtagCard } from "@/components/app/social-media/HashtagCard";
import { NewsCard } from "@/components/app/social-media/NewsCard";
import { PerfilCard } from "@/components/app/social-media/PerfilCard";

export default function SocialMediaPage() {
  const politicians = [
    {
      id: 1,
      name: "John Doe silva pereira pinto dias",
      city: "New York",
      socialMedia: {
        youtube: "@johnyoutube",
        tiktok: "@johntiktok",
        instagram: "@johninsta",
        facebook: "@johnfb",
      },
    },
    {
      id: 2,
      name: "Jane Smith",
      city: "Los Angeles",
      socialMedia: {
        youtube: "@janesyoutube",
        tiktok: "@janestiktok",
        instagram: "@janeinsta",
        facebook: "@janefb",
      },
    },
    {
      id: 3,
      name: "Alice Johnson",
      city: "Chicago",
      socialMedia: {
        youtube: "@aliceyoutube",
        tiktok: "@alicetiktok",
        instagram: "@aliceinsta",
        facebook: "@alicefb",
      },
    },
    {
      id: 4,
      name: "Bob Brown",
      city: "Houston",
      socialMedia: {
        youtube: "@bobyoutube",
        tiktok: "@bobtiktok",
        instagram: "@bobinsta",
        facebook: "@bobfb",
      },
    },
  ];

  const news = [
    {
      title: "Title 1",

      icon: "/Logos/g1Logo.png",
      url: "https://www.google.com",
    },
    {
      title: "Title 2",

      icon: "/Logos/g1Logo.png",
      url: "https://www.google.com",
    },
    {
      title: "Title 3",

      icon: "/Logos/g1Logo.png",
      url: "https://www.google.com",
    },
    {
      title: "Title 4",

      icon: "/Logos/g1Logo.png",
      url: "https://www.google.com",
    },
    {
      title: "Title 5",

      icon: "/Logos/g1Logo.png",
      url: "https://www.google.com",
    },
    {
      title: "Title 6",

      icon: "/Logos/g1Logo.png",
      url: "https://www.google.com",
    },
  ];

  return (
    <div className="flex-grow">
      <div className="grid h-full w-full grid-cols-12 gap-4">
        <div className="col-span-12 rounded-md bg-white shadow-md">
          <CardWithTitleAndButton
            title="Perfis Monitorados"
            buttonText="3 de 5 disponíveis"
            hasTwoButtons={true}
            secondButtonText="Novo Perfil"
          />
        </div>
        <div className="col-span-12 flex flex-row space-x-4 overflow-x-scroll py-1">
          {politicians.map((politician) => (
            <div className="min-w-[250px] flex-shrink-0" key={politician.id}>
              <PerfilCard politician={politician} />
            </div>
          ))}
        </div>

        <div className="col-span-12 rounded-md bg-white shadow-md">
          <CardWithTitleAndButton
            title="Sites e Portais monitorados"
            buttonText="Solicitar novo Portal"
          />
        </div>
        <div className="col-span-12 flex flex-row space-x-4 overflow-x-scroll py-1">
          {news.map((news) => (
            <div className="min-w-[250px] flex-shrink-0" key={news.title}>
              <NewsCard news={news} />
            </div>
          ))}
        </div>
        <div className="col-span-12 rounded-md bg-white shadow-md">
          <CardWithTitleAndButton
            title="Hashtags Monitoradas"
            buttonText="3 de 5 disponíveis"
            hasTwoButtons={true}
            secondButtonText="Nova Hashtag"
          />
        </div>
        <div className="col-span-12 flex flex-row space-x-4 overflow-x-scroll py-1">
          {news.map((news) => (
            <div className="min-w-[250px] flex-shrink-0" key={news.title}>
              <HashtagCard hashtag="#corrupcao_no_brasil" />
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
