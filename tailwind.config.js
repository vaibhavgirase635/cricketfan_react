/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      colors: {
        primary: {
          50: '#FFF5EB',
          100: '#FFE8D2',
          200: '#FFD2A6',
          300: '#FFBB7A',
          400: '#FFA54D',
          500: '#FF8E21',
          600: '#FF6B35', // primary orange
          700: '#E45525',
          800: '#CC3F15',
          900: '#B32905',
        },
        secondary: {
          50: '#E6F7FF',
          100: '#C7EBFF',
          200: '#8FD5F8',
          300: '#57BFF1',
          400: '#24A9EA',
          500: '#1A95D3',
          600: '#1A5F7A', // primary blue
          700: '#174F66',
          800: '#143F52',
          900: '#112F3D',
        },
        neutral: {
          50: '#F8FAFC',
          100: '#F1F5F9',
          200: '#E2E8F0',
          300: '#CBD5E1',
          400: '#94A3B8',
          500: '#64748B',
          600: '#475569',
          700: '#334155',
          800: '#1E293B',
          900: '#0F172A',
        },
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