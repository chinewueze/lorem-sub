/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}",],
  theme: {
    screens: {
      sm: "330px",
      md: "768px",
      lg: "976px",
      xl: "1440px"
    },
    extend: {
      colors : {
        primary:{
          marineblue: " hsl(213, 96%, 18%)",
          purplishblue : "hsl(243, 100%, 62%)",
          pastelblue: "hsl(228, 100%, 84%)",
          lightblue : "hsl(206, 94%, 87%)",
          strawberryred: "hsl(354, 84%, 57%)"
        },
        neutral: {
          coolgray: "hsl(231, 11%, 63%)",
          lightgray: "hsl(229, 24%, 87%)",
          magnolia:" hsl(217, 100%, 97%)",
          alabaster: "hsl(231, 100%, 99%)"
        }
      },
      backgroundImage: {
        'svg-background': `url('../public/assets/Images/bg-sidebar-desktop.svg')`,
      },
    },
  },
  plugins: [],
}

