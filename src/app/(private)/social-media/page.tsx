"use client";
import { register } from "swiper/element/bundle";
import { CardWithTitleAndButton } from "@/components/app/social-media/CardWithTitleAndButton";
import "swiper/swiper-bundle.css";
import { SwiperNews } from "@/components/app/home/SwiperNews";
import { SwiperPoliticians } from "@/components/app/home/SwiperPoliticians";
import { SwiperHashtag } from "@/components/app/home/SwiperHashtags";
register();
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
    {
      id: 5,
      name: "Bob Brown",
      city: "Houston",
      socialMedia: {
        youtube: "@bobyoutube",
        tiktok: "@bobtiktok",
        instagram: "@bobinsta",
        facebook: "@bobfb",
      },
    },
    {
      id: 6,
      name: "Bob Brown",
      city: "Houston",
      socialMedia: {
        youtube: "@bobyoutube",
        tiktok: "@bobtiktok",
        instagram: "@bobinsta",
        facebook: "@bobfb",
      },
    },
    {
      id: 7,
      name: "Bob Brown",
      city: "Houston",
      socialMedia: {
        youtube: "@bobyoutube",
        tiktok: "@bobtiktok",
        instagram: "@bobinsta",
        facebook: "@bobfb",
      },
    },
    {
      id: 8,
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
      id: 1,
      title: "Title 1",

      icon: "/Logos/g1Logo.png",
      url: "https://www.google.com",
    },
    {
      title: "Title 2",
      id: 2,
      icon: "/Logos/g1Logo.png",
      url: "https://www.google.com",
    },
    {
      title: "Title 3",
      id: 3,
      icon: "/Logos/g1Logo.png",
      url: "https://www.google.com",
    },
    {
      title: "Title 4",
      id: 4,
      icon: "/Logos/g1Logo.png",
      url: "https://www.google.com",
    },
    {
      title: "Title 5",
      id: 5,
      icon: "/Logos/g1Logo.png",
      url: "https://www.google.com",
    },
    {
      title: "Title 6",
      id: 6,
      icon: "/Logos/g1Logo.png",
      url: "https://www.google.com",
    },
  ];
  const hashtag = [
    {
      id: 1,
      hashtag: "#hashtag1",
    },
    {
      id: 2,
      hashtag: "#hashtag2",
    },
    {
      id: 3,
      hashtag: "#hashtag3",
    },
    {
      id: 4,
      hashtag: "#hashtag4",
    },
    {
      id: 5,
      hashtag: "#hashtag5",
    },
    {
      id: 6,
      hashtag: "#hashtag6",
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
        <div className="col-span-12 flex flex-col space-x-4 overflow-hidden py-1">
          <SwiperPoliticians politicians={politicians} />
        </div>

        <div className="col-span-12 rounded-md bg-white shadow-md">
          <CardWithTitleAndButton
            title="Sites e Portais monitorados"
            buttonText="Solicitar novo Portal"
          />
        </div>
        <div className="col-span-12 flex flex-col space-x-4 overflow-hidden py-1">
          <SwiperNews news={news} />
        </div>
        <div className="col-span-12 rounded-md bg-white shadow-md">
          <CardWithTitleAndButton
            title="Hashtags Monitoradas"
            buttonText="3 de 5 disponíveis"
            hasTwoButtons={true}
            secondButtonText="Nova Hashtag"
          />
        </div>
        <div className="col-span-12 flex flex-col space-x-4 overflow-hidden py-1">
          <SwiperHashtag hashtag={hashtag} />
        </div>
      </div>
    </div>
  );
}
