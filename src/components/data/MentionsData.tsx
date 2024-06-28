export const MentionsBaseCardData = [
  {
    icon: "/Icons/user.svg",
    color: "bg-violet-600",
    value: 256,
    description: "Total de Menções",
  },
  {
    icon: "/Icons/users.svg",
    color: "bg-sky-600",
    value: 4026,
    description: "Redes sociais",
  },
  {
    icon: "/Icons/globe.svg",
    color: "bg-amber-500",
    value: 48,
    description: "Portais",
  },
  {
    icon: "/Icons/globe.svg",
    color: "bg-green-600",
    value: 48,
    description: "Portais",
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

export const MentionsDonutGraphData = {
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
      title: "Instagram",
      color: "bg-sky-900",
      value: 1624,
    },
    {
      title: "TikTok",
      color: "bg-sky-400",
      value: 1267,
    },
    {
      title: "Portais",
      color: "bg-sky-200",
      value: 1153,
    },
  ],
};

export const AuthorMentionsData = [
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

export const MentionsSourceData = {
  value: 38256,
  sources: [
    {
      name: "Instagram",
      icon: "/Logos/instagram.svg",
      trendingUp: true,
      value: 5932,
    },
    {
      name: "TikTok",
      icon: "/Logos/tiktok.svg",
      trendingUp: false,
      value: 5383,
    },
    {
      name: "Só Notícias",
      icon: "/Logos/soNoticias.png",
      trendingUp: true,
      value: 4825,
    },
    {
      name: "Uol",
      icon: "/Logos/uol.png",
      trendingUp: true,
      value: 4527,
    },
    {
      name: "G1",
      icon: "/Logos/g1.png",
      trendingUp: false,
      value: 4501,
    },
    {
      name: "Instagram",
      icon: "/Logos/instagram.svg",
      trendingUp: true,
      value: 5932,
    },
    {
      name: "TikTok",
      icon: "/Logos/tiktok.svg",
      trendingUp: false,
      value: 5383,
    },
    {
      name: "Só Notícias",
      icon: "/Logos/soNoticias.png",
      trendingUp: true,
      value: 4825,
    },
    {
      name: "Uol",
      icon: "/Logos/uol.png",
      trendingUp: true,
      value: 4527,
    },
    {
      name: "G1",
      icon: "/Logos/g1.png",
      trendingUp: false,
      value: 4501,
    },
  ],
};

export const PositiveNegativeCommentsData = {
  ChartOptions: {
    series: [
      {
        name: "Comentários Positivos",
        data: [35, 35, 62, 63, 12, 12, 60, 60, 51, 51, 81, 81],
      },
      {
        name: "Comentários Negativos",
        data: [75, 78, 38, 39, 38, 72, 72, 52, 52, 17, 17, 52],
      },
    ],
    options: {
      chart: {
        type: "line" as const,
        dropShadow: {
          enabled: true,
          color: "#000",
          top: 18,
          left: 7,
          blur: 10,
          opacity: 0.2,
        },
        style: {
          color: "white" as const,
        },
        zoom: {
          enabled: false,
        },
        toolbar: {
          show: false,
        },
        background: "transparent" as const,
      },
      colors: ["#16A34A", "#DC2626"],
      stroke: {
        curve: "smooth" as const,
        width: 3,
      },
      grid: {
        borderColor: "#a1a1a1",
        row: {
          colors: ["transparent", "transparent"], // takes an array which will be repeated on columns
          opacity: 0.5,
        },
      },
      xaxis: {
        categories: [
          "01 Jan",
          "02 Jan",
          "03 Jan",
          "04 Jan",
          "05 Jan",
          "06 Jan",
          "07 Jan",
          "08 Jan",
          "09 Jan",
          "10 Jan",
          "11 Jan",
          "12 Jan",
        ],
      },
      yaxis: {
        min: 10,
        max: 90,
      },
      legend: {
        show: true,
        showForSingleSeries: false,
        showForNullSeries: true,
        showForZeroSeries: true,
        position: "top" as const,
        horizontalAlign: "center" as const,
        floating: false,
        fontSize: "16px",
        fontFamily: "Helvetica, Arial",
        fontWeight: 500,
        formatter: undefined,
        inverseOrder: false,
        width: undefined,
        height: undefined,
        tooltipHoverFormatter: undefined,
        customLegendItems: [],
        offsetX: 0,
        offsetY: 15,
        labels: {
          colors: undefined,
          useSeriesColors: false,
        },
        markers: {
          width: 12,
          height: 12,
          strokeWidth: 0,
          strokeColor: "#fff",
          fillColors: undefined,
          radius: 12,
          customHTML: undefined,
          onClick: undefined,
          offsetX: 0,
          offsetY: 0,
        },
        itemMargin: {
          horizontal: 5,
          vertical: 0,
        },
        onItemClick: {
          toggleDataSeries: true,
        },
        onItemHover: {
          highlightDataSeries: true,
        },
      },
      theme: {
        mode: "light" as const,
      },
      responsive: [
        {
          breakpoint: 1024,
          options: {
            chart: {
              height: 200,
            },
          },
        },
        {
          breakpoint: 1440,
          options: {
            chart: {
              height: 175,
            },
          },
        },
        {
          breakpoint: 1920,
          options: {
            chart: {
              height: 250,
            },
          },
        },
        {
          breakpoint: 2561,
          options: {
            chart: {
              height: 250,
            },
          },
        },
      ],
    },
  },
  headerData: [
    {
      value: 1117,
      title: "Total Subscriptions",
      dot: false,
      color: "",
    },
    {
      value: 742,
      title: "Comentários positivos",
      dot: true,
      color: "bg-green-600",
    },
    {
      value: 259,
      title: "Comentários Negativos",
      dot: true,
      color: "bg-red-600",
    },
  ],
};

export const ScoreGaugeChartData = [
  {
    name: "Instagram",
    sentimentData: [
      {
        name: "Sentimento Médio",
        value: 600,
      },
    ],
  },
  {
    name: "TikTok",
    sentimentData: [
      {
        name: "Sentimento Médio",
        value: 800,
      },
    ],
  },
  {
    name: "Portais",
    sentimentData: [
      {
        name: "Sentimento Médio",
        value: 370,
      },
    ],
  },
];
