const colors = require("tailwindcss/colors");


/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    'input:focus':{
      outline: 'none'
    },
    colors: {
      ...colors,
      default: '#B78327',
      second: '#EBC348',
    },
    container: {
      center: true,
      padding: '3rem'
    },
    extend: {
      backgroundImage: {
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
        "gradient-conic":
          "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
      },
      fontFamily: {
        'ibm' : ['"IBM Plex Sans Arabic"', 'sans-serif']
      }
    },
  },
  plugins: [
    require('tailwindcss-dir')()
  ],
};
