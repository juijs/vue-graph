import graph_base from './base.js'
import watch from './mixins/watch.js'
import created from './mixins/created.js'
import mounted from './mixins/mounted.js'
import props from './mixins/props.js'
import props_axes from './mixins/props-timerange.js';
import methods from './mixins/methods.js'
import methods_axes from './mixins/methods-timerange.js'

export default {
    name: 'graph-rangearea-timerange',
    mixins: [ graph_base, watch, created, mounted, props, props_axes, methods, methods_axes ],
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