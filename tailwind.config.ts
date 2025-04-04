import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    screens: {
      xxs: "200px",
      xs: "390px",
      sm: "550px",
      md: "768px",
      lg: "1024px",
      xl: "1440px",
      "2xl": "1920px",
      "3xl": "2560px",
    },
  },
  plugins: [],
};
export default config;
