interface ListItemWithTypeProps {
  ListItemWithTypeData: {
    name: string;
    type: string;
    value: number;
  };
}

export function ListItemWithType({
  ListItemWithTypeData,
}: ListItemWithTypeProps) {
  return (
    <div className="flex w-full items-center justify-between">
      <div className="flex items-center gap-2">
        <div className="flex h-10 w-10 items-center justify-center rounded-full bg-sky-500/10 p-2 text-sky-500">
          {ListItemWithTypeData.type.slice(0, 1)}
        </div>
        <div className="flex h-full flex-col justify-between">
          <strong>{ListItemWithTypeData.name}</strong>
          <span className="text-sm text-zinc-500">
            {ListItemWithTypeData.type}
          </span>
        </div>
      </div>
      <strong>
        {ListItemWithTypeData.value.toLocaleString("pt-BR", {
          style: "currency",
          currency: "BRL",
        })}
      </strong>
    </div>
  );
}
