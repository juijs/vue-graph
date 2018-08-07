/* bundling type : vue-graph + juijs */

import VueGraph from '../src/main.js'

if (typeof window !== 'undefined' && window.Vue) {
    window.Vue.use(VueGraph)
}