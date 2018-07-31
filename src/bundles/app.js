/* bundling type : vue + vue-graph + juijs */

// import Vue from 'vue'
// import VueGraph from '../vue-graph.js'
//
// Vue.use(VueGraph)
//
// window.vm = new Vue({
//     el: "#app",
//     data: {
//         names: [ "MS", "Apple", "Google" ],
//         values: [
//             [ 10, 5, 5, 5 ],
//             [ 40, 10, 10, 10 ],
//             [ 30, 30, 30, 30 ]
//         ]
//     }
// });


import JUI from 'juijs-chart'
import BarBrush from 'juijs-chart/src/brush/bar.js'
import ColumnBrush from 'juijs-chart/src/brush/column.js'
import TitleWidget from 'juijs-chart/src/widget/title.js'
import LegendWidget from 'juijs-chart/src/widget/legend.js'
import TooltipWidget from 'juijs-chart/src/widget/tooltip.js'

import Vue from 'vue'
import GraphBar from '../components/bar.js'
import WidgetNote from '../components/widgets/note.js'
import WidgetTooltip from '../components/widgets/tooltip.js'
import WidgetLegends from '../components/widgets/legends.js'

JUI.use(BarBrush, ColumnBrush, TitleWidget, LegendWidget, TooltipWidget)

Vue.component(GraphBar.name, GraphBar);
Vue.component(WidgetNote.name, WidgetNote);
Vue.component(WidgetTooltip.name, WidgetTooltip);
Vue.component(WidgetLegends.name, WidgetLegends);

window.vm = new Vue({
    el: "#app",
    data: {
        names: [ "MS", "Apple", "Google" ],
        values: [
            [ 10, 5, 5, 5 ],
            [ 40, 10, 10, 10 ],
            [ 30, 30, 30, 30 ]
        ]
    }
});
