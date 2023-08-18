/* eslint-env node */
module.exports = {
  singleQuote: true,
  trailingComma: 'es5',
  plugins: ['@trivago/prettier-plugin-sort-imports'],
  importOrder: [
    '/assets',
    '/helpers',
    '/composables',
    '/services',
    '/models',
    '/views',
    '/components',
    '^[./]',
  ],
  importOrderSeparation: true,
  importOrderSortSpecifiers: true,
};
