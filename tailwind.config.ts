import type { Config } from "tailwindcss";

const config: Config = {
  content: ["./app/**/*.{js,ts,jsx,tsx,mdx}", "./components/**/*.{js,ts,jsx,tsx,mdx}"],
  theme: {
    extend: {
      colors: {
        brand: {
          50: "#eef7ff",
          100: "#d9eeff",
          600: "#0f67d8",
          700: "#0a55b8",
          900: "#0b214a"
        }
      }
    }
  },
  plugins: []
};
export default config;
