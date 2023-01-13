/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    letterSpacing: {
      tightest: "-.075em",
      tighter: "-.05em",
      tight: "-.025em",
      normal: "0",
      wide: ".1em",
      wider: ".15em",
      widest: ".25em",
    },
    colors: {
      orange: "#b05d4b",
      "dark-gray": "#20242e",
      "blue-gray": "#405f70",
      "off-white": "#eff1f2",
      white: "white",
    },
  },
  extend: {
    fontFamily: {
      sans: ["var(--font-josefin"],
    },
  },
  plugins: [],
};