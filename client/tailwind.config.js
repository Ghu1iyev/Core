/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        "violets-are-blue": "#8E59FF",
        "bittersweet": "#FF6A55",
        "dollar-bill": "#83BF6E",
        "dodger-blue": "#2A85FF",
        "eerie-black": "#1A1D1F"
      }
    },
  },
  plugins: [],
}