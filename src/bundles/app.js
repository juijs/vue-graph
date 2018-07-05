/* bundling type : vue + vue-graph + juijs */

import Vue from 'vue'
import VueGraph from '../main.js'

Vue.use(VueGraph)

window.vm = new Vue({
    el: "#app",
    data: {
        name : "[Simple Dashboard]",
        labels: [ "1qqq", "2q", "3q", "4q" ],
        values: [ [ 35, 28, 10 ], [ -20, 10, 30 ], [ -20, 10, 30 ], [ -20, 10, 30 ] ],
        title: "Line Test"
    }
});