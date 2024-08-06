export function BaseCardFooter() {
  return (
    <div className="absolute bottom-0 z-20 flex h-10 max-h-10 min-h-10 w-full flex-col items-center justify-center gap-2 bg-white">
      <div className="h-px w-full bg-[#f0f0f0] shadow-sm" />
      <span className="w-full truncate px-2 py-1 text-xs italic text-zinc-500 lg:text-sm 2xl:text-base 3xl:text-lg">
        lorem epsum orem Ipsum is simply dummy text of the printing and
        typesetting industry. Lorem Ipsum Lorem Ipsum Lorem Ipsum
      </span>
    </div>
  );
}
