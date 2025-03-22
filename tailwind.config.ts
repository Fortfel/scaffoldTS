import type { Config } from 'tailwindcss'

export default {
  content: ['./src/**/*.{js,ts,jsx,tsx}', './index.html'],
  plugins: [
    //TODO[fortf] Removing background during autocomplete for inputs etc
    // https://stackoverflow.com/questions/2781549/removing-input-background-colour-for-chrome-autocomplete
    // https://stackoverflow.com/questions/64148246/tailwindcss-input-field-change-in-react
    // https://stackoverflow.com/questions/75919757/autofill-input-in-dark-mode-with-tailwind
    // https://github.com/tailwindlabs/tailwindcss/discussions/8679     - put same styles in tailwind.css file as in this topic?

    require('@tailwindcss/typography'),
    require('@tailwindcss/forms')({
      // strategy: 'base', // only generate global styles
      // strategy: 'class', // only generate classes
    }),
    // https://github.com/jamiebuilds/tailwindcss-animate/tree/main
  ],
} satisfies Config
