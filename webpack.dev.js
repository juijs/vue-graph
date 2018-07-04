const path = require('path')
const HtmlWebpackPlugin = require('html-webpack-plugin')

module.exports = {
    mode: 'development',
    entry: {
        vendor: [ 'vue', 'juijs-chart' ],
        app: path.resolve(__dirname, 'src/bundles/app.js'),
    },
    output: {
        path: path.resolve(__dirname, 'out'),
        filename: '[name].[hash].js',
        chunkFilename: '[name].[hash].js',
    },
    optimization: {
        splitChunks: {
            cacheGroups: {
                vendor: {
                    chunks: 'initial',
                    name: 'vendor',
                    enforce: true,
                },
            },
        }
    },
    plugins: [
        new HtmlWebpackPlugin({
            template: path.resolve(__dirname, 'src/bundles/app.html'),
            filename: path.resolve(__dirname, 'out/index.html'),
            minify: {
                removeComments: true,
                collapseWhitespace: true,
            }
        })
    ],
    resolve: {
        alias: {
            'vue$': 'vue/dist/vue.esm.js'
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