/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        'brand-bg': '#111111',
        'brand-card': '#1a1a1a',
        'brand-text': '#e5e5e5',
        'brand-muted': '#a3a3a3',
        'brand-border': '#333333'
      },
      fontFamily: {
        sans: ['Inter', 'sans-serif'],
      }
    },
  },
  plugins: [],
}
