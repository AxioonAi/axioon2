import { maskCpfCnpj } from "@/utils/masks";

interface FormDataProps {
  formData: {
    social_name: string;
    cpfCnpj: string;
    birth_date: string;
    sex: string;
  };
  setFormData: any;
}

export function PersonalDataForm({ formData, setFormData }: FormDataProps) {
  return (
    <div>
      <div className="registerFormHeader mb-8 flex flex-col items-center">
        <strong className="text-2xl">Dados Pessoais</strong>
        <span className="text-gray-80 text-sm">
          Preencha os campos logo abaixo
        </span>
      </div>

      <div className="formGroup mb-4 flex flex-col">
        <label className="text-sm font-bold" htmlFor="social_name">
          Nome Social
        </label>
        <input
          className="border-gray-40 rounded border p-2 transition duration-300"
          type="text"
          id="social_name"
          placeholder="Digite seu Nome Social"
          value={formData.social_name}
          onChange={(e) =>
            setFormData({ ...formData, social_name: e.target.value })
          }
        />
      </div>

      <div className="formGroup mb-4 flex flex-col">
        <label className="text-sm font-bold" htmlFor="cpf">
          Seu CPF
        </label>
        <input
          className="border-gray-40 rounded border p-2 transition duration-300"
          type="text"
          id="cpf"
          placeholder="Digite seu CPF"
          maxLength={14}
          value={formData.cpfCnpj}
          onChange={(e) =>
            setFormData({ ...formData, cpfCnpj: maskCpfCnpj(e.target.value) })
          }
        />
      </div>
      <div className="formGroup mb-4 flex flex-col">
        <label className="text-sm font-bold" htmlFor="bithDate">
          Data de Nascimento
        </label>
        <input
          className="border-gray-40 rounded border p-2 transition duration-300"
          type="date"
          placeholder="Sua Data de Nascimento"
          value={formData.birth_date}
          onChange={(e) =>
            setFormData({ ...formData, birth_date: e.target.value })
          }
        />
      </div>
      <label htmlFor="sex" className="mb-4 text-sm font-bold">
        Sexo
      </label>
      <div className="radioContainer flex gap-5">
        <div className="radioGroup flex items-center gap-2">
          <label
            className="radioSelector border-gray-60 flex h-6 w-6 items-center justify-center rounded-full border"
            htmlFor="MALE"
          >
            <div
              className={`h-5 w-5 rounded-full transition duration-300 ${formData.sex === "MALE" ? "bg-gray-60" : "bg-transparent"}`}
            />
          </label>
          <input
            className="hidden"
            type="radio"
            name="sex"
            id="MALE"
            value="MALE"
            checked={formData.sex === "MALE"}
            onChange={(e) => setFormData({ ...formData, sex: e.target.value })}
          />
          <label htmlFor="MALE">Masculino</label>
        </div>

        <div className="radioGroup flex items-center gap-2">
          <label
            className="radioSelector border-gray-60 flex h-6 w-6 items-center justify-center rounded-full border"
            htmlFor="FEMALE"
          >
            <div
              className={`h-5 w-5 rounded-full transition duration-300 ${formData.sex === "FEMALE" ? "bg-gray-60" : "bg-transparent"}`}
            />
          </label>
          <input
            className="hidden"
            type="radio"
            name="sex"
            id="FEMALE"
            value="FEMALE"
            checked={formData.sex === "FEMALE"}
            onChange={(e) => setFormData({ ...formData, sex: e.target.value })}
          />
          <label htmlFor="FEMALE">Feminino</label>
        </div>
      </div>
    </div>
  );
}
