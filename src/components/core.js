import { h } from 'vue';
import JUI from 'juijs-chart'
import ClassicTheme from 'juijs-chart/src/theme/classic.js'
import DarkTheme from 'juijs-chart/src/theme/dark.js'
import TitleWidget from 'juijs-chart/src/widget/title.js'
import LegendWidget from 'juijs-chart/src/widget/legend.js'
import TooltipWidget from 'juijs-chart/src/widget/tooltip.js'
import CrossWidget from 'juijs-chart/src/widget/cross.js'

JUI.use(ClassicTheme, DarkTheme, TitleWidget, LegendWidget, TooltipWidget, CrossWidget);

export default {
    beforeMount() {
        this.index = this.brushes.length;
    },
    render() {
        return h('div', this.$slots.default);
    }
}