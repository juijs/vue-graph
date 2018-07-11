/* bundling type : vue + vue-graph + juijs */

import Vue from 'vue'
import VueGraph from '../main.js'

Vue.use(VueGraph)


window.vm = new Vue({
    el: "#app",
    data: {
        name : "[Simple Dashboard]",
        labels: [ "1q", "2q", "3q", "4q" ],
        names: [ "ms", "apple", "google" ],
        values: [
            [ 0, 15, 8, 18 ],
            [ 15, 6, 10, 5 ],
            [ 20, 20, 20, 20 ]
        ],
        title: "Bar Test"
    }
});