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
    optimization: {
        runtimeChunk: 'single',
        splitChunks: {
            chunks: 'all',
            cacheGroups: {
                vendors: {
                    test: /[\\/]node_modules[\\/]/,
                    name: 'vendors',
                    enforce: true,
                    chunks: 'all'
                }
            }
        }
    },
    module: {
        rules: [{
            test: /\.js$/,
            use: [{
                loader: 'babel-loader',
                options: {
                    presets: [ 'env' ]
                }
            }]
        }]
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