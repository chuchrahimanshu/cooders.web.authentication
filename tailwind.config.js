/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        "base-background": "var(--base-background)",
        "overlay-background": "var(--overlay-background)",
        "base-border": "var(--base-border)",
        "highlight-border": "var(--highlight-border)",
        "action-button": "var(--action-button)",
        "base-text": "var(--base-text)",
      },
      screens: {
        xs: "500px",
      },
    },
  },
  plugins: [],
};
