import type { Config } from 'tailwindcss';

const config: Config = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      keyframes: {
        scroll: {
          '0%': { transform: 'translateX(0)' },
          '100%': { transform: 'translateX(-50%)' },
        },
      },
      animation: {
        scroll: 'scroll 15s linear infinite',
      },
      fontFamily: {
        "montserrat": ["Montserrat", "sans-serif"],
      },
      colors: {
        white: '#FFFCF9',
        primary: '#FF7800',
        secondary: '#f59e0b',
        black: {
          DEFAULT: '#010101',
          gray: '#070400'
        },
        gray: {
          dark: "#140A00",
          light: "#515151",
          lightest: "#888888",
          DEFAULT: '#44403c',
        },
        accent: '#10b981',
        danger: '#ef4444',
      },
      backgroundImage: {
        'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
        'gradient-conic':
          'conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))',
      },
    },
  },
  plugins: [],
}
export default config
