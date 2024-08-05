interface Props {
  type?: "light" | "dark";
}

export function Footer({ type = "light" }: Props) {
  return (
    <footer
      className={`relative flex items-center justify-between border-t px-4 lg:absolute border-t-${type === "light" ? "gray-60" : "gray-10"} ${type === "light" ? "text-gray-80" : "text-gray-10"} ${type === "light" ? "bg-white" : "bg-hoverDarkBlueAxion"} bottom-0 h-16 w-full text-xs`}
    >
      <div>
        <p>
          Copyright © {new Date().getFullYear()} Axioon. Todos os direitos
          reservados. CNPJ nº 01.233.000/0001-31
        </p>
      </div>
      <div>Política de privacidade | Termos de serviço</div>
    </footer>
  );
}
