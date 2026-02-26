/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      colors: {
        offwhite: "#F7F7F5",
        charcoal: "#1E1E1E",
        bluegray: "#303946",
        mutedcyan: "#6DA9B4",
        indigo: "#5A6B8C"
      },
      fontFamily: {
        sans: ["Sora", "IBM Plex Sans", "ui-sans-serif", "system-ui"]
      },
      letterSpacing: {
        wideplus: "0.12em"
      }
    }
  },
  plugins: []
};
