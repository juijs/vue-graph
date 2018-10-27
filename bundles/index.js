/* bundling type : vue + vue-graph + juijs */

import Vue from 'vue'
import GraphActiveBubble from '../src/components/activebubble.js'

Vue.component(GraphActiveBubble.name, GraphActiveBubble);

var vm = new Vue({
    el: "#app",
    data: {
        values: [
            [ Date.now(), 5000 ],
            [ Date.now() + 1000, 3000 ],
            [ Date.now() + 2000, 4000 ]
        ]
    }
});