import graph_area from './area.js'

import JUI from 'juijs-chart'
import AreaBrush from 'juijs-chart/src/brush/area.js'

JUI.use(AreaBrush)

export default {
    name: 'graph-comparison-area',
    mixins: [ graph_area ],
    props: {
        axisMin: {
            type: Array,
            required: false,
            default: null
        },
        axisMax: {
            type: Array,
            required: false,
            default: null
        }
    },
    methods: {
        getAxisMinAndMax: function(data, index) {
            let min = this.axisMin;
            let max = this.axisMax;

            if(min != null && max != null) {
                return [ min[index], max[index] ]
            }

            return data[index];
        },
        initGraphAxes: function() {
            const self = this;

            return [{
                x : {
                    type : "fullblock",
                    domain : this.labels,
                    line : this.axisXStyle,
                    hide : this.axisXStyle == "hidden",
                },
                y : {
                    type : "range",
                    domain : function(data) {
                        return self.getAxisMinAndMax(data, 0);
                    },
                    step : this.axisStep,
                    line : this.axisYStyle,
                    hide : this.axisYStyle == "hidden",
                    reverse : true,
                    color : 0
                },
                data : this.convertToData(this.values)
            }, {
                x : {
                    hide : true
                },
                y : {
                    orient : "right",
                    domain : function(data) {
                        return self.getAxisMinAndMax(data, 1);
                    },
                    reverse : false,
                    color : 1
                },
                extend : 0
            }]
        }
    },
    beforeMount: function() {
        const _ = JUI.include('util.base')

        let colors = !this.colors ? [ 0, 1 ] : this.colors;

        let options = {
            type: 'area',
            clip: this.clip,
            symbol: this.shape,
            opacity: this.opacity,
            line: this.borderLine,
            display: this.display
        }

        this.brushes = [
            _.extend({ target: '0', axis: 0, colors: [ colors[0] ] }, options),
            _.extend({ target: '1', axis: 1, colors: [ colors[1] ] }, options)
        ]
    }
}