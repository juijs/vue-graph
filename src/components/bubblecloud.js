import graph_core from './core.js'
import watch from '../base/watch.js'
import watch_animation from '../base/watch-animation.js'
import created from '../base/created.js'
import mounted_animation from '../base/mounted-animation.js'
import props from '../base/props.js'
import props_animation from '../base/props-animation.js'
import methods from '../base/methods.js'

import JUI from 'juijs-chart'
import BubbleCloudBrush from 'juijs-chart/src/brush/canvas/bubblecloud.js'

JUI.use(BubbleCloudBrush)

export default {
    name: 'graph-bubblecloud',
    mixins: [ graph_core, watch, watch_animation, created, mounted_animation, props, props_animation, methods ],
    methods: {
        convertToData: function(values) {
            let data = [];

            for(let i = 0; i < values.length; i++) {
                let row = values[i],
                    value = {};

                for(let j = 0; j < row.length; j++) {
                    value[`${j}`] = row[j];
                }

                data.push(value);
            }

            return data;
        },
        initGraphAxes: function() {
            return {
                keymap: {
                    'title': '0',
                    'capacity': '1'
                },
                data: this.convertToData(this.values)
            }
        }
    },
    beforeMount: function() {
        this.brushes = [{
            type: 'canvas.bubblecloud',
            clip: this.clip,
            colors: this.colors
        }];
    }
}