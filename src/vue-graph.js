import GraphLine from './components/line.js'
import WidgetNote from './components/widgets/note.js'

export default {
    install: function(Vue, options) {
        // 1. 브러쉬 추가 영역
        Vue.component(GraphLine.name, GraphLine);

        // 2. 위젯 추가 영역
        Vue.component(WidgetNote.name, WidgetNote);
    }
};