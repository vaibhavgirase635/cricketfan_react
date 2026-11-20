/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      colors: {
        'canvas': '#0B111C',
        'surface': '#121B2B',
        'panel': '#172840',
        'line': '#29374C',
        'ink': '#EEF4FF',
        'muted': '#A0AEC2',
        'accent': '#5497F2',
        'accent-hover': '#85B8FF',
        'accent-deep': '#214577',
      },
      fontFamily: {
        sans: ['Poppins', 'sans-serif'],
      },
      animation: {
        'bounce-slow': 'bounce 3s infinite',
      },
    },
  },
  plugins: [
    require('@tailwindcss/typography'),
  ],
};