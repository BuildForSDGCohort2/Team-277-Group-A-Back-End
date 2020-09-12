module.exports = {
  env: {
    browser: true,
    es6: true,
    node: true,
    jest: true
  },
  extends: ['airbnb-base'],
  globals: {
    Atomics: 'readonly',
    SharedArrayBuffer: 'readonly'
  },
  parserOptions: {
    ecmaVersion: 2018,
    sourceType: 'module'
  },
  rules: {
    'no-console': 'off',
    'prefer-destructuring': ['error', { object: false, array: false }],
    'global-require': 0,
    'import/no-dynamic-require': 0,
    'comma-dangle': ['error', 'never'],
    'no-param-reassign': ['error', { props: false }]
  }
};
