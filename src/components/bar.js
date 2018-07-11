import graph_base from './base.js'
import props from './mixins/props.js'
import watch from './mixins/watch.js'
import created from './mixins/created.js'
import mounted from './mixins/mounted.js'
import methods from './mixins/methods.js'
import methods_axes from './mixins/methods.block.js'

export default {
    name: 'graph-bar',
    mixins: [ graph_base, props, watch, created, mounted, methods, methods_axes ],
    props: {
        size: {
            type: Number,
            required: false,
            default: 0
        },
        minSize: {
            type: Number,
            required: false,
            default: 0
        },
        margin: {
            type: Number,
            required: false,
            default: 2
        },
        padding: {
            type: Number,
            required: false,
            default: 1
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
        }
    },
    beforeMount: function() {
        this.brushes = [{
            type: this.axisReverse ? 'bar' : 'column',
            clip: this.clip,
            colors: this.colors,
            active: this.activeIndex,
            activeEvent: this.activeEvent,
            display: this.display,
            size: this.size,
            minSize: this.minSize,
            outerPadding: this.margin,
            innerPadding: this.padding
        }];
    }
}