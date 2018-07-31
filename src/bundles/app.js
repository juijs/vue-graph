/* bundling type : vue + vue-graph + juijs */

// import Vue from 'vue'
// import VueGraph from '../vue-graph.js'
//
// Vue.use(VueGraph)
//
// window.vm = new Vue({
//     el: "#app",
//     data: {
//         names: [ "MS", "Apple", "Google" ],
//         values: [
//             [ 10, 5, 5, 5 ],
//             [ 40, 10, 10, 10 ],
//             [ 30, 30, 30, 30 ]
//         ]
//     }
// });

import Vue from 'vue'
import GraphScatter from '../components/scatter.js'
import WidgetNote from '../components/widgets/note.js'
import WidgetTooltip from '../components/widgets/tooltip.js'
import WidgetLegends from '../components/widgets/legends.js'

Vue.component(GraphScatter.name, GraphScatter);
Vue.component(WidgetNote.name, WidgetNote);
Vue.component(WidgetTooltip.name, WidgetTooltip);
Vue.component(WidgetLegends.name, WidgetLegends);

window.vm = new Vue({
    el: "#app",
    data: {
        labels: [ new Date('2018-07-09 00:00:00'), new Date('2018-07-10 00:00:00') ],
        values: [
            [ new Date('2018-07-09 05:23:00'), 20 ],
            [ new Date('2018-07-09 12:00:00'), 15 ],
            [ new Date('2018-07-09 15:55:00'), 12 ],
            [ new Date('2018-07-09 19:01:00'), 30 ]
        ]
    }
});
