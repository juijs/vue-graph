/* bundling type : vue + vue-graph + juijs */

import Vue from 'vue'
import VueGraph from '../main.js'

Vue.use(VueGraph)


window.vm = new Vue({
    el: "#app",
    data: {
        name : "[Simple Dashboard]",
        labels: [ new Date('2018-07-09 00:00:00'), new Date('2018-07-10 00:00:00') ],
        // values: [
        //     [ 35, 5, 10, 15 ],
        //     [ 28, 10, 5, 15 ],
        //     [ 10, 30, 15, 35 ]
        // ],
        values: [
            [ new Date('2018-07-09 05:23:00'), 20 ],
            [ new Date('2018-07-09 12:00:00'), 15 ],
            [ new Date('2018-07-09 15:55:00'), 12 ],
            [ new Date('2018-07-09 19:01:00'), 30 ]
        ]
        ,
        title: "Line Test"
    },
    // computed: {
    //     customColors: function() {
    //         return [ "red", "blue", "yellow" ]
    //     }
    // },
    methods: {
        testtest: function(obj, e) {
            console.log(obj)
        },
        customColors: function(data, index) {
            // var colors = [ "red", "blue", "yellow" ];
            // return colors[index];

            return [ 0, 1, 2, 3, 4, 5 ];
        }
    }
});