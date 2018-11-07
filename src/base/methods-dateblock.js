export default {
    methods: {
        initGraphAxes: function() {
            let xAxis = {
                type : 'dateblock',
                domain : this.labels,
                interval : this.axisInterval,
                format : this.axisFormat,
                line : this.axisXStyle == "none" ? false : this.axisXStyle,
                hide : this.axisXStyle == "hidden",
                orient : this.axisXPosition,
                textRotate: -this.textRotateX
            }

            let yAxis = {
                type : 'range',
                domain : this.getAxisMinAndMax(),
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