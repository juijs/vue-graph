import graph_core from './core.js'
import watch from '../base/watch.js'
import created from '../base/created.js'
import mounted from '../base/mounted.js'
import props from '../base/props.js'
import props_axes from '../base/props-block3d.js'
import methods from '../base/methods.js'
import methods_axes from '../base/methods-block3d.js'

import JUI from 'juijs-chart'
import Line3dBrush from 'juijs-chart/src/brush/polygon/line3d.js'
import Rotate3dWidget from 'juijs-chart/src/widget/polygon/rotate3d.js'

JUI.use(Line3dBrush, Rotate3dWidget)

export default {
    name: 'graph-line3d',
    mixins: [ graph_core, watch, created, mounted, props, props_axes, methods, methods_axes ],
    props: {
        names: {
            type: Array,
            required: true
        },
        linePadding: {
            type: Number,
            required: false,
            default: 20
        }
    },
    beforeMount: function() {
        this.brushes = [{
            type: 'polygon.line3d',
            colors: this.colors,
            padding: this.linePadding
        }];
    }
}