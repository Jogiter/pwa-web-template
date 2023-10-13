import type { Config } from 'tailwindcss'

export default <Partial<Config>>{
  devtools: { enabled: true },
  darkMode: 'class',
  theme: {
    extend: {
      colors: {
        primary: {
          default: '#3652D9',
          light: '#B3C6F8',
          lighter: '#DCE6FA',
          dark: '#2640BF',
          darker: '#3754E5',
          darkest: '#314BCC',
        },
        gray: {
          default: '#F5F5F7',
          light: '#F0F5FF',
          dark: '#8C8F9A',
          darker: '#868E9C',
        },
        dark: {
          100: '#15151C',
          200: '#1D1F29',
        },
      },
      fontFamily: {
        alimama: [
          '"alimama"',
          {
            fontVariationSettings: '"BEVL" var(--BEVL)',
          },
        ],
        alibaba: '"alibaba"',
      },
      keyframes: {
        marquee: {
          '0%': { transform: 'translateZ(0)' },
          to: { transform: 'translate3d(-50%, 0, 0)' },
        },
        'marquee-reverse': {
          '0%': { transform: 'translate3d(-50%, 0, 0)' },
          '100%': { transform: 'translateZ(0)' },
        },
      },
      animation: {
        marquee: 'marquee 20s linear 0.5s infinite normal',
        'marquee-reverse': 'marquee-reverse 20s linear 0.5s infinite normal',
      },
      boxShadow: {
        '0.5x': '0px 2px 8px 0px rgba(0, 0, 0, 0.08)',
        '1x': '0px 4px 20px 0px rgba(0, 0, 0, 0.07)',
        '2x': '0px 8px 32px 0px rgba(0, 0, 0, 0.10)',
      },
    },
  },
  plugins: [require('tailwind-animatecss'), require('tailwind-scrollbar')],
}
