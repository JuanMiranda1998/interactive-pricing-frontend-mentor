/** @type {import('tailwindcss').Config} */
export default {
  content: ["./src/**/*.{html,js,jsx}"],
  theme: {
    extend: {
      backgroundImage: {
        'background-pattern': "url('./src/assets/images/bg-pattern.svg')",
        'pattern-circles': "url('./src/assets/images/pattern-circles.svg')",
      }
    },
    backgroundPosition: {
      top: 'top',
      'top-4': 'center top -4rem',
      bottom: 'bottom',
      center: 'center',
      left: 'left',
      'left-bottom': 'left bottom',
      'left-top': 'left top',
      right: 'right',
      'right-bottom': 'right bottom',
      'right-top': 'right top',
    },
    fontFamily: {
      'Title': '"ManropeExtrabold"',
      'Body': '"ManropeSemibold"',
    }
  },
  plugins: [],
}

