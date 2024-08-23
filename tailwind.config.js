/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      screens:{
        xs: "320px",
        sm: "375px",
        sml: "500px",
        md: "667px",
        mdl: "768px",
        lg: "960px",
        lgl: "1024px",
        xl: "1280px",
      },
      fontFamily: {
        bodyFont: ["Poppins", "sans-serif"],
        titleFont: ["Montserrat", "sans-serif"],
      },
      colors: {
        bodyColor: "#000022",
        lightText: "#c4cfde",
        boxBg: "linear-gradient(145deg, #0a1128, #23272b)",
        designColor: "#ff014f",
      },
      boxShadow: {
        shadowOne: "10px 10px 19px #031d44, -10px -10px 19px #262a2e",
      },
    },
  },
  plugins: [],
};
