import jui from "juijs-chart";

export default {
    methods: {
        convertToData: function(values) {
            let util = jui.include('util.base');
            let data = [];

            for(let i = 0; i < values.length; i++) {
                let val = values[i];

                if(util.typeCheck('array', val)) {
                    data.push({
                        '0': val[0],
                        '1': val[1]
                    });
                }
            }

            return data;
        },
        initGraphAxes: function() {
            let xAxis = {
                type : 'date',
                domain : this.labels,
                interval : this.axisInterval,
                format : this.axisFormat,
                line : this.axisXStyle,
                orient : this.axisXPosition,
                key : '0'
            }

            let yAxis = {
                type : 'range',
                domain : [ this.axisMin, this.axisMax ],
                step : this.axisStep,
                line : this.axisYStyle,
                orient : this.axisXPosition
            }

            return {
                x : (this.axisReverse) ? yAxis : xAxis,
                y : (this.axisReverse) ? xAxis : yAxis,
                data : this.convertToData(this.values)
            }
        }
    }
}