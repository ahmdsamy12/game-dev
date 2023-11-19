/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {},
    colors: {
      main: "#26308C",
      second: "#6F7DFB",
      white: "#ffffff",
      btn: "#DA722C",
      text: "#023047",
      gold: "gold",
      foot:"#070917"
    },
    gridTemplateColumns: {
      main: "repeat(auto-fit, minmax(260px,1fr))",
    },
    container: {
      center: true,
      padding: "20px",
    },
    borderRadius: {
      half: "50%",
      25: "25px",
    },
  },
  plugins: [],
};
