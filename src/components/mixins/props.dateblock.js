export default {
    props: {
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