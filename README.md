# vue-graph

> vue-graph is a reusable vue component for [jui](http://jui.io/?p=gallery) charts

[![forthebadge](http://forthebadge.com/images/badges/built-with-love.svg)](http://forthebadge.com)
[![forthebadge](http://forthebadge.com/images/badges/made-with-vue.svg)](http://forthebadge.com)
[![forthebadge](http://forthebadge.com/images/badges/uses-js.svg)](http://forthebadge.com)

## Installation

### NPM
```bash
npm install --save vue-graph
```

### Browser
Just download `dist/vue-graph.js` and include it in your HTML file:

```html
<script src="https://cdnjs.cloudflare.com/ajax/libs/vue/2.5.16/vue.js"></script>
<script src="https://cdn.rawgit.com/juijs/vue-graph/2216ae2f/dist/vue-graph.js"></script>
```

### ES Modules

```js
import Vue from 'vue'
import VueGraph from '/src/vue-graph.js'

Vue.use(VueGraph)
```

## Usage

Unlike other chart components, vue-graphs have child nodes in the chart called widgets. The widget is used as an additional function of charts such as chart title, legend, tooltip.

The following is a link you can test with [CodePen](https://codepen.io/collection/nWpqoB/).

![](https://cdn.rawgit.com/juijs/vue-graph/9517572b/examples/images/1.png)

```html
<div id="app">
    <graph-bar
            :width="600"
            :height="400"
            :axis-min="0"
            :axis-max="50"
            :labels="[ '1Q', '2Q', '3Q', '4Q' ]"
            :values="values">
        <note :text="'Bar Chart'"></note>
        <tooltip :names="names" :position="'left'"></tooltip>
        <legends :names="names" :filter="true"></legends>
    </graph-bar>
</div>
```
In the following code, the chart is prefixed with 'graph-' for each type. The widget can be added as a child node of the chart, unlike a chart, was named without a prefix.

The vue-graph can be combined with charts and widgets for a variety of visualizations. This is a very flexible and scalable structure.
```js
var vm = new Vue({
    el: "#app",
    data: {
        names: [ "MS", "Apple", "Google" ],
        values: [
            [ 10, 5, 5, 5 ],
            [ 40, 10, 10, 10 ],
            [ 30, 30, 30, 30 ]
        ]
    }
});
```

### Props
