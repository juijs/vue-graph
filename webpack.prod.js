const path = require('path');
const UglifyJsPlugin = require('uglifyjs-webpack-plugin');
const CompressionPlugin = require('compression-webpack-plugin');

module.exports = {
    mode: 'production',
    entry: path.resolve(__dirname, 'src', 'bundles/prod.js'),
    output: {
        path: path.resolve(__dirname, 'dist'),
        filename: 'vue-graph.js'
    },
    optimization: {
        minimizer: [
            new UglifyJsPlugin(),
            new CompressionPlugin({
                asset: "[path].gz[query]",
                algorithm: "gzip",
                test: /\.js$|\.css$|\.html$/,
                threshold: 10240,
                minRatio: 0
            })
        ]
    }
}