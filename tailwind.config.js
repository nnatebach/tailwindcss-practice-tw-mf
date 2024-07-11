/** @type {import('tailwindcss').Config} */
module.exports = {
  darkMode: "class",
  content: ["./src/**/*.{html,js}"],
  theme: {
    extend: {
      keyframes: {
        wavey: {
          "0%, 100%": {
            transform: "scaleY(.5)"
          },
          "50%": {
            transform: "scaleY(1.5)"
          }
        }
      },
      // animate-wavey
      animation: {
        wavey: "wavey 1000ms linear infinite"
      }
    }
  },
  plugins: [require("./plugins/openVariant"), require("./plugins/animationDelay"), require("./plugins/tableCaption")],
};
