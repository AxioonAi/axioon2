import { maskPhone } from "@/utils/masks";

interface FormDataProps {
  formData: {
    name: string;
    email: string;
    mobilePhone: string;
    password: string;
  };
  setFormData: any;
  terms: boolean;
  setTerms: any;
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
        <span className="text-gray-80 text-sm">
          Preencha os campos logo abaixo
        </span>
      </div>

      <div className="formGroup mb-4 flex flex-col">
        <label className="text-sm font-bold" htmlFor="name">
          Nome Completo
        </label>
        <input
          className="border-gray-40 rounded border p-2 transition duration-300"
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
          className="border-gray-40 rounded border p-2 transition duration-300"
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
          className="border-gray-40 rounded border p-2 transition duration-300"
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
          className="border-gray-40 rounded border p-2 transition duration-300"
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
          <span className="text-darkBlueAxion hover:text-purpleAxion cursor-pointer transition duration-300">
            Termos de Uso
          </span>{" "}
          e da{" "}
          <span className="text-darkBlueAxion hover:text-purpleAxion cursor-pointer transition duration-300">
            Política de Privacidade
          </span>
          .
        </label>
      </div>
    </div>
  );
}
