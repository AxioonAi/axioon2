import { SwiperNews } from "@/components/app/home/SwiperNews";
import { SwiperPoliticians } from "@/components/app/home/SwiperPoliticians";
import { SwiperHashtag } from "@/components/app/home/SwiperHashtags";

export default function Parameters() {
  return (
    <div className="flex-grow">
      <div className="grid h-full w-full grid-cols-12 gap-4">
        <div className="col-span-12 flex flex-col py-1">
          <SwiperPoliticians />
        </div>
        <div className="col-span-12 flex flex-col py-1">
          <SwiperNews />
        </div>
        <div className="col-span-12 flex flex-col py-1">
          <SwiperHashtag />
        </div>
      </div>
    </div>
  );
}
