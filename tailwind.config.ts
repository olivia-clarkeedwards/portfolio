import type { Config } from 'tailwindcss'

export default {
  content: ['./app/**/*.{js,jsx,ts,tsx}'],
  theme: {
    extend: {},
    fontFamily: {
      body: ['Lato'],
    },
  },
  plugins: [],
} satisfies Config
