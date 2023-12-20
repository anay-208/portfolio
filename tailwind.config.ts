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
        default: ["var(--font-default)"],
        sharlz: ["var(--font-sharlz)"],
        dkvk: ['var(--font-dkvk)'],
      },
      animation: {
        "blink-caret": "blink-caret 1s linear infinite",
        "gradient": "gradient 5s ease infinite",
      }
    },
  },
  plugins: [],
}
export default config
