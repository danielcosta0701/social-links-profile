/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        sans: ['Montserrat', 'sans-serif'],
      },
      colors: {
        github: "#181717",
        linkedin: "#0077B5",
        spotify: "#1DB954",
      },
    },
  },
  plugins: [],
}

