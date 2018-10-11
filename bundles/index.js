/* bundling type : vue + vue-graph + juijs */

import Vue from 'vue'
import GraphPie from '../src/components/pie.js'
import WidgetLegends from '../src/widgets/legends.js'
import WidgetTooltip from '../src/widgets/tooltip.js'

Vue.component(GraphPie.name, GraphPie);
Vue.component(WidgetLegends.name, WidgetLegends);
Vue.component(WidgetTooltip.name, WidgetTooltip);

var vm = new Vue({
    el: "#app",
    data: {
        dataset: 'set1',
        items: {
            set1: {
                values: [ 10, 5, 5, 5 ],
                names: [ 'Apple', 'Google', 'MS', 'Facebook' ],
            },
            set2: {
                values: [ 7, 10, 12, 3 ],
                names: [ 'Lufthansa', 'Southwest', 'Iberia', 'Virgin' ],
            }
        }
    },
});