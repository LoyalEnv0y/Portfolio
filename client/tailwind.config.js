/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      keyframes: {
        slide: {
          '0%': { transform: 'translate(0%)' },
          '100%': { transform: 'translate(-100%)' }
        },

        fade: {
          '0%': { opacity: '0' },
          '25%': { opacity: '1' },
          '26%': { opacity: '0' },
          '100%': {opacity: '0'}
        },

        fade2: {
          '0%': { opacity: '0' },
          '26%': { opacity: '0' },
          '50%': { opacity: '1' },
          '51%': { opacity: '0' },
          '100%': {opacity: '0'}

        },

        fade3: {
          '0%': { opacity: '0' },
          '51%': { opacity: '0' },
          '75%': { opacity: '1' },
          '76%': { opacity: '0' },
          '100%': {opacity: '0'}
        },

        fade4: {
          '0%': { opacity: '0' },
          '76%': { opacity: '0' },
          '100%': { opacity: '1' }
        },
      },

      animation: {
        slide: 'slide 40s linear infinite',
        roll: 'roll 30s linear infinite',
        fade: 'fade 15s cubic-bezier(0.16, 1, 0.3, 1) infinite',
        fade2: 'fade2 15s cubic-bezier(0.16, 1, 0.3, 1) infinite',
        fade3: 'fade3 15s cubic-bezier(0.16, 1, 0.3, 1) infinite',
        fade4: 'fade4 15s cubic-bezier(0.16, 1, 0.3, 1) infinite',
      },

      fontFamily: {
        poppins: ['Poppins', 'sans-serif'],
        amatic: ['"Amatic SC"', 'cursive'],
        orbitron: ['Orbitron', 'sans-serif'],
        vibes: ['"Great Vibes"', 'cursive'],
        sacramento: ['Sacramento', 'cursive'],
      }
    },
  },
  plugins: [],
};