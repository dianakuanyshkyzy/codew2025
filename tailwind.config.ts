/** @type {import('tailwindcss').Config} */
export default {
    content: [
      "./index.html",
      "./src/**/*.{js,ts,jsx,tsx}",
    ],
    theme: {
      extend: {
        fontFamily: {
            press2p: ['"Press Start 2P"', "sans-serif"],
            montserrat: ['Montserrat', "sans-serif"],
          },
      },
    },
    plugins: [],
  };  