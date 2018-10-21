import graph_core from './core.js'
import watch from '../base/watch.js'
import watch_animation from '../base/watch-animation.js'
import created from '../base/created.js'
import mounted_animation from '../base/mounted-animation.js'
import props from '../base/props.js'
import props_animation from '../base/props-animation.js'
import props_axes from '../base/props-block.js'
import methods from '../base/methods.js'
import methods_axes from '../base/methods-block.js'

import JUI from 'juijs-chart'
import EqualizerColumnBrush from 'juijs-chart/src/brush/canvas/equalizercolumn.js'

JUI.use(EqualizerColumnBrush)

export default {
    name: 'graph-equalizer',
    mixins: [ graph_core, watch, watch_animation, created, mounted_animation, props, props_animation, props_axes, methods, methods_axes ],
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
        maxDivisions: {
            type: Number,
            required: false,
            default: 5
        }
    },
    beforeMount: function() {
        this.brushes = [{
            type: 'canvas.equalizercolumn',
            clip: this.clip,
            colors: this.colors,
            size: this.fixedSize,
            minSize: this.minValue,
            outerPadding: this.barMargin,
            innerPadding: this.barPadding,
            unit: this.maxDivisions
        }];
    }
}