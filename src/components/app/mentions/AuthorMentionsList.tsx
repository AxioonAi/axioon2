import { ChevronDown } from "lucide-react";
import { BaseCard } from "@/components/global/BaseCard/BaseCard";
import { BaseCardHeader } from "@/components/global/BaseCard/BaseCardHeader";
import { ListItemWithDate } from "@/components/global/List/ListItemWithDate";

interface AuthorMentionsListProps {
  AuthorMentionsData: {
    name: string;
    date: string;
    value: number;
  }[];
}

export function AuthorMentionsList({
  AuthorMentionsData,
}: AuthorMentionsListProps) {
  return (
    <BaseCard className="p-0">
      <BaseCardHeader
        title="Menções por Autores"
        children={
          <div className="flex items-center gap-2 text-xs text-zinc-500">
            <span>Ver todos</span>
            <ChevronDown size={14} />
          </div>
        }
      />
      <div className="flex h-full w-full flex-col gap-8 overflow-y-scroll p-4">
        {AuthorMentionsData.map((user, index) => (
          <ListItemWithDate key={index} ListItemWithDateData={user} />
        ))}
      </div>
    </BaseCard>
  );
}
