/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{vue,js,ts,jsx,tsx}'],
  theme: {
    fontFamily: {
      Moulin: ['Cormorant Garamond', 'serif'],
    },
    extend: {
      colors: {
        'light-default': '#FCFCF0',
        'shade-3': '#7F7E5B',
      },
    },
  },
  plugins: [],
}
