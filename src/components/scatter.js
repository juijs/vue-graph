import watch from './mixins/watch.js'
import created from './mixins/created.js'
import mounted from './mixins/mounted.js'
import props from './mixins/props.js'
import pros_axes from './mixins/props.timerange.js'
import methods from './mixins/methods.js'
import methods_axes from './mixins/methods.timerange.js'

export default {
    name: 'graph-scatter',
    template: '<div><slot></slot></div>',
    mixins: [ props, pros_axes, watch, created, mounted, methods, methods_axes ],
    props: {
        shape: {
            type: String, // "normal", "curve", "step"
            required: false,
            default: 'normal'
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
        this.brushes.push({
            type: 'scatter',
            target: [ '1' ],
            clip: this.clip,
            colors: this.colors,
            symbol: this.shape,
            activeEvent: this.activeEvent,
            display: this.display,
            opacity: this.opacity
        });
    }
}