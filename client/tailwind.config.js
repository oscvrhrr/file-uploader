/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}"
  ],
  theme: {
    extend: {
      colors: {
        'radixcyan': {
          100: '#F9FDFF',
          200: '#EFFBFE',
          300: '#D6F8FF',
          400: '#BCF3FF',
          500: '#A2ECFD',
          600: '#83E1F6',
          700: '#53D2EC',
          800: '#00BDDF',
          900: '#00A6C5',
          1000: '#0099B5',
          1100: '#007F97',
          1200: '#003F4D'
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

