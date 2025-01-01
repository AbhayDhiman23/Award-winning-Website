/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,js,jsx}"],
  theme: {
    extend: {
      fontFamily:{
        zentry:['zentry' , 'sanf-serif'],
        general:['general' , 'sanf-serif'],
        'circular-web':['circular-web' , 'sanf-serif'], 
        'robert-medium' : ['robert-medium' , 'sanf-serif'], 

      }, 
      colors:{
        blue:{
          50:'#DFDFF0', 
          75:'DFDFF2', 
          100:'#F0F2FA', 
          200:'#010101', 
          300:'4FB7DD'
        },
        violet:{
          300:'#5724FF'
        },
        yellow:{
          100:'#8E983f',
          300:'#EDFF66'
        }

      }
    },
  },
  plugins: [],
}