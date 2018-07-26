import graph_rangearea from './rangearea.js'
import props_axes from "./mixins/props-dateblock.js";
import methods_axes from "./mixins/methods-dateblock.js";

export default {
    name: 'graph-rangearea-dateblock',
    mixins: [ graph_rangearea, props_axes, methods_axes ]
}