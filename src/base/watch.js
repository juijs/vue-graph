export default {
    watch: {
        width: {
            handler(newVal, oldVal) {
                this.chart.setSize(newVal, this.height);
                this.chart.render()
            },
            deep: false
        },
        height: {
            handler(newVal, oldVal) {
                this.chart.setSize(this.width, newVal);
                this.chart.render()
            },
            deep: false
        },
        labels: {
            handler(newVal, oldVal) { // watch it
                this.chart.axis(0).set(this.axisReverse ? 'y' : 'x', { domain: newVal });
                this.chart.render();
            }, 
            deep: true
        },
        values: {
            handler(newVal, oldVal) { // watch it
                this.chart.axis(0).update(this.convertToData(newVal));
                this.chart.render();
            },
            deep: true
        },
        axisMin: {
            handler(newVal, oldVal) {
                this.chart.axis(0).set(this.axisReverse ? 'x' : 'y', { domain: [ newVal, this.axisMax ] });
                this.chart.render();
            },
            deep: false
        },
        axisMax: {
            handler(newVal, oldVal) {
                this.chart.axis(0).set(this.axisReverse ? 'x' : 'y', { domain: [ this.axisMin, newVal ] });
                this.chart.render();
            },
            deep: false
        },
        focusStart: {
            handler(newVal, oldVal) {
                if(newVal == oldVal) return;
                this.brushes.forEach((brush, index) => {
                    if(brush.type == 'focus') {
                        this.chart.updateBrush(index, { start: newVal });
                        this.chart.render();
                    }
                });
            },
            deep: false
        },
        focusEnd: {
            handler(newVal, oldVal) {
                if(newVal == oldVal) return;
                this.brushes.forEach((brush, index) => {
                    if(brush.type == 'focus') {
                        this.chart.updateBrush(index, { end: newVal });
                        this.chart.render();
                    }
                });
            },
            deep: false
        },
    }
}