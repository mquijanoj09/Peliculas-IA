import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      backgroundImage: {
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
        "gradient-conic":
          "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
      },
      colors: {
        "light-grey": "#525659",
        "dark-grey": "#5F5B5B",
        "lighter-grey": "#767272",
        "dark-purple": "#5B1BE1",
        "light-purple": "#6E34E7BD",
      },
    },
  },
  plugins: [],
};
export default config;
