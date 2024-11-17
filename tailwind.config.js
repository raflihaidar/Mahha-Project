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
        'light-shade-1': '#B5B4A0',
        'light-shade-2': '#705729',
        'dark-default': '#45462A',
        'dark-shade-2': '#6C6C4B',
        'accent-default': '#96742A',
      },
    },
  },
  plugins: [],
}
