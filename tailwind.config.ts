import type { Config } from 'tailwindcss';

export default {
  darkMode: ['class'],
  content: [
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        background: 'hsl(var(--background))',
        foreground: 'hsl(var(--foreground))',
        card: {
          DEFAULT: 'hsl(var(--card))',
          foreground: 'hsl(var(--card-foreground))',
        },
        popover: {
          DEFAULT: 'hsl(var(--popover))',
          foreground: 'hsl(var(--popover-foreground))',
        },
        primary: {
          DEFAULT: 'hsl(var(--primary))',
          foreground: 'hsl(var(--primary-foreground))',
        },
        secondary: {
          DEFAULT: 'hsl(var(--secondary))',
          foreground: 'hsl(var(--secondary-foreground))',
        },
        muted: {
          DEFAULT: 'hsl(var(--muted))',
          foreground: 'hsl(var(--muted-foreground))',
        },
        accent: {
          DEFAULT: 'hsl(var(--accent))',
          foreground: 'hsl(var(--accent-foreground))',
        },
        destructive: {
          DEFAULT: 'hsl(var(--destructive))',
          foreground: 'hsl(var(--destructive-foreground))',
        },
        border: 'hsl(var(--border))',
        input: 'hsl(var(--input))',
        ring: 'hsl(var(--ring))',
        chart: {
          '1': 'hsl(var(--chart-1))',
          '2': 'hsl(var(--chart-2))',
          '3': 'hsl(var(--chart-3))',
          '4': 'hsl(var(--chart-4))',
          '5': 'hsl(var(--chart-5))',
        },
        // Book-themed colors
        book: {
          50: '#fdf8f3',
          100: '#faf0e4',
          200: '#f4ddc4',
          300: '#ecc49f',
          400: '#e2a578',
          500: '#d4915a',
          600: '#c67d4f',
          700: '#a56543',
          800: '#85533c',
          900: '#6d4532',
        },
        sage: {
          50: '#f6f7f4',
          100: '#e9ebe3',
          200: '#d4d8c8',
          300: '#b8bfa5',
          400: '#9ba485',
          500: '#7f8a6a',
          600: '#646d54',
          700: '#505744',
          800: '#424739',
          900: '#383c32',
        },
        leather: {
          50: '#faf8f5',
          100: '#f2ede6',
          200: '#e3d7c7',
          300: '#d0bca1',
          400: '#ba9d7a',
          500: '#a8855f',
          600: '#9a7553',
          700: '#806047',
          800: '#69503e',
          900: '#564235',
        },
      },
      borderRadius: {
        lg: 'var(--radius)',
        md: 'calc(var(--radius) - 2px)',
        sm: 'calc(var(--radius) - 4px)',
      },
    },
  },
  plugins: [require('tailwindcss-animate')],
} satisfies Config;
