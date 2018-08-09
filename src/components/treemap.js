import graph_core from './core.js'
import watch from '../base/watch.js'
import created from '../base/created.js'
import mounted from '../base/mounted.js'
import props from '../base/props.js'
import methods from '../base/methods.js'

import JUI from 'juijs-chart'
import TreemapBrush from 'juijs-chart/src/brush/treemap.js'

JUI.use(TreemapBrush)

export default {
    name: 'graph-treemap',
    mixins: [ graph_core, watch, created, mounted, props, methods ],
    props: {
        textAlign: {
            type: String,
            required: false,
            default: 'center' // or left, right
        },
        textVerticalAlign: {
            typ: String,
            required: false,
            default: 'top' // or bottom, middle
        },
        showText: {
            type: Boolean,
            required: false,
            default: false
        },
        titleDepth: {
            type: Number,
            required: false,
            default: 1
        },
        nodeColor: {
            type: Function,
            required: false,
            default: null
        }
    },
    methods: {
        convertToData: function(values) {
            let util = JUI.include('util.base');
            let rows = [];

            for(let i = 0; i < values.length; i++) {
                let val = values[i];

                if(util.typeCheck('array', val)) {
                    let row = { index: val[0], text: val[1] };

                    if(val.length == 3 && val[2] > 0) {
                        row['value'] = val[2];
                    }

                    rows.push(row);
                }
            }

            return rows;
        },
        initGraphAxes: function() {
            return {
                data : this.convertToData(this.values)
            }
        }
    },
    beforeMount: function() {
        const ORIENT_MAP = {
            top: 'top',
            middle: 'center',
            bottom: 'bottom'
        };

        const ALIGN_MAP = {
            left: 'start',
            center: 'middle',
            right: 'end'
        }

        this.brushes = [{
            type: 'treemap',
            clip: this.clip,
            colors: this.colors,
            target: [ 'value' ],
            textOrient: ORIENT_MAP[this.textVerticalAlign],
            textAlign: ALIGN_MAP[this.textAlign],
            showText: this.showText,
            titleDepth: this.titleDepth,
            nodeColor: this.nodeColor
        }];
    }
}