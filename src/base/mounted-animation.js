import JUI from 'juijs-chart'
import RayCastWidget from 'juijs-chart/src/widget/raycast.js'
import PickerWidget from 'juijs-chart/src/widget/canvas/picker.js'

export default {
    computed: {
        realWidth: function() {
            return this.width == 0 ? "100%" : this.width;
        }
    },
    mounted: function() {
        const self = this;

        if(this.brushes.length == 0) {
            throw new Error('[Vue Graph error]: At least one brush must be added to \'brushes\' variable.')
        }

        JUI.use(RayCastWidget, PickerWidget);

        this.animation = JUI.create('chart.animation', this.$el, {
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
                'raycast.click': function(obj, e) {
                    self.$emit('click', obj, e);
                },
                'raycast.dblclick': function(obj, e) {
                    self.$emit('dblclick', obj, e);
                },
                'raycast.rclick': function(obj, e) {
                    self.$emit('rclick', obj, e);
                },
                'picker.click': function(obj, e) {
                    self.$emit('click', obj, e);
                },
                'picker.dblclick': function(obj, e) {
                    self.$emit('dblclick', obj, e);
                },
            },
            format: this.format,
            theme: this.theme,
            style: this.styles,
            render: false,
            axis: this.initGraphAxes(),
            interval: this.renderInterval
        });

        this.chart = this.animation.builder;
        this.initGraphBrushes();
        this.initGraphWidgets();

        if(this.chart.axis(0).x != null && this.chart.axis(0).x != null)
            this.chart.addWidget({ type: 'raycast' });
        this.chart.addWidget({ type: 'canvas.picker' });
        this.chart.render(true);

        this.animation.run(function(runningTime) {
            if(typeof(self.renderHandler) == "function") {
                self.renderHandler.call(this, runningTime);
            }
        });
    }
}