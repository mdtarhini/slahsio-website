module.exports = {
  purge: [],
  darkMode: "class", // or 'media' or 'class'
  theme: {
    cursor: {
      auto: "auto",
      default: "default",
      pointer: "pointer",
      wait: "wait",
      text: "text",
      move: "move",
      "not-allowed": "not-allowed",
      crosshair: "crosshair",
      "zoom-in": "zoom-in",
      "zoom-out": "zoom-out",
    },

    fontFamily: {
      logo: ["Allura", "cursive"],
      body: ["Montserrat", "sans-serif"],
    },
    extend: {
      backgroundImage: (theme) => ({
        "slashio-profile": "url('./images/profile.jpg')",
      }),
      colors: {
        "dark-gray": "#111111",
        "light-gray": "#151515",
        "lighter-gray": "#353839",
        "jet-black": "#343434",
        "raisin-blak": "#242124",
      },
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
};
