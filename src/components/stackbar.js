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
import StackBarBrush from 'juijs-chart/src/brush/stackbar.js'
import FullStackBarBrush from 'juijs-chart/src/brush/fullstackbar.js'
import ColumnBrush from 'juijs-chart/src/brush/column.js'
import StackColumnBrush from 'juijs-chart/src/brush/stackcolumn.js'
import FullStackColumnBrush from 'juijs-chart/src/brush/fullstackcolumn.js'

JUI.use(BarBrush, StackBarBrush, FullStackBarBrush, ColumnBrush, StackColumnBrush, FullStackColumnBrush)

export default {
    name: 'graph-stackbar',
    mixins: [ graph_core, watch, created, mounted, props, props_axes, methods, methods_axes ],
    props: {
        fixedSize: {
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
        },
        connectedLine: {
            type: Boolean,
            required: false,
            default: false
        },
        fullMode: {
            type: Boolean,
            required: false,
            default: false
        },
        showText: {
            type: Boolean,
            required: false,
            default: false
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
        getAxisMinAndMax: function() {
            let min = this.axisMin;
            let max = this.axisMax;

            if(min != max) {
                return [ min, max ]
            }

            return function(data) {
                return Object.values(data).reduce((a, b) => a + b, 0)
            }
        }
    },
    beforeMount: function() {
        const brushName = this.axisReverse ? 'stackbar' : 'stackcolumn';

        this.brushes = [{
            type: this.fullMode ? 'full' + brushName : brushName,
            clip: this.clip,
            colors: this.colors,
            active: this.activeIndex,
            activeEvent: this.activeEvent,
            display: this.display,
            size: this.fixedSize,
            outerPadding: this.barMargin,
            innerPadding: this.barPadding,
            edge: this.connectedLine
        }];

        if(this.fullMode) {
            this.brushes[0].showText = this.showText;
        }
    }
}