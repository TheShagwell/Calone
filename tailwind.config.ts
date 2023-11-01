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
      colors: {
        cyan: {
          30: '#C9D6F6'
        },
        gray: {
          10: '#E9F0FC',
          30: '#DFE7F9'
        }, 
        blue: {
          50: '#020E27'
        }, 
        screens: {
          xs: "480px",
          ss: "620px",
          sm: "768px",
          md: "1060px",
          lg: "1200px",
          xl: "1700px",
        },
        backgroundImage: {
          'bg-men-discussing': "url('/men-discussing.jpg')",
          'bg-man-on-headphone-I': "url('/man-on-headphone-I.jpg')",
          'bg-man-on-headphone': "url('/man-on-headphone.jpg')",
          'bg-Woman-on-headphone': "url('/Woman-on-headphone.jpg')",
          'bg-_microphone': "url('/_microphone.jpg')",
          'bg-_image-1': "url('/_image-1.png')",
          'bg-_image-2': "url('/_image-2.png')",
          'bg-_image-3': "url('/_image-3.png')",
          'bg-_image-4': "url('/_image-4.png')",
          'bg-_image-5': "url('/_image-5.png')",
          'bg-_image-6': "url('/_image-6.png')",
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
