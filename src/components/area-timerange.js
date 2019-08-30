import graph_area from './area.js'
import props_axes from "../base/props-timerange.js";
import methods_axes from "../base/methods-timerange.js";

export default {
    name: 'graph-area-timerange',
    mixins: [ graph_area, props_axes, methods_axes ],
    beforeMount: function() {
        this.brushes = [{
            type: 'stackarea',
            target: '1',
            clip: this.clip,
            colors: this.colors,
            symbol: this.shape,
            opacity: this.opacity,
            line: this.borderLine,
            display: this.display
        }];
    }
}