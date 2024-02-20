/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        "custom-color": "#f9a06f",
        "custom-color-white": "#fff4ed",
        "custom-color-dark": "#fac0a1",
        "custom-color-light": "#ffede2",
      },
    },
  },
  plugins: [],
};
