//error tailwind not respond
/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./src/**/*.{js,jsx,ts,tsx}',
  "./index.html"],
  theme: {
    fontWeight: {
      //hairline: 100,
      //'extra-light': 100,
      //thin: 200,
      light: 300,
      normal: 400,
      medium: 500,
      semibold: 600,
      bold: 700,
      extrabold: 800,
      //'extra-bold': 800,
      //black: 900,
    },
    extend: {
      backgroundImage: {
        'b1': "url('../src/assets/banners/b1.png')",
        'b2': "url('../src/assets/banners/b2.jpg')",
        'b3': "url('../src/assets/banners/b3.webp')",
      },
      colors: {
        white: "#fff",
        dimWhite: "rgba(255, 255, 255, 0.7)",//p
        white1: "#E3E6F3",
        yellow: "#ffbd27",
        yellow1: "rgb(243, 181, 25)",
        peach:"B8694F",//heroh1
        green: "#088178",
        lightGreen: "#cce7d0",
        red: "#ef3636",
        blue: "#041e42",
        grey: "#818ea0",
        brown: "#222",//hero24
        black: "#000",
        black1: "#1a1a1a",
      },
      fontFamily: {
        spartan: ["Spartan", "sans-serif"],
      },
    },
    screens: {
      ss: "477px",
      sm: {'max' : '477px'},
      md: {'max' : '799px'},
      mmd: "799px",
    },
  },
  plugins: [],
}