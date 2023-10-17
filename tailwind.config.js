/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      animation: {
        slide: "slideDown 300ms ease-out forwards",
      },
      keyframes: {
        slideDown: {
          "0%, 100%": { opacity: 0, transform: "translateY(-3rem)" },
          "50%": { opacity: 1, transform: "translateY(0)" },
        },
      },
      backgroundImage: {
        properties: "url('assets/images/neighbourhood.jpeg')",
      },
    },
  },
  plugins: [],
};
