/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,ts,jsx,tsx}"
  ],
  theme: {
    extend: {
      backgroundImage: {
      },

      screens: {
        'xm': {'min': '374px', 'max': '575px'},
        'sm': {'min': '576px', 'max': '767px'},
        'md': {'min': '768px', 'max': '991px'},
        'lg': {'min': '992px', 'max': '1499px'},
        'xl': {'min': '1500px'},
      },
      spacing:{
        
      },
      fontFamily: {
        'Inter': ['Inter', 'sans-serif']
      },
      colors: {
        backgroundCadastro:'#C8D1D8',
        cadastroTexto:'#074173',
      },
    },
  },
  plugins: [],
}

