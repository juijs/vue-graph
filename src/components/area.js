import graph_base from './base.js'
import watch from './mixins/watch.js'
import created from './mixins/created.js'
import mounted from './mixins/mounted.js'
import props from './mixins/props.js'
import props_axes from './mixins/props-block.js';
import methods from './mixins/methods.js'
import methods_axes from './mixins/methods-block.js'

export default {
    name: 'graph-area',
    mixins: [ graph_base, watch, created, mounted, props, props_axes, methods, methods_axes ],
    props: {
        shape: {
            type: String, // "normal", "curve", "step"
            required: false,
            default: 'normal'
        },
        opacity: {
            type: Number,
            required: false
        },
        borderline: {
            type: Boolean,
            required: false,
            default: true
        }
    },
    methods: {
        getAxisMinAndMax: function() {
            let min = this.axisMin;
            let max = this.axisMax;

            if(min != max) {
                return [ min, max ]
            }

            return function(data) {
                return Object.values(data).reduce((a, b) => a + b, 0)
            }
        }
    },
    beforeMount: function() {
        this.brushes = [{
            type: 'stackarea',
            clip: this.clip,
            colors: this.colors,
            symbol: this.shape,
            opacity: this.opacity,
            line: this.borderline
        }];
    }
}