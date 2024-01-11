const { defineConfig } = require('@vue/cli-service')
module.exports = defineConfig({
  transpileDependencies: true,
  // 网页标题
  chainWebpack: (config) => {
    config.plugin('html').tap((args) => {
      args[0].title = '网页标题'
      return args
    })
    // 别名设置,@默认代表src/
    config.resolve.alias.set('@images', '@/assets/images').set('@components', '@/components')
  }
})
