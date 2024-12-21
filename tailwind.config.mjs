/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        background: "var(--background)",
        foreground: "var(--foreground)",
        primary: "#1D4ED8",
        secondary: "#1E40AF",
        accent: "#F59E0B",
      },
      fontFamily: {
        "geist-sans": ["var(--font-geist-sans)", "sans-serif"],
        "geist-mono": ["var(--font-geist-mono)", "monospace"],
        roboto: ["var(--font-roboto)", "sans-serif"],
        "bebas-neue": ["var(--font-bebas-neue)", "sans-serif"],
      },
    },
  },
  plugins: [],
};
