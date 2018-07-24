/* bundling type : vue + vue-graph + juijs */

import Vue from 'vue'
import VueGraph from '../vue-graph.js'

Vue.use(VueGraph)

window.vm = new Vue({
    el: "#app",
    data: {
        labels: [ new Date("2018-07-07 00:00:00"), new Date("2018-07-08 00:00:00") ],
        values: [
            [ new Date("2018-07-07 00:00:00"), 55 ],
            [ new Date("2018-07-07 12:42:33"), 30 ],
            [ new Date("2018-07-07 15:11:12"), 70 ],
            [ new Date("2018-07-07 19:12:00"), 90 ],
            [ new Date("2018-07-07 22:55:55"), 45 ]
        ]
    }
});