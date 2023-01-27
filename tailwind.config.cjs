/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    screens: {
      xs: "375px",
      sm: "480px",
      md: "512px",
      lg: "768px",
      xl: "1024px",
      "2xl": "1280px",
      "3xl": "1440px",
    },
    extend: {
      colors: {
        "cPurple-100": "#8743FF",
        "cPurple-200": "#4136F1",
      },
    },
  },
  plugins: [],
};
