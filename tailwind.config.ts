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
      },
      keyframes: {
        "fade-up": {
          "0%": {
            opacity: "0",
            transform: "translateY(4%)",
            visibility: "hidden",
          },
          "100%": {
            opacity: "1",
            transform: "translateY(0%)",
            visibility: "visible",
          },
        },
      },
      animation: {
        "fade-up": "fade-up .3s ease-out forwards",
      },
    },
  },
  plugins: [],
};
export default config;
