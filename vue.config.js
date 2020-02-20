module.exports = {
    publicPath: '/', //publicPath取代了baseUrl
    outputDir: 'dist',
    lintOnSave: true,
    runtimeCompiler: true, //关键点在这  原来的 Compiler 换成了 runtimeCompiler
    // 调整内部的 webpack 配置。
    // 查阅 https://github.com/vuejs/vue-doc-zh-cn/vue-cli/webpack.md
    chainWebpack: () => {},
    configureWebpack: () => {},
    // 配置 webpack-dev-server 行为。  // webpack 的拓展模块， 作用 创建 小型 express 服务器
    devServer: {
        open: process.platform === 'darwin',
        host: '0.0.0.0',
        port: 8080,
        // 查阅 https://github.com/vuejs/vue-doc-zh-cn/vue-cli/cli-service.md#配置代理
        // proxy: null, // string | Object
        proxy: {
            // webpack的配置 需要重启 项目
            '/music': {
                // 访问 https://fjlyl.xyz/api/index.php , 并 改成 /api 地址
                // 前台就 访问 /api 地址
                target: 'http://localhost:3000', //目标接口 的 服务器地址
                changeOrigin: true, //是否跨域
                pathRewrite: { //重写接口
                    '^/music': '',
                }
            },

        },
        before: app => {}
    }
}