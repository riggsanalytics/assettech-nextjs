/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        'asset': {
          // Primary Colors from Brand Guidelines
          'blue': '#003C71', // Asset Blue
          'mediumBlue': '#00A1E4', // Medium Blue
          'green': '#A6CE39', // Asset Green
          'orange': '#F2A900', // Asset Orange
          'lightBlue': '#90D7F2', // Light Blue
          // Secondary Colors from Brand Guidelines
          'darkBlue': '#0F2C50', // Dark Blue
          'grayBlue': '#2E577D', // Gray Blue
          'mediumGray': '#A5BAC9', // Medium Gray
          'lightGray': '#D8DEE1', // Light Gray
          'offwhite': '#F8F6F3', // Offwhite
          // Legacy aliases for backward compatibility
          'primary': '#003C71', // Asset Blue
          'secondary': '#00A1E4', // Medium Blue
          'accent': '#A6CE39', // Asset Green
          'light': '#F8F6F3', // Offwhite
          'dark': '#0F2C50', // Dark Blue
        }
      },
      animation: {
        'fade-in': 'fadeIn 0.5s ease-in-out',
        'slide-up': 'slideUp 0.5s ease-out',
        'float': 'float 6s ease-in-out infinite',
      },
      keyframes: {
        fadeIn: {
          '0%': { opacity: '0' },
          '100%': { opacity: '1' },
        },
        slideUp: {
          '0%': { transform: 'translateY(20px)', opacity: '0' },
          '100%': { transform: 'translateY(0)', opacity: '1' },
        },
        float: {
          '0%, 100%': { transform: 'translateY(0)' },
          '50%': { transform: 'translateY(-20px)' },
        }
      }
    },
  },
  plugins: [],
}