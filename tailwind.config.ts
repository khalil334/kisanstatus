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
        // Harvest palette — terracotta primary, distinct from govt-green
        primary: {
          DEFAULT: '#B85C1A',
          50: '#FDF6EF',
          100: '#FAEADB',
          200: '#F3D3B3',
          300: '#EAB584',
          400: '#DE9050',
          500: '#CE7429',
          600: '#B85C1A',
          700: '#954815',
          800: '#7A3B14',
          900: '#633112',
          950: '#371A08',
        },
        // Remap Tailwind's stock green scale -> terracotta so every
        // existing `green-*` class site-wide picks up the new brand.
        green: {
          50: '#FDF6EF',
          100: '#FAEADB',
          200: '#F3D3B3',
          300: '#EAB584',
          400: '#DE9050',
          500: '#CE7429',
          600: '#B85C1A',
          700: '#954815',
          800: '#7A3B14',
          900: '#633112',
          950: '#371A08',
        },
        // Remap emerald -> deep olive/moss (secondary, keeps agri feel)
        emerald: {
          50: '#F7F8F0',
          100: '#EEF0DE',
          200: '#DCE0BC',
          300: '#C2C98F',
          400: '#A3AD60',
          500: '#85913F',
          600: '#68732E',
          700: '#525A27',
          800: '#434A23',
          900: '#393F20',
          950: '#1E220F',
        },
        accent: {
          DEFAULT: '#3F6212',
          light: '#ECFCCB',
          dark: '#365314',
        },
        surface: {
          DEFAULT: '#FAFAF9',
          alt: '#F7F3EE',
          card: '#FFFFFF',
          border: '#EADFD3',
        },
        text: {
          primary: '#292018',
          secondary: '#6B5842',
          muted: '#6B5842',
        },
      },
      fontFamily: {
        sans: ['var(--font-poppins)', 'system-ui', 'sans-serif'],
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
