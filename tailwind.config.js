module.exports = {
  purge: {
    enabled: false,
    content: [
      './src/**/*.vue',
      '.public/index.html',
      './src/**/*.js',
    ],
    defaultExtractor: (content) => content.match(/[\w-/.:]+(?<!:)/g) || [],
  },
  darkMode: 'class', // or 'media' or 'class'
  theme: {
    extend: {},
  },
  variants: {
    extend: {},
  },
  plugins: [],
}
