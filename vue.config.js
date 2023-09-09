const { defineConfig } = require('@vue/cli-service')
module.exports = defineConfig({
  transpileDependencies: true,
  chainWebpack: config => {
    // 添加自定义的Webpack规则
    config.module
      .rule('md')
      .test(/\.md/)
      .use('text-loader')
      .loader('text-loader')
      .end();
  }
})
