import typography from '@tailwindcss/typography';

/** @type {import('tailwindcss').Config} */
export default {
  content: ['./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}'],
  theme: {
    extend: {
      fontFamily: {
        serif: ['"Cormorant Garamond"', 'Georgia', 'Palatino', '"Times New Roman"', 'serif'],
        sans: ['Inter', 'system-ui', 'sans-serif'],
      },
      colors: {
        cream: {
          50: '#fdfcf9',
          100: '#f8f4ed',
          200: '#f0e9da',
          300: '#e5d8c2',
        },
        ink: {
          DEFAULT: '#1a1816',
          800: '#2d2a26',
          700: '#3d3a36',
          400: '#7a7670',
          200: '#b8b4ac',
          100: '#d4d0c8',
        },
        sepia: {
          DEFAULT: '#8b6b4a',
          dark: '#6b5038',
          light: '#c4a882',
        },
        dark: {
          DEFAULT: '#0d0b09',
          900: '#1a1410',
          800: '#241e18',
        },
      },
      typography: (theme) => ({
        journal: {
          css: {
            '--tw-prose-body': theme('colors.ink.DEFAULT'),
            '--tw-prose-headings': theme('colors.ink.DEFAULT'),
            fontFamily: theme('fontFamily.serif').join(', '),
            fontSize: '1.2rem',
            lineHeight: '1.9',
            maxWidth: '65ch',
            p: {
              marginBottom: '1.75em',
              textAlign: 'justify',
              hyphens: 'auto',
            },
          },
        },
      }),
    },
  },
  plugins: [typography],
};
