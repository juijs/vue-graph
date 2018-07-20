export default {
    props: {
        theme: {
            type: String,
            required: false,
            default: "jennifer"
        },
        styles: {
            type: Object,
            required: false
        },
        colors: {
            type: [ Array, Function ],
            required: false
        },
        clip: {
            type: Boolean,
            required: false,
            default: false
        },
        format: {
            type: Function,
            required: false
        },
        width: {
            type: Number,
            required: true
        },
        height: {
            type: Number,
            required: true
        },
        labels: {
            type: Array,
            required: false
        },
        values: {
            type: Array,
            required: false
        },
        paddingTop: {
            type: Number,
            required: false,
            default: 50
        },
        paddingRight: {
            type: Number,
            required: false,
            default: 50
        },
        paddingBottom: {
            type: Number,
            required: false,
            default: 50
        },
        paddingLeft: {
            type: Number,
            required: false,
            default: 50
        }
    }
}