module.exports = {
  mode: 'jit',
  purge: [
    './components/**/*.{vue,js}',
    './layouts/**/*.vue',
    './pages/**/*.vue',
    './plugins/**/*.{js,ts}',
    './nuxt.config.{js,ts}',
  ],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      colors: {
        redwood: {
          DEFAULT: '#541E0D',
          light: '#8E3C22',
        },
        melon: {
          DEFAULT: '#FFD6AF',
        },
      },
      fontFamily: {
        shrimp: ['shrimp'],
        poppins: ['Poppins'],
      },
      filter: {
        drop: {
          'drop-shadow': 'drop-shadow(0px 20px 4px rgba(84, 30, 13, 0.4))',
        },
      },
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
}
