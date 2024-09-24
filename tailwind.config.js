/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [ "./src/**/*.{js,jsx,ts,tsx}",],
  theme: {
    extend: {
      fontFamily: {
        'Sora': ['Sora', 'sans-serif'],
        'Inter': ['Inter', 'sans-serif'],
      },
   
    },
  },
  plugins: [],
}

