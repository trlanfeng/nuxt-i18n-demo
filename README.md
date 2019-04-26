# nuxt-i18n-demo

> 基于 Nuxt + Vue-i18n 实现多国语言

主要为 `nuxt.config.js` 中对路由进行扩展，复制一份所有自动生成的多语言路由，之后插入到路由数组起始位置。来实现不需要默认页面，并能够不带语言标记浏览默认语言页面。

如：

`localhost` 显示 `localhost/zh` 页面内容，而不进行跳转

`localhost/page` 显示 `localhost/zh/page`

## Build Setup

``` bash
# install dependencies
$ npm install

# serve with hot reload at localhost:3000
$ npm run dev

# build for production and launch server
$ npm run build
$ npm start

# generate static project
$ npm run generate
```

For detailed explanation on how things work, checkout [Nuxt.js docs](https://nuxtjs.org).
