import { twMerge } from "tailwind-merge";

interface ListItemWithSentimentProps {
  ListItemWithSentimentData: {
    name: string;
    sentiment: string;
    value: number;
  };
}

export function ListItemWithSentiment({
  ListItemWithSentimentData,
}: ListItemWithSentimentProps) {
  return (
    <div className="flex w-full items-center justify-between">
      <div className="flex items-center gap-2">
        <div className="flex h-10 w-10 items-center justify-center rounded-full bg-sky-500/10 p-2 text-sky-500">
          {ListItemWithSentimentData.name.slice(0, 1)}
        </div>
        <div className="flex h-full flex-col justify-between">
          <strong>{ListItemWithSentimentData.name}</strong>
          <span
            className={twMerge(
              "text-sm",
              ListItemWithSentimentData.sentiment === "positiva"
                ? "text-green-600"
                : ListItemWithSentimentData.sentiment === "neutra"
                  ? "text-violet-600"
                  : "text-red-600",
            )}
          >
            {ListItemWithSentimentData.sentiment}
          </span>
        </div>
      </div>
      <strong> {ListItemWithSentimentData.value}</strong>
    </div>
  );
}
