/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      colors: {
        'soft-peach': '#FFEFE7',
        'coral': '#FF6B6B',
        'navy': '#1A1A40',
        'pale-yellow': '#FFF9B0',
        'dark-olive': '#3E4E50',
      },
    },
  },
  plugins: [],
};
