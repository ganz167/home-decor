/** @type {import('tailwindcss').Config} */
export default {
  content: ['./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}'],
  theme: {
    extend: {
      colors: {
        cream:   { DEFAULT: '#FAF7F2', 50: '#FDFCFA', 100: '#FAF7F2', 200: '#F0EAE0' },
        sage:    { DEFAULT: '#7D9B76', 50: '#EEF3ED', 100: '#D5E4D3', 200: '#AECBAB', 300: '#7D9B76', 400: '#5E7E57', 500: '#4A6544' },
        warm:    { DEFAULT: '#C9A97A', 50: '#FBF5EC', 100: '#F3E4CC', 200: '#E5C99A', 300: '#C9A97A', 400: '#B08B56', 500: '#8C6D3F' },
        clay:    { DEFAULT: '#C4735A', 50: '#F9EDE9', 100: '#F0D0C7', 200: '#DFA193', 300: '#C4735A', 400: '#A85541', 500: '#863F2E' },
        charcoal:{ DEFAULT: '#2C2C2C', light: '#555555' },
      },
      fontFamily: {
        display: ['"Playfair Display"', 'Georgia', 'serif'],
        body:    ['"DM Sans"', 'system-ui', 'sans-serif'],
        mono:    ['"DM Mono"', 'monospace'],
      },
      aspectRatio: {
        pin: '2 / 3',       // 1000×1500 Pinterest ratio
      },
      typography: (theme) => ({
        nestled: {
          css: {
            '--tw-prose-body':        theme('colors.charcoal.DEFAULT'),
            '--tw-prose-headings':    theme('colors.charcoal.DEFAULT'),
            '--tw-prose-links':       theme('colors.sage.400'),
            '--tw-prose-bold':        theme('colors.charcoal.DEFAULT'),
            '--tw-prose-quotes':      theme('colors.charcoal.light'),
            '--tw-prose-hr':          theme('colors.cream.200'),
            'h2': { fontFamily: theme('fontFamily.display').join(', ') },
            'h3': { fontFamily: theme('fontFamily.display').join(', ') },
            'a':  { textDecorationThickness: '1px', textUnderlineOffset: '3px' },
          },
        },
      }),
    },
  },
  plugins: [
    require('@tailwindcss/typography'),
  ],
};
