const themeManager = require('./theme.config.js')

module.exports = {
  theme: {
    container: {
      center: true,
    },
    fontSize: {
      xs: '0.75rem',
      sm: '0.875rem',
      base: '1rem',
      lg: '1.125rem',
      xl: '1.25rem',
      '2xl': '1.5rem',
      '3xl': '1.875rem',
      '4xl': '2.25rem',
      '5xl': '3rem',
      '6xl': '4rem',
    },
    extend: {},
  },
  variants: {},
  plugins: [
    require('tailwindcss-theming')({
      themes: themeManager,
    }),
  ],
};