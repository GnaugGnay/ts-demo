module.exports = {
    // lintOnSave: true
    chainWebpack: config => {
        // tslint loader
        config.module
            .rule('tslint')
            .test(/\.ts$/)
            .use('tslint-loader')
            .loader('tslint-loader')
            .end();
    },
    devServer: {
        overlay: {
            warnings: true,
            errors: true
        }
    }
}