/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  darkMode: 'class',
  theme: {
    extend: {
      colors: {
        mango: {
          light: '#FFE29A',
          DEFAULT: '#FFB703', // Mango Gold
          dark: '#F4A300',    // Accent
          deep: '#E08A00',
        },
        farm: {
          light: '#40916C',
          DEFAULT: '#2D6A4F', // Farm Green
          dark: '#1B4332',    // Text / Deep Green
          deep: '#081C15',
        },
        bgWarm: {
          light: '#FFF8E7',   // Background Warm Cream
          dark: '#0F291E',    // Deep Farm Forest Background
        },
      },
      fontFamily: {
        serif: ['"Playfair Display"', 'Georgia', 'serif'],
        sans: ['"Outfit"', '"Inter"', 'sans-serif'],
      },
      animation: {
        'float-slow': 'float 8s ease-in-out infinite',
        'float-medium': 'float 6s ease-in-out infinite',
        'float-fast': 'float 4s ease-in-out infinite',
        'sway-slow': 'sway 8s ease-in-out infinite',
        'sway-medium': 'sway 5s ease-in-out infinite',
        'shine': 'shine 1.5s ease-in-out infinite',
        'pulse-slow': 'pulse 3s cubic-bezier(0.4, 0, 0.6, 1) infinite',
      },
      keyframes: {
        float: {
          '0%, 100%': { transform: 'translateY(0px) rotate(0deg)' },
          '50%': { transform: 'translateY(-15px) rotate(4deg)' },
        },
        sway: {
          '0%, 100%': { transform: 'rotate(0deg)' },
          '50%': { transform: 'rotate(6deg)' },
        },
        shine: {
          '100%': { left: '125%' },
        },
      },
      boxShadow: {
        'luxury': '0 10px 30px -10px rgba(27, 67, 50, 0.15)',
        'luxury-dark': '0 10px 30px -10px rgba(0, 0, 0, 0.5)',
        'glow-gold': '0 0 20px rgba(255, 183, 3, 0.35)',
        'glow-green': '0 0 20px rgba(45, 106, 79, 0.35)',
      },
    },
  },
  plugins: [],
}
