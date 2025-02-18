const colors = require('tailwindcss/colors')

export const content = [
  './src/app/**/*.{js,ts,jsx,tsx,mdx}',
  './src/components/**/*.{js,ts,jsx,tsx,mdx}',
]

export const theme = {
  extend: {
    colors: {
      background: 'var(--background)',
      foreground: 'var(--foreground)',
      muted: colors.gray[900],
      mutedLight: colors.gray[700],
      accent: colors.blue[500],
      error: colors.red[500],
    },
  },
}
