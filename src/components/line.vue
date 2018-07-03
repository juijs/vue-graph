<template>
    <div><slot></slot></div>
</template>
<script>
    import props from './mixins/props.js'
    import methods from './mixins/methods.js'
    import created from './mixins/created.js'
    import mounted from './mixins/mounted.js'

    export default {
        name: 'graph-line',
        mixins: [ props, methods, created, mounted ],
        props: {
            shape: {
                type: String,
                required: false,
                default: 'curve'
            }
        },
        watch: {
            width: function(newVal, oldVal) {
                this.chart.setSize(newVal, this.height);
                this.chart.render()
            },
            height: function(newVal, oldVal) {
                this.chart.setSize(this.width, newVal);
                this.chart.render()
            },
            values: function (newVal, oldVal) { // watch it
                this.chart.axis(0).update(this.convertToData(newVal));
                this.chart.render();
            }
        },
        beforeMount: function() {
            this.brushes.push({
                type: 'line',
                symbol: this.shape
            });

            this.axes = 'createBlockAndRangeAxes';
        }
    }
</script>