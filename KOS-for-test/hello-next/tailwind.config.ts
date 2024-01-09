import type { Config } from 'tailwindcss'

const { nextui } = require("@nextui-org/react");

const config: Config = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './app/**/*.{js,ts,jsx,tsx,mdx}',
    "./node_modules/@nextui-org/theme/dist/**/*.{js,ts,jsx,tsx}",
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
      spacing: {
        'base': '12px',
        'sm': '10px',
        'md': '20px',
      },
      borderRadius: {
        'sm': '8px',
        'md': '16px',
        'lg': '24px',
      }
    }
  },
  plugins: [
    nextui()
  ],
}
export default config
