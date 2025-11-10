/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        'custom-text': '#41484b',
        'cta-bg': '#42484c',
        'icon-bg': '#42484C',
        'header-text': '#ffffff',
      },
    },
  },
  plugins: [],
}