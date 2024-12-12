/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        primary: "#163300",
        primaryopa: "rgba(23, 154, 71, 1)",
        hoverr: "#205200",
      },
      height: {
        505: "505px",
      },
      width: {
        111: "88%",
      },
      screens: {
        sm: "360px",
        md: "768px",
        lg: "976px",
        lgs: "1150px",
        xl: "1440px",
      },
      backgroundImage: {
        "custom-gradient":
          "linear-gradient(92.63deg, #163300 -8.22%, #80e142 87.94%)",
        "hover-gradient": "linear-gradient(90deg, #163300, #1d4400)",
        "wave-pattern": "url('/src/assets/vector.png')",
      },
    },
  },
  plugins: [],
};
