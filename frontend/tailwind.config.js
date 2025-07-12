/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./pages/**/*.html",      // Busca clases en todos los archivos HTML dentro de la carpeta 'pages' y sus subcarpetas
    "./components/**/*.html", // Busca clases en todos los archivos HTML dentro de la carpeta 'components' y sus subcarpetas
    "./js/**/*.js",
  ],
  theme: {
    extend: {},
  },
  plugins: [],
}

