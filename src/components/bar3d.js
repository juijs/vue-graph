import graph_base from './base.js'
import watch from './mixins/watch.js'
import created from './mixins/created.js'
import mounted from './mixins/mounted.js'
import props from './mixins/props.js'
import props_axes from './mixins/props-block3d.js'
import methods from './mixins/methods.js'
import methods_axes from './mixins/methods-block3d.js'

export default {
    name: 'graph-bar3d',
    mixins: [ graph_base, watch, created, mounted, props, props_axes, methods, methods_axes ],
    props: {
        names: {
            type: Array,
            required: true
        },
        barPadding: {
            type: Number,
            required: false,
            default: 20
        }
    },
    beforeMount: function() {
        this.brushes = [{
            type: 'polygon.column3d',
            colors: this.colors,
            padding: this.barPadding
        }];
    }
}