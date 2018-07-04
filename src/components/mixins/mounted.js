import jui from 'juijs-chart'

export default {
    mounted: function() {
        if(typeof this[this.axes] != 'function') {
            throw new Error('[Vue Graph error]: You must enter the initialization function name in the \'axes\' variable.')
        }

        if(this.brushes.length == 0) {
            throw new Error('[Vue Graph error]: At least one brush must be added to \'brushes\' variable.')
        }

        this.chart = jui.create('chart.builder', this.$el, this[this.axes]());
        this.initGraphBrushes();
        this.initGraphWidgets();
        this.chart.render(true);
    }
}