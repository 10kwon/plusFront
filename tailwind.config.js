/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,js,jsx}", "./src/*.{html,js,jsx}", "./src/**/**/*.{html,js,jsx}",
  "./node_modules/flowbite/**/*.js",
  'node_modules/flowbite-react/**/*.{js,jsx,ts,tsx}'],
  theme: {
    extend: {
      zIndex: {
        '100': '100',
      }
    },
  },
  plugins: [require('flowbite/plugin'),require('@tailwindcss/aspect-ratio'),],
}