export default {
    methods: {
        initGraphAxes: function() {
            return [{
                x : {
                    type : "range",
                    domain : function(d) {
                        return Math.max(d[0], d[1]);
                    },
                    step : this.axisStep,
                    line : this.axisXStyle,
                    hide : this.axisXStyle == "hidden",
                    reverse : true
                },
                y : {
                    type : "block",
                    domain : this.labels,
                    line : this.axisYStyle,
                    hide : this.axisYStyle == "hidden",
                },
                data : this.convertToData(this.values),
                area : {
                    x : 0, y : 0, width : "50%", height : "100%"
                }
            }, {
                x : {
                    reverse : false
                },
                y : {
                    orient : "right"
                },
                area : {
                    x : "50%", y : 0, width : "50%", height : "100%"
                },
                extend : 0
            }]
        }
    }
}