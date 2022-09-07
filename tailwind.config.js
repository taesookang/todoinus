/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        brand: {
          red: "#E45F5F",
          50: "#FAFFFE",
          100: "#D7F2F0",
          200: "#9DDCD8",
          300: "#1D8780",
          400: "#134E4A",
          border: "#E1E1E1",
          black: "#262626"
        },
        
      },
    },
  },
  plugins: [],
};
