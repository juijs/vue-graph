import graph_bar from './bar.js'

import JUI from 'juijs-chart'
import BarBrush from 'juijs-chart/src/brush/bar.js'

JUI.use(BarBrush)

export default {
    name: 'graph-comparison-bar',
    mixins: [ graph_bar ],
    methods: {
        initGraphAxes: function() {
            return [{
                x : {
                    type : "range",
                    domain : function(d) {
                        return Math.max(d[0], d[1]);
                    },
                    step : this.axisStep,
                    line : this.axisXStyle,
                    hide : this.axisXStyle == "hidden",
                    reverse : true
                },
                y : {
                    type : "block",
                    domain : this.labels,
                    line : this.axisYStyle,
                    hide : this.axisYStyle == "hidden",
                },
                data : this.convertToData(this.values),
                area : {
                    x : 0, y : 0, width : "50%", height : "100%"
                }
            }, {
                x : {
                    reverse : false
                },
                y : {
                    orient : "right"
                },
                area : {
                    x : "50%", y : 0, width : "50%", height : "100%"
                },
                extend : 0
            }]
        }
    },
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