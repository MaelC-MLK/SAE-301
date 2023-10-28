/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,js}"],
  important: true,
  theme: {
    extend: {
      fontFamily: {
        'roboto':['Roboto', 'sans-serif'],
      },
      colors: {
        'black-light':'var(--black-light)',
        'white':'var(--white)',
        'dark-blue':'var(--blue-dark)',
        'red':'var(--red)',
        'yellow':'var(--yellow)',
        'aqua':'var(--aqua)',
      },  
      backdropBlur: {
        xs: '1px',
      },
      boxShadow: {
        'white': '0px 10px 50px 2px rgba(255, 255, 255, 0.25)',
      },
      backgroundImage: {
        'bg-gradient-radial-red': "radial-gradient(50% 50% at 50% 50%, #E44C65 0%, rgba(28,29,38,0.00) 100%)",
        'bg-gradient-radial-white': "radial-gradient(50% 50% at 50% 50%, #FFF 0%, rgba(28,29,38,0.00) 100%)",
        'bg-gradient-radial-aqua': "radial-gradient(50% 50% at 50% 50%, #7BCBBE 0%, rgba(28,29,38,0.00) 100%)",
        'bg-gradient-radial-yellow': "radial-gradient(50% 50% at 50% 50%, #FFD62F 0%, rgba(28, 29, 38, 0.00) 100%)",
      },
      height: {
        "custom":"700px",
        "gradient":"640px",
        "custom1":"500px",
      },  
      width: {
        "custom":"700px",
        "custom1":"900px",
        "gradient":"480px",
      },
    },
  },
  plugins: [],
}
