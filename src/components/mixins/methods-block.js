export default {
    methods: {
        initGraphAxes: function() {
            let xAxis = {
                type : this.axisFullMode ? 'fullblock' : 'block',
                domain : this.labels,
                line : this.axisXStyle,
                hide : this.axisXStyle == "hidden",
                orient : this.axisXPosition
            }

            let yAxis = {
                type : 'range',
                domain : this.getAxisMinAndMax(),
                step : this.axisStep,
                line : this.axisYStyle,
                hide : this.axisYStyle == "hidden",
                orient : this.axisYPosition
            }

            return {
                x : (this.axisReverse) ? yAxis : xAxis,
                y : (this.axisReverse) ? xAxis : yAxis,
                data : this.convertToData(this.values)
            }
        }
    }
}