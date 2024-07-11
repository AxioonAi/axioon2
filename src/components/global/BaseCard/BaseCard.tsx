import { twMerge } from "tailwind-merge";

interface BaseCardProps {
  children: React.ReactNode;
  className?: string;
}

export function BaseCard({ children, className }: BaseCardProps) {
  return (
    <div
      className={twMerge(
        "relative flex h-full w-full flex-col rounded-lg bg-white p-4 shadow-md",
        className,
      )}
    >
      {children}
    </div>
  );
}
