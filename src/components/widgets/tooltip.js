import graph_base from './base.js'

export default {
    name: 'tooltip',
    mixins: [ graph_base ],
    props: {
        names: {
            type: Array,
            required: true
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
    beforeMount: function(e) {
        const self = this;

        this.$parent.widgets.push({
            type: 'tooltip',
            orient: this.position,
            anchor: this.showAnchor,
            format: function(data, key) {
                if(data != null) {
                    return {
                        key: self.names[key],
                        value: data[key]
                    }
                } else {
                    return self.names[key];
                }
            }
        });
    }
}