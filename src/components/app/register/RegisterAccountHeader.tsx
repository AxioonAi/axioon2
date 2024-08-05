import { useRouter } from "next/navigation";
import { twMerge } from "tailwind-merge";

interface Props {
  type?: "light" | "dark";
  where?: string;
}

export function RegisterAccountHeader({ type = "light", where }: Props) {
  const handleClick = () => {
    return router.push(where ? `/${where}` : "/login");
  };
  const router = useRouter();

  return (
    <header className="registerHeader border-gray-60 flex h-16 items-center justify-between border-b">
      {type === "light" ? (
        <img
          className="ml-[2%] h-auto w-28 md:w-40"
          src="/axionLogo.png"
          alt=""
        />
      ) : (
        <img
          className="ml-[2%] h-auto w-28 md:w-40"
          src="/sidebar/axion-white.svg"
          alt=""
        />
      )}
      <button
        className={twMerge(
          "hover:bg-darkBlueAxion mr-[2%] rounded-md border bg-transparent px-3 py-2 text-sm font-bold transition duration-300",
          type === "light"
            ? "border-darkBlueAxion bg-darkBlueAxion text-gray-10"
            : "border-gray-10 bg-gray-10 text-black",
        )}
        onClick={handleClick}
      >
        Voltar
      </button>
    </header>
  );
}
