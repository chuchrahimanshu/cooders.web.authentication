/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        "base-background": "#080C0F",
        "overlay-background": "#1C242E",
        "base-border": "#22353E",
        "highlight-border": "#00E074",
        "action-button": "#FE8A00",
      },
      screens: {
        xs: "500px",
      },
    },
  },
  plugins: [],
};
