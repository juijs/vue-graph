const path = require('path')
const HtmlWebpackPlugin = require('html-webpack-plugin')

module.exports = {
    mode: 'development',
    entry: {
        vendors: [ 'vue', 'juijs-chart' ],
        app: path.resolve(__dirname, 'bundles', 'index.js'),
    },
    output: {
        path: path.resolve(__dirname, 'out'),
        filename: '[name].js'
    },
    module: {
        rules: [{
            test: /\.(jsx?)$/,
            exclude: /node_modules\/(core-js)/,
            use: [
                {
                    loader: 'babel-loader',
                    options: {
                        cacheCompression: false,
                        cacheDirectory: true,
                    },
                },
            ],
        }],
    },
    plugins: [
        new HtmlWebpackPlugin({
            template: path.resolve(__dirname, 'bundles', 'index.html'),
            filename: path.resolve(__dirname, 'out', 'index.html'),
            minify: {
                removeComments: true,
                collapseWhitespace: true,
            }
        })
    ],
    resolve: {
        alias: {
            vue$: 'vue/dist/vue.esm-bundler.js',
            vue: '@vue/compat'
        },
        extensions: ['*', '.js', '.vue', '.json']
    },
    devServer: {
        port: 3000,
        inline: true,
        hot: false,
        open: true,
        contentBase: path.resolve(__dirname, 'out'),
        watchContentBase: true
    }
}