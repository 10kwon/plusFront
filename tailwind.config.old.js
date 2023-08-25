module.exports = {
  purge: [],
  content: [
    "./src/**/**/*.{html,js,jsx}",
    "./node_modules/flowbite/**/*.js",
    'node_modules/flowbite-react/**/*.{js,jsx,ts,tsx}'],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {},
  },
  variants: ["responsive", "group-hover", "hover", "focus", "active"],
  plugins: [require('flowbite/plugin')],
}