import graph_base from './base.js'
import watch from './mixins/watch.js'
import created from './mixins/created.js'
import mounted from './mixins/mounted.js'
import props from './mixins/props.js'
import props_axes from './mixins/props-block.js';
import methods from './mixins/methods.js'
import methods_axes from './mixins/methods-block.js'

export default {
    name: 'graph-bar',
    mixins: [ graph_base, watch, created, mounted, props, props_axes, methods, methods_axes ],
    props: {
        fixedSize: {
            type: Number,
            required: false,
            default: 0
        },
        minValue: {
            type: Number,
            required: false,
            default: 0
        },
        barMargin: {
            type: Number,
            required: false,
            default: 2
        },
        barPadding: {
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
            size: this.fixedSize,
            minSize: this.minValue,
            outerPadding: this.barMargin,
            innerPadding: this.barPadding
        }];
    }
}