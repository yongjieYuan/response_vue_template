# website

## Project setup

```
npm install
```

### Compiles and hot-reloads for development

```
npm run serve
```

### Compiles and minifies for production

```
npm run build
```

### Lints and fixes files

```
npm run lint
```

### Customize configuration

See [Configuration Reference](https://cli.vuejs.org/config/).

## 项目组成

简要说明：

根据 vue-cli 文档，项目(脚手架)默认是集成了 postcss，也默认开启 autoprefixer [地址](https://cli.vuejs.org/zh/guide/css.html)

1. vue3 vul-cli 5.x
2. css 预处理器：less
3. postcss-px-to-viewport-8-plugin. 使用这个插件实现响应式开发，通过配置 postcss.config.js，将 px 单位转成 vw. [地址](https://www.npmjs.com/package/postcss-px-to-viewport-8-plugin)
4. [tailwindcss](https://tailwindcss.com/docs/installation/using-postcss) 快速实现 css 布局
