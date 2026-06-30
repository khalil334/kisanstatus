import type { Config } from 'tailwindcss';

const config: Config = {
  content: [
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        primary: {
          DEFAULT: '#16A34A',
          50:  '#F0FDF4',
          100: '#DCFCE7',
          200: '#BBF7D0',
          300: '#86EFAC',
          400: '#4ADE80',
          500: '#22C55E',
          600: '#16A34A',
          700: '#15803D',
          800: '#166534',
          900: '#14532D',
          950: '#052e16',
        },
        accent: {
          DEFAULT: '#CA8A04',
          light:  '#FEF9C3',
          dark:   '#92400E',
        },
        surface: {
          DEFAULT: '#F8FAFC',
          card:    '#FFFFFF',
          border:  '#E2E8F0',
        },
        text: {
          primary:   '#0F172A',
          secondary: '#475569',
          muted:     '#94A3B8',
        },
      },
      fontFamily: {
        sans: ['var(--font-poppins)', 'system-ui', 'sans-serif'],
      },
      maxWidth: {
        'site': '1200px',
      },
    },
  },
  plugins: [],
};

export default config;