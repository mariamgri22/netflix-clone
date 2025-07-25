/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      primary: "#141414",
      secondary: "#232323",
      boxShadow: {
        '3xl': '0 0 180px 60px rgba(0, 0, 0, 0.9)', // X Y Blur Spread Color
      },
    },
  },
  plugins: [],
}

