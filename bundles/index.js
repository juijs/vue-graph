/* bundling type : vue + vue-graph + juijs */

import Vue from 'vue'
import GraphBubbleCloud from '../src/components/bubblecloud.js'

Vue.component(GraphBubbleCloud.name, GraphBubbleCloud);

var vm = new Vue({
    el: "#app",
    data: {
        values: [
            [ "app1.jsp", 10, 1000 ],
            [ "app2.jsp", 20, 2000 ],
            [ "app3.jsp", 15, 3000 ],
            [ "app4.jsp", 5, 4000 ],
            [ "app5.jsp", 50, 5000 ]
        ],
        colors: function(data) {
            if(data[2] > 4000) {
                return 2;
            } else if(data[2] > 3000) {
                return 1;
            }

            return 0;
        }
    }
});