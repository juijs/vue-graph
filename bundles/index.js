/* bundling type : vue + vue-graph + juijs */

import Vue from 'vue'
import GraphStackBar from '../src/components/stackbar.js'
import WidgetLegend from '../src/widgets/legends.js'
import WidgetTooltip from '../src/widgets/tooltip.js'

Vue.component(GraphStackBar.name, GraphStackBar);
Vue.component(WidgetLegend.name, WidgetLegend);
Vue.component(WidgetTooltip.name, WidgetTooltip);

window.vm = new Vue({
    el: "#app",
    data: {
        names: [ 'MS', 'Apple', 'Google' ],
        values: [
            [ 10, 5, 5, 5 ],
            [ 40, 10, 10, 10 ],
            [ 30, 30, 30, 30 ]
        ],
        active: 2
    },
    methods: {
        dataFormat: function(d) {
            if(typeof(d) == "number") return d + "$";
            return d;
        }
    }
});