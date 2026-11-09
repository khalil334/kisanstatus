import type { Config } from 'tailwindcss';

const config: Config = {
  darkMode: 'class',
  content: [
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        primary: {
          DEFAULT: '#1B7A43',
          50: '#EFF7F1',
          100: '#D8EBDD',
          200: '#B2DABD',
          300: '#81C192',
          400: '#4D9E65',
          500: '#2C8148',
          600: '#1B7A43',
          700: '#156233',
          800: '#14532D',
          900: '#0E3A20',
          950: '#072213',
        },
        green: {
          50: '#F0FDF4',
          100: '#DCFCE7',
          200: '#BBF7D0',
          300: '#86EFAC',
          400: '#4ADE80',
          500: '#22C55E',
          600: '#16A34A',
          700: '#15803D',
          800: '#166534',
          900: '#14532D',
          950: '#052E16',
        },
        emerald: {
          50: '#ECFDF5',
          100: '#D1FAE5',
          200: '#A7F3D0',
          300: '#6EE7B7',
          400: '#34D399',
          500: '#10B981',
          600: '#059669',
          700: '#047857',
          800: '#065F46',
          900: '#064E3B',
          950: '#022C22',
        },
        accent: {
          DEFAULT: '#EA580C',
          light: '#FFF7ED',
          dark: '#C2410C',
        },
        surface: {
          DEFAULT: '#FFFFFF',
          alt: '#F8FAF8',
          card: '#FFFFFF',
          border: '#E2E8F0',
        },
        text: {
          primary: '#2F3B33',
          secondary: '#64748B',
          muted: '#64748B',
        },
      },
      fontFamily: {
        sans: ['var(--font-poppins)', '"Noto Sans Devanagari"', 'system-ui', 'sans-serif'],
      },
      maxWidth: {
        site: '1200px',
      },
      minHeight: {
        touch: '48px',
      },
      minWidth: {
        touch: '48px',
      },
    },
  },
  plugins: [],
};

export default config;
