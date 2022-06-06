const plugin = require('tailwindcss/plugin');

module.exports = {
  future: {
    removeDeprecatedGapUtilities: true,
    purgeLayersByDefault: true,
  },
  mode: 'jit',
  content: [
    './pages/**/*.{js,ts,jsx,tsx}',
    './components/**/*.{js,ts,jsx,tsx}',
    './util/**/*.{js,ts,jsx,tsx}',
  ],
  darkMode: 'class',
  theme: {
    extend: {
      screens: {
        dark: { raw: '(prefers-color-scheme: dark)' },
      },
      animation: {
        gradient: 'gradient-xy 15s ease infinite',
      },
      keyframes: {
        'gradient-xy': {
          '0%, 100%': {
            'background-size': '400% 400%',
            'background-position': 'right center',
          },
          '50%': {
            'background-size': '400% 400%',
            'background-position': 'left center',
          },
        },
      },
    },
    fontFamily: {
      sans: ['Satoshi', 'sans-serif'],
      serif: ['IBM Plex Serif', 'serif'],
      mono: ['JetBrains Mono', 'monospace'],
    },
  },
  plugins: [],
};
