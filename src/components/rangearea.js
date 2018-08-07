import graph_core from './core.js'
import watch from '../base/watch.js'
import created from '../base/created.js'
import mounted from '../base/mounted.js'
import props from '../base/props.js'
import props_axes from '../base/props-block.js';
import methods from '../base/methods.js'
import methods_axes from '../base/methods-block.js'

import JUI from 'juijs-chart'
import LineBrush from 'juijs-chart/src/brush/line.js'
import RangeAreaBrush from 'juijs-chart/src/brush/rangearea.js'

JUI.use(LineBrush, RangeAreaBrush)

export default {
    name: 'graph-rangearea',
    mixins: [ graph_core, watch, created, mounted, props, props_axes, methods, methods_axes ],
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