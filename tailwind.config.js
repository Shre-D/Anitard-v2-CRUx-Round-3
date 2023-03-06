const { readConfigFile } = require('typescript')

/** @type {import('tailwindcss').Config} */


module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        'poppins': ['Poppins', 'sans-serif'],
        'bangers' : ['Bangers','cursive'],
        'manrope': ['Manrope', 'sans-serif'],
      },
      screens: {
        md: { max: '767px' },
      },
    },
  },
  plugins: [require('tailwind-scrollbar-hide')],
}

