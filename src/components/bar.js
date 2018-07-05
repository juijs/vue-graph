import props from './mixins/props.js'
import watch from './mixins/watch.js'
import methods from './mixins/methods.js'
import created from './mixins/created.js'
import mounted from './mixins/mounted.js'

export default {
    name: 'graph-bar',
    template: '<div><slot></slot></div>',
    mixins: [ props, watch, methods, created, mounted ],
    props: {
    },
    beforeMount: function() {
        this.brushes.push({
            type: this.axisReverse ? 'bar' : 'column'
        });

        this.axes = 'createBlockAndRangeAxes';
    }
}