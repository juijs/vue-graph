import graph_line from './line.js'
import props_axes from "../base/props-dateblock.js";
import methods_axes from "../base/methods-dateblock.js";

export default {
    name: 'graph-line-dateblock',
    mixins: [ graph_line, props_axes, methods_axes ]
}