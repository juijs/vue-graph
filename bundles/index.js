/* bundling type : vue + vue-graph + juijs */

import Vue from 'vue'
import GraphComparisonArea from '../src/components/comparisonarea.js'
import WidgetLegends from '../src/widgets/legends.js'
import WidgetNote from '../src/widgets/note.js'

Vue.component(GraphComparisonArea.name, GraphComparisonArea);
Vue.component(WidgetNote.name, WidgetNote);
Vue.component(WidgetLegends.name, WidgetLegends);

var vm = new Vue({
    el: "#app",
    data: {
        labels: [
            "2018/01", "", "2018/03", "", "2018/05", "", "2018/07", "", "2018/09", "", "2018/11", ""
        ],
        values: [
            [ 15, 20, 40, 60, 45, 30, 20, 10, 10, 10, 7, 5 ],
            [ 3, 2, 1, 4, 2, 1, 2, 4, 5, 6, 1, 0 ]
        ],
        names: [ "Sales", "Profit" ],
        title: "Comparison Area Chart"
    }
});