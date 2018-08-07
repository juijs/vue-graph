import graph_core from './core.js'
import watch from '../base/watch.js'
import created from '../base/created.js'
import mounted from '../base/mounted.js'
import props from '../base/props.js'
import props_axes from '../base/props-timerange.js'
import methods from '../base/methods.js'
import methods_axes from '../base/methods-timerange.js'

import JUI from 'juijs-chart'
import BubbleBrush from 'juijs-chart/src/brush/bubble.js'

JUI.use(BubbleBrush)

export default {
    name: 'graph-bubble',
    mixins: [ graph_core, watch, created, mounted, props, props_axes, methods, methods_axes ],
    props: {
        minSize: {
            type: Number,
            required: false,
            default: 5
        },
        maxSize: {
            type: Number,
            required: false,
            default: 30
        },
        showText: {
            type: Boolean,
            required: false,
            default: false
        },
        activeEvent: {
            type: String, // "click", "dblclick", ...
            required: false
        }
    },
    beforeMount: function() {
        this.brushes = [{
            type: 'bubble',
            target: [ '1' ],
            clip: this.clip,
            colors: this.colors,
            min: this.minSize,
            max: this.maxSize,
            showText: this.showText,
            activeEvent: (this.showText) ? this.activeEvent : null
        }];
    }
}