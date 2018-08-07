import graph_line from './line.js'
import props_axes from "../base/props-timerange";
import methods_axes from "../base/methods-timerange";

export default {
    name: 'graph-line-timerange',
    mixins: [ graph_line, props_axes, methods_axes ],
    beforeMount: function() {
        this.brushes = [{
            type: 'line',
            target: '1',
            clip: this.clip,
            colors: this.colors,
            symbol: this.shape,
            active: this.activeIndex,
            activeEvent: this.activeEvent,
            display: this.display,
            opacity: this.opacity
        }];
    }
}