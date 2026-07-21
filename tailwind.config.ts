import type { Config } from "tailwindcss";

// Tailwind 4 CSS-first config: tema ve renkler globals.css içinde
// (@theme inline) tanımlı. Bu dosya sadece içerik taraması için.
const config: Config = {
  darkMode: "class",
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {},
  },
  // Animasyonlar tw-animate-css tarafından sağlanıyor (globals.css)
  plugins: [],
};

export default config;
