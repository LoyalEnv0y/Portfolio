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
        }
      },

      animation: {
        slide: 'slide 40s linear infinite'
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