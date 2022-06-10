module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
    './src/**/*.{html,js}', './node_modules/tw-elements/dist/js/**/*.js'
  ],
  theme: {
    extend: {
      rotate: {
        '19': '19deg',
      },
      colors:{
        'pink-custom-dark':'#ff4c68',
        'pink-custom-normal':'#ef8172',
        'pink-custom-bright':'#f83f5b'
      }
      ,
      borderWidth:{
         '1' :'1px'
      }
    },
  },
  plugins: ['./node_modules/tw-elements/dist/plugin.js'],
}