import type { Config } from "tailwindcss";

const config: Config = {
  content: ["./app/**/*.{ts,tsx}", "./components/**/*.{ts,tsx}"],
  theme: {
    extend: {
      colors: {
        ink: { DEFAULT: "#141716", 800: "#1a1e1c", 700: "#232825" },
        moss: { DEFAULT: "#0f2b21", 600: "#143629", 500: "#1c4635" },
        lime: { DEFAULT: "#c4f135", dim: "#9fcb1c" },
        bone: "#e9eee6",
        mute: "#9aa99f",
      },
      fontFamily: {
        display: ["var(--font-display)", "Georgia", "serif"],
        sans: ["var(--font-body)", "system-ui", "sans-serif"],
      },
      boxShadow: {
        glow: "0 0 0 1px rgba(196,241,53,0.25), 0 12px 40px -12px rgba(196,241,53,0.25)",
      },
    },
  },
  plugins: [],
};
export default config;
