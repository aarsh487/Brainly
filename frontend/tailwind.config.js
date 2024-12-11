/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        purple: {
          500 : "#5046e4",
          200: "#e0e7ff",
          300: "#4f48b9"
        }
      }
    },
  },
  plugins: [],
}

