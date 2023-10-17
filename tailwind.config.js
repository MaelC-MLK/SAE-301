/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,js}"],
  theme: {
    extend: {},
    fontFamily: {
      'roboto':['Roboto', 'sans-serif'],
    },
    colors: {
      'black':'var(--black)',
      'white':'var(--white)',
      'dark-blue':'var(--blue-dark)',
      'red':'var(--red)',
      'yellow':'var(--yellow)',
      'aqua':'var(--aqua)',
    },
  },
  plugins: [],
}

