import Image from "next/image";

interface hashtagCardProps {
  hashtag: string;
}
export function HashtagCard({ hashtag }: hashtagCardProps) {
  return (
    <div className="flex w-full flex-row items-center gap-x-4 rounded-md bg-white p-4 shadow-lg">
      <Image
        className="h-8 w-8 rounded-md"
        src={"/icons/hashtagWithSquare.png"}
        alt=""
        width={48}
        height={48}
      />
      <h2 className="text-lg font-semibold text-[#1C274C]">{hashtag}</h2>
    </div>
  );
}
