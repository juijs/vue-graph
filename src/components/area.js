import graph_core from './core.js'
import watch from '../base/watch.js'
import created from '../base/created.js'
import mounted from '../base/mounted.js'
import props from '../base/props.js'
import props_axes from '../base/props-block.js';
import methods from '../base/methods.js'
import methods_axes from '../base/methods-block.js'

import JUI from 'juijs-chart'
import LineBrush from 'juijs-chart/src/brush/line.js'
import AreaBrush from 'juijs-chart/src/brush/area.js'
import StackAreaBrush from 'juijs-chart/src/brush/stackarea.js'

JUI.use(LineBrush, AreaBrush, StackAreaBrush);

export default {
    name: 'graph-area',
    mixins: [ graph_core, watch, created, mounted, props, props_axes, methods, methods_axes ],
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
        borderLine: {
            type: Boolean,
            required: false,
            default: true
        },
        display: { // "max", "min", "all"
            type: String,
            required: false
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
            line: this.borderLine,
            display: this.display
        }];
    }
}