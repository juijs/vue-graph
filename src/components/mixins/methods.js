import jui from 'juijs-chart'

export default {
    methods: {
        convertToData: function(values) {
            let _ = jui.include('util.base');
            let data = [];

            for(let i = 0; i < values.length; i++) {
                let val = values[i];

                if(_.typeCheck('array', val)) {
                    let row = {};

                    for(let j = 0; j < val.length; j++) {
                        row['col'+j] = val[j];
                    }

                    data.push(row);
                } else if(_.typeCheck('number', val)) {
                    data.push({ 'col0' : val });
                }
            }

            return data;
        },
        getAxisMinAndMax: function() {
            let min = this.axisMin;
            let max = this.axisMax;

            if(min != max) {
                return [ min, max ]
            }

            return function(data) {
                return Math.max.apply(null, Object.values(data));
            }
        },
        initGraphBrushes: function() {
            for(let brush of this.brushes) {
                this.chart.addBrush(brush);
            }
        },
        initGraphWidgets: function() {
            for(let widget of this.widgets) {
                this.chart.addWidget(widget);
            }
        },
        createBlockAndRangeAxes: function() {
            let xAxis = {
                type : 'block',
                domain : this.labels,
                line : this.axisXStyle,
                orient : this.axisXPosition
            }

            let yAxis = {
                type : 'range',
                domain : this.getAxisMinAndMax(),
                step : this.axisStep,
                line : this.axisYStyle,
                orient : this.axisXPosition
            }

            return {
                width : this.width,
                height : this.height,
                padding : {
                    top : this.paddingTop,
                    right : this.paddingRight,
                    bottom : this.paddingBottom,
                    left : this.paddingLeft
                },
                axis : {
                    x : (this.axisReverse) ? yAxis : xAxis,
                    y : (this.axisReverse) ? xAxis : yAxis,
                    data : this.convertToData(this.values)
                },
                render : false
            }
        }
    }
}