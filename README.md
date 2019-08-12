# vue-graph

> A vue component library based on the [JUI charts](http://jui.io/?p=chart) available in vuejs.

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

##### Plug-In

```js
import Vue from 'vue'
import VueGraph from 'vue-graph'

Vue.use(VueGraph)
```

##### Components

```js
import Vue from 'vue'
import GraphLine3D from 'vue-graph/src/components/line3d.js'
import NoteWidget from 'vue-graph/src/widgets/note.js'
import LegendWidget from 'vue-graph/src/widgets/legends.js'

Vue.component(GraphLine3D.name, GraphLine3D);
Vue.component(NoteWidget.name, NoteWidget);
Vue.component(LegendWidget.name, LegendWidget);
```

## Usage

Unlike other chart components, vue-graph have child nodes in the chart called widgets. The widget is used as an additional function of charts such as chart title, legend, tooltip.

The following is a link you can test with [CodePen](https://codepen.io/seogi1004/pen/QBJREN).

<p align="center"> 
<img src="https://github.com/juijs/vue-graph/blob/master/images/treemap.png">
</p>

```html
<div id="app">
    <graph-treemap
            :width="800"
            :height="800"
            :text-align="'right'"
            :text-vertical-align="'bottom'"
            :colors="[ '#EC2500', '#ECE100', '#EC9800', '#9EDE00' ]"
            :values="values">
        <note :text="'Treemap Chart'" :align="'left'"></note>
        <tooltip :position="'top'"></tooltip>
    </graph-treemap>
</div>
```
In the following code, the chart is prefixed with 'graph-' for each type. The widget can be added as a child node of the chart, unlike a chart, was named without a prefix.

The vue-graph can be combined with charts and widgets for a variety of visualizations. This is a very flexible and scalable structure.
```js
var vm = new Vue({
    el: "#app",
    data: {
        values: [
            [ '0', 'Apples', -1 ],
            [ '0.0', 'Anne', 5 ],
            [ '0.1', 'Rick', 3 ],
            [ '0.2', 'Peter', 4 ],
            [ '1', 'Bananas', -1 ],
            [ '1.0', 'Anne', 4 ],
            [ '1.1', 'Rick', 10 ],
            [ '1.2', 'Peter', 1 ],
            [ '2', 'Oranges', -1 ],
            [ '2.0', 'Anne', 1 ],
            [ '2.1', 'Rick', 3 ],
            [ '2.2', 'Peter', 3 ],
            [ '3', 'Susanne', 2 ],
        ]
    }
});
```

## Implemented chart list

There are many charts that have not yet been migrated. We are going to continue.

 - [Bar Chart](https://codepen.io/seogi1004/pen/WKrVLx)
 - [Bar Chart (Reverse)](https://codepen.io/seogi1004/pen/xJZvva)
 - [Comparison Bar Chart](https://codepen.io/seogi1004/pen/djvoov)
 - [Stack Bar Chart](https://codepen.io/seogi1004/pen/djMbGE)
 - [Stack Bar Chart (Reverse)](https://codepen.io/seogi1004/pen/oMxvLR)
 - [Stack Bar Chart (Full Mode)](https://codepen.io/seogi1004/pen/xJVKVm)
 - [Range Bar Chart](https://codepen.io/seogi1004/pen/QBvZjr)
 - [Range Bar Chart (Reverse)](https://codepen.io/seogi1004/pen/RBVerK)
 - [Line Chart](https://codepen.io/seogi1004/pen/jpqNPm)
 - [Line Chart (Reverse)](https://codepen.io/seogi1004/pen/MBygar)
 - [Line Chart (Date+Block)](https://codepen.io/seogi1004/pen/qyZWEL)
 - [Line Chart (Time+Range)](https://codepen.io/seogi1004/pen/WKxqRd)
 - [3D-Bar Chart](https://codepen.io/seogi1004/pen/GBoVPV)
 - [3D-Line Chart](https://codepen.io/seogi1004/pen/PBZMEr)
 - [Scatter Chart](https://codepen.io/seogi1004/pen/YjqKym)
 - [Bubble Chart](https://codepen.io/seogi1004/pen/qyZWBL)
 - [Area Chart](https://codepen.io/seogi1004/pen/qybeMy)
 - [Area Chart (Date+Block)](https://codepen.io/seogi1004/pen/zLwmrV)
 - [Area Chart (Time+Range)](https://codepen.io/seogi1004/pen/WKjawJ)
 - [Range Area Chart](https://codepen.io/seogi1004/pen/bjrmbB)
 - [Range Area Chart (Date+Block)](https://codepen.io/seogi1004/pen/oMeagR)
 - [Range Area Chart (Time+Range)](https://codepen.io/seogi1004/pen/xJLyxQ)
 - [Comparison Area Chart](https://codepen.io/seogi1004/pen/PdGXMZ)
 - [Pie Chart](https://codepen.io/seogi1004/pen/xJgxoN)
 - [Pie Chart (Donut)](https://codepen.io/seogi1004/pen/oMBgNg)
 - [Treemap Chart](https://codepen.io/seogi1004/pen/QBJREN)
 - [Equalizer Chart (+Animation)](https://codepen.io/seogi1004/pen/ReJEyd)
 - [Active Bubble Chart](https://codepen.io/seogi1004/pen/zmbNxo)
 - [Bubble Cloud Chart](https://codepen.io/seogi1004/pen/WaWZOz)
 
## Props

### Common

| Name | Type | Required | Watch | Default | Description |
| ---- | ---- | -------- | ----- | --------| ----------- |
| theme | String | false | false | `classic` | Supports a total of five themes (**classic**, **dark**) |
| styles | Object | false | false | `undefined` | Customize the style of the chart elements you want in key-value format ([Classic](https://github.com/juijs/jui-chart/blob/master/src/theme/classic.js), [Dark](https://github.com/juijs/jui-chart/blob/master/src/theme/dark.js)) |
| colors | Array, Function | false | false | `undefined` | Options to change the list of colors defined by chart theme ([Style Tab](http://chartplay.jui.io/)) |
| clip | Boolean | false | false | false | Option to cut if the drawing element is out of the chart range |
| format | Function | false | true | `undefined` | A callback function that allows you to customize the axis values of the chart |
| width | Number | true | true | `undefined` | The width of the chart |
| height | Number | true | true | `undefined` | The height of the chart |
| paddingTop | Number | false | false | 50 | Top padding of the chart |
| paddingRight | Number | false | false | 50 | Right padding of the chart |
| paddingBottom | Number | false | false | 50 | Bottom padding of the chart |
| paddingLeft | Number | false | false | 50 | Left padding of the chart |
| focusStart | Number | false | false | -1 | The starting index of the focus area (the criterion is slightly different depending on the type of axis) |
| focusEnd | Number | false | false | -1 | The ending index of the focus area (the criterion is slightly different depending on the type of axis) |
| labels | Array | false | true | `undefined` | Label of chart data |
| values | Array | false | true | `undefined` | It is a chart data value, and the format may be different for each chart type |

### Common (Animation)

| Name | Type | Required | Watch | Default | Description |
| ---- | ---- | -------- | ----- | --------| ----------- |
| renderInterval | Number | false | false | 200 | Rendering interval (ms) |
| renderHandler | Function | false | false | `null` | Callback function that can post-process when rendering a chart |
| renderStop | Boolean | false | true | false | Pause or resume chart rendering |

### Common (X-Y Axis)

| Name | Type | Required | Watch | Default | Description |
| ---- | ---- | -------- | ----- | --------| ----------- |
| axisMin | Number | false | false | 0 | Miniimum value for the chart axis |
| axisMax | Number | false | false | 0 | Maximum value for the chart axis |
| axisStep | Number | false | false | 10 | Display interval of chart axis value |
| axisXStyle | String | false | false | `solid` | Line style for chart x-axis area (**solid**, **dotted**, **gradient**, **none**, **hidden**) |
| axisYStyle | String | false | false | `solid` | Line style for chart y-axis area (**solid**, **dotted**, **gradient**, **none**, **hidden**) 
| axisXPosition | String | false | false | `bottom` | Chart x-axis position (**bottom**, **top**) |
| axisYPosition | String | false | false | `left` | Chart y-axis position (**left**, **right**) |
| axisReverse | Boolean | false | false | false | Replace the x and y axis positions |
| axisFullMode | Boolean | false | false | false | Draw a chart drawing element full of the axis label area. |
| axisInterval | Number | false | false | 1000 * 60 * 60 | It is the label value display interval of the date type (Unit: ms) |
| axisFormat | String, Function | false | false | `HH` | It is the label value display format of the date type |
| textRotateX | Number | false | false | 0 | The tilt angle of the x-axis text |
| textRotateY | Number | false | false | 0 | The tilt angle of the y-axis text |

### Props by charts

#### [graph-bar](https://codepen.io/seogi1004/pen/WKrVLx), [graph-comparison-bar](https://codepen.io/seogi1004/pen/djvoov)
 
| Name | Type | Required | Watch | Default | Description |
| ---------------- | -------------- | -------------- | ----------- | ------------- | --------------- |
| fixedSize | Number | false | false | 0 | Fixed width of bar (or height) |
| minValue | Number | false | false | 0 | When the value is very small, the minimum size of the bar  |
| barMargin | Number | false | false | 2 | Margins between bars and bars |
| barPadding | Number | false | false | 1 | Inside padding inside the bar |
| activeIndex | Number | false | true | `undefined` | The index of the bar to activate |
| activeEvent | String | false | false | `undefined` | Event type to activate the bar |
| display | String | false | false | `undefined` | Options that display the value of the bar (**max**, **min**, **all**) |

#### [graph-bar3d](https://codepen.io/seogi1004/pen/GBoVPV)
 
| Name | Type | Required | Watch | Default | Description |
| ---------------- | -------------- | -------------- | ----------- | ------------- | --------------- |
| names | Array | true | false | `undefined` | Name of the z-axis data key |
| barPadding | Number | false | false | 20 | Inside padding inside the bar  |

#### [graph-stackbar](https://codepen.io/seogi1004/pen/djMbGE)
 
| Name | Type | Required | Watch | Default | Description |
| ---------------- | -------------- | -------------- | ----------- | ------------- | --------------- |
| fixedSize | Number | false | false | 0 | Fixed width of bar (or height) |
| barMargin | Number | false | false | 2 | Margins between bars and bars |
| barPadding | Number | false | false | 1 | Inside padding inside the bar |
| activeIndex | Number | false | true | `undefined` | The index of the bar to activate |
| activeEvent | String | false | false | `undefined` | Event type to activate the bar |
| display | String | false | false | `undefined` | Options that display the value of the bar (**max**, **min**, **all**) |
| connectedLine | Boolean | false | false | false | Options that show the line connecting the bars and bars |
| fullMode | Boolean | false | false | false | Option to change to full stack bar |
| showText | Boolean | false | false | false | Options to show the percentage value in the bar |

#### [graph-rangebar](https://codepen.io/seogi1004/pen/QBvZjr)
 
| Name | Type | Required | Watch | Default | Description |
| ---------------- | -------------- | -------------- | ----------- | ------------- | --------------- |
| barMargin | Number | false | false | 2 | Margins between bars and bars |
| barPadding | Number | false | false | 1 | Inside padding inside the bar |

#### [graph-line](https://codepen.io/seogi1004/pen/jpqNPm), [graph-line-dateblock](https://codepen.io/seogi1004/pen/qyZWEL), [graph-line-timerange](https://codepen.io/seogi1004/pen/WKxqRd)
 
| Name | Type | Required | Watch | Default | Description |
| ---------------- | -------------- | -------------- | ----------- | ------------- | --------------- |
| shape | String | false | false | `normal` | It is the shape of the line (**normal**, **curve**, **step**) |
| activeIndex | Number | false | false | `undefined` | The index of the line to activate |
| activeEvent | String | false | false | `undefined` | Event type to activate the line |
| display | String | false | false | `undefined` | Options that display the value of the line (**max**, **min**, **all**) |
| opacity | Number | false | false | `undefined` | The transparency of the line (Value between 0 and 1) |

#### [graph-line3d](https://codepen.io/seogi1004/pen/PBZMEr)
 
| Name | Type | Required | Watch | Default | Description |
| ---------------- | -------------- | -------------- | ----------- | ------------- | --------------- |
| names | Array | true | false | `undefined` | Name of the z-axis data key |
| linePadding | Number | false | false | 20 | Inside padding inside the line  |

#### [graph-bubble](https://codepen.io/seogi1004/pen/qyZWBL)
 
| Name | Type | Required | Watch | Default | Description |
| ---------------- | -------------- | -------------- | ----------- | ------------- | --------------- |
| minSize | Number | false | false | 5 | Minimum size of bubble |
| maxSize | Number | false | false | 30 | Maximum size of bubble |
| showText | Boolean | false | false | false | Options to show the percentage value in the bubble |
| activeEvent | String | false | false | `undefined` | Event type to activate the bubble |

#### [graph-area](https://codepen.io/seogi1004/pen/qybeMy), [graph-area-dateblock](https://codepen.io/seogi1004/pen/zLwmrV), [graph-area-timerange](https://codepen.io/seogi1004/pen/WKjawJ), [graph-comparison-area](https://codepen.io/seogi1004/pen/PdGXMZ)
 
| Name | Type | Required | Watch | Default | Description |
| ---------------- | -------------- | -------------- | ----------- | ------------- | --------------- |
| shape | String | false | false | `normal` | It is the shape of the area (**normal**, **curve**, **step**) |
| opacity | Number | false | false | `undefined` | The transparency of the area (Value between 0 and 1) |
| borderLine | Boolean | false | false | true | Show lines on the border of the area |

#### [graph-scatter](https://codepen.io/seogi1004/pen/YjqKym)
 
| Name | Type | Required | Watch | Default | Description |
| ---------------- | -------------- | -------------- | ----------- | ------------- | --------------- |
| shape | String | false | false | `circle` | It is the shape of the scatter (**circle**, **triangle**, **rectangle**, **cross**) |
| activeEvent | String | false | false | `undefined` | Event type to activate the scatter |
| display | String | false | false | `undefined` | Options that display the value of the scatter (**max**, **min**, **all**) |
| opacity | Number | false | false | `undefined` | The transparency of the scatter (Value between 0 and 1) |
| size | Number | false | false | 7 | Size of scatter (Value between 0 and 1) |
| hideZero | Boolean | false | false | false | Option to hide scatter when the value is 0 |

#### [graph-pie](https://codepen.io/seogi1004/pen/xJgxoN)
 
| Name | Type | Required | Watch | Default | Description |
| ---------------- | -------------- | -------------- | ----------- | ------------- | --------------- |
| shape | String | false | false | `pie` | It is the shape of the pie (**pie**, **donut**) |
| activeIndex | Number, Array | false | true | `undefined` | The index of the pie to activate |
| activeEvent | String | false | false | `undefined` | Event type to activate the pie |
| showTextType | String | false | false | `undefined` | Options that display the value of the pie (**inside**, **outside**) |
| dataFormat | Function | false | true | `undefined` | Pie data format function |
| showTotalValue | Boolean | false | false | `undefined` | Options that show total value in the center when the shape is donut |
| strokeWidth | Number | false | false | 50 | When the shape is donut, set the stroke width |

#### [graph-treemap](https://codepen.io/seogi1004/pen/QBJREN)
 
| Name | Type | Required | Watch | Default | Description |
| ---------------- | -------------- | -------------- | ----------- | ------------- | --------------- |
| showText | Boolean | false | false | false | Options to show the title in the treemap node |
| textAlign | String | false | false | `center` | Horizontal alignment (**center**, **left**, **right**) |
| textVerticalAlign | String | false | false | `top` | Vertical alignment (**top**, **bottom**, **middle**) |
| titleDepth | Number | false | false | 1 | Sets the depth of the tree node to show the title |
| nodeColor | Function | false | false | `undefined` | Set the color of the node to the callback function |

#### [graph-equalizer](https://codepen.io/seogi1004/pen/ReJEyd)
 
| Name | Type | Required | Watch | Default | Description |
| ---------------- | -------------- | -------------- | ----------- | ------------- | --------------- |
| minValue | Number | false | false | 0 | When the value is very small, the minimum size of the bar  |
| fixedSize | Number | false | false | 0 | Fixed width of bar (or height) |
| barMargin | Number | false | false | 2 | Margins between bars and bars |
| barPadding | Number | false | false | 1 | Inside padding inside the bar |
| maxDivisions | Number | false | false | 5 | Maximum number of division bars |

#### [graph-activebubble](https://codepen.io/seogi1004/pen/zmbNxo)
 
| Name | Type | Required | Watch | Default | Description |
| ---------------- | -------------- | -------------- | ----------- | ------------- | --------------- |
| gravity | Number | false | false | 0.2 | Sets the force to pull the bubble  |
| radius | Number | false | false | 20 | Radius value of the bubble |
| opacity | Number | false | false | 1 | Transparency value of the bubble |


### Props by widgets

#### note
A widget that can display text in a chart.

| Name | Type | Required | Watch | Default | Description |
| ---------------- | -------------- | -------------- | ----------- | ------------- | --------------- |
| text | String | true | true |  | Text to display |
| align | String | false | true | `center` | Horizontal alignment (**center**, **left**, **right**) |
| verticalAlign | String | true | false | `top` | Vertical alignment (**top**, **bottom**, **middle**) |
| dx | Number | false | false | 0 | x-axis position adjustment value |
| dy | Number | false | false | 0 | y-axis position adjustment value |
| size | Number | false | false | `undefined` | Font size |
| color | String | false | false | `undefined` | Font color |

#### tooltip
Widget showing chart element values.

| Name | Type | Required | Watch | Default | Description |
| ---------------- | -------------- | -------------- | ----------- | ------------- | --------------- |
| names | String | true | true |  | Name to map to value type |
| position | String | false | false | `top` | Vertical alignment (**top**, **bottom**, **left**, **right**) |
| showAnchor | Boolean | false | false | true | Options to display anchor |

#### legends
Widget that represents the chart legend.

| Name | Type | Required | Watch | Default | Description |
| ---------------- | -------------- | -------------- | ----------- | ------------- | --------------- |
| names | String | true | true |  | Name to map to value type |
| align | String | false | false | `center` | Horizontal alignment (**center**, **left**, **right**) |
| position | String | false | false | `bottom` | Vertical alignment (**top**, **bottom**, **left**, **right**) |
| dx | Number | false | false | 0 | x-axis position adjustment value |
| dy | Number | false | false | 0 | y-axis position adjustment value |
| filter | Boolean | false | false | false | Options to filter elements of a specific name |
| colors | Array | false | false | `undefined` | Filtering element color by name |

#### guideline
Widget to help you see x-y axis values easily.

| Name | Type | Required | Watch | Default | Description |
| ---------------- | -------------- | -------------- | ----------- | ------------- | --------------- |
| tooltipX | Boolean | false | false | false | Guidelines for displaying x-axis values |
| tooltipY | Boolean | false | false | true | Guidelines for displaying y-axis values |


## Events

There are three types of events for the drawing object, outside and inside the axis area.
 - [Bar Chart (+Event)](https://codepen.io/seogi1004/pen/XBdErQ)

```html
<div id="app">
    <graph-bar
            :width="600"
            :height="400"
            :axis-min="0"
            :axis-max="50"
            :labels="[ '1Q', '2Q', '3Q', '4Q' ]"
            :values="values"
            :active-event="'click'"
            @click="onClickBar"
            @outside#click="onClickOutside"
            @inside#click="onClickInside">
        <note :text="'Bar Chart (+Event)'"></note>
    </graph-bar>
</div>
<script>
var vm = new Vue({
    el: "#app",
    data: {
        values: [
            [ 10, 5, 5, 5 ],
            [ 40, 10, 10, 10 ],
            [ 30, 30, 30, 30 ]
        ]
    },
    methods: {
        onClickBar: function() {
            console.log(arguments);
            alert("onClickBar");
        },
        onClickOutside: function() {
            console.log(arguments);
            alert("onClickOutside");
        },
        onClickInside: function() {
            console.log(arguments);
            alert("onClickInside");
        }
    }
});
</script>
```

Common events are shown in the table below.

| Outside axis | Inside axis | Drawing object | Description |
| ---------------- | -------------- | -------------- | ----------- |
| outside#click | inside#click | click | |
| outside#dblclick | inside#dblclick | dblclick | |
| outside#rclick | inside#rclick | rclick | `contextmenu` |
| outside#mouseover | inside#mouseover | mouseover | |
| outside#mouseout | inside#mouseout | mouseout | |
| outside#mousemove | inside#mousemove | mousemove | |
| outside#mousedown | inside#mousedown | mousedown | |
| outside#mouseup | inside#mouseup | mouseup | |
