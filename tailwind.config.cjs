/** @type {import('tailwindcss').Config} */
// prettier-ignore
module.exports = {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      fontFamily: {
        'poppins': ['Poppins', 'ui-sans-serif'],
        'roboto': ['Roboto', 'ui-serif'],
      },
    },
  },
  plugins: [],
};
