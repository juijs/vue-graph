/* bundling type : vue-graph + juijs */

import VueGraph from '../vue-graph.js'

if (typeof window !== 'undefined' && window.Vue) {
    window.Vue.use(VueGraph)
}