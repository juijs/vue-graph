import JUI from 'juijs-chart'
import TitleWidget from 'juijs-chart/src/widget/title.js'
import LegendWidget from 'juijs-chart/src/widget/legend.js'
import TooltipWidget from 'juijs-chart/src/widget/tooltip.js'
import CrossWidget from 'juijs-chart/src/widget/cross.js'

JUI.use(TitleWidget, LegendWidget, TooltipWidget, CrossWidget);

export default {
    template: '<div><slot></slot></div>',
    beforeMount: function(e) {
        this.index = this.brushes.length;
    }
}