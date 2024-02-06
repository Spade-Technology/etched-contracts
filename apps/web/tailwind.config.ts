/** @type {import('tailwindcss').Config} */
// import CamptonBold from "./public/fonts/campton-cufonfonts"
import defaultTheme from "tailwindcss/defaultTheme";

module.exports = {
  darkMode: ["class"],
  content: ["./pages/**/*.{ts,tsx}", "./components/**/*.{ts,tsx}", "./app/**/*.{ts,tsx}", "./src/**/*.{ts,tsx}"],
  theme: {
    container: {
      center: true,
      padding: "2rem",
      screens: {
        "2xl": "1400px",
      },
    },
    extend: {
      backgroundImage: {
        "gardient-pattern": "",
      },
      fontFamily: {
        campton: ["Campton", "sans-serif"],
        body: ["Quicksand", "sans-serif"],
        poppins: ["Poppins", "sans-serif"],
      },
      colors: {
        border: "rgba(var(--border) , <alpha-value>)",
        input: "rgba(var(--input) , <alpha-value>)",
        ring: "rgba(var(--ring) , <alpha-value>)",
        background: "rgba(var(--background) , <alpha-value>)",
        foreground: "rgba(var(--foreground) , <alpha-value>)",
        skeleton: "rgba(var(--skeleton) , <alpha-value>)",
        primary: {
          DEFAULT: "rgba(var(--primary) , <alpha-value>)",
          foreground: "rgba(var(--primary-foreground) , <alpha-value>)",
        },
        secondary: {
          DEFAULT: "rgba(var(--secondary) , <alpha-value>)",
          foreground: "rgba(var(--secondary-foreground) , <alpha-value>)",
        },
        destructive: {
          DEFAULT: "rgba(var(--destructive) , <alpha-value>)",
          foreground: "rgba(var(--destructive-foreground) , <alpha-value>)",
        },
        muted: {
          DEFAULT: "rgba(var(--muted) , <alpha-value>)",
          foreground: "rgba(var(--muted-foreground) , <alpha-value>)",
        },
        accent: {
          DEFAULT: "rgba(var(--accent) , <alpha-value>)",
          foreground: "rgba(var(--accent-foreground) , <alpha-value>)",
        },
        popover: {
          DEFAULT: "rgba(var(--popover) , <alpha-value>)",
          foreground: "rgba(var(--popover-foreground) , <alpha-value>)",
        },
        card: {
          DEFAULT: "rgba(var(--card) , <alpha-value>)",
          foreground: "rgba(var(--card-foreground) , <alpha-value>)",
        },
        success: {
          DEFAULT: "rgba(var(--success) , <alpha-value>)",
          foreground: "rgba(var(--success-foreground) , <alpha-value>)",
        },
      },
      borderRadius: {
        lg: "var(--radius)",
        md: "calc(var(--radius) - 2px)",
        sm: "calc(var(--radius) - 4px)",
      },
      boxShadow: {
        sm: "0 1px 2px 0 var(--shadow-color-small)",
        md: "0 4px 6px -1px var(--shadow-color-small), 0 2px 4px -1px var(--shadow-color-small)",
        lg: "0 10px 15px -3px var(--shadow-color-small), 0 4px 6px -2px var(--shadow-color-small)",
        xl: "0 20px 25px -5px var(--shadow-color-small), 0 10px 10px -5px var(--shadow-color-small)",
        "2xl": "0 25px 50px -12px var(--shadow-color)",
        "3xl": "0px 4px 13px 0px var(--shadow-color)",
        "4xl": "0px 4px 20px 3px var(--shadow-color-small)",
        "etched-1": "var(--shadow-color-small) 0px 0px 16px",
        "etched-2": "var(--shadow-color-small) 0px 0px 32px",
      },
      keyframes: {
        shake: {
          "0%, 100%": {
            transform: "rotate(0deg)",
          },
          "25%": {
            transform: "rotate(-30deg)",
          },
          "75%": {
            transform: "rotate(30deg)",
          },
        },
        "accordion-down": {
          from: { height: 0 },
          to: { height: "var(--radix-accordion-content-height)" },
        },
        "accordion-up": {
          from: { height: "var(--radix-accordion-content-height)" },
          to: { height: 0 },
        },
      },
      animation: {
        "accordion-down": "accordion-down 0.2s ease-out",
        "accordion-up": "accordion-up 0.2s ease-out",
        shake: "shake 0.5s ease-in-out",
      },
    },
    screens: {
      xs: "330px",
      ...defaultTheme.screens,
    },
  },
  plugins: [require("tailwindcss-animate")],
};
