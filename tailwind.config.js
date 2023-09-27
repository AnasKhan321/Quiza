/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      backgroundColor: {
        'transparent': 'transparent',
        'black-t-50': 'rgba(0,0,0,0.5)',
        // Add more transparency values as needed
      },
    },
  },
  plugins: [],
}

