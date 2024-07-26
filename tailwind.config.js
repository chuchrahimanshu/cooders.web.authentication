/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        PRIMARY_BACKGROUND: "#080C0F",
        SECONDARY_BACKGROUND: "#1C242E",
        PRIMARY_BORDER: "#22353E",
        SECONDARY_BORDER: "#00E074",
        PRIMARY_BUTTON: "#FE8A00",
      },
      screens: {
        xs: "500px",
      },
    },
  },
  plugins: [],
};
