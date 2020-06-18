module.exports = {
  purge: ['./pages/**/*.js'],
  theme: {
    extend: {
      fontFamily: {
        'rubik': 'Rubik-Regular',
        'rubik-bold': 'Rubik-Bold',
        'rubik-md': 'Rubik-Medium'
      },
      fontSize: {
        'h1:desktop': '50px',
        'h2:desktop': '35px',

        'h1:mobile': '36px',
        'h2:mobile': '24px'
      },
      colors: {
        primary: '#ab4693',
        default: '#4f5665',
        secondary: '#0b132a',
        placeholder: '#afb5c0'
      },
      backgroundColor: {
        primary: '#ab4693'
      },
      gradients: {
        'gd-default': ['to top', '#f8f8f8', 'rgba(248, 248, 248, 0)']
      },
      borderColor: {
        default: '#dddddd',
        active: '#ab4693'
      },
      borderRadius: {
        default: '10px'
      },
      width: {
        'abc': '1000px'
      }
    },
  },
  variants: {},
  plugins: [
    require('tailwindcss-plugins/gradients')
  ],
}
