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
import TestComp from './comp.js'

Vue.component('test-comp', TestComp);

window.vm = new Vue({
    el: "#app"
});
