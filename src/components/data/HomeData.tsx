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
    exists: true,
    platformName: "Instagram",
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
    exists: true,
    platformName: "Facebook",
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
    exists: true,
    platformName: "TikTok",
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
    exists: false,
    platformName: "YouTube",
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
      labels: ["Feminino", "Masculino", "Outros"],
      chart: {
        type: "donut" as const,
        animations: {
          enabled: false,
        },
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

export const CommentsSentimentDonutGraphData = {
  ChartOptions: {
    series: [1624, 1267, 162],
    options: {
      labels: ["Positivo", "Neutro", "Negativo"],
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
              height: 150,
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
      toolbar: {
        show: false,
      },
      animations: {
        enabled: false,
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
        "04:00 - 10:00",
        "10:00 - 14:00",
        "14:00 - 18:00",
        "18:00 - 21:00",
        "21:00 - 00:00",
      ],
      axisTicks: {
        show: false,
      },
      labels: {
        show: false,
      },
    },
    responsive: [
      {
        breakpoint: 1024,
        options: {
          chart: {
            height: 325,
          },
        },
      },

      {
        breakpoint: 1920,
        options: {
          chart: {
            height: 300,
          },
        },
      },
      {
        breakpoint: 2560,
        options: {
          chart: {
            height: 350,
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
    fontSizes: [10, 60] as [number, number],
    deterministic: true,
    enableOptimizations: true,
    enableTooltip: false,
    transitionDuration: 0,
  },
};

export const PostsAndCommentsData = [
  {
    socialMedia: "tiktok",
    url: "tiktok.com",
    userName: "@username",
    followers: 3500,
    text: "my text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an...",
    sentiment: "Positivo",
    likesCount: 31000,
    commentsCount: 31000,
    viewsCount: 31000,
    date: "23/10/2023 - 16:34",
    comments: [
      {
        photo: "/photo.svg",
        name: "Nome",
        comment:
          "my text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an...",
        likesCount: 31000,
        commentsCount: 31000,
        sentiment: 700,
        date: "23/10/2023 - 16:34",
      },
      {
        photo: "/photo.svg",
        name: "Nome",
        comment:
          "my text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an...",
        likesCount: 31000,
        commentsCount: 31000,
        sentiment: 700,
        date: "23/10/2023 - 16:34",
      },
      {
        photo: "/photo.svg",
        name: "Nome",
        comment:
          "my text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an...",
        likesCount: 31000,
        commentsCount: 31000,
        sentiment: 700,
        date: "23/10/2023 - 16:34",
      },
      {
        photo: "/photo.svg",
        name: "Nome",
        comment:
          "my text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an...",
        likesCount: 31000,
        commentsCount: 31000,
        sentiment: 700,
        date: "23/10/2023 - 16:34",
      },
    ],
  },
  {
    socialMedia: "youtube",
    url: "tiktok.com",
    userName: "@username",
    followers: 3500,
    text: "my text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an...",
    sentiment: "Negativo",
    likesCount: 31000,
    commentsCount: 31000,
    viewsCount: 31000,
    date: "23/10/2023 - 16:34",
    comments: [
      {
        photo: "/photo.svg",
        name: "Nome",
        comment:
          "my text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an...",
        likesCount: 31000,
        commentsCount: 31000,
        sentiment: 700,
        date: "23/10/2023 - 16:34",
      },
      {
        photo: "/photo.svg",
        name: "Nome",
        comment:
          "my text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an...",
        likesCount: 31000,
        commentsCount: 31000,
        sentiment: 700,
        date: "23/10/2023 - 16:34",
      },
      {
        photo: "/photo.svg",
        name: "Nome",
        comment:
          "my text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an...",
        likesCount: 31000,
        commentsCount: 31000,
        sentiment: 700,
        date: "23/10/2023 - 16:34",
      },
      {
        photo: "/photo.svg",
        name: "Nome",
        comment:
          "my text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an...",
        likesCount: 31000,
        commentsCount: 31000,
        sentiment: 700,
        date: "23/10/2023 - 16:34",
      },
    ],
  },
  {
    socialMedia: "facebook",
    url: "tiktok.com",
    userName: "@username",
    followers: 3500,
    text: "my text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an...",
    sentiment: "Negativo",
    likesCount: 31000,
    commentsCount: 31000,
    viewsCount: 31000,
    date: "23/10/2023 - 16:34",
    comments: [
      {
        photo: "/photo.svg",
        name: "Nome",
        comment:
          "my text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an...",
        likesCount: 31000,
        commentsCount: 31000,
        sentiment: 700,
        date: "23/10/2023 - 16:34",
      },
      {
        photo: "/photo.svg",
        name: "Nome",
        comment:
          "my text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an...",
        likesCount: 31000,
        commentsCount: 31000,
        sentiment: 700,
        date: "23/10/2023 - 16:34",
      },
      {
        photo: "/photo.svg",
        name: "Nome",
        comment:
          "my text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an...",
        likesCount: 31000,
        commentsCount: 31000,
        sentiment: 700,
        date: "23/10/2023 - 16:34",
      },
      {
        photo: "/photo.svg",
        name: "Nome",
        comment:
          "my text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an...",
        likesCount: 31000,
        commentsCount: 31000,
        sentiment: 700,
        date: "23/10/2023 - 16:34",
      },
    ],
  },
  {
    socialMedia: "facebook",
    url: "tiktok.com",
    userName: "@username",
    followers: 3500,
    text: "my text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an...",
    sentiment: "Negativo",
    likesCount: 31000,
    commentsCount: 31000,
    viewsCount: 31000,
    date: "23/10/2023 - 16:34",
    comments: [
      {
        photo: "/photo.svg",
        name: "Nome",
        comment:
          "my text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an...",
        likesCount: 31000,
        commentsCount: 31000,
        sentiment: 700,
        date: "23/10/2023 - 16:34",
      },
      {
        photo: "/photo.svg",
        name: "Nome",
        comment:
          "my text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an...",
        likesCount: 31000,
        commentsCount: 31000,
        sentiment: 700,
        date: "23/10/2023 - 16:34",
      },
      {
        photo: "/photo.svg",
        name: "Nome",
        comment:
          "my text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an...",
        likesCount: 31000,
        commentsCount: 31000,
        sentiment: 700,
        date: "23/10/2023 - 16:34",
      },
      {
        photo: "/photo.svg",
        name: "Nome",
        comment:
          "my text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an...",
        likesCount: 31000,
        commentsCount: 31000,
        sentiment: 700,
        date: "23/10/2023 - 16:34",
      },
    ],
  },
  {
    socialMedia: "instagram",
    url: "tiktok.com",
    userName: "@username",
    followers: 3500,
    text: "my text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an...",
    sentiment: "Negativo",
    likesCount: 31000,
    commentsCount: 31000,
    viewsCount: 31000,
    date: "23/10/2023 - 16:34",
    comments: [
      {
        photo: "/photo.svg",
        name: "Nome",
        comment:
          "my text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an...",
        likesCount: 31000,
        commentsCount: 31000,
        sentiment: 700,
        date: "23/10/2023 - 16:34",
      },
      {
        photo: "/photo.svg",
        name: "Nome",
        comment:
          "my text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an...",
        likesCount: 31000,
        commentsCount: 31000,
        sentiment: 700,
        date: "23/10/2023 - 16:34",
      },
      {
        photo: "/photo.svg",
        name: "Nome",
        comment:
          "my text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an...",
        likesCount: 31000,
        commentsCount: 31000,
        sentiment: 700,
        date: "23/10/2023 - 16:34",
      },
      {
        photo: "/photo.svg",
        name: "Nome",
        comment:
          "my text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an...",
        likesCount: 31000,
        commentsCount: 31000,
        sentiment: 700,
        date: "23/10/2023 - 16:34",
      },
    ],
  },
  {
    socialMedia: "instagram",
    url: "tiktok.com",
    userName: "@username",
    followers: 3500,
    text: "my text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an...",
    sentiment: "Negativo",
    likesCount: 31000,
    commentsCount: 31000,
    viewsCount: 31000,
    date: "23/10/2023 - 16:34",
    comments: [
      {
        photo: "/photo.svg",
        name: "Nome",
        comment:
          "my text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an...",
        likesCount: 31000,
        commentsCount: 31000,
        sentiment: 700,
        date: "23/10/2023 - 16:34",
      },
      {
        photo: "/photo.svg",
        name: "Nome",
        comment:
          "my text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an...",
        likesCount: 31000,
        commentsCount: 31000,
        sentiment: 700,
        date: "23/10/2023 - 16:34",
      },
      {
        photo: "/photo.svg",
        name: "Nome",
        comment:
          "my text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an...",
        likesCount: 31000,
        commentsCount: 31000,
        sentiment: 700,
        date: "23/10/2023 - 16:34",
      },
      {
        photo: "/photo.svg",
        name: "Nome",
        comment:
          "my text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an...",
        likesCount: 31000,
        commentsCount: 31000,
        sentiment: 700,
        date: "23/10/2023 - 16:34",
      },
    ],
  },
  {
    socialMedia: "tiktok",
    url: "tiktok.com",
    userName: "@username",
    followers: 3500,
    text: "my text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an...",
    sentiment: "Negativo",
    likesCount: 31000,
    commentsCount: 31000,
    viewsCount: 31000,
    date: "23/10/2023 - 16:34",
    comments: [
      {
        photo: "/photo.svg",
        name: "Nome",
        comment:
          "my text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an...",
        likesCount: 31000,
        commentsCount: 31000,
        sentiment: 700,
        date: "23/10/2023 - 16:34",
      },
      {
        photo: "/photo.svg",
        name: "Nome",
        comment:
          "my text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an...",
        likesCount: 31000,
        commentsCount: 31000,
        sentiment: 700,
        date: "23/10/2023 - 16:34",
      },
      {
        photo: "/photo.svg",
        name: "Nome",
        comment:
          "my text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an...",
        likesCount: 31000,
        commentsCount: 31000,
        sentiment: 700,
        date: "23/10/2023 - 16:34",
      },
      {
        photo: "/photo.svg",
        name: "Nome",
        comment:
          "my text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an...",
        likesCount: 31000,
        commentsCount: 31000,
        sentiment: 700,
        date: "23/10/2023 - 16:34",
      },
    ],
  },
  {
    socialMedia: "tiktok",
    url: "tiktok.com",
    userName: "@username",
    followers: 3500,
    text: "my text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an...",
    sentiment: "Negativo",
    likesCount: 31000,
    commentsCount: 31000,
    viewsCount: 31000,
    date: "23/10/2023 - 16:34",
    comments: [
      {
        photo: "/photo.svg",
        name: "Nome",
        comment:
          "my text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an...",
        likesCount: 31000,
        commentsCount: 31000,
        sentiment: 700,
        date: "23/10/2023 - 16:34",
      },
      {
        photo: "/photo.svg",
        name: "Nome",
        comment:
          "my text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an...",
        likesCount: 31000,
        commentsCount: 31000,
        sentiment: 700,
        date: "23/10/2023 - 16:34",
      },
      {
        photo: "/photo.svg",
        name: "Nome",
        comment:
          "my text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an...",
        likesCount: 31000,
        commentsCount: 31000,
        sentiment: 700,
        date: "23/10/2023 - 16:34",
      },
      {
        photo: "/photo.svg",
        name: "Nome",
        comment:
          "my text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an...",
        likesCount: 31000,
        commentsCount: 31000,
        sentiment: 700,
        date: "23/10/2023 - 16:34",
      },
    ],
  },
  {
    socialMedia: "youtube",
    url: "tiktok.com",
    userName: "@username",
    followers: 3500,
    text: "my text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an...",
    sentiment: "Negativo",
    likesCount: 31000,
    commentsCount: 31000,
    viewsCount: 31000,
    date: "23/10/2023 - 16:34",
    comments: [
      {
        photo: "/photo.svg",
        name: "Nome",
        comment:
          "my text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an...",
        likesCount: 31000,
        commentsCount: 31000,
        sentiment: 700,
        date: "23/10/2023 - 16:34",
      },
      {
        photo: "/photo.svg",
        name: "Nome",
        comment:
          "my text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an...",
        likesCount: 31000,
        commentsCount: 31000,
        sentiment: 700,
        date: "23/10/2023 - 16:34",
      },
      {
        photo: "/photo.svg",
        name: "Nome",
        comment:
          "my text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an...",
        likesCount: 31000,
        commentsCount: 31000,
        sentiment: 700,
        date: "23/10/2023 - 16:34",
      },
      {
        photo: "/photo.svg",
        name: "Nome",
        comment:
          "my text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an...",
        likesCount: 31000,
        commentsCount: 31000,
        sentiment: 700,
        date: "23/10/2023 - 16:34",
      },
    ],
  },
  {
    socialMedia: "facebook",
    url: "tiktok.com",
    userName: "@username",
    followers: 3500,
    text: "my text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an...",
    sentiment: "Negativo",
    likesCount: 31000,
    commentsCount: 31000,
    viewsCount: 31000,
    date: "23/10/2023 - 16:34",
    comments: [
      {
        photo: "/photo.svg",
        name: "Nome",
        comment:
          "my text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an...",
        likesCount: 31000,
        commentsCount: 31000,
        sentiment: 700,
        date: "23/10/2023 - 16:34",
      },
      {
        photo: "/photo.svg",
        name: "Nome",
        comment:
          "my text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an...",
        likesCount: 31000,
        commentsCount: 31000,
        sentiment: 700,
        date: "23/10/2023 - 16:34",
      },
      {
        photo: "/photo.svg",
        name: "Nome",
        comment:
          "my text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an...",
        likesCount: 31000,
        commentsCount: 31000,
        sentiment: 700,
        date: "23/10/2023 - 16:34",
      },
      {
        photo: "/photo.svg",
        name: "Nome",
        comment:
          "my text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an...",
        likesCount: 31000,
        commentsCount: 31000,
        sentiment: 700,
        date: "23/10/2023 - 16:34",
      },
    ],
  },
  {
    socialMedia: "facebook",
    url: "tiktok.com",
    userName: "@username",
    followers: 3500,
    text: "my text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an...",
    sentiment: "Negativo",
    likesCount: 31000,
    commentsCount: 31000,
    viewsCount: 31000,
    date: "23/10/2023 - 16:34",
    comments: [
      {
        photo: "/photo.svg",
        name: "Nome",
        comment:
          "my text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an...",
        likesCount: 31000,
        commentsCount: 31000,
        sentiment: 700,
        date: "23/10/2023 - 16:34",
      },
      {
        photo: "/photo.svg",
        name: "Nome",
        comment:
          "my text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an...",
        likesCount: 31000,
        commentsCount: 31000,
        sentiment: 700,
        date: "23/10/2023 - 16:34",
      },
      {
        photo: "/photo.svg",
        name: "Nome",
        comment:
          "my text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an...",
        likesCount: 31000,
        commentsCount: 31000,
        sentiment: 700,
        date: "23/10/2023 - 16:34",
      },
      {
        photo: "/photo.svg",
        name: "Nome",
        comment:
          "my text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an...",
        likesCount: 31000,
        commentsCount: 31000,
        sentiment: 700,
        date: "23/10/2023 - 16:34",
      },
    ],
  },
  {
    socialMedia: "instagram",
    url: "tiktok.com",
    userName: "@username",
    followers: 3500,
    text: "my text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an...",
    sentiment: "Negativo",
    likesCount: 31000,
    commentsCount: 31000,
    viewsCount: 31000,
    date: "23/10/2023 - 16:34",
    comments: [
      {
        photo: "/photo.svg",
        name: "Nome",
        comment:
          "my text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an...",
        likesCount: 31000,
        commentsCount: 31000,
        sentiment: 700,
        date: "23/10/2023 - 16:34",
      },
      {
        photo: "/photo.svg",
        name: "Nome",
        comment:
          "my text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an...",
        likesCount: 31000,
        commentsCount: 31000,
        sentiment: 700,
        date: "23/10/2023 - 16:34",
      },
      {
        photo: "/photo.svg",
        name: "Nome",
        comment:
          "my text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an...",
        likesCount: 31000,
        commentsCount: 31000,
        sentiment: 700,
        date: "23/10/2023 - 16:34",
      },
      {
        photo: "/photo.svg",
        name: "Nome",
        comment:
          "my text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an...",
        likesCount: 31000,
        commentsCount: 31000,
        sentiment: 700,
        date: "23/10/2023 - 16:34",
      },
    ],
  },
  {
    socialMedia: "instagram",
    url: "tiktok.com",
    userName: "@username",
    followers: 3500,
    text: "my text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an...",
    sentiment: "Negativo",
    likesCount: 31000,
    commentsCount: 31000,
    viewsCount: 31000,
    date: "23/10/2023 - 16:34",
    comments: [
      {
        photo: "/photo.svg",
        name: "Nome",
        comment:
          "my text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an...",
        likesCount: 31000,
        commentsCount: 31000,
        sentiment: 700,
        date: "23/10/2023 - 16:34",
      },
      {
        photo: "/photo.svg",
        name: "Nome",
        comment:
          "my text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an...",
        likesCount: 31000,
        commentsCount: 31000,
        sentiment: 700,
        date: "23/10/2023 - 16:34",
      },
      {
        photo: "/photo.svg",
        name: "Nome",
        comment:
          "my text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an...",
        likesCount: 31000,
        commentsCount: 31000,
        sentiment: 700,
        date: "23/10/2023 - 16:34",
      },
      {
        photo: "/photo.svg",
        name: "Nome",
        comment:
          "my text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an...",
        likesCount: 31000,
        commentsCount: 31000,
        sentiment: 700,
        date: "23/10/2023 - 16:34",
      },
    ],
  },
  {
    socialMedia: "tiktok",
    url: "tiktok.com",
    userName: "@username",
    followers: 3500,
    text: "my text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an...",
    sentiment: "Negativo",
    likesCount: 31000,
    commentsCount: 31000,
    viewsCount: 31000,
    date: "23/10/2023 - 16:34",
    comments: [
      {
        photo: "/photo.svg",
        name: "Nome",
        comment:
          "my text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an...",
        likesCount: 31000,
        commentsCount: 31000,
        sentiment: 700,
        date: "23/10/2023 - 16:34",
      },
      {
        photo: "/photo.svg",
        name: "Nome",
        comment:
          "my text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an...",
        likesCount: 31000,
        commentsCount: 31000,
        sentiment: 700,
        date: "23/10/2023 - 16:34",
      },
      {
        photo: "/photo.svg",
        name: "Nome",
        comment:
          "my text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an...",
        likesCount: 31000,
        commentsCount: 31000,
        sentiment: 700,
        date: "23/10/2023 - 16:34",
      },
      {
        photo: "/photo.svg",
        name: "Nome",
        comment:
          "my text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an...",
        likesCount: 31000,
        commentsCount: 31000,
        sentiment: 700,
        date: "23/10/2023 - 16:34",
      },
    ],
  },
];

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
        animations: {
          enabled: false,
        },
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
        axisTicks: {
          show: false,
        },
        labels: {
          show: false,
        },
        axisBorder: {
          show: false,
        },
      },
      yaxis: {
        stepSize: 10,
      },
      legend: {
        show: false,
      },
      theme: {
        mode: "light" as const,
      },
      responsive: [
        {
          breakpoint: 1024,
          options: {
            chart: {
              height: 275,
            },
          },
        },

        {
          breakpoint: 1920,
          options: {
            chart: {
              height: 175,
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
              height: 325,
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

export const IndicatorsBaseCardData = [
  {
    IndicatorsData: {
      name: "Seguidores",
      value: 16437,
      trendingUp: true,
      trendingValue: "40%",
    },
    ChartOptions: {
      series: [
        {
          name: "Desktops",
          data: [10, 41, 35, 51, 49, 62, 69, 91, 148],
        },
      ],
      options: {
        chart: {
          type: "line" as const,
          zoom: {
            enabled: false,
          },
          toolbar: {
            show: false,
          },
        },
        colors: ["#845ADF"],
        dataLabels: {
          enabled: false,
        },
        stroke: {
          curve: "smooth" as const,
          width: 2,
        },
        title: {
          text: "",
        },
        grid: {
          show: false,
        },
        xaxis: {
          labels: {
            show: false,
          },
          axisTicks: {
            show: false,
          },
          axisBorder: {
            show: false,
          },
        },
        yaxis: {
          labels: {
            show: false,
          },
        },
        legend: {
          show: false,
        },
        theme: {
          mode: "light" as const,
        },
        responsive: [
          {
            breakpoint: 2660,
            options: {
              chart: {
                height: 75,
              },
            },
          },
          {
            breakpoint: 2561,
            options: {
              chart: {
                height: 100,
              },
            },
          },
        ],
      },
    },
  },
  {
    IndicatorsData: {
      name: "Engajamento",
      value: 16437,
      trendingUp: true,
      trendingValue: "40%",
    },
    ChartOptions: {
      series: [
        {
          name: "Desktops",
          data: [10, 41, 35, 51, 49, 62, 69, 91, 148],
        },
      ],
      options: {
        chart: {
          type: "line" as const,
          zoom: {
            enabled: false,
          },
          toolbar: {
            show: false,
          },
        },
        colors: ["#845ADF"],
        dataLabels: {
          enabled: false,
        },
        stroke: {
          curve: "smooth" as const,
          width: 2,
        },
        title: {
          text: "",
        },
        grid: {
          show: false,
        },
        xaxis: {
          labels: {
            show: false,
          },
          axisTicks: {
            show: false,
          },
          axisBorder: {
            show: false,
          },
        },
        yaxis: {
          labels: {
            show: false,
          },
        },
        legend: {
          show: false,
        },
        theme: {
          mode: "light" as const,
        },
        responsive: [
          {
            breakpoint: 2660,
            options: {
              chart: {
                height: 75,
              },
            },
          },
          {
            breakpoint: 2561,
            options: {
              chart: {
                height: 100,
              },
            },
          },
        ],
      },
    },
  },
  {
    IndicatorsData: {
      name: "Publicações",
      value: 16437,
      trendingUp: true,
      trendingValue: "40%",
    },
    ChartOptions: {
      series: [
        {
          name: "Desktops",
          data: [10, 41, 35, 51, 49, 62, 69, 91, 148],
        },
      ],
      options: {
        chart: {
          type: "line" as const,
          zoom: {
            enabled: false,
          },
          toolbar: {
            show: false,
          },
        },
        colors: ["#845ADF"],
        dataLabels: {
          enabled: false,
        },
        stroke: {
          curve: "smooth" as const,
          width: 2,
        },
        title: {
          text: "",
        },
        grid: {
          show: false,
        },
        xaxis: {
          labels: {
            show: false,
          },
          axisTicks: {
            show: false,
          },
          axisBorder: {
            show: false,
          },
        },
        yaxis: {
          labels: {
            show: false,
          },
        },
        legend: {
          show: false,
        },
        theme: {
          mode: "light" as const,
        },
        responsive: [
          {
            breakpoint: 2660,
            options: {
              chart: {
                height: 75,
              },
            },
          },
          {
            breakpoint: 2561,
            options: {
              chart: {
                height: 100,
              },
            },
          },
        ],
      },
    },
  },
];

export const ScoreGaugeChartData = {
  name: "Instagram",
  sentimentData: [
    {
      name: "Sentimento Médio",
      value: 600,
    },
  ],
};

export const LineGradientChartData = {
  ChartOptions: {
    series: [
      {
        name: "Desktops",
        data: [170, 572, 751, 82, 1063, 653, 553, 23, 735],
      },
    ],
    options: {
      chart: {
        type: "line" as const,
        zoom: {
          enabled: false,
        },
        toolbar: {
          show: false,
        },
        offsetY: 20,
        dropShadow: {
          enabled: true,
          top: 1,
          left: 1,
          blur: 1,
          opacity: 0.1,
        },
        animations: {
          enabled: false,
        },
      },
      dataLabels: {
        enabled: false,
      },
      stroke: {
        curve: "smooth" as const,
        width: 1,
        colors: ["#845ADF"],
      },
      grid: {
        show: false,
      },
      xaxis: {
        axisBorder: {
          show: false,
        },
        axisTicks: {
          show: false,
        },
        labels: {
          show: false,
        },
      },
      yaxis: {
        show: false,
      },

      fill: {
        type: "gradient",
        colors: ["#845ADF"],
        gradient: {
          shadeIntensity: 1,
          opacityFrom: 0.5,
          opacityTo: 0.2,
          stops: [50, 100, 100],
        },
      },
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
          breakpoint: 1920,
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
              height: 175,
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
};

export const FollowerProgressionChartData = {
  ChartOptions: {
    series: [
      {
        name: "Projects",
        type: "column",
        data: [1.8, 2.5, 2.5, 1.5, 2.5, 2.8, 3.8, 4, 6, 2, 5],
      },
    ],
    options: {
      chart: {
        background: "transparent",
        toolbar: {
          show: false,
        },
        type: "bar" as const,
        stacked: false,
        fontFamily: "Poppins, Arial, sans-serif",
        zoom: {
          enabled: false,
        },
        animations: {
          enabled: false,
        },
      },
      theme: {
        mode: "light" as const,
      },
      grid: {
        borderColor: "#f5f4f4",
        strokeDashArray: 3,
      },
      dataLabels: {
        enabled: false,
      },
      xaxis: {
        labels: {
          show: false,
        },
        axisTicks: {
          show: false,
        },
        axisBorder: {
          show: false,
        },
      },
      yaxis: [
        {
          seriesName: "Projects",
          axisTicks: {
            show: true,
          },
          axisBorder: {
            show: true,
            color: "#3d4142",
          },
          labels: {
            show: true,
            style: {
              colors: "black",
            },
          },
          title: {
            text: "" as const,
          },
        },
      ],
      tooltip: {
        theme: "light",
        enabled: true,
      },
      legend: {
        show: false,
      },
      stroke: {
        width: [0, 0, 1.5],
        curve: "straight" as const,
        dashArray: [0, 0, 0],
      },
      plotOptions: {
        bar: {
          columnWidth: "35%",
          borderRadius: 3,
        },
      },
      colors: ["#0369A1"],
      responsive: [
        {
          breakpoint: 1024,
          options: {
            chart: {
              height: 325,
            },
          },
        },

        {
          breakpoint: 1920,
          options: {
            chart: {
              height: 300,
            },
          },
        },
        {
          breakpoint: 2560,
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
              height: 450,
            },
          },
        },
      ],
    },
  },
};
