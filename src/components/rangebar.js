import graph_core from './core.js'
import watch from '../base/watch.js'
import created from '../base/created.js'
import mounted from '../base/mounted.js'
import props from '../base/props.js'
import props_axes from '../base/props-block.js';
import methods from '../base/methods.js'
import methods_axes from '../base/methods-block.js'

import JUI from 'juijs-chart'
import RangeBarBrush from 'juijs-chart/src/brush/rangebar.js'
import RangeColumnBrush from 'juijs-chart/src/brush/rangecolumn.js'

JUI.use(RangeBarBrush, RangeColumnBrush)

export default {
    name: 'graph-rangebar',
    mixins: [ graph_core, watch, created, mounted, props, props_axes, methods, methods_axes ],
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