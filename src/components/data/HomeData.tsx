export const SocialMediaBaseData = [
  {
    icon: "/Logos/instagram.svg",
    name: "Nome Do Usuário",
    username: "nome_do_usuario",
    dataPoints: [
      {
        value: 1450,
        name: "Publicações",
      },
      {
        value: 16437,
        name: "Seguidores",
      },
      {
        value: 1450,
        name: "Seguindo",
      },
    ],
    description:
      "🗳 Deputado Federal com 59.929 votos 💚 Anapolino 🏢 Empreendedor...",
  },
  {
    icon: "/Logos/facebook.svg",
    name: "Nome Do Usuário",
    username: "nome_do_usuario",
    dataPoints: [
      {
        value: 1450,
        name: "Publicações",
      },
      {
        value: 16437,
        name: "Seguidores",
      },
      {
        value: 1450,
        name: "Seguindo",
      },
    ],
    description:
      "35 pessoas falando sobre. Conta criada em 10 de agosto de 2014",
  },
  {
    icon: "/Logos/tiktok.svg",
    name: "Nome Do Usuário",
    username: "nome_do_usuario",
    dataPoints: [
      {
        value: 1450,
        name: "Publicações",
      },
      {
        value: 16437,
        name: "Seguidores",
      },
      {
        value: 1450,
        name: "Seguindo",
      },
    ],
    description:
      "🔰 Prefeito de Cocalzinho de Goiás Vereador por 3 Legislaturas ⬆️",
  },
  {
    icon: "/Logos/youtube.svg",
    name: "Nome Do Usuário",
    username: "nome_do_usuario",
    dataPoints: [
      {
        value: 1450,
        name: "Publicações",
      },
      {
        value: 16437,
        name: "Seguidores",
      },
      {
        value: 1450,
        name: "Seguindo",
      },
    ],
    description: "Descrição do canal aqui Conta criada em 10 de agosto de 2014",
  },
];

export const CommentsSummaryData = {
  value: 4289,
  valueChange: 1.02,
  comments: {
    total: 3734,
    positive: 987,
    neutral: 1073,
    negative: 1674,
  },
};

export const DefendantsAndDetractorsData = [
  {
    name: "Saoergij",
    date: "28/02/2023 - 13:00",
    value: 65,
  },
  {
    name: "Bwouehsd",
    date: "23/06/2023 - 12:00",
    value: 23,
  },
  {
    name: "Hbopaerh ",
    date: "12/03/2023 - 09:00",
    value: 41,
  },
  {
    name: "Saoergij",
    date: "28/02/2023 - 13:00",
    value: 65,
  },
  {
    name: "Bwouehsd",
    date: "23/06/2023 - 12:00",
    value: 23,
  },
  {
    name: "Hbopaerh ",
    date: "12/03/2023 - 09:00",
    value: 41,
  },
  {
    name: "Saoergij",
    date: "28/02/2023 - 13:00",
    value: 65,
  },
  {
    name: "Bwouehsd",
    date: "23/06/2023 - 12:00",
    value: 23,
  },
  {
    name: "Hbopaerh ",
    date: "12/03/2023 - 09:00",
    value: 41,
  },
];

export const CommentsDonutGraphData = {
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

export const WordsListData = [
  {
    name: "Saoergij",
    sentiment: "positivo",
    value: 65,
  },
  {
    name: "Bwouehsd",
    sentiment: "negativo",
    value: 23,
  },
  {
    name: "Hbopaerh ",
    sentiment: "neutra",
    value: 41,
  },
  {
    name: "Saoergij",
    sentiment: "positivo",
    value: 65,
  },
  {
    name: "Bwouehsd",
    sentiment: "negativo",
    value: 23,
  },
  {
    name: "Hbopaerh ",
    sentiment: "neutra",
    value: 41,
  },
  {
    name: "Saoergij",
    sentiment: "positivo",
    value: 65,
  },
  {
    name: "Bwouehsd",
    sentiment: "negativo",
    value: 23,
  },
  {
    name: "Hbopaerh ",
    sentiment: "neutra",
    value: 41,
  },
  {
    name: "Saoergij",
    sentiment: "positivo",
    value: 65,
  },
  {
    name: "Bwouehsd",
    sentiment: "negativo",
    value: 23,
  },
  {
    name: "Hbopaerh ",
    sentiment: "neutra",
    value: 41,
  },
];

export const EngagementTimesData = {
  series: [
    {
      data: [400, 430, 448, 470, 540, 580],
    },
  ],
  options: {
    chart: {
      type: "bar" as const,
      height: 350,
      toolbar: {
        show: false,
      },
    },
    plotOptions: {
      bar: {
        borderRadius: 2,
        borderRadiusApplication: "end" as const,
        horizontal: true,
        barHeight: "30%",
      },
    },
    dataLabels: {
      enabled: false,
    },
    xaxis: {
      categories: [
        "00:00 - 04:00",
        "04:00 - 08:00",
        "08:00 - 12:00",
        "12:00 - 16:00",
        "16:00 - 20:00",
        "20:00 - 00:00",
      ],
      axisTicks: {
        show: false,
      },
      labels: {
        show: false,
      },
    },
  },
};

export const WordCloudData = {
  WordCloudWords: [
    {
      text: "Saoergij",
      value: 65,
    },
    {
      text: "Bwouehsd",
      value: 23,
    },
    {
      text: "Hbopaerh ",
      value: 41,
    },
    {
      text: "WRHT",
      value: 126,
    },
    {
      text: "Bwoue,metyhsd",
      value: 3,
    },
    {
      text: "wrtub ",
      value: 43,
    },
    {
      text: ",uyr",
      value: 93,
    },
    {
      text: "Bwouehawertsd",
      value: 64,
    },
    {
      text: "dfgfbzz ",
      value: 184,
    },
  ],
  options: {
    rotations: 0,
    colors: ["#556AFB", "#33429A", "#0A27E6"],
    fontWeight: "700",
    fontFamily: "Impact",
    fontSizes: [20, 80] as [number, number],
  },
};
