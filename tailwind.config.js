/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      colors: {
        primary: {"50":"#f0f9ff","100":"#e0f2fe","200":"#bae6fd","300":"#7dd3fc","400":"#38bdf8","500":"#0ea5e9","600":"#0284c7","700":"#0369a1","800":"#075985","900":"#0c4a6e","950":"#082f49"}
      },
      fontFamily: {
          'main' : ['Montserrat', 'sans-serif'],
          'secondary' : ['Poppins', 'sans-serif'],
          'buttons' : ['Roboto', 'sans-serif']

      },
      screens: {
        ipad: '835px', // Custom breakpoint for iPad screens
      },
    },
  },
  plugins: [],
};