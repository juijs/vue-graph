import Vue from 'vue'
import VueGraph from '../src/vue-graph.js'

Vue.use(VueGraph)

window.vm = new Vue({
    el: "#app",
    data: {
        name : "[Simple Dashboard]",
        labels: [ "1q", "2q", "3q", "4q" ],
        values: [ [ 10, 40, 30 ], [ -20, 10, 30 ], [ -20, 10, 30 ], [ -20, 10, 30 ] ],
        title: "Line Test"
    }
})