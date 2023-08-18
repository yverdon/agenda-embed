/** @type {import('tailwindcss').Config} */
/* eslint-env node */
module.exports = {
  content: ['./src/**/*.{js,ts,vue}'],
  theme: {
    colors: {
      primary: 'var(--agd-color-primary)',
      depth: 'var(--agd-color-depth)',
    },
  },
  corePlugins: {
    preflight: false,
  },
  plugins: [],
};
