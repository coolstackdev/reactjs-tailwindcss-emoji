module.exports = {
  purge: ['./src/**/*.{js,jsx,ts,tsx}', './public/index.html'],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {},
    colors: {
      transparent: 'transparent',
      white: '#fff',
      black: {
        lightest: '#404040',
        light: '#222',
        DEFAULT: '#000',
        dark: '#1D1D1D',
        darkest: '#1C1C1C',
      },
      gray: {
        light: '#3F63882E',
        DEFAULT: '#65656536',
        dark: '#00000029',
      },
      yellow: {
        lightest: '#FFFE4B',
        light: '#FFF61F',
        DEFAULT: '#FFF61F',
        dark: '#FFDC4B',
        darkest: '#FFD21F'
      },
      blue: {
        DEFAULT: '#373E98',
      },
      pink: {
        light: '#FF5C5C',
        DEFAULT: '#FF5C5C',
        dark: '#FD6565'
      },
      red: {
        lightest: '#E74010',
        light: '#E50019',
        DEFAULT: '#E50019',
        dark: '#D9504B',
        darkest: '#B94245'
      }
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
}
