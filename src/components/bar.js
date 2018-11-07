import graph_core from './core.js'
import watch from '../base/watch.js'
import created from '../base/created.js'
import mounted from '../base/mounted.js'
import props from '../base/props.js'
import props_axes from '../base/props-block.js';
import methods from '../base/methods.js'
import methods_axes from '../base/methods-block.js'

import JUI from 'juijs-chart'
import BarBrush from 'juijs-chart/src/brush/bar.js'
import ColumnBrush from 'juijs-chart/src/brush/column.js'

JUI.use(BarBrush, ColumnBrush)

export default {
    name: 'graph-bar',
    mixins: [ graph_core, watch, created, mounted, props, props_axes, methods, methods_axes ],
    props: {
        fixedSize: {
            type: Number,
            required: false,
            default: 0
        },
        minValue: {
            type: Number,
            required: false,
            default: 0
        },
        barMargin: {
            type: Number,
            required: false,
            default: 2
        },
        barPadding: {
            type: Number,
            required: false,
            default: 1
        },
        activeIndex: {
            type: Number,
            required: false
        },
        activeEvent: {
            type: String, // "click", "dblclick", ...
            required: false
        },
        display: { // "max", "min", "all"
            type: String,
            required: false
        }
    },
    watch: {
        activeIndex: function(newVal, oldVal) {
            if(newVal == oldVal) return;

            this.chart.updateBrush(0, { active: newVal });
            this.chart.render();
        }
    },
    beforeMount: function() {
        this.brushes = [{
            type: this.axisReverse ? 'bar' : 'column',
            clip: this.clip,
            colors: this.colors,
            active: this.activeIndex,
            activeEvent: this.activeEvent,
            display: this.display,
            size: this.fixedSize,
            minSize: this.minValue,
            outerPadding: this.barMargin,
            innerPadding: this.barPadding
        }];
    }
}