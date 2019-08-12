/* bundling type : vue + vue-graph + juijs */

import Vue from 'vue'
import GraphBar from '../src/components/bar.js'
import WidgetNote from '../src/widgets/note.js'
import WidgetLegend from '../src/widgets/legends.js'
import WidgetTooltip from '../src/widgets/tooltip.js'

Vue.component(GraphBar.name, GraphBar);
Vue.component(WidgetNote.name, WidgetNote);
Vue.component(WidgetLegend.name, WidgetLegend);
Vue.component(WidgetTooltip.name, WidgetTooltip);

window.vm = new Vue({
    el: "#app",
    data: {
        names: [ "MS", "Apple", "Google" ],
        values: [
            [ 0, 0, 0, 0 ]
        ],
        focus: 1
    }
});