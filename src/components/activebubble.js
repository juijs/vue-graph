import graph_core from './core.js'
import watch from '../base/watch.js'
import watch_animation from '../base/watch-animation.js'
import created from '../base/created.js'
import mounted_animation from '../base/mounted-animation.js'
import props from '../base/props.js'
import props_animation from '../base/props-animation.js'
import methods from '../base/methods.js'

import JUI from 'juijs-chart'
import ActiveBubbleBrush from 'juijs-chart/src/brush/canvas/activebubble.js'

JUI.use(ActiveBubbleBrush)

export default {
    name: 'graph-activebubble',
    mixins: [ graph_core, watch, watch_animation, created, mounted_animation, props, props_animation, methods ],
    props: {
        gravity: {
            type: Number,
            required: false,
            default: 0.2
        },
        radius: {
            type: Number,
            required: false,
            default: 20
        },
        opacity: {
            type: Number,
            required: false,
            default: 1
        }
    },
    methods: {
        convertToData: function(values) {
            let data = [];

            for(let i = 0; i < values.length; i++) {
                let row = values[i];

                if(row.length == 2) {
                    data.push({
                        '0': row[0],
                        '1': row[1]
                    });
                }
            }

            return data;
        },
        initGraphAxes: function() {
            return {
                keymap: {
                    'startTime': '0',
                    'duration': '1'
                },
                data: this.convertToData(this.values)
            }
        }
    },
    beforeMount: function() {
        this.brushes = [{
            type: 'canvas.activebubble',
            clip: this.clip,
            colors: this.colors,
            gravity: this.gravity,
            radius: this.radius,
            opacity: this.opacity
        }];
    }
}