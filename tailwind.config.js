module.exports = {
  purge: [],
  darkMode: false, // or 'media' or 'class'
  theme: {
    boxShadow: {
     '3xl': '8px 8px 6px -6px rgba(0, 0, 0, 0.75)',
    },
    extend: {
      lineHeight: {
        '12': '3rem',
       },
      fontFamily: {
        Montserrat: ["Montserrat, sans-serif"],
        Teko: ["Teko", "sans-serif"],
      },
    },
  },
  variants: {
    extend: {
      transitionProperty: ["hover", "focus"],
      transform: ["hover", "focus"],
    },
  },
  plugins: [],
};
