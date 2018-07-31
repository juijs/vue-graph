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
import RangeAreaBrush from 'juijs-chart/src/brush/rangearea.js'

JUI.use(LineBrush, RangeAreaBrush)

export default {
    name: 'graph-rangearea',
    mixins: [ graph_base, watch, created, mounted, props, props_axes, methods, methods_axes ],
    methods: {
        convertToData: function(values) {
            var data = [];

            for(let i = 0; i < values.length; i++) {
                var row = values[i];

                if(typeof(row) == 'object' && row.length == 3) {
                    data.push({
                        '0': [row[0], row[2]],
                        '1': row[1]
                    });
                }
            }

            return data;
        },
        getAxisMinAndMax: function() {
            let min = this.axisMin;
            let max = this.axisMax;

            if(min != max) {
                return [ min, max ]
            }

            return function(data) {
                return Object.values(data['0']).reduce((a, b) => Math.max(a, b))
            }
        }
    },
    beforeMount: function() {
        this.brushes = [{
            type: 'rangearea',
            clip: this.clip,
            colors: this.colors,
            target: '0'
        }, {
            type: 'line',
            clip: this.clip,
            colors: this.colors,
            target: '1'
        }];
    }
}