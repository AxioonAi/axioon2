import { Dispatch } from "react";
import { maskPhone } from "@/utils/masks";

interface FormProps {
  name: string;
  email: string;
  social_name: string;
  password: string;
  cpfCnpj: string;
  birth_date: string;
  sex: string;
  mobilePhone: string;
}

interface FormDataProps {
  formData: FormProps;
  setFormData: Dispatch<FormProps>;
  terms: boolean;
  setTerms: Dispatch<boolean>;
}

export function BasicDataForm({
  formData,
  setFormData,
  terms,
  setTerms,
}: FormDataProps) {
  return (
    <div>
      <div className="registerFormHeader mb-8 flex flex-col items-center">
        <strong className="text-2xl">Dados Básicos</strong>
        <span className="text-sm text-gray-80">
          Preencha os campos logo abaixo
        </span>
      </div>

      <div className="formGroup mb-4 flex flex-col">
        <label className="text-sm font-bold" htmlFor="name">
          Nome Completo
        </label>
        <input
          className="rounded border border-gray-40 p-2 transition duration-300"
          type="text"
          id="name"
          placeholder="Seu nome"
          value={formData.name}
          onChange={(e) => setFormData({ ...formData, name: e.target.value })}
        />
      </div>
      <div className="formGroup mb-4 flex flex-col">
        <label className="text-sm font-bold" htmlFor="email">
          Email
        </label>
        <input
          className="rounded border border-gray-40 p-2 transition duration-300"
          type="email"
          placeholder="Digite seu email"
          value={formData.email}
          onChange={(e) => setFormData({ ...formData, email: e.target.value })}
        />
      </div>
      <div className="formGroup mb-4 flex flex-col">
        <label className="text-sm font-bold" htmlFor="phoneNumber">
          Telefone
        </label>
        <input
          className="rounded border border-gray-40 p-2 transition duration-300"
          type="text"
          id="phoneNumber"
          maxLength={14}
          value={formData.mobilePhone}
          placeholder="Digite seu telefone"
          onChange={(e) =>
            setFormData({ ...formData, mobilePhone: maskPhone(e.target.value) })
          }
        />
      </div>
      <div className="formGroup mb-4 flex flex-col">
        <label className="text-sm font-bold" htmlFor="password">
          Crie uma senha
        </label>
        <input
          className="rounded border border-gray-40 p-2 transition duration-300"
          type="password"
          placeholder="Crie uma senha segura"
          value={formData.password}
          onChange={(e) =>
            setFormData({ ...formData, password: e.target.value })
          }
        />
      </div>

      <div className="termsContainer flex items-center gap-1 text-sm">
        <input
          type="checkbox"
          id="terms"
          checked={terms}
          onChange={() => setTerms(!terms)}
        />
        <label htmlFor="terms">
          Ao informar meus dados, tenho ciência dos{" "}
          <span className="cursor-pointer text-darkBlueAxion transition duration-300 hover:text-purpleAxion">
            Termos de Uso
          </span>{" "}
          e da{" "}
          <span className="cursor-pointer text-darkBlueAxion transition duration-300 hover:text-purpleAxion">
            Política de Privacidade
          </span>
          .
        </label>
      </div>
    </div>
  );
}
