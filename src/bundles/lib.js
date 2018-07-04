/* bundling type : vue-graph + juijs */

import VueGraph from '../vue-graph'

if (typeof window !== 'undefined' && window.Vue) {
    window.Vue.use(VueGraph)
}