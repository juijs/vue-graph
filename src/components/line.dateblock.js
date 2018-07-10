import graph_line from './line.js'
import props_axes from "./mixins/props.dateblock";
import methods_axes from "./mixins/methods.dateblock";

export default {
    name: 'graph-line-dateblock',
    mixins: [ graph_line, props_axes, methods_axes ],
}