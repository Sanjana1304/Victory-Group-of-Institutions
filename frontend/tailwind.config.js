/** @type {import('tailwindcss').Config} */
export default {
  content: [
    './src/**/*.{html,js,jsx,ts,tsx}',
  ],
  theme: {
    extend: {
      colors:{
        blue : '#0099ff',
        red: '#ff0000',
        green: '#800080',
      }
    },
  },
  plugins: [],
}

