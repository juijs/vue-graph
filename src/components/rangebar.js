import graph_base from './base.js'
import watch from './mixins/watch.js'
import created from './mixins/created.js'
import mounted from './mixins/mounted.js'
import props from './mixins/props.js'
import props_axes from './mixins/props-block.js';
import methods from './mixins/methods.js'
import methods_axes from './mixins/methods-block.js'

import JUI from 'juijs-chart'
import RangeBarBrush from 'juijs-chart/src/brush/rangebar.js'
import RangeColumnBrush from 'juijs-chart/src/brush/rangecolumn.js'

JUI.use(RangeBarBrush, RangeColumnBrush)

export default {
    name: 'graph-rangebar',
    mixins: [ graph_base, watch, created, mounted, props, props_axes, methods, methods_axes ],
    props: {
        barMargin: {
            type: Number,
            required: false,
            default: 2
        },
        barPadding: {
            type: Number,
            required: false,
            default: 1
        }
    },
    beforeMount: function() {
        this.brushes = [{
            type: this.axisReverse ? 'rangebar' : 'rangecolumn',
            clip: this.clip,
            colors: this.colors,
            outerPadding: this.barMargin,
            innerPadding: this.barPadding
        }];
    }
}