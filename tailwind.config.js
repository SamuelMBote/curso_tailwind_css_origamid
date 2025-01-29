/** @type {import('tailwindcss').Config} */
import plugin from 'tailwindcss/plugin';
export default {
  content: ['./src/**/*.{html,js,ts}', './*.html'],
  theme: {
    container: {
      center: true,
      padding: {
        DEFAULT: '.5rem',
        sm: '1rem',
      },
    },
    extend: {
      keyframes: {
        slideIn: {
          '0%': {
            opacity: 0,
            transform: 'translateX(-20px)',
          },
          '100%': {
            opacity: 1,
            transform: 'translateX(0)',
          },
        },
        fadeIn: {
          '0%': {
            opacity: 0,
          },
          '100%': {
            opacity: 1,
          },
        },
      },
      animation: {
        ['slide-in']: 'slideIn .4s ease-in-out forwards',
        ['fade-in']: 'fadeIn .4s ease-in-out forwards',
      },
      colors: {
        verde: {
          200: '#ACEF75',
          300: '#91EE77',
          400: '#17E880',
          700: '#2E482C',
          800: '#16281F',
          900: '#0F1C15',
          950: '#030504',
        },
      },
    },
  },
  plugins: [
    plugin(({ addUtilities }) => {
      function animationDelay() {
        const delays = {};
        for (let index = 0; index < 12; index++) {
          delays[`.animate-${index}`] = {
            'animation-delay': `${index * 100}ms`,
          };
        }
        return delays;
      }
      addUtilities(animationDelay());
    }),
  ],
};
