module.exports = {
  extends: [
    'eslint-config-airbnb-base',
    './rules',
  ].map(require.resolve),
  rules: {
    // Use the spread operator instead of .apply()
    // http://eslint.org/docs/rules/prefer-spread
    'prefer-spread': 2,
  },
};
