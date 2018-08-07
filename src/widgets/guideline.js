import graph_core from './core.js'
import jui from "juijs-chart";

export default {
    name: 'guideline',
    mixins: [ graph_core ],
    props: {
        tooltipX: {
            type: Boolean,
            required: false,
            default: false
        },
        tooltipY: {
            type: Boolean,
            required: false,
            default: true
        }
    },
    beforeMount: function(e) {
        const time = jui.include('util.time');
        const format = this.$parent.axisFormat;

        let formatFunc = function(value) {
            if(typeof(value) == 'object' && typeof(format) == 'string') {
                return time.format(value, format);
            } else if(typeof(value) == 'number') {
                return Math.round(value);
            }

            return value;
        }

        let opts = { type: 'cross' };
        if(this.tooltipX) opts.xFormat = formatFunc;
        if(this.tooltipY) opts.yFormat = formatFunc;

        this.$parent.widgets.push(opts);
    }
}