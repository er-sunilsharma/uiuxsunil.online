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
        22: "22px",
        40: "40px",
      },
      inset: {
        42: "42px",
      },
      colors: {
        brand: "#424242",
        dark: "#586165",
        linkedin: "#006699",
        telegram: "#34AADF",
        brandyellow: "#f65a12",
      },
      lineHeight: {
        26: "26px",
      },
      height: {
        945: "94.5%",
        33: "33px",
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
