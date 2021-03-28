module.exports = {
  configureWebpack: {
    entry: {
      vendors: ['vue', 'vue-router', 'axios', 'vuex'],
      app: './src/main.js'
    }
  },
  css: {
    extract: true,
    loaderOptions: {
      less: {
        // 若 less-loader 版本小于 6.0，请移除 lessOptions 这一级，直接配置选项。
        lessOptions: {
          modifyVars: {
            // 或者可以通过 less 文件覆盖（文件路径为绝对路径）
            hack: `true; @import "/src/less/global.less";`
          }
        }
      }
    }
  }
}
