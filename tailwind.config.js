/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{ts,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        'sans': 'Red Hat Display',
      },
      backgroundImage: {
        'casino': 'url("/casino.png")'
      },
    },
  },
  plugins: [],
}
