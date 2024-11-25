/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{vue,js,ts,jsx,tsx}'],
  safelist: [
    'html.has-scroll-smooth',
    'html.has-scroll-dragging',
    `[data-scroll-direction="horizontal"]`,
    '.c-scrollbar',
    '.c-scrollbar_thumb',
  ],
  theme: {
    fontFamily: {
      Moulin: ['Moulin', 'serif'],
    },
    extend: {
      colors: {
        'light-default': '#FCFCF0',
        'light-shade-1': '#B5B4A0',
        'light-shade-2': '#705729',
        'light-shade-3': '#E1E1D3',
        'dark-default': '#45462A',
        'dark-shade-2': '#6C6C4B',
        'dark-shade-3': '#7F7E5B',
        'accent-default': '#96742A',
      },
      keyframes: {
        fadeIn: {
          '0%': { opacity: '0' },
          '100%': { opacity: '1' },
        },
        fadeOut: {
          '0%': { opacity: '1' },
          '100%': { opacity: '0' },
        },
      },
      animation: {
        fadeIn: 'fadeIn 0.7s ease-in-out',
        fadeOut: 'fadeOut 0.7s ease-in-out',
      },
    },
  },
  plugins: [import('@tailwindcss/forms')],
}
