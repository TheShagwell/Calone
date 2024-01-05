import { url } from 'inspector'
import type { Config } from 'tailwindcss'

const config: Config = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      backgroundColor: {
        900: '#020624'
      },
      fontFamily: {
        clashDisplay: ["Clash Display", "cursive"],
        ZenDots: ["Zen Dots", "sans-serif"],
      },
      colors: {
        fadeCyan: {
          30: '#C9D6F6'
        },
        offWhite: {
          10: '#E9F0FC',
          30: '#DFE7F9',
          50: '#DFE740',
        }, 
        blue: {
          50: '#020E27'
        },
        btnWhite: {
          white: '#DFE7F9',
          'clean-white': '#DFE7F9'
        },
        screens: {
          'xs': "360px",
          'ss': "480px",
          'sm': "768px",
          'md': "1060px",
          'lg': "1200px",   
          'xl': "1512px",
        }
      }
    },
  },
  plugins: [],
}
export default config
