/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./components/**/*.{html,js}', './**/*.html'],
  theme: {
    extend: {
      gridTemplateRows: {
        '[auto,auto,1fr]': 'auto auto 1fr',
      },
    },
  },
  plugins: [require('@tailwindcss/aspect-ratio')],
}
