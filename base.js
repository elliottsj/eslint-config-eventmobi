module.exports = {
  extends: ['eslint-config-airbnb-base'].map(require.resolve),
  rules: {
    // Allow dangling underscore, e.g. for manual Jest mocks
    // http://eslint.org/docs/rules/no-underscore-dangle
    'no-underscore-dangle': 0,
    // Allow calling functions before their definition
    // http://eslint.org/docs/rules/no-use-before-define
    'no-use-before-define': [2, 'nofunc'],
    // Use the spread operator instead of .apply()
    // http://eslint.org/docs/rules/prefer-spread
    'prefer-spread': 2,
    // Validate JSDoc
    // http://eslint.org/docs/rules/valid-jsdoc
    'valid-jsdoc': [2, { requireReturn: false }],
  },
};
