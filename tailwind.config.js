module.exports = {
  purge: ["./src/**/*.{js,jsx,ts,tsx}"],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      fontFamily: {
        "title": ["Chivo"],
        "body": ["Overpass"]
      }
    },
    container: {
      padding: "1rem",
    }
  },
  variants: {
    extend: {
      padding: ["first"],
      margin: ["last"]
    },
  },
  plugins: [],
}
