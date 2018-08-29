import GraphStackbar from '../src/components/stackbar.js'
import Note from '../src/widgets/note.js'

export default {
    template: "#app-template",
    components: { GraphStackbar, Note },

    data () {
        return {
            values: [
                [ 10, 5, 5, 5 ]
            ]
        }
    },

    mounted() {
        console.log(this.$el.textContent) // I'm text inside the component.
    }
}