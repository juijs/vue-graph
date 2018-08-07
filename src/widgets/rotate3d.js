import graph_core from './core.js'

export default {
    name: 'rotate3d',
    mixins: [ graph_core ],
    beforeMount: function(e) {
        this.$parent.widgets.push({
            type: 'polygon.rotate3d'
        });
    }
}