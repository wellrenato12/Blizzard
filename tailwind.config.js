/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./src/**/*.{ts,tsx}'],
  theme: {
    extend: {
      backgroundImage: {
        diabloImage: "url('src/assets/diablo-bg.png')",
        hearthstoneImage: "url('src/assets/hearthstone-bg.png')",
        wowImage: "url('src/assets/wow-bg.png')",
        bgModal: "url('src/assets/background-modal.png')",
        bgFooter: "url('src/assets/footer-background.png')",
      },
      fontFamily: {
        poppins: ['Poppins', 'sans-serif'],
      },
    },
  },
  plugins: [],
}
