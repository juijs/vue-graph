import JUI from "juijs-chart";

export default {
    methods: {
        convertToData: function(values) {
            let util = JUI.include('util.base');
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
                line : this.axisXStyle == "none" ? false : this.axisXStyle,
                hide : this.axisXStyle == "hidden",
                orient : this.axisXPosition,
                key : '0',
                textRotate: -this.textRotateX
            }

            let yAxis = {
                type : 'range',
                domain : [ this.axisMin, this.axisMax ],
                step : this.axisStep,
                line : this.axisYStyle == "none" ? false : this.axisYStyle,
                hide : this.axisYStyle == "hidden",
                orient : this.axisYPosition,
                textRotate: -this.textRotateY
            }

            return {
                x : (this.axisReverse) ? yAxis : xAxis,
                y : (this.axisReverse) ? xAxis : yAxis,
                data : this.convertToData(this.values)
            }
        }
    }
}