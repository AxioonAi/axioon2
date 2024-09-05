export const BaseComparativeCardData = {
  name: "Nome do Político",
  place: {
    city: "Sinop",
    state: "MT",
  },
  facebook: "Facebook",
  instagram: "Instagram",
  tiktok: "TikTok",
  youtube: "YouTube",
};

export const FollowersDonutByGenderChartData = {
  ChartOptions: {
    series: [1624, 1267, 162],
    options: {
      labels: ["Masculino", "Feminino", "Outro"],
      chart: {
        type: "donut" as const,
        animations: {
          enabled: false,
        },
        background: "transparent",
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
              height: 200,
            },
          },
        },
        {
          breakpoint: 1440,
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
              height: 200,
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

export const FollowersDonutChartData = {
  ChartOptions: {
    series: [1624, 1267, 162],
    options: {
      labels: ["Facebook", "Instagram", "TikTok", "YouTube"],
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
      colors: ["#0c4a6e", "#0369a1", "#38bdf8", "#bae6fd"],
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
      plotOptions: {
        bar: {
          columnWidth: "75%",
          borderRadius: 3,
        },
      },
      dataLabels: {
        enabled: false,
      },
      stroke: {
        show: true,
        width: 2,
        colors: ["transparent"],
      },
      xaxis: {
        labels: {
          show: false,
        },
        axisBorder: {
          show: false,
        },
        axisTicks: {
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

      fill: {
        opacity: 1,
      },
      colors: ["#0369A1"],
      responsive: [
        {
          breakpoint: 1024,
          options: {
            chart: {
              height: 260,
            },
          },
        },
        {
          breakpoint: 1360,
          options: {
            chart: {
              height: 250,
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
              height: 225,
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
              height: 350,
            },
          },
        },
      ],
    },
  },
};

// export const FollowerProgressionChartData = {
//   ChartOptions: {
//     series: [
//       {
//         name: "Projects",
//         type: "column",
//         data: [1.8, 2.5, 2.5, 1.5, 2.5, 2.8, 3.8],
//       },
//       {
//         name: "Tasks",
//         type: "column",
//         data: [1.1, 2.2, 3.1, 4, 4.1, 4.9, 6.5],
//       },
//       {
//         name: "Revenue",
//         type: "line",
//         data: [50, 59, 67, 65, 74, 73, 80],
//       },
//     ],
//     options: {
//       chart: {
//         background: "transparent",
//         toolbar: {
//           show: false,
//         },
//         type: "line" as const,
//         stacked: false,
//         fontFamily: "Poppins, Arial, sans-serif",
//         zoom: {
//           enabled: false,
//         },
//       },
//       theme: {
//         mode: "light" as const,
//       },
//       grid: {
//         borderColor: "#f5f4f4",
//         strokeDashArray: 3,
//       },
//       dataLabels: {
//         enabled: false,
//       },
//       xaxis: {
//         categories: ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"],
//         labels: {
//           style: {
//             colors: "black",
//           },
//         },
//       },
//       yaxis: [
//         {
//           seriesName: "Projects",
//           axisTicks: {
//             show: true,
//           },
//           axisBorder: {
//             show: true,
//             color: "#3d4142",
//           },
//           labels: {
//             show: true,
//             style: {
//               colors: "black",
//             },
//           },
//           title: {
//             text: "" as const,
//           },
//         },
//         {
//           seriesName: "Tasks",
//           opposite: true,
//           axisTicks: {
//             show: true,
//           },
//           axisBorder: {
//             show: false,
//             color: "#00E396",
//           },
//           labels: {
//             show: true,
//           },
//           title: {
//             show: false,
//           },
//         },
//         {
//           seriesName: "Revenue",
//           opposite: true,
//           axisTicks: {
//             show: false,
//           },
//           axisBorder: {
//             show: false,
//             color: "#23b7e5",
//           },
//           labels: {
//             show: false,
//           },
//           title: {
//             show: false,
//           },
//         },
//       ],
//       tooltip: {
//         theme: "light",
//         enabled: true,
//       },
//       legend: {
//         show: false,
//       },
//       stroke: {
//         width: [0, 0, 1.5],
//         curve: "straight" as const,
//         dashArray: [0, 0, 0],
//       },
//       plotOptions: {
//         bar: {
//           columnWidth: "35%",
//           borderRadius: 3,
//         },
//       },
//       colors: ["#0369A1", "#ededed", "#23b7e5"],
//       responsive: [
//         {
//           breakpoint: 1024,
//           options: {
//             chart: {
//               height: 325,
//             },
//           },
//         },

//         {
//           breakpoint: 1920,
//           options: {
//             chart: {
//               height: 250,
//             },
//           },
//         },
//         {
//           breakpoint: 2560,
//           options: {
//             chart: {
//               height: 300,
//             },
//           },
//         },
//         {
//           breakpoint: 2561,
//           options: {
//             chart: {
//               height: 400,
//             },
//           },
//         },
//       ],
//     },
//   },
// };

export const ScoreGaugeChartData = {
  name: "Instagram",
  sentimentData: [
    {
      name: "Sentimento Médio",
      value: 600,
    },
  ],
};

export const LineGradientSentimentChartData = {
  ChartOptions: {
    series: [
      {
        data: [170, 572, 751, 82, 1063, 653, 553, 23, 735],
      },
      {
        data: [60, 729, 360, 708, 126, 350, 626, 167, 350],
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
        background: "transparent",
      },
      dataLabels: {
        enabled: false,
      },
      stroke: {
        curve: "smooth" as const,
        width: 1,
        colors: ["#0ea5e9", "#0c4a6e"],
      },
      grid: {
        show: false,
      },
      legend: {
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
      tooltip: {
        enabled: false,
      },
      fill: {
        type: "gradient",
        colors: ["#0ea5e9", "#0c4a6e"],
        gradient: {
          shadeIntensity: 1,
          opacityFrom: 0.7,
          opacityTo: 0.9,
          stops: [0, 100],
        },
      },
      responsive: [
        {
          breakpoint: 1024,
          options: {
            chart: {
              height: 175,
            },
          },
        },
        {
          breakpoint: 1360,
          options: {
            chart: {
              height: 300,
            },
          },
        },
        {
          breakpoint: 1920,
          options: {
            chart: {
              height: 275,
            },
          },
        },
        {
          breakpoint: 2560,
          options: {
            chart: {
              height: 275,
            },
          },
        },
        {
          breakpoint: 2561,
          options: {
            chart: {
              height: 375,
            },
          },
        },
      ],
    },
  },
};

export const LineGradientChartData = {
  ChartOptions: {
    series: [
      {
        data: [170, 572, 751, 82, 1063, 653, 553, 23, 735],
      },
      {
        data: [60, 729, 360, 708, 126, 350, 626, 167, 350],
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
        background: "transparent",
      },
      dataLabels: {
        enabled: false,
      },
      stroke: {
        curve: "smooth" as const,
        width: 1,
        colors: ["#0ea5e9", "#0c4a6e"],
      },
      grid: {
        show: false,
      },
      legend: {
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
      tooltip: {
        enabled: false,
      },
      fill: {
        type: "gradient",
        colors: ["#0ea5e9", "#0c4a6e"],
        gradient: {
          shadeIntensity: 1,
          opacityFrom: 0.7,
          opacityTo: 0.9,
          stops: [0, 100],
        },
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
              height: 150,
            },
          },
        },
        {
          breakpoint: 1920,
          options: {
            chart: {
              height: 225,
            },
          },
        },
        {
          breakpoint: 2560,
          options: {
            chart: {
              height: 220,
            },
          },
        },
        {
          breakpoint: 2561,
          options: {
            chart: {
              height: 310,
            },
          },
        },
      ],
    },
  },
};

export const AgeAndGenderData = {
  ChartOptions: {
    series: [
      {
        name: "",
        data: [44, 55, 57, 56, 61, 58, 63],
      },
      {
        name: "",
        data: [76, 85, 101, 98, 87, 105, 91],
      },
      {
        name: "",
        data: [35, 41, 36, 26, 45, 48, 52],
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
        background: "transparent",
      },
      plotOptions: {
        bar: {
          horizontal: false,
          columnWidth: "60%",
          endingShape: "rounded",
        },
      },
      dataLabels: {
        enabled: false,
      },
      stroke: {
        show: true,
        width: 2,
        colors: ["transparent"],
      },
      colors: ["#bae6fd", "#38bdf8", "#0c4a6e"],
      xaxis: {
        categories: ["0-19", "20-29", "30-39", "40-49", "50-59", "60+"],
      },
      fill: {
        opacity: 1,
      },
      legend: {
        show: false,
      },
      responsive: [
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
              height: 225,
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
              height: 375,
            },
          },
        },
      ],
    },
  },
};

