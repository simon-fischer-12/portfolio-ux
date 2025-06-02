import type { Config } from 'tailwindcss'

const config: Config = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      fontFamily: {
        'kontrapunkt': ['Kontrapunkt Miki', 'sans-serif'],
      },
      colors: {
        neutral: {
          50: '#F2F2F3',
          100: '#CBCBCC',
          200: '#B7B7B8',
          300: '#98999A',
          400: '#6F6F71',
          500: '#4C4C4D',
          600: '#333333',
          800: '#1F1F1F',
          900: '#121212',
        },
      },
      fontSize: {
        'body-xl': ['18px', {
          lineHeight: '150%',
          letterSpacing: '0',
        }],
        'body-l': ['16px', {
          lineHeight: '150%',
          letterSpacing: '0',
        }],
        'h2': ['32px', {
          lineHeight: '150%',
          letterSpacing: '-0.02em',
        }],
        'h3': ['24px', {
          lineHeight: '150%',
        }],
      },
      backgroundImage: {
        'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
        'gradient-conic': 'conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))',
      },
    },
  },
  plugins: [],
}

export default config 