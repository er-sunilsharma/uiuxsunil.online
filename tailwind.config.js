/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./comps/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      backgroundImage: {
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
        "gradient-conic":
          "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
      },
      fontSize: {
        15: "15px",
        22: "22px",
        40: "40px",
      },
      inset: {
        42: "42px",
      },
      scale: {
        103: "1.03",
      },
      colors: {
        brand: "#424242",
        dark: "#586165",
        linkedin: "#006699",
        telegram: "#34AADF",
        brandyellow: "#f65a12",
        linkedin: "rgb(10, 102, 194)",
        "photoshop-color": "#011e37",
        "photoshop-text": "#2ea2f7",
      },
      lineHeight: {
        26: "26px",
      },
      height: {
        945: "94.5%",
        33: "33px",
        0.7: "3px",
      },
      width: {
        998: "99.8%",
        33: "33px",
      },
      margin: {
        "04": "4%",
      },
    },
  },
  plugins: [],
};
