/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      animation: {
        "float-slow": "floatSlow 8s ease-in-out infinite",
        "pulse-spark": "pulseSpark 1.5s ease-in-out infinite",
        "rotate-ring": "rotateRing 20s linear infinite",
        "fade-in-up": "fadeInUp 1s ease-out forwards",
        "scroll-pop": "scrollPop 1s ease-in-out",
        "zoom-glow": "zoomGlow 3s ease-in-out infinite",
        "fade-in": "fadeIn 0.8s ease-in-out both",
        float: "float 3s ease-in-out infinite",
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
        rotateRing: {
          "0%": { transform: "rotate(0deg)" },
          "100%": { transform: "rotate(360deg)" },
        },
        fadeInUp: {
          "0%": { opacity: 0, transform: "translateY(40px)" },
          "100%": { opacity: 1, transform: "translateY(0)" },
        },
        scrollPop: {
          "0%": { transform: "scale(0.95)", opacity: 0 },
          "100%": { transform: "scale(1)", opacity: 1 },
        },
        zoomGlow: {
          "0%, 100%": {
            transform: "scale(1)",
            boxShadow: "0 0 0 rgba(255, 255, 255, 0)",
          },
          "50%": {
            transform: "scale(1.08)",
            boxShadow: "0 0 20px rgba(255, 255, 255, 0.7)",
          },
        },
        fadeIn: {
          "0%": { opacity: 0, transform: "translateY(20px)" },
          "100%": { opacity: 1, transform: "translateY(0)" },
        },
        float: {
          "0%": { transform: "translateY(0px)" },
          "50%": { transform: "translateY(-10px)" },
          "100%": { transform: "translateY(0px)" },
        },
      },
    },
  },
  plugins: [],
};
