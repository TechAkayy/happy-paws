/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./_pginfo/**/*.{html,js}"
  ],
  theme: {
    extend: {},
  },
  plugins: [
    require('@tailwindcss/typography'),
  ],
}