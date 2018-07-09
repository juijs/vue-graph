export default {
    props: {
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
            required: true
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
        },
        axisMin: {
            type: Number,
            required: false,
            default: 0
        },
        axisMax: {
            type: Number,
            required: false,
            default: 0
        },
        axisStep: {
            type: Number,
            required: false,
            default: 10
        },
        axisReverse: {
            type: Boolean,
            required: false,
            default: false
        },
        axisXStyle: {
            type: String,
            required: false,
            default: 'solid' // or dotted, gradient
        },
        axisYStyle: {
            type: String,
            required: false,
            default: 'solid' // or dotted, gradient
        },
        axisXPosition: {
            type: String,
            required: false,
            default: 'bottom'
        },
        axisYPosition: {
            type: String,
            required: false,
            default: 'left'
        }
    }
}