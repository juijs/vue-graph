import graph_bar3d from './bar3d.js'

export default {
    name: 'graph-line3d',
    mixins: [ graph_bar3d ],
    beforeMount: function() {
        this.brushes = [{
            type: 'polygon.line3d',
            padding: this.padding
        }];
    }
}