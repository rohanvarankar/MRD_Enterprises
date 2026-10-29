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
        primary: {
          50: '#fff7ed',
          100: '#ffedd5',
          200: '#fed7aa',
          500: '#f97316', // orange-500
          600: '#ea580c', // orange-600
          700: '#c2410c',
        }
      },
      fontFamily: {
        poppins: ['var(--font-poppins)', 'var(--font-devanagari)', 'sans-serif'],
        inter: ['var(--font-inter)', 'var(--font-devanagari)', 'sans-serif'],
        sans: ['var(--font-inter)', 'var(--font-devanagari)', 'sans-serif'],
        devanagari: ['var(--font-devanagari)', 'sans-serif'],
      }
    },
  },
  plugins: [],
};
