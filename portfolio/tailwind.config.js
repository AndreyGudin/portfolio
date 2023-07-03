/** @type {import('tailwindcss').Config} */
module.exports = {
  darkMode: "class",
  content: ["./src/**/*.{js,ts,jsx,tsx,mdx}"],
  theme: {
    extend: {
      backgroundImage: {
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
        "gradient-conic":
          "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
        "linear-bg":
          "linear-gradient(to right top, #fee6fa, #ffd0e0, #ffc49b, #ffd247, #a8eb12)",
        "dark-linear-bg":
          "linear-gradient(to right top, #070809, #1a1b1e, #2a2a2f, #3e3a41, #534a52)",
      },
      colors: {
        text: "#0f010c",
        background: "#fee6fa",
        "primary-button": "#fa7fa8",
        "secondary-button": "#ffffff",
        accent: "#fa947f",
        "dark-text": "#ebedef",
        "dark-background": "#070809",
        "dark-primary-button": "#3a434b",
        "dark-secondary-button": "#0d0f11",
        "dark-accent": "#2f363d",
      },
    },
  },
  plugins: [],
};
