/** @type {import('tailwindcss').Config} */
module.exports = {
  darkMode: 'class',
  content: ["./src/**/*.{html,js,jsx}", "./src/*.{html,js,jsx}", "./src/**/**/*.{html,js,jsx}",
  "./node_modules/flowbite/**/*.js",
  'node_modules/flowbite-react/**/*.{js,jsx,ts,tsx}'],
  theme: {
    extend: {
      zIndex: {
        '100': '100',
      },
      height: {
        '128': '52rem',
      }
    },
  },
  plugins: [require('flowbite/plugin'),require('@tailwindcss/aspect-ratio'),],
}