<template>
    <div><slot></slot></div>
</template>
<script>
    import props from './mixins/props.js'
    import watch from './mixins/watch.js'
    import methods from './mixins/methods.js'
    import created from './mixins/created.js'
    import mounted from './mixins/mounted.js'

    export default {
        name: 'graph-line',
        mixins: [ props, watch, methods, created, mounted ],
        props: {
            shape: {
                type: String,
                required: false,
                default: 'curve'
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