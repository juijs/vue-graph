import JUI from 'juijs-chart'

export default {
    methods: {
        convertToData: function(values) {
            let util = JUI.include('util.base');
            let data = [];

            for(let i = 0; i < values.length; i++) {
                let val = values[i];

                if(util.typeCheck('array', val)) {
                    for(let j = 0; j < val.length; j++) {
                        if(i == 0) {
                            data.push({});
                        }

                        let row = data[j];
                        row[''+i] = val[j]
                    }
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
                const max = Math.max.apply(null, Object.values(data));
                return max == 0 ? 1 : max;
            }
        },
        initGraphBrushes: function() {
            for(let brush of this.brushes) {
                this.chart.addBrush(brush);
            }

            // 포커스 브러쉬는 기본 옵션으로 구현하였음
            if(this.focusStart != -1 && this.focusEnd != -1) {
                const brush = {
                    type: 'focus',
                    start: this.focusStart,
                    end: this.focusEnd
                };

                this.brushes.push(brush);
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