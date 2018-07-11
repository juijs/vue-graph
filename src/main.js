import GraphLine from './components/line.js'
import GraphLineForDateBlock from './components/line-dateblock.js'
import GraphLineForTimeRange from './components/line-timerange.js'
import GraphBar from './components/bar.js'
import GraphScatter from './components/scatter.js'
import WidgetNotes from './components/widgets/notes.js'
import WidgetLegends from './components/widgets/legends.js'

export default {
    install: function(Vue, options) {
        // 1. 브러쉬 추가 영역
        Vue.component(GraphLine.name, GraphLine);
        Vue.component(GraphLineForDateBlock.name, GraphLineForDateBlock);
        Vue.component(GraphLineForTimeRange.name, GraphLineForTimeRange);
        Vue.component(GraphBar.name, GraphBar);
        Vue.component(GraphScatter.name, GraphScatter);

        // 2. 위젯 추가 영역
        Vue.component(WidgetNotes.name, WidgetNotes);
        Vue.component(WidgetLegends.name, WidgetLegends);
    }
};