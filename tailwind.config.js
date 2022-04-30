module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      scale: {
        '175': '1.75',
        '200': '2'
      },
      colors: {
        'back':"#000d1d",
        'primary':"#08ffc8",
        'c':"#03599C",
        'cpp':"#9C033A",
        'python':"#0277BD",
        'js':"#ffd600",
        'dart':"#1565c0",

        'html':"#E44D26",
        'css':"#1572B6",
        'bootstrap':"#673ab7",
        'tailwind':"#2383ae",
        'vue':"#5d90e8",
        'react':"#61DAFB",
        'django':"#092d1f",
        'electron':"#2B2E3A",
        'mongo':"#4caf50",
        'mysql':"#EA8C10",

        'git':"#F4511E",
        'docker':"#2395EC",
        'azure':"#0c427c",
        'figma':"#03011c",
      },
      fontFamily: {
        'roboto':['Roboto Mono', 'sans-serif'],
        'poppins':['Poppins', 'sans-serif'],
      }
    },
  },
  plugins: [],
}
