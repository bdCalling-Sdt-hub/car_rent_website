import type { Config } from "tailwindcss";
const { fontFamily } = require("tailwindcss/defaultTheme");
const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        background: "var(--background)",
        foreground: "var(--foreground)",
      },
      fontFamily: {
        lora: ["var(--font-lora)", ...fontFamily.sans],
        // geistSans: ["var(--font-geist-sans)", ...fontFamily.sans],
        arial: ["Arial", "sans-serif"], 
      },
    },
  },
  plugins: [],
};
export default config;
