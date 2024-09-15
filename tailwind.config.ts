import type { Config } from "tailwindcss";

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
        "navbar-button": "var(--#36393E)",
        brand: {
            '50': '#eaffff',
            '100': '#cbfcff',
            '200': '#9ef7ff',
            '300': '#5beeff',
            '400': '#0d607d',
            '500': '#00bee5',
            '600': '#0097c0',
            '700': '#03779b',
            '800': '#0d607d',
            '900': '#105069',
            '950': '#033449',
        },
        "true-gray": {
            50: "#FAFAFA",
            100: "#F5F5F5",
            200: "#E5E5E5",
            300: "#D4D4D4",
            400: "#A3A3A3",
            500: "#737373",
            600: "#525252",
            700: "#404040",
            800: "#262626",
            900: "#171717",
        },
        'custom-gray': {
        '50': '#f4f7f7',
        '100': '#e3e8ea',
        '200': '#cbd3d6',
        '300': '#a6b5ba',
        '400': '#7a8d96',
        '500': '#5f727b',
        '600': '#516069',
        '700': '#465158',
        '800': '#3e464c',
        '900': '#373d42',
        '950': '#252a2e',
        },
      },
    },
  },
  plugins: [],
};
export default config;


