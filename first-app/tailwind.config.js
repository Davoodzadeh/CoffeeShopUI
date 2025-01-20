/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  darkMode: "selector",
  theme: {
    extend: {
      colors: {
        brown: {
          100: "#ECE0D1",
          300: "#DBC1AC",
          600: "#967259",
          800: "#634832",
          900: "#523c29",
          920: "#2c2321",
          950: "#1D1716"
        }
      },
      boxShadow: {
        normal: "0px 1px 10px rgba(0,0,0,0.05)"
      },
      borderRadius: {
        "4xl": "2rem"
      },
      fontFamily: {
        dana: "dana",
        "dana-thin": "dana-thin",
        "dana-light": "dana-light",
        "dana-bold": "dana-bold",
        "morabba-light": "morabba-light",
        "morabba-bold": "morabba-bold",
        morabba: "morabba"
      },
      keyframes: {
        "slide-left": {
          "0%": {
            transform: "translate3d(0, 0, 0)"
          },
          "100%": {
            transform: "translate3d(-100%, 0, 0)"
          }
        },
        "slide-right": {
          "0%": {
            transform: "translate3d(0, 0, 0)"
          },
          "100%": {
            transform: "translate3d(100%, 0, 0)"
          }
        }
      },
      animation: {
        slideleft: "slide-left 1s ease-in-out 0.25s 1",
        slideright: "slide-right 1s ease-in-out 0.25s 1"
      },
      backgroundImage: {
        "desktop-img": "url(../public/images/headerBgDesktop.webp)",
        "tablet-img" : "url(../public/images/headerBgTablet.webp)",
        "mobile-img": "url(../public/images/headerBgMobile.webp)",
        "bg-baner":"url(../public/images/categories/category-right.jpg)",
        "bg-baner2":"url(../public/images/categories/category-left.jpg)"
      
      },
      container:{
        center: true,
        

      }
    },

    screens:{
      xs:'480px',
      xl:'1280px',
      lg: '1025px',
      md: '768px',
      sm:'640px'
    }
  },
  plugins: [
    function ({ addVariant }) {
      addVariant('child', '& > *');
      addVariant('child-hover', '& > *:hover');
      addVariant('not-last', '&:not(:last-child)');
    }
  ]
}
