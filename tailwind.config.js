module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    borderWidth: {
      DEFAULT: "1px",
      0: "0",
      2: "2px",
      3: "3px",
      4: "4px",
      6: "6px",
      8: "16px",
    },
    colors: {
      blue: "#4931ad",
      purple: "#7e5bef",
      pink: "#ff49db",
      orange: "#ff7849",
      red: "#FF4444",
      lightblue: "#f4f2ff",
      green: "#13ce66",
      yellow: "#ffc82c",
      "grey-brown": "#534C4C",
      "gray-dark": "#9ca3af",
      gray: "#8492a6",
      graylight: "#d3dce6",
      white: "#ffffff",
      black: "#000000",
    },
    fontFamily: {
      sans: ["DM Sans", "sans-serif"],
      serif: ["Merriweather", "serif"],
    },
    extend: {
      animation: {
        "spin-slow": "spin 2s linear infinite",
      },
    },
  },
  plugins: [require("@tailwindcss/forms")],
};
