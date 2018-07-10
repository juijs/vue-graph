export default {
    props: {
        axisMin: {
            type: Number,
            required: true,
            default: 0
        },
        axisMax: {
            type: Number,
            required: true,
            default: 100
        },
        axisInterval: {
            type: Number,
            required: true,
            default: 1000 * 60 * 60 // 1시간
        },
        axisFormat: {
            type: [ String, Function ],
            required: true,
            default: 'HH' // 1시간
        }
    }
}