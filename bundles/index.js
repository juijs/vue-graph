/* bundling type : vue + vue-graph + juijs */

import Vue from 'vue'
import GraphEqualizer from '../src/components/equalizer.js'

Vue.component(GraphEqualizer.name, GraphEqualizer);

var vm = new Vue({
    el: "#app",
    data: {
        names: [ "0-3", "3-6", "6-9", "9-" ],
        values: [
            [ 5, 5, 5, 5, 5, 5, 5 ],
            [ 5, 5, 5, 5, 5, 5, 5 ],
            [ 5, 5, 5, 5, 5, 5, 5 ],
            [ 5, 5, 5, 5, 5, 5, 5 ]
        ],
        isStop: false
    },
    methods: {
        onClickEvent: function(data, e) {
            console.log(data);
        }
    }
});