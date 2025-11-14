/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        'cream': '#FFF7E3',
        'light-green': '#CFEED1',
        'jungle': '#0B5D1E',
        'primary': '#0B5D1E',
        'base-100': '#FFF7E3',
        'neutral': '#1F3D2E',
        'icon-bg': '#0B5D1E',
        'header-text': '#0B5D1E'
      },
    },
  },
  plugins: [],
}