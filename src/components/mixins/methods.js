import jui from 'juijs-chart'

export default {
    methods: {
        convertToData: function(values) {
            let util = jui.include('util.base');
            let data = [];

            for(let i = 0; i < values.length; i++) {
                let val = values[i];

                if(util.typeCheck('array', val)) {
                    let row = {};

                    for(let j = 0; j < val.length; j++) {
                        row[''+j] = val[j];
                    }

                    data.push(row);
                } else if(util.typeCheck('number', val)) {
                    data.push({ '0' : val });
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

        // TODO: 인터페이스 함수, 타입별로 따로 구현해야 함
        initGraphAxes: function() {}
    }
}