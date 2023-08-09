/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      height: {
        '10vh': '10vh',
      }
    },
  },
  plugins: [
    require('tailwindcss-animated')
  ],
}

