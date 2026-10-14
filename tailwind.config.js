// Only holds the typography customization, which has no CSS based API in Tailwind v4.
// Everything else is configured in assets/styles/app.css.
const colors = require('tailwindcss/colors');

/** @type {import('tailwindcss').Config} */
module.exports = {
  theme: {
    extend: {
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
              color: 'var(--color-blue-500)',
              '&:hover': {
                color: 'var(--color-blue-700)'
              },
              '&:focus': {
                color: 'var(--color-blue-700)'
              }
            },
            li: {
              marginTop: 0
            },
            blockquote: {
              color: colors.gray['900'],
              borderLeftColor: '#bfdbfe'
            },
            code: {
              backgroundColor: 'var(--color-blue-100)',
              padding: '0.25rem',
              borderRadius: '0.25rem'
            },
            'code::before': {content: '""'},
            'code::after': {content: '""'}
          }
        }
      }
    }
  }
};
