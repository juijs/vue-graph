export default {
    name: 'note',
    template: '<span style="display: none;"></span>',
    props: {
        text: {
            type: String,
            required: true,
            default: ''
        }
    },
    watch: {
        text: function(newVal, oldVal) {
            this.$parent.chart.updateWidget(this.index, {
                text: newVal
            });

            this.$parent.chart.render(true)
        }
    },
    beforeMount: function(e) {
        if(this.$root == this.$parent) return;

        this.index = this.$parent.widgets.length;
        this.$parent.widgets.push({
            type: 'title',
            text: this.text
        });
    }
}