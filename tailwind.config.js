/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
         primary: "#239EAB",  
        secondary: "#78EDFF", 
        accent: "#0D191B",   
        highlight: "#0B1617",
        banner:'#F1FAFC'
      },
    },
  },
  plugins: [],
};
