export default {
    props: {
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

        axisXStyle: {
            type: String,
            required: false,
            default: 'solid' // or dotted, gradient, hidden
        },
        axisYStyle: {
            type: String,
            required: false,
            default: 'solid' // or dotted, gradient, hidden
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
        },
        axisReverse: {
            type: Boolean,
            required: false,
            default: false
        },
        axisFullMode: {
            type: Boolean,
            required: false,
            default: false
        },

        textRotateX: {
            type: Number,
            required: false,
            default: 0
        },
        textRotateY: {
            type: Number,
            required: false,
            default: 0
        }
    }
}