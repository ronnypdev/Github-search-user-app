/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        SpaceMono: ["Space Mono", "sans-serif"]
      },
      colors: {
        primaryBlue: "var(--color-primary-blue)",
        lightBlue: "var(--color-light-blue)",
        normalGray: "var(--color-gray)",
        darkGray: "var(--color-dark-gray)",
        matteBlack: "var(--color-matte-black)",
        paleGray: "var(--color-pale-gray)",
        whiteGray: "var(--color-white-gray)",
        white: "var(--color-white)",
        black: "var(--color-black)",
        navyBlack: "var(--color-navy-black)",
      }
    },
  },
  plugins: [],
}

