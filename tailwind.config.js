/** @type {import('tailwindcss').Config} */
const withMT = require("@material-tailwind/react/utils/withMT");
module.exports = withMT({
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      colors:{
        "theme" :"#dc2f2f",
        "pry" :"#369EA5",
        "sec" :"#0D4C92", 
        "cool":"#CFF5E7",
        "rty":"#1cd45e",
        
      },
      fontFamily: {
       
        name: ["Tilt Neon", "cursive"],
        rider: ["Roboto Slab", "serif"],
        hero: ["Nanum Gothic", "sans-serif"],
      }
    },
  },
  plugins: [],
})
