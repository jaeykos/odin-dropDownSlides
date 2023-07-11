/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./*.{html,js}"],
  theme: {
    extend: {
      width: {
        "500%": "500%",
        "400%": "400%",
      },
      margin: {
        "25%": "25%",
        "50%": "50%",
        "75%": "75%",
        "100%": "100%",
        "200%": "200%",
        "300%": "300%",
      },
      transitionDuration: {
        2000: "2000ms",
      },
    },
  },
  plugins: [],
}
