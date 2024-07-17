interface ListItemWithPriceProps {
  ListItemWithPriceData: {
    name: string;
    quantity: number;
    value: number;
  };
}

export function ListItemWithPrice({
  ListItemWithPriceData,
}: ListItemWithPriceProps) {
  return (
    <div className="flex w-full items-center justify-between">
      <div className="flex items-center gap-2">
        <div className="flex h-10 w-10 items-center justify-center rounded-full bg-sky-500/10 p-2 text-sky-500">
          {ListItemWithPriceData.quantity}
        </div>
        <div className="flex h-full flex-col justify-between">
          <strong>{ListItemWithPriceData.name}</strong>
          <span className="text-sm text-zinc-500">
            Quantidade: {ListItemWithPriceData.quantity}
          </span>
        </div>
      </div>
      <strong>
        {ListItemWithPriceData.value.toLocaleString("pt-BR", {
          style: "currency",
          currency: "BRL",
        })}
      </strong>
    </div>
  );
}
