/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./**/*.{html,js}"],
  theme: {
    extend: {
      colors: {
        // Gray
        primary: "#101010",
        secondary: "#1a1a1a",
        tertiary: "#262626",
        white: "#ececec",
      },
      minHeight: {
        'empty': '290px',
      },
    },
  },
  plugins: [],
}