/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{html,js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        primary: "#1F4690",
        secondary: "#3A5BA0",
        accent: "#FFA41B",
      },
    },
  },
  plugins: [],
};
