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

JUI.use(LineBrush)

export default {
    name: 'graph-line',
    mixins: [ graph_core, watch, created, mounted, props, props_axes, methods, methods_axes ],
    props: {
        shape: {
            type: String, // "normal", "curve", "step"
            required: false,
            default: 'normal'
        },
        activeIndex: {
            type: Number,
            required: false
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
        }
    },
    beforeMount: function() {
        this.brushes = [{
            type: 'line',
            clip: this.clip,
            colors: this.colors,
            symbol: this.shape,
            active: this.activeIndex,
            activeEvent: this.activeEvent,
            display: this.display,
            opacity: this.opacity
        }];
    }
}