/* bundling type : vue + vue-graph + juijs */

import Vue from 'vue'
import GraphArea from '../src/components/area.js'
import WidgetNote from '../src/widgets/note.js'
import WidgetLegend from '../src/widgets/legends.js'
import WidgetTooltip from '../src/widgets/tooltip.js'

Vue.component(GraphArea.name, GraphArea);
Vue.component(WidgetNote.name, WidgetNote);
Vue.component(WidgetLegend.name, WidgetLegend);
Vue.component(WidgetTooltip.name, WidgetTooltip);

window.vm = new Vue({
    el: "#app",
    data: {
        names: [ "MS", "Apple", "Google" ],
        values: [
            [ 10, 5, 5, 5 ],
            [ 10, 5, 5, 5 ],
            [ 10, 5, 5, 5 ]
        ]
    }
});