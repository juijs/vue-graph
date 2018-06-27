import jui from 'juijs'

export default {
    name: "Test",
    props: {
        data: {
            type: Array,
            required: true
        },
        height: Number,
        width: Number
    },
    watch: {
        data: function(value) {

        }
    },
    render: function(createElement) {

    }
}