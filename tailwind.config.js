/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,jsx}'],
  theme: {
    extend: {
      fontFamily: { sans: ['Inter', 'sans-serif'], display: ['Playfair Display', 'serif'] },
      boxShadow: { glow: '0 20px 80px rgba(16,185,129,.18)' }
    }
  },
  plugins: []
}
