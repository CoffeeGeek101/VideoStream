/** @type {import('tailwindcss').Config} */
const defaultTheme = require('tailwindcss/defaultTheme')
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily : {
        wix : ['Wix Madefor Display', "sans-serif"]
      },
      backgroundImage: {
        'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
      }
    },
    screens : {
      'xs' : {'min': '318px', 'max': '450px'},
      ...defaultTheme.screens,
    }
  },
  plugins: [],
}