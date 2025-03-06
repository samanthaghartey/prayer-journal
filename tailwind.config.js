/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        primary: "#91A8FF",
        secondary: "#FFD43B",
        accent1: "#FF74A9",
        accent2: "#BAC9FF",
        deepblue: "#1e3a8a",
      },
    },
  },
  plugins: [],
};
