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
            default: 'solid' // or hidden
        },
        axisYStyle: {
            type: String,
            required: false,
            default: 'solid' // or hidden
        },
        axisZStyle: {
            type: String,
            required: false,
            default: 'solid' // or hidden
        },
        angleX: {
            type: Number,
            required: false,
            default: 30
        },
        angleY: {
            type: Number,
            required: false,
            default: 20
        },
        angleZ: {
            type: Number,
            required: false,
            default: 0
        },

        depth: {
            type: Number,
            required: true
        },
        perspective: {
            type: Number,
            required: false,
            default: 0.6
        }
    }
}