// 引入等比适配插件
const px2rem = require('postcss-px2rem')

// 配置基本大小
const postcss = px2rem({
    // 基准大小 baseSize，需要和rem.js中相同
    remUnit: 16
})
module.exports = {
    // css: {
    //     loaderOptions: {
    //       postcss: {
    //         plugins: [
    //           require('postcss-plugin-px2rem')({
    //             rootValue:192,      // 新版本的是这个值
    //             mediaQuery: false, //（布尔值）允许在媒体查询中转换px。
    //             minPixelValue: 3 //设置要替换的最小像素值(3px会被转rem)。 默认 0
    //           }),
    //         ]
    //       }
    //     }
    //   },
    css: {
        loaderOptions: {
            postcss: {
                plugins: [
                    postcss
                ]
            }
        }
    },
    publicPath: './',
    configureWebpack: config => {
        //生产环境取消 console.log
        if (process.env.NODE_ENV === 'production') {
            config.optimization.minimizer[0].options.terserOptions.compress.drop_console = true
        }
    },
}