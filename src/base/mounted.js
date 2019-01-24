import JUI from 'juijs-chart'
import FocusBrush from 'juijs-chart/src/brush/focus.js'

export default {
    computed: {
        realWidth: function() {
            return this.width == 0 ? "100%" : this.width;
        }
    },
    mounted: function() {
        var self = this;

        if(this.brushes.length == 0) {
            throw new Error('[Vue Graph error]: At least one brush must be added to \'brushes\' variable.')
        }

        JUI.use(FocusBrush);

        this.chart = JUI.create('chart.builder', this.$el, {
            width: this.realWidth,
            height: this.height,
            padding: {
                top: this.paddingTop,
                right: this.paddingRight,
                bottom: this.paddingBottom,
                left: this.paddingLeft
            },
            event: {
                'chart.click': function(e) {
                    self.$emit('inside#click', e);
                },
                'chart.dblclick': function(e) {
                    self.$emit('inside#dblclick', e);
                },
                'chart.rclick': function(e) {
                    self.$emit('inside#rclick', e);
                },
                'chart.mouseover': function(e) {
                    self.$emit('inside#mouseover', e);
                },
                'chart.mouseout': function(e) {
                    self.$emit('inside#mouseout', e);
                },
                'chart.mousemove': function(e) {
                    self.$emit('inside#mousemove', e);
                },
                'chart.mousedown': function(e) {
                    self.$emit('inside#mousedown', e);
                },
                'chart.mouseup': function(e) {
                    self.$emit('inside#mouseup', e);
                },
                'bg.click': function(e) {
                    self.$emit('outside#click', e);
                },
                'bg.dblclick': function(e) {
                    self.$emit('outside#dblclick', e);
                },
                'bg.rclick': function(e) {
                    self.$emit('outside#rclick', e);
                },
                'bg.mouseover': function(e) {
                    self.$emit('outside#mouseover', e);
                },
                'bg.mouseout': function(e) {
                    self.$emit('outside#mouseout', e);
                },
                'bg.mousemove': function(e) {
                    self.$emit('outside#mousemove', e);
                },
                'bg.mousedown': function(e) {
                    self.$emit('outside#mousedown', e);
                },
                'bg.mouseup': function(e) {
                    self.$emit('outside#mouseup', e);
                },
                'click': function(obj, e) {
                    self.$emit('click', obj, e);
                },
                'dblclick': function(obj, e) {
                    self.$emit('dblclick', obj, e);
                },
                'rclick': function(obj, e) {
                    self.$emit('rclick', obj, e);
                },
                'mouseover': function(obj, e) {
                    self.$emit('mouseover', obj, e);
                },
                'mouseout': function(obj, e) {
                    self.$emit('mouseout', obj, e);
                },
                'mousemove': function(obj, e) {
                    self.$emit('mousemove', obj, e);
                },
                'mousedown': function(obj, e) {
                    self.$emit('mousedown', obj, e);
                },
                'mouseup': function(obj, e) {
                    self.$emit('mouseup', obj, e);
                },
                'legend.filter': function(target) {
                    self.$emit('legends#filter', target);
                }
            },
            format: this.format,
            theme: this.theme,
            style: this.styles,
            render: false,
            axis: this.initGraphAxes()
        });

        this.initGraphBrushes();
        this.initGraphWidgets();

        this.chart.render(true);
    }
}