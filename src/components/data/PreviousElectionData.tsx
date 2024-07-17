export const CandidateBaseDataCardData = {
  PersonalData: {
    fullName: "Nome Completo do Candidato",
    gender: "Masculino",
    relationshipStatus: "Solteiro",
    schooling: "Ensino Médio Incompleto",
    profession: "Gerente",
    birthDate: new Date(),
    nationality: "Brasileiro",
    race: "Negro",
    email: "email.do.candidato@email.com",
  },
  ElectoralData: {
    electionName: "Nome do Candidato",
    electionNumber: 12345,
    electionType: "Municipal",
    electionRole: "Prefeito",
    electionResult: false,
    electionCoalition: {
      name: "Coligação do Candidato",
      length: 3,
    },
    electionPlace: {
      city: "Sinop",
      state: "MT",
    },
    electionParty: {
      number: 12,
      name: "Partido do Candidato",
    },
    url: "https://axioon.com/",
  },
  financialData: {
    electionSpend: 352000,
    firstRoundSpend: 352000,
    secondRoundSpend: 352000,
    declaredValue: 352000,
  },
};

export const IncomeDonutChartData = {
  ChartOptions: {
    series: [1624, 1267, 162],
    options: {
      labels: ["Female Candidates", "Male Candidates"],
      chart: {
        type: "donut" as const,
      },
      legend: {
        show: false,
      },
      dataLabels: {
        enabled: false,
      },
      stroke: {
        width: 0,
      },
      plotOptions: {
        pie: {
          expandOnClick: false,
          donut: {
            size: "80%",
            background: "transparent",
            labels: {
              show: true,
              name: {
                fontSize: "16px",
                color: undefined,
                offsetY: 5,
              },
              value: {
                fontSize: "15px",
                color: "#000",
              },
              total: {
                show: true,
                showAlways: true,
                label: "Total",
                fontSize: "22px",
                fontWeight: 600,
                color: "#000",
              },
            },
          },
        },
      },
      colors: ["#0C4A6E", "#38BDF8", "#BAE6FD"],
      responsive: [
        {
          breakpoint: 1024,
          options: {
            chart: {
              height: 150,
            },
          },
        },
        {
          breakpoint: 2560,
          options: {
            chart: {
              height: 200,
            },
          },
        },
        {
          breakpoint: 2561,
          options: {
            chart: {
              height: 450,
            },
          },
        },
      ],
    },
  },
  footerData: [
    {
      title: "Homem",
      color: "bg-sky-900",
      value: 1624,
    },
    {
      title: "Mulher",
      color: "bg-sky-400",
      value: 1267,
    },
    {
      title: "Indefinido",
      color: "bg-sky-200",
      value: 162,
    },
  ],
};

export const ExpensesDonutChartData = {
  ChartOptions: {
    series: [1624, 1267, 162],
    options: {
      labels: ["Female Candidates", "Male Candidates"],
      chart: {
        type: "donut" as const,
      },
      legend: {
        show: false,
      },
      dataLabels: {
        enabled: false,
      },
      stroke: {
        width: 0,
      },
      plotOptions: {
        pie: {
          expandOnClick: false,
          donut: {
            size: "80%",
            background: "transparent",
            labels: {
              show: true,
              name: {
                fontSize: "16px",
                color: undefined,
                offsetY: 5,
              },
              value: {
                fontSize: "15px",
                color: "#000",
              },
              total: {
                show: true,
                showAlways: true,
                label: "Total",
                fontSize: "22px",
                fontWeight: 600,
                color: "#000",
              },
            },
          },
        },
      },
      colors: ["#0C4A6E", "#38BDF8", "#BAE6FD"],
      responsive: [
        {
          breakpoint: 1024,
          options: {
            chart: {
              height: 150,
            },
          },
        },
        {
          breakpoint: 2560,
          options: {
            chart: {
              height: 200,
            },
          },
        },
        {
          breakpoint: 2561,
          options: {
            chart: {
              height: 450,
            },
          },
        },
      ],
    },
  },
  footerData: [
    {
      title: "Homem",
      color: "bg-sky-900",
      value: 1624,
    },
    {
      title: "Mulher",
      color: "bg-sky-400",
      value: 1267,
    },
    {
      title: "Indefinido",
      color: "bg-sky-200",
      value: 162,
    },
  ],
};

export const PreviousElectionsListsData = [
  {
    name: "Descrição",
    quantity: 5,
    value: 35000,
  },
  {
    name: "Descrição",
    quantity: 5,
    value: 35000,
  },
  {
    name: "Descrição",
    quantity: 5,
    value: 35000,
  },
  {
    name: "Descrição",
    quantity: 5,
    value: 35000,
  },
  {
    name: "Descrição",
    quantity: 5,
    value: 35000,
  },
  {
    name: "Descrição",
    quantity: 5,
    value: 35000,
  },
  {
    name: "Descrição",
    quantity: 5,
    value: 35000,
  },
  {
    name: "Descrição",
    quantity: 5,
    value: 35000,
  },
  {
    name: "Descrição",
    quantity: 5,
    value: 35000,
  },
  {
    name: "Descrição",
    quantity: 5,
    value: 35000,
  },
  {
    name: "Descrição",
    quantity: 5,
    value: 35000,
  },
];

