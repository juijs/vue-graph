export default {
    props: {
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
        'padding-top': {
            type: Number,
            required: false,
            default: 50
        },
        'padding-right': {
            type: Number,
            required: false,
            default: 50
        },
        'padding-bottom': {
            type: Number,
            required: false,
            default: 50
        },
        'padding-left': {
            type: Number,
            required: false,
            default: 50
        },
        'axis-min': {
            type: Number,
            required: false,
            default: 0
        },
        'axis-max': {
            type: Number,
            required: false,
            default: 0
        },
        'axis-step': {
            type: Number,
            required: false,
            default: 10
        },
        'axis-reverse': {
            type: Boolean,
            required: false,
            default: false
        },
        'axis-x-style': {
            type: String,
            required: false,
            default: 'solid' // or dotted, gradient
        },
        'axis-y-style': {
            type: String,
            required: false,
            default: 'solid' // or dotted, gradient
        },
        'axis-x-position': {
            type: String,
            required: false,
            default: 'bottom'
        },
        'axis-y-position': {
            type: String,
            required: false,
            default: 'left'
        }
    }
}