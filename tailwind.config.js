/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      fontFamily: {

      },
      screens: {
        ipad: '835px', // Custom breakpoint for iPad screens
      },
    },
  },
  plugins: [],
};