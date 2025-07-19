/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      animation: {
        "float-slow": "floatSlow 8s ease-in-out infinite",
        "pulse-spark": "pulseSpark 1.5s ease-in-out infinite",
      },
      keyframes: {
        floatSlow: {
          "0%, 100%": { transform: "translateY(0)" },
          "50%": { transform: "translateY(-20px)" },
        },
        pulseSpark: {
          "0%, 100%": { transform: "scale(1)" },
          "50%": { transform: "scale(1.05) rotate(1deg)" },
        },
      },
    },
  },
  plugins: [],
};
