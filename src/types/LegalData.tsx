export interface LegalDataProps {
  address: {
    address: string;
    addressType: string;
    city: string;
    country: string;
    id: string;
    neighborhood: string;
    politician_id: string;
    state: string;
    zipcode: string;
  }[];
  campaign_number: number;
  city_id: string;
  cpf: string;
  economicRelationship: {
    cnpj: string;
    country: string;
    endDate: string;
    id: string;
    name: string;
    politician_id: string;
    relationshipLevel: string;
    relationshipType: string;
    startDate: string;
  }[];
  facebook: string;
  full_name: string;
  id: string;
  incomeTax: {
    bankAgency: string;
    id: string;
    politician_id: string;
    situation: string;
    year: string;
  }[];
  instagram: string;
  legalData: {
    activePole: string | null;
    area: string | null;
    causeValue: number | null;
    class: string | null;
    court: string | null;
    degree: string | null;
    id: string | null;
    judgingBy: string | null;
    justiceSecret: boolean | null;
    lastUpdate: string | null;
    passivePole: string | null;
    politician_id: string | null;
    startDate: string | null;
    status: string | null;
    subject: string | null;
    system: string | null;
    url: string | null;
  }[];
  personalData: {
    estimated_patrimony: string;
    estimated_recipe: string;
    fatherName: string;
    federalCrime: string;
    federalCrimeCertificate: string;
    federalStatus: string;
    id: string;
    politician_id: string;
  }[];
  political_group_id: string;
  role: string;
  social_name: string;
  status: string;
  tiktok: string;
  youtube: string;
}
