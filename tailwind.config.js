const defaultTheme = require('tailwindcss/defaultTheme')

/** @type {import('tailwindcss').Config} */
module.exports = {
  // darkMode: "class",
  content: ["./dist/**/*.{html,js}"],
  theme: {
    extend: {
      fontFamily: {
        serif: [ 'Noto Serif'    , ...defaultTheme.fontFamily.serif ],
        sans : [ 'Noto Sans'     , ...defaultTheme.fontFamily.sans  ],
        mono : [ 'JetBrains Mono', ...defaultTheme.fontFamily.mono  ]
      }
    }
  },
  plugins: [
    require('@tailwindcss/typography'),
  ],
}
