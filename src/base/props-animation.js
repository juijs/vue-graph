export default {
    props: {
        renderInterval: {
            type: Number,
            required: false,
            default: 200
        },
        renderHandler: {
            type: Function,
            required: false,
            default: null
        },
        renderStop: {
            type: Boolean,
            required: false,
            default: false
        }
    }
}