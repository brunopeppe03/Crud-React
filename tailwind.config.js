module.exports = {
  // purge:[
  //   './src/pages/**/*.{js,ts,jsx,tsx}',
  //   './src/components/**/*.{js,ts,jsx,tsx}'
  // ],
  purge :{
    content:[
         './src/pages/**/*.{js,ts,jsx,tsx}',
         './src/components/**/*.{js,ts,jsx,tsx}'
       ],
       safeList:[
         /^bg-/,
         /^to-/,
         /^from-/
       ]
  },
  darkMode:false,
  theme: {
    extend: {},
  },
  plugins: [],
}