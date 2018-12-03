const path = require('path');
const nodeExternals = require('webpack-node-externals');
const UglifyJsPlugin = require('uglifyjs-webpack-plugin');
const BundleAnalyzerPlugin = require('webpack-bundle-analyzer').BundleAnalyzerPlugin;
const entry = path.resolve(__dirname, 'bundles', 'production.js');

module.exports = {
    mode: 'production',
    entry: {
        'vue-graph': entry,
        'vue-graph.min': entry
    },
    target: 'node',
    externals: [nodeExternals({
        whitelist: [ /^juijs/ ]
    })],
    output: {
        path: path.resolve(__dirname, 'dist'),
        filename: '[name].js'
    },
    optimization: {
        minimizer: [
            new UglifyJsPlugin({
                include: /\.min\.js$/
            })
        ]
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
        new BundleAnalyzerPlugin()
    ]
}