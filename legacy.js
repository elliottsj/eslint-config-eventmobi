module.exports = {
  extends: ['eslint-config-airbnb-base/legacy'].map(require.resolve),
  rules: {
    // Allow var declarations in the middle of their scope
    // http://eslint.org/docs/rules/vars-on-top
    'vars-on-top': 0,
  },
};
