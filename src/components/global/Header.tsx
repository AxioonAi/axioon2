import { Settings } from "lucide-react";

export function Header() {
  return (
    <div className="flex h-16 w-full items-center justify-end bg-black px-4 text-sm text-white">
      <div className="flex items-center gap-2">
        <strong>Jefferson Isac</strong>
        <Settings />
      </div>
    </div>
  );
}
