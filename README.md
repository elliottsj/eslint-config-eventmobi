# eslint-config-eventmobi
EventMobi's base ESLint configuration. Most rules are inherited from the excellent [eslint-config-airbnb](https://github.com/airbnb/javascript/tree/master/packages/eslint-config-airbnb), with some rules customized for EventMobi.

### Install

Because of [this](https://github.com/eslint/eslint/issues/3458) you must install the peer dependencies of the configuration. When you update eslint-config-eventmobi you may get peer dependency errors - running this command again should
update the modules. Note that this assumes you are installing the latest version. If not, change latest to whatever version you are using.

```shell
(
  export PKG=@eventmobi/eslint-config;
  npm info "$PKG@latest" peerDependencies --json | command sed 's/[\{\},]//g ; s/: /@/g' | xargs npm install --save-dev "$PKG@latest"
)
```

Alternatively you can manually view the peer dependencies required here by running

```shell
npm info "@eventmobi/eslint-config" peerDependencies
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
