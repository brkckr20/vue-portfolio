/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx,vue}",
  ],
  theme: {
    extend: {
      fontFamily : {
        'poppins' : ["Poppins"]
      },
      colors : {
        'main' : '#f5df4e',
        'secondary' : '#212529',
        'thirds' : '#6c757d'
      }
    },
  },
  plugins: [],
}

