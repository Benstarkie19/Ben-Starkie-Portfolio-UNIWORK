const defaultTheme = require('tailwindcss/defaultTheme')

module.exports = {
  purge: ['./index.html', './src/**/*.{vue,js,ts,jsx,tsx}'],
  options: {
        safelist: [
          /data-theme$/,]},
  theme: {
    extend: {
      colors: require('daisyui/colors'),
      fontFamily: {
        sans: ['"Inter var"', ...defaultTheme.fontFamily.sans],
      },
      listStyleType: {
        none: 'none',
       disc: 'disc',
       decimal: 'decimal',
       square: 'square',
       roman: 'upper-roman',
      }
    },
  },
  plugins: [
    require('@tailwindcss/forms'),
    require('@tailwindcss/typography'),
    require('@tailwindcss/line-clamp'),
    require('@tailwindcss/aspect-ratio'),
    require('daisyui'),
  ],
  // config (optional)
    daisyui: {
      styled: true,
      themes: true,
      rtl: false,
    },
}
