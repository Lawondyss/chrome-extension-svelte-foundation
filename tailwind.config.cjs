/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './src/components/**/*.svelte',
    './src/fields/**/*.{svelte,ts,html,css}',
  ],
  theme: {
    extend: {
      fontFamily: {
        'serif': ['Noto', 'ui-serif', 'serif'],
        'sans': ['Raleway', 'ui-sans-serif', 'sans-serif'],
        'mono': ['JetBrainsMono', 'ui-monospace', 'monospace']
      }
    },
  },
  plugins: [require('daisyui')],
}
