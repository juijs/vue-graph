import graph_core from './core.js'

export default {
    name: 'tooltip',
    mixins: [ graph_core ],
    props: {
        names: {
            type: Array,
            required: false
        },
        position: {
            type: String,
            required: false,
            default: 'top' // or top, bottom, left, right
        },
        showAnchor: {
            type: Boolean,
            required: false,
            default: true
        }
    },
    watch: {
        names: function(newVal, oldVal) {
            this.names = newVal;
            this.$parent.chart.render(true);
        }
    },
    beforeMount: function(e) {
        const self = this;

        this.$parent.widgets.push({
            type: 'tooltip',
            brush: this.brushes,
            orient: this.position,
            anchor: this.showAnchor,
            format: function(data, key) {
                // TODO: 좋은 방법은 아닌 것 같다. ㅠㅠ
                if(self.$parent.$vnode.tag.indexOf('graph-treemap') != -1) {
                    return {
                        key: data.text,
                        value: this.format(data[key])
                    }
                } else {
                    if(data != null) {
                        return {
                            key: self.names[key],
                            value: this.format(data[key])
                        }
                    } else {
                        return self.names[key];
                    }
                }
            }
        });
    }
}