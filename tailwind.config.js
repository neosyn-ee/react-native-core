/** @type {import('tailwindcss').Config} */

module.exports = {
  content: ['./App.{js,jsx,ts,tsx}', './src/**/*.{js,jsx,ts,tsx}'],
  theme: {
    extend: {
      colors: {
        primary: '#0b1335',
        secondary: '#f73911',
        success: '#4cad6e',
        danger: '#f2686e',
        warning: '#ffb830',
      },
      aspectRatio: {
        '9/16': '9 / 16',
      },
    },
  },
};
