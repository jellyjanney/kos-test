import type { Config } from 'tailwindcss'

const config: Config = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/component/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    main: {
      padding: {
        DEFAULT: '20px',
      },
      border: '1px solid #18181C',
    },
    screens: {
      sm: '600px',
      md: '992px',
      lg: '1200px',
      xl: '1600px',
    },
    extend: {
      backgroundImage: {
        'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
        'gradient-conic':
          'conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))',
      },
      spacing: {
        'base': '12px',
        'sm': '10px',
        'md': '20px',
      },
      borderRadius: {
        'sm': '8px',
        'md': '16px',
        'lg': '8px',
      }
    },
  },
  plugins: [],
}
export default config
