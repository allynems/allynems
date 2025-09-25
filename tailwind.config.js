/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./index.html",
    "./src/**/*.{js,jsx,ts,tsx}", // Todos os arquivos JS/TSX do React
  ],
  darkMode: 'class', // ⚡ Ativa o dark mode via classe 'dark'
  theme: {
    extend: {}, // Aqui você pode adicionar cores, fontes, etc.
  },
  plugins: [],
}
