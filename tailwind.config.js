/** @type {import('tailwindcss').Config} */
export default {
  
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  
  theme: {

    extend: {

      colors: {
        "primary-color": "#9333ea"
      },

      fontFamily: {
        "alegreya-sans": ["Alegreya Sans", "sans-serif"],
        "didact-gothic": ["Didact Gothic", "sans-serif"],
        "acme": ["Acme", "sans-serif"],
        "rowdies": ["Rowdies", "sans-serif"]
      }

    },

    screens: {
      xs: "480px",
      ss: "620px",
      sm: "768px",
      md: "1060px",
      lg: "1200px",
      xl: "1700px"
    }

  },

  plugins: [],
}

