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
      colors: {
        "primary": "#8842F0",
        "secondary": "#E7D9FC",
        "dark": "#1C1B1F",
      },
      backgroundImage: {
        'footer-bg': "url('./assets/hero-bg.png')"
      },
      boxShadow: {
        'accentued': '0px 13px 19px 0px rgba(0, 0, 0, 0.07);'
      },
    },
    // screens: {
    //   'tablet': '576px',
    //   // => @media (min-width: 640px) { ... }
    
    //   'laptop': '1024px',
    //   // => @media (min-width: 1024px) { ... }
    
    //   'desktop': '1280px',
    //   // => @media (min-width: 1280px) { ... }
    // },
    fontFamily: {
      "Work-Sans": ["Work Sans", "sans-serif"]
    },
    container: {
      center: true,
      padding: "1.5rem",
      screens: {
        lg: "1124px",
        xl: "1124px",
        "2xl": "1124px",
      },
    }
  },
  plugins: [],
}

