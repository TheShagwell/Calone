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
          30: '#DFE7F9'
        }, 
        blue: {
          50: '#020E27'
        },
        btnWhite: {
          white: '#DFE7F9'
        },
        screens: {
          'xs': "480px",
          'ss': "620px",
          'sm': "768px",
          'md': "1060px",
          'lg': "1200px",   
          'xl': "1512px",
        },
        backgroundImage: {
          'bgMen-discussing': "url('../_menDiscussing.jpg')",
          'bg-man-on-headphone-I': "url('/man-on-headphone-I.jpg')",
          'bg-man-on-headphone': "url('/man-on-headphone.jpg')",
          'bg-Woman-on-headphone': "url('/Woman-on-headphone.jpg')",
          'bg-_microphone': "url('/_microphone.jpg')",
          '_icon-arrow-narrow-up-right': "url('/_icon-arrow-narrow-up-right.svg')",
          '_icon-Facebook': "url('/_icon-Facebook.svg')",
          '_icon-Instagram': "url('/_icon-Instagram.svg')",
          '_icon-Twitter': "url('/_icon-Twitter.svg')",
        }
      }
    },
  },
  plugins: [],
}
export default config
