import GraphBar from './components/bar.js'
import GraphBar3d from './components/bar3d.js'
import GraphStackBar from './components/stackbar.js'
import GraphRangeBar from './components/rangebar.js'
import GraphLine from './components/line.js'
import GraphLine3d from './components/line3d.js'
import GraphLineForDateBlock from './components/line-dateblock.js'
import GraphLineForTimeRange from './components/line-timerange.js'
import GraphScatter from './components/scatter.js'
import GraphBubble from './components/bubble.js'
import GraphArea from './components/area.js'
import GraphAreaForDateBlock from './components/area-dateblock.js'
import GraphAreaForTimeRange from './components/area-timerange.js'
import GraphRangeArea from './components/rangearea.js'
import GraphRangeAreaForDateBlock from './components/rangearea-dateblock.js'
import GraphRangeAreaForTimeRange from './components/rangearea-timerange.js'
import GraphPie from './components/pie.js'
import GraphComparisonBar from './components/comparisonbar.js'
import GraphComparisonArea from './components/comparisonarea.js'
import GraphTreemap from './components/treemap.js'
import GraphEqualizer from './components/equalizer.js'
import GraphActiveBubble from './components/activebubble.js'
import GraphBubbleCloud from './components/bubblecloud.js'
import WidgetNote from './widgets/note.js'
import WidgetTooltip from './widgets/tooltip.js'
import WidgetGuideline from './widgets/guideline.js'
import WidgetLegends from './widgets/legends.js'
import WidgetRotate3d from './widgets/rotate3d.js'

export default {
    install: function(Vue, options) {
        // 1. 브러쉬 추가 영역
        Vue.component(GraphBar.name, GraphBar);
        Vue.component(GraphBar3d.name, GraphBar3d);
        Vue.component(GraphStackBar.name, GraphStackBar);
        Vue.component(GraphRangeBar.name, GraphRangeBar);
        Vue.component(GraphLine.name, GraphLine);
        Vue.component(GraphLine3d.name, GraphLine3d);
        Vue.component(GraphLineForDateBlock.name, GraphLineForDateBlock);
        Vue.component(GraphLineForTimeRange.name, GraphLineForTimeRange);
        Vue.component(GraphScatter.name, GraphScatter);
        Vue.component(GraphBubble.name, GraphBubble);
        Vue.component(GraphArea.name, GraphArea);
        Vue.component(GraphAreaForDateBlock.name, GraphAreaForDateBlock);
        Vue.component(GraphAreaForTimeRange.name, GraphAreaForTimeRange);
        Vue.component(GraphRangeArea.name, GraphRangeArea);
        Vue.component(GraphRangeAreaForDateBlock.name, GraphRangeAreaForDateBlock);
        Vue.component(GraphRangeAreaForTimeRange.name, GraphRangeAreaForTimeRange);
        Vue.component(GraphPie.name, GraphPie);
        Vue.component(GraphComparisonBar.name, GraphComparisonBar);
        Vue.component(GraphComparisonArea.name, GraphComparisonArea);
        Vue.component(GraphTreemap.name, GraphTreemap);
        Vue.component(GraphEqualizer.name, GraphEqualizer);
        Vue.component(GraphActiveBubble.name, GraphActiveBubble);
        Vue.component(GraphBubbleCloud.name, GraphBubbleCloud);

        // 2. 위젯 추가 영역
        Vue.component(WidgetNote.name, WidgetNote);
        Vue.component(WidgetTooltip.name, WidgetTooltip);
        Vue.component(WidgetGuideline.name, WidgetGuideline);
        Vue.component(WidgetLegends.name, WidgetLegends);
        Vue.component(WidgetRotate3d.name, WidgetRotate3d);
    }
};