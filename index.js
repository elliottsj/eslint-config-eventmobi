module.exports = {
  extends: ['eslint-config-airbnb'].map(require.resolve),
  rules: {
    'arrow-parens': [2, 'as-needed'],
    'no-use-before-define': [2, 'nofunc'],
    'prefer-spread': 2,
    'valid-jsdoc': [2, { 'requireReturn': false }],
  },
};
