import graph_bar from './bar.js'
import methods_axes from "../base/methods-comparison.js";

import JUI from 'juijs-chart'
import BarBrush from 'juijs-chart/src/brush/bar.js'

JUI.use(BarBrush)

export default {
    name: 'graph-comparison-bar',
    mixins: [ graph_bar, methods_axes ],
    beforeMount: function() {
        const _ = JUI.include('util.base')

        let colors = !this.colors ? [ 1, 2 ] : this.colors;

        let options = {
            type: 'bar',
            clip: this.clip,
            active: this.activeIndex,
            activeEvent: this.activeEvent,
            display: this.display,
            size: this.fixedSize,
            minSize: this.minValue,
            outerPadding: this.barMargin,
            innerPadding: this.barPadding
        }

        this.brushes = [
            _.extend({ target: '0', axis: 0, colors: [ colors[0] ] }, options),
            _.extend({ target: '1', axis: 1, colors: [ colors[1] ] }, options)
        ]
    }
}