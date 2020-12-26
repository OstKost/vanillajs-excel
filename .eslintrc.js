module.exports = {
  parser: 'babel-eslint',
  env: {
    es6: true,
    browser: true,
    node: true,
  },
  extends: ['eslint:recommended', 'google'],
  rules: {
    semi: 'off',
    'object-curly-spacing': 'off',
    'quote-props': 'off',
  },
}
