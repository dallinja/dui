/** @type {import('prettier').Config & import('prettier-plugin-tailwindcss').PluginOptions} */

export default {
  semi: false,
  singleQuote: true,
  trailingComma: 'all',
  printWidth: 80,
  tabWidth: 2,
  plugins: ['prettier-plugin-tailwindcss'],
}
