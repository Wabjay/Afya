module.exports = {
  purge: ['./src/**/*.{js,jsx,ts,tsx}', './public/index.html'],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
       gridTemplateColumns: {
      // Simple 8 row grid
      'auto': 'auto 1fr',
    },
  },
     screens: {
      'tablet': '576px',
      // => @media (min-width: 640px) { ... }
    
      'laptop': '1024px',
      // => @media (min-width: 1024px) { ... }
    
      'desktop': '1280px',
      // => @media (min-width: 1280px) { ... }
    },
  },
  variants: {
    extend: { 
     },
   
  },
  plugins: [],
}
