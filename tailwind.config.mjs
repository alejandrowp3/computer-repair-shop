/** @type {import('tailwindcss').Config} */
import animate from "tailwindcss-animate";

export default {
  darkMode: ["class"],
  content: [
    './pages/**/*.{ts,tsx}',
    './components/**/*.{ts,tsx}',
    './app/**/*.{ts,tsx}',
    './src/**/*.{ts,tsx}',
  ],
  prefix: "",
  theme: {
    // ... existing theme code ...
    extend: {
      // ... existing extend code ...
      keyframes: {
        "accordion-down": {
          from: { height: "0" },
          to: { height: "var(--radix-accordion-content-height)" },
        },
        "accordion-up": {
          from: { height: "var(--radix-accordion-content-height)" },
          to: { height: "0" },
        },
        "appear": {
          "0%": { opacity: "0" },
          "100%": { opacity: "1" },
        },
        "slide": {
          "0%": { transform: "translateX(100%)" },
          "100%": { transform: "translateX(0%)" },
        },
      },
      animation: {
        "accordion-down": "accordion-down 0.2s ease-out",
        "accordion-up": "accordion-up 0.2s ease-out",
        "appear": "appear 1s ease-in-out forwards",
        "slide": "slide 750ms ease-in-out forwards",
      },
    },
  },
  plugins: [animate],
}