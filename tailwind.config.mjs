/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        background: "var(--background)",
        foreground: "var(--foreground)",
        pink: "#F7C5C5",
      },
      fontFamily: {
        synonym: ['"Synonym"', "sans-serif"],
        amulya: ['"Amulya"', "sans-serif"],
        zodiac: ['Zodiak', 'serif'],
        jakarta: ['Plus Jakarta Sans', 'sans-serif'],
        ranade: ['Ranade', 'sans-serif'],
      },
    },
  },
  plugins: [],
};
