import type { Config } from "tailwindcss";

const config: Config = {
  content: ["./src/**/*.{js,ts,jsx,tsx,mdx}"],
  theme: {
    extend: {
      colors: {
        payne_gray: {
          DEFAULT: "#495867",
          100: "#0f1215",
          200: "#1e242a",
          300: "#2c363f",
          400: "#3b4754",
          500: "#495867",
          600: "#667a8f",
          700: "#8b9cac",
          800: "#b1bdc8",
          900: "#d8dee3",
        },
        glaucous: {
          DEFAULT: "#577399",
          100: "#11171e",
          200: "#232e3d",
          300: "#34455b",
          400: "#465c7a",
          500: "#577399",
          600: "#768eb0",
          700: "#98aac4",
          800: "#bac7d8",
          900: "#dde3eb",
        },
        columbia_blue: {
          DEFAULT: "#bdd5ea",
          100: "#142c40",
          200: "#295881",
          300: "#3d83c1",
          400: "#7dacd6",
          500: "#bdd5ea",
          600: "#cadeee",
          700: "#d7e6f3",
          800: "#e5eef7",
          900: "#f2f7fb",
        },
        ghost_white: {
          DEFAULT: "#f7f7ff",
          100: "#000064",
          200: "#0000c8",
          300: "#2d2dff",
          400: "#9191ff",
          500: "#f7f7ff",
          600: "#f7f7ff",
          700: "#f9f9ff",
          800: "#fbfbff",
          900: "#fdfdff",
        },
        bittersweet: {
          DEFAULT: "#fe5f55",
          100: "#430500",
          200: "#860a01",
          300: "#c90e01",
          400: "#fe1f0f",
          500: "#fe5f55",
          600: "#fe7e75",
          700: "#fe9e97",
          800: "#ffbfba",
          900: "#ffdfdc",
        },
      },
    },
  },
  plugins: [require("tailwindcss-react-aria-components"), require("tailwindcss-animate")],
};

export default config;
