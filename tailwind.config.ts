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
      },
      animation: {
        "blink-caret": "blink-caret 1s linear infinite",
      }
    },
  },
  plugins: [],
}
export default config
