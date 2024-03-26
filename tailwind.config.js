/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{svelte,js,ts,jsx,tsx}"],
  theme: {
    extend: {
      boxShadow: {
        Rx: ["rgba(0, 0, 0, 0.24) 0px 3px 8px"],
        Bx: [
          "rgba(0, 0, 0, 0.25) 0px 54px 55px, rgba(0, 0, 0, 0.12) 0px -12px 30px, rgba(0, 0, 0, 0.12) 0px 4px 6px, rgba(0, 0, 0, 0.17) 0px 12px 13px, rgba(0, 0, 0, 0.09) 0px -3px 5px;",
        ],
      },
      fontFamily: {
        Karla: ["Karla", "sans-serif"],
        Farro: ["Farro", "sans-serif "],
        Poppins: ["Poppins", "sans-serif "],
      },
      colors: {
        orange: "#FDA403",
        Creamy: "rgba(0, 0, 0, .08)",
      },
    },
  },
  plugins: [require("daisyui")],
  daisyui: {
    themes: ["light"],
  },
};
