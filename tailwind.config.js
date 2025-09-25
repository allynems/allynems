/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./index.html",
    "./src/**/*.{js,jsx,ts,tsx}", // Todos os arquivos JS/TSX do React
  ],
  darkMode: 'class', // ⚡ Ativa o dark mode via classe 'dark'
  theme: {
    extend: {
      colors: {
        'bg-light': '#f4f4f9',
        'text-dark': '#333333',
        'accent-blue': '#007acc',
        'button-bg': '#007acc',
        'button-hover': '#005fa3',
        'header-bg-left': '#155997',
        'header-bg-right': '#15965B',
      },
      spacing: {
        '1200': '1200px',
      },
      borderRadius: {
        '5': '5px',
      },
    }, // Aqui você pode adicionar cores, fontes, etc.
  },
  plugins: [],
}
