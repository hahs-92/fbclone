module.exports = {
  purge: ['./pages/**/*.{js,ts,jsx,tsx}', './components/**/*.{js,ts,jsx,tsx}'],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {},
  },
  variants: {
    extend: {
      backgroundBlendMode: ['hover', 'focus', 'group-hover'],
      borderColor: ['active', 'hover'],
      borderWidth: ['active'],
    },
  },
  plugins: [],
}
