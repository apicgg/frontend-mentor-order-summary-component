/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./*.html'],
  theme: {
    extend: {
      backgroundImage: {
        'hero-pattern-desk': "url('./images/pattern-background-desktop.svg')",
        'hero-pattern-mobile': "url('./images/pattern-background-mobile.svg')",
      },
    },
    colors: {
      paleBlue: 'hsl(225, 100%, 94%)',
      brightBlue: 'hsl(245, 75%, 52%)',
      veryPaleBlue: 'hsl(225, 100%, 98%)',
      desaturatedBlue: 'hsl(224, 23%, 55%)',
      darkBlue: 'hsl(223, 47%, 23%)',
    },
  },
  plugins: [],
}
