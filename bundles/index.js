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
import GraphTreemap from '../src/components/treemap.js'
import WidgetNote from '../src/widgets/note.js'
import WidgetTooltip from '../src/widgets/tooltip.js'

Vue.component(GraphTreemap.name, GraphTreemap);
Vue.component(WidgetNote.name, WidgetNote);
Vue.component(WidgetTooltip.name, WidgetTooltip);

window.vm = new Vue({
    el: "#app",
    data: {
        values: [
            [ '0', 'Apples', -1 ],
            [ '0.0', 'Anne', 5 ],
            [ '0.1', 'Rick', 3 ],
            [ '0.2', 'Peter', 4 ],
            [ '1', 'Bananas', -1 ],
            [ '1.0', 'Anne', 4 ],
            [ '1.1', 'Rick', 10 ],
            [ '1.2', 'Peter', 1 ],
            [ '2', 'Oranges', -1 ],
            [ '2.0', 'Anne', 1 ],
            [ '2.1', 'Rick', 3 ],
            [ '2.2', 'Peter', 3 ],
            [ '3', 'Susanne', 2 ],
        ],
        names: [ '1' ]
    }
});
