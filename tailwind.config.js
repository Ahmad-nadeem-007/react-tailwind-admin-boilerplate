/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        customGray: "#adb5bd",
        customLightGray: "#e9ecef",
        customBlue: "#001d3d",
        customBlack: "#212529",
        customWhite: "white",
      },
    },
  },
  plugins: [],
}

