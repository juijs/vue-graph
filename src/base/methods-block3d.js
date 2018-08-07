export default {
    methods: {
        initGraphAxes: function() {
            let xAxis = {
                type : 'block',
                domain : this.labels,
                line : this.axisXStyle == "solid",
                hide : this.axisXStyle == "hidden"
            }

            let yAxis = {
                type : 'range',
                domain : this.getAxisMinAndMax(),
                step : this.axisStep,
                line : this.axisYStyle == "solid",
                hide : this.axisYStyle == "hidden"
            }

            let zAxis = {
                type : 'block',
                domain : this.names,
                line : this.axisZStyle == "solid",
                hide : this.axisZStyle == "hidden"
            }

            return {
                x : xAxis,
                y : yAxis,
                z : zAxis,
                depth : this.depth,
                perspective : this.perspective,
                degree : {
                    x: this.angleX,
                    y: this.angleY,
                    z: this.angleZ
                },
                data : this.convertToData(this.values)
            }
        }
    }
}