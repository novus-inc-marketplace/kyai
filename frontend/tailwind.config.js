/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        'primary': '#16a34a',
        'secondary': '#f97316',
        'accent': '#3b82f6',
        'neutral': '#1f2937',
        'base-100': '#ffffff',
      },
    },
  },
  plugins: [],
}