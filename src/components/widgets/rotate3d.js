import graph_base from './base.js'

export default {
    name: 'rotate3d',
    mixins: [ graph_base ],
    beforeMount: function(e) {
        this.$parent.widgets.push({
            type: 'polygon.rotate3d'
        });
    }
}