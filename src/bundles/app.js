/* bundling type : vue + vue-graph + juijs */

import Vue from 'vue'
import VueGraph from '../vue-graph.js'

Vue.use(VueGraph)

window.vm = new Vue({
    el: "#app",
    data: {
        name : "[Simple Dashboard]",
        values: [ 10, 5, 5, 5 ],
        names: [ 'Apple', 'Google', 'MS', 'Timax' ],
        title: "PIE",
    },
    methods: {
        dataFormat: function(a, b) {
            if(b) return b + "%";
            return a;
        }
    }
});