/** @type {import('tailwindcss').Config} */
import tailwindScrollbar from "tailwind-scrollbar";
const test = tailwindScrollbar({ nocompatible: true });

export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        'neutral': '#000000',
        'primary': '#67DAFF',
        'secondary': '#F367FF',
      },

      screens: {
        'large': '1921px'
      },

      fontFamily: {
        poppins: ['Poppins', 'sans-serif'],
        amatic: ['"Amatic SC"', 'cursive'],
        orbitron: ['Orbitron', 'sans-serif'],
        vibes: ['"Great Vibes"', 'cursive'],
        sacramento: ['Sacramento', 'cursive'],
        rubik: ['Rubik', 'cursive']
      },

      boxShadow: {
        'lb': '-4px 4px 6px 0px rgba(0, 0, 0, 0.3)'
      },

      keyframes: {
        slide: {
          '0%': { transform: 'translate(0%)' },
          '100%': { transform: 'translate(-100%)' }
        },

        fade: {
          '0%': { opacity: '0' },
          '10%': { opacity: '1' },
          '25%': { opacity: '0' },
          '100%': { opacity: '0' }
        },

        fade2: {
          '0%': { opacity: '0' },
          '20%': { opacity: '0' },
          '35%': { opacity: '1' },
          '50%': { opacity: '0' },
          '100%': { opacity: '0' }
        },

        fade3: {
          '0%': { opacity: '0' },
          '45%': { opacity: '0' },
          '60%': { opacity: '1' },
          '75%': { opacity: '0' },
          '100%': { opacity: '0' }
        },

        fade4: {
          '0%': { opacity: '0' },
          '70%': { opacity: '0' },
          '85%': { opacity: '1' },
          '100%': { opacity: '0' }
        },

        smallPing: {
          '50%': {
            opacity: '0.3',
          },

          '100%': {
            transform: 'scale(1.04)',
            opacity: '0',
          },
        },
      },

      animation: {
        slide: 'slide 40s linear infinite',
        roll: 'roll 30s linear infinite',
        fade: 'fade 15s linear infinite',
        fade2: 'fade2 15s linear infinite',
        fade3: 'fade3 15s linear infinite',
        fade4: 'fade4 15s linear infinite',
        smallPing: 'smallPing 4s cubic-bezier(0, 0, 0.2, 1) infinite',
      },
    },
  },
  plugins: [
    test
  ],
};