module.exports = {
  purge: [],
  darkMode: false, // or 'media' or 'class'
  theme: {
    maxWidth: {
      "1/4": "25%",
      "1/2": "50%",
      "3/4": "75%",
    },
    boxShadow: {
      "2xl": "4px 4px 4px 4px rgba(0, 0, 0, 0.02)",
      "3xl": "8px 8px 6px -6px rgba(0, 0, 0, 0.75)",
    },
    extend: {
      lineHeight: {
        12: "3rem",
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
