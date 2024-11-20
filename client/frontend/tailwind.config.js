/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        Playfair: ["Playfair Display", "serif"],
        Allura: ["Allura", "cursive"],
        Lato: ["Lato", "sans-serif"],
        Quicksand: ["Quicksand", "sans-serif"],
        Cinzel: ["Cinzel", "sans-serif"],
      },
      colors: {
        goldLight: "#FFBB39",
        goldDark: "#997022",
        gardens: "#2D3D26",
        gardenslight: "#8FB87D",
        maypink: "#FFDFDF",
        mayblack: "#212121",
      },
      animation: {
        "fade-in-left": "fade-in-left 0.25s ease-out",
        "fade-in-right": "fade-in-right 0.25s ease-out",
        "fade-in": "fade-in-bottom 0.3s ease-in",
      },
      keyframes: {
        "fade-in-left": {
          "0%": {
            opacity: 0,
            transform: "scale(0, 0) translateX(-100%) translateY(100%)",
          },
          "100%": {
            opacity: 1,
            transform: "scale(1, 1) translateX(0) translateY(0)",
          },
        },
        "fade-in-right": {
          "0%": {
            opacity: 0,
            transform: "scale(0, 0) translateX(100%) translateY(100%)",
          },
          "100%": {
            opacity: 1,
            transform: "scale(1, 1) translateX(0) translateY(0)",
          },
        },
        "fade-in-bottom": {
          "0%": {
            opacity: 0,
            transform: "translateY(100%)",
          },
          // "50%": {
          //   opacity: 0.5,
          //   transform: "translateY(50%)",
          // },
          "100%": {
            opacity: 1,
            transform: "translateY(20%)",
          },
        },
      },
    },
  },

  plugins: [],
};
