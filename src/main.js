import GraphBar from './components/bar.js'
import GraphBar3d from './components/bar3d.js'
import GraphStackBar from './components/stackbar.js'
import GraphLine from './components/line.js'
import GraphLine3d from './components/line3d.js'
import GraphLineForDateBlock from './components/line-dateblock.js'
import GraphLineForTimeRange from './components/line-timerange.js'
import GraphScatter from './components/scatter.js'
import GraphBubble from './components/bubble.js'
import GraphArea from './components/area.js'
import WidgetNote from './components/widgets/note.js'
import WidgetTooltip from './components/widgets/tooltip.js'
import WidgetGuideline from './components/widgets/guideline.js'
import WidgetLegends from './components/widgets/legends.js'
import WidgetRotate3d from './components/widgets/rotate3d.js'

export default {
    install: function(Vue, options) {
        // 1. 브러쉬 추가 영역
        Vue.component(GraphBar.name, GraphBar);
        Vue.component(GraphBar3d.name, GraphBar3d);
        Vue.component(GraphStackBar.name, GraphStackBar);
        Vue.component(GraphLine.name, GraphLine);
        Vue.component(GraphLine3d.name, GraphLine3d);
        Vue.component(GraphLineForDateBlock.name, GraphLineForDateBlock);
        Vue.component(GraphLineForTimeRange.name, GraphLineForTimeRange);
        Vue.component(GraphScatter.name, GraphScatter);
        Vue.component(GraphBubble.name, GraphBubble);
        Vue.component(GraphArea.name, GraphArea);

        // 2. 위젯 추가 영역
        Vue.component(WidgetNote.name, WidgetNote);
        Vue.component(WidgetTooltip.name, WidgetTooltip);
        Vue.component(WidgetGuideline.name, WidgetGuideline);
        Vue.component(WidgetLegends.name, WidgetLegends);
        Vue.component(WidgetRotate3d.name, WidgetRotate3d);
    }
};