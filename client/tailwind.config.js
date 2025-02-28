/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        'biru-item': '#1E1E1E',
        'biru-abu': '#30333F',
        'kuning': '#FFD34E',
        'putih-abu': '#E3E0FA',
        'biru-muda': '#92B4EC',
        'putih': '#FFFFFF'
      },
      fontFamily: {
        poppins: "'Poppins', sans-serif",
        playfair: "'Playfair Display', serif;"
      }
    },
  },
  plugins: [],
}