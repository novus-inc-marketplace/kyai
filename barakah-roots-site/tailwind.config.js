/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        cream: '#FFF7EC',
        'light-green': '#9FD6A5',
        'deep-olive': '#3F7D4A',
        'warm-sand': '#F2E6D6',
        'barakah-text': '#203122'
      },
      fontFamily: {
        sans: ['Inter', 'system-ui', 'sans-serif'],
        display: ['Merriweather', 'serif']
      }
    },
  },
  plugins: [],
}