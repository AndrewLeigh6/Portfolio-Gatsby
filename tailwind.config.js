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
  },
  variants: {
    extend: {
      padding: ["first"],
      margin: ["last"]
    },
  },
  plugins: [],
}
