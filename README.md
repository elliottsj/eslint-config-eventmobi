# eslint-config-eventmobi
EventMobi's base ESLint configuration. Most rules are inherited from the excellent [eslint-config-airbnb](https://github.com/airbnb/javascript/tree/master/packages/eslint-config-airbnb), with some rules customized for EventMobi.

### Install

```shell
npm install --save-dev eslint-config-eventmobi eslint-plugin-jsx-a11y eslint-plugin-import eslint-plugin-react
```

### Usage
Add one of these three configurations to your `.eslintrc` file:

##### ES2015 + React
```json
{
  "extends": "eventmobi"
}
```

##### ES2015 (without React)
```json
{
  "extends": "eventmobi/base"
}
```

##### ES5 and below
```json
{
  "extends": "eventmobi/legacy"
}
```

You can override settings from the shareable config by adding them directly into your `.eslintrc` file.