export const CommentsDonutChartData = {
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

export const CommentsBySentimentData = {
  Profile: [
    {
      comments: {
        positive: 987,
        neutral: 1073,
        negative: 1674,
        total: 3734,
      },
    },
    {
      comments: {
        positive: 1347,
        neutral: 542,
        negative: 715,
        total: 2544,
      },
    },
  ],
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

export const PositiveCommentsData = {
  ChartOptions: {
    series: [
      {
        name: "Comentários Positivos 1",
        data: [35, 35, 62, 63, 12, 12, 60, 60, 51, 51, 81, 81],
      },
      {
        name: "Comentários Positivos 2",
        data: [75, 78, 38, 39, 38, 72, 72, 52, 52, 17, 17, 52],
      },
    ],
    options: {
      chart: {
        type: "line" as const,

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
      colors: ["#0ea5e9", "#0c4a6e"],
      stroke: {
        curve: "smooth" as const,
        width: 3,
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
              height: 250,
            },
          },
        },
        {
          breakpoint: 1440,
          options: {
            chart: {
              height: 125,
            },
          },
        },
        {
          breakpoint: 1920,
          options: {
            chart: {
              height: 200,
            },
          },
        },
        {
          breakpoint: 2560,
          options: {
            chart: {
              height: 160,
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

export const NegativeCommentsData = {
  ChartOptions: {
    series: [
      {
        name: "Comentários Negativos 1",
        data: [35, 35, 62, 63, 12, 12, 60, 60, 51, 51, 81, 81],
      },
      {
        name: "Comentários Negativos 2",
        data: [75, 78, 38, 39, 38, 72, 72, 52, 52, 17, 17, 52],
      },
    ],
    options: {
      chart: {
        type: "line" as const,

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
      colors: ["#0ea5e9", "#0c4a6e"],
      stroke: {
        curve: "smooth" as const,
        width: 3,
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
              height: 250,
            },
          },
        },
        {
          breakpoint: 1440,
          options: {
            chart: {
              height: 125,
            },
          },
        },
        {
          breakpoint: 1920,
          options: {
            chart: {
              height: 200,
            },
          },
        },
        {
          breakpoint: 2560,
          options: {
            chart: {
              height: 160,
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

export const LineGradientMentionsChartData = {
  ChartOptions: {
    series: [
      {
        data: [170, 572, 751, 82, 1063, 653, 553, 23, 735],
      },
      {
        data: [60, 729, 360, 708, 126, 350, 626, 167, 350],
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
      },
      dataLabels: {
        enabled: false,
      },
      stroke: {
        curve: "smooth" as const,
        width: 1,
        colors: ["#0ea5e9", "#0c4a6e"],
      },
      grid: {
        show: false,
      },
      legend: {
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
      tooltip: {
        enabled: false,
      },
      fill: {
        type: "gradient",
        colors: ["#0ea5e9", "#0c4a6e"],
        gradient: {
          shadeIntensity: 1,
          opacityFrom: 0.7,
          opacityTo: 0.9,
          stops: [0, 100],
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
              height: 300,
            },
          },
        },
      ],
    },
  },
};
