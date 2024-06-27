import { twMerge } from "tailwind-merge";

interface BaseCardHeaderProps {
  color?: string;
  title: string;
  children?: React.ReactNode;
}

export function BaseCardHeader({
  color = "bg-sky-900",
  title,
  children,
}: BaseCardHeaderProps) {
  return (
    <div className="relative flex w-full items-center justify-between border-b border-b-zinc-700/50 py-4 pl-8 pr-4">
      <div className={twMerge("absolute left-4 h-1/2 w-1 rounded", color)} />
      <strong>{title}</strong>
      <div className="flex items-center gap-2">{children}</div>
    </div>
  );
}
