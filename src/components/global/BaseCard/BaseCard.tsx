import { twMerge } from "tailwind-merge";

interface BaseCardProps {
  children: React.ReactNode;
  className?: string;
  ref?: React.RefObject<HTMLDivElement>;
  slit?: boolean;
}

export function BaseCard({
  children,
  className,
  ref,
  slit = false,
}: BaseCardProps) {
  return (
    <div
      ref={ref}
      className={twMerge(
        "relative flex h-full w-full flex-col rounded-lg bg-white p-4 shadow-md",
        className,
      )}
    >
      {slit && (
        <div className="bg-darkBlueAxion absolute left-1/2 top-1 h-1 w-6 -translate-x-1/2 rounded-full" />
      )}
      {children}
    </div>
  );
}
