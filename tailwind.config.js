/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx}',
    './src/components/**/*.{js,ts,jsx,tsx}',
    './src/app/**/*.{js,ts,jsx,tsx}',
  ],
  darkMode: 'class',
  theme: {
    extend: {
      backgroundImage: {
        'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
        'gradient-conic':
          'conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))',
      },
      colors: {
        white: '#ffffff',
        gray: {
          1: '#15141F',
        },
        orange: {
          1: '#FF5C31',
        },
        red: {
          1: '#E93546',
        },
        blue: {
          1: '#0b2447',
          2: '#19376d',
          3: '#a5d7e8',
        },
        green: {
          1: '#26B510',
        },
        yellow: {
          1: '#FFC328',
        },
        purple: {
          1: '#576cbc',
        },
      },
    },
  },
  plugins: [],
};
