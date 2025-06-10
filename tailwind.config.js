/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      colors: {
        // primary: "#7151EF",
        // secondary: "#2F22F8",
        primary: "#16a379",
        // primary: "#279977",
        secondary: "#eae362",
        // secondary: "#F3F09F",
      },
      boxShadow: {
        large: "0px 0px 30px 10px rgba(0, 0, 0, 0.5)",
      },
    },
  },
  plugins: [],
};
