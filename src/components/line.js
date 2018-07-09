import props from './mixins/props.js'
import watch from './mixins/watch.js'
import methods from './mixins/methods.js'
import methods_axes from './mixins/methods.block-and-range.js'
import created from './mixins/created.js'
import mounted from './mixins/mounted.js'

export default {
    name: 'graph-line',
    template: '<div><slot></slot></div>',
    mixins: [ props, watch, methods, methods_axes, created, mounted ],
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
        this.brushes.push({
            type: 'line',
            clip: this.clip,
            colors: this.colors,
            symbol: this.shape,
            active: this.activeIndex,
            activeEvent: this.activeEvent,
            display: this.display,
            opacity: this.opacity
        });
    }
}