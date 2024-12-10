/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}"
  ],
  theme: {
    extend: {
      colors: {
        'radixindigo': {
          100: '#FDFDFE',
          200: '#F7F9FF',
          300: '#EDF2FE',
          400: '#E1E9FF',
          500: '#D2DEFF',
          600: '#C1D0FF',
          700: '#ABBDF9',
          800: '#8DA4EF',
          900: '#3E63DD',
          1000: '#3358D4',
          1100: '#3A5BC7',
          1200: '#1F2D5C'
        },
        'radixgray': {
          100: '#FCFCFD',
          200: '#F9F9FB',
          300: '#EFF0F3',
          400: '#E7E8EC',
          500: '#E0E1E6',
          600: '#D8D9E0',
          700: '#D8D9E0',
          800: '#B9BBC6',
          900: '#8B8D98',
          1000: '#80828D',
          1100: '#62636C',
          1200: '#1E1F24'
        }
      },
      keyframes: {
        'border-spin': {
          '100%': {
            transform: 'rotate(-360deg)',
          },
        },
      },
      animation: {
        'border-spin': 'border-spin 7s linear infinite'
      }
    },
  },
  plugins: [],
}

