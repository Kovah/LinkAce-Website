import forms from '@tailwindcss/forms';
import typography from '@tailwindcss/typography';
import defaultTheme from 'tailwindcss/defaultTheme';

const colors = require('tailwindcss/colors');

const blue = {
  '50': '#f4f6fb',
  '100': '#e8ecf6',
  '200': '#ccd7eb',
  '300': '#a0b6d9',
  '400': '#6d8fc3',
  '500': '#44679f',
  '600': '#385891',
  '700': '#2e4676',
  '800': '#2a3e62',
  '900': '#273653',
  '950': '#1a2237'
};

/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './layouts/**/*.html'
  ],
  safelist: [
    'form-control',
    'docsearch-results',
    'docsearch-result-link',
    'docsearch-version',
    'alert-info',
    'alert-success',
    'alert-warning',
    'alert-danger',
    'alert-secondary'
  ],
  theme: {
    extend: {
      container: {
        center: true,
        padding: '1rem',
        screens: {
          sm: '640px',
          md: '768px',
          lg: '1024px',
          xl: '1024px',
          '2xl': '1024px'
        }
      },

      fontFamily: {
        sans: ['IBM Plex Sans', ...defaultTheme.fontFamily.sans]
      },
      colors: {
        blue: blue
      },

      typography: {
        DEFAULT: {
          css: {
            maxWidth: 'none',
            color: colors.gray['900'],
            h1: {
              color: colors.gray['900']
            },
            h2: {
              color: colors.gray['900']
            },
            h3: {
              color: colors.gray['900']
            },
            h4: {
              color: colors.gray['900']
            },
            h5: {
              color: colors.gray['900']
            },
            a: {
              color: blue['500'],
              '&:hover': {
                color: blue['700']
              },
              '&:focus': {
                color: blue['700']
              }
            },
            li: {
              marginTop: 0
            },
            blockquote: {
              color: colors.gray['900'],
              borderLeftColor: colors.blue['200']
            },
            code: {
              backgroundColor: blue['100'],
              padding: defaultTheme.spacing['1'],
              borderRadius: defaultTheme.borderRadius.DEFAULT
            },
            'code::before': {content: '""'},
            'code::after': {content: '""'}
          }
        }
      }
    }
  },
  plugins: [typography, forms]
};

