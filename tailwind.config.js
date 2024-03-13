/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./src/**/*.{ts,tsx}'],
  theme: {
    extend: {
      backgroundImage: {
        diabloImage: "url('src/assets/diablo-bg.png')",
      },
    },
  },
  plugins: [],
}
