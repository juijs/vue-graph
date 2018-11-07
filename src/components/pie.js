import graph_core from './core.js'
import watch from '../base/watch.js'
import created from '../base/created.js'
import mounted from '../base/mounted.js'
import props from '../base/props.js'
import methods from '../base/methods.js'

import JUI from 'juijs-chart'
import PieBrush from 'juijs-chart/src/brush/pie.js'
import DonutBrush from 'juijs-chart/src/brush/donut.js'

JUI.use(PieBrush, DonutBrush)

export default {
    name: 'graph-pie',
    mixins: [ graph_core, watch, created, mounted, props, methods ],
    props: {
        shape: {
            type: String,
            required: false,
            default: 'pie' // or donut
        },
        names: {
            type: Array,
            required: true
        },
        activeIndex: {
            type: [ Number, Array ],
            required: false
        },
        activeEvent: {
            type: String,
            required: false
        },
        showTextType: {
            type: String,
            required: false // outside, inside
        },
        dataFormat: {
            type: Function,
            required: false
        },
        showTotalValue: {
            type: Boolean,
            required: false,
            default: false,
        },
        strokeWidth: {
            type: Number,
            required: false,
            default: 50
        }
    },
    watch: {
        activeIndex: function(newVal, oldVal) {
            if(newVal == oldVal) return;

            this.chart.updateBrush(0, { active: newVal });
            this.chart.render();
        }
    },
    methods: {
        convertToData: function(values) {
            var row = {};

            for(let i = 0; i < values.length; i++) {
                row['' + i] = values[i];
            }

            return [ row ];
        },
        initGraphAxes: function() {
            return {
                data : this.convertToData(this.values)
            }
        }
    },
    beforeMount: function() {
        const self = this;

        const brush = {
            type: this.shape,
            clip: this.clip,
            colors: this.colors,
            active: this.activeIndex,
            activeEvent: this.activeEvent,
            showText: this.showTextType,
            format: function(key, value) {
                if(typeof(self.dataFormat) == 'function') {
                    return self.dataFormat.apply(this, [ key, value ]);
                }

                return self.names[key] + ': ' + value;
            }
        };

        if(this.shape == 'donut') {
            brush.size = this.strokeWidth;
            brush.showValue = this.showTotalValue;
        }

        this.brushes = [ brush ];
    }
}