export const PreviousElectionsTypeListsData = [
  {
    name: "Descrição",
    type: "Tipo",
    value: 35000,
  },
  {
    name: "Descrição",
    type: "Tipo",
    value: 35000,
  },
  {
    name: "Descrição",
    type: "Tipo",
    value: 35000,
  },
  {
    name: "Descrição",
    type: "Tipo",
    value: 35000,
  },
  {
    name: "Descrição",
    type: "Tipo",
    value: 35000,
  },
  {
    name: "Descrição",
    type: "Tipo",
    value: 35000,
  },
  {
    name: "Descrição",
    type: "Tipo",
    value: 35000,
  },
  {
    name: "Descrição",
    type: "Tipo",
    value: 35000,
  },
  {
    name: "Descrição",
    type: "Tipo",
    value: 35000,
  },
  {
    name: "Descrição",
    type: "Tipo",
    value: 35000,
  },
  {
    name: "Descrição",
    type: "Tipo",
    value: 35000,
  },
];

export const RepresentativesTableData = [
  {
    name: "Nome do Usuário",
    role: "Advogado",
    startDate: new Date(),
    endDate: new Date(),
  },
  {
    name: "Nome do Usuário",
    role: "Advogado",
    startDate: new Date(),
    endDate: new Date(),
  },
  {
    name: "Nome do Usuário",
    role: "Advogado",
    startDate: new Date(),
    endDate: new Date(),
  },
  {
    name: "Nome do Usuário",
    role: "Advogado",
    startDate: new Date(),
    endDate: new Date(),
  },
  {
    name: "Nome do Usuário",
    role: "Advogado",
    startDate: new Date(),
    endDate: new Date(),
  },
  {
    name: "Nome do Usuário",
    role: "Advogado",
    startDate: new Date(),
    endDate: new Date(),
  },
  {
    name: "Nome do Usuário",
    role: "Advogado",
    startDate: new Date(),
    endDate: new Date(),
  },
  {
    name: "Nome do Usuário",
    role: "Advogado",
    startDate: new Date(),
    endDate: new Date(),
  },
  {
    name: "Nome do Usuário",
    role: "Advogado",
    startDate: new Date(),
    endDate: new Date(),
  },
];

export const IncomeTableData = [
  {
    id: "1234132476134",
    name: "Nome do Usuário",
    type: "1234",
    date: new Date(),
    value: 25000,
  },
  {
    id: "1234132476134",
    name: "Nome do Usuário",
    type: "1234",
    date: new Date(),
    value: 25000,
  },
  {
    id: "1234132476134",
    name: "Nome do Usuário",
    type: "1234",
    date: new Date(),
    value: 25000,
  },
  {
    id: "1234132476134",
    name: "Nome do Usuário",
    type: "1234",
    date: new Date(),
    value: 25000,
  },
  {
    id: "1234132476134",
    name: "Nome do Usuário",
    type: "1234",
    date: new Date(),
    value: 25000,
  },
  {
    id: "1234132476134",
    name: "Nome do Usuário",
    type: "1234",
    date: new Date(),
    value: 25000,
  },
  {
    id: "1234132476134",
    name: "Nome do Usuário",
    type: "1234",
    date: new Date(),
    value: 25000,
  },
  {
    id: "1234132476134",
    name: "Nome do Usuário",
    type: "1234",
    date: new Date(),
    value: 25000,
  },
  {
    id: "1234132476134",
    name: "Nome do Usuário",
    type: "1234",
    date: new Date(),
    value: 25000,
  },
  {
    id: "1234132476134",
    name: "Nome do Usuário",
    type: "1234",
    date: new Date(),
    value: 25000,
  },
];

export const ExpensesTableData = [
  {
    name: "Nome do Fornecedor",
    description: "Despesa X",
    type: "Recurso X",
    expenseType: "Despesa X",
    beneficiary: "Advogado X",
    date: new Date(),
    value: 25000,
  },
  {
    name: "Nome do Fornecedor",
    description: "Despesa X",
    type: "Recurso X",
    expenseType: "Despesa X",
    beneficiary: "Advogado X",
    date: new Date(),
    value: 25000,
  },
  {
    name: "Nome do Fornecedor",
    description: "Despesa X",
    type: "Recurso X",
    expenseType: "Despesa X",
    beneficiary: "Advogado X",
    date: new Date(),
    value: 25000,
  },
  {
    name: "Nome do Fornecedor",
    description: "Despesa X",
    type: "Recurso X",
    expenseType: "Despesa X",
    beneficiary: "Advogado X",
    date: new Date(),
    value: 25000,
  },
  {
    name: "Nome do Fornecedor",
    description: "Despesa X",
    type: "Recurso X",
    expenseType: "Despesa X",
    beneficiary: "Advogado X",
    date: new Date(),
    value: 25000,
  },
  {
    name: "Nome do Fornecedor",
    description: "Despesa X",
    type: "Recurso X",
    expenseType: "Despesa X",
    beneficiary: "Advogado X",
    date: new Date(),
    value: 25000,
  },
  {
    name: "Nome do Fornecedor",
    description: "Despesa X",
    type: "Recurso X",
    expenseType: "Despesa X",
    beneficiary: "Advogado X",
    date: new Date(),
    value: 25000,
  },
  {
    name: "Nome do Fornecedor",
    description: "Despesa X",
    type: "Recurso X",
    expenseType: "Despesa X",
    beneficiary: "Advogado X",
    date: new Date(),
    value: 25000,
  },
  {
    name: "Nome do Fornecedor",
    description: "Despesa X",
    type: "Recurso X",
    expenseType: "Despesa X",
    beneficiary: "Advogado X",
    date: new Date(),
    value: 25000,
  },
  {
    name: "Nome do Fornecedor",
    description: "Despesa X",
    type: "Recurso X",
    expenseType: "Despesa X",
    beneficiary: "Advogado X",
    date: new Date(),
    value: 25000,
  },
  {
    name: "Nome do Fornecedor",
    description: "Despesa X",
    type: "Recurso X",
    expenseType: "Despesa X",
    beneficiary: "Advogado X",
    date: new Date(),
    value: 25000,
  },
];
