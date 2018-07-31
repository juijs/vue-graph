import graph_base from './base.js'
import watch from './mixins/watch.js'
import created from './mixins/created.js'
import mounted from './mixins/mounted.js'
import props from './mixins/props.js'
import props_axes from './mixins/props-block.js';
import methods from './mixins/methods.js'
import methods_axes from './mixins/methods-block.js'

import JUI from 'juijs-chart'
import LineBrush from 'juijs-chart/src/brush/line.js'

JUI.use(LineBrush)

export default {
    name: 'graph-line',
    mixins: [ graph_base, watch, created, mounted, props, props_axes, methods, methods_axes ],
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