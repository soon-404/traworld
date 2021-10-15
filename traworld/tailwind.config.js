module.exports = {
  purge: ["./src/**/*.{js,jsx,ts,tsx}", "./public/index.html"],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      width: { "table": "40rem" },
      height: { "bar": "6%", "side": "88%" },
      fontFamily: {
        appName: ["Lobster"],
        body: ["Varela Round"],
      },
      backgroundImage: {
        "map": "url('/src/Images/city.jfif')",
        "menu": "url('/src/Images/menu.png')",
        "italy": "url('/src/Images/italy.jfif')",
      },
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
};
