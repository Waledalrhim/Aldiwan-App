/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  darkMode: 'class',
  theme: {
    extend: {
      fontFamily: {
        sans: ['Tajawal', 'system-ui', 'sans-serif']
      },
      colors: {
        primary: {
          50: '#ecfdf7',
          100: '#d1fae5',
          200: '#a7f3d0',
          300: '#6ee7b7',
          400: '#34d399',
          500: '#00b27a',
          600: '#059669',
          700: '#047857',
          800: '#065f46',
          900: '#064e3b'
        },
        navy: {
          900: '#111927',
          800: '#1f2937',
          700: '#374151'
        },
        shell: '#f4f7f6'
      },
      boxShadow: {
        soft: '0 12px 30px rgba(17,25,39,0.08)'
      },
      borderRadius: {
        xl: '1rem',
        '2xl': '1.25rem'
      }
    }
  },
  plugins: []
};
