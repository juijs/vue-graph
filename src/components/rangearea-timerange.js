import graph_core from './core.js'
import watch from '../base/watch.js'
import created from '../base/created.js'
import mounted from '../base/mounted.js'
import props from '../base/props.js'
import props_axes from '../base/props-timerange.js';
import methods from '../base/methods.js'
import methods_axes from '../base/methods-timerange.js'

import JUI from 'juijs-chart'
import LineBrush from 'juijs-chart/src/brush/line.js'
import RangeAreaBrush from 'juijs-chart/src/brush/rangearea.js'

JUI.use(LineBrush, RangeAreaBrush)

export default {
    name: 'graph-rangearea-timerange',
    mixins: [ graph_core, watch, created, mounted, props, props_axes, methods, methods_axes ],
    methods: {
        convertToData: function(values) {
            var data = [];

            for(let i = 0; i < values.length; i++) {
                var row = values[i];

                if(typeof(row) == 'object' && row.length == 4) {
                    data.push({
                        '0': row[0],
                        '1': [row[1], row[3]],
                        '2': row[2]
                    });
                }
            }

            return data;
        }
    },
    beforeMount: function() {
        this.brushes = [{
            type: 'rangearea',
            clip: this.clip,
            colors: this.colors,
            target: '1'
        }, {
            type: 'line',
            clip: this.clip,
            colors: this.colors,
            target: '2'
        }];
    }
}