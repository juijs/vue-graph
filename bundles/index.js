/* bundling type : vue + vue-graph + juijs */

import { createApp } from 'vue'
import GraphArea from '../src/components/area.js'
import WidgetNote from '../src/widgets/note.js'
import WidgetLegend from '../src/widgets/legends.js'
import WidgetTooltip from '../src/widgets/tooltip.js'

const app = createApp({
    components: {
        [GraphArea.name]: GraphArea,
        [WidgetNote.name]: WidgetNote,
        [WidgetLegend.name]: WidgetLegend,
        [WidgetTooltip.name]: WidgetTooltip
    },
    data() {
        return {
            names: [ "MS", "Apple", "Google" ],
            values: [
                [ 10, 5, 5, 5 ],
                [ 10, 5, 5, 5 ],
                [ 10, 5, 5, 5 ]
            ]
        }
    }
});

app.config.compilerOptions.whitespace = 'preserve';
app.mount("#app");