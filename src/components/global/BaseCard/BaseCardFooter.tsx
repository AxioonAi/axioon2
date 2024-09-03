// export function BaseCardFooter() {
//   return (
//     <div className="flex h-10 max-h-10 min-h-10 w-full flex-col items-center justify-center gap-2 bg-white">
//       <div className="h-px w-full bg-[#f0f0f0] shadow-sm" />
//       <span className="w-full truncate px-2 py-1 text-xs italic text-zinc-500 lg:text-sm 2xl:text-base 3xl:text-lg">
//         lorem epsum orem Ipsum is simply dummy text of the printing and
//         typesetting industry. Lorem Ipsum Lorem Ipsum Lorem Ipsum
//       </span>
//     </div>
//   );
// }

import { Popover, PopoverTrigger } from "@radix-ui/react-popover";

export function BaseCardFooter({ text }: { text?: string }) {
  return (
    <>
      {text && (
        <Popover>
          <PopoverTrigger asChild>
            <div className="flex h-10 max-h-10 min-h-10 w-full flex-col items-center justify-center gap-2 truncate bg-white">
              <div className="h-px w-full bg-[#f0f0f0] shadow-sm" />
              <span className="w-full px-2 py-1 text-[10px] italic leading-3 text-zinc-500 lg:text-xs">
                {text}
              </span>
            </div>
          </PopoverTrigger>
          {/* <PopoverContent className="z-[9999] w-40 rounded border border-gray-200 bg-white xl:hidden">
            <span className="w-full px-2 py-1 text-center text-[10px] italic leading-3 text-zinc-500 lg:text-xs">
              {text}
            </span>
          </PopoverContent> */}
        </Popover>
      )}
    </>
  );
}
