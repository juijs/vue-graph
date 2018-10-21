const path = require('path');
const nodeExternals = require('webpack-node-externals');
const UglifyJsPlugin = require('uglifyjs-webpack-plugin');
const BundleAnalyzerPlugin = require('webpack-bundle-analyzer').BundleAnalyzerPlugin;

module.exports = {
    mode: 'production',
    entry: {
        'vue-graph': path.resolve(__dirname, 'bundles', 'production.js')
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
            new UglifyJsPlugin()
        ]
    },
    plugins: [
        new BundleAnalyzerPlugin()
    ],
}