module.exports = {
  extends: [
    'eslint-config-airbnb-base',
    './rules',
  ].map(require.resolve),
  rules: {
    // Use the spread operator instead of .apply()
    // http://eslint.org/docs/rules/prefer-spread
    'prefer-spread': 2,
    // Forbid the use of extraneous packages
    // https://github.com/benmosher/eslint-plugin-import/blob/master/docs/rules/no-extraneous-dependencies.md
    'import/no-extraneous-dependencies': [2, {
      devDependencies: true,
      optionalDependencies: true,
      peerDependencies: true
    }],
  },
};
