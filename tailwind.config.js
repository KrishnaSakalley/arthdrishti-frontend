/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        bg: {
          DEFAULT: "#131314",
          surface: "#1E1F20",
          elevated: "#2B2C2E",
        },
        accent: {
          DEFAULT: "#37393B",
          hover: "#43454A",
        },
        danger: "#EF4444",
        warn: "#F59E0B",
        text: {
          primary: "#E3E3E3",
          secondary: "#9AA0A6",
          muted: "#5F6368",
        },
        border: "#3C3D40",
      },
      fontFamily: {
        sans: ["Inter", "system-ui", "sans-serif"],
      },
    },
  },
  plugins: [],
}