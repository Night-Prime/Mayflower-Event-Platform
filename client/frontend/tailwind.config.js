/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        Playfair: ["Playfair Display", "serif"],
        Allura: ["Allura", "cursive"],
        Inter: ["Inter", "sans-serif"],
        Montserrat: ["Montserrat", "sans-serif"],
        greatVibes: ["Great Vibes", "cursive"],
        kanit: ["Kanit", "sans-serif"],
      },
      animation: {
        "fade-in-left": "fade-in-left 0.25s ease-out",
        "fade-in-right": "fade-in-right 0.25s ease-out",
        "fade-in": "fade-in-bottom 0.25s ease-out",
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
            transform: "scale(0, 0) translateY(100%)",
          },
          "100%": {
            opacity: 1,
            transform: "scale(1, 1) translateY(0)",
          },
        },
      },
    },
  },

  plugins: [],
};
