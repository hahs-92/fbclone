module.exports = {
  purge: ['./pages/**/*.{js,ts,jsx,tsx}', './components/**/*.{js,ts,jsx,tsx}'],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      minWidth: {
        '[300]': '300px',
       }
    },
  },
  variants: {
    extend: {
      backgroundBlendMode: ['hover', 'focus', 'group-hover'],
      borderColor: ['active', 'hover'],
      borderWidth: ['active'],
      animation: ['hover', 'focus', 'group-hover'],
      brightness: ['hover', 'focus'],
    },
  },
  plugins: [],
}
