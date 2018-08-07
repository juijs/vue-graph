import graph_core from './core.js'
import watch from '../base/watch.js'
import created from '../base/created.js'
import mounted from '../base/mounted.js'
import props from '../base/props.js'
import props_axes from '../base/props-timerange.js'
import methods from '../base/methods.js'
import methods_axes from '../base/methods-timerange.js'

import JUI from 'juijs-chart'
import ScatterBrush from 'juijs-chart/src/brush/scatter.js'

JUI.use(ScatterBrush)

export default {
    name: 'graph-scatter',
    mixins: [ graph_core, watch, created, mounted, props, props_axes, methods, methods_axes ],
    props: {
        shape: {
            type: String, // circle", "triangle", "rectangle", "cross"
            required: false,
            default: 'circle'
        },
        activeEvent: {
            type: String, // "click", "dblclick", ...
            required: false
        },
        display: { // "max", "min", "all"
            type: String,
            required: false
        },
        opacity: {
            type: Number,
            required: false
        },
        size: {
            type: Number,
            required: false,
            size: 7
        },
        hideZero: {
            type: Boolean,
            required: false,
            size: false
        }
    },
    beforeMount: function() {
        this.brushes = [{
            type: 'scatter',
            target: [ '1' ],
            clip: this.clip,
            colors: this.colors,
            symbol: this.shape,
            activeEvent: this.activeEvent,
            display: this.display,
            opacity: this.opacity,
            size: this.size,
            hideZero: this.hideZero
        }];
    }
}