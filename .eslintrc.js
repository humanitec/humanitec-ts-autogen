'use strict';

module.exports = {
  'root': true,
  'parser': '@typescript-eslint/parser',
  'plugins': [
    '@typescript-eslint',
  ],
  'env': {
    'commonjs': true,
    'es6': true,
    'node': true,
  },
  'extends': [
    'eslint:recommended',
    'plugin:@typescript-eslint/eslint-recommended',
    'plugin:@typescript-eslint/recommended',
    'prettier',
  ],
  'globals': {
    'Atomics': 'readonly',
    'SharedArrayBuffer': 'readonly',
  },
  'parserOptions': {
    'ecmaVersion': 2018,
  },
  'rules': {
    'max-len': [
      'error', {
        'code': 120,
      }],
    'indent': ['error', 2],
    'require-jsdoc': 'off',
  },
};
