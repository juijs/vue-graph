import graph_base from './base.js'
import watch from './mixins/watch.js'
import created from './mixins/created.js'
import mounted from './mixins/mounted.js'
import props from './mixins/props.js'
import methods from './mixins/methods.js'

import JUI from 'juijs-chart'
import PieBrush from 'juijs-chart/src/brush/pie.js'
import DonutBrush from 'juijs-chart/src/brush/donut.js'

JUI.use(PieBrush, DonutBrush)

export default {
    name: 'graph-pie',
    mixins: [ graph_base, watch, created, mounted, props, methods ],
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