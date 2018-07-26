/* bundling type : vue + vue-graph + juijs */

import Vue from 'vue'
import VueGraph from '../vue-graph.js'

Vue.use(VueGraph)

window.vm = new Vue({
    el: "#app",
    data: {
        labels: [ new Date("2001-01-01 00:00:00"), new Date("2009-01-01 00:00:00") ],
        values: [
            [ new Date("2001-06-01 00:00:00"), 4, 6, 8 ],
            [ new Date("2002-01-01 00:00:00"), 5, 7, 9 ],
            [ new Date("2003-01-01 00:00:00"), 6, 8, 11 ],
            [ new Date("2004-01-01 00:00:00"), 5, 6, 10 ],
            [ new Date("2005-01-01 00:00:00"), 2, 3, 6 ],
            [ new Date("2006-01-01 00:00:00"), 5, 6, 8 ],
            [ new Date("2007-01-01 00:00:00"), 2, 4, 6 ],
            [ new Date("2008-09-01 00:00:00"), 8, 10, 12 ]
        ]
    }
});