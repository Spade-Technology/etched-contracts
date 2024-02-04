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
        border: "var(--border)",
        input: "var(--input)",
        ring: "var(--ring)",
        background: "var(--background)",
        foreground: "var(--foreground)",
        skeleton: "var(--skeleton)",
        primary: {
          DEFAULT: "var(--primary)",
          foreground: "var(--primary-foreground)",
        },
        secondary: {
          DEFAULT: "var(--secondary)",
          foreground: "var(--secondary-foreground)",
        },
        destructive: {
          DEFAULT: "var(--destructive)",
          foreground: "var(--destructive-foreground)",
        },
        muted: {
          DEFAULT: "var(--muted)",
          foreground: "var(--muted-foreground)",
        },
        accent: {
          DEFAULT: "var(--accent)",
          foreground: "var(--accent-foreground)",
        },
        popover: {
          DEFAULT: "var(--popover)",
          foreground: "var(--popover-foreground)",
        },
        card: {
          DEFAULT: "var(--card)",
          foreground: "var(--card-foreground)",
        },
        success: {
          DEFAULT: "var(--success)",
          foreground: "var(--success-foreground)",
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
