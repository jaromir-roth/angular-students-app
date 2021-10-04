module.exports = {
  mode: 'jit',
  purge: {
    enabled: true,
    content: ['./src/**/*.{html,ts,svg}']
  },
  darkMode: false,
  theme: {
    fontFamily: {
      sans: ['Rubik', 'sans-serif']
    },
    boxShadow: {
      xl: '0 20px 30px -20px rgba(34, 29, 109, 0.1)'
    },
    extend: {},
  },
  variants: {
    extend: {
      boxShadow: ['active'],
    },
  },
  plugins: [],
}
