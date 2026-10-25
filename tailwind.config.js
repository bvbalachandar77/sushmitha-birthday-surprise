/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        blush: '#FFD6E7',
        'blush-light': '#FFF0F5',
        softpink: '#FFB6D5',
        cream: '#FFF8F2',
        creamcard: '#FFFBF7',
        lavender: '#E8DFFF',
        'lavender-light': '#F4EFFF',
        deeprose: '#C94F7C',
        'deeprose-dark': '#A3365F',
        'deeprose-light': '#DF6A94',
        gold: '#FFD166',
        warmgrey: '#6B5E62',
      },
      fontFamily: {
        serif: ['"Playfair Display"', 'Georgia', 'serif'],
        sans: ['"Plus Jakarta Sans"', 'system-ui', '-apple-system', 'sans-serif'],
        handwriting: ['"Caveat"', 'cursive'],
      },
      boxShadow: {
        'pastel': '0 10px 30px -10px rgba(201, 79, 124, 0.15)',
        'pastel-lg': '0 20px 40px -15px rgba(201, 79, 124, 0.22)',
        'glow': '0 0 25px rgba(255, 182, 213, 0.6)',
        'glow-rose': '0 0 30px rgba(201, 79, 124, 0.4)',
        'letter': '0 15px 35px -5px rgba(107, 94, 98, 0.15), 0 5px 15px rgba(0, 0, 0, 0.05)',
      },
      keyframes: {
        'float-slow': {
          '0%, 100%': { transform: 'translateY(0px) rotate(0deg)' },
          '50%': { transform: 'translateY(-12px) rotate(2deg)' },
        },
        'sparkle-pulse': {
          '0%, 100%': { opacity: '0.4', transform: 'scale(0.8)' },
          '50%': { opacity: '1', transform: 'scale(1.2)' },
        },
        'flame-flicker': {
          '0%, 100%': { transform: 'scale(1) skewX(0deg)', opacity: '0.95' },
          '25%': { transform: 'scale(1.1, 0.95) skewX(-2deg)', opacity: '1' },
          '75%': { transform: 'scale(0.95, 1.05) skewX(2deg)', opacity: '0.9' },
        },
        'shimmer': {
          '0%': { backgroundPosition: '-200% 0' },
          '100%': { backgroundPosition: '200% 0' },
        }
      },
      animation: {
        'float-slow': 'float-slow 4s ease-in-out infinite',
        'sparkle-pulse': 'sparkle-pulse 2s ease-in-out infinite',
        'flame-flicker': 'flame-flicker 1.2s ease-in-out infinite',
        'shimmer': 'shimmer 2.5s infinite linear',
      }
    },
  },
  plugins: [],
}
