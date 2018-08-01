const path = require('path');
const UglifyJsPlugin = require('uglifyjs-webpack-plugin');

module.exports = {
    mode: 'production',
    entry: path.resolve(__dirname, 'src', 'bundles/production.js'),
    output: {
        path: path.resolve(__dirname, 'dist'),
        filename: 'vue-graph.js'
    },
    optimization: {
        minimizer: [
            new UglifyJsPlugin()
        ]
    }
}