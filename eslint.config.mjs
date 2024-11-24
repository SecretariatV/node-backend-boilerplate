import globals from 'globals';
import pluginJs from '@eslint/js';
import tseslint from 'typescript-eslint';

/** @type {import('eslint').Linter.Config[]} */
export default [
  pluginJs.configs.recommended,
  ...tseslint.configs.recommended,
  {
    languageOptions: {globals: globals.browser},
    files: ['**/*.{js,mjs,cjs,ts}'],
    rules: {
      'no-console': 'warn',
    },
  },
];
