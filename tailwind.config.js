module.exports = {
  mode: 'jit',
  purge: ['./pages/**/*.{js,ts,jsx,tsx}', './components/**/*.{js,ts,jsx,tsx}'],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      spacing: {
        '2/3': '66.666667%',
        '5/6': '83.3333333%',
      }
    },
  },
  variants: {
    backgroundColor:['responsive','hover','focus','active'],
    extend: {},
  },
  plugins: [],
}
