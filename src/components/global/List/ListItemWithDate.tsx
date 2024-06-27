interface ListItemWithDateProps {
  ListItemWithDateData: {
    name: string;
    date: string;
    value: number;
  };
}

export function ListItemWithDate({
  ListItemWithDateData,
}: ListItemWithDateProps) {
  return (
    <div className="flex w-full items-center justify-between">
      <div className="flex items-center gap-2">
        <div className="flex h-10 w-10 items-center justify-center rounded-full bg-sky-500/10 p-2 text-sky-500">
          {ListItemWithDateData.name.slice(0, 1)}
        </div>
        <div className="flex h-full flex-col justify-between">
          <strong>{ListItemWithDateData.name}</strong>
          <span className="text-sm text-zinc-500">
            {ListItemWithDateData.date}
          </span>
        </div>
      </div>
      <strong> {ListItemWithDateData.value}</strong>
    </div>
  );
}
