/* bundling type : vue + vue-graph + juijs */

import Vue from 'vue'
import VueGraph from '../main.js'

Vue.use(VueGraph)

window.vm = new Vue({
    el: "#app",
    data: {
        name : "[Simple Dashboard]",
        labels: [ "1q", "2q", "3q", "4q" ],
        values: [
            [ 10, 5, 5, 5 ],
            [ 40, 10, 10, 10 ],
            [ 30, 30, 30, 30 ]
        ],
        title: "Area Test"
    }
});