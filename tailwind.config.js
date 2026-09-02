/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        ink: "#0B0E14",
        panel: "#12161F",
        line: "rgba(255,255,255,0.08)",
        accent: "#38BDF8",
        accent2: "#2563EB",
        muted: "#8A93A6",
      },
      fontFamily: {
        display: ["Space Grotesk", "sans-serif"],
        body: ["Inter", "sans-serif"],
      },
    },
  },
  plugins: [],
};
