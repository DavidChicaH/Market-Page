/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        "primary": "#5D9C59",
        "secondary": "#DF2E38",
        "font": "#03001C",
        "primary-light": "#C7E8CA",
        "blue-ligh": "#DDF7E3"
      }
    },
  },
  plugins: [],
};
