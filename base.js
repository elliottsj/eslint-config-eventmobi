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
      peerDependencies: true,
    }],
    // disallow non-import statements appearing before import statements
    // https://github.com/benmosher/eslint-plugin-import/blob/master/docs/rules/imports-first.md
    'import/imports-first': 0, // disabled, pending https://github.com/benmosher/eslint-plugin-import/issues/472
    // allow a default import name to match a named export
    // https://github.com/benmosher/eslint-plugin-import/blob/master/docs/rules/no-named-as-default.md
    'import/no-named-as-default': 0,
    // Allow modules with a single export to use a named export
    // https://github.com/benmosher/eslint-plugin-import/blob/master/docs/rules/prefer-default-export.md
    'import/prefer-default-export': 0,
  },
};
