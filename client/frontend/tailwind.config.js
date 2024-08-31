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
        kanit: ["Kanit", "sans-serif"]
      },
    },
  },
 
  plugins: [],
};
