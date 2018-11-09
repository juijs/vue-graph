import graph_core from './core.js'

export default {
    name: 'legends',
    mixins: [ graph_core ],
    props: {
        names: {
            type: Array,
            required: true
        },
        align: {
            type: String,
            required: false,
            default: 'center' // or start, end
        },
        position: {
            typ: String,
            required: false,
            default: 'bottom' // or top, left, right
        },
        dx: {
            type: Number,
            required: false,
            default: 0
        },
        dy: {
            type: Number,
            required: false,
            default: 0
        },
        filter: {
            type: Boolean,
            required: false,
            default: false
        },
        colors: {
            type: Array,
            required: false
        }
    },
    watch: {
        names: function(newVal, oldVal) {
            this.names = newVal;
            this.$parent.chart.render(true);
        }
    },
    beforeMount: function(e) {
        const self = this;

        const ALIGN_MAP = {
            left: 'start',
            center: 'center',
            right: 'end'
        }

        this.$parent.widgets.push({
            type: 'legend',
            brush: this.brushes,
            orient: this.position,
            align: ALIGN_MAP[this.align],
            dx: this.dx,
            dy: this.dy,
            filter: this.filter,
            colors: this.color,
            format: function(key) {
                return this.format(self.names[key]);
            }
        });
    }
}