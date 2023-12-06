/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
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
   fontFamily: {
    "Work-Sans": ["Work Sans", "sans-serif"]
  },
  },
  plugins: [],
}

