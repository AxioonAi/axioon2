import { twMerge } from "tailwind-merge";

interface BaseCardProps {
  children: React.ReactNode;
  className?: string;
  ref?: React.RefObject<HTMLDivElement>;
}

export function BaseCard({ children, className, ref }: BaseCardProps) {
  return (
    <div
      ref={ref}
      className={twMerge(
        "relative flex h-full w-full flex-col rounded-lg bg-white p-4 shadow-md",
        className,
      )}
    >
      {children}
    </div>
  );
}
