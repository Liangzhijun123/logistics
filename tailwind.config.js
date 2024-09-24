/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [ "./src/**/*.{js,jsx,ts,tsx}",],
  theme: {
    extend: {
      fontFamily: {
        'Sora': ['Sora', 'sans-serif'],
        'Inter': ['Inter', 'sans-serif'],
      },
      boxShadow: {
        'custom-blur': '5px 4px 40px rgba(0, 0, 0, 0.5)', 
      },
    },
  },
  plugins: [],
}

