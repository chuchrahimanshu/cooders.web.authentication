/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        PRIMARY_BACKGROUND: "#151D26",
        SECONDARY_BACKGROUND: "#1C242E",
      },
    },
  },
  plugins: [],
};
