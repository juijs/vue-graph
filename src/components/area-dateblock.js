import graph_area from './area.js'
import props_axes from "../base/props-dateblock.js";
import methods_axes from "../base/methods-dateblock.js";

export default {
    name: 'graph-area-dateblock',
    mixins: [ graph_area, props_axes, methods_axes ]
}