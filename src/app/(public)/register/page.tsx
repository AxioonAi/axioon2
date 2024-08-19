"use client";
import { useRouter } from "next/navigation";
import { useState } from "react";
import { BasicDataForm } from "@/components/app/register/BasicDataForm";
import { PersonalDataForm } from "@/components/app/register/PersonalDataForm";
import { RegisterAccountHeader } from "@/components/app/register/RegisterAccountHeader";
import { Footer } from "@/components/global/Footer";
import { Messages } from "@/components/global/Messages";
import { Spinner } from "@/components/global/Spinner";
import { PostAPI, refreshToken, token, userType } from "@/lib/axios";

export default function RegisterAccount() {
  const router = useRouter();
  const [step, setStep] = useState(1);
  const [terms, setTerms] = useState(false);
  const [loading, setLoading] = useState(false);
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    social_name: "",
    password: "",
    cpfCnpj: "",
    birth_date: "",
    sex: "",
    mobilePhone: "",
  });

  async function handleRegister() {
    setLoading(true);
    const birthDate = new Date(formData.birth_date).toISOString();
    const connect = await PostAPI("/register", {
      name: formData.name,
      email: formData.email,
      social_name: formData.social_name,
      password: formData.password,
      cpfCnpj: formData.cpfCnpj,
      birth_date: birthDate,
      sex: formData.sex,
      mobilePhone: formData.mobilePhone,
    });
    if (connect.status !== 200) {
      alert(connect.body);
      return setLoading(false);
    }
    if (connect.status === 200) {
      setStep(3);
      localStorage.setItem(token, connect.body.token);
      localStorage.setItem(refreshToken, connect.body.refreshToken);
      localStorage.setItem(userType, connect.body.type);
      router.push("/");
      return setLoading(false);
    }
  }

  const handleNext = () => {
    if (
      step === 1 &&
      formData.name !== "" &&
      formData.email !== "" &&
      formData.mobilePhone !== "" &&
      formData.password !== "" &&
      terms === true
    ) {
      return setStep(2);
    }
    if (
      (step === 1 && terms === true && formData.name === "") ||
      formData.email === "" ||
      formData.mobilePhone === "" ||
      formData.password === ""
    ) {
      return alert("Preencha todos os campos");
    }
    if (step === 1 && terms === false) {
      return alert("Aceite os termos de uso");
    }
    if (
      step === 2 &&
      formData.name !== "" &&
      formData.email !== "" &&
      formData.mobilePhone !== "" &&
      formData.password !== "" &&
      formData.social_name !== "" &&
      formData.cpfCnpj !== "" &&
      formData.birth_date !== "" &&
      formData.sex !== ""
    ) {
      return handleRegister();
    }
    if (
      (step === 2 && formData.social_name === "") ||
      formData.cpfCnpj === "" ||
      formData.birth_date === "" ||
      formData.sex === ""
    ) {
      return alert("Preencha todos os campos");
    }
  };

  return (
    <div className="Container relative min-h-screen bg-white pb-16">
      <RegisterAccountHeader where="login" type="light" />
      <div
        className={`progressBar absolute top-[3.7rem] h-1 bg-darkBlueAxion transition duration-500 ease-in-out ${step === 1 ? "w-[10%]" : step === 2 ? "w-1/2" : step === 3 ? "w-[90%]" : "w-full"}`}
      />
      <main className="mb-0 flex w-full flex-col items-center justify-around lg:flex-row">
        <div className="formContainer w-[calc(100%-3vw)] px-[8%] lg:w-[50vw]">
          {step === 1 ? (
            <>
              <BasicDataForm
                formData={formData}
                setFormData={setFormData}
                terms={terms}
                setTerms={setTerms}
              />
            </>
          ) : (
            <PersonalDataForm formData={formData} setFormData={setFormData} />
          )}

          {step === 1 ? (
            <button
              className="my-[3vh] w-full rounded border-2 border-darkBlueAxion bg-darkBlueAxion p-3 font-bold text-white transition duration-300 hover:opacity-85"
              onClick={handleNext}
            >
              Proximo
            </button>
          ) : (
            <div className="mt-4 flex gap-4">
              <button
                className="my-[3vh] w-full rounded border-2 border-darkBlueAxion bg-transparent p-3 font-bold text-darkBlueAxion transition duration-300 hover:opacity-85"
                onClick={() => setStep(step - 1)}
              >
                Voltar
              </button>
              <button
                className="my-[3vh] w-full rounded border-2 border-darkBlueAxion bg-darkBlueAxion p-3 font-bold text-white transition duration-300 hover:opacity-85"
                onClick={handleNext}
                disabled={loading}
              >
                {loading ? <Spinner /> : "Finalizar Cadastro"}
              </button>
            </div>
          )}
        </div>

        <div className="relative h-full min-h-screen w-full self-start bg-[url('/foto.png')] bg-cover bg-top bg-no-repeat lg:w-[50vw]">
          <Messages />
        </div>
      </main>
      <Footer />
    </div>
  );
}
