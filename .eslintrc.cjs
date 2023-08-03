/* eslint-env node */
require('@rushstack/eslint-patch/modern-module-resolution');

module.exports = {
  root: true,
  extends: [
    'plugin:vue/vue3-essential',
    'eslint:recommended',
    // '@vue/eslint-config-prettier/skip-formatting'
    'prettier',
  ],
  parserOptions: {
    ecmaVersion: 'latest',
    'vue/require-default-prop': 'off',
  },
};
