# eslint-config-eventmobi
EventMobi's base ESLint configuration

### Install

```shell
npm install eslint-config-eventmobi
```

### Usage

Shareable configs are designed to work with the `extends` feature of `.eslintrc` files.
You can learn more about
[Shareable Configs](http://eslint.org/docs/developer-guide/shareable-configs) on the
official ESLint website.

To use the EventMobi's shareable config, add this to your .eslintrc file:

```
{
  "extends": "eventmobi"
}
```

*Note: We omitted the `eslint-config-` prefix since it is automatically assumed by ESLint.*

You can override settings from the shareable config by adding them directly into your
`.eslintrc` file.
