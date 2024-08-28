"use client";
import { useState } from "react";
import { useRouter } from "next/navigation";
import { useCookies } from "next-client-cookies";
import { Footer } from "@/components/global/Footer";
import { Messages } from "@/components/global/Messages";
import { PostAPI, token } from "@/lib/axios";
import { Spinner } from "@/components/global/Spinner";

export default function Login() {
  const router = useRouter();
  const cookies = useCookies();

  const [showPassword, setShowPassword] = useState("password");
  const [buttonLoading, setButtonLoading] = useState(false);
  // eslint-disable-next-line @typescript-eslint/no-unused-vars, no-unused-vars
  const [checked, setChecked] = useState(false);
  const [formData, setFormData] = useState({
    email: "",
    password: "",
  });

  function toggleShowPassword() {
    if (showPassword === "password") {
      setShowPassword("text");
    } else {
      setShowPassword("password");
    }
  }

  async function handleLogin() {
    setButtonLoading(true);
    const connect = await PostAPI(checked ? "/sub-user/login" : "/login", {
      email: formData.email,
      password: formData.password,
    });
    if (connect.status !== 200) {
      alert(connect.body);
      return setButtonLoading(false);
    }
    cookies.set(token, connect.body.token);

    router.push("/");
    return setButtonLoading(false);
  }

  return (
    <div className="Container relative min-h-screen bg-white pb-16">
      <div className="Main mb-24 flex w-full flex-col items-center justify-around md:mb-0 lg:flex-row">
        <div className="LoginForm px-16 py-0 lg:w-1/2">
          <div className="AxionLogo flex justify-center p-5">
            <img className="w-48 lg:w-auto" src="/axionLogo.png" alt="" />
          </div>
          <div className="LoginFormHeader flex flex-col">
            <strong className="text-2xl">
              Faça seu login para utilizar a plataforma.
            </strong>
            <span className="text-sm">
              Acesse aqui todas as suas contas pelo painel principal.
            </span>
          </div>
          {/* <div className="LoginTypeSelector my-4 flex h-20 w-full flex-col justify-between gap-2 lg:flex-row">
            <label
              htmlFor="loginType1"
              className={`Selector1 flex w-full cursor-pointer items-center justify-start gap-2 rounded border-2 p-3 lg:w-2/5 lg:px-2 ${
                checked ? " " : "border-[#323452]"
              } ${checked ? "" : "bg-primary/10"}`}
            >
              <input
                type="radio"
                id="loginType1"
                name="loginType"
                defaultChecked
                onChange={() => setChecked(!checked)}
              />
              <span>Administrador</span>
            </label>
            <label
              htmlFor="loginType2"
              className={`Selector1 flex w-full cursor-pointer items-center justify-start gap-2 rounded border-2 p-3 lg:w-2/5 lg:px-2 ${
                checked ? "border-[#323452]" : ""
              } ${checked ? "bg-primary/10" : ""}`}
            >
              <input
                type="radio"
                id="loginType2"
                name="loginType"
                onChange={() => setChecked(!checked)}
              />
              <span>Convidado</span>
            </label>
          </div> */}
          <div className="relative mb-8 mt-20 lg:mt-8">
            <div className="border border-gray-300" />

            {/* <p className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 transform bg-white px-2 text-gray-400">
              ou
            </p> */}
          </div>
          <form
            action={handleLogin}
            onSubmit={(e) => e.preventDefault()}
            className="flex w-full flex-col"
          >
            <div className="relative mb-3 flex flex-col">
              <label className="text-sm" htmlFor="email">
                Email
              </label>
              <input
                className="rounded-lg border border-gray-300 p-2 transition duration-200"
                type="email"
                value={formData.email}
                onChange={(e) =>
                  setFormData({ ...formData, email: e.target.value })
                }
              />
            </div>

            <div className="relative mb-3 flex flex-col">
              <label className="text-sm" htmlFor="password">
                Senha
              </label>
              <input
                className="rounded-lg border border-gray-300 p-2 transition duration-200"
                type={showPassword}
                value={formData.password}
                onChange={(e) =>
                  setFormData({ ...formData, password: e.target.value })
                }
              />
              {showPassword === "password" ? (
                <img
                  className="absolute bottom-2.5 right-4 cursor-pointer"
                  src="/eye.svg"
                  alt=""
                  onClick={toggleShowPassword}
                />
              ) : (
                <img
                  className="absolute bottom-2.5 right-4 cursor-pointer"
                  src="/eye-slash.svg"
                  alt=""
                  onClick={toggleShowPassword}
                />
              )}
            </div>
            <div className="flex justify-end">
              <span
                className="cursor-pointer border-0 bg-transparent text-brand_blue"
                onClick={() => router.push("/recover-password")}
              >
                Esqueceu sua senha?
              </span>
            </div>
            <button
              onClick={handleLogin}
              disabled={buttonLoading}
              className="w-full rounded-xl bg-darkBlueAxion p-2 text-xl text-white"
            >
              {buttonLoading ? <Spinner /> : "Entrar"}
            </button>
          </form>
          {/* <p className="text-sm font-bold">
            Não tem uma conta?{" "}
            <span
              className="text-brand_blue cursor-pointer"
              onClick={() => router.push("/register")}
            >
              Cadastre-se
            </span>
          </p> */}
        </div>
        <div
          className="ArtSection bg-top-center relative h-full min-h-screen w-full self-start bg-cover bg-no-repeat lg:w-1/2"
          style={{ backgroundImage: 'url("/foto.png")' }}
        >
          <Messages />
        </div>
      </div>
      <Footer />
    </div>
  );
}
