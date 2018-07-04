const path = require('path');

module.exports = {
    entry: path.resolve(__dirname, 'src', 'bundles/lib.js'),
    output: {
        path: path.resolve(__dirname, 'dist'),
        filename: 'vue-graph.js'
    }
}