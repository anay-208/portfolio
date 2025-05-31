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
        "gradient-x": "gradient-x 15s ease infinite",
        "gradient-y": "gradient-y 15s ease infinite",
        "gradient-x-reverse": "gradient-x-reverse 15s ease infinite",
        "fade-in": "fade-in 0.5s ease-out",
      },
      keyframes: {
        "gradient-x": {
          "0%, 100%": {
            "background-size": "200% 200%",
            "background-position": "left center"
          },
          "50%": {
            "background-size": "200% 200%",
            "background-position": "right center"
          }
        },
        "gradient-y": {
          "0%, 100%": {
            "background-size": "200% 200%",
            "background-position": "center top"
          },
          "50%": {
            "background-size": "200% 200%",
            "background-position": "center bottom"
          }
        },
        "gradient-x-reverse": {
          "0%, 100%": {
            "background-size": "200% 200%",
            "background-position": "right center"
          },
          "50%": {
            "background-size": "200% 200%",
            "background-position": "left center"
          }
        },
        "fade-in": {
          "0%": {
            opacity: "0",
            transform: "translateY(10px)"
          },
          "100%": {
            opacity: "1",
            transform: "translateY(0)"
          }
        }
      }
    },
  },
  plugins: [],
}
export default config
