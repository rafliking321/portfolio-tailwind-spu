/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./index.html"],
  darkMode: "class",
  theme: {
    container: {
      center: true,
      padding: "16px",
    },
    extend: {
      colors: {
        primary: "#0284c7",
        dark: "#334155",
      },
      screens: {
        "2xl": "1320px",
      },
    },
  },
  plugins: [],
};

// <button
// id="hamburger"
// name="hamburger"
// type="button"
// class="block absolute right-4"
// >
// <span class="hamburger-line"></span>
// <span class="hamburger-line"></span>
// <span class="hamburger-line"></span>
// <span></span>
// </button>
