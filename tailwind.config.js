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
      colors: {
        brand: "#424242",
        dark: "#586165",
      },
      lineHeight: {
        26: "26px",
      },
      height: {
        945: "94.5%",
      },
      width: {
        998: "99.8%",
      },
      margin: {
        "04": "4%",
      },
    },
  },
  plugins: [],
};
