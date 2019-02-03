module.exports = {
  env: {
    es6: true,
    browser: true,
    node: true,
  },
  parser: '@typescript-eslint/parser',
  plugins: ['@typescript-eslint', 'react', 'jsx-a11y'],
  extends: [
    'plugin:@typescript-eslint/recommended',
    'plugin:prettier/recommended',
    'plugin:react/recommended',
    'plugin:jsx-a11y/recommended',
  ],
  rules: {
    '@typescript-eslint/no-var-requires': 0,
    '@typescript-eslint/indent': 0,
    '@typescript-eslint/explicit-function-return-type': 0,
    'prettier/prettier': ['error', { trailingComma: 'es5', singleQuote: true }],
    'react/prop-types': 0,
    'react/jsx-filename-extension': ['error', { extensions: ['.tsx'] }],
  },
};
