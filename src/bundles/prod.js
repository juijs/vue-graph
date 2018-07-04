/* bundling type : vue-graph + juijs */

import VueGraph from '../main.js'

if (typeof window !== 'undefined' && window.Vue) {
    window.Vue.use(VueGraph)
}