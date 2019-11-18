/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, { enumerable: true, get: getter });
/******/ 		}
/******/ 	};
/******/
/******/ 	// define __esModule on exports
/******/ 	__webpack_require__.r = function(exports) {
/******/ 		if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 			Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 		}
/******/ 		Object.defineProperty(exports, '__esModule', { value: true });
/******/ 	};
/******/
/******/ 	// create a fake namespace object
/******/ 	// mode & 1: value is a module id, require it
/******/ 	// mode & 2: merge all properties of value into the ns
/******/ 	// mode & 4: return value when already ns object
/******/ 	// mode & 8|1: behave like require
/******/ 	__webpack_require__.t = function(value, mode) {
/******/ 		if(mode & 1) value = __webpack_require__(value);
/******/ 		if(mode & 8) return value;
/******/ 		if((mode & 4) && typeof value === 'object' && value && value.__esModule) return value;
/******/ 		var ns = Object.create(null);
/******/ 		__webpack_require__.r(ns);
/******/ 		Object.defineProperty(ns, 'default', { enumerable: true, value: value });
/******/ 		if(mode & 2 && typeof value != 'string') for(var key in value) __webpack_require__.d(ns, key, function(key) { return value[key]; }.bind(null, key));
/******/ 		return ns;
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = 34);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _juijsGraph = __webpack_require__(36);

var _juijsGraph2 = _interopRequireDefault(_juijsGraph);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

exports.default = _juijsGraph2.default;

/***/ }),
/* 1 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});

var _juijsChart = __webpack_require__(0);

var _juijsChart2 = _interopRequireDefault(_juijsChart);

var _classic = __webpack_require__(37);

var _classic2 = _interopRequireDefault(_classic);

var _dark = __webpack_require__(38);

var _dark2 = _interopRequireDefault(_dark);

var _title = __webpack_require__(39);

var _title2 = _interopRequireDefault(_title);

var _legend = __webpack_require__(40);

var _legend2 = _interopRequireDefault(_legend);

var _tooltip = __webpack_require__(41);

var _tooltip2 = _interopRequireDefault(_tooltip);

var _cross = __webpack_require__(42);

var _cross2 = _interopRequireDefault(_cross);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

_juijsChart2.default.use(_classic2.default, _dark2.default, _title2.default, _legend2.default, _tooltip2.default, _cross2.default);

exports.default = {
    beforeMount: function beforeMount(e) {
        this.index = this.brushes.length;
    },
    render: function render(createElement) {
        return createElement('div', this.$slots.default);
    }
};

/***/ }),
/* 2 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.default = {
    watch: {
        width: function width(newVal, oldVal) {
            this.chart.setSize(newVal, this.height);
            this.chart.render();
        },
        height: function height(newVal, oldVal) {
            this.chart.setSize(this.width, newVal);
            this.chart.render();
        },
        labels: function labels(newVal, oldVal) {
            // watch it
            this.chart.axis(0).set(this.axisReverse ? 'y' : 'x', { domain: newVal });
            this.chart.render();
        },
        values: function values(newVal, oldVal) {
            // watch it
            this.chart.axis(0).update(this.convertToData(newVal));
            this.chart.render();
        },
        axisMin: function axisMin(newVal, oldVal) {
            this.chart.axis(0).set(this.axisReverse ? 'x' : 'y', { domain: [newVal, this.axisMax] });
            this.chart.render();
        },
        axisMax: function axisMax(newVal, oldVal) {
            this.chart.axis(0).set(this.axisReverse ? 'x' : 'y', { domain: [this.axisMin, newVal] });
            this.chart.render();
        },
        focusStart: function focusStart(newVal, oldVal) {
            var _this = this;

            if (newVal == oldVal) return;
            this.brushes.forEach(function (brush, index) {
                if (brush.type == 'focus') {
                    _this.chart.updateBrush(index, { start: newVal });
                    _this.chart.render();
                }
            });
        },
        focusEnd: function focusEnd(newVal, oldVal) {
            var _this2 = this;

            if (newVal == oldVal) return;
            this.brushes.forEach(function (brush, index) {
                if (brush.type == 'focus') {
                    _this2.chart.updateBrush(index, { end: newVal });
                    _this2.chart.render();
                }
            });
        }
    }
};

/***/ }),
/* 3 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.default = {
    created: function created() {
        this.brushes = [];
        this.widgets = [];
    }
};

/***/ }),
/* 4 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.default = {
    props: {
        theme: {
            type: String,
            required: false,
            default: "classic"
        },
        styles: {
            type: Object,
            required: false
        },
        colors: {
            type: [Array, Function],
            required: false
        },
        clip: {
            type: Boolean,
            required: false,
            default: false
        },
        format: {
            type: Function,
            required: false
        },
        width: {
            type: Number,
            required: false,
            default: 0
        },
        height: {
            type: Number,
            required: true
        },
        labels: {
            type: Array,
            required: false
        },
        values: {
            type: Array,
            required: false
        },
        paddingTop: {
            type: Number,
            required: false,
            default: 50
        },
        paddingRight: {
            type: Number,
            required: false,
            default: 50
        },
        paddingBottom: {
            type: Number,
            required: false,
            default: 50
        },
        paddingLeft: {
            type: Number,
            required: false,
            default: 50
        },
        focusStart: {
            type: Number,
            required: false,
            default: -1
        },
        focusEnd: {
            type: Number,
            required: false,
            default: -1
        }
    }
};

/***/ }),
/* 5 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});

var _juijsChart = __webpack_require__(0);

var _juijsChart2 = _interopRequireDefault(_juijsChart);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

exports.default = {
    methods: {
        convertToData: function convertToData(values) {
            var util = _juijsChart2.default.include('util.base');
            var data = [];

            for (var i = 0; i < values.length; i++) {
                var val = values[i];

                if (util.typeCheck('array', val)) {
                    for (var j = 0; j < val.length; j++) {
                        if (i == 0) {
                            data.push({});
                        }

                        var row = data[j];
                        row['' + i] = val[j];
                    }
                } else if (util.typeCheck('number', val)) {
                    data.push({ '0': val });
                }
            }

            return data;
        },
        getAxisMinAndMax: function getAxisMinAndMax() {
            var min = this.axisMin;
            var max = this.axisMax;

            if (min != max) {
                return [min, max];
            }

            return function (data) {
                var max = Math.max.apply(null, Object.values(data));
                return max == 0 ? 1 : max;
            };
        },
        initGraphBrushes: function initGraphBrushes() {
            var _iteratorNormalCompletion = true;
            var _didIteratorError = false;
            var _iteratorError = undefined;

            try {
                for (var _iterator = this.brushes[Symbol.iterator](), _step; !(_iteratorNormalCompletion = (_step = _iterator.next()).done); _iteratorNormalCompletion = true) {
                    var brush = _step.value;

                    this.chart.addBrush(brush);
                }

                // 포커스 브러쉬는 기본 옵션으로 구현하였음
            } catch (err) {
                _didIteratorError = true;
                _iteratorError = err;
            } finally {
                try {
                    if (!_iteratorNormalCompletion && _iterator.return) {
                        _iterator.return();
                    }
                } finally {
                    if (_didIteratorError) {
                        throw _iteratorError;
                    }
                }
            }

            if (this.focusStart != -1 && this.focusEnd != -1) {
                var _brush = {
                    type: 'focus',
                    start: this.focusStart,
                    end: this.focusEnd
                };

                this.brushes.push(_brush);
                this.chart.addBrush(_brush);
            }
        },
        initGraphWidgets: function initGraphWidgets() {
            var _iteratorNormalCompletion2 = true;
            var _didIteratorError2 = false;
            var _iteratorError2 = undefined;

            try {
                for (var _iterator2 = this.widgets[Symbol.iterator](), _step2; !(_iteratorNormalCompletion2 = (_step2 = _iterator2.next()).done); _iteratorNormalCompletion2 = true) {
                    var widget = _step2.value;

                    this.chart.addWidget(widget);
                }
            } catch (err) {
                _didIteratorError2 = true;
                _iteratorError2 = err;
            } finally {
                try {
                    if (!_iteratorNormalCompletion2 && _iterator2.return) {
                        _iterator2.return();
                    }
                } finally {
                    if (_didIteratorError2) {
                        throw _iteratorError2;
                    }
                }
            }
        },

        // TODO: 인터페이스 함수, 타입별로 따로 구현해야 함
        initGraphAxes: function initGraphAxes() {}
    }
};

/***/ }),
/* 6 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});

var _juijsChart = __webpack_require__(0);

var _juijsChart2 = _interopRequireDefault(_juijsChart);

var _focus = __webpack_require__(43);

var _focus2 = _interopRequireDefault(_focus);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

exports.default = {
    computed: {
        realWidth: function realWidth() {
            return this.width == 0 ? "100%" : this.width;
        }
    },
    mounted: function mounted() {
        var self = this;

        if (this.brushes.length == 0) {
            throw new Error('[Vue Graph error]: At least one brush must be added to \'brushes\' variable.');
        }

        _juijsChart2.default.use(_focus2.default);

        this.chart = _juijsChart2.default.create('chart.builder', this.$el, {
            width: this.realWidth,
            height: this.height,
            padding: {
                top: this.paddingTop,
                right: this.paddingRight,
                bottom: this.paddingBottom,
                left: this.paddingLeft
            },
            event: {
                'chart.click': function chartClick(e) {
                    self.$emit('inside#click', e);
                },
                'chart.dblclick': function chartDblclick(e) {
                    self.$emit('inside#dblclick', e);
                },
                'chart.rclick': function chartRclick(e) {
                    self.$emit('inside#rclick', e);
                },
                'chart.mouseover': function chartMouseover(e) {
                    self.$emit('inside#mouseover', e);
                },
                'chart.mouseout': function chartMouseout(e) {
                    self.$emit('inside#mouseout', e);
                },
                'chart.mousemove': function chartMousemove(e) {
                    self.$emit('inside#mousemove', e);
                },
                'chart.mousedown': function chartMousedown(e) {
                    self.$emit('inside#mousedown', e);
                },
                'chart.mouseup': function chartMouseup(e) {
                    self.$emit('inside#mouseup', e);
                },
                'bg.click': function bgClick(e) {
                    self.$emit('outside#click', e);
                },
                'bg.dblclick': function bgDblclick(e) {
                    self.$emit('outside#dblclick', e);
                },
                'bg.rclick': function bgRclick(e) {
                    self.$emit('outside#rclick', e);
                },
                'bg.mouseover': function bgMouseover(e) {
                    self.$emit('outside#mouseover', e);
                },
                'bg.mouseout': function bgMouseout(e) {
                    self.$emit('outside#mouseout', e);
                },
                'bg.mousemove': function bgMousemove(e) {
                    self.$emit('outside#mousemove', e);
                },
                'bg.mousedown': function bgMousedown(e) {
                    self.$emit('outside#mousedown', e);
                },
                'bg.mouseup': function bgMouseup(e) {
                    self.$emit('outside#mouseup', e);
                },
                'click': function click(obj, e) {
                    self.$emit('click', obj, e);
                },
                'dblclick': function dblclick(obj, e) {
                    self.$emit('dblclick', obj, e);
                },
                'rclick': function rclick(obj, e) {
                    self.$emit('rclick', obj, e);
                },
                'mouseover': function mouseover(obj, e) {
                    self.$emit('mouseover', obj, e);
                },
                'mouseout': function mouseout(obj, e) {
                    self.$emit('mouseout', obj, e);
                },
                'mousemove': function mousemove(obj, e) {
                    self.$emit('mousemove', obj, e);
                },
                'mousedown': function mousedown(obj, e) {
                    self.$emit('mousedown', obj, e);
                },
                'mouseup': function mouseup(obj, e) {
                    self.$emit('mouseup', obj, e);
                },
                'legend.filter': function legendFilter(target) {
                    self.$emit('legends#filter', target);
                }
            },
            format: this.format,
            theme: this.theme,
            style: this.styles,
            render: false,
            axis: this.initGraphAxes()
        });

        this.initGraphBrushes();
        this.initGraphWidgets();

        this.chart.render(true);
    }
};

/***/ }),
/* 7 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.default = {
    props: {
        axisMin: {
            type: Number,
            required: false,
            default: 0
        },
        axisMax: {
            type: Number,
            required: false,
            default: 0
        },
        axisStep: {
            type: Number,
            required: false,
            default: 10
        },

        axisXStyle: {
            type: String,
            required: false,
            default: 'solid' // or dotted, gradient, hidden
        },
        axisYStyle: {
            type: String,
            required: false,
            default: 'solid' // or dotted, gradient, hidden
        },
        axisXPosition: {
            type: String,
            required: false,
            default: 'bottom'
        },
        axisYPosition: {
            type: String,
            required: false,
            default: 'left'
        },
        axisReverse: {
            type: Boolean,
            required: false,
            default: false
        },
        axisFullMode: {
            type: Boolean,
            required: false,
            default: false
        },

        textRotateX: {
            type: Number,
            required: false,
            default: 0
        },
        textRotateY: {
            type: Number,
            required: false,
            default: 0
        }
    }
};

/***/ }),
/* 8 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.default = {
    methods: {
        initGraphAxes: function initGraphAxes() {
            var xAxis = {
                type: this.axisFullMode ? 'fullblock' : 'block',
                domain: this.labels,
                line: this.axisXStyle == "none" ? false : this.axisXStyle,
                hide: this.axisXStyle == "hidden",
                orient: this.axisXPosition,
                textRotate: -this.textRotateX
            };

            var yAxis = {
                type: 'range',
                domain: this.getAxisMinAndMax(),
                step: this.axisStep,
                line: this.axisYStyle == "none" ? false : this.axisYStyle,
                hide: this.axisYStyle == "hidden",
                orient: this.axisYPosition,
                textRotate: -this.textRotateY
            };

            return {
                x: this.axisReverse ? yAxis : xAxis,
                y: this.axisReverse ? xAxis : yAxis,
                data: this.convertToData(this.values)
            };
        }
    }
};

/***/ }),
/* 9 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});

var _main = __webpack_require__(0);

var _main2 = _interopRequireDefault(_main);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

exports.default = {
    name: "chart.brush.bar",
    extend: "chart.brush.core",
    component: function component() {
        var _ = _main2.default.include("util.base");

        var BarBrush = function BarBrush() {
            var g;
            var zeroX, height, half_height, bar_height;

            this.getBarStyle = function () {
                return {
                    borderColor: this.chart.theme("barBorderColor"),
                    borderWidth: this.chart.theme("barBorderWidth"),
                    borderOpacity: this.chart.theme("barBorderOpacity"),
                    borderRadius: this.chart.theme("barBorderRadius"),
                    disableOpacity: this.chart.theme("barDisableBackgroundOpacity"),
                    circleColor: this.chart.theme("barPointBorderColor")
                };
            };

            this.getBarElement = function (dataIndex, targetIndex, info) {
                var style = this.getBarStyle(),
                    color = this.color(dataIndex, targetIndex),
                    value = this.getData(dataIndex)[this.brush.target[targetIndex]];

                var r = this.chart.svg.pathRect({
                    width: info.width,
                    height: info.height,
                    fill: color,
                    stroke: style.borderColor,
                    "stroke-width": style.borderWidth,
                    "stroke-opacity": style.borderOpacity
                });

                if (value != 0) {
                    this.addEvent(r, dataIndex, targetIndex);
                }

                if (this.barList == null) {
                    this.barList = [];
                }

                this.barList.push(_.extend({
                    element: r,
                    color: color
                }, info));

                return r;
            };

            this.setActiveEffect = function (r) {
                var style = this.getBarStyle(),
                    cols = this.barList;

                for (var i = 0; i < cols.length; i++) {
                    var opacity = cols[i] == r ? 1 : style.disableOpacity;
                    cols[i].element.attr({ opacity: opacity });

                    if (cols[i].minmax) {
                        cols[i].minmax.style(cols[i].color, style.circleColor, opacity);
                    }
                }
            };

            this.drawBefore = function () {
                var op = this.brush.outerPadding,
                    ip = this.brush.innerPadding,
                    len = this.brush.target.length;

                g = this.chart.svg.group();
                zeroX = this.axis.x(0);
                height = this.axis.y.rangeBand();

                if (this.brush.size > 0) {
                    bar_height = this.brush.size;
                    half_height = bar_height * len + (len - 1) * ip;
                } else {
                    half_height = height - op * 2;
                    bar_height = (half_height - (len - 1) * ip) / len;
                    bar_height = bar_height < 0 ? 0 : bar_height;
                }
            };

            this.drawETC = function (group) {
                if (!_.typeCheck("array", this.barList)) return;

                var self = this,
                    style = this.getBarStyle();

                // 액티브 툴팁 생성
                this.active = this.drawTooltip();
                group.append(this.active.tooltip);

                for (var i = 0; i < this.barList.length; i++) {
                    var r = this.barList[i],
                        d = this.brush.display;

                    // Max & Min 툴팁 생성
                    if (d == "max" && r.max || d == "min" && r.min || d == "all") {
                        r.minmax = this.drawTooltip(r.color, style.circleColor, 1);
                        r.minmax.control(r.position, r.tooltipX, r.tooltipY, this.format(r.value));
                        group.append(r.minmax.tooltip);
                    }

                    // 컬럼 및 기본 브러쉬 이벤트 설정
                    if (r.value != 0 && this.brush.activeEvent != null) {
                        (function (bar) {
                            self.active.style(bar.color, style.circleColor, 1);

                            bar.element.on(self.brush.activeEvent, function (e) {
                                self.active.style(bar.color, style.circleColor, 1);
                                self.active.control(bar.position, bar.tooltipX, bar.tooltipY, self.format(bar.value));
                                self.setActiveEffect(bar);
                            });

                            bar.element.attr({ cursor: "pointer" });
                        })(r);
                    }
                }

                // 액티브 툴팁 위치 설정
                var r = this.barList[this.brush.active];
                if (r != null) {
                    this.active.style(r.color, style.circleColor, 1);
                    this.active.control(r.position, r.tooltipX, r.tooltipY, this.format(r.value));
                    this.setActiveEffect(r);
                }
            };

            this.draw = function () {
                var points = this.getXY(),
                    style = this.getBarStyle();

                this.eachData(function (data, i) {
                    var startY = this.offset("y", i) - half_height / 2;

                    for (var j = 0; j < this.brush.target.length; j++) {
                        var value = data[this.brush.target[j]],
                            tooltipX = this.axis.x(value),
                            tooltipY = startY + bar_height / 2,
                            position = tooltipX >= zeroX ? "right" : "left";

                        // 최소 크기 설정
                        if (Math.abs(zeroX - tooltipX) < this.brush.minSize) {
                            tooltipX = position == "right" ? tooltipX + this.brush.minSize : tooltipX - this.brush.minSize;
                        }

                        var width = Math.abs(zeroX - tooltipX),
                            radius = width < style.borderRadius || bar_height < style.borderRadius ? 0 : style.borderRadius,
                            r = this.getBarElement(i, j, {
                            width: width,
                            height: bar_height,
                            value: value,
                            tooltipX: tooltipX,
                            tooltipY: tooltipY,
                            position: position,
                            max: points[j].max[i],
                            min: points[j].min[i]
                        });

                        if (tooltipX >= zeroX) {
                            r.round(width, bar_height, 0, radius, radius, 0);
                            r.translate(zeroX, startY);
                        } else {
                            r.round(width, bar_height, radius, 0, 0, radius);
                            r.translate(zeroX - width, startY);
                        }

                        // 그룹에 컬럼 엘리먼트 추가
                        g.append(r);

                        // 다음 컬럼 좌표 설정
                        startY += bar_height + this.brush.innerPadding;
                    }
                });

                this.drawETC(g);

                return g;
            };

            this.drawAnimate = function (root) {
                var svg = this.chart.svg,
                    type = this.brush.animate;

                root.append(svg.animate({
                    attributeName: "opacity",
                    from: "0",
                    to: "1",
                    begin: "0s",
                    dur: "1.4s",
                    repeatCount: "1",
                    fill: "freeze"
                }));

                root.each(function (i, elem) {
                    if (elem.is("util.svg.element.path")) {
                        var xy = elem.data("translate").split(","),
                            x = parseInt(xy[0]),
                            y = parseInt(xy[1]),
                            w = parseInt(elem.attr("width")),
                            start = type == "right" ? x + w : x - w;

                        elem.append(svg.animateTransform({
                            attributeName: "transform",
                            type: "translate",
                            from: start + " " + y,
                            to: x + " " + y,
                            begin: "0s",
                            dur: "0.7s",
                            repeatCount: "1",
                            fill: "freeze"
                        }));
                    }
                });
            };
        };

        BarBrush.setup = function () {
            return {
                /** @cfg {Number} [size=0] Set a fixed size of the bar. */
                size: 0,
                /** @cfg {Number} [minSize=0] Sets the minimum size as it is not possible to draw a bar when the value is 0. */
                minSize: 0,
                /** @cfg {Number} [outerPadding=2] Determines the outer margin of a bar.  */
                outerPadding: 2,
                /** @cfg {Number} [innerPadding=1] Determines the inner margin of a bar. */
                innerPadding: 1,
                /** @cfg {Number} [active=null] Activates the bar of an applicable index. */
                active: null,
                /** @cfg {String} [activeEvent=null]  Activates the bar in question when a configured event occurs (click, mouseover, etc). */
                activeEvent: null,
                /** @cfg {"max"/"min"/"all"} [display=null]  Shows a tool tip on the bar for the minimum/maximum value.  */
                display: null,
                /** @cfg {Function} [format=null] Sets the format of the value that is displayed on the tool tip. */
                format: null
            };
        };

        return BarBrush;
    }
};

/***/ }),
/* 10 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});

var _main = __webpack_require__(0);

var _main2 = _interopRequireDefault(_main);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

exports.default = {
    name: "chart.brush.line",
    extend: "chart.brush.core",
    component: function component() {
        var _ = _main2.default.include("util.base");

        var LineBrush = function LineBrush() {
            var g;
            var circleColor, disableOpacity, lineBorderWidth, lineBorderDashArray, lineBorderOpacity;

            this.setActiveEffect = function (elem) {
                var lines = this.lineList;

                for (var i = 0; i < lines.length; i++) {
                    var opacity = elem == lines[i].element ? lineBorderOpacity : disableOpacity,
                        color = lines[i].element.get(0).attr("stroke");

                    if (lines[i].tooltip != null) {
                        lines[i].tooltip.style(color, circleColor, opacity);
                    }

                    lines[i].element.attr({ opacity: opacity });
                }
            };

            this.setActiveEffects = function () {
                var lines = this.lineList,
                    active = this.brush.active;

                for (var i = 0; i < lines.length; i++) {
                    var target = this.brush.target[i],
                        opacity = disableOpacity,
                        color = lines[i].element.get(0).attr("stroke");

                    if (active === null || active === target || _.typeCheck("array", active) && active.includes(target)) {
                        opacity = lineBorderOpacity;
                    }

                    if (lines[i].tooltip != null) {
                        lines[i].tooltip.style(color, circleColor, opacity);
                    }

                    lines[i].element.attr({ opacity: opacity });
                }
            };

            this.addLineElement = function (elem) {
                if (!this.lineList) {
                    this.lineList = [];
                }

                this.lineList.push(elem);
            };

            this.createLine = function (pos, tIndex) {
                var x = pos.x,
                    y = pos.y,
                    v = pos.value,
                    px = this.brush.symbol == "curve" ? this.curvePoints(x) : null,
                    py = this.brush.symbol == "curve" ? this.curvePoints(y) : null,
                    color = null,
                    opacity = null,
                    opts = {
                    "stroke-width": lineBorderWidth,
                    "stroke-dasharray": lineBorderDashArray,
                    fill: "transparent",
                    "cursor": this.brush.activeEvent != null ? "pointer" : "normal"
                };

                var g = this.svg.group(),
                    p = null;

                if (pos.length > 0) {
                    var start = null,
                        end = null;

                    for (var i = 0; i < x.length - 1; i++) {
                        if (!_.typeCheck(["undefined", "null"], v[i])) start = i;
                        if (!_.typeCheck(["undefined", "null"], v[i + 1])) end = i + 1;

                        if (start == null || end == null || start == end) continue;

                        var newColor = this.color(i, tIndex),
                            newOpacity = this.getOpacity(i);

                        if (color != newColor || opacity != newOpacity) {
                            p = this.svg.path(_.extend({
                                "stroke-opacity": newOpacity,
                                stroke: newColor,
                                x1: x[start] // Start coordinates of area brush
                            }, opts));

                            p.css({
                                "pointer-events": "stroke"
                            });

                            p.MoveTo(x[start], y[start]);
                            g.append(p);

                            color = newColor;
                            opacity = newOpacity;
                        } else {
                            p.attr({
                                x2: x[end] // End coordinates of area brush
                            });
                        }

                        if (this.brush.symbol == "curve") {
                            p.CurveTo(px.p1[start], py.p1[start], px.p2[start], py.p2[start], x[end], y[end]);
                        } else {
                            if (this.brush.symbol == "step") {
                                var sx = x[start] + (x[end] - x[start]) / 2;

                                p.LineTo(sx, y[start]);
                                p.LineTo(sx, y[end]);
                            }

                            p.LineTo(x[end], y[end]);
                        }
                    }
                }

                return g;
            };

            this.createTooltip = function (g, pos, index) {
                var display = this.brush.display;

                for (var i = 0; i < pos.x.length; i++) {
                    if (display == "max" && pos.max[i] || display == "min" && pos.min[i] || display == "all") {
                        var orient = display == "max" && pos.max[i] ? "top" : "bottom",
                            tooltip = this.lineList[index].tooltip;

                        // 최소/최대 값은 무조건 한개만 보여야 함.
                        if (display == "all" || tooltip == null) {
                            var minmax = this.drawTooltip(this.color(index), circleColor, lineBorderOpacity);
                            minmax.control(orient, +pos.x[i], +pos.y[i], this.format(pos.value[i]));

                            g.append(minmax.tooltip);
                            this.lineList[index].tooltip = minmax;
                        }
                    }
                }
            };

            this.getOpacity = function (rowIndex) {
                var opacity = this.brush.opacity,
                    defOpacity = this.chart.theme("lineBorderOpacity");

                if (_.typeCheck("function", opacity) && _.typeCheck("number", rowIndex)) {
                    return opacity.call(this.chart, this.getData(rowIndex), rowIndex);
                } else if (_.typeCheck("number", opacity)) {
                    return opacity;
                }

                return defOpacity;
            };

            this.drawLine = function (path) {
                var self = this;

                for (var k = 0; k < path.length; k++) {
                    var p = this.createLine(path[k], k);

                    this.addEvent(p, null, k);
                    g.append(p);

                    // 컬럼 상태 설정
                    this.addLineElement({
                        element: p,
                        tooltip: null
                    });

                    // Max & Min 툴팁 추가
                    if (this.brush.display != null) {
                        this.createTooltip(g, path[k], k);
                    }

                    // 액티브 이벤트 설정
                    if (this.brush.activeEvent != null) {
                        (function (elem) {
                            elem.on(self.brush.activeEvent, function (e) {
                                self.setActiveEffect(elem);
                            });
                        })(p);
                    }
                }

                // 액티브 라인 설정
                if (this.brush.active != null) {
                    this.setActiveEffects();
                }

                return g;
            };

            this.drawBefore = function () {
                g = this.chart.svg.group();
                circleColor = this.chart.theme("linePointBorderColor");
                disableOpacity = this.chart.theme("lineDisableBorderOpacity");
                lineBorderWidth = this.chart.theme("lineBorderWidth");
                lineBorderDashArray = this.chart.theme("lineBorderDashArray");
                lineBorderOpacity = this.getOpacity(null);
            };

            this.draw = function () {
                return this.drawLine(this.getXY());
            };

            this.drawAnimate = function (root) {
                var svg = this.chart.svg;

                root.each(function (i, elem) {
                    if (elem.is("util.svg.element.path")) {
                        var dash = elem.attributes["stroke-dasharray"],
                            len = elem.length();

                        if (dash == "none") {
                            elem.attr({
                                "stroke-dasharray": len
                            });

                            elem.append(svg.animate({
                                attributeName: "stroke-dashoffset",
                                from: len,
                                to: "0",
                                begin: "0s",
                                dur: "1s",
                                repeatCount: "1"
                            }));
                        } else {
                            elem.append(svg.animate({
                                attributeName: "opacity",
                                from: "0",
                                to: "1",
                                begin: "0s",
                                dur: "1.5s",
                                repeatCount: "1",
                                fill: "freeze"
                            }));
                        }
                    }
                });
            };
        };

        LineBrush.setup = function () {
            return {
                /** @cfg {"normal"/"curve"/"step"} [symbol="normal"] Sets the shape of a line (normal, curve, step). */
                symbol: "normal", // normal, curve, step
                /** @cfg {Number} [active=null] Activates the bar of an applicable index. */
                active: null,
                /** @cfg {String} [activeEvent=null]  Activates the bar in question when a configured event occurs (click, mouseover, etc). */
                activeEvent: null,
                /** @cfg {"max"/"min"/"all"} [display=null]  Shows a tool tip on the bar for the minimum/maximum value.  */
                display: null,
                /** @cfg {Number} [opacity=null]  Stroke opacity.  */
                opacity: null
            };
        };

        return LineBrush;
    }
};

/***/ }),
/* 11 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.default = {
    props: {
        axisMin: {
            type: Number,
            required: false,
            default: 0
        },
        axisMax: {
            type: Number,
            required: false,
            default: 100
        },
        axisStep: {
            type: Number,
            required: false,
            default: 10
        },

        axisXStyle: {
            type: String,
            required: false,
            default: 'solid' // or dotted, gradient, hidden
        },
        axisYStyle: {
            type: String,
            required: false,
            default: 'solid' // or dotted, gradient, hidden
        },
        axisXPosition: {
            type: String,
            required: false,
            default: 'bottom'
        },
        axisYPosition: {
            type: String,
            required: false,
            default: 'left'
        },
        axisReverse: {
            type: Boolean,
            required: false,
            default: false
        },

        axisInterval: {
            type: Number,
            required: true,
            default: 1000 * 60 * 60 // 1시간
        },
        axisFormat: {
            type: [String, Function],
            required: true,
            default: 'HH' // 1시간
        },

        textRotateX: {
            type: Number,
            required: false,
            default: 0
        },
        textRotateY: {
            type: Number,
            required: false,
            default: 0
        }
    }
};

/***/ }),
/* 12 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});

var _juijsChart = __webpack_require__(0);

var _juijsChart2 = _interopRequireDefault(_juijsChart);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

exports.default = {
    methods: {
        convertToData: function convertToData(values) {
            var util = _juijsChart2.default.include('util.base');
            var data = [];

            for (var i = 0; i < values.length; i++) {
                var val = values[i];

                if (util.typeCheck('array', val)) {
                    data.push({
                        '0': val[0],
                        '1': val[1]
                    });
                }
            }

            return data;
        },
        initGraphAxes: function initGraphAxes() {
            var xAxis = {
                type: 'date',
                domain: this.labels,
                interval: this.axisInterval,
                format: this.axisFormat,
                line: this.axisXStyle == "none" ? false : this.axisXStyle,
                hide: this.axisXStyle == "hidden",
                orient: this.axisXPosition,
                key: '0',
                textRotate: -this.textRotateX
            };

            var yAxis = {
                type: 'range',
                domain: [this.axisMin, this.axisMax],
                step: this.axisStep,
                line: this.axisYStyle == "none" ? false : this.axisYStyle,
                hide: this.axisYStyle == "hidden",
                orient: this.axisYPosition,
                textRotate: -this.textRotateY
            };

            return {
                x: this.axisReverse ? yAxis : xAxis,
                y: this.axisReverse ? xAxis : yAxis,
                data: this.convertToData(this.values)
            };
        }
    }
};

/***/ }),
/* 13 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.default = {
    template: '<span style="display: none;"></span>',
    beforeMount: function beforeMount(e) {
        if (!this.$parent || !this.$parent.$vnode || this.$parent.$vnode.tag.indexOf("graph-") == -1) {
            throw new Error('[Vue Graph error]: Can only be used as child nodes.');
        }

        this.index = this.$parent.widgets.length;
        this.brushes = [];

        for (var i = 0; i < this.$parent.brushes.length; i++) {
            this.brushes.push(i);
        }
    }
};

/***/ }),
/* 14 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});

var _core = __webpack_require__(1);

var _core2 = _interopRequireDefault(_core);

var _watch = __webpack_require__(2);

var _watch2 = _interopRequireDefault(_watch);

var _created = __webpack_require__(3);

var _created2 = _interopRequireDefault(_created);

var _mounted = __webpack_require__(6);

var _mounted2 = _interopRequireDefault(_mounted);

var _props = __webpack_require__(4);

var _props2 = _interopRequireDefault(_props);

var _propsBlock = __webpack_require__(7);

var _propsBlock2 = _interopRequireDefault(_propsBlock);

var _methods = __webpack_require__(5);

var _methods2 = _interopRequireDefault(_methods);

var _methodsBlock = __webpack_require__(8);

var _methodsBlock2 = _interopRequireDefault(_methodsBlock);

var _juijsChart = __webpack_require__(0);

var _juijsChart2 = _interopRequireDefault(_juijsChart);

var _line = __webpack_require__(10);

var _line2 = _interopRequireDefault(_line);

var _area = __webpack_require__(19);

var _area2 = _interopRequireDefault(_area);

var _stackarea = __webpack_require__(60);

var _stackarea2 = _interopRequireDefault(_stackarea);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

_juijsChart2.default.use(_line2.default, _area2.default, _stackarea2.default);

exports.default = {
    name: 'graph-area',
    mixins: [_core2.default, _watch2.default, _created2.default, _mounted2.default, _props2.default, _propsBlock2.default, _methods2.default, _methodsBlock2.default],
    props: {
        shape: {
            type: String, // "normal", "curve", "step"
            required: false,
            default: 'normal'
        },
        opacity: {
            type: Number,
            required: false
        },
        borderLine: {
            type: Boolean,
            required: false,
            default: true
        },
        display: { // "max", "min", "all"
            type: String,
            required: false
        }
    },
    methods: {
        getAxisMinAndMax: function getAxisMinAndMax() {
            var min = this.axisMin;
            var max = this.axisMax;

            if (min != max) {
                return [min, max];
            }

            return function (data) {
                return Object.values(data).reduce(function (a, b) {
                    return a + b;
                }, 0);
            };
        }
    },
    beforeMount: function beforeMount() {
        this.brushes = [{
            type: 'stackarea',
            clip: this.clip,
            colors: this.colors,
            symbol: this.shape,
            opacity: this.opacity,
            line: this.borderLine,
            display: this.display
        }];
    }
};

/***/ }),
/* 15 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});

var _main = __webpack_require__(0);

var _main2 = _interopRequireDefault(_main);

var _bar = __webpack_require__(9);

var _bar2 = _interopRequireDefault(_bar);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

_main2.default.use(_bar2.default);

exports.default = {
    name: "chart.brush.stackbar",
    extend: "chart.brush.bar",
    component: function component() {
        var _ = _main2.default.include("util.base");

        var StackBarBrush = function StackBarBrush(chart, axis, brush) {
            var g, height, bar_height;

            this.addBarElement = function (elem) {
                if (this.barList == null) {
                    this.barList = [];
                }

                this.barList.push(elem);
            };

            this.getBarElement = function (dataIndex, targetIndex) {
                var style = this.getBarStyle(),
                    color = this.color(targetIndex),
                    value = this.getData(dataIndex)[this.brush.target[targetIndex]];

                var r = this.chart.svg.rect({
                    fill: color,
                    stroke: style.borderColor,
                    "stroke-width": style.borderWidth,
                    "stroke-opacity": style.borderOpacity
                });

                // 데이타가 0이면 화면에 표시하지 않음.
                if (value == 0) {
                    r.attr({ display: 'none' });
                }

                if (value != 0) {
                    this.addEvent(r, dataIndex, targetIndex);
                }

                return r;
            };

            this.setActiveEffect = function (group) {
                var style = this.getBarStyle(),
                    columns = this.barList,
                    tooltips = this.stackTooltips;

                for (var i = 0; i < columns.length; i++) {
                    var opacity = group == columns[i] ? 1 : style.disableOpacity;

                    if (tooltips) {
                        // bar 가 그려지지 않으면 tooltips 객체가 없을 수 있음.
                        if (opacity == 1 || _.inArray(i, this.tooltipIndexes) != -1) {
                            tooltips[i].attr({ opacity: 1 });
                        } else {
                            tooltips[i].attr({ opacity: 0 });
                        }
                    }

                    columns[i].attr({ opacity: opacity });
                }
            };

            this.setActiveEffectOption = function () {
                var active = this.brush.active;

                if (this.barList && this.barList[active]) {
                    this.setActiveEffect(this.barList[active]);
                }
            };

            this.setActiveEvent = function (group) {
                var self = this;

                group.on(self.brush.activeEvent, function (e) {
                    self.setActiveEffect(group);
                });
            };

            this.setActiveEventOption = function (group) {
                if (this.brush.activeEvent != null) {
                    this.setActiveEvent(group);
                    group.attr({ cursor: "pointer" });
                }
            };

            this.getTargetSize = function () {
                var height = this.axis.y.rangeBand();

                if (this.brush.size > 0) {
                    return this.brush.size;
                } else {
                    var size = height - this.brush.outerPadding * 2;
                    return size < this.brush.minSize ? this.brush.minSize : size;
                }
            };

            this.setActiveTooltips = function (minIndex, maxIndex) {
                var type = this.brush.display,
                    activeIndex = type == "min" ? minIndex : maxIndex;

                for (var i = 0; i < this.stackTooltips.length; i++) {
                    if (i == activeIndex || type == "all") {
                        this.stackTooltips[i].css({
                            opacity: 1
                        });

                        this.tooltipIndexes.push(i);
                    }
                }
            };

            this.drawStackTooltip = function (group, index, value, x, y, pos) {
                var fontSize = this.chart.theme("tooltipPointFontSize"),
                    orient = "middle",
                    dx = 0,
                    dy = 0;

                if (pos == "left") {
                    orient = "start";
                    dx = 3;
                    dy = fontSize / 3;
                } else if (pos == "right") {
                    orient = "end";
                    dx = -3;
                    dy = fontSize / 3;
                } else if (pos == "top") {
                    dy = -(fontSize / 3);
                } else {
                    dy = fontSize;
                }

                var tooltip = this.chart.text({
                    fill: this.chart.theme("tooltipPointFontColor"),
                    "font-size": fontSize,
                    "font-weight": this.chart.theme("tooltipPointFontWeight"),
                    "text-anchor": orient,
                    dx: dx,
                    dy: dy,
                    opacity: 0
                }).text(this.format(value)).translate(x, y);

                this.stackTooltips[index] = tooltip;
                group.append(tooltip);
            };

            this.drawStackEdge = function (g) {
                var borderWidth = this.chart.theme("barStackEdgeBorderWidth");

                for (var i = 1; i < this.edgeData.length; i++) {
                    var pre = this.edgeData[i - 1],
                        now = this.edgeData[i];

                    for (var j = 0; j < this.brush.target.length; j++) {
                        if (now[j].width > 0 && now[j].height > 0) {
                            g.append(this.svg.line({
                                x1: pre[j].x + pre[j].width - pre[j].ex,
                                x2: now[j].x + now[j].dx - now[j].ex,
                                y1: pre[j].y + pre[j].height - pre[j].ey,
                                y2: now[j].y + now[j].dy,
                                stroke: now[j].color,
                                "stroke-width": borderWidth
                            }));
                        }
                    }
                }
            };

            this.drawBefore = function () {
                g = chart.svg.group();
                height = axis.y.rangeBand();
                bar_height = this.getTargetSize();

                this.stackTooltips = [];
                this.tooltipIndexes = [];
                this.edgeData = [];
            };

            this.draw = function () {
                var maxIndex = null,
                    maxValue = 0,
                    minIndex = null,
                    minValue = this.axis.x.max(),
                    isReverse = this.axis.get("x").reverse;

                this.eachData(function (data, i) {
                    var group = chart.svg.group();

                    var offsetY = this.offset("y", i),
                        startY = offsetY - bar_height / 2,
                        startX = axis.x(0),
                        value = 0,
                        sumValue = 0;

                    for (var j = 0; j < brush.target.length; j++) {
                        var xValue = data[brush.target[j]] + value,
                            endX = axis.x(xValue),
                            opts = {
                            x: startX < endX ? startX : endX,
                            y: startY,
                            width: Math.abs(startX - endX),
                            height: bar_height
                        },
                            r = this.getBarElement(i, j).attr(opts);

                        if (!this.edgeData[i]) {
                            this.edgeData[i] = {};
                        }

                        this.edgeData[i][j] = _.extend({
                            color: this.color(j),
                            dx: opts.width,
                            dy: 0,
                            ex: isReverse ? opts.width : 0,
                            ey: 0
                        }, opts);

                        startX = endX;
                        value = xValue;
                        sumValue += data[brush.target[j]];

                        group.append(r);
                    }

                    // min & max 인덱스 가져오기
                    if (sumValue > maxValue) {
                        maxValue = sumValue;
                        maxIndex = i;
                    }
                    if (sumValue < minValue) {
                        minValue = sumValue;
                        minIndex = i;
                    }

                    this.drawStackTooltip(group, i, sumValue, startX, offsetY, isReverse ? "right" : "left");
                    this.setActiveEventOption(group); // 액티브 엘리먼트 이벤트 설정
                    this.addBarElement(group);
                    g.append(group);
                });

                // 스탭 연결선 그리기
                if (this.brush.edge) {
                    this.drawStackEdge(g);
                }

                // 최소/최대/전체 값 표시하기
                if (this.brush.display != null) {
                    this.setActiveTooltips(minIndex, maxIndex);
                }

                // 액티브 엘리먼트 설정
                this.setActiveEffectOption();

                return g;
            };
        };

        StackBarBrush.setup = function () {
            return {
                /** @cfg {Number} [outerPadding=15] Determines the outer margin of a stack bar. */
                outerPadding: 15,
                /** @cfg {Boolean} [edge=false] */
                edge: false
            };
        };

        return StackBarBrush;
    }
};

/***/ }),
/* 16 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});

var _core = __webpack_require__(1);

var _core2 = _interopRequireDefault(_core);

var _watch = __webpack_require__(2);

var _watch2 = _interopRequireDefault(_watch);

var _created = __webpack_require__(3);

var _created2 = _interopRequireDefault(_created);

var _mounted = __webpack_require__(6);

var _mounted2 = _interopRequireDefault(_mounted);

var _props = __webpack_require__(4);

var _props2 = _interopRequireDefault(_props);

var _propsBlock = __webpack_require__(7);

var _propsBlock2 = _interopRequireDefault(_propsBlock);

var _methods = __webpack_require__(5);

var _methods2 = _interopRequireDefault(_methods);

var _methodsBlock = __webpack_require__(8);

var _methodsBlock2 = _interopRequireDefault(_methodsBlock);

var _juijsChart = __webpack_require__(0);

var _juijsChart2 = _interopRequireDefault(_juijsChart);

var _line = __webpack_require__(10);

var _line2 = _interopRequireDefault(_line);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

_juijsChart2.default.use(_line2.default);

exports.default = {
    name: 'graph-line',
    mixins: [_core2.default, _watch2.default, _created2.default, _mounted2.default, _props2.default, _propsBlock2.default, _methods2.default, _methodsBlock2.default],
    props: {
        shape: {
            type: String, // "normal", "curve", "step"
            required: false,
            default: 'normal'
        },
        activeIndex: {
            type: Number,
            required: false
        },
        activeEvent: {
            type: String, // "click", "dblclick", ...
            required: false
        },
        display: { // "max", "min", "all"
            type: String,
            required: false
        },
        opacity: {
            type: Number,
            required: false
        }
    },
    beforeMount: function beforeMount() {
        this.brushes = [{
            type: 'line',
            clip: this.clip,
            colors: this.colors,
            symbol: this.shape,
            active: this.activeIndex,
            activeEvent: this.activeEvent,
            display: this.display,
            opacity: this.opacity
        }];
    }
};

/***/ }),
/* 17 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.default = {
    props: {
        axisMin: {
            type: Number,
            required: false,
            default: 0
        },
        axisMax: {
            type: Number,
            required: false,
            default: 0
        },
        axisStep: {
            type: Number,
            required: false,
            default: 10
        },

        axisXStyle: {
            type: String,
            required: false,
            default: 'solid' // or dotted, gradient, hidden
        },
        axisYStyle: {
            type: String,
            required: false,
            default: 'solid' // or dotted, gradient, hidden
        },
        axisXPosition: {
            type: String,
            required: false,
            default: 'bottom'
        },
        axisYPosition: {
            type: String,
            required: false,
            default: 'left'
        },
        axisReverse: {
            type: Boolean,
            required: false,
            default: false
        },

        axisInterval: {
            type: Number,
            required: true,
            default: 1000 * 60 * 60 // 1시간
        },
        axisFormat: {
            type: [String, Function],
            required: true,
            default: 'HH' // 1시간
        },

        textRotateX: {
            type: Number,
            required: false,
            default: 0
        },
        textRotateY: {
            type: Number,
            required: false,
            default: 0
        }
    }
};

/***/ }),
/* 18 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.default = {
    methods: {
        initGraphAxes: function initGraphAxes() {
            var xAxis = {
                type: 'dateblock',
                domain: this.labels,
                interval: this.axisInterval,
                format: this.axisFormat,
                line: this.axisXStyle == "none" ? false : this.axisXStyle,
                hide: this.axisXStyle == "hidden",
                orient: this.axisXPosition,
                textRotate: -this.textRotateX
            };

            var yAxis = {
                type: 'range',
                domain: this.getAxisMinAndMax(),
                step: this.axisStep,
                line: this.axisYStyle == "none" ? false : this.axisYStyle,
                hide: this.axisYStyle == "hidden",
                orient: this.axisYPosition,
                textRotate: -this.textRotateY
            };

            return {
                x: this.axisReverse ? yAxis : xAxis,
                y: this.axisReverse ? xAxis : yAxis,
                data: this.convertToData(this.values)
            };
        }
    }
};

/***/ }),
/* 19 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});

var _main = __webpack_require__(0);

var _main2 = _interopRequireDefault(_main);

var _line = __webpack_require__(10);

var _line2 = _interopRequireDefault(_line);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

_main2.default.use(_line2.default);

exports.default = {
    name: "chart.brush.area",
    extend: "chart.brush.line",
    component: function component() {
        var _ = _main2.default.include("util.base");

        var AreaBrush = function AreaBrush() {
            this.drawArea = function (path) {
                var g = this.chart.svg.group(),
                    y = this.axis.y(this.brush.startZero ? 0 : this.axis.y.min()),
                    opacity = _.typeCheck("number", this.brush.opacity) ? this.brush.opacity : this.chart.theme("areaBackgroundOpacity");

                for (var k = 0; k < path.length; k++) {
                    var children = this.createLine(path[k], k).children;

                    for (var i = 0; i < children.length; i++) {
                        var p = children[i];

                        // opacity 옵션이 콜백함수 일때, 상위 클래스 설정을 따름.
                        if (_.typeCheck("function", this.brush.opacity)) {
                            opacity = p.attr("stroke-opacity");
                        }

                        if (path[k].length > 0) {
                            p.LineTo(p.attr("x2"), y);
                            p.LineTo(p.attr("x1"), y);
                            p.ClosePath();
                        }

                        p.attr({
                            fill: p.attr("stroke"),
                            "fill-opacity": opacity,
                            "stroke-width": 0
                        });

                        g.prepend(p);
                    }

                    if (this.brush.line) {
                        var p = this.createLine(path[k], k);
                        g.prepend(p);

                        this.addLineElement({
                            element: p,
                            tooltip: null
                        });

                        if (this.brush.display) {
                            this.createTooltip(g, path[k], k);
                        }
                    }

                    this.addEvent(g, null, k);
                }

                return g;
            };

            this.draw = function () {
                return this.drawArea(this.getXY());
            };

            this.drawAnimate = function (root) {
                root.append(this.chart.svg.animate({
                    attributeName: "opacity",
                    from: "0",
                    to: "1",
                    begin: "0s",
                    dur: "1.5s",
                    repeatCount: "1",
                    fill: "freeze"
                }));
            };
        };

        AreaBrush.setup = function () {
            return {
                /** @cfg {"normal"/"curve"/"step"} [symbol="normal"] Sets the shape of a line (normal, curve, step). */
                symbol: "normal", // normal, curve, step
                /** @cfg {Number} [active=null] Activates the bar of an applicable index. */
                active: null,
                /** @cfg {String} [activeEvent=null]  Activates the bar in question when a configured event occurs (click, mouseover, etc). */
                activeEvent: null,
                /** @cfg {"max"/"min"} [display=null]  Shows a tool tip on the bar for the minimum/maximum value.  */
                display: null,
                /** @cfg {Boolean} [startZero=true]  The end of the area is zero point. */
                startZero: true,
                /** @cfg {Boolean} [line=true]  Visible line */
                line: true
            };
        };

        return AreaBrush;
    }
};

/***/ }),
/* 20 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.default = {
    watch: {
        renderStop: function renderStop(newVal, oldVal) {
            if (newVal) {
                this.animation.stop();
            } else {
                var self = this;
                this.animation.run(function (runningTime) {
                    if (typeof self.renderHandler == "function") {
                        self.renderHandler.call(this, runningTime);
                    }
                });
            }
        }
    }
};

/***/ }),
/* 21 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});

var _juijsChart = __webpack_require__(0);

var _juijsChart2 = _interopRequireDefault(_juijsChart);

var _raycast = __webpack_require__(72);

var _raycast2 = _interopRequireDefault(_raycast);

var _picker = __webpack_require__(73);

var _picker2 = _interopRequireDefault(_picker);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

exports.default = {
    computed: {
        realWidth: function realWidth() {
            return this.width == 0 ? "100%" : this.width;
        }
    },
    mounted: function mounted() {
        var self = this;

        if (this.brushes.length == 0) {
            throw new Error('[Vue Graph error]: At least one brush must be added to \'brushes\' variable.');
        }

        _juijsChart2.default.use(_raycast2.default, _picker2.default);

        this.animation = _juijsChart2.default.create('chart.animation', this.$el, {
            width: this.realWidth,
            height: this.height,
            padding: {
                top: this.paddingTop,
                right: this.paddingRight,
                bottom: this.paddingBottom,
                left: this.paddingLeft
            },
            event: {
                'chart.click': function chartClick(e) {
                    self.$emit('inside#click', e);
                },
                'chart.dblclick': function chartDblclick(e) {
                    self.$emit('inside#dblclick', e);
                },
                'chart.rclick': function chartRclick(e) {
                    self.$emit('inside#rclick', e);
                },
                'chart.mouseover': function chartMouseover(e) {
                    self.$emit('inside#mouseover', e);
                },
                'chart.mouseout': function chartMouseout(e) {
                    self.$emit('inside#mouseout', e);
                },
                'chart.mousemove': function chartMousemove(e) {
                    self.$emit('inside#mousemove', e);
                },
                'chart.mousedown': function chartMousedown(e) {
                    self.$emit('inside#mousedown', e);
                },
                'chart.mouseup': function chartMouseup(e) {
                    self.$emit('inside#mouseup', e);
                },
                'bg.click': function bgClick(e) {
                    self.$emit('outside#click', e);
                },
                'bg.dblclick': function bgDblclick(e) {
                    self.$emit('outside#dblclick', e);
                },
                'bg.rclick': function bgRclick(e) {
                    self.$emit('outside#rclick', e);
                },
                'bg.mouseover': function bgMouseover(e) {
                    self.$emit('outside#mouseover', e);
                },
                'bg.mouseout': function bgMouseout(e) {
                    self.$emit('outside#mouseout', e);
                },
                'bg.mousemove': function bgMousemove(e) {
                    self.$emit('outside#mousemove', e);
                },
                'bg.mousedown': function bgMousedown(e) {
                    self.$emit('outside#mousedown', e);
                },
                'bg.mouseup': function bgMouseup(e) {
                    self.$emit('outside#mouseup', e);
                },
                'raycast.click': function raycastClick(obj, e) {
                    self.$emit('click', obj, e);
                },
                'raycast.dblclick': function raycastDblclick(obj, e) {
                    self.$emit('dblclick', obj, e);
                },
                'raycast.rclick': function raycastRclick(obj, e) {
                    self.$emit('rclick', obj, e);
                },
                'picker.click': function pickerClick(obj, e) {
                    self.$emit('click', obj, e);
                },
                'picker.dblclick': function pickerDblclick(obj, e) {
                    self.$emit('dblclick', obj, e);
                }
            },
            format: this.format,
            theme: this.theme,
            style: this.styles,
            render: false,
            axis: this.initGraphAxes(),
            interval: this.renderInterval
        });

        this.chart = this.animation.builder;
        this.initGraphBrushes();
        this.initGraphWidgets();

        if (this.chart.axis(0).x != null && this.chart.axis(0).x != null) this.chart.addWidget({ type: 'raycast' });
        this.chart.addWidget({ type: 'canvas.picker' });
        this.chart.render(true);

        this.animation.run(function (runningTime) {
            if (typeof self.renderHandler == "function") {
                self.renderHandler.call(this, runningTime);
            }
        });
    }
};

/***/ }),
/* 22 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.default = {
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
};

/***/ }),
/* 23 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});

var _core = __webpack_require__(1);

var _core2 = _interopRequireDefault(_core);

var _watch = __webpack_require__(2);

var _watch2 = _interopRequireDefault(_watch);

var _created = __webpack_require__(3);

var _created2 = _interopRequireDefault(_created);

var _mounted = __webpack_require__(6);

var _mounted2 = _interopRequireDefault(_mounted);

var _props = __webpack_require__(4);

var _props2 = _interopRequireDefault(_props);

var _propsBlock = __webpack_require__(7);

var _propsBlock2 = _interopRequireDefault(_propsBlock);

var _methods = __webpack_require__(5);

var _methods2 = _interopRequireDefault(_methods);

var _methodsBlock = __webpack_require__(8);

var _methodsBlock2 = _interopRequireDefault(_methodsBlock);

var _juijsChart = __webpack_require__(0);

var _juijsChart2 = _interopRequireDefault(_juijsChart);

var _bar = __webpack_require__(9);

var _bar2 = _interopRequireDefault(_bar);

var _column = __webpack_require__(24);

var _column2 = _interopRequireDefault(_column);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

_juijsChart2.default.use(_bar2.default, _column2.default);

exports.default = {
    name: 'graph-bar',
    mixins: [_core2.default, _watch2.default, _created2.default, _mounted2.default, _props2.default, _propsBlock2.default, _methods2.default, _methodsBlock2.default],
    props: {
        fixedSize: {
            type: Number,
            required: false,
            default: 0
        },
        minValue: {
            type: Number,
            required: false,
            default: 0
        },
        barMargin: {
            type: Number,
            required: false,
            default: 2
        },
        barPadding: {
            type: Number,
            required: false,
            default: 1
        },
        activeIndex: {
            type: Number,
            required: false
        },
        activeEvent: {
            type: String, // "click", "dblclick", ...
            required: false
        },
        display: { // "max", "min", "all"
            type: String,
            required: false
        }
    },
    watch: {
        activeIndex: function activeIndex(newVal, oldVal) {
            if (newVal == oldVal) return;

            this.chart.updateBrush(0, { active: newVal });
            this.chart.render();
        }
    },
    beforeMount: function beforeMount() {
        this.brushes = [{
            type: this.axisReverse ? 'bar' : 'column',
            clip: this.clip,
            colors: this.colors,
            active: this.activeIndex,
            activeEvent: this.activeEvent,
            display: this.display,
            size: this.fixedSize,
            minSize: this.minValue,
            outerPadding: this.barMargin,
            innerPadding: this.barPadding
        }];
    }
};

/***/ }),
/* 24 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});

var _main = __webpack_require__(0);

var _main2 = _interopRequireDefault(_main);

var _bar = __webpack_require__(9);

var _bar2 = _interopRequireDefault(_bar);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

_main2.default.use(_bar2.default);

exports.default = {
    name: "chart.brush.column",
    extend: "chart.brush.bar",
    component: function component() {
        var ColumnBrush = function ColumnBrush() {
            var g;
            var zeroY, width, col_width, half_width;

            this.drawBefore = function () {
                var op = this.brush.outerPadding,
                    ip = this.brush.innerPadding,
                    len = this.brush.target.length;

                g = this.chart.svg.group();
                zeroY = this.axis.y(0);
                width = this.axis.x.rangeBand();

                if (this.brush.size > 0) {
                    col_width = this.brush.size;
                    half_width = col_width * len + (len - 1) * ip;
                } else {
                    half_width = width - op * 2;
                    col_width = (width - op * 2 - (len - 1) * ip) / len;
                    col_width = col_width < 0 ? 0 : col_width;
                }
            };

            this.draw = function () {
                var points = this.getXY(),
                    style = this.getBarStyle();

                this.eachData(function (data, i) {
                    var startX = this.offset("x", i) - half_width / 2;

                    for (var j = 0; j < this.brush.target.length; j++) {
                        var value = data[this.brush.target[j]],
                            tooltipX = startX + col_width / 2,
                            tooltipY = this.axis.y(value),
                            position = tooltipY <= zeroY ? "top" : "bottom";

                        // 최소 크기 설정
                        if (Math.abs(zeroY - tooltipY) < this.brush.minSize) {
                            tooltipY = position == "top" ? tooltipY - this.brush.minSize : tooltipY + this.brush.minSize;
                        }

                        var height = Math.abs(zeroY - tooltipY),
                            radius = col_width < style.borderRadius || height < style.borderRadius ? 0 : style.borderRadius,
                            r = this.getBarElement(i, j, {
                            width: col_width,
                            height: height,
                            value: value,
                            tooltipX: tooltipX,
                            tooltipY: tooltipY,
                            position: position,
                            max: points[j].max[i],
                            min: points[j].min[i]
                        });

                        if (tooltipY <= zeroY) {
                            r.round(col_width, height, radius, radius, 0, 0);
                            r.translate(startX, tooltipY);
                        } else {
                            r.round(col_width, height, 0, 0, radius, radius);
                            r.translate(startX, zeroY);
                        }

                        // 그룹에 컬럼 엘리먼트 추가
                        g.append(r);

                        // 다음 컬럼 좌표 설정
                        startX += col_width + this.brush.innerPadding;
                    }
                });

                this.drawETC(g);

                return g;
            };

            this.drawAnimate = function (root) {
                var svg = this.chart.svg,
                    type = this.brush.animate;

                root.append(svg.animate({
                    attributeName: "opacity",
                    from: "0",
                    to: "1",
                    begin: "0s",
                    dur: "1.4s",
                    repeatCount: "1",
                    fill: "freeze"
                }));

                root.each(function (i, elem) {
                    if (elem.is("util.svg.element.path")) {
                        var xy = elem.data("translate").split(","),
                            x = parseInt(xy[0]),
                            y = parseInt(xy[1]),
                            h = parseInt(elem.attr("height")),
                            start = type == "top" ? y - h : y + h;

                        elem.append(svg.animateTransform({
                            attributeName: "transform",
                            type: "translate",
                            from: x + " " + start,
                            to: x + " " + y,
                            begin: "0s",
                            dur: "0.7s",
                            repeatCount: "1",
                            fill: "freeze"
                        }));
                    }
                });
            };
        };

        return ColumnBrush;
    }
};

/***/ }),
/* 25 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.default = {
    props: {
        axisMin: {
            type: Number,
            required: false,
            default: 0
        },
        axisMax: {
            type: Number,
            required: false,
            default: 0
        },
        axisStep: {
            type: Number,
            required: false,
            default: 10
        },

        axisXStyle: {
            type: String,
            required: false,
            default: 'solid' // or hidden
        },
        axisYStyle: {
            type: String,
            required: false,
            default: 'solid' // or hidden
        },
        axisZStyle: {
            type: String,
            required: false,
            default: 'solid' // or hidden
        },
        angleX: {
            type: Number,
            required: false,
            default: 30
        },
        angleY: {
            type: Number,
            required: false,
            default: 20
        },
        angleZ: {
            type: Number,
            required: false,
            default: 0
        },

        depth: {
            type: Number,
            required: true
        },
        perspective: {
            type: Number,
            required: false,
            default: 0.6
        }
    }
};

/***/ }),
/* 26 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.default = {
    methods: {
        initGraphAxes: function initGraphAxes() {
            var xAxis = {
                type: 'block',
                domain: this.labels,
                line: this.axisXStyle == "solid",
                hide: this.axisXStyle == "hidden"
            };

            var yAxis = {
                type: 'range',
                domain: this.getAxisMinAndMax(),
                step: this.axisStep,
                line: this.axisYStyle == "solid",
                hide: this.axisYStyle == "hidden"
            };

            var zAxis = {
                type: 'block',
                domain: this.names,
                line: this.axisZStyle == "solid",
                hide: this.axisZStyle == "hidden"
            };

            return {
                x: xAxis,
                y: yAxis,
                z: zAxis,
                depth: this.depth,
                perspective: this.perspective,
                degree: {
                    x: this.angleX,
                    y: this.angleY,
                    z: this.angleZ
                },
                data: this.convertToData(this.values)
            };
        }
    }
};

/***/ }),
/* 27 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});

var _main = __webpack_require__(0);

var _main2 = _interopRequireDefault(_main);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

exports.default = {
    name: "chart.widget.polygon.rotate3d",
    extend: "chart.widget.polygon.core",
    component: function component() {
        var _ = _main2.default.include("util.base");
        var DEGREE_LIMIT = 180;

        var PolygonRotate3DWidget = function PolygonRotate3DWidget() {
            var self = this;

            function setScrollEvent(axisIndex) {
                var axis = self.chart.axis(axisIndex),
                    isMove = false,
                    mouseStartX = 0,
                    mouseStartY = 0,
                    sdx = 0,
                    sdy = 0,
                    cacheXY = null,
                    unit = self.widget.unit,
                    w = axis.area("width"),
                    h = axis.area("height");

                self.on("axis.mousedown", mousedown, axisIndex);
                self.on("axis.mousemove", mousemove, axisIndex);
                self.on("axis.mouseup", mouseup, axisIndex);
                self.on("bg.mouseup", mouseup);
                self.on("chart.mouseup", mouseup);

                function mousedown(e) {
                    if (isMove) return;

                    isMove = true;
                    mouseStartX = e.chartX;
                    mouseStartY = e.chartY;
                    sdx = axis.degree.x;
                    sdy = axis.degree.y;
                }

                function mousemove(e) {
                    if (!isMove) return;

                    var gapX = e.chartX - mouseStartX,
                        gapY = e.chartY - mouseStartY,
                        dx = sdx + Math.floor(gapY / h * DEGREE_LIMIT),
                        dy = sdy - Math.floor(gapX / w * DEGREE_LIMIT);

                    // 각도 Interval이 맞을 경우, 렌더링하지 않음
                    if (dx % unit != 0 && dy % unit != 0) return;

                    // 이전 각도와 동일할 경우, 렌더링하지 않음
                    var newCacheXY = dx + ":" + dy;
                    if (cacheXY == newCacheXY) return;

                    axis.set("degree", {
                        x: dx,
                        y: dy
                    });

                    self.chart.render();
                    cacheXY = newCacheXY;
                }

                function mouseup(e) {
                    if (!isMove) return;

                    isMove = false;
                    mouseStartX = 0;
                    mouseStartY = 0;
                }
            }

            this.draw = function () {
                var indexes = _.typeCheck("array", this.widget.axis) ? this.widget.axis : [this.widget.axis];

                for (var i = 0; i < indexes.length; i++) {
                    setScrollEvent(indexes[i]);
                }
            };
        };

        PolygonRotate3DWidget.setup = function () {
            return {
                unit: 5, // 회전 최소 각도
                axis: [0]
            };
        };

        return PolygonRotate3DWidget;
    }
};

/***/ }),
/* 28 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});

var _main = __webpack_require__(0);

var _main2 = _interopRequireDefault(_main);

var _stackbar = __webpack_require__(15);

var _stackbar2 = _interopRequireDefault(_stackbar);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

_main2.default.use(_stackbar2.default);

exports.default = {
    name: "chart.brush.fullstackbar",
    extend: "chart.brush.stackbar",
    component: function component() {
        var _ = _main2.default.include("util.base");

        var FullStackBarBrush = function FullStackBarBrush(chart, axis, brush) {
            var g, zeroX, height, bar_height;

            this.drawBefore = function () {
                g = chart.svg.group();
                zeroX = axis.x(0);
                height = axis.y.rangeBand();
                bar_height = this.getTargetSize();
            };

            this.drawText = function (percent, x, y) {
                if (percent === 0 || isNaN(percent)) return null;

                var result = _.typeCheck("function", this.brush.showText) ? this.brush.showText.call(this, percent) : percent + "%";

                var text = this.chart.text({
                    "font-size": this.chart.theme("barFontSize"),
                    fill: this.chart.theme("barFontColor"),
                    x: x,
                    y: y,
                    "text-anchor": "middle"
                }, result);

                return text;
            };

            this.draw = function () {
                this.eachData(function (data, i) {
                    var group = chart.svg.group();

                    var startY = this.offset("y", i) - bar_height / 2,
                        sum = 0,
                        list = [];

                    for (var j = 0; j < brush.target.length; j++) {
                        var width = data[brush.target[j]];

                        sum += width;
                        list.push(width);
                    }

                    var startX = 0,
                        max = axis.x.max();

                    for (var j = 0; j < list.length; j++) {
                        var width = axis.x.rate(list[j], sum),
                            r = this.getBarElement(i, j);

                        if (isNaN(width)) continue;

                        r.attr({
                            x: startX,
                            y: startY,
                            width: width,
                            height: bar_height
                        });

                        group.append(r);

                        // 퍼센트 노출 옵션 설정
                        if (brush.showText !== false) {
                            var p = Math.round(list[j] / sum * max),
                                x = startX + width / 2,
                                y = startY + bar_height / 2 + 5,
                                text = this.drawText(p, x, y);

                            if (text != null) group.append(text);
                        }

                        // 액티브 엘리먼트 이벤트 설정
                        this.setActiveEventOption(group);

                        startX += width;
                    }

                    this.addBarElement(group);
                    g.append(group);
                });

                // 액티브 엘리먼트 설정
                this.setActiveEffectOption();

                return g;
            };
        };

        FullStackBarBrush.setup = function () {
            return {
                /** @cfg {Number} [outerPadding=15] */
                outerPadding: 15,
                /** @cfg {Boolean} [showText=false] Configures settings to let the percent text of a full stack bar revealed. */
                showText: false
            };
        };

        return FullStackBarBrush;
    }
};

/***/ }),
/* 29 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});

var _typeof = typeof Symbol === "function" && typeof Symbol.iterator === "symbol" ? function (obj) { return typeof obj; } : function (obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; };

var _core = __webpack_require__(1);

var _core2 = _interopRequireDefault(_core);

var _watch = __webpack_require__(2);

var _watch2 = _interopRequireDefault(_watch);

var _created = __webpack_require__(3);

var _created2 = _interopRequireDefault(_created);

var _mounted = __webpack_require__(6);

var _mounted2 = _interopRequireDefault(_mounted);

var _props = __webpack_require__(4);

var _props2 = _interopRequireDefault(_props);

var _propsBlock = __webpack_require__(7);

var _propsBlock2 = _interopRequireDefault(_propsBlock);

var _methods = __webpack_require__(5);

var _methods2 = _interopRequireDefault(_methods);

var _methodsBlock = __webpack_require__(8);

var _methodsBlock2 = _interopRequireDefault(_methodsBlock);

var _juijsChart = __webpack_require__(0);

var _juijsChart2 = _interopRequireDefault(_juijsChart);

var _line = __webpack_require__(10);

var _line2 = _interopRequireDefault(_line);

var _rangearea = __webpack_require__(30);

var _rangearea2 = _interopRequireDefault(_rangearea);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

_juijsChart2.default.use(_line2.default, _rangearea2.default);

exports.default = {
    name: 'graph-rangearea',
    mixins: [_core2.default, _watch2.default, _created2.default, _mounted2.default, _props2.default, _propsBlock2.default, _methods2.default, _methodsBlock2.default],
    methods: {
        convertToData: function convertToData(values) {
            var data = [];

            for (var i = 0; i < values.length; i++) {
                var row = values[i];

                if ((typeof row === 'undefined' ? 'undefined' : _typeof(row)) == 'object' && row.length == 3) {
                    data.push({
                        '0': [row[0], row[2]],
                        '1': row[1]
                    });
                }
            }

            return data;
        },
        getAxisMinAndMax: function getAxisMinAndMax() {
            var min = this.axisMin;
            var max = this.axisMax;

            if (min != max) {
                return [min, max];
            }

            return function (data) {
                return Object.values(data['0']).reduce(function (a, b) {
                    return Math.max(a, b);
                });
            };
        }
    },
    beforeMount: function beforeMount() {
        this.brushes = [{
            type: 'rangearea',
            clip: this.clip,
            colors: this.colors,
            target: '0'
        }, {
            type: 'line',
            clip: this.clip,
            colors: this.colors,
            target: '1'
        }];
    }
};

/***/ }),
/* 30 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.default = {
    name: "chart.brush.rangearea",
    extend: "chart.brush.core",
    component: function component() {
        var RangeAreaBrush = function RangeAreaBrush() {

            this.draw = function () {
                var g = this.svg.group(),
                    targets = this.brush.target,
                    datas = this.axis.data,
                    isRangeY = this.axis.y.type == "range";

                for (var i = 0; i < targets.length; i++) {
                    var p = this.svg.polygon({
                        fill: this.color(i),
                        "fill-opacity": this.chart.theme("areaBackgroundOpacity"),
                        "stroke-width": 0
                    });

                    for (var j = 0; j < datas.length; j++) {
                        var value = datas[j][targets[i]];

                        if (isRangeY) {
                            p.point(this.axis.x(j), this.axis.y(value[0]));
                        } else {
                            p.point(this.axis.x(value[0]), this.axis.y(j));
                        }
                    }

                    for (var j = datas.length - 1; j >= 0; j--) {
                        var value = datas[j][targets[i]];

                        if (isRangeY) {
                            p.point(this.axis.x(j), this.axis.y(value[1]));
                        } else {
                            p.point(this.axis.x(value[1]), this.axis.y(j));
                        }
                    }

                    g.append(p);
                }

                return g;
            };
        };

        return RangeAreaBrush;
    }
};

/***/ }),
/* 31 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});

var _main = __webpack_require__(0);

var _main2 = _interopRequireDefault(_main);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

exports.default = {
    name: "chart.brush.pie",
    extend: "chart.brush.core",
    component: function component() {
        var _ = _main2.default.include("util.base");
        var math = _main2.default.include("util.math");
        var ColorUtil = _main2.default.include("util.color");

        var PieBrush = function PieBrush() {
            var self = this,
                textY = 3;
            var preAngle = 0,
                preRate = 0,
                preOpacity = 1;
            var g,
                cache_active = {};

            this.setActiveEvent = function (items, useOpacity) {
                var isDisableAll = true,
                    disabledOpacity = this.chart.theme("pieDisableBackgroundOpacity") || 0.5;

                for (var key in items) {
                    var data = items[key];

                    if (data.active) {
                        isDisableAll = false;
                        break;
                    }
                }

                for (var key in items) {
                    var data = items[key];

                    if (data.active) {
                        var dist = this.chart.theme("pieActiveDistance"),
                            tx = Math.cos(math.radian(data.centerAngle)) * dist,
                            ty = Math.sin(math.radian(data.centerAngle)) * dist;

                        data.pie.translate(data.centerX + tx, data.centerY + ty);
                    } else {
                        data.pie.translate(data.centerX, data.centerY);
                    }

                    if (useOpacity) {
                        if (data.pie.children.length > 0) {
                            data.pie.get(0).attr({ "opacity": isDisableAll || data.active ? 1 : disabledOpacity });
                        }

                        if (data.text.children.length > 0) {
                            data.text.get(0).attr({ "opacity": isDisableAll || data.active ? 1 : disabledOpacity });
                        }
                    }
                }
            };

            this.setActiveTextEvent = function (items) {
                for (var key in items) {
                    var data = items[key],
                        dist = data.active ? this.chart.theme("pieActiveDistance") : 0,
                        cx = data.centerX + Math.cos(math.radian(data.centerAngle)) * ((data.outerRadius + dist) / 2),
                        cy = data.centerY + Math.sin(math.radian(data.centerAngle)) * ((data.outerRadius + dist) / 2);

                    if (data.text.children.length > 0) {
                        data.text.get(0).translate(cx, cy);
                    }
                }
            };

            this.getFormatText = function (target, value, max) {
                var key = target;

                if (typeof this.brush.format == "function") {
                    return this.format(key, value, max);
                } else {
                    if (!value) {
                        return key;
                    }

                    return key + ": " + this.format(value);
                }
            };

            this.drawPie = function (centerX, centerY, outerRadius, startAngle, endAngle, color) {
                var pie = this.chart.svg.group();

                if (endAngle == 360) {
                    // if pie is full size, draw a circle as pie brush
                    var circle = this.chart.svg.circle({
                        cx: centerX,
                        cy: centerY,
                        r: outerRadius,
                        fill: color,
                        stroke: this.chart.theme("pieBorderColor") || color,
                        "stroke-width": this.chart.theme("pieBorderWidth")
                    });

                    pie.append(circle);

                    return pie;
                }

                var path = this.chart.svg.path({
                    fill: color,
                    stroke: this.chart.theme("pieBorderColor") || color,
                    "stroke-width": this.chart.theme("pieBorderWidth")
                });

                // 바깥 지름 부터 그림
                var obj = math.rotate(0, -outerRadius, math.radian(startAngle)),
                    startX = obj.x,
                    startY = obj.y;

                // 시작 하는 위치로 옮김
                path.MoveTo(startX, startY);

                // outer arc 에 대한 지점 설정
                obj = math.rotate(startX, startY, math.radian(endAngle));

                pie.translate(centerX, centerY);

                // arc 그림
                path.Arc(outerRadius, outerRadius, 0, endAngle > 180 ? 1 : 0, 1, obj.x, obj.y).LineTo(0, 0).ClosePath();

                pie.append(path);
                pie.order = 1;

                return pie;
            };

            this.drawPie3d = function (centerX, centerY, outerRadius, startAngle, endAngle, color) {
                var pie = this.chart.svg.group(),
                    path = this.chart.svg.path({
                    fill: color,
                    stroke: this.chart.theme("pieBorderColor") || color,
                    "stroke-width": this.chart.theme("pieBorderWidth")
                });

                // 바깥 지름 부터 그림
                var obj = math.rotate(0, -outerRadius, math.radian(startAngle)),
                    startX = obj.x,
                    startY = obj.y;

                // 시작 하는 위치로 옮김
                path.MoveTo(startX, startY);

                // outer arc 에 대한 지점 설정
                obj = math.rotate(startX, startY, math.radian(endAngle));

                pie.translate(centerX, centerY);

                // arc 그림
                path.Arc(outerRadius, outerRadius, 0, endAngle > 180 ? 1 : 0, 1, obj.x, obj.y);

                var y = obj.y + 10,
                    x = obj.x + 5,
                    targetX = startX + 5,
                    targetY = startY + 10;

                path.LineTo(x, y);
                path.Arc(outerRadius, outerRadius, 0, endAngle > 180 ? 1 : 0, 0, targetX, targetY);
                path.ClosePath();

                pie.append(path);
                pie.order = 1;

                return pie;
            };

            this.drawText = function (centerX, centerY, centerAngle, outerRadius, text) {
                var g = this.svg.group({
                    visibility: !this.brush.showText ? "hidden" : "visible"
                }),
                    isLeft = centerAngle + 90 > 180 ? true : false;

                if (text === "" || !text) {
                    return g;
                }

                if (this.brush.showText == "inside") {
                    var cx = centerX + Math.cos(math.radian(centerAngle)) * (outerRadius / 2),
                        cy = centerY + Math.sin(math.radian(centerAngle)) * (outerRadius / 2);

                    var text = this.chart.text({
                        "font-size": this.chart.theme("pieInnerFontSize"),
                        fill: this.chart.theme("pieInnerFontColor"),
                        "text-anchor": "middle",
                        y: textY
                    }, text);

                    text.translate(cx, cy);

                    g.append(text);
                    g.order = 2;
                } else {
                    // TODO: 각도가 좁을 때, 텍스트와 라인을 보정하는 코드 개선 필요

                    var rate = this.chart.theme("pieOuterLineRate"),
                        diffAngle = Math.abs(centerAngle - preAngle);

                    if (diffAngle < 2) {
                        if (preRate == 0) {
                            preRate = rate;
                        }

                        var tick = rate * 0.05;
                        preRate -= tick;
                        preOpacity -= 0.25;
                    } else {
                        preRate = rate;
                        preOpacity = 1;
                    }

                    if (preRate > 1.2) {
                        var dist = this.chart.theme("pieOuterLineSize"),
                            r = outerRadius * preRate,
                            cx = centerX + Math.cos(math.radian(centerAngle)) * outerRadius,
                            cy = centerY + Math.sin(math.radian(centerAngle)) * outerRadius,
                            tx = centerX + Math.cos(math.radian(centerAngle)) * r,
                            ty = centerY + Math.sin(math.radian(centerAngle)) * r,
                            ex = isLeft ? tx - dist : tx + dist;

                        var path = this.svg.path({
                            fill: "transparent",
                            stroke: this.chart.theme("pieOuterLineColor"),
                            "stroke-width": this.chart.theme("pieOuterLineWidth"),
                            "stroke-opacity": preOpacity
                        });

                        path.MoveTo(cx, cy).LineTo(tx, ty).LineTo(ex, ty);

                        var text = this.chart.text({
                            "font-size": this.chart.theme("pieOuterFontSize"),
                            "fill": this.chart.theme("pieOuterFontColor"),
                            "fill-opacity": preOpacity,
                            "text-anchor": isLeft ? "end" : "start",
                            y: textY
                        }, text);

                        text.translate(ex + (isLeft ? -3 : 3), ty);

                        g.append(text);
                        g.append(path);
                        g.order = 0;

                        preAngle = centerAngle;
                    }
                }

                return g;
            };

            this.drawUnit = function (index, data, g) {
                var props = this.getProperty(index),
                    centerX = props.centerX,
                    centerY = props.centerY,
                    outerRadius = props.outerRadius;

                var target = this.brush.target,
                    active = this.brush.active,
                    all = 360,
                    startAngle = 0,
                    max = 0;

                for (var i = 0; i < target.length; i++) {
                    max += data[target[i]];
                }

                for (var i = 0; i < target.length; i++) {
                    if (data[target[i]] == 0) continue;

                    var value = data[target[i]],
                        endAngle = all * (value / max);

                    if (this.brush['3d']) {
                        var pie3d = this.drawPie3d(centerX, centerY, outerRadius, startAngle, endAngle, ColorUtil.darken(this.color(i), 0.5));
                        g.append(pie3d);
                    }

                    startAngle += endAngle;
                }

                startAngle = 0;

                for (var i = 0; i < target.length; i++) {
                    var value = data[target[i]],
                        endAngle = all * (value / max),
                        centerAngle = startAngle + endAngle / 2 - 90,
                        isOnlyOne = Math.abs(startAngle - endAngle) == 360,
                        pie = this.drawPie(centerX, centerY, outerRadius, startAngle, endAngle, this.color(i)),
                        text = this.drawText(centerX, centerY, centerAngle, outerRadius, this.getFormatText(target[i], value, max));

                    // 파이 액티브상태 캐싱하는 객체
                    cache_active[centerAngle] = {
                        active: false,
                        pie: pie,
                        text: text,
                        centerX: centerX,
                        centerY: centerY,
                        centerAngle: centerAngle,
                        outerRadius: outerRadius
                    };

                    // TODO: 파이가 한개일 경우, 액티브 처리를 할 필요가 없다.
                    if (!isOnlyOne) {
                        // 설정된 키 활성화
                        if (active == target[i] || _.inArray(target[i], active) != -1) {
                            cache_active[centerAngle].active = true;
                        } else {
                            cache_active[centerAngle].active = false;
                        }

                        // 파이 및 텍스트 액티브 상태 처리
                        if (this.brush.showText == "inside") {
                            this.setActiveTextEvent(cache_active);
                        }

                        // 파이 및 텍스트 액티브 상태 처리
                        this.setActiveEvent(cache_active, true);

                        // 활성화 이벤트 설정
                        if (this.brush.activeEvent != null) {
                            (function (p, t, cx, cy, ca, r) {
                                p.on(self.brush.activeEvent, function (e) {
                                    if (!cache_active[ca].active) {
                                        cache_active[ca].active = true;
                                    } else {
                                        cache_active[ca].active = false;
                                    }

                                    if (self.brush.showText == "inside") {
                                        self.setActiveTextEvent(cache_active);
                                    }

                                    self.setActiveEvent(cache_active, true);
                                });

                                p.attr({ cursor: "pointer" });
                            })(pie, text.get(0), centerX, centerY, centerAngle, outerRadius);
                        }
                    }

                    self.addEvent(pie, index, i);
                    g.append(pie);
                    g.append(text);

                    startAngle += endAngle;
                }
            };

            this.drawNoData = function (g) {
                var props = this.getProperty(0);

                g.append(this.drawPie(props.centerX, props.centerY, props.outerRadius, 0, 360, this.chart.theme("pieNoDataBackgroundColor")));
            };

            this.drawBefore = function () {
                g = this.chart.svg.group();
            };

            this.draw = function () {
                if (this.listData().length == 0) {
                    this.drawNoData(g);
                } else {
                    this.eachData(function (data, i) {
                        this.drawUnit(i, data, g);
                    });
                }

                return g;
            };

            this.getProperty = function (index) {
                var obj = this.axis.c(index);

                var width = obj.width,
                    height = obj.height,
                    x = obj.x,
                    y = obj.y,
                    min = width;

                if (height < min) {
                    min = height;
                }

                return {
                    centerX: width / 2 + x,
                    centerY: height / 2 + y,
                    outerRadius: min / 2
                };
            };
        };

        PieBrush.setup = function () {
            return {
                /** @cfg {Boolean} [clip=false] If the brush is drawn outside of the chart, cut the area. */
                clip: false,
                /** @cfg {String} [showText=null] Set the text appear. (outside or inside)  */
                showText: null,
                /** @cfg {Function} [format=null] Returns a value from the format callback function of a defined option. */
                format: null,
                /** @cfg {Boolean} [3d=false] check 3d support */
                "3d": false,
                /** @cfg {String|Array} [active=null] Activates the pie of an applicable property's name. */
                active: null,
                /** @cfg {String} [activeEvent=null]  Activates the pie in question when a configured event occurs (click, mouseover, etc). */
                activeEvent: null
            };
        };

        return PieBrush;
    }
};

/***/ }),
/* 32 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.default = {
    name: "util.canvas.base",
    extend: null,
    component: function component() {
        var CanvasBase = function CanvasBase(context) {
            this.clearContext = function () {
                context.clearRect(0, 0, context.canvas.width, context.canvas.height);
            };

            this.drawLine = function (x1, y1, x2, y2, color) {
                var lineWidth = arguments.length > 5 && arguments[5] !== undefined ? arguments[5] : 1;

                color = color || '#434d6b';
                context.beginPath();
                context.moveTo(x1, y1);
                context.lineTo(x2, y2);
                context.lineWidth = lineWidth;
                context.strokeStyle = color;
                context.stroke();
            };

            this.drawCurve = function (points, minY, maxY) {
                var tension = arguments.length > 3 && arguments[3] !== undefined ? arguments[3] : 0.5;
                var isClosed = arguments.length > 4 && arguments[4] !== undefined ? arguments[4] : false;
                var numOfSegments = arguments.length > 5 && arguments[5] !== undefined ? arguments[5] : 16;

                context.beginPath();
                var pts = points.reduce(function (prev, e) {
                    prev.push(e[0], e[1]);
                    return prev;
                }, []);
                var ptsa = getCurvePoints(pts, minY, maxY, tension, isClosed, numOfSegments);
                context.moveTo(ptsa[0], ptsa[1]);
                for (var i = 2; i < ptsa.length - 1; i += 2) {
                    context.lineTo(ptsa[i], ptsa[i + 1]);
                }
            };

            this.drawDashedLine = function (x1, y1, x2, y2, color) {
                var dash = arguments.length > 5 && arguments[5] !== undefined ? arguments[5] : [3, 3];
                var lineWidth = arguments.length > 6 && arguments[6] !== undefined ? arguments[6] : 1;

                color = color || '#434d6b';
                context.beginPath();
                context.moveTo(x1, y1);
                context.lineTo(x2, y2);
                context.lineWidth = lineWidth;
                context.strokeStyle = color;
                var originDash = context.getLineDash();
                context.setLineDash(dash);
                context.stroke();
                context.setLineDash(originDash);
            };

            this.drawLines = function (color) {
                color = color || '#434d6b';
                context.beginPath();

                for (var _len = arguments.length, pos = Array(_len > 1 ? _len - 1 : 0), _key = 1; _key < _len; _key++) {
                    pos[_key - 1] = arguments[_key];
                }

                context.moveTo(pos[0][0], pos[0][1]);
                pos.slice(1).map(function (e) {
                    return context.lineTo(e[0], e[1]);
                });
                context.lineWidth = 1;
                context.strokeStyle = color;
                context.stroke();
            };

            this.drawRoundRect = function (x, y, width, height, radius) {
                context.beginPath();
                context.moveTo(x, y + radius);

                // left line
                context.lineTo(x, y + height - radius);
                context.arcTo(x, y + height, x + radius, y + height, radius);

                // bottom line
                context.lineTo(x + width - radius, y + height);
                context.arcTo(x + width, y + height, x + width, y + height - radius, radius);

                // right line
                context.lineTo(x + width, y + radius);
                context.arcTo(x + width, y, x + width - radius, y, radius);

                // top line
                context.lineTo(x + radius, y);
                context.arcTo(x, y, x, y + radius, radius);

                context.closePath();
            };

            this.drawFreeRect = function (x1, y1, x2, y2, x3, y3, x4, y4, color) {
                var borderColor = arguments.length > 9 && arguments[9] !== undefined ? arguments[9] : null;

                color = color || '#ffffff';
                context.beginPath();
                context.moveTo(x1, y1);
                context.lineTo(x2, y2);
                context.lineTo(x3, y3);
                context.lineTo(x4, y4);
                context.closePath();
                context.fillStyle = color;
                if (borderColor != null) {
                    context.lineWidth = 2;
                    context.strokeStyle = borderColor;
                    context.stroke();
                }
                context.fill();
            };

            this.drawFreeRectStroke = function (x1, y1, x2, y2, x3, y3, x4, y4, color) {
                color = color || '#ffffff';
                context.beginPath();
                context.moveTo(x1, y1);
                context.lineTo(x2, y2);
                context.lineTo(x3, y3);
                context.lineTo(x4, y4);
                context.lineWidth = 1;
                context.strokeStyle = color;
                context.stroke();
            };

            this.drawTriangle = function (x1, y1, d, color) {
                color = color || '#ffffff';
                context.beginPath();
                context.moveTo(x1, y1 - d);
                context.lineTo(x1 - d, y1 + d);
                context.lineTo(x1 + d, y1 + d);
                context.closePath();
                context.fillStyle = color;
                context.fill();
            };

            this.drawSquare = function (x1, y1, d, color) {
                color = color || '#ffffff';
                context.beginPath();
                context.moveTo(x1 - d, y1 - d);
                context.lineTo(x1 - d, y1 + d);
                context.lineTo(x1 + d, y1 + d);
                context.lineTo(x1 + d, y1 - d);
                context.closePath();
                context.fillStyle = color;
                context.fill();
            };

            this.drawPage = function (value, x1, y1, color) {
                var border = arguments.length > 4 && arguments[4] !== undefined ? arguments[4] : false;

                drawFreeRect(context, value + x1, y1, value + x1 - 20, y1 + 14, value + x1 - 20, y1 + 52, value + x1, y1 + 38, color, border ? 'rgba(255,255,255,0.2)' : null);
            };

            this.drawCircle = function (x, y, d, color) {
                color = color || 'white';
                d = d || 1;
                context.beginPath();
                context.arc(x, y, d, 0, 2 * Math.PI);
                context.fillStyle = color;
                context.fill();
            };

            this.drawBullet = function (x, y) {
                var width = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : 74;

                var grd = context.createLinearGradient(x, y, x + width, y);
                grd.addColorStop(0, '#1074fc');
                grd.addColorStop(1, 'rgba(37, 172, 254, 0)');

                context.beginPath();
                context.arc(x, y, 2, Math.PI / 2, Math.PI / 2 * 3);
                context.lineTo(x + width, y - 2);
                context.lineTo(x + width, y + 2);
                context.closePath();
                context.fillStyle = grd;
                context.fill();
                context.fillStyle = grd;
            };

            this.getCurvePoints = function (pts, minY, maxY) {
                var tension = arguments.length > 3 && arguments[3] !== undefined ? arguments[3] : 0.5;
                var isClosed = arguments.length > 4 && arguments[4] !== undefined ? arguments[4] : false;
                var numOfSegments = arguments.length > 5 && arguments[5] !== undefined ? arguments[5] : 16;

                var _pts = [],
                    res = [],
                    // clone array
                x,
                    y,
                    // our x,y coords
                t1x,
                    t2x,
                    t1y,
                    t2y,
                    // tension vectors
                c1,
                    c2,
                    c3,
                    c4,
                    // cardinal points
                st,
                    t,
                    i; // steps based on num. of segments

                // clone array so we don't change the original
                _pts = pts.slice(0);

                // The algorithm require a previous and next point to the actual point array.
                // Check if we will draw closed or open curve.
                // If closed, copy end points to beginning and first points to end
                // If open, duplicate first points to befinning, end points to end
                if (isClosed) {
                    _pts.unshift(pts[pts.length - 1]);
                    _pts.unshift(pts[pts.length - 2]);
                    _pts.unshift(pts[pts.length - 1]);
                    _pts.unshift(pts[pts.length - 2]);
                    _pts.push(pts[0]);
                    _pts.push(pts[1]);
                } else {
                    _pts.unshift(pts[1]); //copy 1. point and insert at beginning
                    _pts.unshift(pts[0]);
                    _pts.push(pts[pts.length - 2]); //copy last point and append
                    _pts.push(pts[pts.length - 1]);
                }

                // ok, lets start..

                // 1. loop goes through point array
                // 2. loop goes through each segment between the 2 pts + 1e point before and after
                for (i = 2; i < _pts.length - 4; i += 2) {
                    for (t = 0; t <= numOfSegments; t++) {

                        // calc tension vectors
                        t1x = (_pts[i + 2] - _pts[i - 2]) * tension;
                        t2x = (_pts[i + 4] - _pts[i]) * tension;

                        t1y = (_pts[i + 3] - _pts[i - 1]) * tension;
                        t2y = (_pts[i + 5] - _pts[i + 1]) * tension;

                        // calc step
                        st = t / numOfSegments;

                        // calc cardinals
                        c1 = 2 * Math.pow(st, 3) - 3 * Math.pow(st, 2) + 1;
                        c2 = -(2 * Math.pow(st, 3)) + 3 * Math.pow(st, 2);
                        c3 = Math.pow(st, 3) - 2 * Math.pow(st, 2) + st;
                        c4 = Math.pow(st, 3) - Math.pow(st, 2);

                        // calc x and y cords with common control vectors
                        x = c1 * _pts[i] + c2 * _pts[i + 2] + c3 * t1x + c4 * t2x;
                        y = c1 * _pts[i + 1] + c2 * _pts[i + 3] + c3 * t1y + c4 * t2y;

                        //store points in array
                        res.push(x);
                        if (y > maxY) res.push(maxY);else if (y < minY) res.push(minY);else res.push(y);
                    }
                }

                return res;
            };
        };

        return CanvasBase;
    }
};

/***/ }),
/* 33 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.default = {
    name: "util.canvas.base.kinetic",
    extend: null,
    component: function component() {
        var KineticObject = function KineticObject() {
            this.mass = 10;
            this.friction = 0.1;
            this.pos = [0, 0];
            this.veloc = [0, 0];
            this.accel = [0, 0];

            this.force = function (f) {
                this.accel = [this.accel[0] + f[0] / this.mass, this.accel[1] + f[1] / this.mass];
            };

            this.accelScalar = function () {
                return Math.sqrt(this.accel[0] * this.accel[0] + this.accel[1] * this.accel[1]);
            };

            this.velocScalar = function () {
                return Math.sqrt(this.veloc[0] * this.veloc[0] + this.veloc[1] * this.veloc[1]);
            };

            this.velocityForce = function () {
                var xDir = this.veloc[0] < 0 ? -1 : 1;
                var yDir = this.veloc[1] < 0 ? -1 : 1;
                return [xDir * 0.5 * this.mass * this.veloc[0] * this.veloc[0], yDir * 0.5 * this.mass * this.veloc[1] * this.veloc[1]];
            };

            this.distancePos = function (pos) {
                return Math.sqrt(Math.pow(this.pos[0] - pos[0], 2) + Math.pow(this.pos[1] - pos[1], 2));
            };

            this.distance = function (other) {
                return this.distancePos(other.pos);
            };

            this.direction = function (pos) {
                var distance = this.distancePos(pos);
                if (distance == 0) return [0, 0];
                return [(this.pos[0] - pos[0]) / distance, (this.pos[1] - pos[1]) / distance];
            };

            this.speed = function () {
                return Math.sqrt(Math.pow(this.veloc[0], 2) + Math.pow(this.veloc[1], 2));
            };

            this.update = function () {
                this.veloc = [this.veloc[0] + this.accel[0], this.veloc[1] + this.accel[1]];

                var x = this.pos[0];
                var y = this.pos[1];

                if (Math.abs(this.veloc[0]) > 2) {
                    x = this.pos[0] + this.veloc[0];
                }
                if (Math.abs(this.veloc[1]) > 2) {
                    y = this.pos[1] + this.veloc[1];
                }

                this.pos = [x, y];
                this.accel = [0, 0];
            };

            this.draw = function (context, n) {};
        };

        return KineticObject;
    }
};

/***/ }),
/* 34 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _main = __webpack_require__(35);

var _main2 = _interopRequireDefault(_main);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

if (typeof window !== 'undefined' && window.Vue) {
    window.Vue.use(_main2.default);
} /* bundling type : vue-graph + juijs */

/***/ }),
/* 35 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});

var _bar = __webpack_require__(23);

var _bar2 = _interopRequireDefault(_bar);

var _bar3d = __webpack_require__(44);

var _bar3d2 = _interopRequireDefault(_bar3d);

var _stackbar = __webpack_require__(46);

var _stackbar2 = _interopRequireDefault(_stackbar);

var _rangebar = __webpack_require__(49);

var _rangebar2 = _interopRequireDefault(_rangebar);

var _line = __webpack_require__(16);

var _line2 = _interopRequireDefault(_line);

var _line3d = __webpack_require__(52);

var _line3d2 = _interopRequireDefault(_line3d);

var _lineDateblock = __webpack_require__(54);

var _lineDateblock2 = _interopRequireDefault(_lineDateblock);

var _lineTimerange = __webpack_require__(55);

var _lineTimerange2 = _interopRequireDefault(_lineTimerange);

var _scatter = __webpack_require__(56);

var _scatter2 = _interopRequireDefault(_scatter);

var _bubble = __webpack_require__(58);

var _bubble2 = _interopRequireDefault(_bubble);

var _area = __webpack_require__(14);

var _area2 = _interopRequireDefault(_area);

var _areaDateblock = __webpack_require__(61);

var _areaDateblock2 = _interopRequireDefault(_areaDateblock);

var _areaTimerange = __webpack_require__(62);

var _areaTimerange2 = _interopRequireDefault(_areaTimerange);

var _rangearea = __webpack_require__(29);

var _rangearea2 = _interopRequireDefault(_rangearea);

var _rangeareaDateblock = __webpack_require__(63);

var _rangeareaDateblock2 = _interopRequireDefault(_rangeareaDateblock);

var _rangeareaTimerange = __webpack_require__(64);

var _rangeareaTimerange2 = _interopRequireDefault(_rangeareaTimerange);

var _pie = __webpack_require__(65);

var _pie2 = _interopRequireDefault(_pie);

var _comparisonbar = __webpack_require__(67);

var _comparisonbar2 = _interopRequireDefault(_comparisonbar);

var _comparisonarea = __webpack_require__(68);

var _comparisonarea2 = _interopRequireDefault(_comparisonarea);

var _treemap = __webpack_require__(69);

var _treemap2 = _interopRequireDefault(_treemap);

var _equalizer = __webpack_require__(71);

var _equalizer2 = _interopRequireDefault(_equalizer);

var _activebubble = __webpack_require__(75);

var _activebubble2 = _interopRequireDefault(_activebubble);

var _bubblecloud = __webpack_require__(78);

var _bubblecloud2 = _interopRequireDefault(_bubblecloud);

var _note = __webpack_require__(81);

var _note2 = _interopRequireDefault(_note);

var _tooltip = __webpack_require__(82);

var _tooltip2 = _interopRequireDefault(_tooltip);

var _guideline = __webpack_require__(83);

var _guideline2 = _interopRequireDefault(_guideline);

var _legends = __webpack_require__(84);

var _legends2 = _interopRequireDefault(_legends);

var _rotate3d = __webpack_require__(85);

var _rotate3d2 = _interopRequireDefault(_rotate3d);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

exports.default = {
    install: function install(Vue, options) {
        // 1. 브러쉬 추가 영역
        Vue.component(_bar2.default.name, _bar2.default);
        Vue.component(_bar3d2.default.name, _bar3d2.default);
        Vue.component(_stackbar2.default.name, _stackbar2.default);
        Vue.component(_rangebar2.default.name, _rangebar2.default);
        Vue.component(_line2.default.name, _line2.default);
        Vue.component(_line3d2.default.name, _line3d2.default);
        Vue.component(_lineDateblock2.default.name, _lineDateblock2.default);
        Vue.component(_lineTimerange2.default.name, _lineTimerange2.default);
        Vue.component(_scatter2.default.name, _scatter2.default);
        Vue.component(_bubble2.default.name, _bubble2.default);
        Vue.component(_area2.default.name, _area2.default);
        Vue.component(_areaDateblock2.default.name, _areaDateblock2.default);
        Vue.component(_areaTimerange2.default.name, _areaTimerange2.default);
        Vue.component(_rangearea2.default.name, _rangearea2.default);
        Vue.component(_rangeareaDateblock2.default.name, _rangeareaDateblock2.default);
        Vue.component(_rangeareaTimerange2.default.name, _rangeareaTimerange2.default);
        Vue.component(_pie2.default.name, _pie2.default);
        Vue.component(_comparisonbar2.default.name, _comparisonbar2.default);
        Vue.component(_comparisonarea2.default.name, _comparisonarea2.default);
        Vue.component(_treemap2.default.name, _treemap2.default);
        Vue.component(_equalizer2.default.name, _equalizer2.default);
        Vue.component(_activebubble2.default.name, _activebubble2.default);
        Vue.component(_bubblecloud2.default.name, _bubblecloud2.default);

        // 2. 위젯 추가 영역
        Vue.component(_note2.default.name, _note2.default);
        Vue.component(_tooltip2.default.name, _tooltip2.default);
        Vue.component(_guideline2.default.name, _guideline2.default);
        Vue.component(_legends2.default.name, _legends2.default);
        Vue.component(_rotate3d2.default.name, _rotate3d2.default);
    }
};

/***/ }),
/* 36 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});

var _typeof2 = typeof Symbol === "function" && typeof Symbol.iterator === "symbol" ? function (obj) { return typeof obj; } : function (obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; };

var _typeof = typeof Symbol === "function" && _typeof2(Symbol.iterator) === "symbol" ? function (obj) {
    return typeof obj === "undefined" ? "undefined" : _typeof2(obj);
} : function (obj) {
    return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj === "undefined" ? "undefined" : _typeof2(obj);
};

var global$1 = {},
    globalFunc = {},
    globalClass = {};

/**
 * @class util.base
 *
 * jui 에서 공통적으로 사용하는 유틸리티 함수 모음
 *
 * ```
 * var _ = jui.include("util.base");
 *
 * console.warn(_.browser.webkit);
 * ```
 *
 * @singleton
 */
var utility = global$1["util.base"] = {

    /**
     * @property browser check browser agent
     * @property {Boolean} browser.webkit  Webkit 브라우저 체크
     * @property {Boolean} browser.mozilla  Mozilla 브라우저 체크
     * @property {Boolean} browser.msie  IE 브라우저 체크 */
    browser: {
        webkit: 'WebkitAppearance' in document.documentElement.style ? true : false,
        mozilla: typeof window.mozInnerScreenX != "undefined" ? true : false,
        msie: window.navigator.userAgent.indexOf("Trident") != -1 ? true : false
    },

    /**
     * @property {Boolean} isTouch
     * check touch device
     */
    isTouch: /Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(window.navigator.userAgent),

    /**
     * @method inherit
     *
     * 프로토타입 기반의 상속 제공
     *
     * @param {Function} ctor base Class
     * @param {Function} superCtor super Class
     */
    inherit: function inherit(ctor, superCtor) {
        if (!this.typeCheck("function", ctor) || !this.typeCheck("function", superCtor)) return;

        ctor.parent = superCtor;
        ctor.prototype = new superCtor();
        ctor.prototype.constructor = ctor;
        ctor.prototype.parent = ctor.prototype;

        /**
         * @method super
         * call parent method
         * @param {String} method  parent method name
         * @param {Array} args
         * @returns {Mixed}
         */
        ctor.prototype.super = function (method, args) {
            return this.constructor.prototype[method].apply(this, args);
        };
    },

    /**
     * @method extend
     *
     * implements object extend
     *
     * @param {Object|Function} origin
     * @param {Object|Function} add
     * @param {Boolean} skip
     * @return {Object}
     */
    extend: function extend(origin, add, skip) {
        if (!this.typeCheck(["object", "function"], origin)) origin = {};
        if (!this.typeCheck(["object", "function"], add)) return origin;

        for (var key in add) {
            if (skip === true) {
                if (isRecursive(origin[key])) {
                    this.extend(origin[key], add[key], skip);
                } else if (this.typeCheck("undefined", origin[key])) {
                    origin[key] = add[key];
                }
            } else {
                if (isRecursive(origin[key])) {
                    this.extend(origin[key], add[key], skip);
                } else {
                    origin[key] = add[key];
                }
            }
        }

        function isRecursive(value) {
            return utility.typeCheck("object", value);
        }

        return origin;
    },

    /**
     * convert px to integer
     * @param {String or Number} px
     * @return {Number}
     */
    pxToInt: function pxToInt(px) {
        if (this.typeCheck("string", px) && px.indexOf("px") != -1) {
            return parseInt(px.split("px").join(""));
        }

        return px;
    },

    /**
     * @method clone
     * implements object clone
     * @param {Array/Object} obj 복사할 객체
     * @return {Array}
     */
    clone: function clone(obj) {
        var clone = this.typeCheck("array", obj) ? [] : {};

        for (var i in obj) {
            if (this.typeCheck("object", obj[i])) clone[i] = this.clone(obj[i]);else clone[i] = obj[i];
        }

        return clone;
    },

    /**
     * @method deepClone
     * implements object deep clone
     * @param obj
     * @param emit
     * @return {*}
     */
    deepClone: function deepClone(obj, emit) {
        var value = null;
        emit = emit || {};

        if (this.typeCheck("array", obj)) {
            value = new Array(obj.length);

            for (var i = 0, len = obj.length; i < len; i++) {
                value[i] = this.deepClone(obj[i], emit);
            }
        } else if (this.typeCheck("date", obj)) {
            value = obj;
        } else if (this.typeCheck("object", obj)) {
            value = {};

            for (var key in obj) {
                if (emit[key]) {
                    value[key] = obj[key];
                } else {
                    value[key] = this.deepClone(obj[key], emit);
                }
            }
        } else {
            value = obj;
        }

        return value;
    },

    /**
     * @method runtime
     *
     * caculate callback runtime
     *
     * @param {String} name
     * @param {Function} callback
     */
    runtime: function runtime(name, callback) {
        var nStart = new Date().getTime();
        callback();
        var nEnd = new Date().getTime();

        console.warn(name + " : " + (nEnd - nStart) + "ms");
    },

    /**
     * @method resize
     * add event in window resize event
     * @param {Function} callback
     * @param {Number} ms delay time
     */
    resize: function resize(callback, ms) {
        var after_resize = function () {
            var timer = 0;

            return function () {
                clearTimeout(timer);
                timer = setTimeout(callback, ms);
            };
        }();

        if (window.addEventListener) {
            window.addEventListener("resize", after_resize);
        } else if (object.attachEvent) {
            window.attachEvent("onresize", after_resize);
        } else {
            window["onresize"] = after_resize;
        }
    },

    /**
     * @method typeCheck
     * check data  type
     * @param {String} t  type string
     * @param {Object} v value object
     * @return {Boolean}
     */
    typeCheck: function typeCheck(t, v) {
        function check(type, value) {
            if (typeof type != "string") return false;

            if (type == "string") {
                return typeof value == "string";
            } else if (type == "integer") {
                return typeof value == "number" && value % 1 == 0;
            } else if (type == "float") {
                return typeof value == "number" && value % 1 != 0;
            } else if (type == "number") {
                return typeof value == "number";
            } else if (type == "boolean") {
                return typeof value == "boolean";
            } else if (type == "undefined") {
                return typeof value == "undefined";
            } else if (type == "null") {
                return value === null;
            } else if (type == "array") {
                return value instanceof Array;
            } else if (type == "date") {
                return value instanceof Date;
            } else if (type == "function") {
                return typeof value == "function";
            } else if (type == "object") {
                // typeCheck에 정의된 타입일 경우에는 object 체크시 false를 반환 (date, array, null)
                return (typeof value === "undefined" ? "undefined" : _typeof(value)) == "object" && value !== null && !(value instanceof Array) && !(value instanceof Date) && !(value instanceof RegExp);
            }

            return false;
        }

        if ((typeof t === "undefined" ? "undefined" : _typeof(t)) == "object" && t.length) {
            var typeList = t;

            for (var i = 0; i < typeList.length; i++) {
                if (check(typeList[i], v)) return true;
            }

            return false;
        } else {
            return check(t, v);
        }
    },
    typeCheckObj: function typeCheckObj(uiObj, list) {
        if ((typeof uiObj === "undefined" ? "undefined" : _typeof(uiObj)) != "object") return;
        var self = this;

        for (var key in uiObj) {
            var func = uiObj[key];

            if (typeof func == "function") {
                (function (funcName, funcObj) {
                    uiObj[funcName] = function () {
                        var args = arguments,
                            params = list[funcName];

                        for (var i = 0; i < args.length; i++) {
                            if (!self.typeCheck(params[i], args[i])) {
                                throw new Error("JUI_CRITICAL_ERR: the " + i + "th parameter is not a " + params[i] + " (" + name + ")");
                            }
                        }

                        return funcObj.apply(this, args);
                    };
                })(key, func);
            }
        }
    },

    /**
     * @method dateFormat
     *
     * implements date format function
     *
     * yyyy : 4 digits year
     * yy : 2 digits year
     * y : 1 digit year
     *
     * @param {Date} date
     * @param {String} format   date format string
     * @param utc
     * @return {string}
     */
    dateFormat: function dateFormat(date, format, utc) {
        var MMMM = ["\x00", "January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"];
        var MMM = ["\x01", "Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"];
        var dddd = ["\x02", "Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];
        var ddd = ["\x03", "Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"];

        function ii(i, len) {
            var s = i + "";
            len = len || 2;
            while (s.length < len) {
                s = "0" + s;
            }return s;
        }

        var y = utc ? date.getUTCFullYear() : date.getFullYear();
        format = format.replace(/(^|[^\\])yyyy+/g, "$1" + y);
        format = format.replace(/(^|[^\\])yy/g, "$1" + y.toString().substr(2, 2));
        format = format.replace(/(^|[^\\])y/g, "$1" + y);

        var M = (utc ? date.getUTCMonth() : date.getMonth()) + 1;
        format = format.replace(/(^|[^\\])MMMM+/g, "$1" + MMMM[0]);
        format = format.replace(/(^|[^\\])MMM/g, "$1" + MMM[0]);
        format = format.replace(/(^|[^\\])MM/g, "$1" + ii(M));
        format = format.replace(/(^|[^\\])M/g, "$1" + M);

        var d = utc ? date.getUTCDate() : date.getDate();
        format = format.replace(/(^|[^\\])dddd+/g, "$1" + dddd[0]);
        format = format.replace(/(^|[^\\])ddd/g, "$1" + ddd[0]);
        format = format.replace(/(^|[^\\])dd/g, "$1" + ii(d));
        format = format.replace(/(^|[^\\])d/g, "$1" + d);

        var H = utc ? date.getUTCHours() : date.getHours();
        format = format.replace(/(^|[^\\])HH+/g, "$1" + ii(H));
        format = format.replace(/(^|[^\\])H/g, "$1" + H);

        var h = H > 12 ? H - 12 : H == 0 ? 12 : H;
        format = format.replace(/(^|[^\\])hh+/g, "$1" + ii(h));
        format = format.replace(/(^|[^\\])h/g, "$1" + h);

        var m = utc ? date.getUTCMinutes() : date.getMinutes();
        format = format.replace(/(^|[^\\])mm+/g, "$1" + ii(m));
        format = format.replace(/(^|[^\\])m/g, "$1" + m);

        var s = utc ? date.getUTCSeconds() : date.getSeconds();
        format = format.replace(/(^|[^\\])ss+/g, "$1" + ii(s));
        format = format.replace(/(^|[^\\])s/g, "$1" + s);

        var f = utc ? date.getUTCMilliseconds() : date.getMilliseconds();
        format = format.replace(/(^|[^\\])fff+/g, "$1" + ii(f, 3));
        f = Math.round(f / 10);
        format = format.replace(/(^|[^\\])ff/g, "$1" + ii(f));
        f = Math.round(f / 10);
        format = format.replace(/(^|[^\\])f/g, "$1" + f);

        var T = H < 12 ? "AM" : "PM";
        format = format.replace(/(^|[^\\])TT+/g, "$1" + T);
        format = format.replace(/(^|[^\\])T/g, "$1" + T.charAt(0));

        var t = T.toLowerCase();
        format = format.replace(/(^|[^\\])tt+/g, "$1" + t);
        format = format.replace(/(^|[^\\])t/g, "$1" + t.charAt(0));

        var tz = -date.getTimezoneOffset();
        var K = utc || !tz ? "Z" : tz > 0 ? "+" : "-";
        if (!utc) {
            tz = Math.abs(tz);
            var tzHrs = Math.floor(tz / 60);
            var tzMin = tz % 60;
            K += ii(tzHrs) + ":" + ii(tzMin);
        }
        format = format.replace(/(^|[^\\])K/g, "$1" + K);

        var day = (utc ? date.getUTCDay() : date.getDay()) + 1;
        format = format.replace(new RegExp(dddd[0], "g"), dddd[day]);
        format = format.replace(new RegExp(ddd[0], "g"), ddd[day]);

        format = format.replace(new RegExp(MMMM[0], "g"), MMMM[M]);
        format = format.replace(new RegExp(MMM[0], "g"), MMM[M]);

        format = format.replace(/\\(.)/g, "$1");

        return format;
    },
    /**
     * @method createId
     *
     * 유니크 아이디 생성
     *
     * @param {String} key  prefix string
     * @return {String} 생성된 아이디 문자열
     */
    createId: function createId(key) {
        return [key || "id", +new Date(), Math.round(Math.random() * 100) % 100].join("-");
    },

    /**
     * implement async loop without blocking ui
     *
     * @param total
     * @param context
     * @returns {Function}
     */
    timeLoop: function timeLoop(total, context) {

        return function (callback, lastCallback) {
            function TimeLoopCallback(i) {

                if (i < 1) return;

                if (i == 1) {
                    callback.call(context, i);
                    lastCallback.call(context);
                } else {
                    setTimeout(function () {
                        if (i > -1) callback.call(context, i--);
                        if (i > -1) TimeLoopCallback(i);
                    }, 1);
                }
            }

            TimeLoopCallback(total);
        };
    },
    /**
     * @method loop
     *
     * 최적화된 루프 생성 (5단계로 나눔)
     *
     * @param {Number} total
     * @param {Object} [context=null]
     * @return {Function} 최적화된 루프 콜백 (index, groupIndex 2가지 파라미터를 받는다.)
     */
    loop: function loop(total, context) {
        var start = 0,
            end = total,
            unit = Math.ceil(total / 5);

        return function (callback) {
            var first = start,
                second = unit * 1,
                third = unit * 2,
                fourth = unit * 3,
                fifth = unit * 4,
                firstMax = second,
                secondMax = third,
                thirdMax = fourth,
                fourthMax = fifth,
                fifthMax = end;

            while (first < firstMax && first < end) {
                callback.call(context, first, 1);
                first++;

                if (second < secondMax && second < end) {
                    callback.call(context, second, 2);
                    second++;
                }
                if (third < thirdMax && third < end) {
                    callback.call(context, third, 3);
                    third++;
                }
                if (fourth < fourthMax && fourth < end) {
                    callback.call(context, fourth, 4);
                    fourth++;
                }
                if (fifth < fifthMax && fifth < end) {
                    callback.call(context, fifth, 5);
                    fifth++;
                }
            }
        };
    },

    /**
     * @method loopArray
     *
     * 배열을 사용해서 최적화된 루프로 생성한다.
     *
     *
     * @param {Array} data 루프로 생성될 배열
     * @param {Object} [context=null]
     * @return {Function} 최적화된 루프 콜백 (data, index, groupIndex 3가지 파라미터를 받는다.)
     */
    loopArray: function loopArray(data, context) {
        var total = data.length,
            start = 0,
            end = total,
            unit = Math.ceil(total / 5);

        return function (callback) {
            var first = start,
                second = unit * 1,
                third = unit * 2,
                fourth = unit * 3,
                fifth = unit * 4,
                firstMax = second,
                secondMax = third,
                thirdMax = fourth,
                fourthMax = fifth,
                fifthMax = end;

            while (first < firstMax && first < end) {
                callback.call(context, data[first], first, 1);
                first++;
                if (second < secondMax && second < end) {
                    callback.call(context, data[second], second, 2);
                    second++;
                }
                if (third < thirdMax && third < end) {
                    callback.call(context, data[third], third, 3);
                    third++;
                }
                if (fourth < fourthMax && fourth < end) {
                    callback.call(context, data[fourth], fourth, 4);
                    fourth++;
                }
                if (fifth < fifthMax && fifth < end) {
                    callback.call(context, data[fifth], fifth, 5);
                    fifth++;
                }
            }
        };
    },

    /**
     * @method startsWith
     * Check that it matches the starting string search string.
     *
     * @param {String} string
     * @param {String} searchString
     * @return {Integer} position
     */
    startsWith: function startsWith(string, searchString, position) {
        position = position || 0;

        return string.lastIndexOf(searchString, position) === position;
    },

    /**
     * @method endsWith
     * Check that it matches the end of a string search string.
     *
     * @param {String} string
     * @param {String} searchString
     * @return {Integer} position
     */
    endsWith: function endsWith(string, searchString, position) {
        var subjectString = string;

        if (position === undefined || position > subjectString.length) {
            position = subjectString.length;
        }

        position -= searchString.length;
        var lastIndex = subjectString.indexOf(searchString, position);

        return lastIndex !== -1 && lastIndex === position;
    },

    inArray: function inArray(target, list) {
        if (this.typeCheck(["undefined", "null"], target) || !this.typeCheck("array", list)) return -1;

        for (var i = 0, len = list.length; i < len; i++) {
            if (list[i] == target) return i;
        }

        return -1;
    },

    trim: function trim(text) {
        var whitespace = "[\\x20\\t\\r\\n\\f]",
            rtrim = new RegExp("^" + whitespace + "+|((?:^|[^\\\\])(?:\\\\.)*)" + whitespace + "+$", "g");

        return text == null ? "" : (text + "").replace(rtrim, "");
    },

    param: function param(data) {
        var r20 = /%20/g,
            s = [],
            add = function add(key, value) {
            // If value is a function, invoke it and return its value
            value = utility.typeCheck("function", value) ? value() : value == null ? "" : value;
            s[s.length] = encodeURIComponent(key) + "=" + encodeURIComponent(value);
        };

        for (var key in data) {
            add(key, data[key]);
        }

        return s.join("&").replace(r20, "+");
    },

    ajax: function ajax(data) {
        var xhr = null,
            paramStr = "",
            callback = null;

        var opts = utility.extend({
            url: null,
            type: "GET",
            data: null,
            async: true,
            success: null,
            fail: null
        }, data);

        if (!this.typeCheck("string", opts.url) || !this.typeCheck("function", opts.success)) return;

        if (this.typeCheck("object", opts.data)) paramStr = this.param(opts.data);

        if (!this.typeCheck("undefined", XMLHttpRequest)) {
            xhr = new XMLHttpRequest();
        } else {
            var versions = ["MSXML2.XmlHttp.5.0", "MSXML2.XmlHttp.4.0", "MSXML2.XmlHttp.3.0", "MSXML2.XmlHttp.2.0", "Microsoft.XmlHttp"];

            for (var i = 0, len = versions.length; i < len; i++) {
                try {
                    xhr = new ActiveXObject(versions[i]);
                    break;
                } catch (e) {}
            }
        }

        if (xhr != null) {
            xhr.open(opts.type, opts.url, opts.async);
            xhr.send(paramStr);

            callback = function callback() {
                if (xhr.readyState === 4 && xhr.status == 200) {
                    opts.success(xhr);
                } else {
                    if (utility.typeCheck("function", opts.fail)) {
                        opts.fail(xhr);
                    }
                }
            };

            if (!opts.async) {
                callback();
            } else {
                xhr.onreadystatechange = callback;
            }
        }
    },

    ready: function () {
        var readyList,
            _DOMContentLoaded2,
            class2type = {};

        class2type["[object Boolean]"] = "boolean";
        class2type["[object Number]"] = "number";
        class2type["[object String]"] = "string";
        class2type["[object Function]"] = "function";
        class2type["[object Array]"] = "array";
        class2type["[object Date]"] = "date";
        class2type["[object RegExp]"] = "regexp";
        class2type["[object Object]"] = "object";

        var ReadyObj = {
            // Is the DOM ready to be used? Set to true once it occurs.
            isReady: false,
            // A counter to track how many items to wait for before
            // the ready event fires. See #6781
            readyWait: 1,
            // Hold (or release) the ready event
            holdReady: function holdReady(hold) {
                if (hold) {
                    ReadyObj.readyWait++;
                } else {
                    ReadyObj.ready(true);
                }
            },
            // Handle when the DOM is ready
            ready: function ready(wait) {
                // Either a released hold or an DOMready/load event and not yet ready
                if (wait === true && ! --ReadyObj.readyWait || wait !== true && !ReadyObj.isReady) {
                    // Make sure body exists, at least, in case IE gets a little overzealous (ticket #5443).
                    if (!document.body) {
                        return setTimeout(ReadyObj.ready, 1);
                    }

                    // Remember that the DOM is ready
                    ReadyObj.isReady = true;
                    // If a normal DOM Ready event fired, decrement, and wait if need be
                    if (wait !== true && --ReadyObj.readyWait > 0) {
                        return;
                    }
                    // If there are functions bound, to execute
                    readyList.resolveWith(document, [ReadyObj]);

                    // Trigger any bound ready events
                    //if ( ReadyObj.fn.trigger ) {
                    //  ReadyObj( document ).trigger( "ready" ).unbind( "ready" );
                    //}
                }
            },
            bindReady: function bindReady() {
                if (readyList) {
                    return;
                }
                readyList = ReadyObj._Deferred();

                // Catch cases where $(document).ready() is called after the
                // browser event has already occurred.
                if (document.readyState === "complete") {
                    // Handle it asynchronously to allow scripts the opportunity to delay ready
                    return setTimeout(ReadyObj.ready, 1);
                }

                // Mozilla, Opera and webkit nightlies currently support this event
                if (document.addEventListener) {
                    // Use the handy event callback
                    document.addEventListener("DOMContentLoaded", _DOMContentLoaded2, false);
                    // A fallback to window.onload, that will always work
                    window.addEventListener("load", ReadyObj.ready, false);

                    // If IE event model is used
                } else if (document.attachEvent) {
                    // ensure firing before onload,
                    // maybe late but safe also for iframes
                    document.attachEvent("onreadystatechange", _DOMContentLoaded2);

                    // A fallback to window.onload, that will always work
                    window.attachEvent("onload", ReadyObj.ready);

                    // If IE and not a frame
                    // continually check to see if the document is ready
                    var toplevel = false;

                    try {
                        toplevel = window.frameElement == null;
                    } catch (e) {}

                    if (document.documentElement.doScroll && toplevel) {
                        doScrollCheck();
                    }
                }
            },
            _Deferred: function _Deferred() {
                var // callbacks list
                callbacks = [],


                // stored [ context , args ]
                fired,


                // to avoid firing when already doing so
                firing,


                // flag to know if the deferred has been cancelled
                cancelled,


                // the deferred itself
                deferred = {

                    // done( f1, f2, ...)
                    done: function done() {
                        if (!cancelled) {
                            var args = arguments,
                                i,
                                length,
                                elem,
                                type,
                                _fired;
                            if (fired) {
                                _fired = fired;
                                fired = 0;
                            }
                            for (i = 0, length = args.length; i < length; i++) {
                                elem = args[i];
                                type = ReadyObj.type(elem);
                                if (type === "array") {
                                    deferred.done.apply(deferred, elem);
                                } else if (type === "function") {
                                    callbacks.push(elem);
                                }
                            }
                            if (_fired) {
                                deferred.resolveWith(_fired[0], _fired[1]);
                            }
                        }
                        return this;
                    },

                    // resolve with given context and args
                    resolveWith: function resolveWith(context, args) {
                        if (!cancelled && !fired && !firing) {
                            // make sure args are available (#8421)
                            args = args || [];
                            firing = 1;
                            try {
                                while (callbacks[0]) {
                                    callbacks.shift().apply(context, args); //shifts a callback, and applies it to document
                                }
                            } finally {
                                fired = [context, args];
                                firing = 0;
                            }
                        }
                        return this;
                    },

                    // resolve with this as context and given arguments
                    resolve: function resolve() {
                        deferred.resolveWith(this, arguments);
                        return this;
                    },

                    // Has this deferred been resolved?
                    isResolved: function isResolved() {
                        return !!(firing || fired);
                    },

                    // Cancel
                    cancel: function cancel() {
                        cancelled = 1;
                        callbacks = [];
                        return this;
                    }
                };

                return deferred;
            },
            type: function type(obj) {
                return obj == null ? String(obj) : class2type[Object.prototype.toString.call(obj)] || "object";
            }
            // The DOM ready check for Internet Explorer
        };function doScrollCheck() {
            if (ReadyObj.isReady) {
                return;
            }

            try {
                // If IE is used, use the trick by Diego Perini
                // http://javascript.nwbox.com/IEContentLoaded/
                document.documentElement.doScroll("left");
            } catch (e) {
                setTimeout(doScrollCheck, 1);
                return;
            }

            // and execute any waiting functions
            ReadyObj.ready();
        }
        // Cleanup functions for the document ready method
        if (document.addEventListener) {
            _DOMContentLoaded2 = function DOMContentLoaded() {
                document.removeEventListener("DOMContentLoaded", _DOMContentLoaded2, false);
                ReadyObj.ready();
            };
        } else if (document.attachEvent) {
            _DOMContentLoaded2 = function _DOMContentLoaded() {
                // Make sure body exists, at least, in case IE gets a little overzealous (ticket #5443).
                if (document.readyState === "complete") {
                    document.detachEvent("onreadystatechange", _DOMContentLoaded2);
                    ReadyObj.ready();
                }
            };
        }
        function ready(fn) {
            // Attach the listeners
            ReadyObj.bindReady();

            var type = ReadyObj.type(fn);

            // Add the callback
            readyList.done(fn); //readyList is result of _Deferred()
        }

        return ready;
    }()

    /*
     * Module related functions
     *
     */
};var getDepends = function getDepends(depends) {
    var args = [];

    for (var i = 0; i < depends.length; i++) {
        var module = global$1[depends[i]];

        if (!utility.typeCheck(["function", "object"], module)) {
            var modules = getModules(depends[i]);

            if (modules == null) {
                console.warn("JUI_WARNING_MSG: '" + depends[i] + "' is not loaded");
                args.push(null);
            } else {
                args.push(modules);
            }
        } else {
            args.push(module);
        }
    }

    return args;
};

var getModules = function getModules(parent) {
    var modules = null,
        parent = parent + ".";

    for (var key in global$1) {
        if (key.indexOf(parent) != -1) {
            if (utility.typeCheck(["function", "object"], global$1[key])) {
                var child = key.split(parent).join("");

                if (child.indexOf(".") == -1) {
                    if (modules == null) {
                        modules = {};
                    }

                    modules[child] = global$1[key];
                }
            }
        }
    }

    return modules;
};

/**
 * @class jui
 *
 * Global Object
 *
 * @singleton
 */
var jui$1 = {

    /**
     * @method ready
     *
     * ready 타임에 실행될 callback 정의
     *
     * @param {Function} callback
     */
    ready: function ready() {
        var args = [],
            callback = arguments.length == 2 ? arguments[1] : arguments[0],
            depends = arguments.length == 2 ? arguments[0] : null;

        if (!utility.typeCheck(["array", "null"], depends) || !utility.typeCheck("function", callback)) {
            throw new Error("JUI_CRITICAL_ERR: Invalid parameter type of the function");
        }

        utility.ready(function () {
            if (depends) {
                args = getDepends(depends);
            }

            callback.apply(null, args);
        });
    },

    /**
     * @method defineUI
     *
     * 사용자가 실제로 사용할 수 있는 UI 클래스를 정의
     *
     * @param {String} name 모듈 로드와 상속에 사용될 이름을 정한다.
     * @param {Array} depends 'define'이나 'defineUI'로 정의된 클래스나 객체를 인자로 받을 수 있다.
     * @param {Function} callback UI 클래스를 해당 콜백 함수 내에서 클래스 형태로 구현하고 리턴해야 한다.
     */
    defineUI: function defineUI(name, depends, callback, parent) {
        if (!utility.typeCheck("string", name) || !utility.typeCheck("array", depends) || !utility.typeCheck("function", callback) || !utility.typeCheck(["string", "undefined"], parent)) {
            throw new Error("JUI_CRITICAL_ERR: Invalid parameter type of the function");
        }

        if (utility.typeCheck("function", globalClass[name])) {
            throw new Error("JUI_CRITICAL_ERR: '" + name + "' is already exist");
        }

        if (utility.typeCheck("undefined", parent)) {
            parent = "core";
        }

        if (!utility.typeCheck("function", globalClass[parent])) {
            throw new Error("JUI_CRITICAL_ERR: Parents are the only function");
        } else {
            if (globalFunc[parent] !== true) {
                throw new Error("JUI_CRITICAL_ERR: UI function can not be inherited");
            }
        }

        var args = getDepends(depends),
            uiFunc = callback.apply(null, args);

        // 상속
        utility.inherit(uiFunc, globalClass[parent]);

        // TODO: 차트 빌더를 제외하고, 무조건 event 클래스에 정의된 init 메소드를 호출함
        global$1[name] = globalClass[parent].init({
            type: name,
            "class": uiFunc
        });

        globalClass[name] = uiFunc;
        globalFunc[name] = true;

        /**
         * @deprecated
         // support AMD module
         if (typeof define == "function" && define.amd) {
        define(name, function () {
        return global[name]
        });
        }
         */
    },

    /**
     * @method redefineUI
     *
     * UI 클래스에서 사용될 클래스를 정의하고, 자유롭게 상속할 수 있는 클래스를 정의
     *
     * @param {String} name 모듈 로드와 상속에 사용될 이름을 정한다.
     * @param {Array} depends 'define'이나 'defineUI'로 정의된 클래스나 객체를 인자로 받을 수 있다.
     * @param {Function} callback UI 클래스를 해당 콜백 함수 내에서 클래스 형태로 구현하고 리턴해야 한다.
     * @param {String} parent 상속받을 클래스
     */
    redefineUI: function redefineUI(name, depends, callback, parent, skip) {
        if (!skip && globalFunc[name] === true) {
            global$1[name] = null;
            globalClass[name] = null;
            globalFunc[name] = false;
        }

        if (!skip || skip && globalFunc[name] !== true) {
            this.defineUI(name, depends, callback, parent);
        }
    },

    createUIObject: function createUIObject(UI, selector, index, elem, options, afterHook) {
        var mainObj = new UI["class"]();

        // Check Options
        var opts = jui$1.defineOptions(UI["class"], options || {});

        // Public Properties
        mainObj.init.prototype = mainObj;
        /** @property {String/HTMLElement} selector */
        mainObj.init.prototype.selector = selector;
        /** @property {HTMLElement} root */
        mainObj.init.prototype.root = elem;
        /** @property {Object} options */
        mainObj.init.prototype.options = opts;
        /** @property {Array} event Custom events */
        mainObj.init.prototype.event = new Array(); // Custom Event
        /** @property {Integer} timestamp UI Instance creation time*/
        mainObj.init.prototype.timestamp = new Date().getTime();
        /** @property {Integer} index Index of UI instance*/
        mainObj.init.prototype.index = index;
        /** @property {Class} module Module class */
        mainObj.init.prototype.module = UI;

        // UI 객체 프로퍼티를 외부에서 정의할 수 있음 (jQuery 의존성 제거를 위한 코드)
        if (utility.typeCheck("function", afterHook)) {
            afterHook(mainObj, opts);
        }

        var uiObj = new mainObj.init();

        // Custom Event Setting
        for (var key in opts.event) {
            uiObj.on(key, opts.event[key]);
        }

        // 엘리먼트 객체에 jui 속성 추가
        elem.jui = uiObj;

        return uiObj;
    },

    /**
     * @method define
     *
     * UI 클래스에서 사용될 클래스를 정의하고, 자유롭게 상속할 수 있는 클래스를 정의
     *
     * @param {String} name 모듈 로드와 상속에 사용될 이름을 정한다.
     * @param {Array} depends 'define'이나 'defineUI'로 정의된 클래스나 객체를 인자로 받을 수 있다.
     * @param {Function} callback UI 클래스를 해당 콜백 함수 내에서 클래스 형태로 구현하고 리턴해야 한다.
     * @param {String} parent 상속받을 클래스
     */
    define: function define(name, depends, callback, parent) {
        if (!utility.typeCheck("string", name) || !utility.typeCheck("array", depends) || !utility.typeCheck("function", callback) || !utility.typeCheck(["string", "undefined", "null"], parent)) {
            throw new Error("JUI_CRITICAL_ERR: Invalid parameter type of the function");
        }

        if (utility.typeCheck("function", globalClass[name])) {
            throw new Error("JUI_CRITICAL_ERR: '" + name + "' is already exist");
        }

        var args = getDepends(depends),
            uiFunc = callback.apply(null, args);

        if (utility.typeCheck("function", globalClass[parent])) {
            if (globalFunc[parent] !== true) {
                throw new Error("JUI_CRITICAL_ERR: UI function can not be inherited");
            } else {
                utility.inherit(uiFunc, globalClass[parent]);
            }
        }

        // 함수 고유 설정
        global$1[name] = uiFunc;
        globalClass[name] = uiFunc; // original function
        globalFunc[name] = true;

        // support AMD module
        // @deprecated
        /*
        if (typeof define == "function" && define.amd) {
            define(name, function () {
                return global[name]
            });
        }*/
    },

    /**
     * @method redefine
     *
     * UI 클래스에서 사용될 클래스를 정의하고, 자유롭게 상속할 수 있는 클래스를 정의
     *
     * @param {String} name 모듈 로드와 상속에 사용될 이름을 정한다.
     * @param {Array} depends 'define'이나 'defineUI'로 정의된 클래스나 객체를 인자로 받을 수 있다.
     * @param {Function} callback UI 클래스를 해당 콜백 함수 내에서 클래스 형태로 구현하고 리턴해야 한다.
     * @param {String} parent 상속받을 클래스
     */
    redefine: function redefine(name, depends, callback, parent, skip) {
        if (!skip && globalFunc[name] === true) {
            global$1[name] = null;
            globalClass[name] = null;
            globalFunc[name] = false;
        }

        if (!skip || skip && globalFunc[name] !== true) {
            this.define(name, depends, callback, parent);
        }
    },

    /**
     * @method defineOptions
     *
     * 모듈 기본 옵션 정의
     *
     * @param {Object} Module
     * @param {Object} options
     * @param {Object} exceptOpts
     * @return {Object}
     */
    defineOptions: function defineOptions(Module, options, exceptOpts) {
        var defOpts = getOptions(Module, {});
        var defOptKeys = Object.keys(defOpts),
            optKeys = Object.keys(options);

        // 정의되지 않은 옵션 사용 유무 체크
        for (var i = 0; i < optKeys.length; i++) {
            var name = optKeys[i];

            if (utility.inArray(name, defOptKeys) == -1 && utility.inArray(name, exceptOpts) == -1) {
                throw new Error("JUI_CRITICAL_ERR: '" + name + "' is not an option");
            }
        }

        // 사용자 옵션 + 기본 옵션
        utility.extend(options, defOpts, true);

        // 상위 모듈의 옵션까지 모두 얻어오는 함수
        function getOptions(Module, options) {
            if (utility.typeCheck("function", Module)) {
                if (utility.typeCheck("function", Module.setup)) {
                    var opts = Module.setup();

                    for (var key in opts) {
                        if (utility.typeCheck("undefined", options[key])) {
                            options[key] = opts[key];
                        }
                    }
                }

                getOptions(Module.parent, options);
            }

            return options;
        }

        return options;
    },

    /**
     * define과 defineUI로 정의된 클래스 또는 객체를 가져온다.
     *
     * @param name 가져온 클래스 또는 객체의 이름
     * @return {*}
     */
    include: function include(name) {
        if (!utility.typeCheck("string", name)) {
            throw new Error("JUI_CRITICAL_ERR: Invalid parameter type of the function");
        }

        var module = global$1[name];

        if (utility.typeCheck(["function", "object"], module)) {
            return module;
        } else {
            var modules = getModules(name);

            if (modules == null) {
                console.warn("JUI_WARNING_MSG: '" + name + "' is not loaded");
                return null;
            } else {
                return modules;
            }
        }
    },

    /**
     * define과 defineUI로 정의된 모든 클래스와 객체를 가져온다.
     *
     * @return {Array}
     */
    includeAll: function includeAll() {
        var result = [];

        for (var key in global$1) {
            result.push(global$1[key]);
        }

        return result;
    },

    use: function use() {
        var modules = [];

        for (var i = 0; i < arguments.length; i++) {
            if (utility.typeCheck("array", arguments[i])) {
                var list = arguments[i];

                for (var j = 0; j < list.length; j++) {
                    if (utility.typeCheck("object", list[j])) {
                        modules.push(list[j]);
                    }
                }
            } else if (utility.typeCheck("object", arguments[i])) {
                modules.push(arguments[i]);
            }
        }

        for (var i = 0; i < modules.length; i++) {
            var module = modules[i];

            if ((typeof module === "undefined" ? "undefined" : _typeof(module)) == "object") {
                if (typeof module.name != "string") return;
                if (typeof module.component != "function") return;

                // 상속 대상 부모 클래스가 존재할 경우
                if (module.extend != null) {
                    if (jui$1.include(module.extend) == null) {
                        console.warn("JUI_WARNING_MSG: '" + module.extend + "' module should be imported in first");
                    }
                }

                if (module.extend == "core") {
                    jui$1.redefineUI(module.name, [], module.component, module.extend);
                } else {
                    jui$1.redefine(module.name, [], module.component, module.extend);
                }
            }
        }
    }
};

var dom = {
    name: "util.dom",
    extend: null,
    component: function component() {
        var _ = jui$1.include("util.base");

        return {
            find: function find() {
                var args = arguments;

                if (args.length == 1) {
                    if (_.typeCheck("string", args[0])) {
                        return document.querySelectorAll(args[0]);
                    }
                } else if (args.length == 2) {
                    if (_.typeCheck("object", args[0]) && _.typeCheck("string", args[1])) {
                        return args[0].querySelectorAll(args[1]);
                    }
                }

                return [];
            },

            each: function each(selectorOrElements, callback) {
                if (!_.typeCheck("function", callback)) return;

                var elements = null;

                if (_.typeCheck("string", selectorOrElements)) {
                    elements = document.querySelectorAll(selectorOrElements);
                } else if (_.typeCheck("array", selectorOrElements)) {
                    elements = selectorOrElements;
                }

                if (elements != null) {
                    Array.prototype.forEach.call(elements, function (el, i) {
                        callback.apply(el, [i, el]);
                    });
                }
            },

            attr: function attr(selectorOrElements, keyOrAttributes) {
                if (!_.typeCheck(["string", "array"], selectorOrElements)) return;

                var elements = document.querySelectorAll(selectorOrElements);

                if (_.typeCheck("object", keyOrAttributes)) {
                    // set
                    for (var i = 0; i < elements.length; i++) {
                        for (var key in keyOrAttributes) {
                            elements[i].setAttribute(key, keyOrAttributes[key]);
                        }
                    }
                } else if (_.typeCheck("string", keyOrAttributes)) {
                    // get
                    if (elements.length > 0) {
                        return elements[0].getAttribute(keyOrAttributes);
                    }
                }
            },

            remove: function remove(selectorOrElements) {
                this.each(selectorOrElements, function () {
                    this.parentNode.removeChild(this);
                });
            },

            offset: function offset(elem) {
                function isWindow(obj) {
                    /* jshint eqeqeq: false */
                    return obj != null && obj == obj.window;
                }

                function getWindow(elem) {
                    return isWindow(elem) ? elem : elem.nodeType === 9 ? elem.defaultView || elem.parentWindow : false;
                }

                var docElem,
                    win,
                    box = { top: 0, left: 0 },
                    doc = elem && elem.ownerDocument;

                if (!doc) {
                    return;
                }

                docElem = doc.documentElement;

                // Make sure it's not a disconnected DOM node
                /*/
                 if ( !global.jquery.contains( docElem, elem ) ) {
                 return box;
                 }
                 /**/

                // If we don't have gBCR, just use 0,0 rather than error
                // BlackBerry 5, iOS 3 (original iPhone)
                var strundefined = "undefined";
                if (_typeof(elem.getBoundingClientRect) !== strundefined) {
                    box = elem.getBoundingClientRect();
                }
                win = getWindow(doc);

                return {
                    top: box.top + (win.pageYOffset || docElem.scrollTop) - (docElem.clientTop || 0),
                    left: box.left + (win.pageXOffset || docElem.scrollLeft) - (docElem.clientLeft || 0)
                };
            }
        };
    }
};

var math = {
    name: "util.math",
    extend: null,
    component: function component() {
        var _ = jui$1.include("util.base");

        // 2x1 or 3x1 or ?x1 형태의 매트릭스 연산
        function _matrix(a, b) {
            var m = [];

            for (var i = 0, len = a.length; i < len; i++) {
                var sum = 0;

                for (var j = 0, len2 = a[i].length; j < len2; j++) {
                    sum += a[i][j] * b[j];
                }

                m.push(sum);
            }

            return m;
        }

        // 2x2 or 3x3 or ?x? 형태의 매트릭스 연산
        function deepMatrix(a, b) {
            var m = [],
                nm = [];

            for (var i = 0, len = b.length; i < len; i++) {
                m[i] = [];
                nm[i] = [];
            }

            for (var i = 0, len = b.length; i < len; i++) {
                for (var j = 0, len2 = b[i].length; j < len2; j++) {
                    m[j].push(b[i][j]);
                }
            }

            for (var i = 0, len = m.length; i < len; i++) {
                var mm = _matrix(a, m[i]);

                for (var j = 0, len2 = mm.length; j < len2; j++) {
                    nm[j].push(mm[j]);
                }
            }

            return nm;
        }

        function _matrix3d(a, b) {
            var m = new Float32Array(4);

            m[0] = a[0][0] * b[0] + a[0][1] * b[1] + a[0][2] * b[2] + a[0][3] * b[3];
            m[1] = a[1][0] * b[0] + a[1][1] * b[1] + a[1][2] * b[2] + a[1][3] * b[3];
            m[2] = a[2][0] * b[0] + a[2][1] * b[1] + a[2][2] * b[2] + a[2][3] * b[3];
            m[3] = a[3][0] * b[0] + a[3][1] * b[1] + a[3][2] * b[2] + a[3][3] * b[3];

            return m;
        }

        function deepMatrix3d(a, b) {
            var nm = [new Float32Array(4), new Float32Array(4), new Float32Array(4), new Float32Array(4)];

            var m = [new Float32Array([b[0][0], b[1][0], b[2][0], b[3][0]]), new Float32Array([b[0][1], b[1][1], b[2][1], b[3][1]]), new Float32Array([b[0][2], b[1][2], b[2][2], b[3][2]]), new Float32Array([b[0][3], b[1][3], b[2][3], b[3][3]])];

            nm[0][0] = a[0][0] * m[0][0] + a[0][1] * m[0][1] + a[0][2] * m[0][2] + a[0][3] * m[0][3];
            nm[1][0] = a[1][0] * m[0][0] + a[1][1] * m[0][1] + a[1][2] * m[0][2] + a[1][3] * m[0][3];
            nm[2][0] = a[2][0] * m[0][0] + a[2][1] * m[0][1] + a[2][2] * m[0][2] + a[2][3] * m[0][3];
            nm[3][0] = a[3][0] * m[0][0] + a[3][1] * m[0][1] + a[3][2] * m[0][2] + a[3][3] * m[0][3];

            nm[0][1] = a[0][0] * m[1][0] + a[0][1] * m[1][1] + a[0][2] * m[1][2] + a[0][3] * m[1][3];
            nm[1][1] = a[1][0] * m[1][0] + a[1][1] * m[1][1] + a[1][2] * m[1][2] + a[1][3] * m[1][3];
            nm[2][1] = a[2][0] * m[1][0] + a[2][1] * m[1][1] + a[2][2] * m[1][2] + a[2][3] * m[1][3];
            nm[3][1] = a[3][0] * m[1][0] + a[3][1] * m[1][1] + a[3][2] * m[1][2] + a[3][3] * m[1][3];

            nm[0][2] = a[0][0] * m[2][0] + a[0][1] * m[2][1] + a[0][2] * m[2][2] + a[0][3] * m[2][3];
            nm[1][2] = a[1][0] * m[2][0] + a[1][1] * m[2][1] + a[1][2] * m[2][2] + a[1][3] * m[2][3];
            nm[2][2] = a[2][0] * m[2][0] + a[2][1] * m[2][1] + a[2][2] * m[2][2] + a[2][3] * m[2][3];
            nm[3][2] = a[3][0] * m[2][0] + a[3][1] * m[2][1] + a[3][2] * m[2][2] + a[3][3] * m[2][3];

            nm[0][3] = a[0][0] * m[3][0] + a[0][1] * m[3][1] + a[0][2] * m[3][2] + a[0][3] * m[3][3];
            nm[1][3] = a[1][0] * m[3][0] + a[1][1] * m[3][1] + a[1][2] * m[3][2] + a[1][3] * m[3][3];
            nm[2][3] = a[2][0] * m[3][0] + a[2][1] * m[3][1] + a[2][2] * m[3][2] + a[2][3] * m[3][3];
            nm[3][3] = a[3][0] * m[3][0] + a[3][1] * m[3][1] + a[3][2] * m[3][2] + a[3][3] * m[3][3];

            return nm;
        }

        function _inverseMatrix3d(me) {
            var te = [new Float32Array(4), new Float32Array(4), new Float32Array(4), new Float32Array(4)];

            var n11 = me[0][0],
                n12 = me[0][1],
                n13 = me[0][2],
                n14 = me[0][3];
            var n21 = me[1][0],
                n22 = me[1][1],
                n23 = me[1][2],
                n24 = me[1][3];
            var n31 = me[2][0],
                n32 = me[2][1],
                n33 = me[2][2],
                n34 = me[2][3];
            var n41 = me[3][0],
                n42 = me[3][1],
                n43 = me[3][2],
                n44 = me[3][3];

            te[0][0] = n23 * n34 * n42 - n24 * n33 * n42 + n24 * n32 * n43 - n22 * n34 * n43 - n23 * n32 * n44 + n22 * n33 * n44;
            te[0][1] = n14 * n33 * n42 - n13 * n34 * n42 - n14 * n32 * n43 + n12 * n34 * n43 + n13 * n32 * n44 - n12 * n33 * n44;
            te[0][2] = n13 * n24 * n42 - n14 * n23 * n42 + n14 * n22 * n43 - n12 * n24 * n43 - n13 * n22 * n44 + n12 * n23 * n44;
            te[0][3] = n14 * n23 * n32 - n13 * n24 * n32 - n14 * n22 * n33 + n12 * n24 * n33 + n13 * n22 * n34 - n12 * n23 * n34;
            te[1][0] = n24 * n33 * n41 - n23 * n34 * n41 - n24 * n31 * n43 + n21 * n34 * n43 + n23 * n31 * n44 - n21 * n33 * n44;
            te[1][1] = n13 * n34 * n41 - n14 * n33 * n41 + n14 * n31 * n43 - n11 * n34 * n43 - n13 * n31 * n44 + n11 * n33 * n44;
            te[1][2] = n14 * n23 * n41 - n13 * n24 * n41 - n14 * n21 * n43 + n11 * n24 * n43 + n13 * n21 * n44 - n11 * n23 * n44;
            te[1][3] = n13 * n24 * n31 - n14 * n23 * n31 + n14 * n21 * n33 - n11 * n24 * n33 - n13 * n21 * n34 + n11 * n23 * n34;
            te[2][0] = n22 * n34 * n41 - n24 * n32 * n41 + n24 * n31 * n42 - n21 * n34 * n42 - n22 * n31 * n44 + n21 * n32 * n44;
            te[2][1] = n14 * n32 * n41 - n12 * n34 * n41 - n14 * n31 * n42 + n11 * n34 * n42 + n12 * n31 * n44 - n11 * n32 * n44;
            te[2][2] = n12 * n24 * n41 - n14 * n22 * n41 + n14 * n21 * n42 - n11 * n24 * n42 - n12 * n21 * n44 + n11 * n22 * n44;
            te[2][3] = n14 * n22 * n31 - n12 * n24 * n31 - n14 * n21 * n32 + n11 * n24 * n32 + n12 * n21 * n34 - n11 * n22 * n34;
            te[3][0] = n23 * n32 * n41 - n22 * n33 * n41 - n23 * n31 * n42 + n21 * n33 * n42 + n22 * n31 * n43 - n21 * n32 * n43;
            te[3][1] = n12 * n33 * n41 - n13 * n32 * n41 + n13 * n31 * n42 - n11 * n33 * n42 - n12 * n31 * n43 + n11 * n32 * n43;
            te[3][2] = n13 * n22 * n41 - n12 * n23 * n41 - n13 * n21 * n42 + n11 * n23 * n42 + n12 * n21 * n43 - n11 * n22 * n43;
            te[3][4] = n12 * n23 * n31 - n13 * n22 * n31 + n13 * n21 * n32 - n11 * n23 * n32 - n12 * n21 * n33 + n11 * n22 * n33;

            var det = 1 / (n11 * te[0][0] + n21 * te[0][1] + n31 * te[0][2] + n41 * te[0][3]);

            if (det === 0) {
                te = [new Float32Array([1, 0, 0, 0]), new Float32Array([0, 1, 0, 0]), new Float32Array([0, 0, 1, 0]), new Float32Array([0, 0, 0, 1])];
            } else {
                te[0][0] *= det;te[0][1] *= det;te[0][2] *= det;te[0][3] *= det;
                te[1][0] *= det;te[1][1] *= det;te[1][2] *= det;te[1][3] *= det;
                te[2][0] *= det;te[2][1] *= det;te[2][2] *= det;te[2][3] *= det;
                te[3][0] *= det;te[3][1] *= det;te[3][2] *= det;te[3][4] *= det;
            }

            return te;
        }

        /**
         * @class util.math
         *
         * Math Utility
         *
         * @singleton
         */
        var self = {

            /**
             * @method rotate
             *
             * 2d rotate
             *
             * @param {Number} x
             * @param {Number} y
             * @param {Number} radian	roate 할 radian
             * @return {Object}
             * @return {Number} return.x  변환된 x
             * @return {Number} return.y  변환된 y
             *
             */
            rotate: function rotate(x, y, radian) {
                return {
                    x: x * Math.cos(radian) - y * Math.sin(radian),
                    y: x * Math.sin(radian) + y * Math.cos(radian)
                };
            },

            resize: function resize(maxWidth, maxHeight, objectWidth, objectHeight) {
                var ratio = objectHeight / objectWidth;

                if (objectWidth >= maxWidth && ratio <= 1) {
                    objectWidth = maxWidth;
                    objectHeight = maxHeight * ratio;
                } else if (objectHeight >= maxHeight) {
                    objectHeight = maxHeight;
                    objectWidth = maxWidth / ratio;
                }

                return { width: objectWidth, height: objectHeight };
            },

            /**
             * @method radian
             *
             * convert degree to radian
             *
             * @param {Number} degree
             * @return {Number} radian
             */
            radian: function radian(degree) {
                return degree * Math.PI / 180;
            },

            /**
             * @method degree
             *
             * convert radian to degree
             *
             * @param {Number} radian
             * @return {Number} degree
             */
            degree: function degree(radian) {
                return radian * 180 / Math.PI;
            },

            angle: function angle(x1, y1, x2, y2) {
                var dx = x2 - x1,
                    dy = y2 - y1;

                return Math.atan2(dy, dx);
            },

            /**
             * @method interpolateNumber
             *
             * a, b 의 중간값 계산을 위한 callback 함수 만들기
             *
             * @param {Number} a	first value
             * @param {Number} b 	second value
             * @return {Function}
             */
            interpolateNumber: function interpolateNumber(a, b) {
                var dist = b - a;
                return function (t) {
                    return a + dist * t;
                };
            },

            // 중간값 round 해서 계산하기
            interpolateRound: function interpolateRound(a, b) {

                var dist = b - a;
                return function (t) {
                    return Math.round(a + dist * t);
                };
            },

            getFixed: function getFixed(a, b) {
                var aArr = (a + "").split(".");
                var aLen = aArr.length < 2 ? 0 : aArr[1].length;

                var bArr = (b + "").split(".");
                var bLen = bArr.length < 2 ? 0 : bArr[1].length;

                return aLen > bLen ? aLen : bLen;
            },

            fixed: function fixed(_fixed) {

                var fixedNumber = this.getFixed(_fixed, 0);
                var pow = Math.pow(10, fixedNumber);

                var func = function func(value) {
                    return Math.round(value * pow) / pow;
                };

                func.plus = function (a, b) {
                    return Math.round(a * pow + b * pow) / pow;
                };

                func.minus = function (a, b) {
                    return Math.round(a * pow - b * pow) / pow;
                };

                func.multi = function (a, b) {
                    return Math.round(a * pow * (b * pow)) / (pow * pow);
                };

                func.div = function (a, b) {
                    var result = a * pow / (b * pow);
                    var pow2 = Math.pow(10, this.getFixed(result, 0));
                    return Math.round(result * pow2) / pow2;
                };

                func.remain = function (a, b) {
                    return Math.round(a * pow % (b * pow)) / pow;
                };

                return func;
            },

            round: function round(num, fixed) {
                var fixedNumber = Math.pow(10, fixed);

                return Math.round(num * fixedNumber) / fixedNumber;
            },

            plus: function plus(a, b) {
                var pow = Math.pow(10, this.getFixed(a, b));

                return Math.round(a * pow + b * pow) / pow;
            },

            minus: function minus(a, b) {
                var pow = Math.pow(10, this.getFixed(a, b));
                return Math.round(a * pow - b * pow) / pow;
            },

            multi: function multi(a, b) {
                var pow = Math.pow(10, this.getFixed(a, b));
                return Math.round(a * pow * (b * pow)) / (pow * pow);
            },

            div: function div(a, b) {
                var pow = Math.pow(10, this.getFixed(a, b));

                var result = a * pow / (b * pow);
                var pow2 = Math.pow(10, this.getFixed(result, 0));
                return Math.round(result * pow2) / pow2;
            },

            remain: function remain(a, b) {
                var pow = Math.pow(10, this.getFixed(a, b));
                return Math.round(a * pow % (b * pow)) / pow;
            },

            /**
             * 특정 구간의 값을 자동으로 계산
             *
             * @param {Object} min
             * @param {Object} max
             * @param {Object} ticks
             * @param {Object} isNice
             */
            nice: function nice(min, max, ticks, isNice) {
                isNice = isNice || false;

                if (min > max) {
                    var _max = min;
                    var _min = max;
                } else {
                    var _min = min;
                    var _max = max;
                }

                var _ticks = ticks;
                var _tickSpacing = 0;
                var _range = [];
                var _niceMin;
                var _niceMax;

                function niceNum(range, round) {
                    var exponent = Math.floor(Math.log(range) / Math.LN10);
                    var fraction = range / Math.pow(10, exponent);

                    if (round) {
                        if (fraction < 1.5) niceFraction = 1;else if (fraction < 3) niceFraction = 2;else if (fraction < 7) niceFraction = 5;else niceFraction = 10;
                    } else {
                        if (fraction <= 1) niceFraction = 1;else if (fraction <= 2) niceFraction = 2;else if (fraction <= 5) niceFraction = 5;else niceFraction = 10;

                        //console.log(niceFraction)
                    }

                    return niceFraction * Math.pow(10, exponent);
                }

                function caculate() {
                    _range = isNice ? niceNum(_max - _min, false) : _max - _min;
                    _tickSpacing = isNice ? niceNum(_range / _ticks, true) : _range / _ticks;
                    _niceMin = isNice ? Math.floor(_min / _tickSpacing) * _tickSpacing : _min;
                    _niceMax = isNice ? Math.floor(_max / _tickSpacing) * _tickSpacing : _max;
                }

                caculate();

                return {
                    min: _niceMin,
                    max: _niceMax,
                    range: _range,
                    spacing: _tickSpacing
                };
            },

            matrix: function matrix(a, b) {
                if (_.typeCheck("array", b[0])) {
                    return deepMatrix(a, b);
                }

                return _matrix(a, b);
            },

            matrix3d: function matrix3d(a, b) {
                if (b[0] instanceof Array || b[0] instanceof Float32Array) {
                    return deepMatrix3d(a, b);
                }

                return _matrix3d(a, b);
            },

            inverseMatrix3d: function inverseMatrix3d(a) {
                return _inverseMatrix3d(a);
            },

            scaleValue: function scaleValue(value, minValue, maxValue, minScale, maxScale) {
                // 최소/최대 값이 같을 경우 처리
                minValue = minValue == maxValue ? 0 : minValue;

                var range = maxScale - minScale,
                    tg = range * getPer();

                function getPer() {
                    var range = maxValue - minValue,
                        tg = value - minValue,
                        per = tg / range;

                    return per;
                }

                return tg + minScale;
            }
        };

        return self;
    }
};

jui$1.use(math);

var color = {
    name: "util.color",
    extend: null,
    component: function component() {
        var _ = jui$1.include("util.base");
        var math$$1 = jui$1.include("util.math");

        function generateHash(name) {
            // Return a vector (0.0->1.0) that is a hash of the input string.
            // The hash is computed to favor early characters over later ones, so
            // that strings with similar starts have similar vectors. Only the first
            // 6 characters are considered.
            var hash = 0,
                weight = 1,
                max_hash = 0,
                mod = 10,
                max_char = 6;

            if (name) {
                for (var i = 0; i < name.length; i++) {
                    if (i > max_char) {
                        break;
                    }
                    hash += weight * (name.charCodeAt(i) % mod);
                    max_hash += weight * (mod - 1);
                    weight *= 0.70;
                }
                if (max_hash > 0) {
                    hash = hash / max_hash;
                }
            }
            return hash;
        }

        /**
         *  @class util.color
         *
         * color utility
         *
         * @singleton
         */
        var self = {

            regex: /(linear|radial)\((.*)\)(.*)/i,

            /**
             * @method format
             *
             * convert color to format string
             *
             *     // hex
             *     color.format({ r : 255, g : 255, b : 255 }, 'hex')  // #FFFFFF
             *
             *     // rgb
             *     color.format({ r : 255, g : 255, b : 255 }, 'rgb') // rgba(255, 255, 255, 0.5);
             *
             *     // rgba
             *     color.format({ r : 255, g : 255, b : 255, a : 0.5 }, 'rgb') // rgba(255, 255, 255, 0.5);
             *
             * @param {Object} obj  obj has r, g, b and a attributes
             * @param {"hex"/"rgb"} type  format string type
             * @returns {*}
             */
            format: function format(obj, type) {
                if (type == 'hex') {
                    var r = obj.r.toString(16);
                    if (obj.r < 16) r = "0" + r;

                    var g = obj.g.toString(16);
                    if (obj.g < 16) g = "0" + g;

                    var b = obj.b.toString(16);
                    if (obj.b < 16) b = "0" + b;

                    return "#" + [r, g, b].join("").toUpperCase();
                } else if (type == 'rgb') {
                    if (typeof obj.a == 'undefined') {
                        return "rgb(" + [obj.r, obj.g, obj.b].join(",") + ")";
                    } else {
                        return "rgba(" + [obj.r, obj.g, obj.b, obj.a].join(",") + ")";
                    }
                }

                return obj;
            },

            /**
             * @method scale
             *
             * get color scale
             *
             * 		var c = color.scale().domain('#FF0000', '#00FF00');
             *
             * 		// get middle color
             * 		c(0.5)   ==  #808000
             *
             * 		// get middle color list
             * 		c.ticks(20);  // return array ,    [startColor, ......, endColor ]
             *
             * @returns {func} scale function
             */
            scale: function scale() {
                var startColor, endColor;

                function func(t, type) {

                    var obj = {
                        r: parseInt(startColor.r + (endColor.r - startColor.r) * t, 10),
                        g: parseInt(startColor.g + (endColor.g - startColor.g) * t, 10),
                        b: parseInt(startColor.b + (endColor.b - startColor.b) * t, 10)
                    };

                    return self.format(obj, type);
                }

                func.domain = function (start, end) {
                    startColor = self.rgb(start);
                    endColor = self.rgb(end);

                    return func;
                };

                func.ticks = function (n) {
                    var unit = 1 / n;

                    var start = 0;
                    var colors = [];
                    while (start <= 1) {
                        var c = func(start, 'hex');
                        colors.push(c);
                        start = math$$1.plus(start, unit);
                    }

                    return colors;
                };

                return func;
            },

            /**
             * @method map
             *
             * create color map
             *
             * 		var colorList = color.map(['#352a87', '#0f5cdd', '#00b5a6', '#ffc337', '#fdff00'], count)
             *
             * @param {Array} color_list
             * @param {Number} count  a divide number
             * @returns {Array} converted color list
             */
            map: function map(color_list, count) {

                var colors = [];
                count = count || 5;
                var scale = self.scale();
                for (var i = 0, len = color_list.length - 1; i < len; i++) {
                    if (i == 0) {
                        colors = scale.domain(color_list[i], color_list[i + 1]).ticks(count);
                    } else {
                        var colors2 = scale.domain(color_list[i], color_list[i + 1]).ticks(count);
                        colors2.shift();
                        colors = colors.concat(colors2);
                    }
                }

                return colors;
            },

            /**
             * @method rgb
             *
             * parse string to rgb color
             *
             * 		color.rgb("#FF0000") === { r : 255, g : 0, b : 0 }
             *
             * 		color.rgb("rgb(255, 0, 0)") == { r : 255, g : 0, b : }
             *
             * @param {String} str color string
             * @returns {Object}  rgb object
             */
            rgb: function rgb(str) {

                if (typeof str == 'string') {
                    if (str.indexOf("rgb(") > -1) {
                        var arr = str.replace("rgb(", "").replace(")", "").split(",");

                        for (var i = 0, len = arr.length; i < len; i++) {
                            arr[i] = parseInt(_.trim(arr[i]), 10);
                        }

                        return { r: arr[0], g: arr[1], b: arr[2], a: 1 };
                    } else if (str.indexOf("rgba(") > -1) {
                        var arr = str.replace("rgba(", "").replace(")", "").split(",");

                        for (var i = 0, len = arr.length; i < len; i++) {

                            if (len - 1 == i) {
                                arr[i] = parseFloat(_.trim(arr[i]));
                            } else {
                                arr[i] = parseInt(_.trim(arr[i]), 10);
                            }
                        }

                        return { r: arr[0], g: arr[1], b: arr[2], a: arr[3] };
                    } else if (str.indexOf("#") == 0) {

                        str = str.replace("#", "");

                        var arr = [];
                        if (str.length == 3) {
                            for (var i = 0, len = str.length; i < len; i++) {
                                var char = str.substr(i, 1);
                                arr.push(parseInt(char + char, 16));
                            }
                        } else {
                            for (var i = 0, len = str.length; i < len; i += 2) {
                                arr.push(parseInt(str.substr(i, 2), 16));
                            }
                        }

                        return { r: arr[0], g: arr[1], b: arr[2], a: 1 };
                    }
                }

                return str;
            },

            /**
             * @method HSVtoRGB
             *
             * convert hsv to rgb
             *
             * 		color.HSVtoRGB(0,0,1) === #FFFFF === { r : 255, g : 0, b : 0 }
             *
             * @param {Number} H  hue color number  (min : 0, max : 360)
             * @param {Number} S  Saturation number  (min : 0, max : 1)
             * @param {Number} V  Value number 		(min : 0, max : 1 )
             * @returns {Object}
             */
            HSVtoRGB: function HSVtoRGB(H, S, V) {

                if (H == 360) {
                    H = 0;
                }

                var C = S * V;
                var X = C * (1 - Math.abs(H / 60 % 2 - 1));
                var m = V - C;

                var temp = [];

                if (0 <= H && H < 60) {
                    temp = [C, X, 0];
                } else if (60 <= H && H < 120) {
                    temp = [X, C, 0];
                } else if (120 <= H && H < 180) {
                    temp = [0, C, X];
                } else if (180 <= H && H < 240) {
                    temp = [0, X, C];
                } else if (240 <= H && H < 300) {
                    temp = [X, 0, C];
                } else if (300 <= H && H < 360) {
                    temp = [C, 0, X];
                }

                return {
                    r: Math.ceil((temp[0] + m) * 255),
                    g: Math.ceil((temp[1] + m) * 255),
                    b: Math.ceil((temp[2] + m) * 255)
                };
            },

            /**
             * @method RGBtoHSV
             *
             * convert rgb to hsv
             *
             * 		color.RGBtoHSV(0, 0, 255) === { h : 240, s : 1, v : 1 } === '#FFFF00'
             *
             * @param {Number} R  red color value
             * @param {Number} G  green color value
             * @param {Number} B  blue color value
             * @return {Object}  hsv color code
             */
            RGBtoHSV: function RGBtoHSV(R, G, B) {

                var R1 = R / 255;
                var G1 = G / 255;
                var B1 = B / 255;

                var MaxC = Math.max(R1, G1, B1);
                var MinC = Math.min(R1, G1, B1);

                var DeltaC = MaxC - MinC;

                var H = 0;

                if (DeltaC == 0) {
                    H = 0;
                } else if (MaxC == R1) {
                    H = 60 * ((G1 - B1) / DeltaC % 6);
                } else if (MaxC == G1) {
                    H = 60 * ((B1 - R1) / DeltaC + 2);
                } else if (MaxC == B1) {
                    H = 60 * ((R1 - G1) / DeltaC + 4);
                }

                if (H < 0) {
                    H = 360 + H;
                }

                var S = 0;

                if (MaxC == 0) S = 0;else S = DeltaC / MaxC;

                var V = MaxC;

                return { h: H, s: S, v: V };
            },

            trim: function trim(str) {
                return (str || "").replace(/^\s+|\s+$/g, '');
            },

            /**
             * @method lighten
             *
             * rgb 컬러 밝은 농도로 변환
             *
             * @param {String} color   RGB color code
             * @param {Number} rate 밝은 농도
             * @return {String}
             */
            lighten: function lighten(color, rate) {
                color = color.replace(/[^0-9a-f]/gi, '');
                rate = rate || 0;

                var rgb = [],
                    c,
                    i;
                for (i = 0; i < 6; i += 2) {
                    c = parseInt(color.substr(i, 2), 16);
                    c = Math.round(Math.min(Math.max(0, c + c * rate), 255)).toString(16);
                    rgb.push(("00" + c).substr(c.length));
                }

                return "#" + rgb.join("");
            },

            /**
             * @method darken
             *
             * rgb 컬러 어두운 농도로 변환
             *
             * @param {String} color   RGB color code
             * @param {Number} rate 어두운 농도
             * @return {String}
             */
            darken: function darken(color, rate) {
                return this.lighten(color, -rate);
            },

            /**
             * @method parse
             *
             * gradient color string parsing
             *
             * @param {String} color
             * @returns {*}
             */
            parse: function parse(color) {
                return this.parseGradient(color);
            },

            /**
             * @method parseGrident
             *
             * gradient parser
             *
             *      linear(left) #fff,#000
             *      linear(right) #fff,50 yellow,black
             *      radial(50%,50%,50%,50,50)
             *
             * @param {String} color
             */
            parseGradient: function parseGradient(color) {
                var matches = color.match(this.regex);

                if (!matches) return color;

                var type = this.trim(matches[1]);
                var attr = this.parseAttr(type, this.trim(matches[2]));
                var stops = this.parseStop(this.trim(matches[3]));

                var obj = { type: type + "Gradient", attr: attr, children: stops };

                return obj;
            },

            parseStop: function parseStop(stop) {
                var stop_list = stop.split(",");

                var stops = [];

                for (var i = 0, len = stop_list.length; i < len; i++) {
                    var stop = stop_list[i];

                    var arr = stop.split(" ");

                    if (arr.length == 0) continue;

                    if (arr.length == 1) {
                        stops.push({ type: "stop", attr: { "stop-color": arr[0] } });
                    } else if (arr.length == 2) {
                        stops.push({ type: "stop", attr: { "offset": arr[0], "stop-color": arr[1] } });
                    } else if (arr.length == 3) {
                        stops.push({ type: "stop", attr: { "offset": arr[0], "stop-color": arr[1], "stop-opacity": arr[2] } });
                    }
                }

                var start = -1;
                var end = -1;
                for (var i = 0, len = stops.length; i < len; i++) {
                    var stop = stops[i];

                    if (i == 0) {
                        if (!stop.offset) stop.offset = 0;
                    } else if (i == len - 1) {
                        if (!stop.offset) stop.offset = 1;
                    }

                    if (start == -1 && typeof stop.offset == 'undefined') {
                        start = i;
                    } else if (end == -1 && typeof stop.offset == 'undefined') {
                        end = i;

                        var count = end - start;

                        var endOffset = stops[end].offset.indexOf("%") > -1 ? parseFloat(stops[end].offset) / 100 : stops[end].offset;
                        var startOffset = stops[start].offset.indexOf("%") > -1 ? parseFloat(stops[start].offset) / 100 : stops[start].offset;

                        var dist = endOffset - startOffset;
                        var value = dist / count;

                        var offset = startOffset + value;
                        for (var index = start + 1; index < end; index++) {
                            stops[index].offset = offset;

                            offset += value;
                        }

                        start = end;
                        end = -1;
                    }
                }

                return stops;
            },

            parseAttr: function parseAttr(type, str) {

                if (type == 'linear') {
                    switch (str) {
                        case "":
                        case "left":
                            return { x1: 0, y1: 0, x2: 1, y2: 0, direction: str || "left" };
                        case "right":
                            return { x1: 1, y1: 0, x2: 0, y2: 0, direction: str };
                        case "top":
                            return { x1: 0, y1: 0, x2: 0, y2: 1, direction: str };
                        case "bottom":
                            return { x1: 0, y1: 1, x2: 0, y2: 0, direction: str };
                        case "top left":
                            return { x1: 0, y1: 0, x2: 1, y2: 1, direction: str };
                        case "top right":
                            return { x1: 1, y1: 0, x2: 0, y2: 1, direction: str };
                        case "bottom left":
                            return { x1: 0, y1: 1, x2: 1, y2: 0, direction: str };
                        case "bottom right":
                            return { x1: 1, y1: 1, x2: 0, y2: 0, direction: str };
                        default:
                            var arr = str.split(",");
                            for (var i = 0, len = arr.length; i < len; i++) {
                                if (arr[i].indexOf("%") == -1) arr[i] = parseFloat(arr[i]);
                            }

                            return { x1: arr[0], y1: arr[1], x2: arr[2], y2: arr[3] };
                    }
                } else {
                    var arr = str.split(",");
                    for (var i = 0, len = arr.length; i < len; i++) {

                        if (arr[i].indexOf("%") == -1) arr[i] = parseFloat(arr[i]);
                    }

                    return { cx: arr[0], cy: arr[1], r: arr[2], fx: arr[3], fy: arr[4] };
                }
            },

            colorHash: function colorHash(name, callback) {
                // Return an rgb() color string that is a hash of the provided name,
                // and with a warm palette.
                var vector = 0;

                if (name) {
                    name = name.replace(/.*`/, ""); // drop module name if present
                    name = name.replace(/\(.*/, ""); // drop extra info
                    vector = generateHash(name);
                }

                if (typeof callback == "function") {
                    return callback(vector);
                }

                return {
                    r: 200 + Math.round(55 * vector),
                    g: 0 + Math.round(230 * (1 - vector)),
                    b: 0 + Math.round(55 * (1 - vector))
                };
            }

        };

        self.map.parula = function (count) {
            return self.map(['#352a87', '#0f5cdd', '#00b5a6', '#ffc337', '#fdff00'], count);
        };
        self.map.jet = function (count) {
            return self.map(['#00008f', '#0020ff', '#00ffff', '#51ff77', '#fdff00', '#ff0000', '#800000'], count);
        };
        self.map.hsv = function (count) {
            return self.map(['#ff0000', '#ffff00', '#00ff00', '#00ffff', '#0000ff', '#ff00ff', '#ff0000'], count);
        };
        self.map.hot = function (count) {
            return self.map(['#0b0000', '#ff0000', '#ffff00', '#ffffff'], count);
        };
        self.map.pink = function (count) {
            return self.map(['#1e0000', '#bd7b7b', '#e7e5b2', '#ffffff'], count);
        };
        self.map.bone = function (count) {
            return self.map(['#000000', '#4a4a68', '#a6c6c6', '#ffffff'], count);
        };
        self.map.copper = function (count) {
            return self.map(['#000000', '#3d2618', '#9d623e', '#ffa167', '#ffc77f'], count);
        };

        return self;
    }
};

var collection = {
    name: "collection",
    extend: null,
    component: function component() {
        var UICollection = function UICollection(type, selector, options, list) {
            this.type = type;
            this.selector = selector;
            this.options = options;

            this.destroy = function () {
                for (var i = 0; i < list.length; i++) {
                    list[i].destroy();
                }
            };

            for (var i = 0; i < list.length; i++) {
                this.push(list[i]);
            }
        };

        UICollection.prototype = Object.create(Array.prototype);

        return UICollection;
    }
};

var manager = {
    name: "manager",
    extend: null,
    component: function component() {
        var _ = jui$1.include("util.base");

        var UIManager = new function () {
            var instances = [],
                classes = [];

            /**
             * @method add
             * Adds a component object created
             *
             * @param {Object} ui UI instance
             */
            this.add = function (uiIns) {
                instances.push(uiIns);
            };

            /**
             * @method emit
             * Generates a custom event to an applicable component
             *
             * @param {String} key Selector or UI type
             * @param {String} type Event type
             * @param {Array} args Event arguments
             */
            this.emit = function (key, type, args) {
                var targets = [];

                for (var i = 0; i < instances.length; i++) {
                    var uiSet = instances[i];

                    if (key == uiSet.selector || key == uiSet.type) {
                        targets.push(uiSet);
                    }
                }

                for (var i = 0; i < targets.length; i++) {
                    var uiSet = targets[i];

                    for (var j = 0; j < uiSet.length; j++) {
                        uiSet[j].emit(type, args);
                    }
                }
            };

            /**
             * @method get
             * Gets a component currently created
             *
             * @param {Integer/String} key
             * @returns {Object/Array} UI instance
             */
            this.get = function (key) {
                if (_.typeCheck("integer", key)) {
                    return instances[key];
                } else if (_.typeCheck("string", key)) {
                    // 셀렉터 객체 검색
                    for (var i = 0; i < instances.length; i++) {
                        var uiSet = instances[i];

                        if (key == uiSet.selector) {
                            return uiSet.length == 1 ? uiSet[0] : uiSet;
                        }
                    }

                    // 모듈 객체 검색
                    var result = [];
                    for (var i = 0; i < instances.length; i++) {
                        var uiSet = instances[i];

                        if (key == uiSet.type) {
                            result.push(uiSet);
                        }
                    }

                    return result;
                }
            };

            /**
             * @method getAll
             * Gets all components currently created
             *
             * @return {Array} UI instances
             */
            this.getAll = function () {
                return instances;
            };

            /**
             * @method remove
             * Removes a component object in an applicable index from the list
             *
             * @param {Integer} index
             * @return {Object} Removed instance
             */
            this.remove = function (index) {
                if (_.typeCheck("integer", index)) {
                    // UI 객체 인덱스
                    return instances.splice(index, 1)[0];
                }
            };

            /**
             * @method shift
             * Removes the last component object from the list
             *
             * @return {Object} Removed instance
             */
            this.shift = function () {
                return instances.shift();
            };

            /**
             * @method pop
             * Removes the first component object from the list
             *
             * @return {Object} Removed instance
             */
            this.pop = function () {
                return instances.pop();
            };

            /**
             * @method size
             * Gets the number of objects currently created
             *
             * @return {Number}
             */
            this.size = function () {
                return instances.length;
            };

            /**
             * @method addClass
             * Adds a component class
             *
             * @param {Object} uiCls UI Class
             */
            this.addClass = function (uiCls) {
                classes.push(uiCls);
            };

            /**
             * @method getClass
             * Gets a component class
             *
             * @param {String/Integer} key
             * @return {Object}
             */
            this.getClass = function (key) {
                if (_.typeCheck("integer", key)) {
                    return classes[key];
                } else if (_.typeCheck("string", key)) {
                    for (var i = 0; i < classes.length; i++) {
                        if (key == classes[i].type) {
                            return classes[i];
                        }
                    }
                }

                return null;
            };

            /**
             * @method getClassAll
             * Gets all component classes
             *
             * @return {Array}
             */
            this.getClassAll = function () {
                return classes;
            };

            /**
             * @method create
             * It is possible to create a component dynamically after the ready point
             *
             * @param {String} type UI type
             * @param {String/DOMElement} selector
             * @param {Object} options
             * @return {Object}
             */
            this.create = function (type, selector, options) {
                var cls = UIManager.getClass(type);

                if (_.typeCheck("null", cls)) {
                    throw new Error("JUI_CRITICAL_ERR: '" + type + "' does not exist");
                }

                return cls["class"](selector, options);
            };
        }();

        return UIManager;
    }
};

jui$1.use(dom, manager, collection);

var UICore = {
    name: "core",
    extend: null,
    component: function component() {
        var _ = jui$1.include("util.base");
        var $ = jui$1.include("util.dom");
        var UIManager = jui$1.include("manager");
        var UICollection = jui$1.include("collection");

        var UICore = function UICore() {

            /**
             * @method emit
             * Generates a custom event. The first parameter is the type of a custom event. A function defined as an option or on method is called
             *
             * @param {String} type Event type
             * @param {Function} args Event Arguments
             * @return {Mixed}
             */
            this.emit = function (type, args) {
                if (!_.typeCheck("string", type)) return;
                var result;

                for (var i = 0; i < this.event.length; i++) {
                    var e = this.event[i];

                    if (e.type == type.toLowerCase()) {
                        var arrArgs = _.typeCheck("array", args) ? args : [args];
                        result = e.callback.apply(this, arrArgs);
                    }
                }

                return result;
            };

            /**
             * @method on
             * A callback function defined as an on method is run when an emit method is called
             *
             * @param {String} type Event type
             * @param {Function} callback
             */
            this.on = function (type, callback) {
                if (!_.typeCheck("string", type) || !_.typeCheck("function", callback)) return;
                this.event.push({ type: type.toLowerCase(), callback: callback, unique: false });
            };

            /**
             * @method off
             * Removes a custom event of an applicable type or callback handler
             *
             * @param {String} type Event type
             */
            this.off = function (type) {
                var event = [];

                for (var i = 0; i < this.event.length; i++) {
                    var e = this.event[i];

                    if (_.typeCheck("function", type) && e.callback != type || _.typeCheck("string", type) && e.type != type.toLowerCase()) {
                        event.push(e);
                    }
                }

                this.event = event;
            };

            /**
             * @method setOption
             * Dynamically defines the options of a UI
             *
             * @param {String} key
             * @param {Mixed} value
             */
            this.setOption = function (key, value) {
                if (_.typeCheck("object", key)) {
                    for (var k in key) {
                        this.options[k] = key[k];
                    }
                } else {
                    this.options[key] = value;
                }
            };

            /**
             * @method destroy
             * Removes all events set in a UI obejct and the DOM element
             *
             */
            this.destroy = function () {
                if (this.__proto__) {
                    for (var key in this.__proto__) {
                        delete this.__proto__[key];
                    }
                }
            };
        };

        UICore.build = function (UI) {

            return function (selector, options) {
                var list = [],
                    elemList = [];

                if (_.typeCheck("string", selector)) {
                    elemList = $.find(selector);
                } else if (_.typeCheck("object", selector)) {
                    elemList.push(selector);
                } else {
                    elemList.push(document.createElement("div"));
                }

                for (var i = 0, len = elemList.length; i < len; i++) {
                    list[i] = jui$1.createUIObject(UI, selector, i, elemList[i], options);
                }

                // UIManager에 데이터 입력
                UIManager.add(new UICollection(UI.type, selector, options, list));

                // 객체가 없을 경우에는 null을 반환 (기존에는 빈 배열을 반환)
                if (list.length == 0) {
                    return null;
                } else if (list.length == 1) {
                    return list[0];
                }

                return list;
            };
        };

        UICore.init = function (UI) {
            var uiObj = null;

            if ((typeof UI === "undefined" ? "undefined" : _typeof(UI)) === "object") {
                uiObj = UICore.build(UI);
                UIManager.addClass({ type: UI.type, "class": uiObj });
            }

            return uiObj;
        };

        UICore.setup = function () {
            return {
                /**
                 * @cfg {Object} [event={}]
                 * Defines a DOM event to be used in a UI
                 */
                event: {}
            };
        };

        return UICore;
    }
};

var time = {
    name: "util.time",
    extend: null,
    component: function component() {
        var _ = jui$1.include("util.base");

        var self = {

            //constant
            MILLISECOND: 1000,
            MINUTE: 1000 * 60,
            HOUR: 1000 * 60 * 60,
            DAY: 1000 * 60 * 60 * 24,

            // unit
            years: "years",
            months: "months",
            days: "days",
            hours: "hours",
            minutes: "minutes",
            seconds: "seconds",
            milliseconds: "milliseconds",
            weeks: "weeks",

            /**
             * @method diff
             *
             * caculate time difference from a to b
             *
             * @param type
             * @param a
             * @param b
             * @returns {number}
             */
            diff: function diff(type, a, b) {
                var milliseconds = +a - +b;

                if (type == 'seconds') {
                    return Math.abs(Math.floor(milliseconds / self.MILLISECOND));
                } else if (type == 'minutes') {
                    return Math.abs(Math.floor(milliseconds / self.MINUTE));
                } else if (type == 'hours') {
                    return Math.abs(Math.floor(milliseconds / self.HOUR));
                } else if (type == 'days') {
                    return Math.abs(Math.floor(milliseconds / self.DAY));
                }

                return milliseconds;
            },

            /**
             * @method add
             *
             * add time
             *
             * 		var date = new Date();
             * 		time.add(date, time.hours, 1); 		// add an hour on now
             * 		time.add(date, time.hours, 1, time.minutes, 2); 		// add an hour and 2 minutes on now
             *
             * @param {Object} date
             */
            add: function add(date) {

                if (arguments.length <= 2) {
                    return date;
                }

                if (arguments.length > 2) {
                    var d = new Date(+date);

                    for (var i = 1; i < arguments.length; i += 2) {

                        var split = typeof arguments[i] == 'string' ? this[arguments[i]] : arguments[i];
                        var time = arguments[i + 1];

                        if (this.years == split) {
                            d.setFullYear(d.getFullYear() + time);
                        } else if (this.months == split) {
                            d.setMonth(d.getMonth() + time);
                        } else if (this.days == split) {
                            d.setDate(d.getDate() + time);
                        } else if (this.hours == split) {
                            d.setHours(d.getHours() + time);
                        } else if (this.minutes == split) {
                            d.setMinutes(d.getMinutes() + time);
                        } else if (this.seconds == split) {
                            d.setSeconds(d.getSeconds() + time);
                        } else if (this.milliseconds == split) {
                            d.setMilliseconds(d.getMilliseconds() + time);
                        } else if (this.weeks == split) {
                            d.setDate(d.getDate() + time * 7);
                        }
                    }

                    return d;
                }
            },

            /**
             * @method format
             *
             * {util.dateFormat} 's alias
             *
             * @param {Object} date
             * @param {Object} format
             * @param {Object} utc
             */
            format: function format(date, _format, utc) {
                return _.dateFormat(date, _format, utc);
            }
        };

        return self;
    }
};

jui$1.use(math);

var transform = {
    name: "util.transform",
    extend: null,
    component: function component() {
        var math$$1 = jui$1.include("util.math");

        var Transform = function Transform(points) {
            function calculate(m) {
                for (var i = 0, count = points.length; i < count; i++) {
                    points[i] = math$$1.matrix(m, points[i]);
                }

                return points;
            }

            // 매트릭스 맵
            this.matrix = function () {
                var a = arguments,
                    type = a[0];

                if (type == "move") {
                    return [new Float32Array([1, 0, a[1]]), new Float32Array([0, 1, a[2]]), new Float32Array([0, 0, 1])];
                } else if (type == "scale") {
                    return [new Float32Array([a[1], 0, 0]), new Float32Array([0, a[2], 0]), new Float32Array([0, 0, 1])];
                } else if (type == "rotate") {
                    return [new Float32Array([Math.cos(math$$1.radian(a[1])), -Math.sin(math$$1.radian(a[1])), 0]), new Float32Array([Math.sin(math$$1.radian(a[1])), Math.cos(math$$1.radian(a[1])), 0]), new Float32Array([0, 0, 1])];
                } else if (type == "move3d") {
                    return [new Float32Array([1, 0, 0, a[1]]), new Float32Array([0, 1, 0, a[2]]), new Float32Array([0, 0, 1, a[3]]), new Float32Array([0, 0, 0, 1])];
                } else if (type == "scale3d") {
                    return [new Float32Array([a[1], 0, 0, 0]), new Float32Array([0, a[2], 0, 0]), new Float32Array([0, 0, a[3], 0]), new Float32Array([0, 0, 0, 1])];
                } else if (type == "rotate3dz") {
                    return [new Float32Array([Math.cos(math$$1.radian(a[1])), -Math.sin(math$$1.radian(a[1])), 0, 0]), new Float32Array([Math.sin(math$$1.radian(a[1])), Math.cos(math$$1.radian(a[1])), 0, 0]), new Float32Array([0, 0, 1, 0]), new Float32Array([0, 0, 0, 1])];
                } else if (type == "rotate3dx") {
                    return [new Float32Array([1, 0, 0, 0]), new Float32Array([0, Math.cos(math$$1.radian(a[1])), -Math.sin(math$$1.radian(a[1])), 0]), new Float32Array([0, Math.sin(math$$1.radian(a[1])), Math.cos(math$$1.radian(a[1])), 0]), new Float32Array([0, 0, 0, 1])];
                } else if (type == "rotate3dy") {
                    return [new Float32Array([Math.cos(math$$1.radian(a[1])), 0, Math.sin(math$$1.radian(a[1])), 0]), new Float32Array([0, 1, 0, 0]), new Float32Array([-Math.sin(math$$1.radian(a[1])), 0, Math.cos(math$$1.radian(a[1])), 0]), new Float32Array([0, 0, 0, 1])];
                }
            };

            // 2차원 이동
            this.move = function (dx, dy) {
                return calculate(this.matrix("move", dx, dy));
            };

            // 3차원 이동
            this.move3d = function (dx, dy, dz) {
                return calculate(this.matrix("move3d", dx, dy, dz));
            };

            // 2차원 스케일
            this.scale = function (sx, sy) {
                return calculate(this.matrix("scale", sx, sy));
            };

            // 3차원 스케일
            this.scale3d = function (sx, sy, sz) {
                return calculate(this.matrix("scale3d", sx, sy, sz));
            };

            // 2차원 회전
            this.rotate = function (angle) {
                return calculate(this.matrix("rotate", angle));
            };

            // Z축 중심 3차원 회전 - 롤(ROLL)
            this.rotate3dz = function (angle) {
                return calculate(this.matrix("rotate3dz", angle));
            };

            // X축 중심 3차원 회전 - 롤(PITCH)
            this.rotate3dx = function (angle) {
                return calculate(this.matrix("rotate3dx", angle));
            };

            // Y축 중심 3차원 회전 - 요(YAW)
            this.rotate3dy = function (angle) {
                return calculate(this.matrix("rotate3dy", angle));
            };

            // 임의의 행렬 처리
            this.custom = function (m) {
                return calculate(m);
            };

            // 행렬의 병합
            this.merge = function () {
                var a = arguments,
                    m = this.matrix.apply(this, a[0]);

                for (var i = 1; i < a.length; i++) {
                    m = math$$1.matrix(m, this.matrix.apply(this, a[i]));
                }

                return calculate(m);
            };

            // 행렬의 병합 (콜백 형태)
            this.merge2 = function (callback) {
                for (var i = 0, count = points.length; i < count; i++) {
                    var a = callback.apply(null, points[i]),
                        m = this.matrix.apply(this, a[0]);

                    for (var j = 1; j < a.length; j++) {
                        m = math$$1.matrix(m, this.matrix.apply(this, a[j]));
                    }

                    points[i] = math$$1.matrix(m, points[i]);
                }
            };
        };

        return Transform;
    }
};

var CanvasUtil = {
    name: "util.canvas.base",
    extend: null,
    component: function component() {
        var CanvasBase = function CanvasBase(context) {
            this.clearContext = function () {
                context.clearRect(0, 0, context.canvas.width, context.canvas.height);
            };

            this.drawLine = function (x1, y1, x2, y2, color) {
                var lineWidth = arguments.length > 5 && arguments[5] !== undefined ? arguments[5] : 1;

                color = color || '#434d6b';
                context.beginPath();
                context.moveTo(x1, y1);
                context.lineTo(x2, y2);
                context.lineWidth = lineWidth;
                context.strokeStyle = color;
                context.stroke();
            };

            this.drawCurve = function (points, minY, maxY) {
                var tension = arguments.length > 3 && arguments[3] !== undefined ? arguments[3] : 0.5;
                var isClosed = arguments.length > 4 && arguments[4] !== undefined ? arguments[4] : false;
                var numOfSegments = arguments.length > 5 && arguments[5] !== undefined ? arguments[5] : 16;

                context.beginPath();
                var pts = points.reduce(function (prev, e) {
                    prev.push(e[0], e[1]);
                    return prev;
                }, []);
                var ptsa = getCurvePoints(pts, minY, maxY, tension, isClosed, numOfSegments);
                context.moveTo(ptsa[0], ptsa[1]);
                for (var i = 2; i < ptsa.length - 1; i += 2) {
                    context.lineTo(ptsa[i], ptsa[i + 1]);
                }
            };

            this.drawDashedLine = function (x1, y1, x2, y2, color) {
                var dash = arguments.length > 5 && arguments[5] !== undefined ? arguments[5] : [3, 3];
                var lineWidth = arguments.length > 6 && arguments[6] !== undefined ? arguments[6] : 1;

                color = color || '#434d6b';
                context.beginPath();
                context.moveTo(x1, y1);
                context.lineTo(x2, y2);
                context.lineWidth = lineWidth;
                context.strokeStyle = color;
                var originDash = context.getLineDash();
                context.setLineDash(dash);
                context.stroke();
                context.setLineDash(originDash);
            };

            this.drawLines = function (color) {
                color = color || '#434d6b';
                context.beginPath();

                for (var _len = arguments.length, pos = Array(_len > 1 ? _len - 1 : 0), _key = 1; _key < _len; _key++) {
                    pos[_key - 1] = arguments[_key];
                }

                context.moveTo(pos[0][0], pos[0][1]);
                pos.slice(1).map(function (e) {
                    return context.lineTo(e[0], e[1]);
                });
                context.lineWidth = 1;
                context.strokeStyle = color;
                context.stroke();
            };

            this.drawRoundRect = function (x, y, width, height, radius) {
                context.beginPath();
                context.moveTo(x, y + radius);

                // left line
                context.lineTo(x, y + height - radius);
                context.arcTo(x, y + height, x + radius, y + height, radius);

                // bottom line
                context.lineTo(x + width - radius, y + height);
                context.arcTo(x + width, y + height, x + width, y + height - radius, radius);

                // right line
                context.lineTo(x + width, y + radius);
                context.arcTo(x + width, y, x + width - radius, y, radius);

                // top line
                context.lineTo(x + radius, y);
                context.arcTo(x, y, x, y + radius, radius);

                context.closePath();
            };

            this.drawFreeRect = function (x1, y1, x2, y2, x3, y3, x4, y4, color) {
                var borderColor = arguments.length > 9 && arguments[9] !== undefined ? arguments[9] : null;

                color = color || '#ffffff';
                context.beginPath();
                context.moveTo(x1, y1);
                context.lineTo(x2, y2);
                context.lineTo(x3, y3);
                context.lineTo(x4, y4);
                context.closePath();
                context.fillStyle = color;
                if (borderColor != null) {
                    context.lineWidth = 2;
                    context.strokeStyle = borderColor;
                    context.stroke();
                }
                context.fill();
            };

            this.drawFreeRectStroke = function (x1, y1, x2, y2, x3, y3, x4, y4, color) {
                color = color || '#ffffff';
                context.beginPath();
                context.moveTo(x1, y1);
                context.lineTo(x2, y2);
                context.lineTo(x3, y3);
                context.lineTo(x4, y4);
                context.lineWidth = 1;
                context.strokeStyle = color;
                context.stroke();
            };

            this.drawTriangle = function (x1, y1, d, color) {
                color = color || '#ffffff';
                context.beginPath();
                context.moveTo(x1, y1 - d);
                context.lineTo(x1 - d, y1 + d);
                context.lineTo(x1 + d, y1 + d);
                context.closePath();
                context.fillStyle = color;
                context.fill();
            };

            this.drawSquare = function (x1, y1, d, color) {
                color = color || '#ffffff';
                context.beginPath();
                context.moveTo(x1 - d, y1 - d);
                context.lineTo(x1 - d, y1 + d);
                context.lineTo(x1 + d, y1 + d);
                context.lineTo(x1 + d, y1 - d);
                context.closePath();
                context.fillStyle = color;
                context.fill();
            };

            this.drawPage = function (value, x1, y1, color) {
                var border = arguments.length > 4 && arguments[4] !== undefined ? arguments[4] : false;

                drawFreeRect(context, value + x1, y1, value + x1 - 20, y1 + 14, value + x1 - 20, y1 + 52, value + x1, y1 + 38, color, border ? 'rgba(255,255,255,0.2)' : null);
            };

            this.drawCircle = function (x, y, d, color) {
                color = color || 'white';
                d = d || 1;
                context.beginPath();
                context.arc(x, y, d, 0, 2 * Math.PI);
                context.fillStyle = color;
                context.fill();
            };

            this.drawBullet = function (x, y) {
                var width = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : 74;

                var grd = context.createLinearGradient(x, y, x + width, y);
                grd.addColorStop(0, '#1074fc');
                grd.addColorStop(1, 'rgba(37, 172, 254, 0)');

                context.beginPath();
                context.arc(x, y, 2, Math.PI / 2, Math.PI / 2 * 3);
                context.lineTo(x + width, y - 2);
                context.lineTo(x + width, y + 2);
                context.closePath();
                context.fillStyle = grd;
                context.fill();
                context.fillStyle = grd;
            };

            this.getCurvePoints = function (pts, minY, maxY) {
                var tension = arguments.length > 3 && arguments[3] !== undefined ? arguments[3] : 0.5;
                var isClosed = arguments.length > 4 && arguments[4] !== undefined ? arguments[4] : false;
                var numOfSegments = arguments.length > 5 && arguments[5] !== undefined ? arguments[5] : 16;

                var _pts = [],
                    res = [],

                // clone array
                x,
                    y,

                // our x,y coords
                t1x,
                    t2x,
                    t1y,
                    t2y,

                // tension vectors
                c1,
                    c2,
                    c3,
                    c4,

                // cardinal points
                st,
                    t,
                    i; // steps based on num. of segments

                // clone array so we don't change the original
                _pts = pts.slice(0);

                // The algorithm require a previous and next point to the actual point array.
                // Check if we will draw closed or open curve.
                // If closed, copy end points to beginning and first points to end
                // If open, duplicate first points to befinning, end points to end
                if (isClosed) {
                    _pts.unshift(pts[pts.length - 1]);
                    _pts.unshift(pts[pts.length - 2]);
                    _pts.unshift(pts[pts.length - 1]);
                    _pts.unshift(pts[pts.length - 2]);
                    _pts.push(pts[0]);
                    _pts.push(pts[1]);
                } else {
                    _pts.unshift(pts[1]); //copy 1. point and insert at beginning
                    _pts.unshift(pts[0]);
                    _pts.push(pts[pts.length - 2]); //copy last point and append
                    _pts.push(pts[pts.length - 1]);
                }

                // ok, lets start..

                // 1. loop goes through point array
                // 2. loop goes through each segment between the 2 pts + 1e point before and after
                for (i = 2; i < _pts.length - 4; i += 2) {
                    for (t = 0; t <= numOfSegments; t++) {

                        // calc tension vectors
                        t1x = (_pts[i + 2] - _pts[i - 2]) * tension;
                        t2x = (_pts[i + 4] - _pts[i]) * tension;

                        t1y = (_pts[i + 3] - _pts[i - 1]) * tension;
                        t2y = (_pts[i + 5] - _pts[i + 1]) * tension;

                        // calc step
                        st = t / numOfSegments;

                        // calc cardinals
                        c1 = 2 * Math.pow(st, 3) - 3 * Math.pow(st, 2) + 1;
                        c2 = -(2 * Math.pow(st, 3)) + 3 * Math.pow(st, 2);
                        c3 = Math.pow(st, 3) - 2 * Math.pow(st, 2) + st;
                        c4 = Math.pow(st, 3) - Math.pow(st, 2);

                        // calc x and y cords with common control vectors
                        x = c1 * _pts[i] + c2 * _pts[i + 2] + c3 * t1x + c4 * t2x;
                        y = c1 * _pts[i + 1] + c2 * _pts[i + 3] + c3 * t1y + c4 * t2y;

                        //store points in array
                        res.push(x);
                        if (y > maxY) res.push(maxY);else if (y < minY) res.push(minY);else res.push(y);
                    }
                }

                return res;
            };
        };

        return CanvasBase;
    }
};

var pixelRatio = function () {
    var canvas = document.createElement('canvas'),
        context = canvas.getContext('2d'),
        backingStore = context && (context.backingStorePixelRatio || context.webkitBackingStorePixelRatio || context.mozBackingStorePixelRatio || context.msBackingStorePixelRatio || context.oBackingStorePixelRatio || context.backingStorePixelRatio) || 1;

    return (window.devicePixelRatio || 1) / backingStore;
}();

function polyfillForCanvasRenderingContext2D(prototype) {
    var forEach = function forEach(obj, func) {
        for (var p in obj) {
            if (obj.hasOwnProperty(p)) {
                func(obj[p], p);
            }
        }
    },
        ratioArgs = {
        'fillRect': 'all',
        'clearRect': 'all',
        'strokeRect': 'all',
        'moveTo': 'all',
        'lineTo': 'all',
        'arc': [0, 1, 2],
        'arcTo': 'all',
        'bezierCurveTo': 'all',
        'isPointinPath': 'all',
        'isPointinStroke': 'all',
        'quadraticCurveTo': 'all',
        'rect': 'all',
        'translate': 'all',
        'createRadialGradient': 'all',
        'createLinearGradient': 'all'
    };

    if (pixelRatio === 1) return;

    forEach(ratioArgs, function (value, key) {
        prototype[key] = function (_super) {
            return function () {
                var i = void 0,
                    len = void 0,
                    args = Array.prototype.slice.call(arguments);

                if (value === 'all') {
                    args = args.map(function (a) {
                        return a * pixelRatio;
                    });
                } else if (Array.isArray(value)) {
                    for (i = 0, len = value.length; i < len; i++) {
                        args[value[i]] *= pixelRatio;
                    }
                }

                return _super.apply(this, args);
            };
        }(prototype[key]);
    });

    // Stroke lineWidth adjustment
    prototype.stroke = function (_super) {
        return function () {
            this.lineWidth *= pixelRatio;
            _super.apply(this, arguments);
            this.lineWidth /= pixelRatio;
        };
    }(prototype.stroke);

    // Text
    //
    prototype.fillText = function (_super) {
        return function () {
            var args = Array.prototype.slice.call(arguments);

            args[1] *= pixelRatio; // x
            args[2] *= pixelRatio; // y

            this.font = this.font.replace(/(\d+)(px|em|rem|pt)/g, function (w, m, u) {
                return m * pixelRatio + u;
            });

            _super.apply(this, args);

            this.font = this.font.replace(/(\d+)(px|em|rem|pt)/g, function (w, m, u) {
                return m / pixelRatio + u;
            });
        };
    }(prototype.fillText);

    prototype.strokeText = function (_super) {
        return function () {
            var args = Array.prototype.slice.call(arguments);

            args[1] *= pixelRatio; // x
            args[2] *= pixelRatio; // y

            this.font = this.font.replace(/(\d+)(px|em|rem|pt)/g, function (w, m, u) {
                return m * pixelRatio + u;
            });

            _super.apply(this, args);

            this.font = this.font.replace(/(\d+)(px|em|rem|pt)/g, function (w, m, u) {
                return m / pixelRatio + u;
            });
        };
    }(prototype.strokeText);
}

function polyfillForHTMLCanvasElement(prototype) {
    prototype.getContext = function (_super) {
        return function (type) {
            var context = _super.call(this, type);

            if (type === '2d') {
                if (pixelRatio > 1) {
                    this.style.height = this.height + 'px';
                    this.style.width = this.width + 'px';
                    this.width *= pixelRatio;
                    this.height *= pixelRatio;
                }
            }

            return context;
        };
    }(prototype.getContext);
}

var CanvasHidpiUtil = {
    name: "util.canvas.hidpi",
    extend: null,
    component: function component() {
        return {
            polyfills: function polyfills() {
                polyfillForCanvasRenderingContext2D(CanvasRenderingContext2D.prototype);
                polyfillForHTMLCanvasElement(HTMLCanvasElement.prototype);
            },
            apply: function apply(context) {
                polyfillForCanvasRenderingContext2D(context);
            },
            pixelRatio: pixelRatio
        };
    }
};

var JUISvgElement = {
    name: "util.svg.element",
    extend: null,
    component: function component() {
        var Element = function Element() {
            var events = [];

            this.create = function (type, attr) {
                // 퍼블릭 프로퍼티
                this.element = document.createElementNS("http://www.w3.org/2000/svg", type);
                this.children = [];
                this.parent = null;
                this.styles = {};
                this.attributes = {};
                this.order = 0;

                // 기본 속성 설정
                this.attr(attr);
            };

            this.each = function (callback) {
                if (typeof callback != "function") return;

                for (var i = 0, len = this.children.length; i < len; i++) {
                    var self = this.children[i];
                    callback.apply(self, [i, self]);
                }

                return this.children;
            };

            this.get = function (index) {
                if (this.children[index]) {
                    return this.children[index];
                }

                return null;
            };

            this.index = function (obj) {
                for (var i = 0; i < this.children.length; i++) {
                    if (obj == this.children[i]) {
                        return i;
                    }
                }

                return -1;
            };

            this.append = function (elem) {
                if (elem instanceof Element) {
                    if (elem.parent) {
                        elem.remove();
                    }

                    this.children.push(elem);
                    elem.parent = this;
                }

                return this;
            };

            this.prepend = function (elem) {
                return this.insert(0, elem);
            };

            this.insert = function (index, elem) {
                if (elem.parent) {
                    elem.remove();
                }

                this.children.splice(index, 0, elem);
                elem.parent = this;

                return this;
            };

            this.remove = function () {
                var nChild = [],
                    pChild = this.parent.children;

                for (var i = 0; i < pChild.length; i++) {
                    if (pChild[i] == this) {
                        break;
                    }

                    nChild.push(pChild[i]);
                }

                this.parent.children = nChild;

                return this;
            };

            this.attr = function (attr) {
                if (typeof attr == "undefined" || !attr) return;

                if (typeof attr == "string") {
                    return this.attributes[attr] || this.element.getAttribute(attr);
                }

                for (var k in attr) {
                    this.attributes[k] = attr[k];

                    if (k.indexOf("xlink:") != -1) {
                        this.element.setAttributeNS("http://www.w3.org/1999/xlink", k, attr[k]);
                    } else {
                        this.element.setAttribute(k, attr[k]);
                    }
                }

                return this;
            };

            this.css = function (css) {
                var list = [];

                for (var k in css) {
                    this.styles[k] = css[k];
                }

                for (var k in css) {
                    list.push(k + ":" + css[k]);
                }

                this.attr({ style: list.join(";") });

                return this;
            };

            this.html = function (html) {
                // @deprecated
                this.element.innerHTML = html;

                return this;
            };

            this.text = function (text) {
                var children = this.element.childNodes;

                for (var i = 0; i < children.length; i++) {
                    this.element.removeChild(children[i]);
                }

                this.element.appendChild(document.createTextNode(text));
                return this;
            };

            this.on = function (type, handler) {
                var callback = function callback(e) {
                    if (typeof handler == "function") {
                        handler.call(this, e);
                    }
                };

                this.element.addEventListener(type, callback, false);
                events.push({ type: type, callback: callback });

                return this;
            };

            this.off = function (type) {
                if (!type) {
                    for (var i = 0, len = events.length; i < len; i++) {
                        var e = events.shift();

                        this.element.removeEventListener(e.type, e.callback, false);
                    }
                } else {
                    var newEvents = [];

                    for (var i = 0, len = events.length; i < len; i++) {
                        var e = events[i];

                        if (e.type != type) {
                            newEvents.push(e);
                        } else {
                            this.element.removeEventListener(e.type, e.callback, false);
                        }
                    }

                    events = newEvents;
                }

                return this;
            };

            this.hover = function (overHandler, outHandler) {
                var callback1 = function callback1(e) {
                    if (typeof overHandler == "function") {
                        overHandler.call(this, e);
                    }
                };

                var callback2 = function callback2(e) {
                    if (typeof outHandler == "function") {
                        outHandler.call(this, e);
                    }
                };

                this.element.addEventListener("mouseover", callback1, false);
                this.element.addEventListener("mouseout", callback2, false);
                events.push({ type: "mouseover", callback: callback1 });
                events.push({ type: "mouseout", callback: callback2 });

                return this;
            };

            this.size = function () {
                var size = { width: 0, height: 0 },
                    rect = this.element.getBoundingClientRect();

                if (!rect || rect.width == 0 && rect.height == 0) {
                    var height_list = ["height", "paddingTop", "paddingBottom", "borderTopWidth", "borderBottomWidth"],
                        width_list = ["width", "paddingLeft", "paddingRight", "borderLeftWidth", "borderRightWidth"];

                    var computedStyle = window.getComputedStyle(this.element);

                    for (var i = 0; i < height_list.length; i++) {
                        size.height += parseFloat(computedStyle[height_list[i]]);
                    }

                    for (var i = 0; i < width_list.length; i++) {
                        size.width += parseFloat(computedStyle[width_list[i]]);
                    }

                    size.width = size.width || this.element.getAttribute('width');
                    size.height = size.height || this.element.getAttribute('height');
                } else {
                    size.width = rect.width;
                    size.height = rect.height;
                }

                if (isNaN(size.width)) size.width = 0;
                if (isNaN(size.height)) size.height = 0;

                return size;
            };

            this.is = function (moduleId) {
                return this instanceof jui.include(moduleId);
            };
        };

        return Element;
    }
};

var JUISvgTransformElement = {
    name: "util.svg.element.transform",
    extend: "util.svg.element",
    component: function component() {
        var _ = jui$1.include("util.base");

        var TransElement = function TransElement() {
            var orders = {
                translate: null,
                scale: null,
                rotate: null,
                skew: null,
                matrix: null
            };

            function applyOrders(self) {
                var orderArr = [];

                for (var key in orders) {
                    if (orders[key]) orderArr.push(orders[key]);
                }

                self.attr({ transform: orderArr.join(" ") });
            }

            function getStringArgs(args) {
                var result = [];

                for (var i = 0; i < args.length; i++) {
                    result.push(args[i]);
                }

                return result.join(",");
            }

            this.translate = function () {
                orders["translate"] = "translate(" + getStringArgs(arguments) + ")";
                applyOrders(this);

                return this;
            };

            this.rotate = function (angle, x, y) {
                if (arguments.length == 1) {
                    var str = angle;
                } else if (arguments.length == 3) {
                    var str = angle + " " + x + "," + y;
                }

                orders["rotate"] = "rotate(" + str + ")";
                applyOrders(this);

                return this;
            };

            this.scale = function () {
                orders["scale"] = "scale(" + getStringArgs(arguments) + ")";
                applyOrders(this);

                return this;
            };

            this.skew = function () {
                orders["skew"] = "skew(" + getStringArgs(arguments) + ")";
                applyOrders(this);

                return this;
            };

            this.matrix = function () {
                orders["matrix"] = "matrix(" + getStringArgs(arguments) + ")";
                applyOrders(this);

                return this;
            };

            this.data = function (type) {
                var text = this.attr("transform"),
                    regex = {
                    translate: /[^translate()]+/g,
                    rotate: /[^rotate()]+/g,
                    scale: /[^scale()]+/g,
                    skew: /[^skew()]+/g,
                    matrix: /[^matrix()]+/g
                };

                if (_.typeCheck("string", text)) {
                    return text.match(regex[type])[0];
                }

                return null;
            };
        };

        return TransElement;
    }
};

var JUISvgPathElement = {
    name: "util.svg.element.path",
    extend: "util.svg.element.transform",
    component: function component() {
        var _ = jui$1.include("util.base");

        var PathElement = function PathElement() {
            var orders = [];

            this.moveTo = function (x, y, type) {
                orders.push((type || "m") + x + "," + y);
                return this;
            };
            this.MoveTo = function (x, y) {
                return this.moveTo(x, y, "M");
            };

            this.lineTo = function (x, y, type) {
                orders.push((type || "l") + x + "," + y);
                return this;
            };
            this.LineTo = function (x, y) {
                return this.lineTo(x, y, "L");
            };

            this.hLineTo = function (x, type) {
                orders.push((type || "h") + x);
                return this;
            };
            this.HLineTo = function (x) {
                return this.hLineTo(x, "H");
            };

            this.vLineTo = function (y, type) {
                orders.push((type || "v") + y);
                return this;
            };
            this.VLineTo = function (y) {
                return this.vLineTo(y, "V");
            };

            this.curveTo = function (x1, y1, x2, y2, x, y, type) {
                orders.push((type || "c") + x1 + "," + y1 + " " + x2 + "," + y2 + " " + x + "," + y);
                return this;
            };
            this.CurveTo = function (x1, y1, x2, y2, x, y) {
                return this.curveTo(x1, y1, x2, y2, x, y, "C");
            };

            this.sCurveTo = function (x2, y2, x, y, type) {
                orders.push((type || "s") + x2 + "," + y2 + " " + x + "," + y);
                return this;
            };
            this.SCurveTo = function (x2, y2, x, y) {
                return this.sCurveTo(x2, y2, x, y, "S");
            };

            this.qCurveTo = function (x1, y1, x, y, type) {
                orders.push((type || "q") + x1 + "," + y1 + " " + x + "," + y);
                return this;
            };
            this.QCurveTo = function (x1, y1, x, y) {
                return this.qCurveTo(x1, y1, x, y, "Q");
            };

            this.tCurveTo = function (x1, y1, x, y, type) {
                orders.push((type || "t") + x1 + "," + y1 + " " + x + "," + y);
                return this;
            };
            this.TCurveTo = function (x1, y1, x, y) {
                return this.tCurveTo(x1, y1, x, y, "T");
            };

            this.arc = function (rx, ry, x_axis_rotation, large_arc_flag, sweep_flag, x, y, type) {
                large_arc_flag = large_arc_flag ? 1 : 0;
                sweep_flag = sweep_flag ? 1 : 0;

                orders.push((type || "a") + rx + "," + ry + " " + x_axis_rotation + " " + large_arc_flag + "," + sweep_flag + " " + x + "," + y);
                return this;
            };
            this.Arc = function (rx, ry, x_axis_rotation, large_arc_flag, sweep_flag, x, y) {
                return this.arc(rx, ry, x_axis_rotation, large_arc_flag, sweep_flag, x, y, "A");
            };

            this.closePath = function (type) {
                orders.push(type || "z");
                return this;
            };
            this.ClosePath = function () {
                return this.closePath("Z");
            };

            this.join = function () {
                if (orders.length > 0) {
                    this.attr({ d: orders.join(" ") });
                    orders = [];
                }
            };

            this.length = function () {
                var id = _.createId(),
                    d = orders.join(" ");

                var svg = document.createElement("svg"),
                    path = document.createElementNS("http://www.w3.org/2000/svg", "path");

                path.setAttributeNS(null, "id", id);
                path.setAttributeNS(null, "d", d);
                svg.appendChild(path);

                document.body.appendChild(svg);
                var length = document.getElementById(id).getTotalLength();
                document.body.removeChild(svg);

                return length;
            };
        };

        return PathElement;
    }
};

var JUISvgPathRectElement = {
    name: "util.svg.element.path.rect",
    extend: "util.svg.element.path",
    component: function component() {
        var PathRectElement = function PathRectElement() {
            this.round = function (width, height, tl, tr, br, bl) {
                tl = !tl ? 0 : tl;
                tr = !tr ? 0 : tr;
                br = !br ? 0 : br;
                bl = !bl ? 0 : bl;

                this.MoveTo(0, tl).Arc(tl, tl, 0, 0, 1, tl, 0).HLineTo(width - tr).Arc(tr, tr, 0, 0, 1, width, tr).VLineTo(height - br).Arc(br, br, 0, 0, 1, width - br, height).HLineTo(bl).Arc(bl, bl, 0, 0, 1, 0, height - bl).ClosePath().join();
            };
        };

        return PathRectElement;
    }
};

var JUISvgPathSymbolElement = {
    name: "util.svg.element.path.symbol",
    extend: "util.svg.element.path",
    component: function component() {
        var PathSymbolElement = function PathSymbolElement() {
            var ordersString = "";

            /**
             * 심볼 템플릿
             *
             */
            this.template = function (width, height) {
                var r = width,
                    half_width = half_r = width / 2,
                    half_height = height / 2;

                var start = "a" + half_r + "," + half_r + " 0 1,1 " + r + ",0",
                    end = "a" + half_r + "," + half_r + " 0 1,1 " + -r + ",0";

                var obj = {
                    triangle: ["m0," + -half_height, "l" + half_width + "," + height, "l" + -width + ",0", "l" + half_width + "," + -height].join(" "),
                    rect: ["m" + -half_width + "," + -half_height, "l" + width + ",0", "l0," + height, "l" + -width + ',0', "l0," + -height].join(" "),
                    cross: ["m" + -half_width + ',' + -half_height, "l" + width + "," + height, "m0," + -height, "l" + -width + "," + height].join(" "),
                    circle: ["m" + -r + ",0", start, end].join(" ")
                };

                obj.rectangle = obj.rect;

                return obj;
            };

            this.join = function () {
                if (ordersString.length > 0) {
                    this.attr({ d: ordersString });
                    ordersString = "";
                }
            };

            /**
             * 심볼 추가 하기 (튜닝)
             */
            this.add = function (cx, cy, tpl) {
                ordersString += " M" + cx + "," + cy + tpl;
            };

            /**
             * path 내 심볼 생성
             *
             */
            this.triangle = function (cx, cy, width, height) {
                return this.MoveTo(cx, cy).moveTo(0, -height / 2).lineTo(width / 2, height).lineTo(-width, 0).lineTo(width / 2, -height);
            };

            this.rect = this.rectangle = function (cx, cy, width, height) {
                return this.MoveTo(cx, cy).moveTo(-width / 2, -height / 2).lineTo(width, 0).lineTo(0, height).lineTo(-width, 0).lineTo(0, -height);
            };

            this.cross = function (cx, cy, width, height) {
                return this.MoveTo(cx, cy).moveTo(-width / 2, -height / 2).lineTo(width, height).moveTo(0, -height).lineTo(-width, height);
            };

            this.circle = function (cx, cy, r) {
                return this.MoveTo(cx, cy).moveTo(-r, 0).arc(r / 2, r / 2, 0, 1, 1, r, 0).arc(r / 2, r / 2, 0, 1, 1, -r, 0);
            };
        };

        return PathSymbolElement;
    }
};

var JUISvgPolyElement = {
    name: "util.svg.element.poly",
    extend: "util.svg.element.transform",
    component: function component() {
        var PolyElement = function PolyElement() {
            var orders = [];

            this.point = function (x, y) {
                orders.push(x + "," + y);
                return this;
            };

            this.join = function () {
                if (orders.length > 0) {
                    // Firefox 처리
                    var start = orders[0];
                    orders.push(start);

                    // 폴리곤 그리기
                    this.attr({ points: orders.join(" ") });
                    orders = [];
                }
            };
        };

        return PolyElement;
    }
};

jui$1.use(JUISvgElement, JUISvgTransformElement, JUISvgPathElement, JUISvgPathSymbolElement, JUISvgPathRectElement, JUISvgPolyElement);

var JUISvgBase = {
    name: "util.svg.base",
    extend: null,
    component: function component() {
        var _ = jui$1.include("util.base");
        var Element = jui$1.include("util.svg.element");
        var TransElement = jui$1.include("util.svg.element.transform");
        var PathElement = jui$1.include("util.svg.element.path");
        var PathSymbolElement = jui$1.include("util.svg.element.path.symbol");
        var PathRectElement = jui$1.include("util.svg.element.path.rect");
        var PolyElement = jui$1.include("util.svg.element.poly");

        var globalObj = null;

        /**
         * @class util.svg.base
         * SVG base module
         *
         * @requires util.base
         * @requires util.math
         * @requires util.color
         * @requires util.svg.element
         * @requires util.svg.element.transform
         * @requires util.svg.element.path
         * @requires util.svg.element.path.symbol
         * @requires util.svg.element.path.rect
         * @requires util.svg.element.poly
         * @alias SVGBase
         */
        var SVGBase = function SVGBase() {
            this.create = function (obj, type, attr, callback) {
                obj.create(type, attr);
                return obj;
            };

            this.createChild = function (obj, type, attr, callback) {
                return this.create(obj, type, attr, callback);
            };

            /**
             * @method custom
             *
             * return custom element
             *
             * @param {String} name
             * @param {Object} attr
             * @param {Function} callback
             * @return {util.svg.element}
             */
            this.custom = function (name, attr, callback) {
                return this.create(new Element(), name, attr, callback);
            };

            /**
             * @method defs
             *
             * return defs element
             *
             * @param {Function} callback
             * @return {util.svg.element}
             */
            this.defs = function (callback) {
                return this.create(new Element(), "defs", null, callback);
            };

            /**
             * @method symbol
             *
             * return symbol element
             *
             * @param {Object} attr
             * @param {Function} callback
             * @return {util.svg.element}
             */
            this.symbol = function (attr, callback) {
                return this.create(new Element(), "symbol", attr, callback);
            };

            /**
             * @method g
             *
             * return defs element
             *
             * @alias group
             * @param {Object} attr
             * @param {Function} callback
             * @return {util.svg.element.transform}
             */
            this.g = this.group = function (attr, callback) {
                return this.create(new TransElement(), "g", attr, callback);
            };

            /**
             * @method marker
             *
             * return marker element
             *
             * @param {Object} attr
             * @param {Function} callback
             * @return {util.svg.element}
             */
            this.marker = function (attr, callback) {
                return this.create(new Element(), "marker", attr, callback);
            };

            /**
             * @method a
             *
             * return a element
             *
             * @param {Object} attr
             * @param {Function} callback
             * @return {util.svg.element.transform}
             */
            this.a = function (attr, callback) {
                return this.create(new TransElement(), "a", attr, callback);
            };

            /**
             * @method switch
             *
             * return switch element
             *
             * @param {Object} attr
             * @param {Function} callback
             * @return {util.svg.element}
             */
            this.switch = function (attr, callback) {
                return this.create(new Element(), "switch", attr, callback);
            };

            /**
             * @method use
             *
             * return use element
             *
             * @param {Object} attr
             * @return {util.svg.element}
             */
            this.use = function (attr) {
                return this.create(new Element(), "use", attr);
            };

            /**
             * @method rect
             *
             * return rect element
             *
             * @param {Object} attr
             * @param {Function} callback
             * @return {util.svg.element.transform}
             */
            this.rect = function (attr, callback) {
                return this.create(new TransElement(), "rect", attr, callback);
            };

            /**
             * @method line
             *
             * return line element
             *
             * @param {Object} attr
             * @param {Function} callback
             * @return {util.svg.element.transform}
             */
            this.line = function (attr, callback) {
                return this.create(new TransElement(), "line", attr, callback);
            };

            this.circle = function (attr, callback) {
                return this.create(new TransElement(), "circle", attr, callback);
            };

            this.text = function (attr, textOrCallback) {
                if (arguments.length == 2) {
                    if (_.typeCheck("function", textOrCallback)) {
                        return this.create(new TransElement(), "text", attr, textOrCallback);
                    }

                    return this.create(new TransElement(), "text", attr).text(textOrCallback);
                }

                return this.create(new TransElement(), "text", attr);
            };

            this.textPath = function (attr, text) {
                if (_.typeCheck("string", text)) {
                    return this.create(new Element(), "textPath", attr).text(text);
                }

                return this.create(new Element(), "textPath", attr);
            };

            this.tref = function (attr, text) {
                if (_.typeCheck("string", text)) {
                    return this.create(new Element(), "tref", attr).text(text);
                }

                return this.create(new Element(), "tref", attr);
            };

            this.tspan = function (attr, text) {
                if (_.typeCheck("string", text)) {
                    return this.create(new Element(), "tspan", attr).text(text);
                }

                return this.create(new Element(), "tspan", attr);
            };

            this.ellipse = function (attr, callback) {
                return this.create(new TransElement(), "ellipse", attr, callback);
            };

            this.image = function (attr, callback) {
                return this.create(new TransElement(), "image", attr, callback);
            };

            this.path = function (attr, callback) {
                return this.create(new PathElement(), "path", attr, callback);
            };

            this.pathSymbol = function (attr, callback) {
                return this.create(new PathSymbolElement(), "path", attr, callback);
            };

            this.pathRect = function (attr, callback) {
                return this.create(new PathRectElement(), "path", attr, callback);
            };

            this.polyline = function (attr, callback) {
                return this.create(new PolyElement(), "polyline", attr, callback);
            };

            this.polygon = function (attr, callback) {
                return this.create(new PolyElement(), "polygon", attr, callback);
            };

            this.pattern = function (attr, callback) {
                return this.create(new Element(), "pattern", attr, callback);
            };

            this.mask = function (attr, callback) {
                return this.create(new Element(), "mask", attr, callback);
            };

            this.clipPath = function (attr, callback) {
                return this.create(new Element(), "clipPath", attr, callback);
            };

            this.linearGradient = function (attr, callback) {
                return this.create(new Element(), "linearGradient", attr, callback);
            };

            this.radialGradient = function (attr, callback) {
                return this.create(new Element(), "radialGradient", attr, callback);
            };

            this.filter = function (attr, callback) {
                return this.create(new Element(), "filter", attr, callback);
            };

            this.foreignObject = function (attr, callback) {
                return this.create(new TransElement(), "foreignObject", attr, callback);
            };

            /**
             * 엘리먼트 관련 메소드 (그라데이션)
             *
             */

            this.stop = function (attr) {
                return this.createChild(new Element(), "stop", attr);
            };

            /**
             * 엘리먼트 관련 메소드 (애니메이션)
             *
             */

            this.animate = function (attr) {
                return this.createChild(new Element(), "animate", attr);
            };

            this.animateColor = function (attr) {
                return this.createChild(new Element(), "animateColor", attr);
            };

            this.animateMotion = function (attr) {
                return this.createChild(new Element(), "animateMotion", attr);
            };

            this.animateTransform = function (attr) {
                return this.createChild(new Element(), "animateTransform", attr);
            };

            this.mpath = function (attr) {
                return this.createChild(new Element(), "mpath", attr);
            };

            this.set = function (attr) {
                return this.createChild(new Element(), "set", attr);
            };

            /**
             * 엘리먼트 관련 메소드 (필터)
             *
             */

            this.feBlend = function (attr) {
                return this.createChild(new Element(), "feBlend", attr);
            };

            this.feColorMatrix = function (attr) {
                return this.createChild(new Element(), "feColorMatrix", attr);
            };

            this.feComponentTransfer = function (attr) {
                return this.createChild(new Element(), "feComponentTransfer", attr);
            };

            this.feComposite = function (attr) {
                return this.createChild(new Element(), "feComposite", attr);
            };

            this.feConvolveMatrix = function (attr) {
                return this.createChild(new Element(), "feConvolveMatrix", attr);
            };

            this.feDiffuseLighting = function (attr) {
                return this.createChild(new Element(), "feDiffuseLighting", attr);
            };

            this.feDisplacementMap = function (attr) {
                return this.createChild(new Element(), "feDisplacementMap", attr);
            };

            this.feFlood = function (attr) {
                return this.createChild(new Element(), "feFlood", attr);
            };

            this.feGaussianBlur = function (attr) {
                return this.createChild(new Element(), "feGaussianBlur", attr);
            };

            this.feImage = function (attr) {
                return this.createChild(new Element(), "feImage", attr);
            };

            this.feMerge = function (attr, callback) {
                return this.createChild(new Element(), "feMerge", attr, callback);
            };

            this.feMergeNode = function (attr) {
                return this.createChild(new Element(), "feMergeNode", attr);
            };

            this.feMorphology = function (attr) {
                return this.createChild(new Element(), "feMorphology", attr);
            };

            this.feOffset = function (attr) {
                return this.createChild(new Element(), "feOffset", attr);
            };

            this.feSpecularLighting = function (attr) {
                return this.createChild(new Element(), "feSpecularLighting", attr);
            };

            this.feTile = function (attr) {
                return this.createChild(new Element(), "feTile", attr);
            };

            this.feTurbulence = function (attr) {
                return this.createChild(new Element(), "feTurbulence", attr);
            };
        };

        SVGBase.create = function (name, attr, callback) {
            if (globalObj == null) {
                globalObj = new SVGBase();
            }

            return globalObj.custom(name, attr, callback);
        };

        return SVGBase;
    }
};

jui$1.use(math, color, JUISvgBase);

var JUISvgBase3d = {
    name: "util.svg.base3d",
    extend: "util.svg.base",
    component: function component() {
        var _ = jui$1.include("util.base");
        var math$$1 = jui$1.include("util.math");
        var color$$1 = jui$1.include("util.color");

        var SVG3d = function SVG3d() {

            this.rect3d = function (fill, width, height, degree, depth) {
                var self = this;

                var radian = math$$1.radian(degree),
                    x1 = 0,
                    y1 = 0,
                    w1 = width,
                    h1 = height;

                var x2 = Math.cos(radian) * depth,
                    y2 = Math.sin(radian) * depth,
                    w2 = width + x2,
                    h2 = height + y2;

                var g = self.group({}, function () {
                    self.path({
                        fill: color$$1.lighten(fill, 0.15),
                        stroke: color$$1.lighten(fill, 0.15)
                    }).MoveTo(x2, x1).LineTo(w2, y1).LineTo(w1, y2).LineTo(x1, y2);

                    self.path({
                        fill: fill,
                        stroke: fill
                    }).MoveTo(x1, y2).LineTo(x1, h2).LineTo(w1, h2).LineTo(w1, y2);

                    self.path({
                        fill: color$$1.darken(fill, 0.2),
                        stroke: color$$1.darken(fill, 0.2)
                    }).MoveTo(w1, h2).LineTo(w2, h1).LineTo(w2, y1).LineTo(w1, y2);
                });

                return g;
            };

            this.cylinder3d = function (fill, width, height, degree, depth, rate) {
                var self = this;

                var radian = math$$1.radian(degree),
                    rate = rate == undefined ? 1 : rate == 0 ? 0.01 : rate,
                    r = width / 2,
                    tr = r * rate,
                    l = Math.cos(radian) * depth / 2,
                    d = Math.sin(radian) * depth / 2,
                    key = _.createId("cylinder3d");

                var g = self.group({}, function () {
                    self.ellipse({
                        fill: color$$1.darken(fill, 0.05),
                        "fill-opacity": 0.85,
                        stroke: color$$1.darken(fill, 0.05),
                        rx: r,
                        ry: d,
                        cx: r,
                        cy: height
                    }).translate(l, d);

                    self.path({
                        fill: "url(#" + key + ")",
                        "fill-opacity": 0.85,
                        stroke: fill
                    }).MoveTo(r - tr, d).LineTo(0, height).Arc(r, d, 0, 0, 0, width, height).LineTo(r + tr, d).Arc(r + tr, d, 0, 0, 1, r - tr, d).translate(l, d);

                    self.ellipse({
                        fill: color$$1.lighten(fill, 0.2),
                        "fill-opacity": 0.95,
                        stroke: color$$1.lighten(fill, 0.2),
                        rx: r * rate,
                        ry: d * rate,
                        cx: r,
                        cy: d
                    }).translate(l, d);

                    self.linearGradient({
                        id: key,
                        x1: "100%",
                        x2: "0%",
                        y1: "0%",
                        y2: "0%"
                    }, function () {
                        self.stop({
                            offset: "0%",
                            "stop-color": color$$1.lighten(fill, 0.15)
                        });
                        self.stop({
                            offset: "33.333333333333336%",
                            "stop-color": color$$1.darken(fill, 0.2)
                        });
                        self.stop({
                            offset: "66.66666666666667%",
                            "stop-color": color$$1.darken(fill, 0.2)
                        });
                        self.stop({
                            offset: "100%",
                            "stop-color": color$$1.lighten(fill, 0.15)
                        });
                    });
                });

                return g;
            };
        };

        return SVG3d;
    }
};

jui$1.use(JUISvgBase3d);

var svg = {
    name: "util.svg",
    extend: "util.svg.base3d",
    component: function component() {
        var _ = jui$1.include("util.base");
        var Element = jui$1.include("util.svg.element");
        var TransElement = jui$1.include("util.svg.element.transform");
        var PathElement = jui$1.include("util.svg.element.path");
        var PolyElement = jui$1.include("util.svg.element.poly");

        var SVG = function SVG(rootElem, rootAttr) {
            var self = this,
                root = null,
                main = null,
                sub = null,
                parent = {},
                depth = 0;
            var isFirst = false; // 첫번째 렌더링 체크

            function init() {
                self.root = root = new Element();
                main = new TransElement();
                sub = new TransElement();

                root.create("svg", rootAttr);
                main.create("g");
                sub.create("g");

                main.translate(0.5, 0.5);
                sub.translate(0.5, 0.5);

                rootElem.appendChild(root.element);
                root.append(main);
                root.append(sub);
            }

            function appendAll(target) {
                var childs = target.children;

                // 엘리먼트 렌더링 순서 정하기
                if (isOrderingChild(childs)) {
                    childs.sort(function (a, b) {
                        return a.order - b.order;
                    });
                }

                for (var i = 0, len = childs.length; i < len; i++) {
                    var child = childs[i];

                    if (child) {
                        if (child.children.length > 0) {
                            appendAll(child);
                        }

                        // PathElement & PathSymbolElement & PathRectElement & PolyElement auto join
                        if (child instanceof PathElement || child instanceof PolyElement) {
                            child.join();
                        }

                        if (child.parent == target) {
                            target.element.appendChild(child.element);
                        }
                    }
                }
            }

            function removeEventAll(target) {
                var childs = target.children;

                for (var i = 0, len = childs.length; i < len; i++) {
                    var child = childs[i];

                    if (child) {
                        child.off();

                        if (child.children.length > 0) {
                            removeEventAll(child);
                        }
                    }
                }
            }

            function isOrderingChild(childs) {
                // order가 0 이상인 엘리먼트가 하나라도 있을 경우
                for (var i = 0, len = childs.length; i < len; i++) {
                    if (childs[i].order > 0) {
                        return true;
                    }
                }

                return false;
            }

            this.create = function (obj, type, attr, callback) {
                obj.create(type, attr);

                if (depth == 0) {
                    main.append(obj);
                } else {
                    parent[depth].append(obj);
                }

                if (_.typeCheck("function", callback)) {
                    depth++;
                    parent[depth] = obj;

                    callback.call(obj);
                    depth--;
                }

                return obj;
            };

            this.createChild = function (obj, type, attr, callback) {
                if (obj.parent == main) {
                    throw new Error("JUI_CRITICAL_ERR: Parents are required elements of the '" + type + "'");
                }

                return this.create(obj, type, attr, callback);
            };

            /**
             * @method size
             *
             * if arguments.length is 2, set attribute width, height to root element
             * if arguments.length is zero, return svg size
             *
             * @return {Object}
             * @return {Integer} width
             * @return {Integer} height
             */
            this.size = function () {
                if (arguments.length == 2) {
                    var w = arguments[0],
                        h = arguments[1];

                    root.attr({ width: w, height: h });
                } else {
                    return root.size();
                }
            };

            /**
             * @method clear
             * @param isAll
             */
            this.clear = function (isAll) {
                main.each(function () {
                    if (this.element.parentNode) {
                        main.element.removeChild(this.element);
                    }
                });

                removeEventAll(main);

                if (isAll === true) {
                    sub.each(function () {
                        if (this.element.parentNode) {
                            sub.element.removeChild(this.element);
                        }
                    });

                    removeEventAll(sub);
                }
            };

            /**
             * @method reset
             * @param isAll
             */
            this.reset = function (isAll) {
                this.clear(isAll);
                main.children = [];

                if (isAll === true) {
                    sub.children = [];
                }
            };

            /**
             * @method render
             * @param isAll
             */
            this.render = function (isAll) {
                this.clear();

                if (isFirst === false || isAll === true) {
                    appendAll(root);
                } else {
                    appendAll(main);
                }

                isFirst = true;
            };

            /**
             * @method
             * implements svg image file download used by canvas
             * @param name
             */
            this.download = function (name) {
                if (_.typeCheck("string", name)) {
                    name = name.split(".")[0];
                }

                var a = document.createElement("a");
                a.download = name ? name + ".svg" : "svg.svg";
                a.href = this.toDataURI(); //;_.svgToBase64(rootElem.innerHTML);

                document.body.appendChild(a);
                a.click();
                a.parentNode.removeChild(a);
            };

            this.downloadImage = function (name, type) {
                type = type || "image/png";

                var img = new Image();
                var size = this.size();
                var uri = this.toDataURI().replace('width="100%"', 'width="' + size.width + '"').replace('height="100%"', 'height="' + size.height + '"');
                img.onload = function () {
                    var canvas = document.createElement("canvas");
                    canvas.width = img.width;
                    canvas.height = img.height;

                    var context = canvas.getContext('2d');
                    context.drawImage(img, 0, 0);

                    var png = canvas.toDataURL(type);

                    if (_.typeCheck("string", name)) {
                        name = name.split(".")[0];
                    }

                    var a = document.createElement('a');
                    a.download = name ? name + ".png" : "svg.png";
                    a.href = png;

                    document.body.appendChild(a);
                    a.click();
                    a.parentNode.removeChild(a);
                };

                img.src = uri;
            };

            /**
             * @method exportCanvas
             *
             * convert svg image to canvas
             *
             * @param {Canvas} canvas
             */
            this.exportCanvas = function (canvas) {
                var img = new Image(),
                    size = this.size();

                var uri = this.toDataURI().replace('width="100%"', 'width="' + size.width + '"').replace('height="100%"', 'height="' + size.height + '"');

                img.onload = function () {
                    canvas.width = img.width;
                    canvas.height = img.height;

                    var context = canvas.getContext('2d');
                    context.drawImage(img, 0, 0);
                };

                img.src = uri;
            };

            /**
             * @method toXML
             *
             * convert xml string
             *
             * @return {String} xml
             */
            this.toXML = function () {
                var text = rootElem.innerHTML;

                text = text.replace('xmlns="http://www.w3.org/2000/svg"', '');

                return ['<?xml version="1.0" encoding="utf-8"?>', text.replace("<svg ", '<svg xmlns="http://www.w3.org/2000/svg" ')].join("\n");
            };

            /**
             * @method toDataURI
             *
             * convert svg to datauri format
             *
             * @return {String}
             */
            this.toDataURI = function () {
                var xml = this.toXML();

                if (_.browser.mozilla || _.browser.msie) {
                    xml = encodeURIComponent(xml);
                }

                if (_.browser.msie) {
                    return "data:image/svg+xml," + xml;
                } else {
                    return "data:image/svg+xml;utf8," + xml;
                }
            };

            /**
             * @method autoRender
             *
             * @param {util.svg.element} elem
             * @param {Boolean} isAuto
             */
            this.autoRender = function (elem, isAuto) {
                if (depth > 0) return;

                if (!isAuto) {
                    sub.append(elem);
                } else {
                    main.append(elem);
                }
            };

            /**
             * @method getTextSize
             *
             * caculate real pixel size of text element
             *
             * @param {String} text target text
             * @return {Object}
             * @return {Integer} return.width  text element's width (px)
             * @return {Integer} return.height text element's height(px)
             */
            this.getTextSize = function (text, opt) {
                if (text == "") {
                    return { width: 0, height: 0 };
                }

                opt = opt || {};

                var bodyElement = document.body || root.element;

                var svg = document.createElementNS("http://www.w3.org/2000/svg", "svg");
                svg.setAttributeNS(null, "width", 500);
                svg.setAttributeNS(null, "height", 100);
                svg.setAttributeNS(null, "x", -20000);
                svg.setAttributeNS(null, "y", -20000);

                var el = document.createElementNS("http://www.w3.org/2000/svg", "text");
                el.setAttributeNS(null, "x", -200);
                el.setAttributeNS(null, "y", -200);
                el.appendChild(document.createTextNode(text));

                if (opt.fontSize) {
                    el.setAttributeNS(null, "font-size", opt.fontSize);
                }

                if (opt.fontFamily) {
                    el.setAttributeNS(null, "font-family", opt.fontFamily);
                }

                if (opt.bold) {
                    el.setAttributeNS(null, "font-weight", opt.bold);
                }

                if (opt.style) {
                    el.setAttributeNS(null, "font-style", opt.style);
                }

                svg.appendChild(el);

                bodyElement.appendChild(svg);
                var rect = el.getBoundingClientRect();
                bodyElement.removeChild(svg);

                return { width: rect.width, height: rect.height };
            };

            init();
        };

        /**
         * @method create
         *
         * create nested elements by json
         *
         *      @example
         *      SVG.create({
        *          tag : "pattern",
        *          attr : { x : 0, y : 0, width : 20, height : 20  },
        *          children : [
        *              { tag : 'rect', attr : {width : 20, height : 20, fill : 'black', stroke : 'blue', 'stroke-width' : 2 } ,
        *              { tag : 'rect', attr : {width : 20, height : 20, fill : 'black', stroke : 'blue', 'stroke-width' : 2 } ,
        *              { tag : 'rect', attr : {width : 20, height : 20, fill : 'black', stroke : 'blue', 'stroke-width' : 2 } ,
        *              { tag : 'rect', attr : {width : 20, height : 20, fill : 'black', stroke : 'blue', 'stroke-width' : 2 }
        *          ]
        *      });
        *
        * is equals to
        *
         *      @example
         *      <pattern x="0" y="0" width="20" height="20">
         *          <rect width="20" height="20" fill="black" stroke="blue" stroke-width="2" />
         *          <rect width="20" height="20" fill="black" stroke="blue" stroke-width="2" />
         *          <rect width="20" height="20" fill="black" stroke="blue" stroke-width="2" />
         *          <rect width="20" height="20" fill="black" stroke="blue" stroke-width="2" />
         *      </pattern>
         *
         * @param {Object} obj json literal
         * @param {String} obj.type  svg element name
         * @param {Object} obj.attr  svg element's attributes
         * @param {Array} [obj.children=null] svg element's children
         * @static
         * @return {util.svg.element}
         *
         */
        SVG.createObject = function (obj) {
            var el = new Element();

            el.create(obj.type, obj.attr);

            if (obj.children instanceof Array) {
                for (var i = 0, len = obj.children.length; i < len; i++) {
                    el.append(SVG.createObject(obj.children[i]));
                }
            }

            return el;
        };

        return SVG;
    }
};

jui$1.use([math]);

var LinearScaleUtil = {
    name: "util.scale.linear",
    extend: null,
    component: function component() {
        var math$$1 = jui$1.include("util.math");

        var linear = function linear() {
            var _domain = [0, 1];
            var _range = [0, 1];
            var _isRound = false;
            var _isClamp = false;
            var _cache = {};

            var roundFunction = null;
            var numberFunction = null;

            var domainMin = null;
            var domainMax = null;

            var rangeMin = null;
            var rangeMax = null;

            var distDomain = null;
            var distRange = null;
            var rate = 0;

            var callFunction = null;
            var _rangeBand = null;

            function func(x) {
                if (domainMax < x) {
                    if (_isClamp) {
                        return func(domainMax);
                    }

                    return _range[0] + Math.abs(x - _domain[0]) * rate;
                } else if (domainMin > x) {
                    if (_isClamp) {
                        return func(domainMin);
                    }

                    return _range[0] - Math.abs(x - _domain[0]) * rate;
                } else {
                    var pos = (x - _domain[0]) / distDomain;

                    return callFunction(pos);
                }
            }

            func.cache = function () {
                return _cache;
            };

            /**
             * @method min
             * @static
             *
             * @returns {number}
             */
            func.min = function () {
                return Math.min.apply(Math, _domain);
            };

            func.max = function () {
                return Math.max.apply(Math, _domain);
            };

            func.rangeMin = function () {
                return Math.min.apply(Math, _range);
            };

            func.rangeMax = function () {
                return Math.max.apply(Math, _range);
            };

            func.rate = function (value, max) {
                return func(func.max() * (value / max));
            };

            func.clamp = function (isClamp) {
                _isClamp = isClamp || false;
            };

            func.domain = function (values) {

                if (!arguments.length) {
                    return _domain;
                }

                for (var i = 0; i < values.length; i++) {
                    _domain[i] = values[i];
                }

                domainMin = func.min();
                domainMax = func.max();

                distDomain = _domain[1] - _domain[0];

                return this;
            };

            func.range = function (values) {

                if (!arguments.length) {
                    return _range;
                }

                for (var i = 0; i < values.length; i++) {
                    _range[i] = values[i];
                }

                roundFunction = math$$1.interpolateRound(_range[0], _range[1]);
                numberFunction = math$$1.interpolateNumber(_range[0], _range[1]);

                rangeMin = func.rangeMin();
                rangeMax = func.rangeMax();

                distRange = Math.abs(rangeMax - rangeMin);

                rate = distRange / distDomain;

                callFunction = _isRound ? roundFunction : numberFunction;

                return this;
            };

            func.rangeRound = function (values) {
                _isRound = true;

                return func.range(values);
            };

            func.rangeBand = function () {
                return _rangeBand;
            };

            func.invert = function (y) {
                var f = linear().domain(_range).range(_domain);
                return f(y);
            };

            func.ticks = function (count, isNice, /** @deprecated */intNumber, reverse) {

                //intNumber = intNumber || 10000;
                reverse = reverse || false;
                var max = func.max();

                if (_domain[0] == 0 && _domain[1] == 0) {
                    return [];
                }

                var obj = math$$1.nice(_domain[0], _domain[1], count || 10, isNice || false);

                var arr = [];

                var start = reverse ? obj.max : obj.min;
                var end = reverse ? obj.min : obj.max;
                var unit = obj.spacing;
                var fixed = math$$1.fixed(unit);

                while (reverse ? end <= start : start <= end) {
                    arr.push(start /* / intNumber*/);

                    if (reverse) {
                        start = fixed.minus(start, unit);
                    } else {
                        start = fixed.plus(start, unit);
                    }
                }

                if (reverse) {
                    if (arr[0] != max) {
                        arr.unshift(max);
                    }

                    for (var i = 0, len = arr.length; i < len; i++) {
                        arr[i] = Math.abs(arr[i] - max);
                    }
                    //arr.reverse();
                } else {
                    if (arr[arr.length - 1] != end && start > end) {
                        arr.push(end);
                    }

                    if (_domain[0] > _domain[1]) {
                        arr.reverse();
                    }
                }

                var first = func(arr[0]);
                var second = func(arr[1]);

                _rangeBand = Math.abs(second - first);

                return arr;
            };

            return func;
        };

        return linear;
    }
};

var CircleScaleUtil = {
    name: "util.scale.circle",
    extend: null,
    component: function component() {
        var circle = function circle() {

            var _domain = [];
            var _range = [];
            var _rangeBand = 0;

            function func(t) {}

            /**
             * @method domain
             * @static
             *
             * @param values
             * @returns {*}
             */
            func.domain = function (values) {

                if (typeof values == 'undefined') {
                    return _domain;
                }

                for (var i = 0; i < values.length; i++) {
                    _domain[i] = values[i];
                }

                return this;
            };

            func.range = function (values) {

                if (typeof values == 'undefined') {
                    return _range;
                }

                for (var i = 0; i < values.length; i++) {
                    _range[i] = values[i];
                }

                return this;
            };

            func.rangePoints = function (interval, padding) {

                padding = padding || 0;

                var step = _domain.length;
                var unit = (interval[1] - interval[0] - padding) / step;

                var range = [];
                for (var i = 0; i < _domain.length; i++) {
                    if (i == 0) {
                        range[i] = interval[0] + padding / 2 + unit / 2;
                    } else {
                        range[i] = range[i - 1] + unit;
                    }
                }

                _range = range;
                _rangeBand = unit;

                return func;
            };

            func.rangeBands = function (interval, padding, outerPadding) {
                padding = padding || 0;
                outerPadding = outerPadding || 0;

                var count = _domain.length;
                var step = count - 1;
                var band = (interval[1] - interval[0]) / step;

                var range = [];
                for (var i = 0; i < _domain.length; i++) {
                    if (i == 0) {
                        range[i] = interval[0];
                    } else {
                        range[i] = band + range[i - 1];
                    }
                }

                _rangeBand = band;
                _range = range;

                return func;
            };

            func.rangeBand = function () {
                return _rangeBand;
            };

            return func;
        };

        return circle;
    }
};

var LogScaleUtil = {
    name: "util.scale.log",
    extend: null,
    component: function component() {
        var _ = jui$1.include("util.base");
        var linear = jui$1.include("util.scale.linear");

        var log = function log(base) {
            var _base = base || 10;

            var func = linear();
            var _domain = [];
            var _domainMax = null;
            var _domainMin = null;

            function log(value) {
                if (value < 0) {
                    return -(Math.log(Math.abs(value)) / Math.log(_base));
                } else if (value > 0) {
                    return Math.log(value) / Math.log(_base);
                }

                return 0;
            }

            function pow(value) {
                if (value < 0) {
                    return -Math.pow(_base, Math.abs(value));
                } else if (value > 0) {
                    return Math.pow(_base, value);
                }

                return 0;
            }

            function checkMax(value) {
                return Math.pow(_base, (value + "").length - 1) < value;
            }

            function getNextMax(value) {
                return Math.pow(_base, (value + "").length);
            }

            var newFunc = function newFunc(x) {
                var value = x;

                if (x > _domainMax) {
                    value = _domainMax;
                } else if (x < _domainMin) {
                    value = _domainMin;
                }

                return func(log(value));
            };

            _.extend(newFunc, func);

            newFunc.log = function () {
                var newDomain = [];
                for (var i = 0; i < _domain.length; i++) {
                    newDomain[i] = log(_domain[i]);
                }

                return newDomain;
            };

            newFunc.domain = function (values) {
                if (!arguments.length) {
                    return _domain;
                }

                for (var i = 0; i < values.length; i++) {
                    _domain[i] = values[i];
                }

                _domainMax = Math.max.apply(Math, _domain);
                _domainMin = Math.min.apply(Math, _domain);

                if (checkMax(_domainMax)) {
                    _domain[1] = _domainMax = getNextMax(_domainMax);
                }

                if (checkMax(Math.abs(_domainMin))) {

                    var value = getNextMax(Math.abs(_domainMin));
                    _domain[0] = _domainMin = _domainMin < 0 ? -value : value;
                }

                func.domain(newFunc.log());

                return newFunc;
            };

            newFunc.base = function (base) {
                func.domain(newFunc.log());

                return newFunc;
            };

            newFunc.invert = function (y) {
                return pow(func.invert(y));
            };

            newFunc.ticks = function (count, isNice, intNumber) {
                var arr = func.ticks(count, isNice, intNumber || 100000000000000000000, true);

                if (arr[arr.length - 1] < func.max()) {
                    arr.push(func.max());
                }

                var newArr = [];
                for (var i = 0, len = arr.length; i < len; i++) {
                    newArr[i] = pow(arr[i]);
                }

                return newArr;
            };

            return newFunc;
        };

        return log;
    }
};

var OrdinalScaleUtil = {
    name: "util.scale.ordinal",
    extend: null,
    component: function component() {
        var ordinal = function ordinal() {
            var _domain = [];
            var _range = [];
            var _rangeBand = 0;
            var _cache = {};
            var _isRangePoints = false;

            function func(t) {
                var key = "" + t;
                if (typeof _cache[key] != 'undefined') {
                    return _cache[key];
                }

                var index = -1;
                for (var i = 0; i < _domain.length; i++) {
                    if (typeof t == 'string' && _domain[i] === t) {
                        index = i;
                        break;
                    }
                }

                if (index > -1) {
                    _cache[key] = _range[index];
                    return _range[index];
                } else {
                    if (typeof _range[t] != 'undefined') {
                        //_domain[t] = t;               // FIXME: 이건 나중에 따로 연산해야할 듯
                        _cache[key] = _range[t];
                        return _range[t];
                    }

                    return null;
                }
            }

            /**
             * @method domain
             * @static
             *
             * @param values
             * @returns {*}
             */
            func.domain = function (values) {

                if (typeof values == 'undefined') {
                    return _domain;
                }

                for (var i = 0; i < values.length; i++) {
                    _domain[i] = values[i];
                }

                return this;
            };

            func.range = function (values) {
                if (typeof values == 'undefined') {
                    return _range;
                }

                for (var i = 0; i < values.length; i++) {
                    _range[i] = values[i];
                }

                return this;
            };

            func.rangePoints = function (interval, padding) {
                padding = padding || 0;

                var step = _domain.length;
                var unit = (interval[1] - interval[0] - padding) / step;

                var range = [];
                for (var i = 0; i < _domain.length; i++) {
                    if (i == 0) {
                        range[i] = interval[0] + padding / 2 + unit / 2;
                    } else {
                        range[i] = range[i - 1] + unit;
                    }
                }

                _range = range;
                _rangeBand = unit;
                _isRangePoints = true;

                return func;
            };

            func.rangeBands = function (interval, padding, outerPadding) {
                padding = padding || 0;
                outerPadding = outerPadding || 0;

                var count = _domain.length;
                var step = count - 1;
                var band = (interval[1] - interval[0]) / step;

                var range = [];
                for (var i = 0; i < _domain.length; i++) {
                    if (i == 0) {
                        range[i] = interval[0];
                    } else {
                        range[i] = band + range[i - 1];
                    }
                }

                _rangeBand = band;
                _range = range;
                _isRangePoints = false;

                return func;
            };

            func.rangeBand = function () {
                return _rangeBand;
            };

            func.invert = function (x) {
                var min = Math.min(_range[0], _range[1]);

                if (_isRangePoints) {
                    min -= _rangeBand / 2;

                    var tempX = x;
                    if (tempX < min) {
                        tempX = min;
                    }
                    var result = Math.abs(tempX - min) / _rangeBand;
                    return Math.floor(result);
                } else {
                    var result = Math.abs(x - min) / _rangeBand;
                    return Math.ceil(result);
                }
            };

            return func;
        };

        return ordinal;
    }
};

var TimeScaleUtil = {
    name: "util.scale.time",
    extend: null,
    component: function component() {
        var _time = jui$1.include("util.time");
        var linear = jui$1.include("util.scale.linear");

        var time = function time() {

            var _domain = [];
            var _rangeBand;
            var func = linear();
            var df = func.domain;

            func.domain = function (domain) {
                if (!arguments.length) return df.call(func);

                for (var i = 0; i < domain.length; i++) {
                    _domain[i] = +domain[i];
                }

                return df.call(func, _domain);
            };

            func.min = function () {
                return Math.min(_domain[0], _domain[_domain.length - 1]);
            };

            func.max = function () {
                return Math.max(_domain[0], _domain[_domain.length - 1]);
            };

            func.rate = function (value, max) {
                return func(func.max() * (value / max));
            };

            func.ticks = function (type, interval) {
                var start = _domain[0];
                var end = _domain[1];

                var times = [];
                while (start < end) {
                    times.push(new Date(+start));

                    start = _time.add(start, type, interval);
                }

                times.push(new Date(+start));

                var first = func(times[1]);
                var second = func(times[2]);

                _rangeBand = second - first;

                return times;
            };

            func.realTicks = function (type, interval) {
                var start = _domain[0];
                var end = _domain[1];

                var times = [];
                var date = new Date(+start);
                var realStart = null;

                if (type == _time.years) {
                    realStart = new Date(date.getFullYear(), 0, 1);
                } else if (type == _time.months) {
                    realStart = new Date(date.getFullYear(), date.getMonth(), 1);
                } else if (type == _time.days || type == _time.weeks) {
                    realStart = new Date(date.getFullYear(), date.getMonth(), date.getDate());
                } else if (type == _time.hours) {
                    realStart = new Date(date.getFullYear(), date.getMonth(), date.getDate(), date.getHours(), 0, 0, 0);
                } else if (type == _time.minutes) {
                    realStart = new Date(date.getFullYear(), date.getMonth(), date.getDate(), date.getHours(), date.getMinutes(), 0, 0);
                } else if (type == _time.seconds) {
                    realStart = new Date(date.getFullYear(), date.getMonth(), date.getDate(), date.getHours(), date.getMinutes(), date.getSeconds(), 0);
                } else if (type == _time.milliseconds) {
                    realStart = new Date(date.getFullYear(), date.getMonth(), date.getDate(), date.getHours(), date.getMinutes(), date.getSeconds(), date.getMilliseconds());
                }
                realStart = _time.add(realStart, type, interval);

                while (+realStart < +end) {
                    times.push(new Date(+realStart));
                    realStart = _time.add(realStart, type, interval);
                }

                var first = func(times[1]);
                var second = func(times[2]);

                _rangeBand = second - first;

                return times;
            };

            func.rangeBand = function () {
                return _rangeBand;
            };

            func.invert = function (y) {
                var f = linear().domain(func.range()).range(func.domain());
                return new Date(f(y));
            };

            return func;
        };

        return time;
    }
};

jui$1.use([math, time]);

var scale = {
    name: "util.scale",
    extend: null,
    component: function component() {
        var math$$1 = jui$1.include("util.math");
        var _time = jui$1.include("util.time");

        var self = {

            /**
             * 원형 좌표에 대한 scale
             *
             */
            circle: function circle() {

                var _domain = [];
                var _range = [];
                var _rangeBand = 0;

                function func(t) {}

                func.domain = function (values) {

                    if (typeof values == 'undefined') {
                        return _domain;
                    }

                    for (var i = 0; i < values.length; i++) {
                        _domain[i] = values[i];
                    }

                    return this;
                };

                func.range = function (values) {

                    if (typeof values == 'undefined') {
                        return _range;
                    }

                    for (var i = 0; i < values.length; i++) {
                        _range[i] = values[i];
                    }

                    return this;
                };

                func.rangePoints = function (interval, padding) {

                    padding = padding || 0;

                    var step = _domain.length;
                    var unit = (interval[1] - interval[0] - padding) / step;

                    var range = [];
                    for (var i = 0; i < _domain.length; i++) {
                        if (i == 0) {
                            range[i] = interval[0] + padding / 2 + unit / 2;
                        } else {
                            range[i] = range[i - 1] + unit;
                        }
                    }

                    _range = range;
                    _rangeBand = unit;

                    return func;
                };

                func.rangeBands = function (interval, padding, outerPadding) {

                    padding = padding || 0;
                    outerPadding = outerPadding || 0;

                    var count = _domain.length;
                    var step = count - 1;
                    var band = (interval[1] - interval[0]) / step;

                    var range = [];
                    for (var i = 0; i < _domain.length; i++) {
                        if (i == 0) {
                            range[i] = interval[0];
                        } else {
                            range[i] = band + range[i - 1];
                        }
                    }

                    _rangeBand = band;
                    _range = range;

                    return func;
                };

                func.rangeBand = function () {
                    return _rangeBand;
                };

                return func;
            },

            /**
             *
             * 순서를 가지는 리스트에 대한 scale
             *
             */
            ordinal: function ordinal() {

                var _domain = [];
                var _range = [];
                var _rangeBand = 0;
                var _cache = {};

                function func(t) {

                    var key = "" + t;
                    if (typeof _cache[key] != 'undefined') {
                        return _cache[key];
                    }

                    var index = -1;
                    for (var i = 0; i < _domain.length; i++) {
                        if (typeof t == 'string' && _domain[i] === t) {
                            index = i;
                            break;
                        }
                    }

                    if (index > -1) {
                        _cache[key] = _range[index];
                        return _range[index];
                    } else {
                        if (typeof _range[t] != 'undefined') {
                            _domain[t] = t;
                            _cache[key] = _range[t];
                            return _range[t];
                        }

                        return null;
                    }
                }

                func.domain = function (values) {

                    if (typeof values == 'undefined') {
                        return _domain;
                    }

                    for (var i = 0; i < values.length; i++) {
                        _domain[i] = values[i];
                    }

                    return this;
                };

                func.range = function (values) {

                    if (typeof values == 'undefined') {
                        return _range;
                    }

                    for (var i = 0; i < values.length; i++) {
                        _range[i] = values[i];
                    }

                    return this;
                };

                func.rangePoints = function (interval, padding) {

                    padding = padding || 0;

                    var step = _domain.length;
                    var unit = (interval[1] - interval[0] - padding) / step;

                    var range = [];
                    for (var i = 0; i < _domain.length; i++) {
                        if (i == 0) {
                            range[i] = interval[0] + padding / 2 + unit / 2;
                        } else {
                            range[i] = range[i - 1] + unit;
                        }
                    }

                    _range = range;
                    _rangeBand = unit;

                    return func;
                };

                func.rangeBands = function (interval, padding, outerPadding) {

                    padding = padding || 0;
                    outerPadding = outerPadding || 0;

                    var count = _domain.length;
                    var step = count - 1;
                    var band = (interval[1] - interval[0]) / step;

                    var range = [];
                    for (var i = 0; i < _domain.length; i++) {
                        if (i == 0) {
                            range[i] = interval[0];
                        } else {
                            range[i] = band + range[i - 1];
                        }
                    }

                    _rangeBand = band;
                    _range = range;

                    return func;
                };

                func.rangeBand = function () {
                    return _rangeBand;
                };

                func.invert = function (x) {
                    return Math.ceil(x / _rangeBand);
                };

                return func;
            },

            /**
             * 시간에 대한 scale
             *
             */
            time: function time$$1() {

                var _domain = [];
                var _rangeBand;

                var func = self.linear();

                var df = func.domain;

                func.domain = function (domain) {

                    if (!arguments.length) return df.call(func);

                    for (var i = 0; i < domain.length; i++) {
                        _domain[i] = +domain[i];
                    }

                    return df.call(func, _domain);
                };

                func.min = function () {
                    return Math.min(_domain[0], _domain[_domain.length - 1]);
                };

                func.max = function () {
                    return Math.max(_domain[0], _domain[_domain.length - 1]);
                };

                func.rate = function (value, max) {
                    return func(func.max() * (value / max));
                };

                func.ticks = function (type, interval) {
                    var start = _domain[0];
                    var end = _domain[1];

                    var times = [];
                    while (start < end) {
                        times.push(new Date(+start));

                        start = _time.add(start, type, interval);
                    }

                    times.push(new Date(+start));

                    var first = func(times[1]);
                    var second = func(times[2]);

                    _rangeBand = second - first;

                    return times;
                };

                func.realTicks = function (type, interval) {
                    var start = _domain[0];
                    var end = _domain[1];

                    var times = [];
                    var date = new Date(+start);
                    var realStart = null;

                    if (type == _time.years) {
                        realStart = new Date(date.getFullYear(), 0, 1);
                    } else if (type == _time.months) {
                        realStart = new Date(date.getFullYear(), date.getMonth(), 1);
                    } else if (type == _time.days || type == _time.weeks) {
                        realStart = new Date(date.getFullYear(), date.getMonth(), date.getDate());
                    } else if (type == _time.hours) {
                        realStart = new Date(date.getFullYear(), date.getMonth(), date.getDate(), date.getHours(), 0, 0, 0);
                    } else if (type == _time.minutes) {
                        realStart = new Date(date.getFullYear(), date.getMonth(), date.getDate(), date.getHours(), date.getMinutes(), 0, 0);
                    } else if (type == _time.seconds) {
                        realStart = new Date(date.getFullYear(), date.getMonth(), date.getDate(), date.getHours(), date.getMinutes(), date.getSeconds(), 0);
                    } else if (type == _time.milliseconds) {
                        realStart = new Date(date.getFullYear(), date.getMonth(), date.getDate(), date.getHours(), date.getMinutes(), date.getSeconds(), date.getMilliseconds());
                    }
                    realStart = _time.add(realStart, type, interval);

                    while (+realStart < +end) {
                        times.push(new Date(+realStart));
                        realStart = _time.add(realStart, type, interval);
                    }

                    var first = func(times[1]);
                    var second = func(times[2]);

                    _rangeBand = second - first;

                    return times;
                };

                func.rangeBand = function () {
                    return _rangeBand;
                };

                func.invert = function (y) {
                    var f = self.linear().domain(func.range()).range(func.domain());

                    return new Date(f(y));
                };

                return func;
            },

            /**
             * log scale
             *
             * var log = _.scale.log(10).domain([0, 1000000]).range([0, 300]);
             *
             * log(0) == 0
             * log.ticks(4) == [0, 100, 10000, 1000000]
             *
             * @param base
             */
            log: function log(base) {

                var _base = base || 10;

                var func = self.linear();
                var _domain = [];
                var _domainMax = null;
                var _domainMin = null;

                function log(value) {

                    if (value < 0) {
                        return -(Math.log(Math.abs(value)) / Math.log(_base));
                    } else if (value > 0) {
                        return Math.log(value) / Math.log(_base);
                    }

                    return 0;
                }

                function pow(value) {
                    if (value < 0) {
                        return -Math.pow(_base, Math.abs(value));
                    } else if (value > 0) {
                        return Math.pow(_base, value);
                    }

                    return 0;
                }

                function checkMax(value) {
                    return Math.pow(_base, (value + "").length - 1) < value;
                }

                function getNextMax(value) {
                    return Math.pow(_base, (value + "").length);
                }

                var newFunc = function newFunc(x) {

                    var value = x;

                    if (x > _domainMax) {
                        value = _domainMax;
                    } else if (x < _domainMin) {
                        value = _domainMin;
                    }

                    return func(log(value));
                };

                $.extend(newFunc, func);

                newFunc.log = function () {
                    var newDomain = [];
                    for (var i = 0; i < _domain.length; i++) {
                        newDomain[i] = log(_domain[i]);
                    }

                    return newDomain;
                };

                newFunc.domain = function (values) {

                    if (!arguments.length) {
                        return _domain;
                    }

                    for (var i = 0; i < values.length; i++) {
                        _domain[i] = values[i];
                    }

                    _domainMax = Math.max.apply(Math, _domain);
                    _domainMin = Math.min.apply(Math, _domain);

                    if (checkMax(_domainMax)) {
                        _domain[1] = _domainMax = getNextMax(_domainMax);
                    }

                    if (checkMax(Math.abs(_domainMin))) {

                        var value = getNextMax(Math.abs(_domainMin));
                        _domain[0] = _domainMin = _domainMin < 0 ? -value : value;
                    }

                    func.domain(newFunc.log());

                    return newFunc;
                };

                newFunc.base = function (base) {
                    func.domain(newFunc.log());

                    return newFunc;
                };

                newFunc.invert = function (y) {
                    return pow(func.invert(y));
                };

                newFunc.ticks = function (count, isNice, intNumber) {

                    var arr = func.ticks(count, isNice, intNumber || 100000000000000000000, true);

                    if (arr[arr.length - 1] < func.max()) {
                        arr.push(func.max());
                    }

                    var newArr = [];
                    for (var i = 0, len = arr.length; i < len; i++) {
                        newArr[i] = pow(arr[i]);
                    }

                    return newArr;
                };

                return newFunc;
            },

            /**
             * 범위에 대한 scale
             *
             */
            linear: function linear() {

                var _domain = [0, 1];
                var _range = [0, 1];
                var _isRound = false;
                var _isClamp = false;
                var _cache = {};

                var roundFunction = null;
                var numberFunction = null;

                var domainMin = null;
                var domainMax = null;

                var rangeMin = null;
                var rangeMax = null;

                var distDomain = null;
                var distRange = null;
                var rate = 0;

                var callFunction = null;
                var _rangeBand = null;

                function func(x) {

                    if (domainMax < x) {
                        if (_isClamp) {
                            return func(domainMax);
                        }

                        return _range[0] + Math.abs(x - _domain[0]) * rate;
                    } else if (domainMin > x) {
                        if (_isClamp) {
                            return func(domainMin);
                        }

                        return _range[0] - Math.abs(x - _domain[0]) * rate;
                    } else {
                        var pos = (x - _domain[0]) / distDomain;

                        return callFunction(pos);
                    }
                }

                func.cache = function () {
                    return _cache;
                };

                func.min = function () {
                    return Math.min.apply(Math, _domain);
                };

                func.max = function () {
                    return Math.max.apply(Math, _domain);
                };

                func.rangeMin = function () {
                    return Math.min.apply(Math, _range);
                };

                func.rangeMax = function () {
                    return Math.max.apply(Math, _range);
                };

                func.rate = function (value, max) {
                    return func(func.max() * (value / max));
                };

                func.clamp = function (isClamp) {
                    _isClamp = isClamp || false;
                };

                func.domain = function (values) {

                    if (!arguments.length) {
                        return _domain;
                    }

                    for (var i = 0; i < values.length; i++) {
                        _domain[i] = values[i];
                    }

                    domainMin = func.min();
                    domainMax = func.max();

                    distDomain = _domain[1] - _domain[0];

                    return this;
                };

                func.range = function (values) {

                    if (!arguments.length) {
                        return _range;
                    }

                    for (var i = 0; i < values.length; i++) {
                        _range[i] = values[i];
                    }

                    roundFunction = math$$1.interpolateRound(_range[0], _range[1]);
                    numberFunction = math$$1.interpolateNumber(_range[0], _range[1]);

                    rangeMin = func.rangeMin();
                    rangeMax = func.rangeMax();

                    distRange = Math.abs(rangeMax - rangeMin);

                    rate = distRange / distDomain;

                    callFunction = _isRound ? roundFunction : numberFunction;

                    return this;
                };

                func.rangeRound = function (values) {
                    _isRound = true;

                    return func.range(values);
                };

                func.rangeBand = function () {
                    return _rangeBand;
                };

                func.invert = function (y) {

                    var f = self.linear().domain(_range).range(_domain);
                    return f(y);
                };

                func.ticks = function (count, isNice, /** @deprecated */intNumber, reverse) {

                    //intNumber = intNumber || 10000;
                    reverse = reverse || false;
                    var max = func.max();

                    if (_domain[0] == 0 && _domain[1] == 0) {
                        return [];
                    }

                    var obj = math$$1.nice(_domain[0], _domain[1], count || 10, isNice || false);

                    var arr = [];

                    var start = reverse ? obj.max : obj.min;
                    var end = reverse ? obj.min : obj.max;
                    var unit = obj.spacing;
                    var fixed = math$$1.fixed(unit);

                    while (reverse ? end <= start : start <= end) {
                        arr.push(start /* / intNumber*/);

                        if (reverse) {
                            start = fixed.minus(start, unit);
                        } else {
                            start = fixed.plus(start, unit);
                        }
                    }

                    if (reverse) {
                        if (arr[0] != max) {
                            arr.unshift(max);
                        }

                        for (var i = 0, len = arr.length; i < len; i++) {
                            arr[i] = Math.abs(arr[i] - max);
                        }
                        //arr.reverse();
                    } else {
                        if (arr[arr.length - 1] != end && start > end) {
                            arr.push(end);
                        }

                        if (_domain[0] > _domain[1]) {
                            arr.reverse();
                        }
                    }

                    var first = func(arr[0]);
                    var second = func(arr[1]);

                    _rangeBand = Math.abs(second - first);

                    return arr;
                };

                return func;
            }
        };

        return self;
    }
};

var vector = {
    name: "chart.vector",
    extend: null,
    component: function component() {
        var Vector = function Vector(x, y, z) {
            this.x = x || 0;
            this.y = y || 0;
            this.z = z || 0;

            this.add = function (numberOrVector) {
                if (numberOrVector instanceof Vector) {
                    return new Vector(this.x + numberOrVector.x, this.y + numberOrVector.y, this.z + numberOrVector.z);
                }

                return new Vector(this.x + numberOrVector, this.y + numberOrVector, this.z + numberOrVector);
            };

            this.subtract = function (numberOrVector) {
                if (numberOrVector instanceof Vector) {
                    return new Vector(this.x - numberOrVector.x, this.y - numberOrVector.y, this.z - numberOrVector.z);
                }

                return new Vector(this.x - numberOrVector, this.y - numberOrVector, this.z - numberOrVector);
            };

            this.multiply = function (numberOrVector) {
                if (numberOrVector instanceof Vector) {
                    return new Vector(this.x * numberOrVector.x, this.y * numberOrVector.y, this.z * numberOrVector.z);
                }

                return new Vector(this.x * numberOrVector, this.y * numberOrVector, this.z * numberOrVector);
            };

            this.dotProduct = function (vector) {
                var value = this.x * vector.x + this.y * vector.y + this.z * vector.z;
                return Math.acos(value / (this.getMagnitude() * vector.getMagnitude()));
            };

            this.crossProduct = function (vector) {
                return new Vector(this.y * vector.z - this.z * vector.y, this.z * vector.x - this.x * vector.z, this.x * vector.y - this.y * vector.x);
            };

            this.normalize = function () {
                var mag = this.getMagnitude();

                this.x /= mag;
                this.y /= mag;
                this.z /= mag;
            };

            this.getMagnitude = function () {
                return Math.sqrt(this.x * this.x + this.y * this.y + this.z * this.z);
            };
        };

        return Vector;
    }
};

var draw = {
    name: "chart.draw",
    extend: null,
    component: function component() {
        var _ = jui$1.include("util.base");

        var Draw = function Draw() {

            /**
             * @method drawBefore
             *
             * run before draw object
             *
             */

            /**
             * @method draw
             *
             * draw object
             *
             * @return {Object}
             *
             */

            /**
             * @method drawAfter
             *
             * run after draw object
             */

            /**
             * @method drawAnimate
             *
             * implements animate code after draw object
             */

            /**
             * @method render
             *
             * 모든 Draw 객체는  render 함수를 통해서 그려진다.
             *
             */
            this.render = function () {
                if (!_.typeCheck("function", this.draw)) {
                    throw new Error("JUI_CRITICAL_ERR: 'draw' method must be implemented");
                }

                // Call drawBefore method
                if (_.typeCheck("function", this.drawBefore)) {
                    this.drawBefore();
                }

                // Call draw method (All)
                var obj = this.draw();

                // Call drawAnimate method
                if (_.typeCheck("function", this.drawAnimate)) {
                    var draw = this.grid || this.brush || this.widget || this.map;

                    if (draw.animate !== false) {
                        this.drawAnimate(obj);
                    }
                }

                // Call drawAfter method
                if (_.typeCheck("function", this.drawAfter)) {
                    this.drawAfter(obj);
                }

                return obj;
            };

            /**
             * @method format
             * Get a default format callback of draw object.
             *
             * @return {Function}
             */
            this.format = function () {
                var draw = this.grid || this.brush || this.widget,
                    callback = draw.format || this.chart.format;

                return callback.apply(this.chart, arguments);
            };

            /**
             * @method balloonPoints
             *
             * 말풍선 그리그 메소드
             *
             * @param {String} type
             * @param {Number} w
             * @param {Number} h
             * @param {Number} anchor
             * @return {String}
             */
            this.balloonPoints = function (type, w, h, anchor) {
                var points = [];

                if (type == "top") {
                    points.push([0, 0].join(","));
                    points.push([w, 0].join(","));
                    points.push([w, h].join(","));
                    points.push([w / 2 + anchor / 2, h].join(","));
                    points.push([w / 2, h + anchor].join(","));
                    points.push([w / 2 - anchor / 2, h].join(","));
                    points.push([0, h].join(","));
                    points.push([0, 0].join(","));
                } else if (type == "bottom") {
                    points.push([0, anchor].join(","));
                    points.push([w / 2 - anchor / 2, anchor].join(","));
                    points.push([w / 2, 0].join(","));
                    points.push([w / 2 + anchor / 2, anchor].join(","));
                    points.push([w, anchor].join(","));
                    points.push([w, anchor + h].join(","));
                    points.push([0, anchor + h].join(","));
                    points.push([0, anchor].join(","));
                } else if (type == "left") {
                    points.push([0, 0].join(","));
                    points.push([w, 0].join(","));
                    points.push([w, h / 2 - anchor / 2].join(","));
                    points.push([w + anchor, h / 2].join(","));
                    points.push([w, h / 2 + anchor / 2].join(","));
                    points.push([w, h].join(","));
                    points.push([0, h].join(","));
                    points.push([0, 0].join(","));
                } else if (type == "right") {
                    points.push([0, 0].join(","));
                    points.push([w, 0].join(","));
                    points.push([w, h].join(","));
                    points.push([0, h].join(","));
                    points.push([0, h / 2 + anchor / 2].join(","));
                    points.push([0 - anchor, h / 2].join(","));
                    points.push([0, h / 2 - anchor / 2].join(","));
                    points.push([0, 0].join(","));
                } else {
                    points.push([0, 0].join(","));
                    points.push([w, 0].join(","));
                    points.push([w, h].join(","));
                    points.push([0, h].join(","));
                    points.push([0, 0].join(","));
                }

                return points.join(" ");
            };

            /**
             * @method on
             *
             * chart.on() 을 쉽게 사용 할 수 있게 해주는 유틸리티 함수
             *
             * @param {String} type event name
             * @param {Function} callback
             * @return {*}
             */
            this.on = function (type, callback) {
                var self = this;

                return this.chart.on(type, function () {
                    if (_.startsWith(type, "axis.") && _.typeCheck("integer", self.axis.index)) {
                        var axis = self.chart.axis(self.axis.index),
                            e = arguments[0];

                        if (_.typeCheck("object", axis)) {
                            if (arguments[1] == self.axis.index) {
                                callback.apply(self, [e]);
                            }
                        }
                    } else {
                        callback.apply(self, arguments);
                    }
                }, "render");
            };

            this.calculate3d = function () {
                var w = this.axis.area("width"),
                    h = this.axis.area("height"),
                    x = this.axis.area("x"),
                    y = this.axis.area("y"),
                    d = this.axis.depth,
                    r = this.axis.degree,
                    p = this.axis.perspective,
                    list = arguments;

                if (!_.typeCheck("integer", r.x)) r.x = 0;
                if (!_.typeCheck("integer", r.y)) r.y = 0;
                if (!_.typeCheck("integer", r.z)) r.z = 0;

                for (var i = 0; i < list.length; i++) {
                    list[i].perspective = p;
                    list[i].rotate(Math.max(w, h, d), r, x + w / 2, y + h / 2, d / 2);
                }
            };
        };

        Draw.setup = function () {
            return {
                /** @cfg {String} [type=null] Specifies the type of a widget/brush/grid to be added.*/
                type: null,
                /** @cfg {Boolean} [animate=false] Run the animation effect.*/
                animate: false
            };
        };

        return Draw;
    }
};

var axis = {
    name: "chart.axis",
    extend: null,
    component: function component() {
        var _ = jui$1.include("util.base");

        var Axis = function Axis(chart, originAxis, cloneAxis) {
            var self = this,
                map = null;
            var _area = {},
                _padding = {},
                _clipId = "",
                _clipPath = null,
                _clipRectId = "",
                _clipRect = null;

            function calculatePanel(a, padding) {
                a.x = getRate(a.x, chart.area('width'));
                a.y = getRate(a.y, chart.area('height'));
                a.width = getRate(a.width, chart.area('width'));
                a.height = getRate(a.height, chart.area('height'));

                a.x2 = a.x + a.width;
                a.y2 = a.y + a.height;

                // 패딩 개념 추가
                a.x += padding.left || 0;
                a.y += padding.top || 0;

                a.x2 -= padding.right || 0;
                a.y2 -= padding.bottom || 0;

                a.width = a.x2 - a.x;
                a.height = a.y2 - a.y;

                return a;
            }

            function getRate(value, max) {
                if (_.typeCheck("string", value) && value.indexOf("%") > -1) {
                    return max * (parseFloat(value.replace("%", "")) / 100);
                }

                return value;
            }

            function drawGridType(axis, k) {
                if ((k == "x" || k == "y" || k == "z") && !_.typeCheck("object", axis[k])) return null;

                // 축 위치 설정
                axis[k] = axis[k] || {};

                if (k == "x") {
                    axis[k].orient = axis[k].orient == "top" ? "top" : "bottom";
                } else if (k == "y") {
                    axis[k].orient = axis[k].orient == "right" ? "right" : "left";
                } else if (k == "z") {
                    axis[k].orient = "center";
                } else if (k == "c") {
                    axis[k].type = axis[k].type || "panel";
                    axis[k].orient = "custom";
                }

                axis[k].type = axis[k].type || "block";
                var Grid = jui$1.include("chart.grid." + axis[k].type);

                // 그리드 기본 옵션과 사용자 옵션을 합침
                jui$1.defineOptions(Grid, axis[k]);

                // 엑시스 기본 프로퍼티 정의
                var obj = new Grid(chart, axis, axis[k]);
                obj.chart = chart;
                obj.axis = axis;
                obj.grid = axis[k];
                obj.svg = chart.svg;

                var elem = obj.render();

                // 그리드 별 위치 선정하기 (z축이 없을 때)
                if (!self.isFull3D()) {
                    if (axis[k].orient == "left") {
                        elem.root.translate(chart.area("x") + self.area("x") - axis[k].dist, chart.area("y"));
                    } else if (axis[k].orient == "right") {
                        elem.root.translate(chart.area("x") + self.area("x2") + axis[k].dist, chart.area("y"));
                    } else if (axis[k].orient == "bottom") {
                        elem.root.translate(chart.area("x"), chart.area("y") + self.area("y2") + axis[k].dist);
                    } else if (axis[k].orient == "top") {
                        elem.root.translate(chart.area("x"), chart.area("y") + self.area("y") - axis[k].dist);
                    } else {
                        if (elem.root) elem.root.translate(chart.area("x") + self.area("x"), chart.area("y") + self.area("y"));
                    }
                }

                elem.scale.type = axis[k].type;
                elem.scale.root = elem.root;

                return elem.scale;
            }

            function drawMapType(axis, k) {
                if (k == "map" && !_.typeCheck("object", axis[k])) return null;

                // 축 위치 설정
                axis[k] = axis[k] || {};

                var Map = jui$1.include("chart.map");

                // 맵 기본 옵션과 사용자 옵션을 합침
                jui$1.defineOptions(Map, axis[k]);

                // 맵 객체는 한번만 생성함
                if (map == null) {
                    map = new Map(chart, axis, axis[k]);
                }

                // 맵 기본 프로퍼티 설정
                map.chart = chart;
                map.axis = axis;
                map.map = axis[k];
                map.svg = chart.svg;

                // 그리드 별 위치 선정하기
                var elem = map.render();
                elem.root.translate(chart.area("x") + self.area("x"), chart.area("y") + self.area("y"));
                elem.scale.type = axis[k].type;
                elem.scale.root = elem.root;

                return elem.scale;
            }

            function setScreen(pNo) {
                var dataList = self.origin,
                    limit = self.buffer,
                    maxPage = Math.ceil(dataList.length / limit);

                // 최소 & 최대 페이지 설정
                if (pNo < 1) {
                    self.page = 1;
                } else {
                    self.page = pNo > maxPage ? maxPage : pNo;
                }

                self.start = (self.page - 1) * limit, self.end = self.start + limit;

                // 마지막 페이지 처리
                if (self.end > dataList.length) {
                    self.start = dataList.length - limit;
                    self.end = dataList.length;
                }

                if (self.end <= dataList.length) {
                    self.start = self.start < 0 ? 0 : self.start;
                    self.data = dataList.slice(self.start, self.end);

                    if (dataList.length > 0) self.page++;
                }
            }

            function setZoom(start, end) {
                var dataList = self.origin;

                self.end = end > dataList.length ? dataList.length : end;
                self.start = start < 0 ? 0 : start;
                self.data = dataList.slice(self.start, self.end);
            }

            function createClipPath() {
                // clippath with x, y
                if (_clipPath) {
                    _clipPath.remove();
                    _clipPath = null;
                }

                // _clipId = _.createId("clip-id-");
                _clipId = "axis-clip-id-" + chart.index + "." + cloneAxis.index;

                _clipPath = chart.svg.clipPath({
                    id: _clipId
                }, function () {
                    chart.svg.rect({
                        x: _area.x,
                        y: _area.y,
                        width: _area.width,
                        height: _area.height
                    });
                });
                chart.appendDefs(_clipPath);

                // clippath without x, y
                if (_clipRect) {
                    _clipRect.remove();
                    _clipRect = null;
                }

                // _clipRectId = _.createId("clip-rect-id-");
                _clipRectId = "axis-clip-rect-id-" + chart.index;

                _clipRect = chart.svg.clipPath({
                    id: _clipRectId
                }, function () {
                    chart.svg.rect({
                        x: 0,
                        y: 0,
                        width: _area.width,
                        height: _area.height
                    });
                });

                chart.appendDefs(_clipRect);
            }

            function checkAxisPoint(e) {
                var top = self.area("y"),
                    left = self.area("x");

                if (e.chartY > top && e.chartY < top + self.area("height") && e.chartX > left && e.chartX < left + self.area("width")) {

                    e.axisX = e.chartX - left;
                    e.axisY = e.chartY - top;

                    return true;
                }

                return false;
            }

            function setAxisMouseEvent() {
                var isMouseOver = false,
                    index = cloneAxis.index;

                chart.on("chart.mousemove", function (e) {
                    if (checkAxisPoint(e)) {
                        if (!isMouseOver) {
                            chart.emit("axis.mouseover", [e, index]);
                            isMouseOver = true;
                        }
                    } else {
                        if (isMouseOver) {
                            chart.emit("axis.mouseout", [e, index]);
                            isMouseOver = false;
                        }
                    }

                    if (checkAxisPoint(e)) {
                        chart.emit("axis.mousemove", [e, index]);
                    }
                });

                chart.on("bg.mousemove", function (e) {
                    if (!checkAxisPoint(e) && isMouseOver) {
                        chart.emit("axis.mouseout", [e, index]);
                        isMouseOver = false;
                    }
                });

                chart.on("chart.mousedown", function (e) {
                    if (!checkAxisPoint(e)) return;
                    chart.emit("axis.mousedown", [e, index]);
                });

                chart.on("chart.mouseup", function (e) {
                    if (!checkAxisPoint(e)) return;
                    chart.emit("axis.mouseup", [e, index]);
                });

                chart.on("chart.click", function (e) {
                    if (!checkAxisPoint(e)) return;
                    chart.emit("axis.click", [e, index]);
                });

                chart.on("chart.dblclick", function (e) {
                    if (!checkAxisPoint(e)) return;
                    chart.emit("axis.dblclick", [e, index]);
                });

                chart.on("chart.rclick", function (e) {
                    if (!checkAxisPoint(e)) return;
                    chart.emit("axis.rclick", [e, index]);
                });

                chart.on("chart.mousewheel", function (e) {
                    if (!checkAxisPoint(e)) return;
                    chart.emit("axis.mousewheel", [e, index]);
                });
            }

            function drawAxisBackground() {
                var bw = chart.theme("axisBorderWidth"),
                    lr = _padding.left + _padding.right,
                    tb = _padding.top + _padding.bottom;

                var bg = chart.svg.rect({
                    rx: chart.theme("axisBorderRadius"),
                    ry: chart.theme("axisBorderRadius"),
                    fill: chart.theme("axisBackgroundColor"),
                    "fill-opacity": chart.theme("axisBackgroundOpacity"),
                    stroke: chart.theme("axisBorderColor"),
                    "stroke-width": bw,
                    width: _area.width + lr - bw,
                    height: _area.height + tb - bw,
                    x: _area.x - _padding.left,
                    y: _area.y - _padding.top
                });

                bg.translate(chart.area("x"), chart.area("y"));

                return bg;
            }

            function init() {
                _.extend(self, {
                    data: cloneAxis.data,
                    origin: cloneAxis.origin,
                    buffer: cloneAxis.buffer,
                    shift: cloneAxis.shift,
                    index: cloneAxis.index,
                    page: cloneAxis.page,
                    start: cloneAxis.start,
                    end: cloneAxis.end,
                    degree: cloneAxis.degree,
                    depth: cloneAxis.depth,
                    perspective: cloneAxis.perspective
                });

                // 원본 데이터 설정
                self.origin = self.data;

                // 페이지 초기화
                if (self.start > 0 || self.end > 0) {
                    setZoom(self.start, self.end);
                } else {
                    setScreen(self.page);
                }

                // 엑시스 이벤트 설정
                setAxisMouseEvent();

                // Grid 및 Area 설정
                self.reload(cloneAxis);
            }

            /**
             * @method getValue
             *
             * 특정 필드의 값을 맵핑해서 가지고 온다.
             *
             * @param {Object} data row data
             * @param {String} fieldString 필드 이름
             * @param {String/Number/Boolean/Object} [defaultValue=''] 기본값
             * @return {Mixed}
             */
            this.getValue = function (data, fieldString, defaultValue) {
                var value = data[cloneAxis.keymap[fieldString]];
                if (!_.typeCheck("undefined", value)) {
                    return value;
                }

                value = data[fieldString];
                if (!_.typeCheck("undefined", value)) {
                    return value;
                }

                return defaultValue;
            };

            /**
             * @method reload
             *
             * Axis 의 x,y,z 축을 다시 생성한다.
             * * *
             * @param {Object} options
             */
            this.reload = function (options) {
                var area = chart.area();

                _.extend(this, {
                    x: options.x,
                    y: options.y,
                    z: options.z,
                    c: options.c,
                    map: options.map
                });

                // 패딩 옵션 설정
                if (_.typeCheck("integer", options.padding)) {
                    _padding = { left: options.padding, right: options.padding, bottom: options.padding, top: options.padding };
                } else {
                    _padding = options.padding;
                }

                _area = calculatePanel(_.extend(options.area, {
                    x: 0, y: 0, width: area.width, height: area.height
                }, true), _padding);

                // 클립 패스 설정
                createClipPath();

                this.root = drawAxisBackground();
                this.x = drawGridType(this, "x");
                this.y = drawGridType(this, "y");
                this.z = drawGridType(this, "z");
                this.c = drawGridType(this, "c");
                this.map = drawMapType(this, "map");

                this.buffer = options.buffer;
                this.shift = options.shift;
                this.index = options.index;
                this.page = options.page;
                this.start = options.start;
                this.end = options.end;
                this.degree = options.degree;
                this.depth = options.depth;
                this.perspective = options.perspective;
            };

            /**
             * @method area
             *
             * Axis 의 표시 영역을 리턴한다.
             *
             * @param {"x"/"y"/"width"/'height"/null} key  area's key
             * @return {Number/Object} key 가 있으면 해당 key 의 value 를 리턴한다. 없으면 전체 area 객체를 리턴한다.
             */
            this.area = function (key) {
                return _.typeCheck("undefined", _area[key]) ? _area : _area[key];
            };

            /**
             * Gets the top, bottom, left and right margin values.
             *
             * @param {"top"/"left"/"bottom"/"right"} key
             * @return {Number/Object}
             */
            this.padding = function (key) {
                return _.typeCheck("undefined", _padding[key]) ? _padding : _padding[key];
            };

            /**
             * @method get
             *
             * Axis 의 옵션 정보를 리턴한다.
             *
             * @param key
             */
            this.get = function (type) {
                var obj = {
                    area: _area,
                    padding: _padding,
                    clipId: _clipId,
                    clipRectId: _clipRectId
                };

                return obj[type] || cloneAxis[type];
            };

            /**
             * @method set
             *
             * axis의 주요 프로퍼티를 업데이트한다.
             *
             * @param {"x"/"y"/"c"/"map"/"degree"/"padding"} type
             * @param {Object} grid
             */
            this.set = function (type, value, isReset) {
                if (_.typeCheck("object", value)) {
                    if (isReset === true) {
                        originAxis[type] = _.deepClone(value);
                        cloneAxis[type] = _.deepClone(value);
                    } else {
                        _.extend(originAxis[type], value);
                        _.extend(cloneAxis[type], value);
                    }
                } else {
                    originAxis[type] = value;
                    cloneAxis[type] = value;
                }

                if (chart.isRender()) chart.render();
            };

            /**
             * @deprecated
             * @method updateGrid
             *
             * grid 정보를 업데이트 한다.
             *
             * @param {"x"/"y"/"c"/"map"} type
             * @param {Object} grid
             */
            this.updateGrid = this.set;

            /**
             * @method update
             *
             * data 를 업데이트 한다.
             *
             * @param {Array} data
             */
            this.update = function (data) {
                this.origin = _.typeCheck("array", data) ? data : [data];
                this.page = 1;
                this.start = 0;
                this.end = 0;

                this.screen(1);
            };

            /**
             * @method screen
             *
             * 화면상에 보여줄 데이타를 페이징한다.
             *
             * @param {Number} pNo 페이지 번호
             */
            this.screen = function (pNo) {
                setScreen(pNo);

                if (this.end <= this.origin.length) {
                    if (chart.isRender()) chart.render();
                }
            };

            /**
             * @method next
             *
             */
            this.next = function () {
                var dataList = this.origin,
                    limit = this.buffer,
                    step = this.shift;

                this.start += step;

                var isLimit = this.start + limit > dataList.length;

                this.end = isLimit ? dataList.length : this.start + limit;
                this.start = isLimit ? dataList.length - limit : this.start;
                this.start = this.start < 0 ? 0 : this.start;
                this.data = dataList.slice(this.start, this.end);

                if (chart.isRender()) chart.render();
            };

            /**
             * @method prev
             */
            this.prev = function () {
                var dataList = this.origin,
                    limit = this.buffer,
                    step = this.shift;

                this.start -= step;

                var isLimit = this.start < 0;

                this.end = isLimit ? limit : this.start + limit;
                this.start = isLimit ? 0 : this.start;
                this.data = dataList.slice(this.start, this.end);

                if (chart.isRender()) chart.render();
            };

            /**
             * @method zoom
             *
             * 특정 인덱스의 영역으로 데이타를 다시 맞춘다.
             *
             * @param {Number} start
             * @param {Number} end
             */
            this.zoom = function (start, end) {
                if (start == end) return;

                setZoom(start, end);
                if (chart.isRender()) chart.render();
            };

            this.isFull3D = function () {
                return !_.typeCheck(["undefined", "null"], this.z);
            };

            init();
        };

        Axis.setup = function () {

            /** @property {chart.grid.core} [x=null] Sets a grid on the X axis (see the grid tab). */
            /** @property {chart.grid.core} [y=null] Sets a grid on the Y axis (see the grid tab). */
            /** @property {chart.grid.core} [c=null] Sets a custom grid (see the grid tab). */
            /** @property {chart.map} [map=null] Sets a chart map. */
            /** @property {Array} [data=[]] Sets the row set data which constitute a chart. */
            /** @property {Integer} [buffer=10000] Limits the number of elements shown on a chart. */
            /** @property {Integer} [shift=1] Data shift count for the 'prev' or 'next' method of the chart builder. */
            /** @property {Array} [origin=[]] [For read only] Original data initially set. */
            /** @property {Integer} [page=1] [For read only] Page number of the data currently drawn. */
            /** @property {Integer} [start=0] [For read only] Start index of the data currently drawn. */
            /** @property {Integer} [end=0] [For read only] End index of the data currently drawn. */

            return {
                /** @cfg {Integer} [extend=null]  Configures the index of an applicable grid group when intending to use already configured axis options. */
                extend: null,

                /** @cfg {chart.grid.core} [x=null] Sets a grid on the X axis (see the grid tab). */
                x: null,
                /** @cfg {chart.grid.core} [y=null]  Sets a grid on the Y axis (see the grid tab). */
                y: null,
                /** @cfg {chart.grid.core} [z=null] Sets a grid on the Z axis (see the grid tab). */
                z: null,
                /** @cfg {chart.grid.core} [c=null] Sets a grid on the C axis (see the grid tab). */
                c: null,
                /** @cfg {chart.map.core} [map=null] Sets a map on the Map axis */
                map: null,
                /** @cfg {Array} [data=[]]  Sets the row set data which constitute a chart.  */
                data: [],
                /** @cfg {Array} [origin=[]]  [Fore read only] Original data initially set. */
                origin: [],
                /** @cfg {Object} [keymap={}] grid's data key map  */
                keymap: {},
                /** @cfg {Object} [area={}]  set area(x, y, width, height) of axis */
                area: {},
                /**
                 * @cfg  {Object} padding axis padding
                 * @cfg  {Number} [padding.top=0] axis's top padding
                 * @cfg  {Number} [padding.bottom=0] axis's bottom padding
                 * @cfg  {Number} [padding.left=0] axis's left padding
                 * @cfg  {Number} [padding.right=0] axis's right padding
                 */
                padding: {
                    top: 0,
                    bottom: 0,
                    left: 0,
                    right: 0
                },
                /** @cfg {Number} [buffer=10000] Limits the number of elements shown on a chart.  */
                buffer: 10000,
                /** @cfg {Number} [shift=1]  Data shift count for the 'prev' or 'next' method of the chart builder.  */
                shift: 1,

                /** @cfg {Number} [page=1]  Page number of the data currently drawn. */
                page: 1,
                /** @cfg {Number} [start=0] */
                start: 0,
                /** @cfg {Number} [end=0] */
                end: 0,
                /**
                 * @cfg  {Object} Set degree of 3d chart
                 * @cfg  {Number} [degree.x=0] axis's x-degree
                 * @cfg  {Number} [degree.y=0] axis's y-degree
                 * @cfg  {Number} [degree.z=0] axis's z-degree
                 */
                degree: {
                    x: 0,
                    y: 0,
                    z: 0
                },
                /** @cfg {Number} [depth=0]  Set depth of 3d chart  */
                depth: 0,
                /** @cfg {Number} [perspective=0.9]  Set perspective values in the 3d chart  */
                perspective: 0.9
            };
        };

        return Axis;
    }
};

jui$1.use([dom, svg]);

var Map = {
    name: "chart.map",
    extend: null,
    component: function component() {
        var _ = jui$1.include("util.base");
        var $ = jui$1.include("util.dom");
        var SVG = jui$1.include("util.svg");

        var Map = function Map() {
            var self = this;
            var pathData = {},
                pathGroup = null,
                pathIndex = {},
                pathScale = 1,
                pathX = 0,
                pathY = 0;

            function loadArray(data) {
                var children = [];

                for (var i = 0, len = data.length; i < len; i++) {
                    if (_.typeCheck("object", data[i])) {
                        var style = {};

                        if (_.typeCheck("string", data[i].style)) {
                            style = getStyleObj(data[i].style);
                            delete data[i].style;
                        }

                        var elem = SVG.createObject({
                            type: data[i].d != null ? "path" : "polygon",
                            attr: data[i]
                        });

                        // Set styles
                        elem.attr(_.extend(style, {
                            fill: self.chart.theme("mapPathBackgroundColor"),
                            "fill-opacity": self.chart.theme("mapPathBackgroundOpacity"),
                            stroke: self.chart.theme("mapPathBorderColor"),
                            "stroke-width": self.chart.theme("mapPathBorderWidth"),
                            "stroke-opacity": self.chart.theme("mapPathBorderOpacity")
                        }));

                        children.push({
                            path: elem,
                            data: data[i]
                        });
                    }
                }

                function getStyleObj(str) {
                    var style = {},
                        list = str.split(";");

                    for (var i = 0; i < list.length; i++) {
                        if (list[i].indexOf(":") != -1) {
                            var obj = list[i].split(":");

                            style[_.trim(obj[0])] = _.trim(obj[1]);
                        }
                    }

                    return style;
                }

                return children;
            }

            function getPathList(root) {
                if (!_.typeCheck("string", root.id)) return;

                var pathData = [],
                    children = root.childNodes;

                for (var i = 0, len = children.length; i < len; i++) {
                    var elem = children[i],
                        name = elem.nodeName.toLowerCase();

                    if (elem.nodeType != 1) continue;

                    if (name == "g") {
                        pathData = pathData.concat(getPathList(elem));
                    } else if (name == "path" || name == "polygon") {
                        var obj = { group: root.id };

                        for (var key in elem.attributes) {
                            var attr = elem.attributes[key];

                            if (attr.specified && isLoadAttribute(attr.name)) {
                                obj[attr.name] = replaceXYValue(attr);
                            }
                        }

                        if (_.typeCheck("string", obj.id)) {
                            _.extend(obj, getDataById(obj.id));
                        }

                        pathData.push(obj);
                    }
                }

                return pathData;
            }

            function loadPath(uri) {
                // 해당 URI의 데이터가 존재할 경우
                if (_.typeCheck("array", pathData[uri])) {
                    return loadArray(pathData[uri]);
                }

                // 해당 URI의 데이터가 없을 경우
                pathData[uri] = [];

                _.ajax({
                    url: uri,
                    async: false,
                    success: function success(xhr) {
                        var xml = xhr.responseXML,
                            svg$$1 = xml.getElementsByTagName("svg"),
                            style = xml.getElementsByTagName("style");

                        if (svg$$1.length != 1) return;
                        var children = svg$$1[0].childNodes;

                        for (var i = 0, len = children.length; i < len; i++) {
                            var elem = children[i],
                                name = elem.nodeName.toLowerCase();

                            if (elem.nodeType != 1) continue;

                            if (name == "g") {
                                pathData[uri] = pathData[uri].concat(getPathList(elem));
                            } else if (name == "path" || name == "polygon") {
                                var obj = {};

                                for (var key in elem.attributes) {
                                    var attr = elem.attributes[key];

                                    if (attr.specified && isLoadAttribute(attr.name)) {
                                        obj[attr.name] = replaceXYValue(attr);
                                    }
                                }

                                if (_.typeCheck("string", obj.id)) {
                                    _.extend(obj, getDataById(obj.id));
                                }

                                pathData[uri].push(obj);
                            }
                        }

                        // 스타일 태그가 정의되어 있을 경우
                        for (var i = 0; i < style.length; i++) {
                            self.svg.root.element.appendChild(style[i]);
                        }
                    },
                    fail: function fail(xhr) {
                        throw new Error("JUI_CRITICAL_ERR: Failed to load resource");
                    }
                });

                return loadArray(pathData[uri]);
            }

            function isLoadAttribute(name) {
                return name == "group" || name == "id" || name == "title" || name == "x" || name == "y" || name == "d" || name == "points" || name == "class" || name == "style";
            }

            function replaceXYValue(attr) {
                if (attr.name == "x" || attr.name == "y") {
                    return parseFloat(attr.value);
                }

                return attr.value;
            }

            function getDataById(id) {
                var list = self.axis.data;

                for (var i = 0; i < list.length; i++) {
                    var dataId = self.axis.getValue(list[i], "id", null);

                    if (dataId == id) {
                        return list[i];
                    }
                }

                return null;
            }

            function makePathGroup() {
                var group = self.chart.svg.group(),
                    list = loadPath(self.map.path);

                for (var i = 0, len = list.length; i < len; i++) {
                    var path = list[i].path,
                        data = list[i].data;

                    //addEvent(path, list[i]);
                    group.append(path);

                    if (_.typeCheck("string", data.id)) {
                        pathIndex[data.id] = list[i];
                    }
                }

                return group;
            }

            function getScaleXY() {
                // 차후에 공통 함수로 변경해야 함
                var w = self.map.width,
                    h = self.map.height,
                    px = (w * pathScale - w) / 2,
                    py = (h * pathScale - h) / 2;

                return {
                    x: px + pathX,
                    y: py + pathY
                };
            }

            function addEvent(elem, obj) {
                var chart = self.chart;

                elem.on("click", function (e) {
                    setMouseEvent(e);
                    chart.emit("map.click", [obj, e]);
                });

                elem.on("dblclick", function (e) {
                    setMouseEvent(e);
                    chart.emit("map.dblclick", [obj, e]);
                });

                elem.on("contextmenu", function (e) {
                    setMouseEvent(e);
                    chart.emit("map.rclick", [obj, e]);
                    e.preventDefault();
                });

                elem.on("mouseover", function (e) {
                    setMouseEvent(e);
                    chart.emit("map.mouseover", [obj, e]);
                });

                elem.on("mouseout", function (e) {
                    setMouseEvent(e);
                    chart.emit("map.mouseout", [obj, e]);
                });

                elem.on("mousemove", function (e) {
                    setMouseEvent(e);
                    chart.emit("map.mousemove", [obj, e]);
                });

                elem.on("mousedown", function (e) {
                    setMouseEvent(e);
                    chart.emit("map.mousedown", [obj, e]);
                });

                elem.on("mouseup", function (e) {
                    setMouseEvent(e);
                    chart.emit("map.mouseup", [obj, e]);
                });

                function setMouseEvent(e) {
                    var pos = $.offset(chart.root),
                        offsetX = e.pageX - pos.left,
                        offsetY = e.pageY - pos.top;

                    e.bgX = offsetX;
                    e.bgY = offsetY;
                    e.chartX = offsetX - chart.padding("left");
                    e.chartY = offsetY - chart.padding("top");
                }
            }

            this.scale = function (id) {
                if (!_.typeCheck("string", id)) return;

                var x = null,
                    y = null,
                    path = null,
                    data = null,
                    pxy = getScaleXY();

                if (_.typeCheck("object", pathIndex[id])) {
                    path = pathIndex[id].path;
                    data = pathIndex[id].data;

                    if (data.x != null) {
                        var dx = self.axis.getValue(data, "dx", 0),
                            cx = parseFloat(data.x) + dx;
                        x = cx * pathScale - pxy.x;
                    }

                    if (data.y != null) {
                        var dy = self.axis.getValue(data, "dy", 0),
                            cy = parseFloat(data.y) + dy;
                        y = cy * pathScale - pxy.y;
                    }
                }

                return {
                    x: x,
                    y: y,
                    path: path,
                    data: data
                };
            };

            this.scale.each = function (callback) {
                var self = this;

                for (var id in pathIndex) {
                    callback.apply(self, [id, pathIndex[id]]);
                }
            };

            this.scale.size = function () {
                return {
                    width: self.map.width,
                    height: self.map.height
                };
            };

            this.scale.scale = function (scale) {
                if (!scale || scale < 0) return pathScale;

                pathScale = scale;
                pathGroup.scale(pathScale);
                this.view(pathX, pathY);

                return pathScale;
            };

            this.scale.view = function (x, y) {
                var xy = { x: pathX, y: pathY };

                if (!_.typeCheck("number", x) || !_.typeCheck("number", y)) return xy;

                pathX = x;
                pathY = y;

                var pxy = getScaleXY();
                pathGroup.translate(-pxy.x, -pxy.y);

                return {
                    x: pathX,
                    y: pathY
                };
            };

            this.draw = function () {
                var root = this.chart.svg.group();

                pathScale = this.map.scale;
                pathX = this.map.viewX;
                pathY = this.map.viewY;
                pathGroup = makePathGroup();

                // pathGroup 루트에 추가
                root.append(pathGroup);

                if (this.map.scale != 1) {
                    this.scale.scale(pathScale);
                }

                if (this.map.viewX != 0 || this.map.viewY != 0) {
                    this.scale.view(pathX, pathY);
                }

                if (this.map.hide) {
                    root.attr({ visibility: "hidden" });
                }

                return {
                    root: root,
                    scale: this.scale
                };
            };

            this.drawAfter = function (obj) {
                obj.root.attr({ "clip-path": "url(#" + this.axis.get("clipRectId") + ")" });

                // 모든 path가 그려진 이후에 이벤트 설정
                setTimeout(function () {
                    self.scale.each(function (id, obj) {
                        addEvent(obj.path, obj);
                    });
                }, 1);
            };
        };

        Map.setup = function () {
            /** @property {chart.builder} chart */
            /** @property {chart.axis} axis */
            /** @property {Object} map */

            return {
                scale: 1,
                viewX: 0,
                viewY: 0,

                /** @cfg {Boolean} [hide=false] Determines whether to display an applicable grid.  */
                hide: false,
                /** @cfg {String} [map=''] Set a map file's name */
                path: "",
                /** @cfg {Number} [width=-1] Set map's width */
                width: -1,
                /** @cfg {Number} [height=-1] Set map's height */
                height: -1
            };
        };

        /**
         * @event map_click
         * Event that occurs when clicking on the map area. (real name ``` map.click ```)
         * @param {jQueryEvent} e The event object.
         * @param {Number} index Axis index.
         */
        /**
         * @event map_dblclick
         * Event that occurs when double clicking on the map area. (real name ``` map.dblclick ```)
         * @param {jQueryEvent} e The event object.
         * @param {Number} index Axis index.
         */
        /**
         * @event map_rclick
         * Event that occurs when right clicking on the map area. (real name ``` map.rclick ```)
         * @param {jQueryEvent} e The event object.
         * @param {Number} index Axis index.
         */
        /**
         * @event map_mouseover
         * Event that occurs when placing the mouse over the map area. (real name ``` map.mouseover ```)
         * @param {jQueryEvent} e The event object.
         * @param {Number} index Axis index.
         */
        /**
         * @event map_mouseout
         * Event that occurs when moving the mouse out of the map area. (real name ``` map.mouseout ```)
         * @param {jQueryEvent} e The event object.
         * @param {Number} index Axis index.
         */
        /**
         * @event map_mousemove
         * Event that occurs when moving the mouse over the map area. (real name ``` map.mousemove ```)
         * @param {jQueryEvent} e The event object.
         * @param {Number} index Axis index.
         */
        /**
         * @event map_mousedown
         * Event that occurs when left clicking on the map area. (real name ``` map.mousedown ```)
         * @param {jQueryEvent} e The event object.
         * @param {Number} index Axis index.
         */
        /**
         * @event map_mouseup
         * Event that occurs after left clicking on the map area. (real name ``` map.mouseup ```)
         * @param {jQueryEvent} e The event object.
         * @param {Number} index Axis index.
         */

        return Map;
    }
};

jui$1.use(dom, svg, color, axis);

var JUIBuilder = {
    name: "chart.builder",
    extend: "core",
    component: function component() {
        var _ = jui$1.include("util.base");
        var $ = jui$1.include("util.dom");
        var SVGUtil = jui$1.include("util.svg");
        var ColorUtil = jui$1.include("util.color");
        var Axis = jui$1.include("chart.axis");
        var HidpiUtil = jui$1.include("util.canvas.hidpi");

        _.resize(function () {
            var call_list = jui$1.get("chart.builder");

            for (var i = 0; i < call_list.length; i++) {
                var ui_list = call_list[i];

                for (var j = 0; j < ui_list.length; j++) {
                    if (_.typeCheck("function", ui_list[j].resize)) {
                        ui_list[j].resize();
                    }
                }
            }
        }, 1000);

        var UI = function UI() {
            var _axis = [],
                _brush = [],
                _widget = [],
                _defs = null;
            var _padding,
                _area,
                _theme,
                _hash = {};
            var _initialize = false,
                _options = null,
                _handler = { render: [], renderAll: [] }; // 리셋 대상 커스텀 이벤트 핸들러
            var _canvas = { main: null, buffer: null, sub: null }; // 캔버스 모드 전용
            var _cache = {},
                _index = 0; // index는 차트의 생성 순서

            function calculate(self) {
                var max = self.svg.size();

                var _chart = {
                    width: max.width - (_padding.left + _padding.right),
                    height: max.height - (_padding.top + _padding.bottom),
                    x: _padding.left,
                    y: _padding.top
                };

                // chart 크기가 마이너스일 경우 (엘리먼트가 hidden 상태)
                if (_chart.width < 0) _chart.width = 0;
                if (_chart.height < 0) _chart.height = 0;

                // _chart 영역 계산
                _chart.x2 = _chart.x + _chart.width;
                _chart.y2 = _chart.y + _chart.height;

                _area = _chart;
            }

            function drawBefore(self) {
                _brush = _.deepClone(_options.brush);
                _widget = _.deepClone(_options.widget);

                // defs 엘리먼트 생성
                _defs = self.svg.defs();

                // 해쉬 코드 초기화
                _hash = {};
            }

            function drawAxis(self) {

                // 엑시스 리스트 얻어오기
                var axisList = _.deepClone(_options.axis, { data: true, origin: true });

                for (var i = 0; i < axisList.length; i++) {
                    jui$1.defineOptions(Axis, axisList[i]);

                    // 엑시스 인덱스 설정
                    axisList[i].index = i;

                    if (!_axis[i]) {
                        _axis[i] = new Axis(self, _options.axis[i], axisList[i]);
                    } else {
                        _axis[i].reload(axisList[i]);
                    }
                }
            }

            function drawBrush(self) {
                var draws = _brush;

                if (draws != null) {
                    for (var i = 0; i < draws.length; i++) {
                        var Obj = jui$1.include("chart.brush." + draws[i].type);

                        // 브러쉬 기본 옵션과 사용자 옵션을 합침
                        jui$1.defineOptions(Obj, draws[i]);
                        var axis$$1 = _axis[draws[i].axis];

                        // 타겟 프로퍼티 설정
                        if (!draws[i].target) {
                            var target = [];

                            if (axis$$1) {
                                for (var key in axis$$1.data[0]) {
                                    target.push(key);
                                }
                            }

                            draws[i].target = target;
                        } else if (_.typeCheck("string", draws[i].target)) {
                            draws[i].target = [draws[i].target];
                        }

                        // 브러쉬 인덱스 설정
                        draws[i].index = i;

                        // 브러쉬 기본 프로퍼티 정의
                        var draw = new Obj(self, axis$$1, draws[i]);
                        draw.chart = self;
                        draw.axis = axis$$1;
                        draw.brush = draws[i];
                        draw.svg = self.svg;
                        draw.canvas = _canvas.buffer;

                        // 브러쉬 렌더링
                        draw.render();
                    }
                }
            }

            function drawWidget(self, isAll) {
                var draws = _widget;

                if (draws != null) {
                    for (var i = 0; i < draws.length; i++) {
                        var Obj = jui$1.include("chart.widget." + draws[i].type);

                        // 위젯 기본 옵션과 사용자 옵션을 합침
                        jui$1.defineOptions(Obj, draws[i]);

                        // 위젯 인덱스 설정
                        draws[i].index = i;

                        // 위젯 기본 프로퍼티 정의
                        var draw = new Obj(self, _axis[0], draws[i]);
                        draw.chart = self;
                        draw.axis = _axis[0];
                        draw.widget = draws[i];
                        draw.svg = self.svg;
                        draw.canvas = _canvas.sub;

                        // 위젯은 렌더 옵션이 false일 때, 최초 한번만 로드함 (연산 + 드로잉)
                        // 하지만 isAll이 true이면, 강제로 연산 및 드로잉을 함 (테마 변경 및 리사이징 시)
                        if (_initialize && !draw.isRender() && isAll !== true) {
                            return;
                        }

                        var elem = draw.render();
                        if (!draw.isRender()) {
                            self.svg.autoRender(elem, false);
                        }
                    }
                }
            }

            function setCommonEvents(self, elem) {
                var isMouseOver = false;

                elem.on("click", function (e) {
                    if (!checkPosition(e)) {
                        self.emit("bg.click", [e]);
                    } else {
                        self.emit("chart.click", [e]);
                    }
                });

                elem.on("dblclick", function (e) {
                    if (!checkPosition(e)) {
                        self.emit("bg.dblclick", [e]);
                    } else {
                        self.emit("chart.dblclick", [e]);
                    }
                });

                elem.on("contextmenu", function (e) {
                    if (!checkPosition(e)) {
                        self.emit("bg.rclick", [e]);
                    } else {
                        self.emit("chart.rclick", [e]);
                    }

                    e.preventDefault();
                });

                elem.on("mousemove", function (e) {
                    if (!checkPosition(e)) {
                        if (isMouseOver) {
                            self.emit("chart.mouseout", [e]);
                            isMouseOver = false;
                        }

                        self.emit("bg.mousemove", [e]);
                    } else {
                        if (isMouseOver) {
                            self.emit("chart.mousemove", [e]);
                        } else {
                            self.emit("chart.mouseover", [e]);
                            isMouseOver = true;
                        }
                    }
                });

                elem.on("mousedown", function (e) {
                    if (!checkPosition(e)) {
                        self.emit("bg.mousedown", [e]);
                    } else {
                        self.emit("chart.mousedown", [e]);
                    }
                });

                elem.on("mouseup", function (e) {
                    if (!checkPosition(e)) {
                        self.emit("bg.mouseup", [e]);
                    } else {
                        self.emit("chart.mouseup", [e]);
                    }
                });

                elem.on("mouseover", function (e) {
                    if (!checkPosition(e)) {
                        self.emit("bg.mouseover", [e]);
                    }
                });

                elem.on("mouseout", function (e) {
                    if (!checkPosition(e)) {
                        self.emit("bg.mouseout", [e]);
                    }
                });

                elem.on("mousewheel", function (e) {
                    if (!checkPosition(e)) {
                        self.emit("bg.mousewheel", [e]);
                    } else {
                        self.emit("chart.mousewheel", [e]);
                    }
                });

                function checkPosition(e) {
                    var pos = $.offset(self.root),
                        offsetX = e.pageX - pos.left,
                        offsetY = e.pageY - pos.top;

                    e.bgX = offsetX;
                    e.bgY = offsetY;
                    e.chartX = offsetX - self.padding("left");
                    e.chartY = offsetY - self.padding("top");

                    if (e.chartX < 0) return;
                    if (e.chartX > self.area("width")) return;
                    if (e.chartY < 0) return;
                    if (e.chartY > self.area("height")) return;

                    return true;
                }
            }

            function resetCustomEvent(self, isAll) {
                for (var i = 0; i < _handler.render.length; i++) {
                    self.off(_handler.render[i]);
                }
                _handler.render = [];

                if (isAll === true) {
                    for (var i = 0; i < _handler.renderAll.length; i++) {
                        self.off(_handler.renderAll[i]);
                    }
                    _handler.renderAll = [];
                }
            }

            function createGradient(obj, hashKey) {
                if (!_.typeCheck("undefined", hashKey) && _hash[hashKey]) {
                    return "url(#" + _hash[hashKey] + ")";
                }

                // var id = _.createId("gradient");
                var id = "gradient-" + _index;
                obj.attr.id = id;

                var g = SVGUtil.createObject(obj);
                _defs.append(g);

                if (!_.typeCheck("undefined", hashKey)) {
                    _hash[hashKey] = id;
                }

                return "url(#" + id + ")";
            }

            function createPattern(obj) {
                if (_.typeCheck("string", obj)) {
                    obj = obj.replace("url(#", "").replace(")", "");

                    if (_hash[obj]) {
                        return "url(#" + obj + ")";
                    }

                    // already pattern id
                    if (obj.indexOf('pattern-') == -1) {
                        return false;
                    }

                    var arr = obj.split("-"),
                        method = arr.pop();

                    var pattern = jui$1.include("chart." + arr.join("."));

                    if (!pattern) {
                        return false;
                    }

                    var patternElement = pattern[method];

                    if (typeof patternElement == 'function') {
                        patternElement = patternElement.call(patternElement);
                    }

                    // json 객체를 svg element 로 변환
                    if (patternElement.attr && !patternElement.attr.id) {
                        patternElement.attr.id = obj;
                    }

                    patternElement = SVGUtil.createObject(patternElement);

                    _defs.append(patternElement);

                    _hash[obj] = obj;

                    return "url(#" + obj + ")";
                } else {
                    // obj.attr.id = obj.attr.id || _.createId('pattern-');
                    obj.attr.id = obj.attr.id || "pattern-" + _index;

                    if (_hash[obj.attr.id]) {
                        return "url(#" + obj.attr.id + ")";
                    }

                    var patternElement = SVGUtil.createObject(obj);

                    _defs.append(patternElement);

                    _hash[obj.attr.id] = obj.attr.id;

                    return "url(#" + obj.attr.id + ")";
                }
            }

            function createColor(color$$1) {
                if (_.typeCheck("undefined", color$$1)) {
                    return "none";
                }

                if (_.typeCheck("object", color$$1)) {

                    if (color$$1.type == "pattern") {
                        return createPattern(color$$1);
                    } else {
                        return createGradient(color$$1);
                    }
                }

                if (typeof color$$1 == "string") {
                    var url = createPattern(color$$1);
                    if (url) {
                        return url;
                    }
                }

                var parsedColor = ColorUtil.parse(color$$1);
                if (parsedColor == color$$1) return color$$1;

                return createGradient(parsedColor, color$$1);
            }

            function setThemeStyle(theme) {
                var style = {};

                // 테마를 하나의 객체로 Merge
                if (_.typeCheck("string", theme)) {
                    _.extend(style, jui$1.include("chart.theme." + theme));
                    _.extend(style, _options.style);
                } else if (_.typeCheck("object", theme)) {
                    _.extend(_theme, _options.style);
                    _.extend(_theme, theme);
                    _.extend(style, _theme);
                }

                // 최종 렌더링에 적용되는 객체
                _theme = style;
            }

            function setDefaultOptions(self) {
                // 일부 옵션을 제외하고 클론
                _options = _.deepClone(self.options, { data: true, bind: true });

                var padding = _options.padding;

                // 패딩 옵션 설정
                if (_.typeCheck("integer", padding)) {
                    _padding = { left: padding, right: padding, bottom: padding, top: padding };
                } else {
                    _padding = padding;
                }

                // Draw 옵션 설정
                if (!_.typeCheck("array", _options.axis)) {
                    _options.axis = [_options.axis];
                }

                if (!_.typeCheck("array", _options.brush)) {
                    _options.brush = [_options.brush];
                }

                if (!_.typeCheck("array", _options.widget)) {
                    _options.widget = [_options.widget];
                }

                // Axis 기본값 설정
                if (_options.axis.length == 0) {
                    _options.axis.push({ data: [] });
                }

                // Axis 확장 설정
                for (var i = 0; i < _options.axis.length; i++) {
                    var axis$$1 = _options.axis[i];
                    _.extend(axis$$1, _options.axis[axis$$1.extend], true);
                }
            }

            function setVectorFontIcons() {
                var icon = _options.icon;
                if (!_.typeCheck(["string", "array"], icon.path)) return;

                var pathList = _.typeCheck("string", icon.path) ? [icon.path] : icon.path,
                    urlList = [];

                for (var i = 0; i < pathList.length; i++) {
                    var path = pathList[i],
                        url = "url(" + path + ") ";

                    if (path.indexOf(".eot") != -1) {
                        url += "format('embedded-opentype')";
                    } else if (path.indexOf(".woff") != -1) {
                        url += "format('woff')";
                    } else if (path.indexOf(".ttf") != -1) {
                        url += "format('truetype')";
                    } else if (path.indexOf(".svg") != -1) {
                        url += "format('svg')";
                    }

                    urlList.push(url);
                }

                var fontFace = "font-family: " + icon.type + "; font-weight: normal; font-style: normal; src: " + urlList.join(",");

                (function (rule) {
                    var sheet = function () {
                        var style = document.createElement("style");

                        style.appendChild(document.createTextNode(""));
                        document.head.appendChild(style);

                        return style.sheet;
                    }();

                    sheet.insertRule(rule, 0);
                })("@font-face {" + fontFace + "}");
            }

            function parseIconInText(self, text) {
                var regex = /{([^{}]+)}/g,
                    result = text.match(regex);

                if (result != null) {
                    for (var i = 0; i < result.length; i++) {
                        var key = result[i].substring(1, result[i].length - 1);
                        text = text.replace(result[i], self.icon(key));
                    }
                }

                return text;
            }

            function getCanvasRealSize(self) {
                var size = self.svg.size();

                return {
                    width: _.typeCheck("integer", _options.width) ? _options.width : size.width,
                    height: _.typeCheck("integer", _options.height) ? _options.height : size.height
                };
            }

            function initRootStyles(root) {
                root.style.position = "relative";
                root.style.userSelect = "none";
                root.style.webkitUserSelect = "none";
                root.style.MozUserSelect = "none";
                root.setAttribute("unselectable", "on");
            }

            function initCanvasElement(self) {
                var size = getCanvasRealSize(self);
                var ratio = HidpiUtil.pixelRatio;

                var _loop = function _loop(key) {
                    var elem = document.createElement("CANVAS");
                    elem.width = size.width * ratio;
                    elem.height = size.height * ratio;
                    elem.style.position = "absolute";
                    elem.style.left = "0px";
                    elem.style.top = "0px";
                    elem.style.width = size.width + "px";
                    elem.style.height = size.height + "px";

                    // Context 설정하기
                    if (elem.getContext) {
                        _canvas[key] = elem.getContext("2d");
                        HidpiUtil.apply(_canvas[key]);

                        if (key != "buffer") {
                            self.root.appendChild(elem);
                        }
                    }

                    // Widget 캔버스 이벤트 함수 정의
                    if (key == "sub") {
                        elem.on = function (type, handler) {
                            var callback = function callback(e) {
                                if (typeof handler == "function") {
                                    handler.call(this, e);
                                }
                            };

                            elem.addEventListener(type, callback, false);
                            return this;
                        };
                    }
                };

                for (var key in _canvas) {
                    _loop(key);
                }
            }

            function resetCanvasElement(self, type) {
                var ratio = HidpiUtil.pixelRatio,
                    size = getCanvasRealSize(self),
                    context = _canvas[type];

                context.restore();
                context.clearRect(0, 0, size.width * ratio, size.height * ratio);
                context.save();

                if (type == "main") {
                    context.translate(_area.x, _area.y);
                }
            }

            this.init = function () {
                // TODO: 차트 인덱스 설정
                _index = this.index = jui$1.size();

                // 기본 옵션 설정
                setDefaultOptions(this);

                // 차트 테마 설정 (+옵션 스타일)
                setThemeStyle(_options.theme);

                // 루트 엘리먼트 기본 스타일 설정
                initRootStyles(this.root);

                /** @property {chart.svg} svg Refers to an SVG utility object. */
                this.svg = new SVGUtil(this.root, {
                    width: _options.width,
                    height: _options.height,
                    "buffered-rendering": "dynamic"
                });

                // canvas 기본 객체 생성
                if (_options.canvas) {
                    initCanvasElement(this);
                    setCommonEvents(this, $.find(this.root, "CANVAS")[1]);
                } else {
                    setCommonEvents(this, this.svg.root);
                }

                // 아이콘 폰트 설정
                setVectorFontIcons();

                // 차트 기본 렌더링
                this.render();
            };

            /**
             * @method get
             *
             * Gets a named axis, brush, widget (type: axis, brush, widget, padding, area)
             *
             * @param {"axis"/"brush"/"widget"/"padding"/"area"} type
             * @param {String} key  Property name
             * @return {Mixed/Object}
             */
            this.get = function (type, key) {
                var obj = {
                    axis: _axis,
                    brush: _brush,
                    widget: _widget,
                    padding: _padding,
                    area: _area
                };

                if (obj[type][key]) {
                    return obj[type][key];
                }

                return obj[type] || obj;
            };

            /**
             * Gets the axis object of that index.
             *
             * @param {Number} key
             * @returns {Array/Object}
             */
            this.axis = function (key) {
                return arguments.length == 0 ? _axis : _axis[key];
            };

            /**
             * Gets a calculated value for a chart area (type: width, height, x, y, x2, y2)).
             *
             * @param {String} key
             * @return {Number/Object}
             */
            this.area = function (key) {
                return _.typeCheck("undefined", _area[key]) ? _area : _area[key];
            };

            /**
             * Gets the top, bottom, left and right margin values.
             *
             * @param {"top"/"left"/"bottom"/"right"} key
             * @return {Number/Object}
             */
            this.padding = function (key) {
                return _.typeCheck("undefined", _padding[key]) ? _padding : _padding[key];
            };

            /**
             * Gets a color defined in the theme or the color set.
             *
             * @param {Number/String} key
             * @param {Array} colors
             * @param {Array} target
             * @return {String} Selected color string
             */
            this.color = function (key, colors) {
                var color$$1 = null;

                // 직접 색상을 추가할 경우 (+그라데이션, +필터)
                if (arguments.length == 1) {
                    if (_.typeCheck("string", key)) {
                        color$$1 = key;
                    } else if (_.typeCheck("integer", key)) {
                        color$$1 = nextColor(key);
                    }
                } else {
                    // 테마 & 브러쉬 옵션 컬러 설정
                    if (_.typeCheck(["array", "object"], colors)) {
                        color$$1 = colors[key];

                        if (_.typeCheck("integer", color$$1)) {
                            color$$1 = nextColor(color$$1);
                        }
                    } else {
                        color$$1 = nextColor();
                    }
                }

                if (_hash[color$$1]) {
                    return "url(#" + _hash[color$$1] + ")";
                }

                function nextColor(newIndex) {
                    var c = _theme["colors"],
                        index = newIndex || key;

                    return index > c.length - 1 ? c[c.length - 1] : c[index];
                }

                return createColor(color$$1);
            };

            /**
             * Gets the unicode string of the icon.
             *
             * @param {String} key  icon's alias
             */
            this.icon = function (key) {
                return jui$1.include("chart.icon." + _options.icon.type)[key];
            };

            /**
             * Creates a text element to which a theme is applied.
             *
             * Also it support icon string
             *
             * @param {Object} attr
             * @param {String|Function} textOrCallback
             */
            this.text = function (attr, textOrCallback) {
                if (_.typeCheck("string", textOrCallback)) {
                    textOrCallback = parseIconInText(this, textOrCallback);
                } else if (_.typeCheck("undefined", textOrCallback)) {
                    textOrCallback = "";
                }

                return this.svg.text(attr, textOrCallback);
            };

            /**
             * Creates a text element to which a theme is applied.
             *
             * Also it support icon string
             *
             * @param {Object} attr
             * @param {Array} texts
             * @param {Number} lineBreakRate
             */
            this.texts = function (attr, texts, lineBreakRate) {
                var g = this.svg.group();

                for (var i = 0; i < texts.length; i++) {
                    if (_.typeCheck("string", texts[i])) {
                        var size = (attr["font-size"] || 10) * (lineBreakRate || 1);

                        g.append(this.svg.text(_.extend({ y: i * size }, attr, true), parseIconInText(this, texts[i])));
                    }
                }

                return g;
            };

            /**
             * @method theme
             *
             * Gets a value for the theme element applied to the current chart.
             *
             * ```
             *      // get all theme property
             *      var theme = chart.theme();
             *      // get a part of theme
             *      var fontColor = chart.theme("fontColor");
             *      // get selected value of theme
             *      chart.theme(isSelected, "selectedFontColor", "fontColor");  // if isSelected is true, return 'selectedFontColor' else return 'fontColor'
             * ```
             */
            this.theme = function (key, value, value2) {
                if (arguments.length == 0) {
                    return _theme;
                } else if (arguments.length == 1) {
                    if (key.indexOf("Color") > -1 && _theme[key] != null) {
                        return createColor(_theme[key]);
                    }

                    return _theme[key];
                } else if (arguments.length == 3) {
                    var val = key ? value : value2;

                    if (val.indexOf("Color") > -1 && _theme[val] != null) {
                        return createColor(_theme[val]);
                    }

                    return _theme[val];
                }
            };

            /**
             * Returns a value from the format callback function of a defined option.
             *
             * @param {Function} format
             * @return {Mixed}
             */
            this.format = function () {
                if (arguments.length == 0) return;
                var callback = _options.format;

                if (_.typeCheck("function", callback)) {
                    return callback.apply(this, arguments);
                }

                return arguments[0];
            };

            /**
             * @method on
             *
             * A callback function defined as an on method is run when an emit method is called.
             *
             * @param {String} type Event's name
             * @param {Function} callback
             * @param {"render"/"renderAll"/undefined} resetType
             */
            this.on = function (type, callback, resetType) {
                if (!_.typeCheck("string", type) || !_.typeCheck("function", callback)) return;

                this.event.push({ type: type.toLowerCase(), callback: callback });

                // 브러쉬나 위젯에서 설정한 이벤트 핸들러만 추가
                if (resetType == "render" || resetType == "renderAll") {
                    _handler[resetType].push(callback);
                }
            };

            /**
             * @method render
             *
             * Renders all draw objects.
             *
             * @param {Boolean} isAll
             */
            this.render = function (isAll) {
                // SVG 메인 리셋
                this.svg.reset(isAll);

                // chart 이벤트 초기화 (삭제 대상)
                resetCustomEvent(this, isAll);

                // chart 영역 계산
                calculate(this);

                // Canvas 초기 설정
                if (this.options.canvas) {
                    resetCanvasElement(this, "main");
                    resetCanvasElement(this, "buffer");

                    if (isAll) {
                        resetCanvasElement(this, "sub");
                    }
                }

                // chart 관련된 요소 draw
                drawBefore(this);
                drawAxis(this);
                drawBrush(this);
                drawWidget(this, isAll);

                // Canvas 더블버퍼링 렌더링
                if (this.options.canvas) {
                    _canvas.main.drawImage(_canvas.buffer.canvas, 0, 0);
                }

                // SVG 기본 테마 설정
                this.svg.root.css({
                    "font-family": this.theme("fontFamily") + "," + _options.icon.type,
                    background: this.theme("backgroundColor")
                });

                // SVG 메인/서브 렌더링
                this.svg.render(isAll);

                // 커스텀 이벤트 발생
                this.emit("render", [_initialize]);

                // 초기화 및 렌더링 체크 설정
                _initialize = true;
            };

            /**
             * @method appendDefs
             *
             * Add the child element in defs tag.
             *
             * @param {chart.svg.element} elem
             */
            this.appendDefs = function (elem) {
                _defs.append(elem);
            };

            /**
             * @method addBrush
             *
             * Adds a brush and performs rendering again.
             *
             * @param {Object} brush
             */
            this.addBrush = function (brush) {
                _options.brush.push(brush);
                if (this.isRender()) this.render();
            };

            /**
             * @method removeBrush
             *
             * Deletes the brush of a specified index and performs rendering again.
             * @param {Number} index
             */
            this.removeBrush = function (index) {
                _options.brush.splice(index, 1);
                if (this.isRender()) this.render();
            };

            /**
             * @method updateBrush
             * Updates the brush of a specified index and performs rendering again.
             * @param {Number} index
             * @param {Object} brush
             * @param {Boolean} isReset
             */
            this.updateBrush = function (index, brush, isReset) {
                if (isReset === true) {
                    _options.brush[index] = brush;
                } else {
                    _.extend(_options.brush[index], brush);
                }

                if (this.isRender()) this.render();
            };

            /**
             * @method addWidget
             * Adds a widget and performs rendering again.
             *
             * @param {Object} widget
             */
            this.addWidget = function (widget) {
                _options.widget.push(widget);
                if (this.isRender()) this.render();
            };

            /**
             * @method removeWidget
             * Deletes the widget of a specified index and performs rendering again.
             * @param {Number} index
             */
            this.removeWidget = function (index) {
                _options.widget.splice(index, 1);
                if (this.isRender()) this.render();
            };

            /**
             * @method updateWidget
             * Updates the widget of a specified index and performs rendering again
             * @param {Number} index
             * @param {Object} widget
             * @param {Boolean} isReset
             */
            this.updateWidget = function (index, widget, isReset) {
                if (isReset === true) {
                    _options.widget[index] = widget;
                } else {
                    _.extend(_options.widget[index], widget);
                }

                if (this.isRender()) this.render();
            };

            /**
             * Changes a chart to a specified theme and renders the chart again.
             *
             * @param {String/Object} theme
             */
            this.setTheme = function (theme) {
                setThemeStyle(theme);
                if (this.isRender()) this.render(true);
            };

            /**
             * Changes the size of a chart to the specified area and height then performs rendering.
             *
             * @param {Number} width
             * @param {Number} height
             */
            this.setSize = function (width, height) {
                if (arguments.length == 2) {
                    _options.width = width;
                    _options.height = height;
                }

                // Resize svg
                this.svg.size(_options.width, _options.height);

                // Resize canvas
                if (_options.canvas) {
                    var ratio = HidpiUtil.pixelRatio,
                        list = $.find(this.root, "CANVAS"),
                        size = getCanvasRealSize(this);

                    for (var i = 0; i < list.length; i++) {
                        list[i].width = size.width * ratio;
                        list[i].height = size.height * ratio;
                        list[i].style.width = size.width + "px";
                        list[i].style.height = size.height + "px";
                    }
                }

                if (this.isRender()) this.render(true);
            };

            /**
             * Returns true if the horizontal or vertical size of the chart is 100%.
             *
             * @return {Boolean}
             */
            this.isFullSize = function () {
                if (_options.width == "100%" || _options.height == "100%") return true;

                return true;
            };

            /**
             * Resize the chart to fit the screen width.
             *
             */
            this.resize = function () {
                if (this.isFullSize()) {
                    this.setSize();
                }

                if (!this.isRender()) {
                    this.render(true);
                }
            };

            /**
             * Returns the values of rendering options and, if the rendering option is false, does not render the chart again when a method is called.
             *
             * @return {Boolean}
             */
            this.isRender = function () {
                return !_initialize ? true : _options.render;
            };

            this.setCache = function (key, value) {
                _cache[key] = value;
            };

            this.getCache = function (key, defValue) {
                if (_cache[key] === undefined) return defValue;
                return _cache[key];
            };
        };

        UI.setup = function () {
            return {
                /** @cfg  {String/Number} [width="100%"] chart width */
                width: "100%",
                /** @cfg  {String/Number} [height="100%"] chart height */
                height: "100%",
                /**
                 * @cfg  {Object} padding chart padding
                 * @cfg  {Number} [padding.top=50] chart padding
                 * @cfg  {Number} [padding.bottom=50] chart padding
                 * @cfg  {Number} [padding.left=50] chart padding
                 * @cfg  {Number} [padding.right=50] chart padding
                 */
                padding: {
                    top: 50,
                    bottom: 50,
                    left: 50,
                    right: 50
                },

                /** @cfg  {String} [theme=classic] chart theme  */
                theme: "classic",
                /** @cfg  {Object} style chart custom theme  */
                style: {},
                /** @cfg {Array} brush Determines a brush to be added to a chart. */
                brush: [],
                /** @cfg {Array} widget Determines a widget to be added to a chart. */
                widget: [],
                /** @cfg {Array} [axis=[]] Determines a axis to be added to a chart. */
                axis: [],

                /** @cfg {Object} [bind=null] Sets a component objects to be bind.*/
                bind: null,
                /** @cfg {Function} [format=null] Sets a format callback function to be used in a grid/brush/widget. */
                format: null,
                /** @cfg {Boolean} [render=true] Does not render a chart when a rendering-related method is called with false (although the render method is not included). */
                render: true,

                /**
                 * @cfg {Object} icon Icon-related settings available in the chart.
                 * @cfg {String} [icon.type="classic"]
                 * @cfg {String} [icon.path=null]
                 */
                icon: {
                    type: "classic",
                    path: null
                },

                /** @cfg {Boolean} [canvas=false] */
                canvas: false
            };
        };

        /**
         * @event chart_click
         * Event that occurs when clicking on the chart area. (real name ``` chart.click ```)
         * @param {jQueryEvent} e The event object.
         */
        /**
         * @event chart_dblclick
         * Event that occurs when double clicking on the chart area. (real name ``` chart.dblclick ```)
         * @param {jQueryEvent} e The event object.
         */
        /**
         * @event chart_rclick
         * Event that occurs when right clicking on the chart area. (real name ``` chart.rclick ```)
         * @param {jQueryEvent} e The event object.
         */
        /**
         * @event chart_mouseover
         * Event that occurs when placing the mouse over the chart area. (real name ``` chart.mouseover ```)
         * @param {jQueryEvent} e The event object.
         */
        /**
         * @event chart_mouseout
         * Event that occurs when moving the mouse out of the chart area. (real name ``` chart.mouseout ```)
         * @param {jQueryEvent} e The event object.
         */
        /**
         * @event chart_mousemove
         * Event that occurs when moving the mouse over the chart area. (real name ``` chart.mousemove ```)
         * @param {jQueryEvent} e The event object.
         */
        /**
         * @event chart_mousedown
         * Event that occurs when left clicking on the chart area. (real name ``` chart.mousedown ```)
         * @param {jQueryEvent} e The event object.
         */
        /**
         * @event chart_mouseup
         * Event that occurs after left clicking on the chart area. (real name ``` chart.mouseup ```)
         * @param {jQueryEvent} e The event object.
         */

        /**
         * @event bg_click
         * Event that occurs when clicking on the chart margin. (real name ``` bg.click ```)
         * @param {jQueryEvent} e The event object.
         */
        /**
         * @event bg_dblclick
         * Event that occurs when double clicking on the chart margin. (real name ``` bg.dblclick ```)
         * @param {jQueryEvent} e The event object.
         */
        /**
         * @event bg_rclick
         * Event that occurs when right clicking on the chart margin. (real name ``` bg.rclick ```)
         * @param {jQueryEvent} e The event object.
         */
        /**
         * @event bg_mouseover
         * Event that occurs when placing the mouse over the chart margin. (real name ``` bg.mouseover ```)
         * @param {jQueryEvent} e The event object.
         */
        /**
         * @event bg_mouseout
         * Event that occurs when moving the mouse out of the chart margin. (real name ``` bg.mouseout ```)
         * @param {jQueryEvent} e The event object.
         */
        /**
         * @event bg_mousemove
         * Event that occurs when moving the mouse over the chart margin. (real name ``` bg.mousemove ```)
         * @param {jQueryEvent} e The event object.
         */
        /**
         * @event bg_mousedown
         * Event that occurs when left clicking on the chart margin. (real name ``` bg.mousedown ```)
         * @param {jQueryEvent} e The event object.
         */
        /**
         * @event bg_mouseup
         * Event that occurs after left clicking on the chart margin. (real name ``` bg.mouseup ```)
         * @param {jQueryEvent} e The event object.
         */

        return UI;
    }
};

var Plane = {
    name: "chart.plane",
    extend: "core",
    component: function component() {
        var _ = jui$1.include("util.base");
        var builder = jui$1.include("chart.builder");

        var UI = function UI() {
            var chart = null,
                axis = [],
                brush = [],
                widget = [];

            var axisIndex = 0,
                baseAxis = {},
                etcAxis = {};

            this.init = function () {
                var opts = this.options,
                    defAxis = {
                    type: "range",
                    step: opts.step,
                    line: opts.line
                };

                baseAxis.x = _.extend({ domain: opts.x }, defAxis);
                baseAxis.y = _.extend({ domain: opts.y }, defAxis);
                baseAxis.x.orient = "bottom";
                baseAxis.y.orient = "left";
                baseAxis.z = _.extend({ domain: opts.z }, defAxis);
                baseAxis.depth = opts.depth - opts.padding * 2;
                baseAxis.degree = { x: opts.dx, y: opts.dy, z: opts.dz };
                baseAxis.perspective = opts.perspective;

                etcAxis.extend = 0;
                etcAxis.x = { hide: true };
                etcAxis.y = { hide: true };
                etcAxis.z = { hide: true };

                if (opts.dimension == "2d") {
                    baseAxis.perspective = 1;
                    baseAxis.degree.x = 0;
                    baseAxis.degree.y = 0;
                    baseAxis.degree.z = 0;
                    baseAxis.z.hideText = true;
                }
            };

            this.push = function (data) {
                if (!_.typeCheck("array", data)) return;

                if (!axis[axisIndex]) {
                    axis.push(_.extend({}, axisIndex == 0 ? baseAxis : etcAxis));
                }

                if (!axis[axisIndex].data) {
                    axis[axisIndex].data = [];
                }

                axis[axisIndex].data.push(data);
            };

            this.commit = function (symbol, r) {
                var opts = this.options;

                brush.push({
                    type: "canvas.dot3d",
                    color: axisIndex,
                    axis: axisIndex,
                    symbol: symbol || opts.symbol,
                    size: (r || opts.r) * 2
                });

                axisIndex++;
            };

            this.append = function (datas, symbol, r) {
                var opts = this.options;

                axis.push(_.extend({}, axisIndex == 0 ? baseAxis : etcAxis));
                axis[axisIndex].data = datas;

                brush.push({
                    type: "canvas.dot3d",
                    color: axisIndex,
                    axis: axisIndex,
                    symbol: symbol || opts.symbol,
                    size: (r || opts.r) * 2
                });

                axisIndex++;
            };

            this.render = function () {
                var opts = this.options;

                if (opts.dimension == "3d") {
                    widget.push({
                        type: "polygon.rotate3d"
                    });
                }

                if (chart != null) {
                    chart.root.innerHTML = "";
                    chart = null;
                }

                if (axis.length == 0) {
                    axis.push(baseAxis);
                }

                chart = builder(this.root, {
                    padding: opts.padding,
                    width: opts.width,
                    height: opts.height,
                    axis: axis,
                    brush: brush,
                    widget: widget,
                    canvas: true,
                    render: false,
                    style: {
                        gridFaceBackgroundOpacity: 0.1
                    }
                });

                if (_.typeCheck("array", opts.colors)) {
                    var colors = [];

                    for (var i = 0; i < opts.colors.length; i++) {
                        colors.push(chart.color(opts.colors[i]));
                    }

                    chart.setTheme({ colors: colors });
                }

                axis = [];
                brush = [];
                widget = [];
                axisIndex = 0;

                chart.render();
            };
        };

        UI.setup = function () {
            return {
                dimension: "2d",
                width: 500,
                height: 500,
                depth: 500,
                padding: 50,
                x: [-100, 100],
                y: [-100, 100],
                z: [-100, 100],
                step: 4,
                line: true,
                symbol: "dot",
                r: 2,
                perspective: 0.9,
                dx: 10,
                dy: 5,
                dz: 0,
                colors: null
            };
        };

        return UI;
    }
};

var Animation = {
    name: "chart.animation",
    extend: "core",
    component: function component() {
        var _ = jui$1.include("util.base");
        var builder = jui$1.include("chart.builder");

        var UI = function UI() {
            var interval = void 0,
                animateSeq = -1,
                prevTime = 0,
                startTime = 0;

            this.init = function () {
                var opts = this.options;

                // 차트 빌더는 interval 옵션을 사용하지 않기 때문에 삭제함
                interval = opts.interval;
                delete opts.interval;

                if (opts.axis.length && opts.axis.length > 1) throw new Error("JUI_CRITICAL_ERR: the real-time module allows only a single axes");

                this.builder = builder(this.selector, opts);
            };

            this.run = function (callback) {
                var self = this;
                var currentTime = Date.now();

                if (startTime == 0) {
                    startTime = currentTime;
                }

                if (currentTime - prevTime > interval || interval == 0) {
                    var tpf = (currentTime - prevTime) / 1000;
                    if (tpf > 1) tpf = 1;

                    this.builder.setCache("tpf", tpf);
                    this.builder.setCache("fps", 1.0 / tpf);

                    if (typeof callback == "function") {
                        callback.call(this, currentTime - startTime);
                    }

                    this.render();
                    prevTime = currentTime;
                }

                animateSeq = requestAnimationFrame(function () {
                    self.run(callback);
                });
            };

            this.stop = function () {
                if (animateSeq != -1) {
                    cancelAnimationFrame(animateSeq);
                    animateSeq = -1;
                }
            };

            this.set = function (type, value, isReset) {
                this.builder.axis(0).set(type, value, isReset);
            };

            this.update = function (data) {
                this.builder.axis(0).update(data);
            };

            this.render = function (isAll) {
                this.builder.render(isAll);
            };
        };

        UI.setup = function () {
            return _.extend({
                render: false,
                canvas: true,
                interval: 0
            }, JUIBuilder.component().setup(), true);
        };

        return UI;
    }
};

jui$1.use([vector, transform, math]);

var core = {
    name: "chart.polygon.core",
    extend: null,
    component: function component() {
        var _ = jui$1.include("util.base");
        var Vector = jui$1.include("chart.vector");
        var Transform = jui$1.include("util.transform");
        var math$$1 = jui$1.include("util.math");

        var PolygonCore = function PolygonCore() {
            this.perspective = 0.9;

            this.rotate = function (depth, degree, cx, cy, cz) {
                var p = this.perspective,
                    t = new Transform(this.vertices),
                    m = t.matrix("move3d", cx, cy, cz);

                // 폴리곤 이동 및 각도 변경
                m = math$$1.matrix3d(m, t.matrix("rotate3dx", degree.x));
                m = math$$1.matrix3d(m, t.matrix("rotate3dy", degree.y));
                m = math$$1.matrix3d(m, t.matrix("rotate3dz", degree.z));
                m = math$$1.matrix3d(m, t.matrix("move3d", -cx, -cy, -cz));
                this.vertices = t.custom(m);

                for (var i = 0, count = this.vertices.length; i < count; i++) {
                    var far = Math.abs(this.vertices[i][2] - depth),
                        s = math$$1.scaleValue(far, 0, depth, p, 1),
                        t2 = new Transform(),
                        m2 = t2.matrix("move3d", cx, cy, depth / 2);

                    // 폴리곤 스케일 변경
                    m2 = math$$1.matrix3d(m2, t2.matrix("scale3d", s, s, s));
                    m2 = math$$1.matrix3d(m2, t2.matrix("move3d", -cx, -cy, -depth / 2));
                    this.vertices[i] = math$$1.matrix3d(m2, this.vertices[i]);

                    // 벡터 객체 생성 및 갱신
                    if (_.typeCheck("array", this.vectors)) {
                        if (this.vectors[i] == null) {
                            this.vectors[i] = new Vector(this.vertices[i][0], this.vertices[i][1], this.vertices[i][2]);
                        } else {
                            this.vectors[i].x = this.vertices[i][0];
                            this.vectors[i].y = this.vertices[i][1];
                            this.vectors[i].z = this.vertices[i][2];
                        }
                    }
                }
            };

            this.min = function () {
                var obj = {
                    x: this.vertices[0][0],
                    y: this.vertices[0][1],
                    z: this.vertices[0][2]
                };

                for (var i = 1, len = this.vertices.length; i < len; i++) {
                    obj.x = Math.min(obj.x, this.vertices[i][0]);
                    obj.y = Math.min(obj.y, this.vertices[i][1]);
                    obj.z = Math.min(obj.z, this.vertices[i][2]);
                }

                return obj;
            };

            this.max = function () {
                var obj = {
                    x: this.vertices[0][0],
                    y: this.vertices[0][1],
                    z: this.vertices[0][2]
                };

                for (var i = 1, len = this.vertices.length; i < len; i++) {
                    obj.x = Math.max(obj.x, this.vertices[i][0]);
                    obj.y = Math.max(obj.y, this.vertices[i][1]);
                    obj.z = Math.max(obj.z, this.vertices[i][2]);
                }

                return obj;
            };
        };

        return PolygonCore;
    }
};

jui$1.use(core);

var grid$1 = {
    name: "chart.polygon.grid",
    extend: "chart.polygon.core",
    component: function component() {
        var GridPolygon = function GridPolygon(type, width, height, depth, x, y) {
            x = x || 0;
            y = y || 0;
            width = x + width;
            height = y + height;

            var matrix = {
                center: [new Float32Array([x, y, depth, 1]), new Float32Array([width, y, depth, 1]), new Float32Array([width, height, depth, 1]), new Float32Array([x, height, depth, 1])],
                horizontal: [new Float32Array([x, height, 0, 1]), new Float32Array([width, height, 0, 1]), new Float32Array([width, height, depth, 1]), new Float32Array([x, height, depth, 1])],
                vertical: [new Float32Array([width, y, 0, 1]), new Float32Array([width, height, 0, 1]), new Float32Array([width, height, depth, 1]), new Float32Array([width, y, depth, 1])]
            };

            this.vertices = matrix[type];

            this.vectors = [];
        };

        return GridPolygon;
    }
};

jui$1.use(core);

var line = {
    name: "chart.polygon.line",
    extend: "chart.polygon.core",
    component: function component() {
        var LinePolygon = function LinePolygon(x1, y1, d1, x2, y2, d2) {
            this.vertices = [new Float32Array([x1, y1, d1, 1]), new Float32Array([x2, y2, d2, 1])];

            this.vectors = [];
        };

        return LinePolygon;
    }
};

jui$1.use(core);

var point = {
    name: "chart.polygon.point",
    extend: "chart.polygon.core",
    component: function component() {
        var PointPolygon = function PointPolygon(x, y, d) {
            this.vertices = [new Float32Array([x, y, d, 1])];

            this.vectors = [];
        };

        return PointPolygon;
    }
};

jui$1.use(core);

var CubePolygon = {
    name: "chart.polygon.cube",
    extend: "chart.polygon.core",
    component: function component() {
        var CubePolygon = function CubePolygon(x, y, z, w, h, d) {
            this.vertices = [new Float32Array([x, y, z, 1]), new Float32Array([x + w, y, z, 1]), new Float32Array([x + w, y, z + d, 1]), new Float32Array([x, y, z + d, 1]), new Float32Array([x, y + h, z, 1]), new Float32Array([x + w, y + h, z, 1]), new Float32Array([x + w, y + h, z + d, 1]), new Float32Array([x, y + h, z + d, 1])];

            this.faces = [[0, 1, 2, 3], [3, 2, 6, 7], [0, 3, 7, 4], [1, 2, 6, 5], [0, 1, 5, 4], [4, 5, 6, 7]];

            this.vectors = [];
        };

        return CubePolygon;
    }
};

jui$1.use(draw);

var draw2d = {
    name: "chart.grid.draw2d",
    extend: "chart.draw",
    component: function component() {
        var _ = jui$1.include("util.base");

        var Draw2DGrid = function Draw2DGrid() {

            this.createGridX = function (position, index, x, isActive, isLast) {
                var line = this.getLineOption(),
                    axis = this.chart.svg.group().translate(x, 0),
                    size = this.chart.theme("gridTickBorderSize");

                axis.append(this.line({
                    y2: position == "bottom" ? size : -size,
                    stroke: this.color(isActive, "gridActiveBorderColor", "gridXAxisBorderColor"),
                    "stroke-width": this.chart.theme("gridTickBorderWidth")
                }));

                if (line) {
                    this.drawValueLine(position, axis, isActive, line, index, isLast);
                }

                return axis;
            };

            this.createGridY = function (position, index, y, isActive, isLast) {
                var line = this.getLineOption(),
                    axis = this.chart.svg.group().translate(0, y),
                    size = this.chart.theme("gridTickBorderSize");

                axis.append(this.line({
                    x2: position == "left" ? -size : size,
                    stroke: this.color(isActive, "gridActiveBorderColor", "gridYAxisBorderColor"),
                    "stroke-width": this.chart.theme("gridTickBorderWidth")
                }));

                if (line) {
                    this.drawValueLine(position, axis, isActive, line, index, isLast);
                }

                return axis;
            };

            this.fillRectObject = function (g, line, position, x, y, width, height) {
                if (line.type.indexOf("gradient") > -1) {
                    g.append(this.chart.svg.rect({
                        x: x,
                        y: y,
                        height: height,
                        width: width,
                        fill: this.chart.color(line.fill ? line.fill : "linear(" + position + ") " + this.chart.theme("gridPatternColor") + ",0.5 " + this.chart.theme("backgroundColor")),
                        "fill-opacity": this.chart.theme("gridPatternOpacity")
                    }));
                } else if (line.type.indexOf("rect") > -1) {
                    g.append(this.chart.svg.rect({
                        x: x,
                        y: y,
                        height: height,
                        width: width,
                        fill: this.chart.color(line.fill ? line.fill : this.chart.theme("gridPatternColor")),
                        "fill-opacity": this.chart.theme("gridPatternOpacity")
                    }));
                }
            };

            /**
             * @method drawAxisLine
             * theme 이 적용된  axis line 리턴
             * @param {ChartBuilder} chart
             * @param {Object} attr
             */
            this.drawAxisLine = function (position, g, attr) {
                var isTopOrBottom = position == "top" || position == "bottom";

                g.append(this.chart.svg.line(_.extend({
                    x1: 0,
                    y1: 0,
                    x2: 0,
                    y2: 0,
                    stroke: this.color(isTopOrBottom ? "gridXAxisBorderColor" : "gridYAxisBorderColor"),
                    "stroke-width": this.chart.theme(isTopOrBottom ? "gridXAxisBorderWidth" : "gridYAxisBorderWidth"),
                    "stroke-opacity": 1
                }, attr)));
            };

            this.drawPattern = function (position, ticks, values, isMove) {
                if (this.grid.hide) return;
                if (!position) return;
                if (!ticks) return;
                if (!values) return;

                var line = this.getLineOption(),
                    isY = position == "left" || position == "right",
                    g = this.chart.svg.group();

                g.translate(this.axis.area("x") + this.chart.area("x"), this.axis.area("y") + this.chart.area("y"));

                if (line && (line.type.indexOf("gradient") > -1 || line.type.indexOf("rect") > -1)) {
                    for (var i = 0; i < values.length - 1; i += 2) {
                        var dist = Math.abs(values[i + 1] - values[i]),
                            pos = values[i] - (isMove ? dist / 2 : 0),
                            x = isY ? 0 : pos,
                            y = isY ? pos : 0,
                            width = isY ? this.axis.area("width") : dist,
                            height = isY ? dist : this.axis.area("height");

                        this.fillRectObject(g, line, position, x, y, width, height);
                    }
                }
            };

            this.drawBaseLine = function (position, g) {
                var obj = this.getGridSize(),
                    pos = {};

                if (position == "bottom" || position == "top") {
                    pos = { x1: obj.start, x2: obj.end };
                } else if (position == "left" || position == "right") {
                    pos = { y1: obj.start, y2: obj.end };
                }

                this.drawAxisLine(position, g, pos);
            };

            this.drawValueLine = function (position, axis, isActive, line, index, isLast) {
                var area = {},
                    isDrawLine = false;

                if (position == "top") {
                    isDrawLine = this.checkDrawLineY(index, isLast);
                    area = { x1: 0, x2: 0, y1: 0, y2: this.axis.area("height") };
                } else if (position == "bottom") {
                    isDrawLine = this.checkDrawLineY(index, isLast);
                    area = { x1: 0, x2: 0, y1: 0, y2: -this.axis.area("height") };
                } else if (position == "left") {
                    isDrawLine = this.checkDrawLineX(index, isLast);
                    area = { x1: 0, x2: this.axis.area("width"), y1: 0, y2: 0 };
                } else if (position == "right") {
                    isDrawLine = this.checkDrawLineX(index, isLast);
                    area = { x1: 0, x2: -this.axis.area("width"), y1: 0, y2: 0 };
                }

                if (isDrawLine) {
                    var lineObject = this.line(_.extend({
                        stroke: this.chart.theme(isActive, "gridActiveBorderColor", "gridBorderColor"),
                        "stroke-width": this.chart.theme(isActive, "gridActiveBorderWidth", "gridBorderWidth")
                    }, area));

                    if (line.type.indexOf("dashed") > -1) {
                        var dash = this.chart.theme("gridBorderDashArray");

                        lineObject.attr({
                            "stroke-dasharray": dash == "none" || !dash ? "3,3" : dash
                        });
                    }

                    axis.append(lineObject);
                }
            };

            this.drawValueText = function (position, axis, index, xy, domain, move, isActive) {
                if (this.grid.hideText) return;

                if (position == "top") {
                    axis.append(this.getTextRotate(this.chart.text({
                        x: move,
                        y: -(this.chart.theme("gridTickBorderSize") + this.chart.theme("gridTickPadding") * 2),
                        dy: this.chart.theme("gridXFontSize") / 3,
                        fill: this.chart.theme(isActive, "gridActiveFontColor", "gridXFontColor"),
                        "text-anchor": "middle",
                        "font-size": this.chart.theme("gridXFontSize"),
                        "font-weight": this.chart.theme("gridXFontWeight")
                    }, domain)));
                } else if (position == "bottom") {
                    axis.append(this.getTextRotate(this.chart.text({
                        x: move,
                        y: this.chart.theme("gridTickBorderSize") + this.chart.theme("gridTickPadding") * 2,
                        dy: this.chart.theme("gridXFontSize") / 3,
                        fill: this.chart.theme(isActive, "gridActiveFontColor", "gridXFontColor"),
                        "text-anchor": "middle",
                        "font-size": this.chart.theme("gridXFontSize"),
                        "font-weight": this.chart.theme("gridXFontWeight")
                    }, domain)));
                } else if (position == "left") {
                    axis.append(this.getTextRotate(this.chart.text({
                        x: -this.chart.theme("gridTickBorderSize") - this.chart.theme("gridTickPadding"),
                        y: move,
                        dy: this.chart.theme("gridYFontSize") / 3,
                        fill: this.chart.theme(isActive, "gridActiveFontColor", "gridYFontColor"),
                        "text-anchor": "end",
                        "font-size": this.chart.theme("gridYFontSize"),
                        "font-weight": this.chart.theme("gridYFontWeight")
                    }, domain)));
                } else if (position == "right") {
                    axis.append(this.getTextRotate(this.chart.text({
                        x: this.chart.theme("gridTickBorderSize") + this.chart.theme("gridTickPadding"),
                        y: move,
                        dy: this.chart.theme("gridYFontSize") / 3,
                        fill: this.chart.theme(isActive, "gridActiveFontColor", "gridYFontColor"),
                        "text-anchor": "start",
                        "font-size": this.chart.theme("gridYFontSize"),
                        "font-weight": this.chart.theme("gridYFontWeight")
                    }, domain)));
                }
            };

            this.drawImage = function (orient, g, tick, index, x, y) {
                if (!_.typeCheck("function", this.grid.image)) return;

                var opts = this.grid.image.apply(this.chart, [tick, index]);

                if (_.typeCheck("object", opts)) {
                    var image = this.chart.svg.image({
                        "xlink:href": opts.uri,
                        width: opts.width,
                        height: opts.height
                    });

                    if (orient == "top" || orient == "bottom") {
                        image.attr({
                            x: this.grid.type == "block" ? this.scale.rangeBand() / 2 - opts.width / 2 : -(opts.width / 2)
                        });
                    } else if (orient == "left" || orient == "right") {
                        image.attr({
                            y: this.grid.type == "block" ? this.scale.rangeBand() / 2 - opts.height / 2 : -(opts.height / 2)
                        });
                    }

                    if (orient == "bottom") {
                        image.attr({ y: opts.dist });
                    } else if (orient == "top") {
                        image.attr({ y: -(opts.dist + opts.height) });
                    } else if (orient == "left") {
                        image.attr({ x: -(opts.dist + opts.width) });
                    } else if (orient == "right") {
                        image.attr({ x: opts.dist });
                    }

                    image.translate(x, y);
                    g.append(image);
                }
            };
        };

        return Draw2DGrid;
    }
};

jui$1.use(draw, grid$1, line, point);

var draw3d = {
    name: "chart.grid.draw3d",
    extend: "chart.draw",
    component: function component() {
        var _ = jui$1.include("util.base");
        var GridPolygon = jui$1.include("chart.polygon.grid");
        var LinePolygon = jui$1.include("chart.polygon.line");
        var PointPolygon = jui$1.include("chart.polygon.point");

        var Draw3DGrid = function Draw3DGrid() {

            this.createGridX = function (position, index, x, isActive, isLast) {
                var line$$1 = this.getLineOption(),
                    axis = this.svg.group();

                if (line$$1) {
                    this.drawValueLine(position, axis, isActive, line$$1, index, x, isLast);
                }

                return axis;
            };

            this.createGridY = function (position, index, y, isActive, isLast) {
                var line$$1 = this.getLineOption(),
                    axis = this.svg.group();

                if (line$$1) {
                    this.drawValueLine(position, axis, isActive, line$$1, index, y, isLast);
                }

                return axis;
            };

            /**
             * @method center
             *
             * draw center
             *
             * @param {chart.util.svg} g
             * @param {Array} ticks
             * @param {Array} values
             * @param {Number} min
             * @param {Function} checkActive
             */
            this.drawCenter = function (g, ticks, values, checkActive, moveZ) {
                var axis = this.svg.group(),
                    line$$1 = this.getLineOption();

                if (line$$1) {
                    this.drawValueLineCenter(axis, ticks, line$$1);
                }

                this.drawValueTextCenter(axis, ticks, values, checkActive, moveZ);

                g.append(axis);
            };

            this.drawBaseLine = function (position, g) {
                var axis = this.svg.group();
                this.drawAxisLine(position, axis);

                g.append(axis);
            };

            /**
             * @method axisLine
             * theme 이 적용된  axis line 리턴
             * @param {ChartBuilder} chart
             * @param {Object} attr
             */
            this.drawAxisLine = function (position, axis) {
                var isTopOrBottom = position == "top" || position == "bottom",
                    borderColor = isTopOrBottom ? "gridXAxisBorderColor" : "gridYAxisBorderColor",
                    borderWidth = isTopOrBottom ? "gridXAxisBorderWidth" : "gridYAxisBorderWidth";

                if (position == "center") {
                    borderColor = "gridZAxisBorderColor";
                    borderWidth = "gridZAxisBorderWidth";
                }

                var face = this.svg.polygon({
                    stroke: this.chart.theme(borderColor),
                    "stroke-width": this.chart.theme(borderWidth),
                    "stroke-opacity": 1,
                    fill: this.chart.theme("gridFaceBackgroundColor"),
                    "fill-opacity": this.chart.theme("gridFaceBackgroundOpacity")
                });

                var p = null,
                    w = this.axis.area("width"),
                    h = this.axis.area("height"),
                    x = this.axis.area("x"),
                    y = this.axis.area("y"),
                    d = this.axis.depth;

                if (position == "center") {
                    p = new GridPolygon("center", w, h, d, x, y);
                } else {
                    if (isTopOrBottom) {
                        h = position == "bottom" ? h : 0;
                        p = new GridPolygon("horizontal", w, h, d, x, y);
                    } else {
                        w = position == "right" ? w : 0;
                        p = new GridPolygon("vertical", w, h, d, x, y);
                    }
                }

                // 사각면 위치 계산 및 추가
                this.calculate3d(p);
                for (var i = 0; i < p.vectors.length; i++) {
                    face.point(p.vectors[i].x, p.vectors[i].y);
                }

                // Y축이 숨김 상태일 때
                if (position == "center") {
                    if (this.axis.get("y").hide !== true) {
                        axis.append(face);
                    }
                } else {
                    axis.append(face);
                }
            };

            this.drawValueLine = function (position, axis, isActive, line$$1, index, xy, isLast) {
                var isDrawLine = false,
                    w = this.axis.area("width"),
                    h = this.axis.area("height"),
                    x = this.axis.area("x"),
                    y = this.axis.area("y"),
                    d = this.axis.depth,
                    l1 = null,
                    l2 = null;

                if (position == "top") {
                    isDrawLine = this.checkDrawLineY(index, isLast);
                    l1 = new LinePolygon(xy, y, 0, xy, y, d);
                    l2 = new LinePolygon(xy, y, d, xy, y + h, d);
                } else if (position == "bottom") {
                    isDrawLine = this.checkDrawLineY(index, isLast);
                    l1 = new LinePolygon(xy, y + h, 0, xy, y + h, d);
                    l2 = new LinePolygon(xy, y + h, d, xy, y, d);
                } else if (position == "left") {
                    isDrawLine = this.checkDrawLineX(index, isLast);
                    l1 = new LinePolygon(x, xy, 0, x, xy, d);
                    l2 = new LinePolygon(x, xy, d, x + w, xy, d);
                } else if (position == "right") {
                    isDrawLine = this.checkDrawLineX(index, isLast);
                    l1 = new LinePolygon(x + w, xy, 0, x + w, xy, d);
                    l2 = new LinePolygon(x + w, xy, d, x, xy, d);
                }

                if (isDrawLine) {
                    // 폴리곤 계산
                    this.calculate3d(l1, l2);

                    var lo1 = this.line({
                        stroke: this.chart.theme("gridBorderColor"),
                        "stroke-width": this.chart.theme("gridBorderWidth"),
                        x1: l1.vectors[0].x,
                        y1: l1.vectors[0].y,
                        x2: l1.vectors[1].x,
                        y2: l1.vectors[1].y
                    });

                    var lo2 = this.line({
                        stroke: this.chart.theme("gridBorderColor"),
                        "stroke-width": this.chart.theme("gridBorderWidth"),
                        x1: l2.vectors[0].x,
                        y1: l2.vectors[0].y,
                        x2: l2.vectors[1].x,
                        y2: l2.vectors[1].y
                    });

                    if (line$$1.type.indexOf("dashed") > -1) {
                        var dash = this.chart.theme("gridBorderDashArray"),
                            style = dash == "none" || !dash ? "3,3" : dash;

                        lo1.attr({ "stroke-dasharray": style });
                        lo2.attr({ "stroke-dasharray": style });
                    }

                    axis.append(lo1);

                    // Y축이 숨김 상태가 아닐 때만 추가
                    if (this.axis.get("y").hide !== true) {
                        axis.append(lo2);
                    }
                }
            };

            this.drawValueLineCenter = function (axis, ticks, line$$1) {
                var len = this.grid.type != "block" ? ticks.length - 1 : ticks.length,
                    w = this.axis.area("width"),
                    h = this.axis.area("height"),
                    x = this.axis.area("x"),
                    y = this.axis.area("y"),
                    d = this.axis.depth,
                    dx = this.axis.get("y").orient == "left" ? 0 : w,
                    dy = this.axis.get("x").orient == "top" ? 0 : h;

                // z축 라인 드로잉
                for (var i = 1; i < len; i++) {
                    var t = i * (d / len),
                        p1 = new LinePolygon(x, y + dy, t, x + w, y + dy, t),
                        p2 = new LinePolygon(x + dx, y, t, x + dx, y + h, t);

                    this.calculate3d(p1, p2);

                    var lo1 = this.line({
                        stroke: this.chart.theme("gridBorderColor"),
                        "stroke-width": this.chart.theme("gridBorderWidth"),
                        x1: p1.vectors[0].x,
                        y1: p1.vectors[0].y,
                        x2: p1.vectors[1].x,
                        y2: p1.vectors[1].y
                    });

                    var lo2 = this.line({
                        stroke: this.chart.theme("gridBorderColor"),
                        "stroke-width": this.chart.theme("gridBorderWidth"),
                        x1: p2.vectors[0].x,
                        y1: p2.vectors[0].y,
                        x2: p2.vectors[1].x,
                        y2: p2.vectors[1].y
                    });

                    if (line$$1.type.indexOf("dashed") > -1) {
                        var dash = this.chart.theme("gridBorderDashArray"),
                            style = dash == "none" || !dash ? "3,3" : dash;

                        lo1.attr({ "stroke-dasharray": style });
                        lo2.attr({ "stroke-dasharray": style });
                    }

                    axis.append(lo1);

                    // Y축이 숨김 상태가 아닐 때만 추가
                    if (this.axis.get("y").hide !== true) {
                        axis.append(lo2);
                    }
                }
            };

            this.drawValueText = function (position, axis, index, xy, domain) {
                if (this.grid.hideText) return;

                var isVertical = position == "left" || position == "right";

                var tickSize = this.chart.theme("gridTickBorderSize"),
                    tickPadding = this.chart.theme("gridTickPadding"),
                    w = this.axis.area("width"),
                    h = this.axis.area("height"),
                    dx = this.axis.area("x"),
                    dy = this.axis.area("y"),
                    x = 0,
                    y = 0;

                if (position == "top") {
                    x = xy;
                    y = dy + -(tickSize + tickPadding * 2);
                } else if (position == "bottom") {
                    x = xy;
                    y = dy + (h + tickSize + tickPadding * 2);
                } else if (position == "left") {
                    x = dx + -(tickSize + tickPadding);
                    y = xy;
                } else if (position == "right") {
                    x = dx + (w + tickSize + tickPadding);
                    y = xy;
                }

                var p = new PointPolygon(x, y, 0);
                this.calculate3d(p);

                axis.append(this.getTextRotate(this.chart.text({
                    x: p.vectors[0].x,
                    y: p.vectors[0].y,
                    dx: !isVertical ? this.chart.theme("gridXFontSize") / 3 : 0,
                    dy: isVertical ? this.chart.theme("gridYFontSize") / 3 : 0,
                    fill: this.chart.theme(isVertical ? "gridYFontColor" : "gridXFontColor"),
                    "text-anchor": isVertical ? position == "left" ? "end" : "start" : "middle",
                    "font-size": this.chart.theme(isVertical ? "gridYFontSize" : "gridXFontSize"),
                    "font-weight": this.chart.theme(isVertical ? "gridYFontWeight" : "gridXFontWeight")
                }, domain)));
            };

            this.drawValueTextCenter = function (axis, ticks, values, checkActive, moveZ) {
                if (this.grid.hideText) return;

                var margin = this.chart.theme("gridTickBorderSize") + this.chart.theme("gridTickPadding"),
                    isLeft = this.axis.get("y").orient == "left",
                    isTop = this.axis.get("x").orient == "top",
                    len = this.grid.type != "block" ? ticks.length - 1 : ticks.length,
                    w = this.axis.area("width"),
                    h = this.axis.area("height"),
                    d = this.axis.depth,
                    x = this.axis.area("x") + (isLeft ? w + margin : -margin),
                    y = this.axis.area("y") + (isTop ? -margin : h + margin);

                // z축 라인 드로잉
                for (var i = 0; i < ticks.length; i++) {
                    var domain = this.format(ticks[i], i),
                        t = i * (d / len) + moveZ,
                        p = new PointPolygon(x, y, t);

                    this.calculate3d(p);

                    axis.append(this.getTextRotate(this.chart.text({
                        x: p.vectors[0].x,
                        y: p.vectors[0].y,
                        fill: this.chart.theme("gridZFontColor"),
                        "text-anchor": isLeft ? "start" : "end",
                        "font-size": this.chart.theme("gridZFontSize"),
                        "font-weight": this.chart.theme("gridZFontWeight")
                    }, domain)));
                }
            };

            this.drawPattern = function () {};
            this.drawImage = function () {};
        };

        return Draw3DGrid;
    }
};

jui$1.use([math, draw, draw2d, draw3d]);

var CoreGrid = {
    name: "chart.grid.core",
    extend: "chart.draw",
    component: function component() {
        var _ = jui$1.include("util.base");
        var math$$1 = jui$1.include("util.math");
        var Draw2D = jui$1.include("chart.grid.draw2d");
        var Draw3D = jui$1.include("chart.grid.draw3d");

        var CoreGrid = function CoreGrid() {

            /**
             * @method wrapper
             * scale wrapper
             *
             * grid 의 x 좌표 값을 같은 형태로 가지고 오기 위한 wrapper 함수
             *
             * grid 속성에 key 가 있다면  key 의 속성값으로 실제 값을 처리
             *
             *      @example
             *      // 그리드 속성에 키가 없을 때
             *      scale(0);		// 0 인덱스에 대한 값  (block, radar)
             *      // grid 속성에 key 가 있을 때
             *      grid { key : "field" }
             *      scale(0)			// field 값으로 scale 설정 (range, date)
             *
             * @protected
             */
            this.wrapper = function (scale, key) {
                return scale;
            };

            /**
             * @method line
             * theme 이 적용된  line 리턴
             * @protected
             * @param {ChartBuilder} chart
             * @param {Object} attr
             */
            this.line = function (attr) {
                return this.chart.svg.line(_.extend({
                    x1: 0,
                    y1: 0,
                    x2: 0,
                    y2: 0,
                    stroke: this.color("gridBorderColor"),
                    "stroke-width": this.chart.theme("gridBorderWidth"),
                    "stroke-dasharray": this.chart.theme("gridBorderDashArray"),
                    "stroke-opacity": this.chart.theme("gridBorderOpacity")
                }, attr));
            };

            /**
             * @method color
             * grid 에서 color 를 위한 유틸리티 함수
             * @param theme
             * @return {Mixed}
             */
            this.color = function (theme) {
                var color = this.grid.color;

                if (arguments.length == 3) {
                    return color != null ? this.chart.color(color) : this.chart.theme.apply(this.chart, arguments);
                }

                return color != null ? this.chart.color(color) : this.chart.theme(theme);
            };

            /**
             * @method data
             * get data for axis
             * @protected
             * @param {Number} index
             * @param {String} field
             */
            this.data = function (index, field) {
                if (this.axis.data && this.axis.data[index]) {
                    return this.axis.data[index][field] || this.axis.data[index];
                }

                return this.axis.data || [];
            };

            this.getGridSize = function () {
                var orient = this.grid.orient,
                    depth = this.axis.depth,
                    degree = this.axis.degree,
                    axis = orient == "left" || orient == "right" ? this.axis.area("y") : this.axis.area("x"),
                    max = orient == "left" || orient == "right" ? this.axis.area("height") : this.axis.area("width"),
                    start = axis,
                    size = max,
                    end = start + size;

                var result = {
                    start: start,
                    size: size,
                    end: end
                };

                if (!this.axis.isFull3D()) {
                    if (depth > 0 || degree > 0) {
                        var radian = math$$1.radian(360 - degree),
                            x2 = Math.cos(radian) * depth,
                            y2 = Math.sin(radian) * depth;

                        if (orient == "left") {
                            result.start = result.start - y2;
                            result.size = result.size - y2;
                        } else if (orient == "bottom") {
                            result.end = result.end - x2;
                            result.size = result.size - x2;
                        }
                    }
                } else {
                    if (orient == "center") {
                        // z축
                        result.start = 0;
                        result.size = depth;
                        result.end = depth;
                    }
                }

                return result;
            };

            /**
             * @method getDefaultOffset
             *
             * get real size of grid
             *
             * @param {chart.builder} chart
             * @param {Strng} orient
             * @param {Object} grid             그리드 옵션
             * @return {Object}
             * @return {Number} return.start    시작 지점
             * @return {Number} return.size     그리드 넓이 또는 높이
             * @return {Number} return.end      마지막 지점
             */
            this.getDefaultOffset = function () {
                var orient = this.grid.orient,
                    area = this.axis.area();

                var width = area.width,
                    height = area.height,
                    axis = orient == "left" || orient == "right" ? area.y : area.x,
                    max = orient == "left" || orient == "right" ? height : width,
                    start = axis,
                    size = max,
                    end = start + size;

                return {
                    start: start,
                    size: size,
                    end: end
                };
            };

            /**
             * @method getTextRotate
             * implement text rotate in grid text
             * @protected
             * @param {SVGElement} textElement
             */
            this.getTextRotate = function (textElement) {
                var rotate = this.grid.textRotate;

                if (rotate == null) {
                    return textElement;
                }

                if (_.typeCheck("function", rotate)) {
                    rotate = rotate.apply(this.chart, [textElement]);
                }

                var x = textElement.attr("x");
                var y = textElement.attr("y");

                textElement.rotate(rotate, x, y);

                return textElement;
            };

            this.getLineOption = function () {
                var line = this.grid.line;

                if (typeof line === "string") {
                    line = { type: line || "solid" };
                } else if (typeof line === "number") {
                    line = { type: "solid", "stroke-width": line };
                } else if ((typeof line === "undefined" ? "undefined" : _typeof(line)) !== "object") {
                    line = !!line;

                    if (line) {
                        line = { type: "solid" };
                    }
                }

                if (line && !line.type == "string") {
                    line.type = line.type.split(/ /g);
                }

                return line;
            };

            this.checkDrawLineY = function (index, isLast) {
                var y = this.axis.get("y");

                if (!y.hide) {
                    if (y.orient == "left" && index == 0 && !this.grid.realtime) {
                        return false;
                    } else if (y.orient == "right" && isLast) {
                        return false;
                    }
                }

                return true;
            };

            this.checkDrawLineX = function (index, isLast) {
                var x = this.axis.get("x");

                if (!x.hide) {
                    if (x.orient == "top" && index == 0) {
                        return false;
                    } else if (x.orient == "bottom" && isLast && !this.grid.realtime) {
                        return false;
                    }
                }

                return true;
            };

            /**
             * @method top
             *
             * draw top
             *
             * @param {chart.util.svg} g
             * @param {Array} ticks
             * @param {Array} values
             * @param {Number} min
             * @param {Function} checkActive
             */
            this.drawTop = function (g, ticks, values, checkActive, moveX) {
                for (var i = 0, len = ticks.length; i < len; i++) {
                    var domain = this.format(ticks[i], i),
                        x = values[i] - moveX,
                        isLast = i == len - 1 && this.grid.type != "block",
                        isActive = false;

                    // 그리드 이미지 그리기
                    this.drawImage("top", g, ticks[i], i, x, 0);

                    // 도메인이 없으면 그리지 않음
                    if (!domain && domain !== 0) {
                        continue;
                    }

                    // 액티브 라인 체크
                    if (_.typeCheck("function", checkActive)) {
                        isActive = checkActive(ticks[i]);
                    }

                    var axis = this.createGridX("top", i, x, isActive, isLast);
                    this.drawValueText("top", axis, i, values[i], domain, moveX, isActive);

                    g.append(axis);
                }
            };

            this.drawBottom = function (g, ticks, values, checkActive, moveX) {
                for (var i = 0, len = ticks.length; i < len; i++) {
                    var domain = this.format(ticks[i], i),
                        x = values[i] - moveX,
                        isLast = i == len - 1 && this.grid.type != "block",
                        isActive = false;

                    // 그리드 이미지 그리기
                    this.drawImage("bottom", g, ticks[i], i, x, 0);

                    // 도메인이 없으면 그리지 않음
                    if (!domain && domain !== 0) {
                        continue;
                    }

                    // 액티브 라인 체크
                    if (_.typeCheck("function", checkActive)) {
                        isActive = checkActive(ticks[i]);
                    }

                    var axis = this.createGridX("bottom", i, x, isActive, isLast);
                    this.drawValueText("bottom", axis, i, values[i], domain, moveX, isActive);

                    g.append(axis);
                }
            };

            this.drawLeft = function (g, ticks, values, checkActive, moveY) {
                for (var i = 0, len = ticks.length; i < len; i++) {
                    var domain = this.format(ticks[i], i),
                        y = values[i] - moveY,
                        isLast = i == len - 1 && this.grid.type != "block",
                        isActive = false;

                    // 그리드 이미지 그리기
                    this.drawImage("left", g, ticks[i], i, 0, y);

                    // 도메인이 없으면 그리지 않음
                    if (!domain && domain !== 0) {
                        continue;
                    }

                    // 액티브 라인 체크
                    if (_.typeCheck("function", checkActive)) {
                        isActive = checkActive(ticks[i]);
                    }

                    var axis = this.createGridY("left", i, y, isActive, isLast);
                    this.drawValueText("left", axis, i, values[i], domain, moveY, isActive);

                    g.append(axis);
                }
            };

            this.drawRight = function (g, ticks, values, checkActive, moveY) {
                for (var i = 0, len = ticks.length; i < len; i++) {
                    var domain = this.format(ticks[i], i),
                        y = values[i] - moveY,
                        isLast = i == len - 1 && this.grid.type != "block",
                        isActive = false;

                    // 그리드 이미지 그리기
                    this.drawImage("right", g, ticks[i], i, 0, y);

                    // 도메인이 없으면 그리지 않음
                    if (!domain && domain !== 0) {
                        continue;
                    }

                    // 액티브 라인 체크
                    if (_.typeCheck("function", checkActive)) {
                        isActive = checkActive(ticks[i]);
                    }

                    var axis = this.createGridY("right", i, y, isActive, isLast);
                    this.drawValueText("right", axis, i, values[i], domain, moveY, isActive);

                    g.append(axis);
                }
            };

            /**
             * @method drawGrid
             * draw base grid structure
             * @protected
             * @param {chart.builder} chart
             * @param {String} orient
             * @param {String} cls
             * @param {Grid} grid
             */
            this.drawGrid = function () {
                // create group
                var root = this.chart.svg.group(),
                    func = this[this.grid.orient],
                    draw$$1 = this.axis.isFull3D() ? Draw3D : Draw2D;

                // wrapped scale
                this.scale = this.wrapper(this.scale, this.grid.key);

                // render axis
                if (_.typeCheck("function", func)) {
                    draw$$1.call(this);
                    func.call(this, root);
                }

                // hide grid
                if (this.grid.hide) {
                    root.attr({ display: "none" });
                }

                return {
                    root: root,
                    scale: this.scale
                };
            };

            /**
             * @method drawAfter
             *
             * @param {Object} obj
             * @protected
             */
            this.drawAfter = function (obj) {
                obj.root.attr({ "class": "grid-" + this.grid.type });
                obj.root.translate(this.chart.area("x"), this.chart.area("y"));
            };
        };

        CoreGrid.setup = function () {

            /** @property {chart.builder} chart */
            /** @property {chart.axis} axis */
            /** @property {Object} grid */

            return {
                /**  @cfg {Number} [dist=0] Able to change the locatn of an axis.  */
                dist: 0,
                /**  @cfg {"top"/"left"/"bottom"/"right"} [orient=null] Specifies the direction in which an axis is shown (top, bottom, left or right). */
                orient: null,
                /** @cfg {Boolean} [hide=false] Determines whether to display an applicable grid.  */
                hide: false,
                /** @cfg {String/Object/Number} [color=null] Specifies the color of a grid. */
                color: null,
                /** @cfg {String} [title=null] Specifies the text shown on a grid.*/
                title: null,
                /** @cfg {Boolean} [hide=false] Determines whether to display a line on the axis background. */
                line: false,
                /** @cfg {Function} [format=null]  Determines whether to format the value on an axis. */
                format: null,
                /** @cfg {Function} [image=null]  Determines whether to image the value on an axis. */
                image: null,
                /** @cfg {Number} [textRotate=null] Specifies the slope of text displayed on a grid. */
                textRotate: null
            };
        };

        return CoreGrid;
    }
};

var BlockGrid = {
    name: "chart.grid.block",
    extend: "chart.grid.core",
    component: function component() {
        var _ = jui$1.include("util.base");
        var UtilScale = jui$1.include("util.scale");

        var BlockGrid = function BlockGrid() {
            this.center = function (g) {
                this.drawCenter(g, this.domain, this.points, null, this.half_band);
                this.drawBaseLine("center", g);
            };

            this.top = function (g) {
                this.drawPattern("top", this.domain, this.points, true);
                this.drawTop(g, this.domain, this.points, null, this.half_band);
                this.drawBaseLine("top", g);
                g.append(this.createGridX("top", this.domain.length, this.end, null, true));
            };

            this.bottom = function (g) {
                this.drawPattern("bottom", this.domain, this.points, true);
                this.drawBottom(g, this.domain, this.points, null, this.half_band);
                this.drawBaseLine("bottom", g);
                g.append(this.createGridX("bottom", this.domain.length, this.end, null, true));
            };

            this.left = function (g) {
                this.drawPattern("left", this.domain, this.points, true);
                this.drawLeft(g, this.domain, this.points, null, this.half_band);
                this.drawBaseLine("left", g);
                g.append(this.createGridY("left", this.domain.length, this.end, null, true));
            };

            this.right = function (g) {
                this.drawPattern("right", this.domain, this.points, true);
                this.drawRight(g, this.domain, this.points, null, this.half_band);
                this.drawBaseLine("right", g);
                g.append(this.createGridY("right", this.domain.length, this.end, null, true));
            };

            this.initDomain = function () {
                var domain = [];

                if (_.typeCheck("string", this.grid.domain)) {
                    var field = this.grid.domain;
                    var data = this.data();

                    if (this.grid.reverse) {
                        var start = data.length - 1,
                            end = 0,
                            step = -1;
                    } else {
                        var start = 0,
                            end = data.length - 1,
                            step = 1;
                    }

                    for (var i = start; this.grid.reverse ? i >= end : i <= end; i += step) {
                        domain.push(data[i][field]);
                    }
                } else if (_.typeCheck("function", this.grid.domain)) {
                    // block 은 배열을 통째로 리턴함
                    domain = this.grid.domain.call(this.chart);
                } else if (_.typeCheck("array", this.grid.domain)) {
                    domain = this.grid.domain;
                }

                if (this.grid.reverse) {
                    domain.reverse();
                }

                return domain;
            };

            this.wrapper = function (scale, key) {
                var old_scale = scale;
                var self = this;
                var len = self.domain.length;
                var reverse = self.grid.reverse;

                function new_scale(i) {
                    if (typeof i == 'number' && key) {
                        return old_scale(self.axis.data[i][key]);
                    } else {
                        return old_scale(reverse ? len - i - 1 : i);
                    }
                }

                return key ? _.extend(new_scale, old_scale) : old_scale;
            };

            this.drawBefore = function () {
                var domain = this.initDomain(),
                    obj = this.getGridSize(),
                    range = [obj.start, obj.end];

                // scale 설정
                this.scale = UtilScale.ordinal().domain(domain);
                this.scale.rangePoints(range);

                this.start = obj.start;
                this.size = obj.size;
                this.end = obj.end;
                this.points = this.scale.range();
                this.domain = this.scale.domain();

                this.band = this.scale.rangeBand();
                this.half_band = this.band / 2;
                this.bar = 6;
                this.reverse = this.grid.reverse;
            };

            this.draw = function () {
                return this.drawGrid("block");
            };
        };

        BlockGrid.setup = function () {
            return {
                /** @cfg {String/Array/Function} [domain=null] Sets the value displayed on an axis.*/
                domain: null,
                /** @cfg {Boolean} [reverse=false] Reverses the value on domain values*/
                reverse: false,
                /** @cfg {Number} [max=10] Sets the maximum value of a grid. */
                max: 10,
                /** @cfg {Boolean} [hideText=false] Determines whether to show text across the grid. */
                hideText: false,
                /** @cfg {String} [key=null] Sets the value on the grid to the value for the specified key. */
                key: null
            };
        };

        return BlockGrid;
    }
};

var DateGrid = {
    name: "chart.grid.date",
    extend: "chart.grid.core",
    component: function component() {
        var _ = jui$1.include("util.base");
        var UtilScale = jui$1.include("util.scale");
        var UtilTime = jui$1.include("util.time");

        var DateGrid = function DateGrid() {

            this.center = function (g) {
                this.drawCenter(g, this.ticks, this.values, null, 0);
                this.drawBaseLine("center", g);
            };

            this.top = function (g) {
                this.drawPattern("top", this.ticks, this.values);
                this.drawTop(g, this.ticks, this.values, null, 0);
                this.drawBaseLine("top", g);
            };

            this.bottom = function (g) {
                this.drawPattern("bottom", this.ticks, this.values);
                this.drawBottom(g, this.ticks, this.values, null, 0);
                this.drawBaseLine("bottom", g);
            };

            this.left = function (g) {
                this.drawPattern("left", this.ticks, this.values);
                this.drawLeft(g, this.ticks, this.values, null, 0);
                this.drawBaseLine("left", g);
            };

            this.right = function (g) {
                this.drawPattern("right", this.ticks, this.values);
                this.drawRight(g, this.ticks, this.values, null, 0);
                this.drawBaseLine("right", g);
            };

            this.wrapper = function (scale, key) {
                var old_scale = scale;
                var self = this;

                function new_scale(i) {
                    if (typeof i == 'number') {
                        return old_scale(self.axis.data[i][key]);
                    } else {
                        return old_scale(+i);
                    }
                }

                return key ? _.extend(new_scale, old_scale) : old_scale;
            };

            this.initDomain = function () {
                var domain = [],
                    interval = [];
                var min = this.grid.min || undefined,
                    max = this.grid.max || undefined;
                var data = this.data(),
                    value_list = [];

                if (_.typeCheck("string", this.grid.domain)) {
                    if (data.length > 0) {
                        var field = this.grid.domain;
                        value_list.push(+data[0][field]);
                        value_list.push(+data[data.length - 1][field]);
                    }
                } else if (_.typeCheck("function", this.grid.domain)) {
                    var index = data.length;

                    while (index--) {
                        var value = this.grid.domain.call(this.chart, data[index]);

                        if (_.typeCheck("array", value)) {
                            value_list[index] = Math.max.apply(Math, value);
                            value_list.push(Math.min.apply(Math, value));
                        } else {
                            value_list[index] = value;
                        }
                    }
                } else {
                    value_list = this.grid.domain;
                }

                if (_.typeCheck("undefined", min) && value_list.length > 0) min = Math.min.apply(Math, value_list);
                if (_.typeCheck("undefined", max) && value_list.length > 0) max = Math.max.apply(Math, value_list);

                domain = [min, max];
                interval = this.grid.interval;

                if (this.grid.reverse) {
                    domain.reverse();
                }

                if (_.typeCheck("function", interval)) {
                    this.interval = interval.call(this.chart, domain);
                } else {
                    this.interval = interval;
                }

                return domain;
            };

            this.drawBefore = function () {
                var domain = this.initDomain();

                var obj = this.getGridSize(),
                    range = [obj.start, obj.end];

                this.scale = UtilScale.time().domain(domain).range(range);

                this.scale.clamp(this.grid.clamp);

                // 기본값 설정
                this.ticks = [];

                if (this.grid.realtime != null && UtilTime[this.grid.realtime] == this.grid.realtime) {
                    var ticks = this.scale.realTicks(this.grid.realtime, this.interval);
                } else {
                    var ticks = this.scale.ticks("milliseconds", this.interval);
                }

                /* data 없을 때도 기본 설정만으로 보여야 하기 때문에. 지우겠음
                if (this.axis.data.length == 0) {
                    //this.ticks = [];
                } */

                if (typeof this.grid.format == "string") {
                    (function (grid, str) {
                        grid.format = function (value) {
                            return UtilTime.format(value, str);
                        };
                    })(this.grid, this.grid.format);
                }

                // interval = [this.time.days, 1];
                this.start = obj.start;
                this.size = obj.size;
                this.end = obj.end;
                this.bar = 6;
                this.values = [];

                for (var i = 0, len = ticks.length; i < len; i++) {
                    var value = this.scale(ticks[i]);

                    if (value >= obj.start && value <= obj.end) {
                        this.values.push(value);
                        this.ticks.push(ticks[i]);
                    }
                }
            };

            this.draw = function () {
                return this.drawGrid("date");
            };
        };

        DateGrid.setup = function () {
            return {
                /** @cfg {Array} [domain=null] Sets the value displayed on a grid. */
                domain: null,
                /** @cfg {Number} [interval=1000] Sets the interval of the scale displayed on a grid.*/
                interval: 1000,
                /** @cfg {Number} [min=null] Sets the minimum timestamp of a grid.  */
                min: null,
                /** @cfg {Number} [max=null] Sets the maximum timestamp of a grid. */
                max: null,
                /** @cfg {Boolean} [reverse=false] Reverses the value on domain values*/
                reverse: false,
                /** @cfg {String} [key=null] Sets the value on the grid to the value for the specified key. */
                key: null,
                /** @cfg {"years"/"months"/"days"/"hours"/"minutes"/"seconds"/"milliseconds"} [realtime=""] Determines whether to use as a real-time grid. */
                realtime: null,
                /** @cfg {Boolean} [hideText=false] Determines whether to show text across the grid. */
                hideText: false
            };
        };

        return DateGrid;
    }
};

var DateBlockGrid = {
    name: "chart.grid.dateblock",
    extend: "chart.grid.date",
    component: function component() {
        var _ = jui$1.include("util.base");
        var UtilScale = jui$1.include("util.scale");
        var UtilTime = jui$1.include("util.time");

        var DateBlockGrid = function DateBlockGrid() {

            this.wrapper = function (scale, key) {
                var old_scale = scale;
                var self = this;

                old_scale.rangeBand = function () {
                    return self.grid.unit;
                };

                return old_scale;
            };

            this.initDomain = function () {
                var domain = [],
                    interval = [];
                var min = this.grid.min || undefined,
                    max = this.grid.max || undefined;
                var data = this.data(),
                    value_list = [];

                if (_.typeCheck("string", this.grid.domain)) {
                    var field = this.grid.domain;
                    value_list.push(+data[0][field]);
                    value_list.push(+data[data.length - 1][field]);
                } else if (_.typeCheck("function", this.grid.domain)) {
                    var index = data.length;

                    while (index--) {
                        var value = this.grid.domain.call(this.chart, data[index]);

                        if (_.typeCheck("array", value)) {
                            value_list[index] = +Math.max.apply(Math, value);
                            value_list.push(+Math.min.apply(Math, value));
                        } else {
                            value_list[index] = +value;
                        }
                    }
                } else {
                    value_list = this.grid.domain;
                }

                if (_.typeCheck("undefined", min)) min = Math.min.apply(Math, value_list);
                if (_.typeCheck("undefined", max)) max = Math.max.apply(Math, value_list);

                domain = [min, max];
                interval = this.grid.interval;

                if (this.grid.reverse) {
                    domain.reverse();
                }

                if (_.typeCheck("function", interval)) {
                    domain.interval = interval.call(this.chart, domain);
                } else {
                    domain.interval = interval;
                }

                return domain;
            };

            this.drawBefore = function () {
                var domain = this.initDomain(),
                    obj = this.getGridSize(),
                    range = [obj.start, obj.end],
                    time = UtilScale.time().domain(domain).rangeRound(range);

                if (this.grid.realtime != null && UtilTime[this.grid.realtime] == this.grid.realtime) {
                    this.ticks = time.realTicks(this.grid.realtime, domain.interval);
                } else {
                    this.ticks = time.ticks("milliseconds", domain.interval);
                }

                var len = this.axis.data.length - 1;
                var unit = this.grid.unit = Math.abs(range[0] - range[1]) / len;

                if (typeof this.grid.format == "string") {
                    (function (grid, str) {
                        grid.format = function (value) {
                            return UtilTime.format(value, str);
                        };
                    })(this.grid, this.grid.format);
                }

                // interval = [this.time.days, 1];
                this.start = obj.start;
                this.size = obj.size;
                this.end = obj.end;
                this.bar = 6;
                this.values = [];

                for (var i = 0, len = this.ticks.length; i < len; i++) {
                    this.values[i] = time(this.ticks[i]);
                }

                var self = this;
                this.scale = _.extend(function (i) {
                    // area 시작 영역 추가
                    return self.start + i * unit;
                }, time);
            };

            this.draw = function () {
                return this.drawGrid("dateblock");
            };
        };

        return DateBlockGrid;
    }
};

var FullBlockGrid = {
    name: "chart.grid.fullblock",
    extend: "chart.grid.core",
    component: function component() {
        var _ = jui$1.include("util.base");
        var UtilScale = jui$1.include("util.scale");

        var FullBlockGrid = function FullBlockGrid() {
            this.center = function (g) {
                this.drawCenter(g, this.domain, this.points, null, 0);
                this.drawBaseLine("center", g);
            };

            this.top = function (g) {
                this.drawPattern("top", this.domain, this.points);
                this.drawTop(g, this.domain, this.points, null, 0);
                this.drawBaseLine("top", g);
            };

            this.bottom = function (g) {
                this.drawPattern("bottom", this.domain, this.points);
                this.drawBottom(g, this.domain, this.points, null, 0);
                this.drawBaseLine("bottom", g);
            };

            this.left = function (g) {
                this.drawPattern("left", this.domain, this.points);
                this.drawLeft(g, this.domain, this.points, null, 0);
                this.drawBaseLine("left", g);
            };

            this.right = function (g) {
                this.drawPattern("right", this.domain, this.points);
                this.drawRight(g, this.domain, this.points, null, 0);
                this.drawBaseLine("right", g);
            };

            this.initDomain = function () {
                var domain = [];

                if (_.typeCheck("string", this.grid.domain)) {
                    var field = this.grid.domain;
                    var data = this.data();

                    if (this.grid.reverse) {
                        var start = data.length - 1,
                            end = 0,
                            step = -1;
                    } else {
                        var start = 0,
                            end = data.length - 1,
                            step = 1;
                    }

                    for (var i = start; this.grid.reverse ? i >= end : i <= end; i += step) {
                        domain.push(data[i][field]);
                    }
                } else if (_.typeCheck("function", this.grid.domain)) {
                    // block 은 배열을 통째로 리턴함
                    domain = this.grid.domain.call(this.chart);
                } else if (_.typeCheck("array", this.grid.domain)) {
                    domain = this.grid.domain;
                }

                if (this.grid.reverse) {
                    domain.reverse();
                }

                return domain;
            };

            this.wrapper = function (scale, key) {
                var old_scale = scale;
                var self = this;
                var len = self.domain.length;
                var reverse = self.grid.reverse;

                function new_scale(i) {
                    if (typeof i == 'number' && key) {
                        return old_scale(self.axis.data[i][key]);
                    } else {
                        return old_scale(reverse ? len - i : i);
                    }
                }

                return key ? _.extend(new_scale, old_scale) : old_scale;
            };

            this.drawBefore = function () {
                var domain = this.initDomain();

                var obj = this.getGridSize();

                // scale 설정
                this.scale = UtilScale.ordinal().domain(domain);
                var range = [obj.start, obj.end];

                this.scale.rangeBands(range);

                this.start = obj.start;
                this.size = obj.size;
                this.end = obj.end;
                this.points = this.scale.range();
                this.domain = this.scale.domain();

                this.band = this.scale.rangeBand();
                this.half_band = 0;
                this.bar = 6;
                this.reverse = this.grid.reverse;
            };

            this.draw = function () {
                return this.drawGrid("fullblock");
            };
        };

        FullBlockGrid.setup = function () {
            return {
                /** @cfg {String/Array/Function} [domain=null] Sets the value displayed on an axis.*/
                domain: null,
                /** @cfg {Boolean} [reverse=false] Reverses the value on domain values*/
                reverse: false,
                /** @cfg {Number} [max=10] Sets the maximum value of a grid. */
                max: 10,
                /** @cfg {Boolean} [hideText=false] Determines whether to show text across the grid. */
                hideText: false
            };
        };

        return FullBlockGrid;
    }
};

jui$1.use([math]);

var RadarGrid = {
    name: "chart.grid.radar",
    extend: "chart.grid.core",
    component: function component() {
        var _ = jui$1.include("util.base");
        var math$$1 = jui$1.include("util.math");

        var RadarGrid = function RadarGrid() {
            var self = this,
                position = [];

            function drawCircle(root, centerX, centerY, x, y, count) {
                var r = Math.abs(y),
                    cx = centerX,
                    cy = centerY;

                root.append(self.chart.svg.circle({
                    cx: cx,
                    cy: cy,
                    r: r,
                    "fill-opacity": 0,
                    stroke: self.color("gridBorderColor"),
                    "stroke-width": self.chart.theme("gridBorderWidth")
                }));
            }

            function drawRadial(root, centerX, centerY, x, y, count, unit) {
                var g = self.chart.svg.group();
                var points = [];

                points.push([centerX + x, centerY + y]);

                var startX = x,
                    startY = y;

                for (var i = 0; i < count; i++) {
                    var obj = math$$1.rotate(startX, startY, unit);

                    startX = obj.x;
                    startY = obj.y;

                    points.push([centerX + obj.x, centerY + obj.y]);
                }

                var path = self.chart.svg.path({
                    "fill": "none",
                    stroke: self.color("gridBorderColor"),
                    "stroke-width": self.chart.theme("gridBorderWidth")
                });

                for (var i = 0; i < points.length; i++) {
                    var point = points[i];

                    if (i == 0) {
                        path.MoveTo(point[0], point[1]);
                    } else {
                        path.LineTo(point[0], point[1]);
                    }
                }

                path.LineTo(points[0][0], points[0][1]);
                //path.ClosePath();

                g.append(path);
                root.append(g);
            }

            function scale(obj) {
                var max = self.grid.max;

                var dx = self.chart.padding('left');
                var dy = self.chart.padding('top');

                return function (index, value) {
                    var rate = value / max;

                    var height = Math.abs(obj.y1) - Math.abs(obj.y2),
                        pos = height * rate,
                        unit = 2 * Math.PI / self.domain.length;

                    var cx = obj.x1,
                        cy = obj.y1,
                        y = -pos,
                        x = 0;

                    var o = math$$1.rotate(x, y, unit * index);

                    var result = {
                        x: dx + cx + o.x,
                        y: dy + cy + o.y
                    };

                    return result;
                };
            }

            this.initDomain = function () {
                var domain = [];
                if (_.typeCheck("string", this.grid.domain)) {
                    var field = this.grid.domain;
                    var data = this.data();

                    if (this.grid.reverse) {
                        var start = data.length - 1,
                            end = 0,
                            step = -1;
                    } else {
                        var start = 0,
                            end = data.length - 1,
                            step = 1;
                    }

                    for (var i = start; this.grid.reverse ? i >= end : i <= end; i += step) {
                        domain.push(data[i][field]);
                    }

                    //grid.domain = domain;
                } else if (_.typeCheck("function", this.grid.domain)) {
                    // block 은 배열을 통째로 리턴함
                    domain = this.grid.domain(this.chart, this.grid);
                } else {
                    domain = this.grid.domain;
                }

                if (this.grid.reverse) {
                    domain.reverse();
                }

                return domain;
            };

            this.drawBefore = function () {
                this.domain = this.initDomain();
            };

            this.draw = function () {
                var width = this.axis.area('width'),
                    height = this.axis.area('height');
                var min = width;

                if (height < min) {
                    min = height;
                }

                // center
                var w = min / 2,
                    centerX = this.axis.area('x') + width / 2,
                    centerY = this.axis.area('y') + height / 2;

                var startY = -w,
                    startX = 0,
                    count = this.domain.length,
                    step = this.grid.step,
                    unit = 2 * Math.PI / count,
                    h = Math.abs(startY) / step;

                var g = this.chart.svg.group(),
                    root = this.chart.svg.group();

                g.append(root);

                // domain line
                position = [];

                for (var i = 0; i < count; i++) {
                    var x2 = centerX + startX,
                        y2 = centerY + startY;

                    root.append(this.chart.svg.line({
                        x1: centerX,
                        y1: centerY,
                        x2: x2,
                        y2: y2,
                        stroke: this.color("gridAxisBorderColor"),
                        "stroke-width": this.chart.theme("gridBorderWidth")
                    }));

                    position[i] = {
                        x1: centerX,
                        y1: centerY,
                        x2: x2,
                        y2: y2
                    };

                    var ty = y2,
                        tx = x2,
                        talign = "middle";

                    if (y2 > centerY) {
                        ty = y2 + 20;
                    } else if (y2 < centerY) {
                        ty = y2 - 10;
                    }

                    if (x2 > centerX) {
                        talign = "start";
                        tx += 10;
                    } else if (x2 < centerX) {
                        talign = "end";
                        tx -= 10;
                    }

                    if (!this.grid.hideText) {
                        root.append(this.chart.text({
                            x: tx,
                            y: ty,
                            "text-anchor": talign,
                            "font-size": this.chart.theme("gridCFontSize"),
                            "font-weight": this.chart.theme("gridCFontWeight"),
                            fill: this.chart.theme("gridCFontColor")
                        }, this.domain[i]));
                    }

                    var obj = math$$1.rotate(startX, startY, unit);

                    startX = obj.x;
                    startY = obj.y;
                }

                if (!this.grid.line) {
                    return {
                        root: root,
                        scale: scale(position[0])
                    };
                }

                // area split line
                startY = -w;
                var stepBase = 0,
                    stepValue = this.grid.max / this.grid.step;

                for (var i = 0; i < step; i++) {
                    if (i == 0 && this.grid.extra) {
                        startY += h;
                        continue;
                    }

                    if (this.grid.shape == "circle") {
                        drawCircle(root, centerX, centerY, 0, startY, count);
                    } else {
                        drawRadial(root, centerX, centerY, 0, startY, count, unit);
                    }

                    if (!this.grid.hideText) {
                        root.append(this.chart.text({
                            x: centerX,
                            y: centerY + (startY + h - 5),
                            "font-size": this.chart.theme("gridCFontSize"),
                            "font-weight": this.chart.theme("gridCFontWeight"),
                            fill: this.chart.theme("gridCFontColor")
                        }, this.grid.max - stepBase + ""));
                    }

                    startY += h;
                    stepBase += stepValue;
                }

                // hide
                if (this.grid.hide) {
                    root.attr({ display: "none" });
                }

                return {
                    root: root,
                    scale: scale(position[0])
                };
            };
        };

        RadarGrid.setup = function () {
            return {
                /** @cfg {String/Array/Function} [domain=null] Sets the value displayed on an axis.*/
                domain: null,
                /** @cfg {Boolean} [reverse=false] Reverses the value on domain values*/
                reverse: false,
                /** @cfg {Number} [max=null] Sets the maximum value of a grid. */
                max: 100,
                /** @cfg {Array} [step=10] Sets the interval of the scale displayed on a grid. */
                step: 10,
                /** @cfg {Boolean} [line=true] Determines whether to display a line on the axis background. */
                line: true,
                /** @cfg {Boolean} [hideText=false] Determines whether to show text across the grid. */
                hideText: false,
                /** @cfg {Boolean} [extra=false] Leaves a certain spacing distance from the grid start point and displays a line where the spacing ends. */
                extra: false,
                /** @cfg {"radial"/"circle"} [shape="radial"] Determines the shape of a grid (radial, circle). */
                shape: "radial" // or circle
            };
        };

        return RadarGrid;
    }
};

jui$1.use([math, scale]);

var RangeGrid = {
    name: "chart.grid.range",
    extend: "chart.grid.core",
    component: function component() {
        var _ = jui$1.include("util.base");
        var math$$1 = jui$1.include("util.math");
        var UtilScale = jui$1.include("util.scale");

        var RangeGrid = function RangeGrid() {
            this.center = function (g) {
                var min = this.scale.min(),
                    max = this.scale.max();

                this.drawCenter(g, this.ticks, this.values, function (tick) {
                    return tick == 0 && tick != min && tick != max;
                }, 0);
                this.drawBaseLine("center", g);
            };

            this.top = function (g) {
                this.drawPattern("top", this.ticks, this.values);
                var min = this.scale.min(),
                    max = this.scale.max();

                this.drawTop(g, this.ticks, this.values, function (tick) {
                    return tick == 0 && tick != min && tick != max;
                }, 0);
                this.drawBaseLine("top", g);
            };

            this.bottom = function (g) {
                this.drawPattern("bottom", this.ticks, this.values);
                var min = this.scale.min(),
                    max = this.scale.max();

                this.drawBottom(g, this.ticks, this.values, function (tick) {
                    return tick == 0 && tick != min && tick != max;
                }, 0);
                this.drawBaseLine("bottom", g);
            };

            this.left = function (g) {
                this.drawPattern("left", this.ticks, this.values);
                var min = this.scale.min(),
                    max = this.scale.max();

                this.drawLeft(g, this.ticks, this.values, function (tick) {
                    return tick == 0 && tick != min && tick != max;
                }, 0);
                this.drawBaseLine("left", g);
            };

            this.right = function (g) {
                this.drawPattern("right", this.ticks, this.values);
                var min = this.scale.min(),
                    max = this.scale.max();

                this.drawRight(g, this.ticks, this.values, function (tick) {
                    return tick == 0 && tick != min && tick != max;
                }, 0);
                this.drawBaseLine("right", g);
            };

            this.wrapper = function (scale$$1, key) {
                var old_scale = scale$$1;
                var self = this;

                function new_scale(i) {
                    return old_scale(self.axis.data[i][key]);
                }

                return key ? _.extend(new_scale, old_scale) : old_scale;
            };

            this.initDomain = function () {

                var domain = [];
                var min = this.grid.min || undefined,
                    max = this.grid.max || undefined,
                    data = this.data();
                var value_list = [];
                var isArray = false;

                if (_.typeCheck("string", this.grid.domain)) {
                    var field = this.grid.domain;

                    value_list = new Array(data.length);
                    var index = data.length;
                    while (index--) {
                        var value = data[index][field];

                        if (_.typeCheck("array", value)) {
                            value_list[index] = Math.max(value);
                            value_list.push(Math.min(value));
                        } else {
                            value_list[index] = value;
                            value_list.push(0);
                        }
                    }
                } else if (_.typeCheck("function", this.grid.domain)) {
                    value_list = new Array(data.length);

                    var isCheck = false;
                    var index = data.length;
                    while (index--) {

                        var value = this.grid.domain.call(this.chart, data[index]);

                        if (_.typeCheck("array", value)) {

                            value_list[index] = Math.max.apply(Math, value);
                            value_list.push(Math.min.apply(Math, value));
                        } else {
                            value_list[index] = value;

                            if (!isCheck) {
                                value_list.push(0);
                                isCheck = true;
                            }
                        }
                    }
                } else {
                    value_list = this.grid.domain;
                    isArray = true;
                }

                var tempMin = Math.min.apply(Math, value_list);
                var tempMax = Math.max.apply(Math, value_list);

                if (isArray) {
                    min = tempMin;
                    max = tempMax;
                } else {
                    if (typeof min == 'undefined' || min > tempMin) min = tempMin;
                    if (typeof max == 'undefined' || max < tempMax) max = tempMax;
                }

                var unit;
                if (_.typeCheck("function", this.grid.unit)) {
                    unit = this.grid.unit.call(this.chart, this.grid);
                } else if (_.typeCheck("number", this.grid.unit)) {
                    unit = this.grid.unit;
                } else {

                    if (min > 0) {
                        min = Math.floor(min);
                    }

                    unit = math$$1.div(max - min, this.grid.step); // (max - min) / this.grid.step

                    if (unit > 1) {
                        unit = Math.ceil(unit);
                    } else if (0 < unit && unit < 1) {
                        unit = math$$1.div(Math.ceil(math$$1.multi(unit, 10)), 10);
                    }
                }

                if (unit == 0) {
                    domain = [0, 0];
                } else {

                    var start = 0;

                    var fixed = math$$1.fixed(unit);
                    while (start < max) {
                        start = fixed.plus(start, unit);
                    }

                    var end = start;
                    while (end > min) {
                        end = fixed.minus(end, unit);
                    }

                    domain = [end, start];

                    domain.step = Math.abs(end - start) / unit;
                }

                if (this.grid.reverse) {
                    domain.reverse();
                }

                return domain;
            };

            this.drawBefore = function () {
                var domain = this.initDomain();

                var obj = this.getGridSize();

                this.scale = UtilScale.linear().domain(domain);

                if (this.grid.orient == "left" || this.grid.orient == "right") {
                    var arr = [obj.end, obj.start];
                } else {
                    var arr = [obj.start, obj.end];
                }

                this.scale.range(arr);
                this.scale.clamp(this.grid.clamp);

                this.start = obj.start;
                this.size = obj.size;
                this.end = obj.end;
                this.step = domain.step;
                this.nice = this.grid.nice;
                this.ticks = this.scale.ticks(this.step, this.nice);

                if (this.grid.orient == 'left' || this.grid.orient == 'right') {
                    this.ticks.reverse();
                }

                this.bar = 6;

                this.values = [];

                for (var i = 0, len = this.ticks.length; i < len; i++) {
                    this.values[i] = this.scale(this.ticks[i]);
                }
            };

            this.draw = function () {
                return this.drawGrid("range");
            };
        };

        RangeGrid.setup = function () {
            return {
                /** @cfg {String/Array/Function} [domain=null] Sets the value displayed on an axis.*/
                domain: null,
                /** @cfg {Array} [step=10] Sets the interval of the scale displayed on a grid. */
                step: 10,
                /** @cfg {Number} [min=0] Sets the minimum value of a grid.  */
                min: 0,
                /** @cfg {Number} [max=0] Sets the maximum value of a grid. */
                max: 0,
                /** @cfg {Number} [unit=null] Multiplies the axis value to be displayed.  */
                unit: null,
                /**
                 * @cfg {Boolean} [clamp=true]
                 *
                 * max 나 min 을 넘어가는 값에 대한 체크,
                 * true 이면 넘어가는 값도 min, max 에서 조정, false 이면  비율로 계산해서 넘어가는 값 적용
                 */
                clamp: true,
                /** @cfg {Boolean} [reverse=false] Reverses the value on domain values*/
                reverse: false,
                /** @cfg {String} [key=null] Sets the value on the grid to the value for the specified key. */
                key: null,
                /** @cfg {Boolean} [hideText=false] Determines whether to show text across the grid. */
                hideText: false,
                /** @cfg {Boolean} [nice=false] Automatically sets the value of a specific section.  */
                nice: false
            };
        };

        return RangeGrid;
    }
};

var LogGrid = {
    name: "chart.grid.log",
    extend: "chart.grid.range",
    component: function component() {
        var UtilScale = jui$1.include("util.scale");

        var LogGrid = function LogGrid() {

            this.drawBefore = function () {
                this.grid.unit = false;

                var domain = this.initDomain();

                var obj = this.getGridSize();

                this.scale = UtilScale.log(this.grid.base).domain(domain);

                if (this.grid.orient == "left" || this.grid.orient == "right") {
                    var arr = [obj.end, obj.start];
                } else {
                    var arr = [obj.start, obj.end];
                }
                this.scale.range(arr);

                this.start = obj.start;
                this.size = obj.size;
                this.end = obj.end;
                this.step = this.grid.step;
                this.nice = this.grid.nice;
                this.ticks = this.scale.ticks(this.step, this.nice);

                if (this.grid.orient == 'left' || this.grid.orient == 'right') {
                    this.ticks.reverse();
                }

                this.bar = 6;

                this.values = [];

                for (var i = 0, len = this.ticks.length; i < len; i++) {
                    this.values[i] = this.scale(this.ticks[i]);
                }
            };

            this.draw = function () {
                return this.drawGrid("log");
            };
        };

        LogGrid.setup = function () {
            return {
                /** @cfg {Number} [base=10] log's base */
                base: 10,
                step: 4,
                nice: false,
                /** @cfg {Boolean} [hideText=false] Determines whether to show text across the grid. */
                hideText: false
            };
        };

        return LogGrid;
    }
};

var RuleGrid = {
    name: "chart.grid.rule",
    extend: "chart.grid.core",
    component: function component() {
        var _ = jui$1.include("util.base");
        var UtilScale = jui$1.include("util.scale");

        var RuleGrid = function RuleGrid() {

            this.top = function (g) {
                var height = this.axis.area('height'),
                    half_height = height / 2;

                g.append(this.axisLine({
                    y1: this.center ? half_height : 0,
                    y2: this.center ? half_height : 0,
                    x1: this.start,
                    x2: this.end
                }));

                var ticks = this.ticks,
                    values = this.values,
                    bar = this.bar;

                for (var i = 0; i < ticks.length; i++) {
                    var domain = this.format(ticks[i], i);

                    if (!domain && domain !== 0) {
                        continue;
                    }

                    var isZero = ticks[i] == 0,
                        axis = this.chart.svg.group().translate(values[i], this.center ? half_height : 0);

                    axis.append(this.line({
                        y1: this.center ? -bar : 0,
                        y2: bar,
                        stroke: this.color("gridAxisBorderColor"),
                        "stroke-width": this.chart.theme("gridBorderWidth")
                    }));

                    if (!isZero || isZero && !this.hideZero) {
                        axis.append(this.getTextRotate(this.chart.text({
                            x: 0,
                            y: bar + bar + 4,
                            "text-anchor": "middle",
                            fill: this.chart.theme("gridFontColor")
                        }, domain)));
                    }

                    g.append(axis);
                }
            };

            this.bottom = function (g) {
                var height = this.axis.area('height'),
                    half_height = height / 2;

                g.append(this.axisLine({
                    y1: this.center ? -half_height : 0,
                    y2: this.center ? -half_height : 0,
                    x1: this.start,
                    x2: this.end
                }));

                var ticks = this.ticks,
                    values = this.values,
                    bar = this.bar;

                for (var i = 0; i < ticks.length; i++) {
                    var domain = this.format(ticks[i], i);

                    if (!domain && domain !== 0) {
                        continue;
                    }

                    var isZero = ticks[i] == 0,
                        axis = this.chart.svg.group().translate(values[i], this.center ? -half_height : 0);

                    axis.append(this.line({
                        y1: this.center ? -bar : 0,
                        y2: this.center ? bar : -bar,
                        stroke: this.color("gridAxisBorderColor"),
                        "stroke-width": this.chart.theme("gridBorderWidth")
                    }));

                    if (!isZero || isZero && !this.hideZero) {
                        axis.append(this.getTextRotate(this.chart.text({
                            x: 0,
                            y: -bar * 2,
                            "text-anchor": "middle",
                            fill: this.chart.theme(isZero, "gridActiveFontColor", "gridFontColor")
                        }, domain)));
                    }

                    g.append(axis);
                }
            };

            this.left = function (g) {
                var width = this.axis.area('width'),
                    height = this.axis.area('height'),
                    half_width = width / 2;

                g.append(this.axisLine({
                    x1: this.center ? half_width : 0,
                    x2: this.center ? half_width : 0,
                    y1: this.start,
                    y2: this.end
                }));

                var ticks = this.ticks,
                    values = this.values,
                    bar = this.bar;

                for (var i = 0; i < ticks.length; i++) {
                    var domain = this.format(ticks[i], i);

                    if (!domain && domain !== 0) {
                        continue;
                    }

                    var isZero = ticks[i] == 0,
                        axis = this.chart.svg.group().translate(this.center ? half_width : 0, values[i]);

                    axis.append(this.line({
                        x1: this.center ? -bar : 0,
                        x2: bar,
                        stroke: this.color("gridAxisBorderColor"),
                        "stroke-width": this.chart.theme("gridBorderWidth")
                    }));

                    if (!isZero || isZero && !this.hideZero) {
                        axis.append(this.getTextRotate(this.chart.text({
                            x: bar / 2 + 4,
                            y: bar - 2,
                            fill: this.chart.theme("gridFontColor")
                        }, domain)));
                    }

                    g.append(axis);
                }
            };

            this.right = function (g) {
                var width = this.axis.area('width'),
                    half_width = width / 2;

                g.append(this.axisLine({
                    x1: this.center ? -half_width : 0,
                    x2: this.center ? -half_width : 0,
                    y1: this.start,
                    y2: this.end
                }));

                var ticks = this.ticks,
                    values = this.values,
                    bar = this.bar;

                for (var i = 0; i < ticks.length; i++) {
                    var domain = this.format(ticks[i], i);

                    if (!domain && domain !== 0) {
                        continue;
                    }

                    var isZero = ticks[i] == 0,
                        axis = this.chart.svg.group().translate(this.center ? -half_width : 0, values[i]);

                    axis.append(this.line({
                        x1: this.center ? -bar : 0,
                        x2: this.center ? bar : -bar,
                        stroke: this.color("gridAxisBorderColor"),
                        "stroke-width": this.chart.theme("gridBorderWidth")
                    }));

                    if (!isZero || isZero && !this.hideZero) {
                        axis.append(this.getTextRotate(this.chart.text({
                            x: -bar - 4,
                            y: bar - 2,
                            "text-anchor": "end",
                            fill: this.chart.theme("gridFontColor")
                        }, domain)));
                    }

                    g.append(axis);
                }
            };

            this.wrapper = function (scale, key) {
                var old_scale = scale;
                var self = this;

                function new_scale(i) {
                    return old_scale(self.axis.data[i][key]);
                }

                return key ? _.extend(new_scale, old_scale) : old_scale;
            };

            this.initDomain = function () {

                var domain = [];
                var min = this.grid.min || undefined,
                    max = this.grid.max || undefined,
                    data = this.data();
                var value_list = [];

                if (_.typeCheck("string", this.grid.domain)) {
                    var field = this.grid.domain;

                    value_list = new Array(data.length);
                    for (var index = 0, len = data.length; index < len; index++) {

                        var value = data[index][field];

                        if (_.typeCheck("array", value)) {
                            value_list[index] = Math.max(value);
                            value_list.push(Math.min(value));
                        } else {
                            value_list[index] = value;
                        }
                    }
                } else if (_.typeCheck("function", this.grid.domain)) {
                    value_list = new Array(data.length);

                    for (var index = 0, len = data.length; index < len; index++) {

                        var value = this.grid.domain.call(this.chart, data[index]);

                        if (_.typeCheck("array", value)) {

                            value_list[index] = Math.max.apply(Math, value);
                            value_list.push(Math.min.apply(Math, value));
                        } else {
                            value_list[index] = value;
                        }
                    }
                } else {
                    value_list = grid.domain;
                }

                var tempMin = Math.min.apply(Math, value_list);
                var tempMax = Math.max.apply(Math, value_list);

                if (typeof min == 'undefined') min = tempMin;
                if (typeof max == 'undefined') max = tempMax;

                this.grid.max = max;
                this.grid.min = min;

                var unit;

                if (_.typeCheck("function", this.grid.unit)) {
                    unit = this.grid.unit.call(this.chart, this.grid);
                } else if (_.typeCheck("number", this.grid.unit)) {
                    unit = this.grid.unit;
                } else {
                    unit = Math.ceil((max - min) / this.grid.step);
                }

                if (unit == 0) {
                    domain = [0, 0];
                } else {

                    var start = 0;

                    while (start < max) {
                        start += unit;
                    }

                    var end = start;
                    while (end > min) {
                        end -= unit;
                    }

                    domain = [end, start];
                    //this.grid.step = Math.abs(start / unit) + Math.abs(end / unit);
                }

                if (this.grid.reverse) {
                    domain.reverse();
                }

                return domain;
            };

            this.drawBefore = function () {
                var domain = this.initDomain();

                var obj = this.getGridSize();
                this.scale = UtilScale.linear().domain(domain);

                if (this.grid.orient == "left" || this.grid.orient == "right") {
                    var arr = [obj.end, obj.start];
                } else {
                    var arr = [obj.start, obj.end];
                }
                this.scale.range(arr);

                this.start = obj.start;
                this.size = obj.size;
                this.end = obj.end;
                this.step = this.grid.step;
                this.nice = this.grid.nice;
                this.ticks = this.scale.ticks(this.step, this.nice);
                this.bar = 6;
                this.hideZero = this.grid.hideZero;
                this.center = this.grid.center;
                this.values = [];

                for (var i = 0, len = this.ticks.length; i < len; i++) {
                    this.values[i] = this.scale(this.ticks[i]);
                }
            };

            this.draw = function () {
                return this.drawGrid(chart, orient, "rule", grid);
            };
        };

        RuleGrid.setup = function () {
            return {
                /** @cfg {String/Array/Function} [domain=null] Sets the value displayed on an axis.*/
                domain: null,
                /** @cfg {Array} [step=10] Sets the interval of the scale displayed on a grid. */
                step: 10,
                /** @cfg {Number} [min=0] Sets the minimum value of a grid.  */
                min: 0,
                /** @cfg {Number} [max=0] Sets the maximum value of a grid. */
                max: 0,
                /** @cfg {Number} [unit=null] Multiplies the axis value to be displayed.  */
                unit: null,
                /**
                 * @cfg {Boolean} [clamp=true]
                 *
                 * max 나 min 을 넘어가는 값에 대한 체크,
                 * true 이면 넘어가는 값도 min, max 에서 조정, false 이면  비율로 계산해서 넘어가는 값 적용
                 */
                clamp: true,
                /** @cfg {Boolean} [reverse=false] Reverses the value on domain values*/
                reverse: false,
                /** @cfg {String} [key=null] Sets the value on the grid to the value for the specified key. */
                key: null,
                /** @cfg {Boolean} [hideText=false] Determines whether to show text across the grid. */
                hideText: false,
                /** @cfg {Boolean} [hideZero=false] Determines whether to show '0' displayed on the grid. */
                hideZero: false,
                /** @cfg {Boolean} [nice=false] Automatically sets the value of a specific section.  */
                nice: false,
                /** @cfg {Boolean} [center=false] Place the reference axis in the middle.  */
                center: false

            };
        };

        return RuleGrid;
    }
};

var PanelGrid = {
    name: "chart.grid.panel",
    extend: "chart.grid.core",
    component: function component() {
        var _ = jui$1.include("util.base");

        var PanelGrid = function PanelGrid() {

            this.custom = function (g) {
                var obj = this.scale(0);

                obj.x -= this.axis.area("x");
                obj.y -= this.axis.area("y");

                g.append(this.chart.svg.rect(_.extend(obj, {
                    fill: "transparent",
                    stroke: "transparent"
                })));
            };

            this.drawBefore = function () {
                this.scale = function (axis) {
                    return function (i) {

                        return {
                            x: axis.area("x"),
                            y: axis.area("y"),
                            width: axis.area("width"),
                            height: axis.area("height")
                        };
                    };
                }(this.axis);
            };

            this.draw = function () {
                this.grid.hide = true;
                return this.drawGrid("panel");
            };
        };

        return PanelGrid;
    }
};

var TableGrid = {
    name: "chart.grid.table",
    extend: "chart.grid.core",
    component: function component() {
        var TableGrid = function TableGrid(chart, axis, grid) {
            var row, column;

            this.custom = function (g) {
                for (var r = 0; r < row; r++) {
                    for (var c = 0; c < column; c++) {
                        var index = r * column + c;

                        var obj = this.scale(index);

                        obj.x -= this.axis.area('x');
                        obj.y -= this.axis.area('y');

                        var rect = this.chart.svg.rect(_.extend(obj, {
                            fill: "tranparent",
                            stroke: "black"
                        }));

                        //g.append(rect);
                    }
                }
            };

            this.drawBefore = function () {

                var row = this.grid.rows;
                var column = this.grid.columns;

                var padding = this.grid.padding;

                var columnUnit = (this.axis.area('width') - (column - 1) * padding) / column;
                var rowUnit = (this.axis.area('height') - (row - 1) * padding) / row;

                // create scale
                this.scale = function (axis, row, column, rowUnit, columnUnit) {
                    return function (i) {

                        var r = Math.floor(i / column);
                        var c = i % column;

                        var x = c * columnUnit;
                        var y = r * rowUnit;

                        var space = padding * c;
                        var rspace = padding * r;

                        return {
                            x: axis.area('x') + x + space,
                            y: axis.area('y') + y + rspace,
                            width: columnUnit,
                            height: rowUnit
                        };
                    };
                }(this.axis, row, column, rowUnit, columnUnit);
            };

            this.draw = function () {
                this.grid.hide = true;
                return this.drawGrid("table");
            };
        };

        TableGrid.setup = function () {
            return {
                /** @cfg {Number} [rows=1] row count in table  */
                rows: 1,
                /** @cfg {Number} [column=1] column count in table  */
                columns: 1,
                /** @cfg {Number} [padding=1] padding in table  */
                padding: 10
            };
        };

        return TableGrid;
    }
};

var OverlapGrid = {
    name: "chart.grid.overlap",
    extend: "chart.grid.core",
    component: function component() {
        var _ = jui$1.include("util.base");

        var OverlapGrid = function OverlapGrid() {
            var size, widthUnit, heightUnit, width, height;

            this.custom = function () {
                for (var i = 0, len = this.axis.data.length; i < len; i++) {
                    var obj = this.scale(i);

                    obj.x -= this.axis.area("x");
                    obj.y -= this.axis.area("y");

                    this.chart.svg.rect(_.extend(obj, {
                        fill: "transparent",
                        stroke: "transparent"
                    }));
                }
            };

            this.drawBefore = function () {
                size = this.grid.count || this.axis.data.length || 1;

                widthUnit = this.axis.area('width') / 2 / size;
                heightUnit = this.axis.area('height') / 2 / size;

                width = this.axis.area('width');
                height = this.axis.area('height');

                // create scale
                this.scale = function (axis) {
                    return function (i) {

                        var x = i * widthUnit;
                        var y = i * heightUnit;

                        return {
                            x: axis.area('x') + x,
                            y: axis.area('y') + y,
                            width: Math.abs(width / 2 - x) * 2,
                            height: Math.abs(height / 2 - y) * 2
                        };
                    };
                }(this.axis);
            };

            this.draw = function () {
                this.grid.hide = true;
                return this.drawGrid("overlap");
            };
        };

        OverlapGrid.setup = function () {
            return {
                /** @cfg {Number} [count=null] Splited count  */
                count: null
            };
        };

        return OverlapGrid;
    }
};

jui$1.use([math]);

var Grid3dGrid = {
    name: "chart.grid.grid3d",
    extend: "chart.grid.core",
    component: function component() {
        var _ = jui$1.include("util.base");
        var math$$1 = jui$1.include("util.math");

        var Grid3D = function Grid3D() {
            var self = this,
                depth = 0,
                degree = 0,
                radian = 0;

            function getElementAttr(root) {
                var attr = null;

                root.each(function (i, elem) {
                    if (elem.element.nodeName == "line") {
                        attr = elem.attributes;
                    }
                });

                return attr;
            }

            this.drawBefore = function () {
                depth = this.axis.get("depth");
                degree = this.axis.get("degree");
                radian = math$$1.radian(360 - degree);

                this.scale = function () {
                    return function (x, y, z, count) {
                        var step = _.typeCheck("integer", count) ? count : 1,
                            split = depth / step;

                        if (z == undefined || step == 1) {
                            return {
                                x: self.axis.x(x),
                                y: self.axis.y(y),
                                depth: split
                            };
                        } else {
                            var z = z == undefined ? 0 : z,
                                c = split * z,
                                top = Math.sin(radian) * split;

                            return {
                                x: self.axis.x(x) + Math.cos(radian) * c,
                                y: self.axis.y(y) + Math.sin(radian) * c + top,
                                depth: split
                            };
                        }
                    };
                }(this.axis);

                this.scale.depth = depth;
                this.scale.degree = degree;
                this.scale.radian = radian;
            };

            this.draw = function () {
                var xRoot = this.axis.x.root,
                    yRoot = this.axis.y.root;

                var y2 = Math.sin(radian) * depth,
                    x2 = Math.cos(radian) * depth;

                yRoot.each(function (i, elem) {
                    if (elem.element.nodeName == "line") {
                        yRoot.append(self.line({
                            x1: x2,
                            y1: 0,
                            x2: x2,
                            y2: y2 + elem.attributes.y2
                        }));
                    } else {
                        // X축 라인 속성 가져오기
                        var xAttr = getElementAttr(xRoot);

                        elem.append(self.line({
                            x1: 0,
                            y1: 0,
                            x2: x2,
                            y2: y2
                        }));

                        elem.append(self.line({
                            x1: x2,
                            y1: y2,
                            x2: x2 + xAttr.x2,
                            y2: y2
                        }));
                    }
                });

                xRoot.each(function (i, elem) {
                    var attr = elem.element.nodeName == "line" ? elem.attributes : elem.get(0).attributes,
                        y2 = attr.y1 + Math.sin(radian) * depth,
                        x2 = attr.x1 + Math.cos(radian) * depth;

                    if (i > 0) {
                        // Y축 라인 속성 가져오기
                        var yAttr = getElementAttr(yRoot);

                        elem.append(self.line({
                            x1: attr.x1,
                            y1: attr.y1,
                            x2: x2,
                            y2: y2
                        }));

                        elem.append(self.line({
                            x1: x2,
                            y1: y2,
                            x2: x2,
                            y2: -(yAttr.y2 - y2)
                        }));
                    }
                });

                return this.drawGrid();
            };
        };

        Grid3D.setup = function () {
            return {
                /** @cfg {Array} [domain=null] */
                domain: null
            };
        };

        return Grid3D;
    }
};

jui$1.use(draw, dom);

var CoreBrush = {
    name: "chart.brush.core",
    extend: "chart.draw",
    component: function component() {
        var _ = jui$1.include("util.base");
        var $ = jui$1.include("util.dom");

        var CoreBrush = function CoreBrush() {

            function getMinMaxValue(data, target) {
                var seriesList = {},
                    targetList = {};

                for (var i = 0; i < target.length; i++) {
                    if (!seriesList[target[i]]) {
                        targetList[target[i]] = [];
                    }
                }

                // 시리즈 데이터 구성
                for (var i = 0, len = data.length; i < len; i++) {
                    var row = data[i];

                    for (var k in targetList) {
                        targetList[k].push(row[k]);
                    }
                }

                for (var key in targetList) {
                    seriesList[key] = {
                        min: Math.min.apply(Math, targetList[key]),
                        max: Math.max.apply(Math, targetList[key])
                    };
                }

                return seriesList;
            }

            this.drawAfter = function (obj) {
                if (this.brush.clip !== false) {
                    obj.attr({ "clip-path": "url(#" + this.axis.get("clipId") + ")" });
                }

                obj.attr({ "class": "brush-" + this.brush.type });
                obj.translate(this.chart.area("x"), this.chart.area("y")); // 브러쉬일 경우, 기본 좌표 설정
            };

            this.drawTooltip = function (fill, stroke, opacity) {
                var self = this,
                    tooltip = null;

                function draw$$1() {
                    return self.chart.svg.group({ "visibility": "hidden" }, function () {
                        self.chart.text({
                            fill: self.chart.theme("tooltipPointFontColor"),
                            "font-size": self.chart.theme("tooltipPointFontSize"),
                            "font-weight": self.chart.theme("tooltipPointFontWeight"),
                            "text-anchor": "middle",
                            opacity: opacity
                        });

                        self.chart.svg.circle({
                            r: self.chart.theme("tooltipPointRadius"),
                            fill: fill,
                            stroke: stroke,
                            opacity: opacity,
                            "stroke-width": self.chart.theme("tooltipPointBorderWidth")
                        });
                    });
                }

                function show(orient, x, y, value) {
                    var text = tooltip.get(0);
                    text.element.textContent = value;

                    if (orient == "left") {
                        text.attr({ x: -7, y: 4, "text-anchor": "end" });
                    } else if (orient == "right") {
                        text.attr({ x: 7, y: 4, "text-anchor": "start" });
                    } else if (orient == "bottom") {
                        text.attr({ y: 16 });
                    } else {
                        text.attr({ y: -7 });
                    }

                    tooltip.attr({ visibility: value != 0 ? "visible" : "hidden" });
                    tooltip.translate(x, y);
                }

                // 툴팁 생성
                tooltip = draw$$1();

                return {
                    tooltip: tooltip,
                    control: show,
                    style: function style(fill, stroke, opacity) {
                        tooltip.get(0).attr({
                            opacity: opacity
                        });

                        tooltip.get(1).attr({
                            fill: fill,
                            stroke: stroke,
                            opacity: opacity
                        });
                    }
                };
            };

            /**
             *
             * @method curvePoints
             *
             * 좌표 배열 'K'에 대한 커브 좌표 'P1', 'P2'를 구하는 함수
             *
             * TODO: min, max 에 대한 처리도 같이 필요함.
             *
             * @param {Array} K
             * @return {Object}
             * @return {Array} return.p1
             * @return {Array} return.p2
             *
             */
            this.curvePoints = function (K) {
                var p1 = [];
                var p2 = [];
                var n = K.length - 1;

                /*rhs vector*/
                var a = [];
                var b = [];
                var c = [];
                var r = [];

                /*left most segment*/
                a[0] = 0;
                b[0] = 2;
                c[0] = 1;
                r[0] = K[0] + 2 * K[1];

                /*internal segments*/
                for (i = 1; i < n - 1; i++) {
                    a[i] = 1;
                    b[i] = 4;
                    c[i] = 1;
                    r[i] = 4 * K[i] + 2 * K[i + 1];
                }

                /*right segment*/
                a[n - 1] = 2;
                b[n - 1] = 7;
                c[n - 1] = 0;
                r[n - 1] = 8 * K[n - 1] + K[n];

                /*solves Ax=b with the Thomas algorithm (from Wikipedia)*/
                for (var i = 1; i < n; i++) {
                    var m = a[i] / b[i - 1];
                    b[i] = b[i] - m * c[i - 1];
                    r[i] = r[i] - m * r[i - 1];
                }

                p1[n - 1] = r[n - 1] / b[n - 1];
                for (var i = n - 2; i >= 0; --i) {
                    p1[i] = (r[i] - c[i] * p1[i + 1]) / b[i];
                } /*we have p1, now compute p2*/
                for (var i = 0; i < n - 1; i++) {
                    p2[i] = 2 * K[i + 1] - p1[i + 1];
                }p2[n - 1] = 0.5 * (K[n] + p1[n - 1]);

                return {
                    p1: p1,
                    p2: p2
                };
            };

            /**
             *
             * @method eachData
             *
             * loop axis data
             *
             * @param {Function} callback
             */
            this.eachData = function (callback, reverse) {
                if (!_.typeCheck("function", callback)) return;
                var list = this.listData();

                if (reverse === true) {
                    for (var len = list.length - 1; len >= 0; len--) {
                        callback.call(this, len, list[len]);
                    }
                } else {
                    for (var index = 0, len = list.length; index < len; index++) {
                        callback.call(this, list[index], index);
                    }
                }
            };

            /**
             *
             * @method listData
             *
             * get axis.data
             *
             * @returns {Array} axis.data
             */
            this.listData = function () {
                if (!this.axis) {
                    return [];
                } else {
                    if (!this.axis.data) {
                        return [];
                    }
                }

                return this.axis.data;
            };

            /**
             *
             * @method getData
             *
             * get record by index in axis.data
             *
             * @param {Integer} index
             * @returns {Object} record in axis.data
             */
            this.getData = function (index) {
                return this.listData()[index];
            };

            /**
             * @method getValue
             *
             * chart.axis.getValue alias
             *
             * @param {Object} data row data
             * @param {String} fieldString 필드 이름
             * @param {String/Number/Boolean/Object} [defaultValue=''] 기본값
             * @return {Mixed}
             */
            this.getValue = function (data, fieldString, defaultValue) {
                return this.axis.getValue(data, fieldString, defaultValue);
            };

            /**
             *
             * @method getXY
             *
             * 차트 데이터에 대한 좌표 'x', 'y'를 구하는 함수
             *
             * @param {Boolean} [isCheckMinMax=true]
             * @return {Array}
             */
            this.getXY = function (isCheckMinMax) {
                var xy = [],
                    series = {},
                    length = this.listData().length,
                    i = length,
                    target = this.brush.target,
                    targetLength = target.length;

                if (isCheckMinMax !== false) {
                    series = getMinMaxValue(this.axis.data, target);
                }

                for (var j = 0; j < targetLength; j++) {
                    xy[j] = {
                        x: new Array(length),
                        y: new Array(length),
                        value: new Array(length),
                        min: [],
                        max: [],
                        length: length
                    };
                }

                var axisData = this.axis.data,
                    isRangeY = this.axis.y.type == "range",
                    x = this.axis.x,
                    y = this.axis.y,
                    func = _.loop(i);

                func(function (i, group) {
                    var data = axisData[i],
                        startX = 0,
                        startY = 0;

                    if (isRangeY) startX = x(i);else startY = y(i);

                    for (var j = 0; j < targetLength; j++) {
                        var key = target[j],
                            value = data[key];

                        if (isRangeY) startY = y(value);else startX = x(value);

                        xy[j].x[i] = startX;
                        xy[j].y[i] = startY;
                        xy[j].value[i] = value;

                        if (isCheckMinMax !== false) {
                            xy[j].min[i] = value == series[key].min;
                            xy[j].max[i] = value == series[key].max;
                        }
                    }
                });

                return xy;
            };

            /**
             *
             * @method getStackXY
             *
             * 차트 데이터에 대한 좌표 'x', 'y'를 구하는 함수
             * 단, 'y' 좌표는 다음 데이터 보다 높게 구해진다.
             *
             * @param {Boolean} [isCheckMinMax=true]
             * @return {Array}
             */
            this.getStackXY = function (isCheckMinMax) {
                var xy = this.getXY(isCheckMinMax),
                    isRangeY = this.axis.y.type == "range";

                this.eachData(function (data, i) {
                    var valueSum = 0;

                    for (var j = 0; j < this.brush.target.length; j++) {
                        var key = this.brush.target[j],
                            value = data[key];

                        if (j > 0) {
                            valueSum += data[this.brush.target[j - 1]];
                        }

                        if (isRangeY) {
                            xy[j].y[i] = this.axis.y(value + valueSum);
                        } else {
                            xy[j].x[i] = this.axis.x(value + valueSum);
                        }
                    }
                });

                return xy;
            };

            /**
             * @method addEvent
             * 브러쉬 엘리먼트에 대한 공통 이벤트 정의
             *
             * @param {Element} element
             * @param {Integer} dataIndex
             * @param {Integer} targetIndex
             */
            this.addEvent = function (elem, dataIndex, targetIndex) {
                if (this.brush.useEvent !== true) return;

                var chart = this.chart,
                    obj = {};

                if (_.typeCheck("object", dataIndex) && !targetIndex) {
                    obj.brush = this.brush;
                    obj.data = dataIndex;
                } else {
                    obj.brush = this.brush;
                    obj.dataIndex = dataIndex;
                    obj.dataKey = targetIndex != null ? this.brush.target[targetIndex] : null;
                    obj.data = dataIndex != null ? this.getData(dataIndex) : null;
                }

                elem.on("click", function (e) {
                    setMouseEvent(e);
                    chart.emit("click", [obj, e]);
                });

                elem.on("dblclick", function (e) {
                    setMouseEvent(e);
                    chart.emit("dblclick", [obj, e]);
                });

                elem.on("contextmenu", function (e) {
                    setMouseEvent(e);
                    chart.emit("rclick", [obj, e]);
                    e.preventDefault();
                });

                elem.on("mouseover", function (e) {
                    setMouseEvent(e);
                    chart.emit("mouseover", [obj, e]);
                });

                elem.on("mouseout", function (e) {
                    setMouseEvent(e);
                    chart.emit("mouseout", [obj, e]);
                });

                elem.on("mousemove", function (e) {
                    setMouseEvent(e);
                    chart.emit("mousemove", [obj, e]);
                });

                elem.on("mousedown", function (e) {
                    setMouseEvent(e);
                    chart.emit("mousedown", [obj, e]);
                });

                elem.on("mouseup", function (e) {
                    setMouseEvent(e);
                    chart.emit("mouseup", [obj, e]);
                });

                function setMouseEvent(e) {
                    var pos = $.offset(chart.root),
                        offsetX = e.pageX - pos.left,
                        offsetY = e.pageY - pos.top;

                    e.bgX = offsetX;
                    e.bgY = offsetY;
                    e.chartX = offsetX - chart.padding("left");
                    e.chartY = offsetY - chart.padding("top");
                }
            };

            /**
             * @method color
             *
             * chart.color() 를 쉽게 사용할 수 있게 만든 유틸리티 함수
             *
             * @param {Number} key1  브러쉬에서 사용될 컬러 Index
             * @param {Number} key2  브러쉬에서 사용될 컬러 Index
             * @returns {*}
             */
            this.color = function (key1, key2) {
                var colors = this.brush.colors,
                    color = null,
                    colorIndex = 0,
                    rowIndex = 0;

                if (!_.typeCheck("undefined", key2)) {
                    colorIndex = key2;
                    rowIndex = key1;
                } else {
                    colorIndex = key1;
                }

                if (_.typeCheck("function", colors)) {
                    var newColor = colors.call(this.chart, this.getData(rowIndex), rowIndex);

                    if (_.typeCheck(["string", "integer"], newColor)) {
                        color = this.chart.color(newColor);
                    } else if (_.typeCheck("array", newColor)) {
                        color = this.chart.color(colorIndex, newColor);
                    } else {
                        color = this.chart.color(0);
                    }
                } else {
                    color = this.chart.color(colorIndex, colors);
                }

                return color;
            };

            /**
             * @method offset
             *
             * 그리드 타입에 따른 시작 좌표 가져오기 (블럭)
             *
             * @param {String} 그리드 종류
             * @param {Number} 인덱스
             * @returns {*}
             */
            this.offset = function (type, index) {
                // 그리드 타입에 따른 시작 좌표 가져오기
                var res = this.axis[type](index);

                if (this.axis[type].type != "block") {
                    res += this.axis[type].rangeBand() / 2;
                }

                return res;
            };
        };

        CoreBrush.setup = function () {
            return {

                /** @property {chart.builder} chart */
                /** @property {chart.axis} axis */
                /** @property {Object} brush */

                /** @cfg {Array} [target=null] Specifies the key value of data displayed on a brush.  */
                target: null,
                /** @cfg {Array/Function} [colors=null] Able to specify color codes according to the target order (basically, refers to the color codes of a theme) */
                colors: null,
                /** @cfg {Integer} [axis=0] Specifies the index of a grid group which acts as the reference axis of a brush. */
                axis: 0,
                /** @cfg {Integer} [index=null] [Read Only] Sequence index on which brush is drawn. */
                index: null,
                /** @cfg {boolean} [clip=true] If the brush is drawn outside of the chart, cut the area. */
                clip: true,
                /** @cfg {boolean} [useEvent=true] If you do not use a brush events, it gives better performance. */
                useEvent: true
            };
        };

        /**
         * @event click
         * Event that occurs when clicking on the brush.
         * @param {BrushData} obj Related brush data.
         */
        /**
         * @event dblclick
         * Event that occurs when double clicking on the brush.
         * @param {BrushData} obj Related brush data.
         */
        /**
         * @event rclick
         * Event that occurs when right clicking on the brush.
         * @param {BrushData} obj Related brush data.
         */
        /**
         * @event mouseover
         * Event that occurs when placing the mouse over the brush.
         * @param {BrushData} obj Related brush data.
         */
        /**
         * @event mouseout
         * Event that occurs when moving the mouse out of the brush.
         * @param {BrushData} obj Related brush data.
         */
        /**
         * @event mousemove
         * Event that occurs when moving the mouse over the brush.
         * @param {BrushData} obj Related brush data.
         */
        /**
         * @event mousedown
         * Event that occurs when left clicking on the brush.
         * @param {BrushData} obj Related brush data.
         */
        /**
         * @event mouseup
         * Event that occurs after left clicking on the brush.
         * @param {BrushData} obj Related brush data.
         */

        return CoreBrush;
    }
};

var MapCoreBrush = {
    name: "chart.brush.map.core",
    extend: "chart.brush.core",
    component: function component() {
        var MapCoreBrush = function MapCoreBrush() {};

        return MapCoreBrush;
    }
};

var PolygonCoreBrush = {
    name: "chart.brush.polygon.core",
    extend: "chart.brush.core",
    component: function component() {
        var PolygonCoreBrush = function PolygonCoreBrush() {
            this.createPolygon = function (polygon, callback) {
                this.calculate3d(polygon);

                var element = callback.call(this, polygon);
                if (element) {
                    element.order = this.axis.depth - polygon.max().z;
                    return element;
                }
            };
        };

        PolygonCoreBrush.setup = function () {
            return {
                id: null,
                clip: false
            };
        };

        return PolygonCoreBrush;
    }
};

var CanvasCoreBrush = {
    name: "chart.brush.canvas.core",
    extend: "chart.brush.core",
    component: function component() {
        var _ = jui$1.include("util.base");

        var CanvasCoreBrush = function CanvasCoreBrush() {
            this.addPolygon = function (polygon, callback) {
                if (!_.typeCheck("array", this.polygons)) {
                    this.polygons = [];
                }

                // 폴리곤 각도 및 깊이 연산
                this.calculate3d(polygon);

                // 연산된 폴리곤 객체 추가
                this.polygons.push({
                    polygon: polygon,
                    order: this.axis.depth - polygon.max().z,
                    handler: callback
                });
            };

            this.drawAfter = function () {
                // 폴리곤 기반의 브러쉬일 경우
                if (_.typeCheck("array", this.polygons)) {
                    var list = this.polygons;

                    list.sort(function (a, b) {
                        return a.order - b.order;
                    });

                    for (var i = 0, len = list.length; i < len; i++) {
                        var p = list.shift();
                        p.handler.call(this, p.polygon);
                    }
                }
            };
        };

        return CanvasCoreBrush;
    }
};

jui$1.use(draw);

var CoreWidget = {
    name: "chart.widget.core",
    extend: "chart.draw",
    component: function component() {
        var _ = jui$1.include("util.base");

        var CoreWidget = function CoreWidget() {

            this.getIndexArray = function (index) {
                var list = [0];

                if (_.typeCheck("array", index)) {
                    list = index;
                } else if (_.typeCheck("integer", index)) {
                    list = [index];
                }

                return list;
            };

            this.getScaleToValue = function (scale, minScale, maxScale, minValue, maxValue) {
                var tick = (maxScale - minScale) * 10,
                    step = (maxValue - minValue) / tick,
                    value = maxValue - step * ((scale - minScale) / 0.1);

                if (value < minValue) return minValue;else if (value > maxValue) return maxValue;

                return value;
            };

            this.getValueToScale = function (value, minValue, maxValue, minScale, maxScale) {
                var tick = (maxScale - minScale) * 10,
                    step = (maxValue - minValue) / tick;

                return parseFloat((minScale + (maxValue - value) / step * 0.1).toFixed(1));
            };

            this.isRender = function () {
                return this.widget.render === true ? true : false;
            };

            this.on = function (type, callback, axisIndex) {
                var self = this;

                return this.chart.on(type, function () {
                    if (_.startsWith(type, "axis.") && _.typeCheck("integer", axisIndex)) {
                        var axis = self.chart.axis(axisIndex),
                            e = arguments[0];

                        if (_.typeCheck("object", axis)) {
                            if (arguments[1] == axisIndex) {
                                callback.apply(self, [e]);
                            }
                        }
                    } else {
                        callback.apply(self, arguments);
                    }
                }, this.isRender() ? "render" : "renderAll");
            };

            this.drawAfter = function (obj) {
                obj.attr({ "class": "widget-" + this.widget.type });
            };
        };

        CoreWidget.setup = function () {

            /** @property {chart.builder} chart */
            /** @property {chart.axis} axis */
            /** @property {Object} widget */
            /** @property {Number} index [Read Only] Index which shows the sequence how a widget is drawn. */

            return {
                /**
                 * @cfg {Boolean} [render=false] Determines whether a widget is to be rendered.
                 */
                render: false,
                /**
                 * @cfg {Number} [index=0] current widget index
                 */
                index: 0
            };
        };

        return CoreWidget;
    }
};

var MapCoreWidget = {
    name: "chart.widget.map.core",
    extend: "chart.widget.core",
    component: function component() {
        var MapCoreWidget = function MapCoreWidget(chart, axis, widget) {};

        MapCoreWidget.setup = function () {
            return {
                axis: 0
            };
        };

        return MapCoreWidget;
    }
};

var PolygonCoreWidget = {
    name: "chart.widget.polygon.core",
    extend: "chart.widget.core",
    component: function component() {
        var PolygonCoreWidget = function PolygonCoreWidget() {
            this.drawAfter = function (obj) {};
        };

        return PolygonCoreWidget;
    }
};

var CanvasCoreWidget = {
    name: "chart.widget.canvas.core",
    extend: "chart.widget.core",
    component: function component() {
        var CanvasCoreWidget = function CanvasCoreWidget() {
            this.drawAfter = function (obj) {};
        };

        return CanvasCoreWidget;
    }
};

jui$1.use([dom, math, color, collection, manager, UICore, time, transform, CanvasUtil, CanvasHidpiUtil, JUISvgElement, JUISvgTransformElement, JUISvgPathElement, JUISvgPathRectElement, JUISvgPathSymbolElement, JUISvgPolyElement, JUISvgBase, JUISvgBase3d, svg, LinearScaleUtil, CircleScaleUtil, LogScaleUtil, OrdinalScaleUtil, TimeScaleUtil, scale, vector, draw, axis, Map, JUIBuilder, Plane, Animation, core, grid$1, line, point, CubePolygon, draw2d, draw3d, CoreGrid, BlockGrid, DateGrid, DateBlockGrid, FullBlockGrid, RadarGrid, RangeGrid, LogGrid, RuleGrid, PanelGrid, TableGrid, OverlapGrid, Grid3dGrid, CoreBrush, MapCoreBrush, PolygonCoreBrush, CanvasCoreBrush, CoreWidget, MapCoreWidget, PolygonCoreWidget, CanvasCoreWidget]);

var _$1 = jui$1.include("util.base"),
    manager$1 = jui$1.include("manager");

_$1.extend(jui$1, manager$1, true);

exports.default = jui$1;

/***/ }),
/* 37 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.default = {
    name: "chart.theme.classic",
    extend: null,
    component: function component() {
        var themeColors = ["#7977C2", "#7BBAE7", "#FFC000", "#FF7800", "#87BB66", "#1DA8A0", "#929292", "#555D69", "#0298D5", "#FA5559", "#F5A397", "#06D9B6", "#C6A9D9", "#6E6AFC", "#E3E766", "#C57BC3", "#DF328B", "#96D7EB", "#839CB5", "#9228E4"];

        return {
            fontFamily: "arial,Tahoma,verdana",
            backgroundColor: "#fff",
            colors: themeColors,

            // Axis styles
            axisBackgroundColor: "#fff",
            axisBackgroundOpacity: 0,
            axisBorderColor: "#fff",
            axisBorderWidth: 0,
            axisBorderRadius: 0,

            // Grid styles
            gridXFontSize: 11,
            gridYFontSize: 11,
            gridZFontSize: 10,
            gridCFontSize: 11,
            gridXFontColor: "#333",
            gridYFontColor: "#333",
            gridZFontColor: "#333",
            gridCFontColor: "#333",
            gridXFontWeight: "normal",
            gridYFontWeight: "normal",
            gridZFontWeight: "normal",
            gridCFontWeight: "normal",
            gridXAxisBorderColor: "#bfbfbf",
            gridYAxisBorderColor: "#bfbfbf",
            gridZAxisBorderColor: "#bfbfbf",
            gridXAxisBorderWidth: 2,
            gridYAxisBorderWidth: 2,
            gridZAxisBorderWidth: 2,

            // Full 3D 전용 테마
            gridFaceBackgroundColor: "#dcdcdc",
            gridFaceBackgroundOpacity: 0.3,

            gridActiveFontColor: "#ff7800",
            gridActiveBorderColor: "#ff7800",
            gridActiveBorderWidth: 1,
            gridPatternColor: "#ababab",
            gridPatternOpacity: 0.1,
            gridBorderColor: "#ebebeb",
            gridBorderWidth: 1,
            gridBorderDashArray: "none",
            gridBorderOpacity: 1,
            gridTickBorderSize: 3,
            gridTickBorderWidth: 1.5,
            gridTickPadding: 5,

            // Brush styles
            tooltipPointRadius: 5, // common
            tooltipPointBorderWidth: 1, // common
            tooltipPointFontWeight: "bold", // common
            tooltipPointFontSize: 11,
            tooltipPointFontColor: "#333",
            barFontSize: 11,
            barFontColor: "#333",
            barBorderColor: "none",
            barBorderWidth: 0,
            barBorderOpacity: 0,
            barBorderRadius: 3,
            barPointBorderColor: "#fff",
            barDisableBackgroundOpacity: 0.4,
            barStackEdgeBorderWidth: 1,
            rateBarFontSize: 11,
            rateBarFontColor: "#333",
            rateBarBorderColor: "none",
            rateBarBorderWidth: 0,
            rateBarBorderOpacity: 0,
            rateBarBorderRadius: 5,
            rateBarDisableBackgroundOpacity: 0.7,
            rateBarTooltipFontSize: 10,
            rateBarTooltipFontColor: "#333",
            rateBarTooltipBackgroundColor: "#fff",
            rateBarTooltipBorderColor: "#666666",
            gaugeBackgroundColor: "#ececec",
            gaugeArrowColor: "#a9a9a9",
            gaugeFontColor: "#666666",
            gaugeFontSize: 20,
            gaugeFontWeight: "bold",
            gaugeTitleFontSize: 12,
            gaugeTitleFontWeight: "normal",
            gaugeTitleFontColor: "#333",
            gaugePaddingAngle: 2,
            bargaugeBackgroundColor: "#ececec",
            bargaugeFontSize: 11,
            bargaugeFontColor: "#333333",
            pieBorderColor: "#ececec",
            pieBorderWidth: 1,
            pieOuterFontSize: 11,
            pieOuterFontColor: "#333",
            pieOuterLineColor: "#a9a9a9",
            pieOuterLineSize: 8,
            pieOuterLineRate: 1.3,
            pieOuterLineWidth: 0.7,
            pieInnerFontSize: 11,
            pieInnerFontColor: "#333",
            pieActiveDistance: 5,
            pieNoDataBackgroundColor: "#E9E9E9",
            pieTotalValueFontSize: 36,
            pieTotalValueFontColor: "#dcdcdc",
            pieTotalValueFontWeight: "bold",
            pieDisableBackgroundOpacity: 0.5,
            areaBackgroundOpacity: 0.5,
            areaSplitBackgroundColor: "#929292",
            bubbleBackgroundOpacity: 0.5,
            bubbleBorderWidth: 1,
            bubbleFontSize: 12,
            bubbleFontColor: "#fff",
            candlestickBorderColor: "#000",
            candlestickBackgroundColor: "#fff",
            candlestickInvertBorderColor: "#ff0000",
            candlestickInvertBackgroundColor: "#ff0000",
            ohlcBorderColor: "#000",
            ohlcInvertBorderColor: "#ff0000",
            ohlcBorderRadius: 5,
            lineBorderWidth: 2,
            lineBorderDashArray: "none",
            lineBorderOpacity: 1,
            lineDisableBorderOpacity: 0.3,
            linePointBorderColor: "#fff",
            lineSplitBorderColor: null,
            lineSplitBorderOpacity: 0.5,
            pathBackgroundOpacity: 0.5,
            pathBorderWidth: 1,
            scatterBorderColor: "#fff",
            scatterBorderWidth: 1,
            scatterHoverColor: "#fff",
            waterfallBackgroundColor: "#87BB66",
            waterfallInvertBackgroundColor: "#FF7800",
            waterfallEdgeBackgroundColor: "#7BBAE7",
            waterfallLineColor: "#a9a9a9",
            waterfallLineDashArray: "0.9",
            focusBorderColor: "#FF7800",
            focusBorderWidth: 1,
            focusBackgroundColor: "#FF7800",
            focusBackgroundOpacity: 0.1,
            pinFontColor: "#FF7800",
            pinFontSize: 10,
            pinBorderColor: "#FF7800",
            pinBorderWidth: 0.7,
            topologyNodeRadius: 12.5,
            topologyNodeFontSize: 14,
            topologyNodeFontColor: "#fff",
            topologyNodeTitleFontSize: 11,
            topologyNodeTitleFontColor: "#333",
            topologyEdgeWidth: 1,
            topologyActiveEdgeWidth: 2,
            topologyHoverEdgeWidth: 2,
            topologyEdgeColor: "#b2b2b2",
            topologyActiveEdgeColor: "#905ed1",
            topologyHoverEdgeColor: "#d3bdeb",
            topologyEdgeFontSize: 10,
            topologyEdgeFontColor: "#666",
            topologyEdgePointRadius: 3,
            topologyEdgeOpacity: 1,
            topologyTooltipBackgroundColor: "#fff",
            topologyTooltipBorderColor: "#ccc",
            topologyTooltipFontSize: 11,
            topologyTooltipFontColor: "#333",

            timelineTitleFontSize: 10,
            timelineTitleFontColor: "#333",
            timelineTitleFontWeight: 700,
            timelineColumnFontSize: 10,
            timelineColumnFontColor: "#333",
            timelineColumnBackgroundColor: "#fff",
            timelineHoverRowBackgroundColor: "#f4f0f9",
            timelineEvenRowBackgroundColor: "#f8f8f8",
            timelineOddRowBackgroundColor: "#fff",
            timelineActiveBarBackgroundColor: "#9262cf",
            timelineActiveBarFontColor: "#fff",
            timelineActiveBarFontSize: 9,
            timelineHoverBarBackgroundColor: null,
            timelineLayerBackgroundOpacity: 0.15,
            timelineActiveLayerBackgroundColor: "#A75CFF",
            timelineActiveLayerBorderColor: "#caa4f5",
            timelineHoverLayerBackgroundColor: "#DEC2FF",
            timelineHoverLayerBorderColor: "#caa4f5",
            timelineVerticalLineColor: "#f0f0f0",
            timelineHorizontalLineColor: "#ddd",

            // hudColumnGridPointRadius: 7,
            // hudColumnGridPointBorderColor: "#868686",
            // hudColumnGridPointBorderWidth: 2,
            // hudColumnGridFontColor: "#868686",
            // hudColumnGridFontSize: 12,
            // hudColumnGridFontWeight: "normal",
            // hudColumnLeftBackgroundColor: "#3C3C3C",
            // hudColumnRightBackgroundColor: "#838383",
            // hudBarGridFontColor: "#868686",
            // hudBarGridFontSize: 16,
            // hudBarGridLineColor: "#868686",
            // hudBarGridLineWidth: 1,
            // hudBarGridLineOpacity: 0.8,
            // hudBarGridBackgroundColor: "#868686",
            // hudBarGridBackgroundOpacity: 0.5,
            // hudBarTextLineColor: "#B2A6A6",
            // hudBarTextLineWidth: 1.5,
            // hudBarTextLinePadding: 12,
            // hudBarTextLineFontColor: "#868686",
            // hudBarTextLineFontSize: 13,
            // hudBarBackgroundOpacity: 0.6,
            // hudBarTopBackgroundColor: "#bbb",
            // hudBarBottomBackgroundColor: "#3C3C3C",

            heatmapBackgroundColor: "#fff",
            heatmapBackgroundOpacity: 1,
            heatmapHoverBackgroundOpacity: 0.2,
            heatmapBorderColor: "#000",
            heatmapBorderWidth: 0.5,
            heatmapBorderOpacity: 1,
            heatmapFontSize: 11,
            heatmapFontColor: "#000",

            pyramidLineColor: "#fff",
            pyramidLineWidth: 1,
            pyramidTextLineColor: "#a9a9a9",
            pyramidTextLineWidth: 1,
            pyramidTextLineSize: 30,
            pyramidTextFontSize: 10,
            pyramidTextFontColor: "#333",

            heatmapscatterBorderWidth: 0.5,
            heatmapscatterBorderColor: "#fff",
            heatmapscatterActiveBackgroundColor: "#fff",

            treemapNodeBorderWidth: 0.5,
            treemapNodeBorderColor: "#333",
            treemapTextFontSize: 11,
            treemapTextFontColor: "#333",
            treemapTitleFontSize: 12,
            treemapTitleFontColor: "#333",

            arcEqualizerBorderColor: "#fff",
            arcEqualizerBorderWidth: 1,
            arcEqualizerFontSize: 13,
            arcEqualizerFontColor: "#333",
            arcEqualizerBackgroundColor: "#a9a9a9",

            flameNodeBorderWidth: 0.5,
            flameNodeBorderColor: "#fff",
            flameDisableBackgroundOpacity: 0.4,
            flameTextFontSize: 11,
            flameTextFontColor: "#333",

            selectBoxBackgroundColor: "#666",
            selectBoxBackgroundOpacity: 0.1,
            selectBoxBorderColor: "#666",
            selectBoxBorderOpacity: 0.2,

            // Widget styles
            titleFontColor: "#333",
            titleFontSize: 13,
            titleFontWeight: "normal",
            legendFontColor: "#333",
            legendFontSize: 12,
            legendSwitchCircleColor: "#fff",
            legendSwitchDisableColor: "#c8c8c8",
            tooltipFontColor: "#333",
            tooltipFontSize: 12,
            tooltipBackgroundColor: "#fff",
            tooltipBackgroundOpacity: 0.7,
            tooltipBorderColor: null,
            tooltipBorderWidth: 2,
            tooltipLineColor: null,
            tooltipLineWidth: 0.7,
            scrollBackgroundSize: 7,
            scrollBackgroundColor: "#dcdcdc",
            scrollThumbBackgroundColor: "#b2b2b2",
            scrollThumbBorderColor: "#9f9fa4",
            zoomBackgroundColor: "#ff0000",
            zoomFocusColor: "#808080",
            zoomScrollBackgroundSize: 45,
            zoomScrollButtonSize: 18,
            zoomScrollAreaBackgroundColor: "#fff",
            zoomScrollAreaBackgroundOpacity: 0.7,
            zoomScrollAreaBorderColor: "#d4d4d4",
            zoomScrollAreaBorderWidth: 1,
            zoomScrollAreaBorderRadius: 3,
            zoomScrollGridFontSize: 10,
            zoomScrollGridTickPadding: 4,
            zoomScrollBrushAreaBackgroundOpacity: 0.7,
            zoomScrollBrushLineBorderWidth: 1,
            crossBorderColor: "#a9a9a9",
            crossBorderWidth: 1,
            crossBorderOpacity: 0.8,
            crossBalloonFontSize: 11,
            crossBalloonFontColor: "#fff",
            crossBalloonBackgroundColor: "#000",
            crossBalloonBackgroundOpacity: 0.5,
            dragSelectBackgroundColor: "#7BBAE7",
            dragSelectBackgroundOpacity: 0.3,
            dragSelectBorderColor: "#7BBAE7",
            dragSelectBorderWidth: 1,

            guidelineBorderColor: "#a9a9a9",
            guidelineBorderWidth: 1,
            guidelineBorderOpacity: 0.8,
            guidelineBalloonFontSize: 11,
            guidelineBalloonFontColor: "#fff",
            guidelineBalloonBackgroundColor: "#000",
            guidelineBalloonBackgroundOpacity: 0.5,
            guidelineBorderDashArray: "2,2",
            guidelinePointRadius: 3,
            guidelinePointBorderColor: "#fff",
            guidelinePointBorderWidth: 1,
            guidelineTooltipFontColor: "#333",
            guidelineTooltipFontSize: 12,
            guidelineTooltipPointRadius: 3,
            guidelineTooltipBackgroundColor: "#fff",
            guidelineTooltipBackgroundOpacity: 0.7,
            guidelineTooltipBorderColor: "#a9a9a9",
            guidelineTooltipBorderWidth: 1,

            // mapPathBackgroundColor : "#67B7DC",
            // mapPathBackgroundOpacity : 1,
            // mapPathBorderColor : "#fff",
            // mapPathBorderWidth : 1,
            // mapPathBorderOpacity : 1,
            // mapBubbleBackgroundOpacity : 0.5,
            // mapBubbleBorderWidth : 1,
            // mapBubbleFontSize : 11,
            // mapBubbleFontColor : "#fff",
            // mapSelectorHoverColor : "#5a73db",
            // mapSelectorActiveColor : "#CC0000",
            // mapFlightRouteAirportSmallColor : "#CC0000",
            // mapFlightRouteAirportLargeColor : "#000",
            // mapFlightRouteAirportBorderWidth : 2,
            // mapFlightRouteAirportRadius : 8,
            // mapFlightRouteLineColor : "#ff0000",
            // mapFlightRouteLineWidth : 1,
            // mapWeatherBackgroundColor : "#fff",
            // mapWeatherBorderColor : "#a9a9a9",
            // mapWeatherFontSize : 11,
            // mapWeatherTitleFontColor : "#666",
            // mapWeatherInfoFontColor : "#ff0000",
            // mapCompareBubbleMaxLineColor : "#fff",
            // mapCompareBubbleMaxLineDashArray : "2,2",
            // mapCompareBubbleMaxBorderColor : "#fff",
            // mapCompareBubbleMaxFontSize : 36,
            // mapCompareBubbleMaxFontColor : "#fff",
            // mapCompareBubbleMinBorderColor : "#ffff00",
            // mapCompareBubbleMinFontSize : 24,
            // mapCompareBubbleMinFontColor : "#000",
            // mapControlButtonColor : "#3994e2",
            // mapControlLeftButtonImage : "data:image/gif;base64,R0lGODlhCwALAPABAP///wAAACH5BAUAAAEALAAAAAALAAsAAAIQjI9poMcdXpOKTujw0pGjAgA7",
            // mapControlRightButtonImage : "data:image/gif;base64,R0lGODlhCwALAPABAP///wAAACH5BAUAAAEALAAAAAALAAsAAAIQjI8JycvonomSKhksxBqbAgA7",
            // mapControlTopButtonImage : "data:image/gif;base64,R0lGODlhCwALAPABAP///wAAACH5BAUAAAEALAAAAAALAAsAAAIQjI+pCmvd2IkzUYqw27yfAgA7",
            // mapControlBottomButtonImage : "data:image/gif;base64,R0lGODlhCwALAPABAP///wAAACH5BAUAAAEALAAAAAALAAsAAAIQjI+pyw37TDxTUhhq0q2fAgA7",
            // mapControlHomeButtonImage : "data:image/gif;base64,R0lGODlhCwALAPABAAAAAAAAACH5BAUAAAEALAAAAAALAAsAAAIZjI8ZoAffIERzMVMxm+9KvIBh6Imb2aVMAQA7",
            // mapControlUpButtonImage : "data:image/gif;base64,R0lGODlhCwALAPABAP///wAAACH5BAUAAAEALAAAAAALAAsAAAISjI8ZoMhtHpQH2HsV1TD29SkFADs=",
            // mapControlDownButtonImage : "data:image/gif;base64,R0lGODlhCwALAPABAP///wAAACH5BAUAAAEALAAAAAALAAsAAAIMjI+py+0BopSv2qsKADs=",
            // mapControlScrollColor : "#000",
            // mapControlScrollLineColor : "#fff",
            // mapMinimapBackgroundColor : "transparent",
            // mapMinimapBorderColor : "transparent",
            // mapMinimapBorderWidth : 1,
            // mapMinimapPathBackgroundColor : "#67B7DC",
            // mapMinimapPathBackgroundOpacity : 0.5,
            // mapMinimapPathBorderColor : "#67B7DC",
            // mapMinimapPathBorderWidth : 0.5,
            // mapMinimapPathBorderOpacity : 0.1,
            // mapMinimapDragBackgroundColor : "#7CC7C3",
            // mapMinimapDragBackgroundOpacity : 0.3,
            // mapMinimapDragBorderColor : "#56B4AF",
            // mapMinimapDragBorderWidth : 1,

            // Polygon Brushes
            polygonColumnBackgroundOpacity: 0.6,
            polygonColumnBorderOpacity: 0.5,
            polygonScatterRadialOpacity: 0.7,
            polygonScatterBackgroundOpacity: 0.8,
            polygonLineBackgroundOpacity: 0.6,
            polygonLineBorderOpacity: 0.7,

            // Animation Brushes
            bubbleCloudFontColor: "#fff",
            bubbleCloudFontSize: 11,
            bubbleCloudFontWeight: "bold",

            equalizerColumnErrorBackgroundColor: "#ff0000",
            equalizerColumnErrorFontColor: "#fff"
        };
    }
};

/***/ }),
/* 38 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.default = {
    name: "chart.theme.dark",
    extend: null,
    component: function component() {
        var themeColors = ["#12f2e8", "#26f67c", "#e9f819", "#b78bf9", "#f94590", "#8bccf9", "#9228e4", "#06d9b6", "#fc6d65", "#f199ff", "#c8f21d", "#16a6e5", "#00ba60", "#91f2a1", "#fc9765", "#f21d4f"];

        return {
            fontFamily: "arial,Tahoma,verdana",
            backgroundColor: "#222222",
            colors: themeColors,

            // Axis styles
            axisBackgroundColor: "#222222",
            axisBackgroundOpacity: 0,
            axisBorderColor: "#222222",
            axisBorderWidth: 0,
            axisBorderRadius: 0,

            // Grid styles
            gridXFontSize: 11,
            gridYFontSize: 11,
            gridZFontSize: 10,
            gridCFontSize: 11,
            gridXFontColor: "#868686",
            gridYFontColor: "#868686",
            gridZFontColor: "#868686",
            gridCFontColor: "#868686",
            gridXFontWeight: "normal",
            gridYFontWeight: "normal",
            gridZFontWeight: "normal",
            gridCFontWeight: "normal",
            gridXAxisBorderColor: "#464646",
            gridYAxisBorderColor: "#464646",
            gridZAxisBorderColor: "#464646",
            gridXAxisBorderWidth: 2,
            gridYAxisBorderWidth: 2,
            gridZAxisBorderWidth: 2,

            // Full 3D 전용 테마
            gridFaceBackgroundColor: "#dcdcdc",
            gridFaceBackgroundOpacity: 0.3,

            gridActiveFontColor: "#ff762d",
            gridActiveBorderColor: "#ff7800",
            gridActiveBorderWidth: 1,
            gridPatternColor: "#ababab",
            gridPatternOpacity: 0.1,
            gridBorderColor: "#868686",
            gridBorderWidth: 1,
            gridBorderDashArray: "none",
            gridBorderOpacity: 1,
            gridTickBorderSize: 3,
            gridTickBorderWidth: 1.5,
            gridTickPadding: 5,

            // Brush styles
            tooltipPointRadius: 5, // common
            tooltipPointBorderWidth: 1, // common
            tooltipPointFontWeight: "bold", // common
            tooltipPointFontSize: 11,
            tooltipPointFontColor: "#868686",
            barFontSize: 11,
            barFontColor: "#868686",
            barBorderColor: "none",
            barBorderWidth: 0,
            barBorderOpacity: 0,
            barBorderRadius: 3,
            barActiveBackgroundColor: "#fc6d65",
            barPointBorderColor: "#fff",
            barDisableBackgroundOpacity: 0.4,
            barStackEdgeBorderWidth: 1,
            rateBarFontSize: 11,
            rateBarFontColor: "#868686",
            rateBarBorderColor: "none",
            rateBarBorderWidth: 0,
            rateBarBorderOpacity: 0,
            rateBarBorderRadius: 5,
            rateBarDisableBackgroundOpacity: 0.7,
            rateBarTooltipFontSize: 10,
            rateBarTooltipFontColor: "#868686",
            rateBarTooltipBackgroundColor: "#222",
            rateBarTooltipBorderColor: "#666666",
            gaugeBackgroundColor: "#3e3e3e",
            gaugeArrowColor: "#a6a6a6",
            gaugeFontColor: "#c5c5c5",
            gaugeFontSize: 20,
            gaugeFontWeight: "bold",
            gaugeTitleFontSize: 12,
            gaugeTitleFontWeight: "normal",
            gaugeTitleFontColor: "#c5c5c5",
            gaugePaddingAngle: 2,
            bargaugeBackgroundColor: "#3e3e3e",
            bargaugeFontSize: 11,
            bargaugeFontColor: "#c5c5c5",
            pieBorderColor: "#232323",
            pieBorderWidth: 1,
            pieOuterFontSize: 11,
            pieOuterFontColor: "#868686",
            pieOuterLineColor: "#a9a9a9",
            pieOuterLineSize: 8,
            pieOuterLineRate: 1.3,
            pieOuterLineWidth: 0.7,
            pieInnerFontSize: 11,
            pieInnerFontColor: "#868686",
            pieActiveDistance: 5,
            pieNoDataBackgroundColor: "#E9E9E9",
            pieTotalValueFontSize: 36,
            pieTotalValueFontColor: "#dcdcdc",
            pieTotalValueFontWeight: "bold",
            pieDisableBackgroundOpacity: 0.5,
            areaBackgroundOpacity: 0.5,
            areaSplitBackgroundColor: "#ebebeb",
            bubbleBackgroundOpacity: 0.5,
            bubbleBorderWidth: 1,
            bubbleFontSize: 12,
            bubbleFontColor: "#868686",
            candlestickBorderColor: "#14be9d",
            candlestickBackgroundColor: "#14be9d",
            candlestickInvertBorderColor: "#ff4848",
            candlestickInvertBackgroundColor: "#ff4848",
            ohlcBorderColor: "#14be9d",
            ohlcInvertBorderColor: "#ff4848",
            ohlcBorderRadius: 5,
            lineBorderWidth: 2,
            lineBorderDashArray: "none",
            lineBorderOpacity: 1,
            lineDisableBorderOpacity: 0.3,
            linePointBorderColor: "#fff",
            lineSplitBorderColor: null,
            lineSplitBorderOpacity: 0.5,
            pathBackgroundOpacity: 0.2,
            pathBorderWidth: 1,
            scatterBorderColor: "none",
            scatterBorderWidth: 1,
            scatterHoverColor: "#222222",
            waterfallBackgroundColor: "#26f67c",
            waterfallInvertBackgroundColor: "#f94590",
            waterfallEdgeBackgroundColor: "#8bccf9",
            waterfallLineColor: "#a9a9a9",
            waterfallLineDashArray: "0.9",
            focusBorderColor: "#FF7800",
            focusBorderWidth: 1,
            focusBackgroundColor: "#FF7800",
            focusBackgroundOpacity: 0.1,
            pinFontColor: "#FF7800",
            pinFontSize: 10,
            pinBorderColor: "#FF7800",
            pinBorderWidth: 0.7,

            topologyNodeRadius: 12.5,
            topologyNodeFontSize: 14,
            topologyNodeFontColor: "#c5c5c5",
            topologyNodeTitleFontSize: 11,
            topologyNodeTitleFontColor: "#c5c5c5",
            topologyEdgeWidth: 1,
            topologyActiveEdgeWidth: 2,
            topologyHoverEdgeWidth: 2,
            topologyEdgeColor: "#b2b2b2",
            topologyActiveEdgeColor: "#905ed1",
            topologyHoverEdgeColor: "#d3bdeb",
            topologyEdgeFontSize: 10,
            topologyEdgeFontColor: "#c5c5c5",
            topologyEdgePointRadius: 3,
            topologyEdgeOpacity: 1,
            topologyTooltipBackgroundColor: "#222222",
            topologyTooltipBorderColor: "#ccc",
            topologyTooltipFontSize: 11,
            topologyTooltipFontColor: "#c5c5c5",

            timelineTitleFontSize: 11,
            timelineTitleFontColor: "#d5d5d5",
            timelineTitleFontWeight: 700,
            timelineColumnFontSize: 10,
            timelineColumnFontColor: "#d5d5d5",
            timelineColumnBackgroundColor: "#1c1c1c",
            timelineHoverRowBackgroundColor: "#2f2f2f",
            timelineEvenRowBackgroundColor: "#202020",
            timelineOddRowBackgroundColor: "#1c1c1c",
            timelineActiveBarBackgroundColor: "#6f32ba",
            timelineActiveBarFontColor: "#fff",
            timelineActiveBarFontSize: 9,
            timelineHoverBarBackgroundColor: null,
            timelineLayerBackgroundOpacity: 0.1,
            timelineActiveLayerBackgroundColor: "#7F5FA4",
            timelineActiveLayerBorderColor: "#7f5fa4",
            timelineHoverLayerBackgroundColor: "#7F5FA4",
            timelineHoverLayerBorderColor: "#7f5fa4",
            timelineVerticalLineColor: "#2f2f2f",
            timelineHorizontalLineColor: "#4d4d4d",

            // hudColumnGridPointRadius: 7,
            // hudColumnGridPointBorderColor: "#868686",
            // hudColumnGridPointBorderWidth: 2,
            // hudColumnGridFontColor: "#868686",
            // hudColumnGridFontSize: 12,
            // hudColumnGridFontWeight: "normal",
            // hudColumnLeftBackgroundColor: "#3C3C3C",
            // hudColumnRightBackgroundColor: "#838383",
            // hudBarGridFontColor: "#868686",
            // hudBarGridFontSize: 16,
            // hudBarGridLineColor: "#868686",
            // hudBarGridLineWidth: 1,
            // hudBarGridLineOpacity: 0.8,
            // hudBarGridBackgroundColor: "#868686",
            // hudBarGridBackgroundOpacity: 0.5,
            // hudBarTextLineColor: "#B2A6A6",
            // hudBarTextLineWidth: 1.5,
            // hudBarTextLinePadding: 12,
            // hudBarTextLineFontColor: "#868686",
            // hudBarTextLineFontSize: 13,
            // hudBarBackgroundOpacity: 0.6,
            // hudBarTopBackgroundColor: "#bbb",
            // hudBarBottomBackgroundColor: "#3C3C3C",

            heatmapBackgroundColor: "#222222",
            heatmapBackgroundOpacity: 1,
            heatmapHoverBackgroundOpacity: 0.2,
            heatmapBorderColor: "#fff",
            heatmapBorderWidth: 0.5,
            heatmapBorderOpacity: 1,
            heatmapFontSize: 11,
            heatmapFontColor: "#868686",

            pyramidLineColor: "#464646",
            pyramidLineWidth: 1,
            pyramidTextLineColor: "#B2A6A6",
            pyramidTextLineWidth: 1,
            pyramidTextLineSize: 30,
            pyramidTextFontSize: 10,
            pyramidTextFontColor: "#222",

            heatmapscatterBorderWidth: 0.5,
            heatmapscatterBorderColor: "#222222",
            heatmapscatterActiveBackgroundColor: "#222222",

            treemapNodeBorderWidth: 0.5,
            treemapNodeBorderColor: "#222222",
            treemapTextFontSize: 11,
            treemapTextFontColor: "#868686",
            treemapTitleFontSize: 12,
            treemapTitleFontColor: "#868686",

            arcEqualizerBorderColor: "#222222",
            arcEqualizerBorderWidth: 1,
            arcEqualizerFontSize: 13,
            arcEqualizerFontColor: "#868686",
            arcEqualizerBackgroundColor: "#222222",

            flameNodeBorderWidth: 0.5,
            flameNodeBorderColor: "#222",
            flameDisableBackgroundOpacity: 0.4,
            flameTextFontSize: 12,
            flameTextFontColor: "#868686",

            selectBoxBackgroundColor: "#fff",
            selectBoxBackgroundOpacity: 0.1,
            selectBoxBorderColor: "#fff",
            selectBoxBorderOpacity: 0.2,

            // widget styles
            titleFontColor: "#ffffff",
            titleFontSize: 14,
            titleFontWeight: "normal",
            legendFontColor: "#ffffff",
            legendFontSize: 11,
            legendSwitchCircleColor: "#fff",
            legendSwitchDisableColor: "#c8c8c8",
            tooltipFontColor: "#333333",
            tooltipFontSize: 12,
            tooltipBackgroundColor: "#fff",
            tooltipBackgroundOpacity: 1,
            tooltipBorderColor: null,
            tooltipBorderWidth: 2,
            tooltipLineColor: null,
            tooltipLineWidth: 1,
            scrollBackgroundSize: 7,
            scrollBackgroundColor: "#3e3e3e",
            scrollThumbBackgroundColor: "#666666",
            scrollThumbBorderColor: "#686868",
            zoomBackgroundColor: "#ff0000",
            zoomFocusColor: "#808080",
            zoomScrollBackgroundSize: 45,
            zoomScrollButtonSize: 18,
            zoomScrollAreaBackgroundColor: "#fff",
            zoomScrollAreaBackgroundOpacity: 0.7,
            zoomScrollAreaBorderColor: "#d4d4d4",
            zoomScrollAreaBorderWidth: 1,
            zoomScrollAreaBorderRadius: 3,
            zoomScrollGridFontSize: 10,
            zoomScrollGridTickPadding: 4,
            zoomScrollBrushAreaBackgroundOpacity: 0.7,
            zoomScrollBrushLineBorderWidth: 1,
            crossBorderColor: "#a9a9a9",
            crossBorderWidth: 1,
            crossBorderOpacity: 0.8,
            crossBalloonFontSize: 11,
            crossBalloonFontColor: "#333",
            crossBalloonBackgroundColor: "#fff",
            crossBalloonBackgroundOpacity: 1,
            dragSelectBackgroundColor: "#7BBAE7",
            dragSelectBackgroundOpacity: 0.3,
            dragSelectBorderColor: "#7BBAE7",
            dragSelectBorderWidth: 1,

            guidelineBorderColor: "#a9a9a9",
            guidelineBorderWidth: 1,
            guidelineBorderOpacity: 0.8,
            guidelineBalloonFontSize: 11,
            guidelineBalloonFontColor: "#fff",
            guidelineBalloonBackgroundColor: "#000",
            guidelineBalloonBackgroundOpacity: 0.5,
            guidelineBorderDashArray: "2,2",
            guidelinePointRadius: 3,
            guidelinePointBorderColor: "#fff",
            guidelinePointBorderWidth: 1,
            guidelineTooltipFontColor: "#333",
            guidelineTooltipFontSize: 12,
            guidelineTooltipPointRadius: 3,
            guidelineTooltipBackgroundColor: "#fff",
            guidelineTooltipBackgroundOpacity: 0.7,
            guidelineTooltipBorderColor: "#a9a9a9",
            guidelineTooltipBorderWidth: 1,

            // mapPathBackgroundColor : "#67B7DC",
            // mapPathBackgroundOpacity : 1,
            // mapPathBorderColor : "#fff",
            // mapPathBorderWidth : 1,
            // mapPathBorderOpacity : 1,
            // mapBubbleBackgroundOpacity : 0.5,
            // mapBubbleBorderWidth : 1,
            // mapBubbleFontSize : 11,
            // mapBubbleFontColor : "#868686",
            // mapSelectorHoverColor : "#5a73db",
            // mapSelectorActiveColor : "#CC0000",
            // mapFlightRouteAirportSmallColor : "#CC0000",
            // mapFlightRouteAirportLargeColor : "#000",
            // mapFlightRouteAirportBorderWidth : 2,
            // mapFlightRouteAirportRadius : 8,
            // mapFlightRouteLineColor : "#ff0000",
            // mapFlightRouteLineWidth : 1,
            // mapWeatherBackgroundColor : "#fff",
            // mapWeatherBorderColor : "#a9a9a9",
            // mapWeatherFontSize : 11,
            // mapWeatherTitleFontColor : "#666",
            // mapWeatherInfoFontColor : "#ff0000",
            // mapCompareBubbleMaxLineColor : "#fff",
            // mapCompareBubbleMaxLineDashArray : "2,2",
            // mapCompareBubbleMaxBorderColor : "#fff",
            // mapCompareBubbleMaxFontSize : 36,
            // mapCompareBubbleMaxFontColor : "#fff",
            // mapCompareBubbleMinBorderColor : "#ffff00",
            // mapCompareBubbleMinFontSize : 24,
            // mapCompareBubbleMinFontColor : "#000",
            // mapControlButtonColor : "#3994e2",
            // mapControlLeftButtonImage : "data:image/gif;base64,R0lGODlhCwALAPABAP///wAAACH5BAUAAAEALAAAAAALAAsAAAIQjI9poMcdXpOKTujw0pGjAgA7",
            // mapControlRightButtonImage : "data:image/gif;base64,R0lGODlhCwALAPABAP///wAAACH5BAUAAAEALAAAAAALAAsAAAIQjI8JycvonomSKhksxBqbAgA7",
            // mapControlTopButtonImage : "data:image/gif;base64,R0lGODlhCwALAPABAP///wAAACH5BAUAAAEALAAAAAALAAsAAAIQjI+pCmvd2IkzUYqw27yfAgA7",
            // mapControlBottomButtonImage : "data:image/gif;base64,R0lGODlhCwALAPABAP///wAAACH5BAUAAAEALAAAAAALAAsAAAIQjI+pyw37TDxTUhhq0q2fAgA7",
            // mapControlHomeButtonImage : "data:image/gif;base64,R0lGODlhCwALAPABAAAAAAAAACH5BAUAAAEALAAAAAALAAsAAAIZjI8ZoAffIERzMVMxm+9KvIBh6Imb2aVMAQA7",
            // mapControlUpButtonImage : "data:image/gif;base64,R0lGODlhCwALAPABAP///wAAACH5BAUAAAEALAAAAAALAAsAAAISjI8ZoMhtHpQH2HsV1TD29SkFADs=",
            // mapControlDownButtonImage : "data:image/gif;base64,R0lGODlhCwALAPABAP///wAAACH5BAUAAAEALAAAAAALAAsAAAIMjI+py+0BopSv2qsKADs=",
            // mapControlScrollColor : "#000",
            // mapControlScrollLineColor : "#fff",
            // mapMinimapBackgroundColor : "transparent",
            // mapMinimapBorderColor : "transparent",
            // mapMinimapBorderWidth : 1,
            // mapMinimapPathBackgroundColor : "#67B7DC",
            // mapMinimapPathBackgroundOpacity : 0.5,
            // mapMinimapPathBorderColor : "#67B7DC",
            // mapMinimapPathBorderWidth : 0.5,
            // mapMinimapPathBorderOpacity : 0.1,
            // mapMinimapDragBackgroundColor : "#7CC7C3",
            // mapMinimapDragBackgroundOpacity : 0.3,
            // mapMinimapDragBorderColor : "#56B4AF",
            // mapMinimapDragBorderWidth : 1,

            // Polygon Brushes
            polygonColumnBackgroundOpacity: 0.6,
            polygonColumnBorderOpacity: 0.5,
            polygonScatterRadialOpacity: 0.7,
            polygonScatterBackgroundOpacity: 0.8,
            polygonLineBackgroundOpacity: 0.6,
            polygonLineBorderOpacity: 0.7,

            // Animation Brushes
            bubbleCloudFontColor: "#fff",
            bubbleCloudFontSize: 11,
            bubbleCloudFontWeight: "bold",

            equalizerColumnErrorBackgroundColor: "#ff0000",
            equalizerColumnErrorFontColor: "#fff"
        };
    }
};

/***/ }),
/* 39 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.default = {
    name: "chart.widget.title",
    extend: "chart.widget.core",
    component: function component() {
        var TOP_PADDING = 25,
            PADDING = 20;

        var TitleWidget = function TitleWidget(chart, axis, widget) {
            var x = 0,
                y = 0,
                anchor = "middle";

            this.drawBefore = function () {
                var axis = chart.axis(widget.axis);

                if (axis) {
                    if (widget.orient == "bottom") {
                        y = axis.area("y2") + axis.padding("bottom") - PADDING;
                    } else if (widget.orient == "top") {
                        y = axis.area("y") - axis.padding("top") + TOP_PADDING;
                    } else {
                        y = axis.area("y") + axis.area("height") / 2;
                    }

                    if (widget.align == "middle") {
                        x = axis.area("x") + axis.area("width") / 2;
                        anchor = "middle";
                    } else if (widget.align == "start") {
                        x = axis.area("x") - axis.padding("left") + PADDING;
                        anchor = "start";
                    } else {
                        x = axis.area("x2") + axis.padding("right") - PADDING;
                        anchor = "end";
                    }

                    x += chart.area("x");
                    y += chart.area("y");
                } else {
                    // @Deprecated 나중에 제거하기 (모든 샘플 axis 기반으로 변경할 것)
                    if (widget.orient == "bottom") {
                        y = chart.area("y2") + chart.padding("bottom") - PADDING;
                    } else if (widget.orient == "top") {
                        y = PADDING;
                    } else {
                        y = chart.area("y") + chart.area("height") / 2;
                    }

                    if (widget.align == "middle") {
                        x = chart.area("x") + chart.area("width") / 2;
                        anchor = "middle";
                    } else if (widget.align == "start") {
                        x = chart.area("x");
                        anchor = "start";
                    } else {
                        x = chart.area("x2");
                        anchor = "end";
                    }
                }
            };

            this.draw = function () {
                var obj = chart.svg.getTextSize(widget.text);

                var half_text_width = obj.width / 2,
                    half_text_height = obj.height / 2;

                var text = chart.text({
                    x: x + widget.dx,
                    y: y + widget.dy,
                    "text-anchor": anchor,
                    "fill": widget.color || chart.theme("titleFontColor"),
                    "font-size": widget.size || chart.theme("titleFontSize"),
                    "font-weight": chart.theme("titleFontWeight")
                }, widget.text);

                if (widget.orient == "center") {
                    if (widget.align == "start") {
                        text.rotate(-90, x + widget.dx + half_text_width, y + widget.dy + half_text_height);
                    } else if (widget.align == "end") {
                        text.rotate(90, x + widget.dx - half_text_width, y + widget.dy + half_text_height);
                    }
                }

                return text;
            };
        };

        TitleWidget.setup = function () {
            return {
                axis: null,
                /** @cfg {"top"/"center"/"bottom" } [orient="top"]  Determines the side on which the tool tip is displayed (top, center, bottom). */
                orient: "top", // or bottom
                /** @cfg {"start"/"middle"/"end" } [align="center"] Aligns the title message (start, middle, end).*/
                align: "middle",
                /** @cfg {String} [text=""] Sets the title message. */
                text: "",
                /** @cfg {Number} [dx=0] Moves the x coordinate by a set value from the location where the chart is drawn.  */
                dx: 0,
                /** @cfg {Number} [dy=0] Moves the y coordinate by a set value from the location where the chart is drawn. */
                dy: 0,
                /** @cfg {Number} [size=null] Sets the title message size. */
                size: null,
                /** @cfg {String} [string=null] Sets the title message color. */
                color: null
            };
        };

        return TitleWidget;
    }
};

/***/ }),
/* 40 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});

var _main = __webpack_require__(0);

var _main2 = _interopRequireDefault(_main);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

exports.default = {
    name: "chart.widget.legend",
    extend: "chart.widget.core",
    component: function component() {
        var _ = _main2.default.include("util.base");
        var WIDTH = 17,
            HEIGHT = 13,
            PADDING = 5,
            RADIUS = 5.5,
            RATIO = 1.2,
            POINT = 2;

        var LegendWidget = function LegendWidget(chart, axis, widget) {
            var columns = [];
            var colorIndex = {};

            function getIndexArray(brush) {
                var list = [0];

                if (_.typeCheck("array", brush)) {
                    list = brush;
                } else if (_.typeCheck("integer", brush)) {
                    list = [brush];
                }

                return list;
            }

            function getBrushAll() {
                var list = getIndexArray(widget.brush),
                    result = [];

                for (var i = 0; i < list.length; i++) {
                    result[i] = chart.get("brush", list[i]);
                }

                return result;
            }

            function setLegendStatus(brush) {
                if (!widget.filter) return;

                if (!columns[brush.index]) {
                    columns[brush.index] = {};
                }

                for (var i = 0; i < brush.target.length; i++) {
                    columns[brush.index][brush.target[i]] = true;
                }
            }

            function changeTargetOption(brushList) {
                var target = [],
                    colors = [],
                    index = brushList[0].index;

                for (var key in columns[index]) {
                    if (columns[index][key]) {
                        target.push(key);
                        colors.push(colorIndex[key]);
                    }
                }

                for (var i = 0; i < brushList.length; i++) {
                    chart.updateBrush(brushList[i].index, {
                        target: target,
                        colors: colors
                    });
                }

                // 차트 렌더링이 활성화되지 않았을 경우
                if (!chart.isRender()) {
                    chart.render();
                }

                chart.setCache("legend_target", target);
                chart.emit("legend.filter", [target]);
            }

            this.getLegendIcon = function (brush) {
                var arr = [],
                    data = brush.target,
                    count = data.length;

                for (var i = 0; i < count; i++) {
                    var group = chart.svg.group(),
                        target = brush.target[i],
                        text = target,
                        color = chart.color(i, widget.colors || brush.colors);

                    // 컬러 인덱스 설정
                    colorIndex[target] = color;

                    // 타겟 별 포맷 설정
                    if (_.typeCheck("function", widget.format)) {
                        text = this.format(target);
                    }

                    // 텍스트 길이 구하기
                    var rect = chart.svg.getTextSize(text, {
                        fontSize: chart.theme('legendFontSize')
                    });

                    if (widget.filter) {
                        group.append(chart.svg.line({
                            x1: 0,
                            x2: WIDTH,
                            y1: -(RADIUS / 2),
                            y2: -(RADIUS / 2),
                            stroke: color,
                            "stroke-width": HEIGHT,
                            "stroke-linecap": "round"
                        }));

                        group.append(chart.svg.circle({
                            cx: WIDTH,
                            cy: -(RADIUS / 2),
                            r: RADIUS,
                            fill: chart.theme("legendSwitchCircleColor")
                        }));

                        group.append(chart.text({
                            x: WIDTH + PADDING * 2,
                            y: 0,
                            "font-size": chart.theme("legendFontSize"),
                            "fill": chart.theme("legendFontColor"),
                            "text-anchor": "start"
                        }, text));

                        arr.push({
                            icon: group,
                            width: WIDTH + rect.width + PADDING * 2.5,
                            height: HEIGHT + PADDING / 2
                        });

                        (function (key, element) {
                            element.attr({
                                cursor: "pointer"
                            });

                            element.on("click", function (e) {
                                if (columns[brush.index][key]) {
                                    element.get(0).attr({ stroke: chart.theme("legendSwitchDisableColor") });
                                    element.get(2).attr({ fill: chart.theme("legendSwitchDisableColor") });
                                    element.get(1).attr({ cx: 0 });
                                    columns[brush.index][key] = false;
                                } else {
                                    element.get(0).attr({ stroke: colorIndex[key] });
                                    element.get(2).attr({ fill: chart.theme("legendFontColor") });
                                    element.get(1).attr({ cx: WIDTH });
                                    columns[brush.index][key] = true;
                                }

                                changeTargetOption(widget.brushSync ? getBrushAll() : [brush]);
                            });
                        })(target, group);
                    } else {
                        var size = chart.theme("legendFontSize");

                        if (widget.icon != null) {
                            var icon = _.typeCheck("function", widget.icon) ? widget.icon.apply(chart, [target]) : widget.icon;

                            group.append(chart.text({
                                x: 0,
                                y: POINT,
                                "font-size": size,
                                "fill": color
                            }, icon));
                        } else {
                            group.append(chart.svg.circle({
                                cx: size / 2,
                                cy: -POINT,
                                r: size / 2,
                                fill: color
                            }));
                        }

                        group.append(chart.text({
                            x: size * RATIO,
                            y: 0,
                            "font-size": size,
                            "fill": chart.theme("legendFontColor"),
                            "text-anchor": "start"
                        }, text));

                        arr.push({
                            icon: group,
                            width: size + rect.width + PADDING * 2,
                            height: HEIGHT + PADDING / 2
                        });
                    }
                }

                return arr;
            };

            this.draw = function () {
                var group = chart.svg.group();

                var x = 0,
                    y = 0,
                    total_width = 0,
                    total_height = 0,
                    max_width = 0,
                    max_height = 0,
                    brushes = getIndexArray(widget.brush);

                var total_widthes = [];

                for (var i = 0; i < brushes.length; i++) {
                    var index = brushes[i];

                    // brushSync가 true일 경우, 한번만 실행함
                    if (widget.brushSync && i > 0) continue;

                    var brush = chart.get("brush", index),
                        arr = this.getLegendIcon(brush);

                    for (var k = 0; k < arr.length; k++) {
                        group.append(arr[k].icon);
                        arr[k].icon.translate(x, y);

                        if (widget.orient == "bottom" || widget.orient == "top") {

                            if (x + arr[k].width > chart.area("x2")) {
                                x = 0;
                                y += arr[k].height;
                                max_height += arr[k].height;
                                arr[k].icon.translate(x, y); // HERE
                                total_widthes.push(total_width);
                                total_width = 0;
                            }

                            // @thanks to canelia04
                            x += arr[k].width + PADDING * 2.5;
                            total_width += arr[k].width + PADDING * 2.5;

                            if (max_height < arr[k].height) {
                                max_height = arr[k].height;
                            }
                        } else {
                            y += arr[k].height;
                            total_height += arr[k].height;

                            if (max_width < arr[k].width) {
                                max_width = arr[k].width;
                            }
                        }
                    }

                    if (total_width > 0) {
                        total_widthes.push(total_width);
                    }

                    if (total_widthes.length > 0) {
                        total_width = Math.max.apply(Math, total_widthes);
                    }

                    setLegendStatus(brush);
                }

                // legend 위치  선정
                if (widget.orient == "bottom" || widget.orient == "top") {
                    var y = (widget.orient == "bottom" ? chart.area("y2") + chart.padding("bottom") - max_height : chart.area("y") - chart.padding("top")) + PADDING;

                    if (widget.align == "start") {
                        x = chart.area("x");
                    } else if (widget.align == "center") {
                        x = chart.area("x") + (chart.area("width") / 2 - total_width / 2);
                    } else if (widget.align == "end") {
                        x = chart.area("x2") - total_width;
                    }
                } else {
                    var x = (widget.orient == "left" ? chart.area("x") - chart.padding("left") : chart.area("x2") + chart.padding("right") - max_width) + PADDING;

                    if (widget.align == "start") {
                        y = chart.area("y");
                    } else if (widget.align == "center") {
                        y = chart.area("y") + (chart.area("height") / 2 - total_height / 2);
                    } else if (widget.align == "end") {
                        y = chart.area("y2") - total_height;
                    }
                }

                group.translate(Math.floor(x) + widget.dx, Math.floor(y) + widget.dy);

                return group;
            };
        };

        LegendWidget.setup = function () {
            return {
                /** @cfg {"bottom"/"top"/"left"/"right" } Sets the location where the label is displayed (top, bottom). */
                orient: "bottom",
                /** @cfg {"start"/"center"/"end" } Aligns the label (center, start, end). */
                align: "center", // or start, end
                /** @cfg {Boolean} [filter=false] Performs filtering so that only label(s) selected by the brush can be shown. */
                filter: false,
                /** @cfg {Function/String} [icon=null]   */
                icon: null,
                /** @cfg {Number} [dx=0] Moves the x coordinate by a set value from the location where the chart is drawn.  */
                dx: 0,
                /** @cfg {Number} [dy=0] Moves the y coordinate by a set value from the location where the chart is drawn. */
                dy: 0,
                /** @cfg {Array} [colors=null]   */
                colors: null,
                /** @cfg {Boolean} [brushSync=false] Applies all brushes equally when using a filter function. */
                brushSync: false,
                /** @cfg {Number/Array} [brush=0] Specifies a brush index for which a widget is used. */
                brush: 0,
                /** @cfg {Function} [format=null] Sets the format of the key that is displayed on the legend. */
                format: null
            };
        };

        /**
         * @event legend_filter
         * Event that occurs when the filter function of the legend widget is activated. (real name ``` legend.filter ```)
         * @param {String} target The selected data field.
         */

        return LegendWidget;
    }
};

/***/ }),
/* 41 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});

var _main = __webpack_require__(0);

var _main2 = _interopRequireDefault(_main);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

exports.default = {
    name: "chart.widget.tooltip",
    extend: "chart.widget.core",
    component: function component() {
        var _ = _main2.default.include("util.base");
        var ColorUtil = _main2.default.include("util.color");
        var PADDING = 7,
            ANCHOR = 7,
            RATIO = 1.2;

        var TooltipWidget = function TooltipWidget(chart, axis, widget) {
            var self = this,
                tooltips = {},
                lineHeight = 0;

            function getFormat(k, d) {
                var key = null,
                    value = null;

                if (_.typeCheck("function", widget.format)) {
                    var obj = self.format(d, k);

                    if (_.typeCheck("object", obj)) {
                        key = obj.key;
                        value = obj.value;
                    } else {
                        value = obj;
                    }
                } else {
                    if (k && !d) {
                        value = k;
                    }

                    if (k && d) {
                        key = k;
                        value = self.format(d[k]);
                    }
                }

                return {
                    key: key,
                    value: value
                };
            }

            function printTooltip(obj) {
                var tooltip = tooltips[obj.brush.index],
                    texts = tooltip.get(1).get(1),
                    width = 0,
                    height = 0,
                    onlyValue = false;

                if (obj.dataKey && widget.all === false) {
                    setTextInTooltip([obj.dataKey]);
                } else {
                    setTextInTooltip(obj.brush.target);
                }

                function setTextInTooltip(targets) {
                    for (var i = 0; i < targets.length; i++) {
                        var key = targets[i],
                            msg = getFormat(key, obj.data);

                        texts.get(i).attr({ x: PADDING });

                        if (msg.key) {
                            texts.get(i).get(0).text(msg.key);
                        } else {
                            texts.get(i).get(1).attr({ "text-anchor": "middle" });
                            onlyValue = true;
                        }

                        if (!_.typeCheck(["null", "undefined"], msg.value)) {
                            texts.get(i).get(1).attr({ x: 0 }).text(msg.value);
                        }

                        width = Math.max(width, texts.get(i).size().width);
                    }

                    height = targets.length * lineHeight;
                }

                return {
                    width: width + PADDING * 3,
                    height: height + PADDING,
                    onlyValue: onlyValue
                };
            }

            function existBrush(index) {
                var list = self.getIndexArray(self.widget.brush);

                return _.inArray(index, list) == -1 ? false : true;
            }

            function getColorByKey(obj) {
                var targets = obj.brush.target;

                for (var i = 0; i < targets.length; i++) {
                    if (targets[i] == obj.dataKey) {
                        return ColorUtil.lighten(self.chart.color(i, obj.brush.colors));
                    }
                }

                return null;
            }

            function getTooltipXY(e, size, orient) {
                var x = e.bgX - size.width / 2,
                    y = e.bgY - size.height - ANCHOR - PADDING / 2,
                    lineX = 2;

                if (orient == "left" || orient == "right") {
                    y = e.bgY - size.height / 2 - PADDING / 2;
                }

                if (orient == "left") {
                    x = e.bgX - size.width - ANCHOR;
                } else if (orient == "right") {
                    x = e.bgX + ANCHOR;
                    lineX = -2;
                } else if (orient == "bottom") {
                    y = e.bgY + ANCHOR * 2;
                }

                return {
                    x: x,
                    y: y,
                    c: lineX
                };
            }

            function setTooltipEvent() {
                var isActive = false,
                    size = null,
                    orient = null,
                    axis = null;

                self.on("mouseover", function (obj, e) {
                    if (isActive || !existBrush(obj.brush.index)) return;
                    if (!obj.dataKey && !obj.data) return;

                    // 툴팁 크기 가져오기
                    size = printTooltip(obj);
                    orient = widget.orient;
                    axis = chart.axis(obj.brush.axis);

                    // 툴팁 좌표 가져오기
                    var xy = getTooltipXY(e, size, orient),
                        x = xy.x - chart.padding("left"),
                        y = xy.y - chart.padding("top");

                    // 엑시스 범위를 넘었을 경우 처리
                    if (widget.flip) {
                        if (orient == "left" && x < 0) {
                            orient = "right";
                        } else if (orient == "right" && x + size.width > axis.area("width")) {
                            orient = "left";
                        } else if (orient == "top" && y < 0) {
                            orient = "bottom";
                        } else if (orient == "bottom" && y + size.height > axis.area("height")) {
                            orient = "top";
                        }
                    }

                    // 툴팁 엘리먼트 가져오기
                    var tooltip = tooltips[obj.brush.index],
                        line = tooltip.get(0),
                        target = tooltip.get(1),
                        rect = tooltip.get(1).get(0),
                        text = tooltip.get(1).get(1).translate(0, orient != "bottom" ? lineHeight : lineHeight + ANCHOR),
                        borderColor = chart.theme("tooltipBorderColor") || getColorByKey(obj),
                        lineColor = chart.theme("tooltipLineColor") || getColorByKey(obj);

                    rect.attr({
                        points: self.balloonPoints(orient, size.width, size.height, widget.anchor ? ANCHOR : null),
                        stroke: borderColor
                    });
                    line.attr({ stroke: lineColor });
                    text.each(function (i, elem) {
                        elem.get(1).attr({ x: size.onlyValue ? size.width / 2 : size.width - PADDING });
                    });
                    tooltip.attr({ visibility: "visible" });
                    target.translate(xy.x, xy.y);

                    isActive = true;
                });

                self.on("mousemove", function (obj, e) {
                    if (!isActive) return;

                    var tooltip = tooltips[obj.brush.index],
                        line = tooltip.get(0),
                        target = tooltip.get(1),
                        xy = getTooltipXY(e, size, orient);

                    line.attr({
                        x1: e.bgX + xy.c,
                        y1: chart.padding("top") + axis.area("y"),
                        x2: e.bgX + xy.c,
                        y2: chart.padding("top") + axis.area("y2")
                    });

                    target.translate(xy.x, xy.y);
                });

                self.on("mouseout", function (obj, e) {
                    if (!isActive) return;

                    var tooltip = tooltips[obj.brush.index];
                    tooltip.attr({ visibility: "hidden" });

                    isActive = false;
                });
            }

            this.drawBefore = function () {
                lineHeight = chart.theme("tooltipFontSize") * RATIO;
            };

            this.draw = function () {
                var group = chart.svg.group(),
                    list = this.getIndexArray(this.widget.brush);

                for (var i = 0; i < list.length; i++) {
                    var brush = chart.get("brush", list[i]),
                        words = [""];

                    // 모든 타겟을 툴팁에 보여주는 옵션일 경우
                    if (widget.all && brush.target.length > 1) {
                        for (var j = 1; j < brush.target.length; j++) {
                            words.push("");
                        }
                    }

                    tooltips[brush.index] = chart.svg.group({ visibility: "hidden" }, function () {
                        chart.svg.line({
                            "stroke-width": chart.theme("tooltipLineWidth"),
                            visibility: widget.line ? "visible" : "hidden"
                        });

                        chart.svg.group({}, function () {
                            chart.svg.polygon({
                                fill: chart.theme("tooltipBackgroundColor"),
                                "fill-opacity": chart.theme("tooltipBackgroundOpacity"),
                                "stroke-width": chart.theme("tooltipBorderWidth")
                            });

                            var text = chart.texts({
                                "font-size": chart.theme("tooltipFontSize"),
                                "fill": chart.theme("tooltipFontColor")
                            }, words, RATIO);

                            for (var i = 0; i < words.length; i++) {
                                text.get(i).append(chart.svg.tspan({ "text-anchor": "start", "font-weight": "bold", "x": PADDING }));
                                text.get(i).append(chart.svg.tspan({ "text-anchor": "end" }));
                            }
                        });
                    });

                    group.append(tooltips[brush.index]);
                }

                setTooltipEvent();

                return group;
            };
        };

        TooltipWidget.setup = function () {
            return {
                /** @cfg {"bottom"/"top"/"left"/"right"} Determines the side on which the tool tip is displayed (top, bottom, left, right). */
                orient: "top",
                /** @cfg {Boolean} [anchor=true] Remove tooltip's anchor */
                anchor: true,
                /** @cfg {Boolean} [all=false] Determines whether to show all values of row data.*/
                all: false,
                /** @cfg {Boolean} [line=false] Visible Guidelines. */
                line: false,
                /** @cfg {Boolean} [flip=false] When I went out of the area, reversing the tooltip. */
                flip: false,
                /** @cfg {Function} [format=null] Sets the format of the value that is displayed on the tool tip. */
                format: null,
                /** @cfg {Number} [brush=0] Specifies a brush index for which a widget is used. */
                brush: 0
            };
        };

        return TooltipWidget;
    }
};

/***/ }),
/* 42 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});

var _main = __webpack_require__(0);

var _main2 = _interopRequireDefault(_main);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

exports.default = {
    name: "chart.widget.cross",
    extend: "chart.widget.core",
    component: function component() {
        var _ = _main2.default.include("util.base");

        var CrossWidget = function CrossWidget(chart, axis, widget) {
            var self = this;
            var tw = 50,
                th = 18,
                ta = tw / 10; // 툴팁 넓이, 높이, 앵커 크기
            var pl = 0,
                pt = 0; // 엑시스까지의 여백
            var g, xline, yline, xTooltip, yTooltip;
            var tspan = [];

            function printTooltip(index, text, message) {
                if (!tspan[index]) {
                    var elem = document.createElementNS("http://www.w3.org/2000/svg", "tspan");
                    text.element.appendChild(elem);
                    tspan[index] = elem;
                }

                tspan[index].textContent = message;
            }

            this.drawBefore = function () {
                // 위젯 옵션에 따라 엑시스 변경
                axis = this.chart.axis(widget.axis);

                // 엑시스 여백 값 가져오기
                pl = chart.padding("left") + axis.area("x");
                pt = chart.padding("top") + axis.area("y");

                g = chart.svg.group({
                    visibility: "hidden"
                }, function () {
                    // 포맷 옵션이 없을 경우, 툴팁을 생성하지 않음
                    if (_.typeCheck("function", widget.yFormat)) {
                        xline = chart.svg.line({
                            x1: 0,
                            y1: 0,
                            x2: axis.area("width"),
                            y2: 0,
                            stroke: chart.theme("crossBorderColor"),
                            "stroke-width": chart.theme("crossBorderWidth"),
                            opacity: chart.theme("crossBorderOpacity")
                        });

                        yTooltip = chart.svg.group({}, function () {
                            chart.svg.polygon({
                                fill: chart.theme("crossBalloonBackgroundColor"),
                                "fill-opacity": chart.theme("crossBalloonBackgroundOpacity"),
                                points: self.balloonPoints("left", tw, th, ta)
                            });

                            chart.text({
                                "font-size": chart.theme("crossBalloonFontSize"),
                                "fill": chart.theme("crossBalloonFontColor"),
                                "text-anchor": "middle",
                                x: tw / 2,
                                y: 12
                            });
                        }).translate(-(tw + ta), 0);
                    }

                    if (_.typeCheck("function", widget.xFormat)) {
                        yline = chart.svg.line({
                            x1: 0,
                            y1: 0,
                            x2: 0,
                            y2: axis.area("height"),
                            stroke: chart.theme("crossBorderColor"),
                            "stroke-width": chart.theme("crossBorderWidth"),
                            opacity: chart.theme("crossBorderOpacity")
                        });

                        xTooltip = chart.svg.group({}, function () {
                            chart.svg.polygon({
                                fill: chart.theme("crossBalloonBackgroundColor"),
                                "fill-opacity": chart.theme("crossBalloonBackgroundOpacity"),
                                points: self.balloonPoints("bottom", tw, th, ta)
                            });

                            chart.text({
                                "font-size": chart.theme("crossBalloonFontSize"),
                                "fill": chart.theme("crossBalloonFontColor"),
                                "text-anchor": "middle",
                                x: tw / 2,
                                y: 17
                            });
                        }).translate(0, axis.area("height") + ta);
                    }
                }).translate(pl, pt);
            };

            this.draw = function () {
                this.on("axis.mouseover", function (e) {
                    g.attr({ visibility: "visible" });
                }, widget.axis);

                this.on("axis.mouseout", function (e) {
                    g.attr({ visibility: "hidden" });
                }, widget.axis);

                this.on("axis.mousemove", function (e) {
                    g.attr({ visibility: "visible" });
                    var offset = 3;

                    var left = e.bgX - pl + offset,
                        top = e.bgY - pt + offset;

                    if (xline) {
                        xline.attr({
                            y1: top,
                            y2: top
                        });
                    }

                    if (yline) {
                        yline.attr({
                            x1: left,
                            x2: left
                        });
                    }

                    // 포맷 옵션이 없을 경우, 처리하지 않음
                    if (yTooltip) {
                        yTooltip.translate(-(tw + ta), top - th / 2);

                        var value = axis.y.invert(e.chartY + offset),
                            message = widget.yFormat.call(self.chart, value);
                        printTooltip(0, yTooltip.get(1), message);
                    }

                    if (xTooltip) {
                        xTooltip.translate(left - tw / 2, axis.area("height") + ta);

                        var value = axis.x.invert(e.chartX + offset),
                            message = widget.xFormat.call(self.chart, value);
                        printTooltip(1, xTooltip.get(1), message);
                    }
                }, widget.axis);

                return g;
            };
        };

        CrossWidget.setup = function () {
            return {
                axis: 0,

                /**
                 * @cfg {Function} [xFormat=null] Sets the format for the value on the X axis shown on the tooltip.
                 */
                xFormat: null,
                /**
                 * @cfg {Function} [yFormat=null] Sets the format for the value on the Y axis shown on the tooltip.
                 */
                yFormat: null
            };
        };

        return CrossWidget;
    }
};

/***/ }),
/* 43 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.default = {
    name: "chart.brush.focus",
    extend: "chart.brush.core",
    component: function component() {
        var FocusBrush = function FocusBrush() {
            var self = this;
            var g = void 0,
                grid = void 0;

            this.drawFocus = function (start, end) {
                var borderColor = this.chart.theme("focusBorderColor"),
                    borderSize = this.chart.theme("focusBorderWidth"),
                    bgColor = this.chart.theme("focusBackgroundColor"),
                    bgOpacity = this.chart.theme("focusBackgroundOpacity");

                var width = this.axis.area("width"),
                    height = this.axis.area("height"),
                    x = this.axis.area("x"),
                    y = this.axis.area("y");

                g = this.svg.group({}, function () {
                    if (self.brush.hide || self.axis.data.length == 0) return;

                    var a = self.svg.line({
                        stroke: borderColor,
                        "stroke-width": borderSize,
                        x1: 0,
                        y1: 0,
                        x2: grid == "x" ? 0 : width,
                        y2: grid == "x" ? height : 0
                    });

                    var b = self.svg.rect({
                        width: grid == "x" ? Math.abs(end - start) : width,
                        height: grid == "x" ? height : Math.abs(end - start),
                        fill: bgColor,
                        opacity: bgOpacity
                    });

                    var c = self.svg.line({
                        stroke: borderColor,
                        "stroke-width": borderSize,
                        x1: 0,
                        y1: 0,
                        x2: grid == "x" ? 0 : width,
                        y2: grid == "x" ? height : 0
                    });

                    if (grid == "x") {
                        a.translate(start, y);
                        b.translate(start, y);
                        c.translate(end, y);
                    } else {
                        a.translate(x, start);
                        b.translate(x, start);
                        c.translate(x, end);
                    }
                });

                return g;
            };

            this.drawBefore = function () {
                grid = this.axis.y.type == "range" ? "x" : "y";
            };

            this.draw = function () {
                var start = 0,
                    end = 0;

                if (this.brush.start == -1 || this.brush.end == -1) {
                    return this.svg.g();
                }

                if (this.axis[grid].type == "block") {
                    var size = this.axis[grid].rangeBand();

                    start = this.axis[grid](this.brush.start) - size / 2;
                    end = this.axis[grid](this.brush.end) + size / 2;
                } else {
                    start = this.axis[grid](this.brush.start);
                    end = this.axis[grid](this.brush.end);
                }

                return this.drawFocus(start, end);
            };
        };

        FocusBrush.setup = function () {
            return {
                /** @cfg {Integer} [start=-1] Sets a focus start index.*/
                start: -1,

                /** @cfg {Integer} [end=-1] Sets a focus end index. */
                end: -1
            };
        };

        return FocusBrush;
    }
};

/***/ }),
/* 44 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});

var _core = __webpack_require__(1);

var _core2 = _interopRequireDefault(_core);

var _watch = __webpack_require__(2);

var _watch2 = _interopRequireDefault(_watch);

var _created = __webpack_require__(3);

var _created2 = _interopRequireDefault(_created);

var _mounted = __webpack_require__(6);

var _mounted2 = _interopRequireDefault(_mounted);

var _props = __webpack_require__(4);

var _props2 = _interopRequireDefault(_props);

var _propsBlock3d = __webpack_require__(25);

var _propsBlock3d2 = _interopRequireDefault(_propsBlock3d);

var _methods = __webpack_require__(5);

var _methods2 = _interopRequireDefault(_methods);

var _methodsBlock3d = __webpack_require__(26);

var _methodsBlock3d2 = _interopRequireDefault(_methodsBlock3d);

var _juijsChart = __webpack_require__(0);

var _juijsChart2 = _interopRequireDefault(_juijsChart);

var _column3d = __webpack_require__(45);

var _column3d2 = _interopRequireDefault(_column3d);

var _rotate3d = __webpack_require__(27);

var _rotate3d2 = _interopRequireDefault(_rotate3d);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

_juijsChart2.default.use(_column3d2.default, _rotate3d2.default);

exports.default = {
    name: 'graph-bar3d',
    mixins: [_core2.default, _watch2.default, _created2.default, _mounted2.default, _props2.default, _propsBlock3d2.default, _methods2.default, _methodsBlock3d2.default],
    props: {
        names: {
            type: Array,
            required: true
        },
        barPadding: {
            type: Number,
            required: false,
            default: 20
        }
    },
    beforeMount: function beforeMount() {
        this.brushes = [{
            type: 'polygon.column3d',
            colors: this.colors,
            padding: this.barPadding
        }];
    }
};

/***/ }),
/* 45 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});

var _main = __webpack_require__(0);

var _main2 = _interopRequireDefault(_main);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

exports.default = {
    name: "chart.brush.polygon.column3d",
    extend: "chart.brush.polygon.core",
    component: function component() {
        var ColorUtil = _main2.default.include("util.color");
        var CubePolygon = _main2.default.include("chart.polygon.cube");

        var PolygonColumn3DBrush = function PolygonColumn3DBrush() {
            var col_width, col_height;

            this.createColumn = function (data, target, dataIndex, targetIndex) {
                var w = col_width,
                    h = col_height,
                    x = this.axis.x(dataIndex) - w / 2,
                    y = this.axis.y(data[target]),
                    yy = this.axis.y(0),
                    z = this.axis.z(targetIndex) - h / 2,
                    color = this.color(targetIndex);

                return this.createPolygon(new CubePolygon(x, yy, z, w, y - yy, h), function (p) {
                    var g = this.svg.group();

                    for (var i = 0; i < p.faces.length; i++) {
                        var key = p.faces[i];

                        var face = this.svg.polygon({
                            fill: color,
                            "fill-opacity": this.chart.theme("polygonColumnBackgroundOpacity"),
                            stroke: ColorUtil.darken(color, this.chart.theme("polygonColumnBorderOpacity")),
                            "stroke-opacity": this.chart.theme("polygonColumnBorderOpacity")
                        });

                        for (var j = 0; j < key.length; j++) {
                            var vector = p.vectors[key[j]];
                            face.point(vector.x, vector.y);
                        }

                        g.append(face);
                    }

                    if (data[target] != 0) {
                        this.addEvent(g, dataIndex, targetIndex);
                    }

                    return g;
                });
            };

            this.drawBefore = function () {
                var padding = this.brush.padding,
                    width = this.axis.x.rangeBand(),
                    height = this.axis.z.rangeBand();

                col_width = this.brush.width > 0 ? this.brush.width : width - padding * 2;
                col_height = this.brush.height > 0 ? this.brush.height : height - padding * 2;
            };

            this.draw = function () {
                var g = this.chart.svg.group(),
                    datas = this.listData(),
                    targets = this.brush.target;

                for (var i = 0; i < datas.length; i++) {
                    for (var j = 0; j < targets.length; j++) {
                        g.append(this.createColumn(datas[i], targets[j], i, j));
                    }
                }

                return g;
            };
        };

        PolygonColumn3DBrush.setup = function () {
            return {
                /** @cfg {Number} [width=50]  Determines the size of a starter. */
                width: 0,
                /** @cfg {Number} [height=50]  Determines the size of a starter. */
                height: 0,
                /** @cfg {Number} [padding=20] Determines the outer margin of a bar.  */
                padding: 20,
                /** @cfg {Boolean} [clip=false] If the brush is drawn outside of the chart, cut the area. */
                clip: false
            };
        };

        return PolygonColumn3DBrush;
    }
};

/***/ }),
/* 46 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});

var _core = __webpack_require__(1);

var _core2 = _interopRequireDefault(_core);

var _watch = __webpack_require__(2);

var _watch2 = _interopRequireDefault(_watch);

var _created = __webpack_require__(3);

var _created2 = _interopRequireDefault(_created);

var _mounted = __webpack_require__(6);

var _mounted2 = _interopRequireDefault(_mounted);

var _props = __webpack_require__(4);

var _props2 = _interopRequireDefault(_props);

var _propsBlock = __webpack_require__(7);

var _propsBlock2 = _interopRequireDefault(_propsBlock);

var _methods = __webpack_require__(5);

var _methods2 = _interopRequireDefault(_methods);

var _methodsBlock = __webpack_require__(8);

var _methodsBlock2 = _interopRequireDefault(_methodsBlock);

var _juijsChart = __webpack_require__(0);

var _juijsChart2 = _interopRequireDefault(_juijsChart);

var _bar = __webpack_require__(9);

var _bar2 = _interopRequireDefault(_bar);

var _stackbar = __webpack_require__(15);

var _stackbar2 = _interopRequireDefault(_stackbar);

var _fullstackbar = __webpack_require__(28);

var _fullstackbar2 = _interopRequireDefault(_fullstackbar);

var _column = __webpack_require__(24);

var _column2 = _interopRequireDefault(_column);

var _stackcolumn = __webpack_require__(47);

var _stackcolumn2 = _interopRequireDefault(_stackcolumn);

var _fullstackcolumn = __webpack_require__(48);

var _fullstackcolumn2 = _interopRequireDefault(_fullstackcolumn);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

_juijsChart2.default.use(_bar2.default, _stackbar2.default, _fullstackbar2.default, _column2.default, _stackcolumn2.default, _fullstackcolumn2.default);

exports.default = {
    name: 'graph-stackbar',
    mixins: [_core2.default, _watch2.default, _created2.default, _mounted2.default, _props2.default, _propsBlock2.default, _methods2.default, _methodsBlock2.default],
    props: {
        fixedSize: {
            type: Number,
            required: false,
            default: 0
        },
        barMargin: {
            type: Number,
            required: false,
            default: 2
        },
        barPadding: {
            type: Number,
            required: false,
            default: 1
        },
        activeIndex: {
            type: Number,
            required: false
        },
        activeEvent: {
            type: String, // "click", "dblclick", ...
            required: false
        },
        display: { // "max", "min", "all"
            type: String,
            required: false
        },
        connectedLine: {
            type: Boolean,
            required: false,
            default: false
        },
        fullMode: {
            type: Boolean,
            required: false,
            default: false
        },
        showText: {
            type: Boolean,
            required: false,
            default: false
        }
    },
    watch: {
        activeIndex: function activeIndex(newVal, oldVal) {
            if (newVal == oldVal) return;

            this.chart.updateBrush(0, { active: newVal });
            this.chart.render();
        }
    },
    methods: {
        getAxisMinAndMax: function getAxisMinAndMax() {
            var min = this.axisMin;
            var max = this.axisMax;

            if (min != max) {
                return [min, max];
            }

            return function (data) {
                return Object.values(data).reduce(function (a, b) {
                    return a + b;
                }, 0);
            };
        }
    },
    beforeMount: function beforeMount() {
        var brushName = this.axisReverse ? 'stackbar' : 'stackcolumn';

        this.brushes = [{
            type: this.fullMode ? 'full' + brushName : brushName,
            clip: this.clip,
            colors: this.colors,
            active: this.activeIndex,
            activeEvent: this.activeEvent,
            display: this.display,
            size: this.fixedSize,
            outerPadding: this.barMargin,
            innerPadding: this.barPadding,
            edge: this.connectedLine
        }];

        if (this.fullMode) {
            this.brushes[0].showText = this.showText;
        }
    }
};

/***/ }),
/* 47 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});

var _main = __webpack_require__(0);

var _main2 = _interopRequireDefault(_main);

var _stackbar = __webpack_require__(15);

var _stackbar2 = _interopRequireDefault(_stackbar);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

_main2.default.use(_stackbar2.default);

exports.default = {
    name: "chart.brush.stackcolumn",
    extend: "chart.brush.stackbar",
    component: function component() {
        var _ = _main2.default.include("util.base");

        var StackColumnBrush = function StackColumnBrush(chart, axis, brush) {
            var g, zeroY, bar_width;

            this.getTargetSize = function () {
                var width = this.axis.x.rangeBand();

                if (this.brush.size > 0) {
                    return this.brush.size;
                } else {
                    var size = width - this.brush.outerPadding * 2;
                    return size < this.brush.minSize ? this.brush.minSize : size;
                }
            };

            this.drawBefore = function () {
                g = chart.svg.group();
                zeroY = axis.y(0);
                bar_width = this.getTargetSize();

                this.stackTooltips = [];
                this.tooltipIndexes = [];
                this.edgeData = [];
            };

            this.draw = function () {
                var maxIndex = null,
                    maxValue = 0,
                    minIndex = null,
                    minValue = this.axis.y.max(),
                    isReverse = this.axis.get("y").reverse;

                this.eachData(function (data, i) {
                    var group = chart.svg.group();

                    var offsetX = this.offset("x", i),
                        startX = offsetX - bar_width / 2,
                        startY = axis.y(0),
                        value = 0,
                        sumValue = 0;

                    for (var j = 0; j < brush.target.length; j++) {
                        var yValue = data[brush.target[j]] + value,
                            endY = axis.y(yValue),
                            opts = {
                            x: startX,
                            y: startY > endY ? endY : startY,
                            width: bar_width,
                            height: Math.abs(startY - endY)
                        },
                            r = this.getBarElement(i, j).attr(opts);

                        if (!this.edgeData[i]) {
                            this.edgeData[i] = {};
                        }

                        this.edgeData[i][j] = _.extend({
                            color: this.color(j),
                            dx: 0,
                            dy: isReverse ? opts.height : 0,
                            ex: 0,
                            ey: isReverse ? 0 : opts.height
                        }, opts);

                        startY = endY;
                        value = yValue;
                        sumValue += data[brush.target[j]];

                        group.append(r);
                    }

                    // min & max 인덱스 가져오기
                    if (sumValue > maxValue) {
                        maxValue = sumValue;
                        maxIndex = i;
                    }
                    if (sumValue < minValue) {
                        minValue = sumValue;
                        minIndex = i;
                    }

                    this.drawStackTooltip(group, i, sumValue, offsetX, startY, isReverse ? "bottom" : "top");
                    this.setActiveEventOption(group); // 액티브 엘리먼트 이벤트 설정
                    this.addBarElement(group);

                    g.append(group);
                });

                // 스탭 연결선 그리기
                if (this.brush.edge) {
                    this.drawStackEdge(g);
                }

                // 최소/최대/전체 값 표시하기
                if (this.brush.display != null) {
                    this.setActiveTooltips(minIndex, maxIndex);
                }

                // 액티브 엘리먼트 설정
                this.setActiveEffectOption();

                return g;
            };
        };

        return StackColumnBrush;
    }
};

/***/ }),
/* 48 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});

var _main = __webpack_require__(0);

var _main2 = _interopRequireDefault(_main);

var _fullstackbar = __webpack_require__(28);

var _fullstackbar2 = _interopRequireDefault(_fullstackbar);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

_main2.default.use(_fullstackbar2.default);

exports.default = {
    name: "chart.brush.fullstackcolumn",
    extend: "chart.brush.fullstackbar",
    component: function component() {
        var FullStackColumnBrush = function FullStackColumnBrush(chart, axis, brush) {
            var g, zeroY, bar_width;

            this.getTargetSize = function () {
                var width = this.axis.x.rangeBand(),
                    r_width = 0;

                if (this.brush.size > 0) {
                    r_width = this.brush.size;
                } else {
                    r_width = width - this.brush.outerPadding * 2;
                }

                return r_width < 0 ? 0 : r_width;
            };

            this.drawBefore = function () {
                g = chart.svg.group();
                zeroY = axis.y(0);
                bar_width = this.getTargetSize();
            };

            this.draw = function () {
                var chart_height = axis.area("height");

                this.eachData(function (data, i) {
                    var group = chart.svg.group();

                    var startX = this.offset("x", i) - bar_width / 2,
                        sum = 0,
                        list = [];

                    for (var j = 0; j < brush.target.length; j++) {
                        var height = data[brush.target[j]];

                        sum += height;
                        list.push(height);
                    }

                    var startY = 0,
                        max = axis.y.max();

                    for (var j = list.length - 1; j >= 0; j--) {
                        var height = chart_height - axis.y.rate(list[j], sum),
                            r = this.getBarElement(i, j);

                        if (isNaN(startX) || isNaN(startY) || isNaN(height)) {
                            // 정상적인 숫자가 아니면 element 를 설정하지 않음.
                        } else {
                            // 값의 범위가 정상일때 오류가 안나도록 함.
                            r.attr({
                                x: startX,
                                y: startY,
                                width: bar_width,
                                height: height
                            });
                        }

                        group.append(r);

                        // 퍼센트 노출 옵션 설정
                        if (brush.showText) {
                            var p = Math.round(list[j] / sum * max),
                                x = startX + bar_width / 2,
                                y = startY + height / 2 + 8,
                                text = this.drawText(p, x, y);

                            if (text != null) group.append(text);
                        }

                        // 액티브 엘리먼트 이벤트 설정
                        this.setActiveEventOption(group);

                        startY += height;
                    }

                    this.addBarElement(group);
                    g.append(group);
                });

                // 액티브 엘리먼트 설정
                this.setActiveEffectOption();

                return g;
            };
        };

        return FullStackColumnBrush;
    }
};

/***/ }),
/* 49 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});

var _core = __webpack_require__(1);

var _core2 = _interopRequireDefault(_core);

var _watch = __webpack_require__(2);

var _watch2 = _interopRequireDefault(_watch);

var _created = __webpack_require__(3);

var _created2 = _interopRequireDefault(_created);

var _mounted = __webpack_require__(6);

var _mounted2 = _interopRequireDefault(_mounted);

var _props = __webpack_require__(4);

var _props2 = _interopRequireDefault(_props);

var _propsBlock = __webpack_require__(7);

var _propsBlock2 = _interopRequireDefault(_propsBlock);

var _methods = __webpack_require__(5);

var _methods2 = _interopRequireDefault(_methods);

var _methodsBlock = __webpack_require__(8);

var _methodsBlock2 = _interopRequireDefault(_methodsBlock);

var _juijsChart = __webpack_require__(0);

var _juijsChart2 = _interopRequireDefault(_juijsChart);

var _rangebar = __webpack_require__(50);

var _rangebar2 = _interopRequireDefault(_rangebar);

var _rangecolumn = __webpack_require__(51);

var _rangecolumn2 = _interopRequireDefault(_rangecolumn);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

_juijsChart2.default.use(_rangebar2.default, _rangecolumn2.default);

exports.default = {
    name: 'graph-rangebar',
    mixins: [_core2.default, _watch2.default, _created2.default, _mounted2.default, _props2.default, _propsBlock2.default, _methods2.default, _methodsBlock2.default],
    props: {
        barMargin: {
            type: Number,
            required: false,
            default: 2
        },
        barPadding: {
            type: Number,
            required: false,
            default: 1
        }
    },
    beforeMount: function beforeMount() {
        this.brushes = [{
            type: this.axisReverse ? 'rangebar' : 'rangecolumn',
            clip: this.clip,
            colors: this.colors,
            outerPadding: this.barMargin,
            innerPadding: this.barPadding
        }];
    }
};

/***/ }),
/* 50 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.default = {
    name: "chart.brush.rangebar",
    extend: "chart.brush.core",
    component: function component() {
        var RangeBarBrush = function RangeBarBrush(chart, axis, brush) {
            var g, height, half_height, barHeight;
            var outerPadding, innerPadding;
            var borderColor, borderWidth, borderOpacity;

            this.drawBefore = function () {
                g = chart.svg.group();

                outerPadding = brush.outerPadding;
                innerPadding = brush.innerPadding;

                height = axis.y.rangeBand();
                half_height = height - outerPadding * 2;
                barHeight = (half_height - (brush.target.length - 1) * innerPadding) / brush.target.length;

                borderColor = chart.theme("barBorderColor");
                borderWidth = chart.theme("barBorderWidth");
                borderOpacity = chart.theme("barBorderOpacity");
            };

            this.draw = function () {
                this.eachData(function (data, i) {
                    var group = chart.svg.group(),
                        startY = this.offset("y", i) - half_height / 2;

                    for (var j = 0; j < brush.target.length; j++) {
                        var value = data[brush.target[j]],
                            startX = axis.x(value[1]),
                            zeroX = axis.x(value[0]);

                        var r = chart.svg.rect({
                            x: zeroX,
                            y: startY,
                            height: barHeight,
                            width: Math.abs(zeroX - startX),
                            fill: this.color(j),
                            stroke: borderColor,
                            "stroke-width": borderWidth,
                            "stroke-opacity": borderOpacity
                        });

                        this.addEvent(r, i, j);
                        group.append(r);

                        startY += barHeight + innerPadding;
                    }

                    g.append(group);
                });

                return g;
            };
        };

        RangeBarBrush.setup = function () {
            return {
                /** @cfg {Number} [outerPadding=2] Determines the outer margin of a bar. */
                outerPadding: 2,
                /** @cfg {Number} [innerPadding=1] Determines the inner margin of a bar. */
                innerPadding: 1
            };
        };

        return RangeBarBrush;
    }
};

/***/ }),
/* 51 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.default = {
    name: "chart.brush.rangecolumn",
    extend: "chart.brush.core",
    component: function component() {
        var RangeColumnBrush = function RangeColumnBrush(chart, axis, brush) {
            var g, width, columnWidth, half_width;
            var outerPadding, innerPadding;
            var borderColor, borderWidth, borderOpacity;

            this.drawBefore = function () {
                g = chart.svg.group();

                outerPadding = brush.outerPadding;
                innerPadding = brush.innerPadding;

                width = axis.x.rangeBand();
                half_width = width - outerPadding * 2;
                columnWidth = (width - outerPadding * 2 - (brush.target.length - 1) * innerPadding) / brush.target.length;

                borderColor = chart.theme("columnBorderColor");
                borderWidth = chart.theme("columnBorderWidth");
                borderOpacity = chart.theme("columnBorderOpacity");
            };

            this.draw = function () {
                this.eachData(function (data, i) {
                    var startX = this.offset("x", i) - half_width / 2;

                    for (var j = 0; j < brush.target.length; j++) {
                        var value = data[brush.target[j]],
                            startY = axis.y(value[1]),
                            zeroY = axis.y(value[0]);

                        var r = chart.svg.rect({
                            x: startX,
                            y: startY,
                            width: columnWidth,
                            height: Math.abs(zeroY - startY),
                            fill: this.color(j),
                            stroke: borderColor,
                            "stroke-width": borderWidth,
                            "stroke-opacity": borderOpacity
                        });

                        this.addEvent(r, i, j);
                        g.append(r);

                        startX += columnWidth + innerPadding;
                    }
                });

                return g;
            };
        };

        RangeColumnBrush.setup = function () {
            return {
                /** @cfg {Number} [outerPadding=2] Determines the outer margin of a column. */
                outerPadding: 2,
                /** @cfg {Number} [innerPadding=1] Determines the inner margin of a column. */
                innerPadding: 1
            };
        };

        return RangeColumnBrush;
    }
};

/***/ }),
/* 52 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});

var _core = __webpack_require__(1);

var _core2 = _interopRequireDefault(_core);

var _watch = __webpack_require__(2);

var _watch2 = _interopRequireDefault(_watch);

var _created = __webpack_require__(3);

var _created2 = _interopRequireDefault(_created);

var _mounted = __webpack_require__(6);

var _mounted2 = _interopRequireDefault(_mounted);

var _props = __webpack_require__(4);

var _props2 = _interopRequireDefault(_props);

var _propsBlock3d = __webpack_require__(25);

var _propsBlock3d2 = _interopRequireDefault(_propsBlock3d);

var _methods = __webpack_require__(5);

var _methods2 = _interopRequireDefault(_methods);

var _methodsBlock3d = __webpack_require__(26);

var _methodsBlock3d2 = _interopRequireDefault(_methodsBlock3d);

var _juijsChart = __webpack_require__(0);

var _juijsChart2 = _interopRequireDefault(_juijsChart);

var _line3d = __webpack_require__(53);

var _line3d2 = _interopRequireDefault(_line3d);

var _rotate3d = __webpack_require__(27);

var _rotate3d2 = _interopRequireDefault(_rotate3d);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

_juijsChart2.default.use(_line3d2.default, _rotate3d2.default);

exports.default = {
    name: 'graph-line3d',
    mixins: [_core2.default, _watch2.default, _created2.default, _mounted2.default, _props2.default, _propsBlock3d2.default, _methods2.default, _methodsBlock3d2.default],
    props: {
        names: {
            type: Array,
            required: true
        },
        linePadding: {
            type: Number,
            required: false,
            default: 20
        }
    },
    beforeMount: function beforeMount() {
        this.brushes = [{
            type: 'polygon.line3d',
            colors: this.colors,
            padding: this.linePadding
        }];
    }
};

/***/ }),
/* 53 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});

var _main = __webpack_require__(0);

var _main2 = _interopRequireDefault(_main);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

exports.default = {
    name: "chart.brush.polygon.line3d",
    extend: "chart.brush.polygon.core",
    component: function component() {
        var ColorUtil = _main2.default.include("util.color");
        var PointPolygon = _main2.default.include("chart.polygon.point");

        var PolygonLine3DBrush = function PolygonLine3DBrush() {
            this.createLine = function (datas, target, dataIndex, targetIndex) {
                var color = this.color(dataIndex, targetIndex),
                    d = this.axis.z.rangeBand() - this.brush.padding * 2,
                    x1 = this.axis.x(dataIndex),
                    y1 = this.axis.y(datas[dataIndex][target]),
                    z1 = this.axis.z(targetIndex) - d / 2,
                    x2 = this.axis.x(dataIndex + 1),
                    y2 = this.axis.y(datas[dataIndex + 1][target]),
                    z2 = this.axis.z(targetIndex) + d / 2,
                    maxPoint = null;

                var elem = this.chart.svg.polygon({
                    fill: color,
                    "fill-opacity": this.chart.theme("polygonLineBackgroundOpacity"),
                    stroke: ColorUtil.darken(color, this.chart.theme("polygonLineBorderOpacity")),
                    "stroke-opacity": this.chart.theme("polygonLineBorderOpacity")
                });

                var points = [new PointPolygon(x1, y1, z1), new PointPolygon(x1, y1, z2), new PointPolygon(x2, y2, z2), new PointPolygon(x2, y2, z1)];

                for (var i = 0; i < points.length; i++) {
                    this.createPolygon(points[i], function (p) {
                        var vector = p.vectors[0];
                        elem.point(vector.x, vector.y);

                        if (maxPoint == null) {
                            maxPoint = p;
                        } else {
                            if (vector.z > maxPoint.vectors[0].z) {
                                maxPoint = p;
                            }
                        }
                    });
                }

                // 별도로 우선순위 설정
                elem.order = this.axis.depth - maxPoint.max().z;

                return elem;
            };

            this.draw = function () {
                var g = this.chart.svg.group(),
                    datas = this.listData(),
                    targets = this.brush.target;

                for (var i = 0; i < datas.length - 1; i++) {
                    for (var j = 0; j < targets.length; j++) {
                        g.append(this.createLine(datas, targets[j], i, j));
                    }
                }

                return g;
            };
        };

        PolygonLine3DBrush.setup = function () {
            return {
                /** @cfg {Number} [padding=20] Determines the outer margin of a bar.  */
                padding: 10,
                /** @cfg {Boolean} [clip=false] If the brush is drawn outside of the chart, cut the area. */
                clip: false
            };
        };

        return PolygonLine3DBrush;
    }
};

/***/ }),
/* 54 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});

var _line = __webpack_require__(16);

var _line2 = _interopRequireDefault(_line);

var _propsDateblock = __webpack_require__(17);

var _propsDateblock2 = _interopRequireDefault(_propsDateblock);

var _methodsDateblock = __webpack_require__(18);

var _methodsDateblock2 = _interopRequireDefault(_methodsDateblock);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

exports.default = {
    name: 'graph-line-dateblock',
    mixins: [_line2.default, _propsDateblock2.default, _methodsDateblock2.default]
};

/***/ }),
/* 55 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});

var _line = __webpack_require__(16);

var _line2 = _interopRequireDefault(_line);

var _propsTimerange = __webpack_require__(11);

var _propsTimerange2 = _interopRequireDefault(_propsTimerange);

var _methodsTimerange = __webpack_require__(12);

var _methodsTimerange2 = _interopRequireDefault(_methodsTimerange);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

exports.default = {
    name: 'graph-line-timerange',
    mixins: [_line2.default, _propsTimerange2.default, _methodsTimerange2.default],
    beforeMount: function beforeMount() {
        this.brushes = [{
            type: 'line',
            target: '1',
            clip: this.clip,
            colors: this.colors,
            symbol: this.shape,
            active: this.activeIndex,
            activeEvent: this.activeEvent,
            display: this.display,
            opacity: this.opacity
        }];
    }
};

/***/ }),
/* 56 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});

var _core = __webpack_require__(1);

var _core2 = _interopRequireDefault(_core);

var _watch = __webpack_require__(2);

var _watch2 = _interopRequireDefault(_watch);

var _created = __webpack_require__(3);

var _created2 = _interopRequireDefault(_created);

var _mounted = __webpack_require__(6);

var _mounted2 = _interopRequireDefault(_mounted);

var _props = __webpack_require__(4);

var _props2 = _interopRequireDefault(_props);

var _propsTimerange = __webpack_require__(11);

var _propsTimerange2 = _interopRequireDefault(_propsTimerange);

var _methods = __webpack_require__(5);

var _methods2 = _interopRequireDefault(_methods);

var _methodsTimerange = __webpack_require__(12);

var _methodsTimerange2 = _interopRequireDefault(_methodsTimerange);

var _juijsChart = __webpack_require__(0);

var _juijsChart2 = _interopRequireDefault(_juijsChart);

var _scatter = __webpack_require__(57);

var _scatter2 = _interopRequireDefault(_scatter);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

_juijsChart2.default.use(_scatter2.default);

exports.default = {
    name: 'graph-scatter',
    mixins: [_core2.default, _watch2.default, _created2.default, _mounted2.default, _props2.default, _propsTimerange2.default, _methods2.default, _methodsTimerange2.default],
    props: {
        shape: {
            type: String, // circle", "triangle", "rectangle", "cross"
            required: false,
            default: 'circle'
        },
        activeEvent: {
            type: String, // "click", "dblclick", ...
            required: false
        },
        display: { // "max", "min", "all"
            type: String,
            required: false
        },
        opacity: {
            type: Number,
            required: false
        },
        size: {
            type: Number,
            required: false,
            size: 7
        },
        hideZero: {
            type: Boolean,
            required: false,
            size: false
        }
    },
    beforeMount: function beforeMount() {
        this.brushes = [{
            type: 'scatter',
            target: ['1'],
            clip: this.clip,
            colors: this.colors,
            symbol: this.shape,
            activeEvent: this.activeEvent,
            display: this.display,
            opacity: this.opacity,
            size: this.size,
            hideZero: this.hideZero
        }];
    }
};

/***/ }),
/* 57 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});

var _main = __webpack_require__(0);

var _main2 = _interopRequireDefault(_main);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

exports.default = {
    name: "chart.brush.scatter",
    extend: "chart.brush.core",
    component: function component() {
        var _ = _main2.default.include("util.base");

        var ScatterBrush = function ScatterBrush() {

            this.getSymbolType = function (key, value) {
                var symbol = this.brush.symbol,
                    target = this.brush.target[key];

                if (_.typeCheck("function", symbol)) {
                    var res = symbol.apply(this.chart, [target, value]);

                    if (res == "triangle" || res == "cross" || res == "rectangle" || res == "rect" || res == "circle") {
                        return {
                            type: "default",
                            uri: res
                        };
                    } else {
                        return {
                            type: "image",
                            uri: res
                        };
                    }
                }

                return {
                    type: "default",
                    uri: symbol
                };
            };

            this.createScatter = function (pos, dataIndex, targetIndex, symbol) {
                var self = this,
                    elem = null,
                    w = this.brush.size,
                    h = this.brush.size;

                var color = this.color(dataIndex, targetIndex),
                    borderColor = this.chart.theme("scatterBorderColor"),
                    borderWidth = this.chart.theme("scatterBorderWidth"),
                    bgOpacity = this.brush.opacity;

                if (symbol.type == "image") {
                    elem = this.chart.svg.image({
                        "xlink:href": symbol.uri,
                        width: w + borderWidth,
                        height: h + borderWidth,
                        x: pos.x - w / 2 - borderWidth,
                        y: pos.y - h / 2
                    });
                } else {
                    if (symbol.uri == "triangle" || symbol.uri == "cross") {
                        elem = this.chart.svg.group({
                            width: w,
                            height: h,
                            opacity: bgOpacity
                        }, function () {
                            if (symbol.uri == "triangle") {
                                var poly = self.chart.svg.polygon();

                                poly.point(0, h).point(w, h).point(w / 2, 0);
                            } else {
                                self.chart.svg.line({ stroke: color, "stroke-width": borderWidth * 2, x1: 0, y1: 0, x2: w, y2: h });
                                self.chart.svg.line({ stroke: color, "stroke-width": borderWidth * 2, x1: 0, y1: w, x2: h, y2: 0 });
                            }
                        }).translate(pos.x - w / 2, pos.y - h / 2);
                    } else {
                        if (symbol.uri == "rectangle" || symbol.uri == "rect") {
                            elem = this.chart.svg.rect({
                                width: w,
                                height: h,
                                x: pos.x - w / 2,
                                y: pos.y - h / 2,
                                opacity: bgOpacity
                            });
                        } else {
                            elem = this.chart.svg.ellipse({
                                rx: w / 2,
                                ry: h / 2,
                                cx: pos.x,
                                cy: pos.y,
                                opacity: bgOpacity
                            });
                        }
                    }

                    if (symbol.uri != "cross") {
                        elem.attr({
                            fill: color,
                            stroke: borderColor,
                            "stroke-width": borderWidth
                        }).hover(function () {
                            if (elem == self.activeScatter) return;

                            var opts = {
                                fill: self.chart.theme("scatterHoverColor"),
                                stroke: color,
                                "stroke-width": borderWidth * 2,
                                opacity: bgOpacity
                            };

                            if (self.brush.hoverSync) {
                                for (var i = 0; i < self.cachedSymbol[dataIndex].length; i++) {
                                    opts.stroke = self.color(dataIndex, i);
                                    self.cachedSymbol[dataIndex][i].attr(opts);
                                }
                            } else {
                                elem.attr(opts);
                            }
                        }, function () {
                            if (elem == self.activeScatter) return;

                            var opts = {
                                fill: color,
                                stroke: borderColor,
                                "stroke-width": borderWidth,
                                opacity: self.brush.hide ? 0 : bgOpacity
                            };

                            if (self.brush.hoverSync) {
                                for (var i = 0; i < self.cachedSymbol[dataIndex].length; i++) {
                                    opts.fill = self.color(dataIndex, i);
                                    self.cachedSymbol[dataIndex][i].attr(opts);
                                }
                            } else {
                                elem.attr(opts);
                            }
                        });
                    }
                }

                return elem;
            };

            this.drawScatter = function (points) {
                // hoverSync 옵션 처리를 위한 캐싱 처리
                this.cachedSymbol = {};

                var self = this,
                    g = this.chart.svg.group(),
                    borderColor = this.chart.theme("scatterBorderColor"),
                    borderWidth = this.chart.theme("scatterBorderWidth"),
                    bgOpacity = this.brush.opacity,
                    isTooltipDraw = false;

                for (var i = 0; i < points.length; i++) {
                    for (var j = 0; j < points[i].length; j++) {
                        if (!this.cachedSymbol[j]) {
                            this.cachedSymbol[j] = [];
                        }

                        if (this.brush.hideZero && points[i].value[j] === 0) {
                            continue;
                        }

                        var data = {
                            x: points[i].x[j],
                            y: points[i].y[j],
                            max: points[i].max[j],
                            min: points[i].min[j],
                            value: points[i].value[j]
                        };

                        // 값이 null이나 undefined일 때, 그리지 않음
                        if (_.typeCheck(["undefined", "null"], data.value)) continue;

                        var symbol = this.getSymbolType(i, data.value),
                            p = this.createScatter(data, j, i, symbol),
                            d = this.brush.display;

                        // hoverSync 옵션을 위한 엘리먼트 캐싱
                        if (symbol.type == "default" && symbol.uri != "cross") {
                            this.cachedSymbol[j].push(p);
                        }

                        // Max & Min & All 툴팁 생성
                        if (d == "max" && data.max || d == "min" && data.min || d == "all") {
                            // 최소/최대 값은 무조건 한개만 보여야 함.
                            if (d == "all" || !isTooltipDraw) {
                                g.append(this.drawTooltip(data.x, data.y, this.format(data.value)));
                                isTooltipDraw = true;
                            }
                        }

                        // 컬럼 및 기본 브러쉬 이벤트 설정
                        if (this.brush.activeEvent != null) {
                            (function (scatter, data, color, symbol) {
                                var x = data.x,
                                    y = data.y,
                                    text = self.format(data.value);

                                scatter.on(self.brush.activeEvent, function (e) {
                                    if (symbol.type == "default" && symbol.uri != "cross") {
                                        if (self.activeScatter != null) {
                                            self.activeScatter.attr({
                                                fill: self.activeScatter.attributes["stroke"],
                                                stroke: borderColor,
                                                "stroke-width": borderWidth,
                                                opacity: self.brush.hide ? 0 : bgOpacity
                                            });
                                        }

                                        self.activeScatter = scatter;
                                        self.activeScatter.attr({
                                            fill: self.chart.theme("scatterHoverColor"),
                                            stroke: color,
                                            "stroke-width": borderWidth * 2,
                                            opacity: bgOpacity
                                        });
                                    }

                                    self.activeTooltip.html(text);
                                    self.activeTooltip.translate(x, y);
                                });

                                scatter.attr({ cursor: "pointer" });
                            })(p, data, this.color(j, i), this.getSymbolType(i, data.value));
                        }

                        if (this.brush.hide) {
                            p.attr({ opacity: 0 });
                        }

                        this.addEvent(p, j, i);
                        g.append(p);
                    }
                }

                // 액티브 툴팁
                this.activeTooltip = this.drawTooltip(0, 0, "");
                g.append(this.activeTooltip);

                return g;
            };

            this.drawTooltip = function (x, y, text) {
                return this.chart.text({
                    y: -this.brush.size,
                    "text-anchor": "middle",
                    fill: this.chart.theme("tooltipPointFontColor"),
                    "font-size": this.chart.theme("tooltipPointFontSize"),
                    "font-weight": this.chart.theme("tooltipPointFontWeight"),
                    opacity: this.brush.opacity
                }, text).translate(x, y);
            };

            this.draw = function () {
                return this.drawScatter(this.getXY());
            };

            this.drawAnimate = function () {
                var area = this.chart.area();

                return this.chart.svg.animateTransform({
                    attributeName: "transform",
                    type: "translate",
                    from: area.x + " " + area.height,
                    to: area.x + " " + area.y,
                    begin: "0s",
                    dur: "0.4s",
                    repeatCount: "1"
                });
            };
        };

        ScatterBrush.setup = function () {
            return {
                /** @cfg {"circle"/"triangle"/"rectangle"/"cross"/"callback"} [symbol="circle"] Determines the shape of a (circle, rectangle, cross, triangle).  */
                symbol: "circle",
                /** @cfg {Number} [size=7]  Determines the size of a starter. */
                size: 7,
                /** @cfg {Boolean} [hide=false]  Hide the scatter, will be displayed only when the mouse is over. */
                hide: false,
                /** @cfg {Boolean} [hideZero=false]  When scatter value is zero, will be hidden. */
                hideZero: false,
                /** @cfg {Boolean} [hoverSync=false]  Over effect synchronization of all the target's symbol. */
                hoverSync: false,
                /** @cfg {String} [activeEvent=null]  Activates the scatter in question when a configured event occurs (click, mouseover, etc). */
                activeEvent: null,
                /** @cfg {"max"/"min"/"all"} [display=null]  Shows a tooltip on the scatter for the minimum/maximum value.  */
                display: null,
                /** @cfg {Number} [opacity=1]  Stroke opacity.  */
                opacity: 1,
                /** @cfg {Boolean} [clip=false] If the brush is drawn outside of the chart, cut the area. */
                clip: false
            };
        };

        return ScatterBrush;
    }
};

/***/ }),
/* 58 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});

var _core = __webpack_require__(1);

var _core2 = _interopRequireDefault(_core);

var _watch = __webpack_require__(2);

var _watch2 = _interopRequireDefault(_watch);

var _created = __webpack_require__(3);

var _created2 = _interopRequireDefault(_created);

var _mounted = __webpack_require__(6);

var _mounted2 = _interopRequireDefault(_mounted);

var _props = __webpack_require__(4);

var _props2 = _interopRequireDefault(_props);

var _propsTimerange = __webpack_require__(11);

var _propsTimerange2 = _interopRequireDefault(_propsTimerange);

var _methods = __webpack_require__(5);

var _methods2 = _interopRequireDefault(_methods);

var _methodsTimerange = __webpack_require__(12);

var _methodsTimerange2 = _interopRequireDefault(_methodsTimerange);

var _juijsChart = __webpack_require__(0);

var _juijsChart2 = _interopRequireDefault(_juijsChart);

var _bubble = __webpack_require__(59);

var _bubble2 = _interopRequireDefault(_bubble);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

_juijsChart2.default.use(_bubble2.default);

exports.default = {
    name: 'graph-bubble',
    mixins: [_core2.default, _watch2.default, _created2.default, _mounted2.default, _props2.default, _propsTimerange2.default, _methods2.default, _methodsTimerange2.default],
    props: {
        minSize: {
            type: Number,
            required: false,
            default: 5
        },
        maxSize: {
            type: Number,
            required: false,
            default: 30
        },
        showText: {
            type: Boolean,
            required: false,
            default: false
        },
        activeEvent: {
            type: String, // "click", "dblclick", ...
            required: false
        }
    },
    beforeMount: function beforeMount() {
        this.brushes = [{
            type: 'bubble',
            target: ['1'],
            clip: this.clip,
            colors: this.colors,
            min: this.minSize,
            max: this.maxSize,
            showText: this.showText,
            activeEvent: this.showText ? this.activeEvent : null
        }];
    }
};

/***/ }),
/* 59 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});

var _main = __webpack_require__(0);

var _main2 = _interopRequireDefault(_main);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

exports.default = {
    name: "chart.brush.bubble",
    extend: "chart.brush.core",
    component: function component() {
        var _ = _main2.default.include("util.base");
        var math = _main2.default.include("util.math");

        var BubbleBrush = function BubbleBrush() {
            var self = this,
                min = null,
                max = null;

            this.getFormatText = function (value, dataIndex) {
                if (_.typeCheck("function", this.brush.format)) {
                    return this.format(this.axis.data[dataIndex]);
                }

                return value;
            };

            this.getBubbleRadius = function (value, dataIndex) {
                var scaleKey = this.brush.scaleKey;

                if (scaleKey != null) {
                    var scaleValue = this.axis.data[dataIndex][scaleKey];
                    value = _.typeCheck("number", scaleValue) ? scaleValue : value;
                }

                return math.scaleValue(value, min, max, this.brush.min, this.brush.max);
            };

            this.createBubble = function (pos, color, dataIndex) {
                var radius = this.getBubbleRadius(pos.value, dataIndex),
                    circle = this.svg.group().translate(pos.x, pos.y);

                circle.append(this.svg.circle({
                    r: radius,
                    "fill": color,
                    "fill-opacity": this.chart.theme("bubbleBackgroundOpacity"),
                    "stroke": color,
                    "stroke-width": this.chart.theme("bubbleBorderWidth")
                }));

                if (this.brush.showText) {
                    var text = this.getFormatText(pos.value, dataIndex);

                    circle.append(this.chart.text({
                        "font-size": this.chart.theme("bubbleFontSize"),
                        fill: this.chart.theme("bubbleFontColor"),
                        "text-anchor": "middle",
                        dy: 3
                    }).text(text));
                }

                this.bubbleList.push(circle);

                return circle;
            };

            this.setActiveEffect = function (r) {
                var cols = this.bubbleList;

                for (var i = 0; i < cols.length; i++) {
                    var opacity = cols[i] == r ? 1 : this.chart.theme("bubbleBackgroundOpacity");

                    cols[i].get(0).attr({ opacity: opacity });
                    cols[i].get(1).attr({ opacity: opacity });
                }
            };

            this.drawBubble = function (points) {
                var g = this.svg.group();

                for (var i = 0; i < points.length; i++) {
                    for (var j = 0; j < points[i].x.length; j++) {
                        var b = this.createBubble({
                            x: points[i].x[j], y: points[i].y[j], value: points[i].value[j]
                        }, this.color(j, i), j);

                        // 컬럼 및 기본 브러쉬 이벤트 설정
                        if (this.brush.activeEvent != null) {
                            (function (bubble) {
                                bubble.on(self.brush.activeEvent, function (e) {
                                    self.setActiveEffect(bubble);
                                });

                                bubble.attr({ cursor: "pointer" });
                            })(b);
                        }

                        this.addEvent(b, j, i);
                        g.append(b);
                    }
                }

                // 액티브 버블 설정
                var bubble = this.bubbleList[this.brush.active];
                if (bubble != null) {
                    this.setActiveEffect(bubble);
                }

                return g;
            };

            this.drawBefore = function () {
                var scaleKey = this.brush.scaleKey;

                if (scaleKey != null) {
                    var values = [];

                    for (var i = 0; i < this.axis.data.length; i++) {
                        values.push(this.axis.data[i][scaleKey]);
                    }

                    min = Math.min.apply(this, values);
                    max = Math.max.apply(this, values);
                } else {
                    min = this.axis.y.min();
                    max = this.axis.y.max();
                }

                this.bubbleList = [];
            };

            this.draw = function () {
                return this.drawBubble(this.getXY());
            };

            this.drawAnimate = function (root) {
                root.each(function (i, elem) {
                    var c = elem.children[0];

                    c.append(self.svg.animateTransform({
                        attributeType: "xml",
                        attributeName: "transform",
                        type: "scale",
                        from: "0",
                        to: "1",
                        dur: "0.7s",
                        fill: "freeze",
                        repeatCount: "1"
                    }));

                    c.append(self.svg.animate({
                        attributeType: "xml",
                        attributeName: "fill-opacity",
                        from: "0",
                        to: self.chart.theme("bubbleBackgroundOpacity"),
                        dur: "1.4s",
                        repeatCount: "1",
                        fill: "freeze"
                    }));
                });
            };
        };

        BubbleBrush.setup = function () {
            return {
                /** @cfg {Number} [min=5] Determines the minimum size of a bubble. */
                min: 5,
                /** @cfg {Number} [max=30] Determines the maximum size of a bubble.*/
                max: 30,
                /** @cfg {String} [scaleKey=null] The name of the property to determine the bubble size. */
                scaleKey: null,
                /** @cfg {Boolean} [showText=false] Set the text appear. */
                showText: false,
                /** @cfg {Function} [format=null] Returns a value from the format callback function of a defined option. */
                format: null,
                /** @cfg {Number} [active=null] Activates the bar of an applicable index. */
                active: null,
                /** @cfg {String} [activeEvent=null]  Activates the bar in question when a configured event occurs (click, mouseover, etc). */
                activeEvent: null
            };
        };

        return BubbleBrush;
    }
};

/***/ }),
/* 60 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});

var _main = __webpack_require__(0);

var _main2 = _interopRequireDefault(_main);

var _area = __webpack_require__(19);

var _area2 = _interopRequireDefault(_area);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

_main2.default.use(_area2.default);

exports.default = {
    name: "chart.brush.stackarea",
    extend: "chart.brush.area",
    component: function component() {
        var StackAreaBrush = function StackAreaBrush() {
            this.draw = function () {
                return this.drawArea(this.getStackXY());
            };
        };

        return StackAreaBrush;
    }
};

/***/ }),
/* 61 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});

var _area = __webpack_require__(14);

var _area2 = _interopRequireDefault(_area);

var _propsDateblock = __webpack_require__(17);

var _propsDateblock2 = _interopRequireDefault(_propsDateblock);

var _methodsDateblock = __webpack_require__(18);

var _methodsDateblock2 = _interopRequireDefault(_methodsDateblock);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

exports.default = {
    name: 'graph-area-dateblock',
    mixins: [_area2.default, _propsDateblock2.default, _methodsDateblock2.default]
};

/***/ }),
/* 62 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});

var _area = __webpack_require__(14);

var _area2 = _interopRequireDefault(_area);

var _propsTimerange = __webpack_require__(11);

var _propsTimerange2 = _interopRequireDefault(_propsTimerange);

var _methodsTimerange = __webpack_require__(12);

var _methodsTimerange2 = _interopRequireDefault(_methodsTimerange);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

exports.default = {
    name: 'graph-area-timerange',
    mixins: [_area2.default, _propsTimerange2.default, _methodsTimerange2.default],
    beforeMount: function beforeMount() {
        this.brushes = [{
            type: 'stackarea',
            target: '1',
            clip: this.clip,
            colors: this.colors,
            symbol: this.shape,
            opacity: this.opacity,
            line: this.borderLine,
            display: this.display
        }];
    }
};

/***/ }),
/* 63 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});

var _rangearea = __webpack_require__(29);

var _rangearea2 = _interopRequireDefault(_rangearea);

var _propsDateblock = __webpack_require__(17);

var _propsDateblock2 = _interopRequireDefault(_propsDateblock);

var _methodsDateblock = __webpack_require__(18);

var _methodsDateblock2 = _interopRequireDefault(_methodsDateblock);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

exports.default = {
    name: 'graph-rangearea-dateblock',
    mixins: [_rangearea2.default, _propsDateblock2.default, _methodsDateblock2.default]
};

/***/ }),
/* 64 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});

var _typeof = typeof Symbol === "function" && typeof Symbol.iterator === "symbol" ? function (obj) { return typeof obj; } : function (obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; };

var _core = __webpack_require__(1);

var _core2 = _interopRequireDefault(_core);

var _watch = __webpack_require__(2);

var _watch2 = _interopRequireDefault(_watch);

var _created = __webpack_require__(3);

var _created2 = _interopRequireDefault(_created);

var _mounted = __webpack_require__(6);

var _mounted2 = _interopRequireDefault(_mounted);

var _props = __webpack_require__(4);

var _props2 = _interopRequireDefault(_props);

var _propsTimerange = __webpack_require__(11);

var _propsTimerange2 = _interopRequireDefault(_propsTimerange);

var _methods = __webpack_require__(5);

var _methods2 = _interopRequireDefault(_methods);

var _methodsTimerange = __webpack_require__(12);

var _methodsTimerange2 = _interopRequireDefault(_methodsTimerange);

var _juijsChart = __webpack_require__(0);

var _juijsChart2 = _interopRequireDefault(_juijsChart);

var _line = __webpack_require__(10);

var _line2 = _interopRequireDefault(_line);

var _rangearea = __webpack_require__(30);

var _rangearea2 = _interopRequireDefault(_rangearea);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

_juijsChart2.default.use(_line2.default, _rangearea2.default);

exports.default = {
    name: 'graph-rangearea-timerange',
    mixins: [_core2.default, _watch2.default, _created2.default, _mounted2.default, _props2.default, _propsTimerange2.default, _methods2.default, _methodsTimerange2.default],
    methods: {
        convertToData: function convertToData(values) {
            var data = [];

            for (var i = 0; i < values.length; i++) {
                var row = values[i];

                if ((typeof row === 'undefined' ? 'undefined' : _typeof(row)) == 'object' && row.length == 4) {
                    data.push({
                        '0': row[0],
                        '1': [row[1], row[3]],
                        '2': row[2]
                    });
                }
            }

            return data;
        }
    },
    beforeMount: function beforeMount() {
        this.brushes = [{
            type: 'rangearea',
            clip: this.clip,
            colors: this.colors,
            target: '1'
        }, {
            type: 'line',
            clip: this.clip,
            colors: this.colors,
            target: '2'
        }];
    }
};

/***/ }),
/* 65 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});

var _core = __webpack_require__(1);

var _core2 = _interopRequireDefault(_core);

var _watch = __webpack_require__(2);

var _watch2 = _interopRequireDefault(_watch);

var _created = __webpack_require__(3);

var _created2 = _interopRequireDefault(_created);

var _mounted = __webpack_require__(6);

var _mounted2 = _interopRequireDefault(_mounted);

var _props = __webpack_require__(4);

var _props2 = _interopRequireDefault(_props);

var _methods = __webpack_require__(5);

var _methods2 = _interopRequireDefault(_methods);

var _juijsChart = __webpack_require__(0);

var _juijsChart2 = _interopRequireDefault(_juijsChart);

var _pie = __webpack_require__(31);

var _pie2 = _interopRequireDefault(_pie);

var _donut = __webpack_require__(66);

var _donut2 = _interopRequireDefault(_donut);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

_juijsChart2.default.use(_pie2.default, _donut2.default);

exports.default = {
    name: 'graph-pie',
    mixins: [_core2.default, _watch2.default, _created2.default, _mounted2.default, _props2.default, _methods2.default],
    props: {
        shape: {
            type: String,
            required: false,
            default: 'pie' // or donut
        },
        names: {
            type: Array,
            required: true
        },
        activeIndex: {
            type: [Number, Array],
            required: false
        },
        activeEvent: {
            type: String,
            required: false
        },
        showTextType: {
            type: String,
            required: false // outside, inside
        },
        dataFormat: {
            type: Function,
            required: false
        },
        showTotalValue: {
            type: Boolean,
            required: false,
            default: false
        },
        strokeWidth: {
            type: Number,
            required: false,
            default: 50
        }
    },
    watch: {
        activeIndex: function activeIndex(newVal, oldVal) {
            if (newVal == oldVal) return;

            this.chart.updateBrush(0, { active: newVal });
            this.chart.render();
        }
    },
    methods: {
        convertToData: function convertToData(values) {
            var row = {};

            for (var i = 0; i < values.length; i++) {
                row['' + i] = values[i];
            }

            return [row];
        },
        initGraphAxes: function initGraphAxes() {
            return {
                data: this.convertToData(this.values)
            };
        }
    },
    beforeMount: function beforeMount() {
        var self = this;

        var brush = {
            type: this.shape,
            clip: this.clip,
            colors: this.colors,
            active: this.activeIndex,
            activeEvent: this.activeEvent,
            showText: this.showTextType,
            format: function format(key, value) {
                if (typeof self.dataFormat == 'function') {
                    return self.dataFormat.apply(this, [key, value]);
                }

                return self.names[key] + ': ' + value;
            }
        };

        if (this.shape == 'donut') {
            brush.size = this.strokeWidth;
            brush.showValue = this.showTotalValue;
        }

        this.brushes = [brush];
    }
};

/***/ }),
/* 66 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});

var _main = __webpack_require__(0);

var _main2 = _interopRequireDefault(_main);

var _pie = __webpack_require__(31);

var _pie2 = _interopRequireDefault(_pie);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

_main2.default.use(_pie2.default);

exports.default = {
    name: "chart.brush.donut",
    extend: "chart.brush.pie",
    component: function component() {
        var _ = _main2.default.include("util.base");
        var math = _main2.default.include("util.math");
        var ColorUtil = _main2.default.include("util.color");

        var DonutBrush = function DonutBrush() {
            var self = this,
                cache_active = {};

            this.drawDonut = function (centerX, centerY, innerRadius, outerRadius, startAngle, endAngle, attr) {
                attr['stroke-width'] = outerRadius - innerRadius;

                if (endAngle >= 360) {
                    // bugfix : if angle is 360 , donut cang't show
                    endAngle = 359.9999;
                }

                var g = this.chart.svg.group(),
                    path = this.chart.svg.path(attr),
                    dist = Math.abs(outerRadius - innerRadius);

                // 바깥 지름 부터 그림
                var obj = math.rotate(0, -outerRadius, math.radian(startAngle)),
                    startX = obj.x,
                    startY = obj.y;

                // 시작 하는 위치로 옮김
                path.MoveTo(startX, startY);

                // outer arc 에 대한 지점 설정
                obj = math.rotate(startX, startY, math.radian(endAngle));

                // 중심점 이동
                g.translate(centerX, centerY);

                // outer arc 그림
                path.Arc(outerRadius, outerRadius, 0, endAngle > 180 ? 1 : 0, 1, obj.x, obj.y);

                // 마우스 이벤트 빈공간 제외
                path.css({
                    "pointer-events": "stroke"
                });

                g.append(path);
                g.order = 1;

                return g;
            };

            this.drawDonut3d = function (centerX, centerY, innerRadius, outerRadius, startAngle, endAngle, attr) {
                var g = this.chart.svg.group(),
                    path = this.chart.svg.path(attr),
                    dist = Math.abs(outerRadius - innerRadius);

                outerRadius += dist / 2;
                innerRadius = outerRadius - dist;

                // 바깥 지름 부터 그림
                var obj = math.rotate(0, -outerRadius, math.radian(startAngle)),
                    startX = obj.x,
                    startY = obj.y;

                var innerObj = math.rotate(0, -innerRadius, math.radian(startAngle)),
                    innerStartX = innerObj.x,
                    innerStartY = innerObj.y;

                // 시작 하는 위치로 옮김
                path.MoveTo(startX, startY);

                // outer arc 에 대한 지점 설정
                obj = math.rotate(startX, startY, math.radian(endAngle));
                innerObj = math.rotate(innerStartX, innerStartY, math.radian(endAngle));

                // 중심점 이동
                g.translate(centerX, centerY);

                // outer arc 그림
                path.Arc(outerRadius, outerRadius, 0, endAngle > 180 ? 1 : 0, 1, obj.x, obj.y);

                var y = obj.y + 10,
                    x = obj.x + 5,
                    innerY = innerObj.y + 10,
                    innerX = innerObj.x + 5,
                    targetX = startX + 5,
                    targetY = startY + 10,
                    innerTargetX = innerStartX + 5,
                    innerTargetY = innerStartY + 10;

                path.LineTo(x, y);
                path.Arc(outerRadius, outerRadius, 0, endAngle > 180 ? 1 : 0, 0, targetX, targetY);
                path.ClosePath();
                g.append(path);

                // 안쪽 면 그리기
                var innerPath = this.chart.svg.path(attr);

                // 시작 하는 위치로 옮김
                innerPath.MoveTo(innerStartX, innerStartY);
                innerPath.Arc(innerRadius, innerRadius, 0, endAngle > 180 ? 1 : 0, 1, innerObj.x, innerObj.y);
                innerPath.LineTo(innerX, innerY);
                innerPath.Arc(innerRadius, innerRadius, 0, endAngle > 180 ? 1 : 0, 0, innerTargetX, innerTargetY);
                innerPath.ClosePath();

                g.append(innerPath);
                g.order = 1;

                return g;
            };

            this.drawDonut3dBlock = function (centerX, centerY, innerRadius, outerRadius, startAngle, endAngle, attr) {
                var g = this.chart.svg.group(),
                    path = this.chart.svg.path(attr),
                    dist = Math.abs(outerRadius - innerRadius);

                outerRadius += dist / 2;
                innerRadius = outerRadius - dist;

                // 바깥 지름 부터 그림
                var obj = math.rotate(0, -outerRadius, math.radian(startAngle)),
                    startX = obj.x,
                    startY = obj.y;

                var innerObj = math.rotate(0, -innerRadius, math.radian(startAngle)),
                    innerStartX = innerObj.x,
                    innerStartY = innerObj.y;

                // 시작 하는 위치로 옮김
                path.MoveTo(startX, startY);

                // outer arc 에 대한 지점 설정
                obj = math.rotate(startX, startY, math.radian(endAngle));
                innerObj = math.rotate(innerStartX, innerStartY, math.radian(endAngle));

                // 중심점 이동
                g.translate(centerX, centerY);

                var y = obj.y + 10,
                    x = obj.x + 5,
                    innerY = innerObj.y + 10,
                    innerX = innerObj.x + 5;

                // 왼쪽면 그리기
                var rect = this.chart.svg.path(attr);
                rect.MoveTo(obj.x, obj.y).LineTo(x, y).LineTo(innerX, innerY).LineTo(innerObj.x, innerObj.y).ClosePath();

                g.append(rect);
                g.order = 1;

                return g;
            };

            this.drawUnit = function (index, data, g) {
                var props = this.getProperty(index),
                    centerX = props.centerX,
                    centerY = props.centerY,
                    innerRadius = props.innerRadius,
                    outerRadius = props.outerRadius;

                var target = this.brush.target,
                    active = this.brush.active,
                    all = 360,
                    startAngle = 0,
                    max = 0,
                    totalValue = 0;

                for (var i = 0; i < target.length; i++) {
                    max += data[target[i]];
                }

                if (this.brush['3d']) {
                    // 화면 블럭 그리기
                    for (var i = 0; i < target.length; i++) {
                        var value = data[target[i]],
                            endAngle = all * (value / max),
                            donut3d = this.drawDonut3dBlock(centerX, centerY, innerRadius, outerRadius, startAngle, endAngle, {
                            fill: ColorUtil.darken(this.color(i), 0.5)
                        }, i == target.length - 1);
                        g.append(donut3d);

                        startAngle += endAngle;
                    }

                    startAngle = 0;
                    for (var i = 0; i < target.length; i++) {
                        var value = data[target[i]],
                            endAngle = all * (value / max),
                            donut3d = this.drawDonut3d(centerX, centerY, innerRadius, outerRadius, startAngle, endAngle, {
                            fill: ColorUtil.darken(this.color(i), 0.5)
                        }, i == target.length - 1);
                        g.append(donut3d);

                        startAngle += endAngle;
                    }
                }

                startAngle = 0;

                for (var i = 0; i < target.length; i++) {
                    if (data[target[i]] == 0) continue;

                    var value = data[target[i]],
                        endAngle = all * (value / max),
                        centerAngle = startAngle + endAngle / 2 - 90,
                        isOnlyOne = Math.abs(startAngle - endAngle) == 360,
                        radius = this.brush.showText == "inside" ? this.brush.size + innerRadius + outerRadius : outerRadius,
                        donut = this.drawDonut(centerX, centerY, innerRadius, outerRadius, startAngle, endAngle, {
                        stroke: this.color(i),
                        fill: 'transparent'
                    }),
                        text = this.drawText(centerX, centerY, centerAngle, radius, this.getFormatText(target[i], value));

                    // 파이 액티브상태 캐싱하는 객체
                    cache_active[centerAngle] = {
                        active: false,
                        pie: donut,
                        text: text,
                        centerX: centerX,
                        centerY: centerY,
                        centerAngle: centerAngle,
                        outerRadius: radius
                    };

                    // TODO: 파이가 한개일 경우, 액티브 처리를 할 필요가 없다.
                    if (!isOnlyOne) {
                        // 설정된 키 활성화
                        if (active == target[i] || _.inArray(target[i], active) != -1) {
                            cache_active[centerAngle].active = true;
                        } else {
                            cache_active[centerAngle].active = false;
                        }

                        // 파이 및 텍스트 액티브 상태 처리
                        if (this.brush.showText == "inside") {
                            this.setActiveTextEvent(cache_active);
                        }

                        // 파이 및 텍스트 액티브 상태 처리
                        this.setActiveEvent(cache_active, false);

                        // 활성화 이벤트 설정
                        if (this.brush.activeEvent != null) {
                            (function (p, t, cx, cy, ca, r) {
                                p.on(self.brush.activeEvent, function (e) {
                                    if (!cache_active[ca].active) {
                                        cache_active[ca].active = true;
                                    } else {
                                        cache_active[ca].active = false;
                                    }

                                    if (self.brush.showText == "inside") {
                                        self.setActiveTextEvent(cache_active);
                                    }

                                    self.setActiveEvent(cache_active, false);
                                });

                                p.attr({ cursor: "pointer" });
                            })(donut, text.get(0), centerX, centerY, centerAngle, radius);
                        }
                    }

                    this.addEvent(donut, index, i);
                    g.append(donut);
                    g.append(text);

                    startAngle += endAngle;
                    totalValue += value;
                }

                // Show total value
                if (this.brush.showValue) {
                    this.drawTotalValue(g, centerX, centerY, totalValue);
                }
            };

            this.drawNoData = function (g) {
                var props = this.getProperty(0);

                g.append(this.drawDonut(props.centerX, props.centerY, props.innerRadius, props.outerRadius, 0, 360, {
                    stroke: this.chart.theme("pieNoDataBackgroundColor"),
                    fill: "transparent"
                }));

                // Show total value
                if (this.brush.showValue) {
                    this.drawTotalValue(g, props.centerX, props.centerY, 0);
                }
            };

            this.drawTotalValue = function (g, centerX, centerY, value) {
                var size = this.chart.theme("pieTotalValueFontSize");

                var text = this.chart.text({
                    "font-size": size,
                    "font-weight": this.chart.theme("pieTotalValueFontWeight"),
                    fill: this.chart.theme("pieTotalValueFontColor"),
                    "text-anchor": "middle",
                    dy: size / 3
                }, this.format(value));

                text.translate(centerX, centerY);
                g.append(text);
            };

            this.getProperty = function (index) {
                var obj = this.axis.c(index);

                var width = obj.width,
                    height = obj.height,
                    x = obj.x,
                    y = obj.y,
                    min = width;

                if (height < min) {
                    min = height;
                }

                if (this.brush.size >= min / 2) {
                    this.brush.size = min / 4;
                }

                var outerRadius = min / 2 - this.brush.size / 2;

                return {
                    centerX: width / 2 + x,
                    centerY: height / 2 + y,
                    outerRadius: outerRadius,
                    innerRadius: outerRadius - this.brush.size
                };
            };
        };

        DonutBrush.setup = function () {
            return {
                /** @cfg {Number} [size=50] donut stroke width  */
                size: 50,
                /** @cfg {Boolean} [showValue=false] donut stroke width  */
                showValue: false
            };
        };

        return DonutBrush;
    }
};

/***/ }),
/* 67 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});

var _bar = __webpack_require__(23);

var _bar2 = _interopRequireDefault(_bar);

var _juijsChart = __webpack_require__(0);

var _juijsChart2 = _interopRequireDefault(_juijsChart);

var _bar3 = __webpack_require__(9);

var _bar4 = _interopRequireDefault(_bar3);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

_juijsChart2.default.use(_bar4.default);

exports.default = {
    name: 'graph-comparison-bar',
    mixins: [_bar2.default],
    methods: {
        initGraphAxes: function initGraphAxes() {
            return [{
                x: {
                    type: "range",
                    domain: function domain(d) {
                        return Math.max(d[0], d[1]);
                    },
                    step: this.axisStep,
                    line: this.axisXStyle,
                    hide: this.axisXStyle == "hidden",
                    reverse: true
                },
                y: {
                    type: "block",
                    domain: this.labels,
                    line: this.axisYStyle,
                    hide: this.axisYStyle == "hidden"
                },
                data: this.convertToData(this.values),
                area: {
                    x: 0, y: 0, width: "50%", height: "100%"
                }
            }, {
                x: {
                    reverse: false
                },
                y: {
                    orient: "right"
                },
                area: {
                    x: "50%", y: 0, width: "50%", height: "100%"
                },
                extend: 0
            }];
        }
    },
    beforeMount: function beforeMount() {
        var _ = _juijsChart2.default.include('util.base');

        var colors = !this.colors ? [1, 2] : this.colors;

        var options = {
            type: 'bar',
            clip: this.clip,
            active: this.activeIndex,
            activeEvent: this.activeEvent,
            display: this.display,
            size: this.fixedSize,
            minSize: this.minValue,
            outerPadding: this.barMargin,
            innerPadding: this.barPadding
        };

        this.brushes = [_.extend({ target: '0', axis: 0, colors: [colors[0]] }, options), _.extend({ target: '1', axis: 1, colors: [colors[1]] }, options)];
    }
};

/***/ }),
/* 68 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});

var _area = __webpack_require__(14);

var _area2 = _interopRequireDefault(_area);

var _juijsChart = __webpack_require__(0);

var _juijsChart2 = _interopRequireDefault(_juijsChart);

var _area3 = __webpack_require__(19);

var _area4 = _interopRequireDefault(_area3);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

_juijsChart2.default.use(_area4.default);

exports.default = {
    name: 'graph-comparison-area',
    mixins: [_area2.default],
    props: {
        axisMin: {
            type: Array,
            required: false,
            default: null
        },
        axisMax: {
            type: Array,
            required: false,
            default: null
        }
    },
    methods: {
        getAxisMinAndMax: function getAxisMinAndMax(data, index) {
            var min = this.axisMin;
            var max = this.axisMax;

            if (min != null && max != null) {
                return [min[index], max[index]];
            }

            return data[index];
        },
        initGraphAxes: function initGraphAxes() {
            var self = this;

            return [{
                x: {
                    type: "fullblock",
                    domain: this.labels,
                    line: this.axisXStyle,
                    hide: this.axisXStyle == "hidden"
                },
                y: {
                    type: "range",
                    domain: function domain(data) {
                        return self.getAxisMinAndMax(data, 0);
                    },
                    step: this.axisStep,
                    line: this.axisYStyle,
                    hide: this.axisYStyle == "hidden",
                    reverse: true,
                    color: 0
                },
                data: this.convertToData(this.values)
            }, {
                x: {
                    hide: true
                },
                y: {
                    orient: "right",
                    domain: function domain(data) {
                        return self.getAxisMinAndMax(data, 1);
                    },
                    reverse: false,
                    color: 1
                },
                extend: 0
            }];
        }
    },
    beforeMount: function beforeMount() {
        var _ = _juijsChart2.default.include('util.base');

        var colors = !this.colors ? [0, 1] : this.colors;

        var options = {
            type: 'area',
            clip: this.clip,
            symbol: this.shape,
            opacity: this.opacity,
            line: this.borderLine,
            display: this.display
        };

        this.brushes = [_.extend({ target: '0', axis: 0, colors: [colors[0]] }, options), _.extend({ target: '1', axis: 1, colors: [colors[1]] }, options)];
    }
};

/***/ }),
/* 69 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});

var _core = __webpack_require__(1);

var _core2 = _interopRequireDefault(_core);

var _watch = __webpack_require__(2);

var _watch2 = _interopRequireDefault(_watch);

var _created = __webpack_require__(3);

var _created2 = _interopRequireDefault(_created);

var _mounted = __webpack_require__(6);

var _mounted2 = _interopRequireDefault(_mounted);

var _props = __webpack_require__(4);

var _props2 = _interopRequireDefault(_props);

var _methods = __webpack_require__(5);

var _methods2 = _interopRequireDefault(_methods);

var _juijsChart = __webpack_require__(0);

var _juijsChart2 = _interopRequireDefault(_juijsChart);

var _treemap = __webpack_require__(70);

var _treemap2 = _interopRequireDefault(_treemap);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

_juijsChart2.default.use(_treemap2.default);

exports.default = {
    name: 'graph-treemap',
    mixins: [_core2.default, _watch2.default, _created2.default, _mounted2.default, _props2.default, _methods2.default],
    props: {
        textAlign: {
            type: String,
            required: false,
            default: 'center' // or left, right
        },
        textVerticalAlign: {
            typ: String,
            required: false,
            default: 'top' // or bottom, middle
        },
        showText: {
            type: Boolean,
            required: false,
            default: false
        },
        titleDepth: {
            type: Number,
            required: false,
            default: 1
        },
        nodeColor: {
            type: Function,
            required: false,
            default: null
        }
    },
    methods: {
        convertToData: function convertToData(values) {
            var util = _juijsChart2.default.include('util.base');
            var rows = [];

            for (var i = 0; i < values.length; i++) {
                var val = values[i];

                if (util.typeCheck('array', val)) {
                    var row = { index: val[0], text: val[1] };

                    if (val.length == 3 && val[2] > 0) {
                        row['value'] = val[2];
                    }

                    rows.push(row);
                }
            }

            return rows;
        },
        initGraphAxes: function initGraphAxes() {
            return {
                data: this.convertToData(this.values)
            };
        }
    },
    beforeMount: function beforeMount() {
        var ORIENT_MAP = {
            top: 'top',
            middle: 'center',
            bottom: 'bottom'
        };

        var ALIGN_MAP = {
            left: 'start',
            center: 'middle',
            right: 'end'
        };

        this.brushes = [{
            type: 'treemap',
            clip: this.clip,
            colors: this.colors,
            target: ['value'],
            textOrient: ORIENT_MAP[this.textVerticalAlign],
            textAlign: ALIGN_MAP[this.textAlign],
            showText: this.showText,
            titleDepth: this.titleDepth,
            nodeColor: this.nodeColor
        }];
    }
};

/***/ }),
/* 70 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});

var _main = __webpack_require__(0);

var _main2 = _interopRequireDefault(_main);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

_main2.default.define("util.keyparser", [], function () {
    return function () {

        /**
         * @method isIndexDepth
         *
         * @param {String} index
         * @return {Boolean}
         */
        this.isIndexDepth = function (index) {
            if (typeof index == "string" && index.indexOf(".") != -1) {
                return true;
            }

            return false;
        };

        /**
         * @method getIndexList
         *
         * @param {String} index
         * @return {Array}
         */
        this.getIndexList = function (index) {
            // 트리 구조의 모든 키를 배열 형태로 반환
            var resIndex = [],
                strIndexes = ("" + index).split(".");

            for (var i = 0; i < strIndexes.length; i++) {
                resIndex[i] = parseInt(strIndexes[i]);
            }

            return resIndex;
        };

        /**
         * @method changeIndex
         *
         *
         * @param {String} index
         * @param {String} targetIndex
         * @param {String} rootIndex
         * @return {String}
         */
        this.changeIndex = function (index, targetIndex, rootIndex) {
            var rootIndexLen = this.getIndexList(rootIndex).length,
                indexList = this.getIndexList(index),
                tIndexList = this.getIndexList(targetIndex);

            for (var i = 0; i < rootIndexLen; i++) {
                indexList.shift();
            }

            return tIndexList.concat(indexList).join(".");
        };

        /**
         * @method getNextIndex
         *
         * @param {String} index
         * @return {String}
         */
        this.getNextIndex = function (index) {
            // 현재 인덱스에서 +1
            var indexList = this.getIndexList(index),
                no = indexList.pop() + 1;

            indexList.push(no);
            return indexList.join(".");
        };

        /**
         * @method getParentIndex
         *
         *
         * @param {String} index
         * @returns {*}
         */
        this.getParentIndex = function (index) {
            if (!this.isIndexDepth(index)) return null;

            return index.substr(0, index.lastIndexOf("."));
        };
    };
});

_main2.default.define("util.treemap", [], function () {

    return {
        sumArray: function sumArray(arr) {
            var sum = 0;

            for (var i = 0; i < arr.length; i++) {
                sum += arr[i];
            }

            return sum;
        }
    };
});

_main2.default.define("chart.brush.treemap.node", [], function () {

    /**
     * @class chart.brush.treemap.node
     *
     */
    var Node = function Node(data) {
        var self = this;

        this.text = data.text;
        this.value = data.value;
        this.x = data.x;
        this.y = data.y;
        this.width = data.width;
        this.height = data.height;

        /** @property {Integer} [index=null] Index of a specified node */
        this.index = null;

        /** @property {Integer} [nodenum=null] Unique number of a specifiede node at the current depth */
        this.nodenum = null;

        /** @property {ui.tree.node} [parent=null] Variable that refers to the parent of the current node */
        this.parent = null;

        /** @property {Array} [children=null] List of child nodes of a specified node */
        this.children = [];

        /** @property {Integer} [depth=0] Depth of a specified node */
        this.depth = 0;

        function setIndexChild(node) {
            var clist = node.children;

            for (var i = 0; i < clist.length; i++) {
                if (clist[i].children.length > 0) {
                    setIndexChild(clist[i]);
                }
            }
        }

        this.reload = function (nodenum) {
            this.nodenum = !isNaN(nodenum) ? nodenum : this.nodenum;

            if (self.parent) {
                if (this.parent.index == null) this.index = "" + this.nodenum;else this.index = self.parent.index + "." + this.nodenum;
            }

            // 뎁스 체크
            if (this.parent && typeof self.index == "string") {
                this.depth = this.index.split(".").length;
            }

            // 자식 인덱스 체크
            if (this.children.length > 0) {
                setIndexChild(this);
            }
        };

        this.isLeaf = function () {
            return this.children.length == 0 ? true : false;
        };

        this.appendChild = function (node) {
            this.children.push(node);
        };

        this.insertChild = function (nodenum, node) {
            var preNodes = this.children.splice(0, nodenum);
            preNodes.push(node);

            this.children = preNodes.concat(this.children);
        };

        this.removeChild = function (index) {
            for (var i = 0; i < this.children.length; i++) {
                var node = this.children[i];

                if (node.index == index) {
                    this.children.splice(i, 1); // 배열에서 제거
                }
            }
        };

        this.lastChild = function () {
            if (this.children.length > 0) return this.children[this.children.length - 1];

            return null;
        };

        this.lastChildLeaf = function (lastRow) {
            var row = !lastRow ? this.lastChild() : lastRow;

            if (row.isLeaf()) return row;else {
                return this.lastChildLeaf(row.lastChild());
            }
        };
    };

    return Node;
});

_main2.default.define("chart.brush.treemap.nodemanager", ["util.base", "util.keyparser", "chart.brush.treemap.node"], function (_, KeyParser, Node) {

    var NodeManager = function NodeManager() {
        var self = this,
            root = new Node({
            text: null,
            value: -1,
            x: -1,
            y: -1,
            width: -1,
            height: -1
        }),
            iParser = new KeyParser();

        function createNode(data, no, pNode) {
            var node = new Node(data);

            node.parent = pNode ? pNode : null;
            node.reload(no);

            return node;
        }

        function setNodeChildAll(dataList, node) {
            var c_nodes = node.children;

            if (c_nodes.length > 0) {
                for (var i = 0; i < c_nodes.length; i++) {
                    dataList.push(c_nodes[i]);

                    if (c_nodes[i].children.length > 0) {
                        setNodeChildAll(dataList, c_nodes[i]);
                    }
                }
            }
        }

        function getNodeChildLeaf(keys, node) {
            if (!node) return null;
            var tmpKey = keys.shift();

            if (tmpKey == undefined) {
                return node;
            } else {
                return getNodeChildLeaf(keys, node.children[tmpKey]);
            }
        }

        function insertNodeDataChild(index, data) {
            var keys = iParser.getIndexList(index);

            var pNode = self.getNodeParent(index),
                nodenum = keys[keys.length - 1],
                node = createNode(data, nodenum, pNode);

            // 데이터 갱신
            pNode.insertChild(nodenum, node);

            return node;
        }

        function appendNodeData(data) {
            var node = createNode(data, root.children.length, root);
            root.appendChild(node);

            return node;
        }

        function appendNodeDataChild(index, data) {
            var pNode = self.getNode(index),
                cNode = createNode(data, pNode.children.length, pNode);

            pNode.appendChild(cNode);

            return cNode;
        }

        this.appendNode = function () {
            var index = arguments[0],
                data = arguments[1];

            if (!data) {
                return appendNodeData(index);
            } else {
                return appendNodeDataChild(index, data);
            }
        };

        this.insertNode = function (index, data) {
            if (root.children.length == 0 && parseInt(index) == 0) {
                return this.appendNode(data);
            } else {
                return insertNodeDataChild(index, data);
            }
        };

        this.updateNode = function (index, data) {
            var node = this.getNode(index);

            for (var key in data) {
                node.data[key] = data[key];
            }

            node.reload(node.nodenum, true);

            return node;
        };

        this.getNode = function (index) {
            if (index == null) return root.children;else {
                var nodes = root.children;

                if (iParser.isIndexDepth(index)) {
                    var keys = iParser.getIndexList(index);
                    return getNodeChildLeaf(keys, nodes[keys.shift()]);
                } else {
                    return nodes[index] ? nodes[index] : null;
                }
            }
        };

        this.getNodeAll = function (index) {
            var dataList = [],
                tmpNodes = index == null ? root.children : [this.getNode(index)];

            for (var i = 0; i < tmpNodes.length; i++) {
                if (tmpNodes[i]) {
                    dataList.push(tmpNodes[i]);

                    if (tmpNodes[i].children.length > 0) {
                        setNodeChildAll(dataList, tmpNodes[i]);
                    }
                }
            }

            return dataList;
        };

        this.getNodeParent = function (index) {
            // 해당 인덱스의 부모 노드를 가져옴 (단, 해당 인덱스의 노드가 없을 경우)
            var keys = iParser.getIndexList(index);

            if (keys.length == 1) {
                return root;
            } else if (keys.length == 2) {
                return this.getNode(keys[0]);
            } else if (keys.length > 2) {
                keys.pop();
                return this.getNode(keys.join("."));
            }
        };

        this.getRoot = function () {
            return root;
        };
    };

    return NodeManager;
});

_main2.default.define("chart.brush.treemap.container", ["util.treemap"], function (util) {

    var Container = function Container(xoffset, yoffset, width, height) {
        this.xoffset = xoffset; // offset from the the top left hand corner
        this.yoffset = yoffset; // ditto
        this.height = height;
        this.width = width;

        this.shortestEdge = function () {
            return Math.min(this.height, this.width);
        };

        // getCoordinates - for a row of boxes which we've placed
        //                  return an array of their cartesian coordinates
        this.getCoordinates = function (row) {
            var coordinates = [],
                subxoffset = this.xoffset,
                subyoffset = this.yoffset,
                //our offset within the container
            areawidth = util.sumArray(row) / this.height,
                areaheight = util.sumArray(row) / this.width;

            if (this.width >= this.height) {
                for (var i = 0; i < row.length; i++) {
                    coordinates.push([subxoffset, subyoffset, subxoffset + areawidth, subyoffset + row[i] / areawidth]);
                    subyoffset = subyoffset + row[i] / areawidth;
                }
            } else {
                for (var i = 0; i < row.length; i++) {
                    coordinates.push([subxoffset, subyoffset, subxoffset + row[i] / areaheight, subyoffset + areaheight]);
                    subxoffset = subxoffset + row[i] / areaheight;
                }
            }

            return coordinates;
        };

        // cutArea - once we've placed some boxes into an row we then need to identify the remaining area,
        //           this function takes the area of the boxes we've placed and calculates the location and
        //           dimensions of the remaining space and returns a container box defined by the remaining area
        this.cutArea = function (area) {
            if (this.width >= this.height) {
                var areawidth = area / this.height,
                    newwidth = this.width - areawidth;

                return new Container(this.xoffset + areawidth, this.yoffset, newwidth, this.height);
            } else {
                var areaheight = area / this.width,
                    newheight = this.height - areaheight;

                return new Container(this.xoffset, this.yoffset + areaheight, this.width, newheight);
            }
        };
    };

    return Container;
});

_main2.default.define("chart.brush.treemap.calculator", ["util.base", "util.treemap", "chart.brush.treemap.container"], function (_, util, Container) {

    // normalize - the Bruls algorithm assumes we're passing in areas that nicely fit into our
    //             container box, this method takes our raw data and normalizes the data values into
    //             area values so that this assumption is valid.
    function normalize(data, area) {
        var normalizeddata = [],
            sum = util.sumArray(data),
            multiplier = area / sum;

        for (var i = 0; i < data.length; i++) {
            normalizeddata[i] = data[i] * multiplier;
        }

        return normalizeddata;
    }

    // treemapMultidimensional - takes multidimensional data (aka [[23,11],[11,32]] - nested array)
    //                           and recursively calls itself using treemapSingledimensional
    //                           to create a patchwork of treemaps and merge them
    function treemapMultidimensional(data, width, height, xoffset, yoffset) {
        xoffset = typeof xoffset === "undefined" ? 0 : xoffset;
        yoffset = typeof yoffset === "undefined" ? 0 : yoffset;

        var mergeddata = [],
            mergedtreemap,
            results = [];

        if (_.typeCheck("array", data[0])) {
            // if we've got more dimensions of depth
            for (var i = 0; i < data.length; i++) {
                mergeddata[i] = sumMultidimensionalArray(data[i]);
            }

            mergedtreemap = treemapSingledimensional(mergeddata, width, height, xoffset, yoffset);

            for (var i = 0; i < data.length; i++) {
                results.push(treemapMultidimensional(data[i], mergedtreemap[i][2] - mergedtreemap[i][0], mergedtreemap[i][3] - mergedtreemap[i][1], mergedtreemap[i][0], mergedtreemap[i][1]));
            }
        } else {
            results = treemapSingledimensional(data, width, height, xoffset, yoffset);
        }
        return results;
    }

    // treemapSingledimensional - simple wrapper around squarify
    function treemapSingledimensional(data, width, height, xoffset, yoffset) {
        xoffset = typeof xoffset === "undefined" ? 0 : xoffset;
        yoffset = typeof yoffset === "undefined" ? 0 : yoffset;

        //console.log(normalize(data, width * height))
        var rawtreemap = squarify(normalize(data, width * height), [], new Container(xoffset, yoffset, width, height), []);
        return flattenTreemap(rawtreemap);
    }

    // flattenTreemap - squarify implementation returns an array of arrays of coordinates
    //                  because we have a new array everytime we switch to building a new row
    //                  this converts it into an array of coordinates.
    function flattenTreemap(rawtreemap) {
        var flattreemap = [];

        if (rawtreemap) {
            for (var i = 0; i < rawtreemap.length; i++) {
                for (var j = 0; j < rawtreemap[i].length; j++) {
                    flattreemap.push(rawtreemap[i][j]);
                }
            }
        }

        return flattreemap;
    }

    // squarify  - as per the Bruls paper
    //             plus coordinates stack and containers so we get
    //             usable data out of it
    function squarify(data, currentrow, container, stack) {
        var length;
        var nextdatapoint;
        var newcontainer;

        if (data.length === 0) {
            stack.push(container.getCoordinates(currentrow));
            return;
        }

        length = container.shortestEdge();
        nextdatapoint = data[0];

        if (improvesRatio(currentrow, nextdatapoint, length)) {
            currentrow.push(nextdatapoint);
            squarify(data.slice(1), currentrow, container, stack);
        } else {
            newcontainer = container.cutArea(util.sumArray(currentrow), stack);
            stack.push(container.getCoordinates(currentrow));
            squarify(data, [], newcontainer, stack);
        }
        return stack;
    }

    // improveRatio - implements the worse calculation and comparision as given in Bruls
    //                (note the error in the original paper; fixed here)
    function improvesRatio(currentrow, nextnode, length) {
        var newrow;

        if (currentrow.length === 0) {
            return true;
        }

        newrow = currentrow.slice();
        newrow.push(nextnode);

        var currentratio = calculateRatio(currentrow, length),
            newratio = calculateRatio(newrow, length);

        // the pseudocode in the Bruls paper has the direction of the comparison
        // wrong, this is the correct one.
        return currentratio >= newratio;
    }

    // calculateRatio - calculates the maximum width to height ratio of the
    //                  boxes in this row
    function calculateRatio(row, length) {
        var min = Math.min.apply(Math, row),
            max = Math.max.apply(Math, row),
            sum = util.sumArray(row);

        return Math.max(Math.pow(length, 2) * max / Math.pow(sum, 2), Math.pow(sum, 2) / (Math.pow(length, 2) * min));
    }

    // sumMultidimensionalArray - sums the values in a nested array (aka [[0,1],[[2,3]]])
    function sumMultidimensionalArray(arr) {
        var total = 0;

        if (_.typeCheck("array", arr[0])) {
            for (var i = 0; i < arr.length; i++) {
                total += sumMultidimensionalArray(arr[i]);
            }
        } else {
            total = util.sumArray(arr);
        }

        return total;
    }

    return treemapMultidimensional;
});

exports.default = {
    name: "chart.brush.treemap",
    extend: "chart.brush.core",
    component: function component() {
        var _ = _main2.default.include("util.base");
        var Calculator = _main2.default.include("chart.brush.treemap.calculator");
        var NodeManager = _main2.default.include("chart.brush.treemap.nodemanager");

        var TEXT_MARGIN_LEFT = 3;

        /**
         * @class chart.brush.treemap
         *
         * @extends chart.brush.core
         */
        var TreemapBrush = function TreemapBrush() {
            var nodes = new NodeManager(),
                titleKeys = {};

            function convertNodeToArray(key, nodes, result, now) {
                if (!now) now = [];

                for (var i = 0; i < nodes.length; i++) {
                    if (nodes[i].children.length == 0) {
                        now.push(nodes[i][key]);
                    } else {
                        convertNodeToArray(key, nodes[i].children, result, []);
                    }
                }

                result.push(now);
                return result;
            }

            function mergeArrayToNode(keys, values) {
                for (var i = 0; i < keys.length; i++) {
                    if (_.typeCheck("array", keys[i])) {
                        mergeArrayToNode(keys[i], values[i]);
                    } else {
                        var node = nodes.getNode(keys[i]);
                        node.x = values[i][0];
                        node.y = values[i][1];
                        node.width = values[i][2] - values[i][0];
                        node.height = values[i][3] - values[i][1];
                    }
                }
            }

            function isDrawNode(node) {
                if (node.width == 0 && node.height == 0 && node.x == 0 && node.y == 0) {
                    return false;
                }

                return true;
            }

            function getMinimumXY(node, dx, dy) {
                if (node.children.length == 0) {
                    return {
                        x: Math.min(dx, node.x),
                        y: Math.min(dy, node.y)
                    };
                } else {
                    for (var i = 0; i < node.children.length; i++) {
                        return getMinimumXY(node.children[i], dx, dy);
                    }
                }
            }

            function createTitleDepth(self, g, node, sx, sy) {
                var fontSize = self.chart.theme("treemapTitleFontSize"),
                    w = self.axis.area("width"),
                    h = self.axis.area("height"),
                    xy = getMinimumXY(node, w, h);

                var text = self.chart.text({
                    "font-size": fontSize,
                    "font-weight": "bold",
                    fill: self.chart.theme("treemapTitleFontColor"),
                    x: sx + xy.x + TEXT_MARGIN_LEFT,
                    y: sy + xy.y + fontSize,
                    "text-anchor": "start"
                }, _.typeCheck("function", self.brush.format) ? self.format(node) : node.text);

                g.append(text);
                titleKeys[node.index] = true;
            }

            function getRootNodeSeq(node) {
                if (node.parent.depth > 0) {
                    return getRootNodeSeq(node.parent);
                }

                return node.nodenum;
            }

            this.drawBefore = function () {
                for (var i = 0; i < this.axis.data.length; i++) {
                    var d = this.axis.data[i],
                        k = this.getValue(d, "index");

                    nodes.insertNode(k, {
                        text: this.getValue(d, "text", ""),
                        value: this.getValue(d, "value", 0),
                        x: this.getValue(d, "x", 0),
                        y: this.getValue(d, "y", 0),
                        width: this.getValue(d, "width", 0),
                        height: this.getValue(d, "height", 0)
                    });
                }

                var nodeList = nodes.getNode(),
                    preData = convertNodeToArray("value", nodeList, []),
                    preKeys = convertNodeToArray("index", nodeList, []),
                    afterData = Calculator(preData, this.axis.area("width"), this.axis.area("height"));

                mergeArrayToNode(preKeys, afterData);
            };

            this.draw = function () {
                var g = this.svg.group(),
                    sx = this.axis.area("x"),
                    sy = this.axis.area("y"),
                    nodeList = nodes.getNodeAll();

                for (var i = 0; i < nodeList.length; i++) {
                    if (this.brush.titleDepth == nodeList[i].depth) {
                        createTitleDepth(this, g, nodeList[i], sx, sy);
                    }

                    if (!isDrawNode(nodeList[i])) continue;

                    var x = sx + nodeList[i].x,
                        y = sy + nodeList[i].y,
                        w = nodeList[i].width,
                        h = nodeList[i].height;

                    if (this.brush.showText && !titleKeys[nodeList[i].index]) {
                        var cx = x + w / 2,
                            cy = y + h / 2,
                            fontSize = this.chart.theme("treemapTextFontSize");

                        if (this.brush.textOrient == "top") {
                            cy = y + fontSize;
                        } else if (this.brush.textOrient == "bottom") {
                            cy = y + h - fontSize / 2;
                        }

                        if (this.brush.textAlign == "start") {
                            cx = x + TEXT_MARGIN_LEFT;
                        } else if (this.brush.textAlign == "end") {
                            cx = x + w - TEXT_MARGIN_LEFT;
                        }

                        var text = this.chart.text({
                            "font-size": fontSize,
                            fill: this.chart.theme("treemapTextFontColor"),
                            x: cx,
                            y: cy,
                            "text-anchor": this.brush.textAlign
                        }, _.typeCheck("function", this.brush.format) ? this.format(nodeList[i]) : nodeList[i].text);

                        g.append(text);
                    }

                    var elem = this.svg.rect({
                        stroke: this.chart.theme("treemapNodeBorderColor"),
                        "stroke-width": this.chart.theme("treemapNodeBorderWidth"),
                        x: x,
                        y: y,
                        width: w,
                        height: h,
                        fill: this.color(getRootNodeSeq(nodeList[i]))
                    });

                    if (_.typeCheck("function", this.brush.nodeColor)) {
                        var color = this.brush.nodeColor.call(this.chart, nodeList[i]);
                        elem.attr({ fill: this.color(color) });
                    }

                    this.addEvent(elem, nodeList[i]);
                    g.prepend(elem);
                }

                return g;
            };
        };

        TreemapBrush.setup = function () {
            return {
                /** @cfg {"top"/"center"/"bottom" } [orient="top"]  Determines the side on which the tool tip is displayed (top, center, bottom). */
                textOrient: "top", // or bottom
                /** @cfg {"start"/"middle"/"end" } [align="center"] Aligns the title message (start, middle, end).*/
                textAlign: "middle",
                showText: true,
                titleDepth: 1,
                nodeColor: null,
                clip: false,
                format: null
            };
        };

        return TreemapBrush;
    }
};

/***/ }),
/* 71 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});

var _core = __webpack_require__(1);

var _core2 = _interopRequireDefault(_core);

var _watch = __webpack_require__(2);

var _watch2 = _interopRequireDefault(_watch);

var _watchAnimation = __webpack_require__(20);

var _watchAnimation2 = _interopRequireDefault(_watchAnimation);

var _created = __webpack_require__(3);

var _created2 = _interopRequireDefault(_created);

var _mountedAnimation = __webpack_require__(21);

var _mountedAnimation2 = _interopRequireDefault(_mountedAnimation);

var _props = __webpack_require__(4);

var _props2 = _interopRequireDefault(_props);

var _propsAnimation = __webpack_require__(22);

var _propsAnimation2 = _interopRequireDefault(_propsAnimation);

var _propsBlock = __webpack_require__(7);

var _propsBlock2 = _interopRequireDefault(_propsBlock);

var _methods = __webpack_require__(5);

var _methods2 = _interopRequireDefault(_methods);

var _methodsBlock = __webpack_require__(8);

var _methodsBlock2 = _interopRequireDefault(_methodsBlock);

var _juijsChart = __webpack_require__(0);

var _juijsChart2 = _interopRequireDefault(_juijsChart);

var _equalizercolumn = __webpack_require__(74);

var _equalizercolumn2 = _interopRequireDefault(_equalizercolumn);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

_juijsChart2.default.use(_equalizercolumn2.default);

exports.default = {
    name: 'graph-equalizer',
    mixins: [_core2.default, _watch2.default, _watchAnimation2.default, _created2.default, _mountedAnimation2.default, _props2.default, _propsAnimation2.default, _propsBlock2.default, _methods2.default, _methodsBlock2.default],
    props: {
        fixedSize: {
            type: Number,
            required: false,
            default: 0
        },
        minValue: {
            type: Number,
            required: false,
            default: 0
        },
        barMargin: {
            type: Number,
            required: false,
            default: 2
        },
        barPadding: {
            type: Number,
            required: false,
            default: 1
        },
        maxDivisions: {
            type: Number,
            required: false,
            default: 5
        }
    },
    beforeMount: function beforeMount() {
        this.brushes = [{
            type: 'canvas.equalizercolumn',
            clip: this.clip,
            colors: this.colors,
            size: this.fixedSize,
            minSize: this.minValue,
            outerPadding: this.barMargin,
            innerPadding: this.barPadding,
            unit: this.maxDivisions
        }];
    }
};

/***/ }),
/* 72 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});

var _main = __webpack_require__(0);

var _main2 = _interopRequireDefault(_main);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

exports.default = {
    name: "chart.widget.raycast",
    extend: "chart.widget.core",
    component: function component() {
        var _ = _main2.default.include("util.base");

        var DragSelectWidget = function DragSelectWidget() {
            this.emitBlockAndRangeEvent = function (eventType, datas, brush, blockAxis, rangeAxis, e) {
                var blockValue = blockAxis.invert(e.chartX) - 1;
                var area = this.chart.getCache("raycast_area_" + blockValue);

                if (area != null) {
                    if (e.chartX >= area.x1 && e.chartX <= area.x2 && e.chartY >= area.y1 && e.chartY <= area.y2) {
                        this.chart.emit(eventType, [{
                            brush: brush,
                            data: datas[blockValue],
                            dataIndex: blockValue
                        }, e]);
                    }
                }
            };

            this.setRayCastEvent = function (brush) {
                var axis = this.chart.axis(brush.axis);
                var xType = axis.x.type;
                var yType = axis.y.type;
                var blockAxis = xType == "block" ? axis.x : yType == "block" ? axis.y : null;
                var rangeAxis = xType == "range" ? axis.x : yType == "range" ? axis.y : null;

                if (blockAxis != null && rangeAxis != null) {
                    this.on("axis.click", function (e) {
                        this.emitBlockAndRangeEvent("raycast.click", axis.data, brush, blockAxis, rangeAxis, e);
                    }, brush.axis);

                    this.on("axis.dblclick", function (e) {
                        this.emitBlockAndRangeEvent("raycast.dblclick", axis.data, brush, blockAxis, rangeAxis, e);
                    }, brush.axis);

                    this.on("axis.rclick", function (e) {
                        this.emitBlockAndRangeEvent("raycast.rclick", axis.data, brush, blockAxis, rangeAxis, e);
                    }, brush.axis);
                }
            };

            this.draw = function () {
                var g = this.chart.svg.group(),
                    bIndex = this.widget.brush,
                    bIndexes = _.typeCheck("array", bIndex) ? bIndex : [bIndex];

                for (var i = 0; i < bIndexes.length; i++) {
                    var brush = this.chart.get("brush", bIndexes[i]);
                    this.setRayCastEvent(brush);
                }

                return g;
            };
        };

        DragSelectWidget.setup = function () {
            return {
                brush: [0]
            };
        };

        return DragSelectWidget;
    }
};

/***/ }),
/* 73 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});

var _main = __webpack_require__(0);

var _main2 = _interopRequireDefault(_main);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

exports.default = {
    name: "chart.widget.canvas.picker",
    extend: "chart.widget.core",
    component: function component() {
        var _ = _main2.default.include("util.base");

        var CanvasPickerWidget = function CanvasPickerWidget() {
            this.emitActiveEvent = function (brush, eventType) {
                this.on("axis." + eventType, function (e) {
                    var checker = this.chart.getCache('picker');

                    if (checker != null) {
                        var data = checker.func.call(checker.obj, e.chartX, e.chartY);

                        if (data != null) {
                            this.chart.emit("picker." + eventType, [{
                                brush: brush,
                                data: data
                            }, e]);
                        }
                    }
                }, brush.axis);
            };

            this.setCanvasEvents = function (brush) {
                if (this.widget.hover) {
                    this.on('axis.mousemove', function (e) {
                        var checker = this.chart.getCache('picker');

                        if (checker != null) {
                            checker.func.call(checker.obj, e.chartX, e.chartY);
                        }
                    }, brush.axis);
                }

                this.emitActiveEvent(brush, 'click');
                this.emitActiveEvent(brush, 'dblclick');
            };

            this.draw = function () {
                var g = this.chart.svg.group(),
                    bIndex = this.widget.brush,
                    bIndexes = _.typeCheck("array", bIndex) ? bIndex : [bIndex];

                for (var i = 0; i < bIndexes.length; i++) {
                    var brush = this.chart.get("brush", bIndexes[i]);
                    this.setCanvasEvents(brush);
                }

                return g;
            };
        };

        CanvasPickerWidget.setup = function () {
            return {
                hover: false,
                brush: [0]
            };
        };

        return CanvasPickerWidget;
    }
};

/***/ }),
/* 74 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});

var _main = __webpack_require__(0);

var _main2 = _interopRequireDefault(_main);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

exports.default = {
    name: "chart.brush.canvas.equalizercolumn",
    extend: "chart.brush.canvas.core",
    component: function component() {
        var _ = _main2.default.include("util.base");

        var CanvasEqualizerColumnBrush = function CanvasEqualizerColumnBrush() {
            var zeroY = void 0,
                bar_width = void 0,
                is_reverse = void 0;

            this.getTargetSize = function () {
                var width = this.axis.x.rangeBand();

                if (this.brush.size > 0) {
                    return this.brush.size;
                } else {
                    var size = width - this.brush.outerPadding * 2;
                    return size < this.brush.minSize ? this.brush.minSize : size;
                }
            };

            this.getBarElement = function (dataIndex, targetIndex) {
                var style = this.getBarStyle(),
                    color = this.color(targetIndex),
                    value = this.getData(dataIndex)[this.brush.target[targetIndex]],
                    active = this.brush.active,
                    opacity = 1;

                if (_.typeCheck("array", active) && !active.includes(dataIndex) || _.typeCheck("integer", active) && active !== dataIndex) {
                    opacity = style.disableOpacity;
                }

                return {
                    fill: color,
                    "fill-opacity": opacity,
                    stroke: style.borderColor,
                    "stroke-width": style.borderWidth,
                    "stroke-opacity": style.borderOpacity,
                    hidden: value == 0
                };
            };

            this.getBarStyle = function () {
                return {
                    borderColor: this.chart.theme("barBorderColor"),
                    borderWidth: this.chart.theme("barBorderWidth"),
                    borderOpacity: this.chart.theme("barBorderOpacity"),
                    borderRadius: this.chart.theme("barBorderRadius"),
                    disableOpacity: this.chart.theme("barDisableBackgroundOpacity"),
                    circleColor: this.chart.theme("barPointBorderColor")
                };
            };

            this.isErrorColumn = function (i) {
                var error = this.brush.error;

                if (_.typeCheck("array", error) && !error.includes(i) || _.typeCheck("integer", error) && error !== i || error === null) {
                    return false;
                }

                return true;
            };

            this.drawBefore = function () {
                zeroY = this.axis.y(0);
                bar_width = this.getTargetSize();
                is_reverse = this.axis.get("y").reverse;
            };

            this.draw = function () {
                var targets = this.brush.target,
                    padding = this.brush.innerPadding,
                    band = this.axis.y.rangeBand(),
                    unit = band / (this.brush.unit * padding),
                    height = unit + padding,
                    translateY = is_reverse ? 0 : -unit;

                this.eachData(function (data, i) {
                    var offsetX = this.offset("x", i),
                        startX = offsetX - bar_width / 2,
                        startY = this.axis.y(0),
                        y = startY,
                        value = 0,
                        stackList = [];

                    for (var j = 0; j < targets.length; j++) {
                        var yValue = data[targets[j]] + value,
                            endY = this.axis.y(yValue),
                            targetHeight = Math.abs(startY - endY),
                            targetY = targetHeight;

                        if (!this.isErrorColumn(i)) {
                            while (targetY >= height) {
                                var r = _.extend(this.getBarElement(i, j), {
                                    x: startX,
                                    y: y + translateY,
                                    width: bar_width,
                                    height: unit
                                });

                                targetY -= height;
                                y += is_reverse ? height : -height;

                                this.canvas.save();
                                this.canvas.globalAlpha = r["fill-opacity"];
                                this.canvas.beginPath();
                                this.canvas.fillStyle = r.fill;
                                this.canvas.strokeStyle = r.stroke;
                                this.canvas.strokeOpacity = r["stroke-opacity"];
                                this.canvas.lineWidth = r["stroke-width"];
                                this.canvas.rect(r.x, r.y, r.width, r.height);
                                this.canvas.fill();
                                this.canvas.restore();

                                stackList.push(r);
                            }
                        } else {
                            var size = Math.min(this.axis.x.rangeBand(), this.axis.area("height")) * 0.4;
                            var _height = this.axis.area("height") * 0.5;
                            var tick = size * 0.3;
                            var _startX = offsetX - size / 2;
                            var fontSize = _height / 5;
                            var yt = y - tick;
                            var yht = y - _height - tick;
                            var round = 5;

                            this.canvas.save();
                            this.canvas.beginPath();
                            this.canvas.fillStyle = this.chart.theme("equalizerColumnErrorBackgroundColor");
                            this.canvas.moveTo(offsetX, y);
                            this.canvas.lineTo(_startX, yt);
                            this.canvas.lineTo(_startX, yht + round);
                            this.canvas.arcTo(_startX, yht, _startX + round, yht, round);
                            this.canvas.lineTo(_startX + size - round, yht);
                            this.canvas.arcTo(_startX + size, yht, _startX + size, yht + round, round);
                            this.canvas.lineTo(_startX + size, yt);
                            this.canvas.fill();

                            this.canvas.save();
                            this.canvas.font = fontSize + "px " + this.chart.theme("fontFamily");
                            this.canvas.translate(offsetX, y - _height - tick);
                            this.canvas.rotate(Math.PI / 2);
                            this.canvas.textAlign = "center";
                            this.canvas.fillStyle = this.chart.theme("equalizerColumnErrorFontColor");
                            this.canvas.fillText(this.brush.errorText, _height / 1.75, fontSize / 3, _height);

                            this.canvas.restore();
                        }

                        startY = endY;
                        value = yValue;
                    }

                    if (stackList.length > 0) {
                        this.chart.setCache("equalizer_" + i, stackList.length == 0 ? null : stackList[stackList.length - 1]);
                        this.chart.setCache("raycast_area_" + i, {
                            x1: stackList[0].x,
                            x2: stackList[0].x + stackList[0].width,
                            y2: this.axis.y(this.axis.y.min()),
                            y1: stackList[stackList.length - 1].y
                        });
                    }
                });

                this.drawAnimation();
            };

            this.drawAnimation = function () {
                var MAX_DISTANCE = 8; // 애니메이션 움직인 최대 반경 (0px ~ 10px)
                var UP_SEC_PER_MOVE = 20; // 초당 20픽셀 이동
                var DOWN_SEC_PER_MOVE = 30; // 초당 30픽셀 이동
                var TOP_PADDING = -3;
                var TOTAL_PADDING = -8;

                this.eachData(function (data, i) {
                    if (!this.isErrorColumn(i)) {
                        var r = this.chart.getCache("equalizer_" + i);
                        var total = 0;

                        for (var j = 0; j < this.brush.target.length; j++) {
                            total += data[this.brush.target[j]];
                        }

                        if (r != null) {
                            var tpf = this.chart.getCache("tpf", 1);
                            var status = this.chart.getCache("equalizer_move_" + i, { direction: -1, distance: 0 });
                            var speed = status.direction == -1 ? UP_SEC_PER_MOVE : DOWN_SEC_PER_MOVE;

                            status.distance += status.direction * speed * tpf;

                            // 애니메이션-바 방향 벡터 설정
                            if (Math.abs(status.distance) >= MAX_DISTANCE) {
                                status.direction = 1;
                            } else if (status.distance >= 0) {
                                status.direction = -1;
                            }

                            // 애니메이션-바 최소/최대 위치 설정
                            if (status.distance < -MAX_DISTANCE) {
                                status.distance = -MAX_DISTANCE;
                            } else if (status.distance > 0) {
                                status.distance = 0;
                            }

                            var ry = r.y + status.distance + TOP_PADDING;

                            this.canvas.save();
                            this.canvas.globalAlpha = r["fill-opacity"];
                            this.canvas.strokeStyle = r.fill;
                            this.canvas.lineWidth = r.height * 0.7;
                            this.canvas.beginPath();
                            this.canvas.moveTo(r.x, ry);
                            this.canvas.lineTo(r.x + r.width, ry);
                            this.canvas.closePath();
                            this.canvas.stroke();

                            this.canvas.fillStyle = this.chart.theme("barFontColor");
                            this.canvas.font = this.chart.theme("barFontSize") + "px";
                            this.canvas.textAlign = "center";
                            this.canvas.textBaseline = "middle";
                            this.canvas.fillText(total, r.x + r.width / 2, ry + TOTAL_PADDING);
                            this.canvas.fill();
                            this.canvas.restore();

                            this.chart.setCache("equalizer_move_" + i, status);
                        }
                    }
                });
            };
        };

        CanvasEqualizerColumnBrush.setup = function () {
            return {
                /** @cfg {Number} [size=0] Set a fixed size of the bar. */
                size: 0,
                /** @cfg {Number} [minSize=0] Sets the minimum size as it is not possible to draw a bar when the value is 0. */
                minSize: 0,
                /** @cfg {Number} [outerPadding=15] Determines the outer margin of a stack bar. */
                outerPadding: 15,
                /** @cfg {Number} [innerPadding=1] Determines the inner margin of a bar. */
                innerPadding: 1,
                /** @cfg {Number} [unit=5] Determines the reference value that represents the color.*/
                unit: 1,
                /** @cfg {Number | Array} [active=null] Activates the bar of an applicable index. */
                active: null,
                /** @cfg {Number | Array} [active=null] Activates the bar of an applicable index. */
                error: null,
                errorText: "Stopped"
            };
        };

        return CanvasEqualizerColumnBrush;
    }
};

/***/ }),
/* 75 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});

var _core = __webpack_require__(1);

var _core2 = _interopRequireDefault(_core);

var _watch = __webpack_require__(2);

var _watch2 = _interopRequireDefault(_watch);

var _watchAnimation = __webpack_require__(20);

var _watchAnimation2 = _interopRequireDefault(_watchAnimation);

var _created = __webpack_require__(3);

var _created2 = _interopRequireDefault(_created);

var _mountedAnimation = __webpack_require__(21);

var _mountedAnimation2 = _interopRequireDefault(_mountedAnimation);

var _props = __webpack_require__(4);

var _props2 = _interopRequireDefault(_props);

var _propsAnimation = __webpack_require__(22);

var _propsAnimation2 = _interopRequireDefault(_propsAnimation);

var _methods = __webpack_require__(5);

var _methods2 = _interopRequireDefault(_methods);

var _juijsChart = __webpack_require__(0);

var _juijsChart2 = _interopRequireDefault(_juijsChart);

var _activebubble = __webpack_require__(76);

var _activebubble2 = _interopRequireDefault(_activebubble);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

_juijsChart2.default.use(_activebubble2.default);

exports.default = {
    name: 'graph-activebubble',
    mixins: [_core2.default, _watch2.default, _watchAnimation2.default, _created2.default, _mountedAnimation2.default, _props2.default, _propsAnimation2.default, _methods2.default],
    props: {
        gravity: {
            type: Number,
            required: false,
            default: 0.2
        },
        radius: {
            type: Number,
            required: false,
            default: 20
        },
        opacity: {
            type: Number,
            required: false,
            default: 1
        }
    },
    methods: {
        convertToData: function convertToData(values) {
            var data = [];

            for (var i = 0; i < values.length; i++) {
                var row = values[i];

                if (row.length == 2) {
                    data.push({
                        '0': row[0],
                        '1': row[1]
                    });
                }
            }

            return data;
        },
        initGraphAxes: function initGraphAxes() {
            return {
                keymap: {
                    'startTime': '0',
                    'duration': '1'
                },
                data: this.convertToData(this.values)
            };
        }
    },
    beforeMount: function beforeMount() {
        this.brushes = [{
            type: 'canvas.activebubble',
            clip: this.clip,
            colors: this.colors,
            gravity: this.gravity,
            radius: this.radius,
            opacity: this.opacity
        }];
    }
};

/***/ }),
/* 76 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _main = __webpack_require__(0);

var _main2 = _interopRequireDefault(_main);

var _mortalbubble = __webpack_require__(77);

var _mortalbubble2 = _interopRequireDefault(_mortalbubble);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

_main2.default.use(_mortalbubble2.default);

var ActiveBubble = function () {
    function ActiveBubble(renderContext, contextWidth, contextHeight, gravity) {
        _classCallCheck(this, ActiveBubble);

        this.renderContext = renderContext;
        this.contextWidth = contextWidth;
        this.contextHeight = contextHeight;

        this.gravity = gravity;
        this.data = []; // MortalBubble
        this.isArrange = false;
    }

    _createClass(ActiveBubble, [{
        key: 'preCheck',
        value: function preCheck() {
            for (var i = 0; i < this.data.length; i++) {
                var bubble = this.data[i];
                if (!bubble.active) {
                    this.data[i] = null;
                    this.data.splice(i, 1);
                }
            }

            return this.data.length > 0;
        }
    }, {
        key: 'draw',
        value: function draw() {
            if (!this.preCheck()) return;

            var collisions = [],
                dups = [];

            for (var i = 0; i < this.data.length; i++) {
                // force gravity
                var bubble = this.data[i];
                var gDirection = [1, 0];
                bubble.force([gDirection[0] * bubble.mass * this.gravity, gDirection[1] * bubble.mass * this.gravity]);

                bubble.update();
            }

            for (var _i = 0; _i < this.data.length; _i++) {
                for (var j = 0; j < this.data.length; j++) {
                    if (_i == j) continue;
                    var me = this.data[_i];
                    var other = this.data[j];
                    var dist = me.distance(other);
                    var radiusSum = me.radius + other.radius;
                    if (radiusSum - dist > 1) {
                        collisions.push([me, other]);
                    }
                }
            }

            if (collisions.length == 0) {
                this.isArrange = true;
            }

            for (var _i2 = 0; _i2 < collisions.length - 1; _i2++) {
                var _me = collisions[_i2];
                for (var _j = _i2 + 1; _j < collisions.length; _j++) {
                    var _other = collisions[_j];
                    if (_me[0] == _other[0] && _me[1] == _other[1] || _me[1] == _other[0] && _me[0] == _other[1]) {
                        dups.push(_j);
                    }
                }
            }

            for (var _i3 = 0; _i3 < collisions.length; _i3++) {
                if (dups.indexOf(_i3) != -1) continue;

                var collision = collisions[_i3];
                var _me2 = collision[0];
                var _other2 = collision[1];
                var _radiusSum = _me2.radius + _other2.radius;
                var _dist = _me2.distance(_other2);
                var normal = [_other2.pos[0] - _me2.pos[0], _other2.pos[1] - _me2.pos[1]];
                var len = Math.sqrt(normal[0] * normal[0] + normal[1] * normal[1]);
                normal = [normal[0] / len, normal[1] / len];
                var size = _radiusSum - _dist;
                if (_other2.pos[0] == _me2.pos[0] && _other2.pos[1] == _me2.pos[1]) {
                    normal = [0, -1];
                }

                _me2.pos = [-size / 2 * normal[0] + _me2.pos[0], -size / 2 * normal[1] + _me2.pos[1]];

                _other2.pos = [size / 2 * normal[0] + _other2.pos[0], size / 2 * normal[1] + _other2.pos[1]];

                // const c = 0.01;
                var meForce = [normal[0] * _me2.accel[0], normal[1] * _me2.accel[1]];
                var otherForce = [normal[0] * _other2.accel[0], normal[1] * _other2.accel[1]];

                if (_me2.pos[0] < _other2.pos[0]) {
                    _me2.veloc = [_me2.veloc[0] * 0.7, _me2.veloc[1] * 0.99];
                    _me2.force([-otherForce[0], -otherForce[1]]);
                } else {
                    if (this.isArrange) {
                        _me2.veloc = [_other2.pos[0] > _me2.pos[0] ? -1 : 1, _other2.pos[1] > _me2.pos[1] ? -1 : 1];
                        _me2.force([-meForce[0], -meForce[1]]);
                    }

                    _other2.veloc = [_other2.veloc[0] * 0.7, _other2.veloc[1] * 0.99];
                    _other2.force([-meForce[0], -meForce[1]]);
                }
            }

            var now = new Date().getTime();
            for (var _i4 = 0; _i4 < this.data.length; _i4++) {
                var _me3 = this.data[_i4];

                if (_me3.pos[0] > this.contextWidth) {
                    _me3.pos[0] = this.contextWidth;
                }
                if (_me3.pos[1] > this.contextHeight) {
                    _me3.pos[1] = this.contextHeight;
                } else if (_me3.pos[1] < 0) {
                    _me3.pos[1] = 0;
                }

                this.data[_i4].draw(this.renderContext, now);
            }
        }
    }]);

    return ActiveBubble;
}();

exports.default = {
    name: "chart.brush.canvas.activebubble",
    extend: "chart.brush.canvas.core",
    component: function component() {
        var MortalBubble = _main2.default.include("util.canvas.base.mortalbubble");
        var ColorUtil = _main2.default.include("util.color");

        var CanvasActiveBubbleBrush = function CanvasActiveBubbleBrush() {
            function hexToRgba(color, opacity) {
                var rgb = ColorUtil.rgb(color);
                return 'rgba(' + rgb.r + ',' + rgb.g + ',' + rgb.b + ',' + opacity + ')';
            }

            this.drawBefore = function () {
                var activeBubbleCount = this.chart.getCache('active_bubble_count', 0);
                var dataCount = this.axis.data.length;

                if (this.chart.getCache('active_bubble') == null) {
                    this.chart.setCache('active_bubble', new ActiveBubble(this.canvas, this.axis.area('width'), this.axis.area('height'), this.brush.gravity));
                }

                if (activeBubbleCount != dataCount) {
                    var activeBubble = this.chart.getCache('active_bubble');
                    activeBubble.isArrange = false;

                    this.chart.setCache('active_bubble_count', dataCount);
                }
            };

            this.draw = function () {
                var activeBubble = this.chart.getCache('active_bubble');

                var index = 0;
                while (this.axis.data.length > 0) {
                    var color = this.color(index),
                        data = this.axis.data.shift(),
                        startTime = this.getValue(data, "startTime", Date.now()),
                        duration = this.getValue(data, "duration", 1000);

                    activeBubble.data.push(new MortalBubble(startTime, duration, this.brush.radius, hexToRgba(color, this.brush.opacity), hexToRgba(color, 0.2)));
                    index++;
                }

                activeBubble.draw();
            };
        };

        CanvasActiveBubbleBrush.setup = function () {
            return {
                gravity: 0.2,
                radius: 20,
                opacity: 1
            };
        };

        return CanvasActiveBubbleBrush;
    }
};

/***/ }),
/* 77 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});

var _main = __webpack_require__(0);

var _main2 = _interopRequireDefault(_main);

var _base = __webpack_require__(32);

var _base2 = _interopRequireDefault(_base);

var _kinetic = __webpack_require__(33);

var _kinetic2 = _interopRequireDefault(_kinetic);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

_main2.default.use(_base2.default, _kinetic2.default);

exports.default = {
    name: "util.canvas.base.mortalbubble",
    extend: "util.canvas.base.kinetic",
    component: function component() {
        var CanvasUtil = _main2.default.include("util.canvas.base");

        var MortalBubble = function MortalBubble(birthtime, age) {
            var radius = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : 20;
            var color = arguments.length > 3 && arguments[3] !== undefined ? arguments[3] : '#497eff';
            var shadowColor = arguments.length > 4 && arguments[4] !== undefined ? arguments[4] : 'rgba(16,116,252,0.2)';

            this.active = true;
            this.birthtime = birthtime;
            this.age = age;
            this.radius = radius;
            this.color = color;
            this.shadowColor = shadowColor;
            this.force([30, 0]);

            this.draw = function (context, now) {
                context.shadowColor = this.shadowColor;
                context.shadowBlur = 10;
                context.shadowOffsetX = 0;
                context.shadowOffsetY = 10;

                var util = new CanvasUtil(context);
                var d = this.age - (now - this.birthtime);
                var radius = this.radius;
                var animSpeed = 3;

                if (d <= 0) {
                    this.active = false;
                    return;
                }

                if (d <= 100 * animSpeed) {
                    radius *= (100 * animSpeed - d) / (100 * animSpeed) + 1;
                }

                if (d <= 80 * animSpeed) {
                    var x = (80 * animSpeed - d) / (80 * animSpeed);
                    var sd = (radius / 3 - 2) * x + 2;
                    var ed = (radius / 3 - 2) * Math.sin(Math.PI / 2 * x) + 2;
                    var stroke = 3 * x + 2;
                    context.lineCap = 'round';
                    util.drawLine(this.pos[0] + sd, this.pos[1], this.pos[0] + ed, this.pos[1], this.color, stroke);
                    util.drawLine(this.pos[0] - sd, this.pos[1], this.pos[0] - ed, this.pos[1], this.color, stroke);
                    util.drawLine(this.pos[0], this.pos[1] + sd, this.pos[0], this.pos[1] + ed, this.color, stroke);
                    util.drawLine(this.pos[0], this.pos[1] - sd, this.pos[0], this.pos[1] - ed, this.color, stroke);
                    context.lineCap = 'butt';
                } else {
                    util.drawCircle(this.pos[0], this.pos[1], radius, this.color);
                }
            };
        };

        return MortalBubble;
    }
};

/***/ }),
/* 78 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});

var _core = __webpack_require__(1);

var _core2 = _interopRequireDefault(_core);

var _watch = __webpack_require__(2);

var _watch2 = _interopRequireDefault(_watch);

var _watchAnimation = __webpack_require__(20);

var _watchAnimation2 = _interopRequireDefault(_watchAnimation);

var _created = __webpack_require__(3);

var _created2 = _interopRequireDefault(_created);

var _mountedAnimation = __webpack_require__(21);

var _mountedAnimation2 = _interopRequireDefault(_mountedAnimation);

var _props = __webpack_require__(4);

var _props2 = _interopRequireDefault(_props);

var _propsAnimation = __webpack_require__(22);

var _propsAnimation2 = _interopRequireDefault(_propsAnimation);

var _methods = __webpack_require__(5);

var _methods2 = _interopRequireDefault(_methods);

var _juijsChart = __webpack_require__(0);

var _juijsChart2 = _interopRequireDefault(_juijsChart);

var _bubblecloud = __webpack_require__(79);

var _bubblecloud2 = _interopRequireDefault(_bubblecloud);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

_juijsChart2.default.use(_bubblecloud2.default);

exports.default = {
    name: 'graph-bubblecloud',
    mixins: [_core2.default, _watch2.default, _watchAnimation2.default, _created2.default, _mountedAnimation2.default, _props2.default, _propsAnimation2.default, _methods2.default],
    methods: {
        convertToData: function convertToData(values) {
            var data = [];

            for (var i = 0; i < values.length; i++) {
                var row = values[i],
                    value = {};

                for (var j = 0; j < row.length; j++) {
                    value['' + j] = row[j];
                }

                data.push(value);
            }

            return data;
        },
        initGraphAxes: function initGraphAxes() {
            return {
                keymap: {
                    'title': '0',
                    'capacity': '1'
                },
                data: this.convertToData(this.values)
            };
        }
    },
    beforeMount: function beforeMount() {
        this.brushes = [{
            type: 'canvas.bubblecloud',
            clip: this.clip,
            colors: this.colors
        }];
    }
};

/***/ }),
/* 79 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _main = __webpack_require__(0);

var _main2 = _interopRequireDefault(_main);

var _bubble2 = __webpack_require__(80);

var _bubble3 = _interopRequireDefault(_bubble2);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

_main2.default.use(_bubble3.default);

var BubbleCloud = function () {
    function BubbleCloud(renderContext, contextWidth, contextHeight) {
        _classCallCheck(this, BubbleCloud);

        this.renderContext = renderContext;
        this.contextWidth = contextWidth;
        this.contextHeight = contextHeight;

        this.bubbles = {}; // [url: string]: Bubble<PopularPage>
        this.animationAlpha = 0.1;
        this.hoverBubble = null;
    }

    _createClass(BubbleCloud, [{
        key: 'processData',
        value: function processData(nextData) {
            var _this = this;

            if (nextData == null) return;

            var Bubble = _main2.default.include("util.canvas.base.bubble");

            var count = nextData.reduce(function (a, b) {
                return a + b.count;
            }, 0);
            var isChanged = false;

            for (var key in this.bubbles) {
                this.bubbles[key].mark = false;
            }var radiusSize = function radiusSize(c) {
                var s = _this.contextWidth > _this.contextHeight ? _this.contextHeight : _this.contextWidth;
                return c / count * (s / 6) + 50;
            };

            nextData.forEach(function (e) {
                var bubble = _this.bubbles[e.name];
                if (bubble == null) {
                    var _bubble = new Bubble(radiusSize(e.count), e.name, e.color, e.shadowColor, e.textColor, e.textStyle);
                    _bubble.data = e;
                    _bubble.mark = true;
                    _bubble.pos = [Math.random() * _this.contextWidth, Math.random() * _this.contextHeight];

                    _this.bubbles[e.name] = _bubble;
                    isChanged = true;
                } else {
                    bubble.mark = true;
                    var newRadius = radiusSize(e.count);

                    if (Math.abs(bubble.radius - newRadius) > 20) {
                        bubble.radius = newRadius;
                        isChanged = true;
                    }
                }
            });

            for (var _key in this.bubbles) {
                var bubble = this.bubbles[_key];
                // sweep
                if (!bubble.mark) {
                    delete this.bubbles[_key];
                    isChanged = true;
                }
            }

            if (isChanged) this.animationAlpha = 0.1;
        }
    }, {
        key: 'start',
        value: function start(data) {
            this.bubbles = {};
            this.processData(data);
        }
    }, {
        key: 'draw',
        value: function draw() {
            this.animationAlpha *= 0.99;

            var bubbles = Object.values(this.bubbles);
            if (this.animationAlpha < 0) this.animationAlpha = 0;

            var center = [this.contextWidth / 2, this.contextHeight / 2];
            for (var i = 0; i < bubbles.length; i++) {
                // force gravity
                var bubble = bubbles[i];
                var g = [center[0] - bubble.pos[0], center[1] - bubble.pos[1]];
                bubble.pos = [bubble.pos[0] + g[0] * this.animationAlpha, bubble.pos[1] + g[1] * this.animationAlpha];
            }

            var jitter = 0.5;
            var collisionPadding = 4;

            for (var _i = 0; _i < bubbles.length; _i++) {
                // collapse testing
                for (var j = 0; j < bubbles.length; j++) {
                    if (_i == j) continue;
                    var me = bubbles[_i];
                    var other = bubbles[j];
                    var dist = me.distance(other);
                    var minDist = me.radius + other.radius + collisionPadding;
                    if (dist < minDist) {
                        var d = (dist - minDist) / dist * jitter;
                        var dx = (me.pos[0] - other.pos[0]) * d;
                        var dy = (me.pos[1] - other.pos[1]) * d;

                        me.pos[0] -= dx;
                        me.pos[1] -= dy;
                        other.pos[0] += dx;
                        other.pos[1] += dy;
                    }
                }
            }

            var now = new Date().getTime();
            for (var _i2 = 0; _i2 < bubbles.length; _i2++) {
                var _me = bubbles[_i2];
                _me.update();
                if (this.hoverBubble && this.hoverBubble != _me) {
                    _me.dim = true;
                } else _me.dim = false;

                bubbles[_i2].draw(this.renderContext, now);
            }
        }
    }, {
        key: 'pick',
        value: function pick(x, y) {
            var isHover = false;

            var bubbles = Object.values(this.bubbles);
            for (var i = 0; i < bubbles.length; i++) {
                var d = bubbles[i].distancePos([x, y]);
                if (d < bubbles[i].radius) {
                    this.hoverBubble = bubbles[i];
                    isHover = true;
                    break;
                }
            }

            if (!isHover) this.hoverBubble = null;

            return this.hoverBubble != null ? this.hoverBubble.data.origin : null;
        }
    }]);

    return BubbleCloud;
}();

exports.default = {
    name: "chart.brush.canvas.bubblecloud",
    extend: "chart.brush.canvas.core",
    component: function component() {
        var ColorUtil = _main2.default.include("util.color");

        var CanvasBubbleCloudBrush = function CanvasBubbleCloudBrush() {
            function hexToRgba(color, opacity) {
                var rgb = ColorUtil.rgb(color);
                return 'rgba(' + rgb.r + ',' + rgb.g + ',' + rgb.b + ',' + opacity + ')';
            }

            this.draw = function () {
                var bubbleCloud = this.chart.getCache('bubble_cloud'),
                    bubbleData = this.chart.getCache('bubble_data');

                if (bubbleCloud != null && bubbleData != null && bubbleData == this.axis.data) {
                    bubbleCloud.draw();
                } else {
                    bubbleCloud = new BubbleCloud(this.canvas, this.axis.area('width'), this.axis.area('height'));

                    this.eachData(function (data, index) {
                        var color = this.color(index, null),
                            name = this.getValue(data, 'title', 'Unknown'),
                            count = this.getValue(data, 'capacity', 1);

                        var bubbleData = {
                            name: name,
                            count: count,
                            color: color,
                            shadowColor: hexToRgba(color, 0.2),
                            textColor: this.chart.theme('bubbleCloudFontColor'),
                            textStyle: this.chart.theme('bubbleCloudFontWeight') + ' ' + this.chart.theme('bubbleCloudFontSize') + 'px ' + this.chart.theme('fontFamily'),
                            origin: data
                        };

                        bubbleCloud.bubbles[name] = bubbleData;
                    });

                    bubbleCloud.start(Object.values(bubbleCloud.bubbles));
                    bubbleCloud.draw();

                    this.chart.setCache('picker', { obj: bubbleCloud, func: bubbleCloud.pick });
                    this.chart.setCache('bubble_cloud', bubbleCloud);
                    this.chart.setCache('bubble_data', this.axis.data);
                }
            };
        };

        return CanvasBubbleCloudBrush;
    }
};

/***/ }),
/* 80 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});

var _main = __webpack_require__(0);

var _main2 = _interopRequireDefault(_main);

var _base = __webpack_require__(32);

var _base2 = _interopRequireDefault(_base);

var _kinetic = __webpack_require__(33);

var _kinetic2 = _interopRequireDefault(_kinetic);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

_main2.default.use(_base2.default, _kinetic2.default);

exports.default = {
    name: "util.canvas.base.bubble",
    extend: "util.canvas.base.kinetic",
    component: function component() {
        var CanvasUtil = _main2.default.include("util.canvas.base");

        var Bubble = function Bubble(radius, text) {
            var color = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : '#497eff';
            var shadowColor = arguments.length > 3 && arguments[3] !== undefined ? arguments[3] : 'rgba(16,116,252,0.2)';
            var textColor = arguments.length > 4 && arguments[4] !== undefined ? arguments[4] : '#fff';
            var textStyle = arguments.length > 5 && arguments[5] !== undefined ? arguments[5] : 'bold 11px Noto Sans KR';

            this.mark = false;
            this.dim = false;
            this.radius = radius;
            this.text = text;
            this.color = color;
            this.shadowColor = shadowColor;
            this.textColor = textColor;

            this.draw = function (context, now) {
                if (this.dim) context.globalAlpha = 0.5;

                context.shadowColor = this.shadowColor;
                context.shadowBlur = 10;
                context.shadowOffsetX = 0;
                context.shadowOffsetY = 10;

                var util = new CanvasUtil(context);
                util.drawCircle(this.pos[0], this.pos[1], this.radius, this.color);
                context.fillStyle = this.textColor;
                context.textAlign = 'center';
                context.font = textStyle;
                context.fillText(this.text, this.pos[0], this.pos[1] + 5);
                context.globalAlpha = 1.0;
            };
        };

        return Bubble;
    }
};

/***/ }),
/* 81 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});

var _core = __webpack_require__(13);

var _core2 = _interopRequireDefault(_core);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var ORIENT_MAP = {
    top: 'top',
    middle: 'center',
    bottom: 'bottom'
};

var ALIGN_MAP = {
    left: 'start',
    center: 'middle',
    right: 'end'
};

exports.default = {
    name: 'note',
    mixins: [_core2.default],
    props: {
        text: {
            type: String,
            required: true,
            default: ''
        },
        align: {
            type: String,
            required: false,
            default: 'center' // or left, right
        },
        verticalAlign: {
            typ: String,
            required: false,
            default: 'top' // or bottom, middle
        },
        dx: {
            type: Number,
            required: false,
            default: 0
        },
        dy: {
            type: Number,
            required: false,
            default: 0
        },
        size: {
            type: Number,
            required: false
        },
        color: {
            type: String,
            required: false
        }
    },
    watch: {
        text: function text(newVal, oldVal) {
            this.$parent.chart.updateWidget(this.index, {
                text: newVal
            });

            this.$parent.chart.render(true);
        },
        align: function align(newVal, oldVal) {
            if (newVal == oldVal || newVal != "left" && newVal != "center" && newVal != "right") return;

            this.$parent.chart.updateWidget(this.index, {
                align: ALIGN_MAP[newVal]
            });

            this.$parent.chart.render(true);
        },
        verticalAlign: function verticalAlign(newVal, oldVal) {
            if (newVal == oldVal || newVal != "top" && newVal != "middle" && newVal != "bottom") return;

            this.$parent.chart.updateWidget(this.index, {
                orient: ORIENT_MAP[newVal]
            });

            this.$parent.chart.render(true);
        }
    },
    beforeMount: function beforeMount(e) {
        this.$parent.widgets.push({
            type: 'title',
            text: this.text,
            orient: ORIENT_MAP[this.verticalAlign],
            align: ALIGN_MAP[this.align],
            dx: this.dx,
            dy: this.dy,
            size: this.size,
            color: this.color
        });
    }
};

/***/ }),
/* 82 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});

var _core = __webpack_require__(13);

var _core2 = _interopRequireDefault(_core);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

exports.default = {
    name: 'tooltip',
    mixins: [_core2.default],
    props: {
        names: {
            type: Array,
            required: false
        },
        position: {
            type: String,
            required: false,
            default: 'top' // or top, bottom, left, right
        },
        showAnchor: {
            type: Boolean,
            required: false,
            default: true
        }
    },
    watch: {
        names: function names(newVal, oldVal) {
            this.names = newVal;
            this.$parent.chart.render(true);
        }
    },
    beforeMount: function beforeMount(e) {
        var self = this;

        this.$parent.widgets.push({
            type: 'tooltip',
            brush: this.brushes,
            orient: this.position,
            anchor: this.showAnchor,
            format: function format(data, key) {
                // TODO: 좋은 방법은 아닌 것 같다. ㅠㅠ
                if (self.$parent.$vnode.tag.indexOf('graph-treemap') != -1) {
                    return {
                        key: data.text,
                        value: this.format(data[key])
                    };
                } else {
                    if (data != null) {
                        return {
                            key: self.names[key],
                            value: this.format(data[key])
                        };
                    } else {
                        return self.names[key];
                    }
                }
            }
        });
    }
};

/***/ }),
/* 83 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});

var _typeof = typeof Symbol === "function" && typeof Symbol.iterator === "symbol" ? function (obj) { return typeof obj; } : function (obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; };

var _core = __webpack_require__(13);

var _core2 = _interopRequireDefault(_core);

var _juijsChart = __webpack_require__(0);

var _juijsChart2 = _interopRequireDefault(_juijsChart);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

exports.default = {
    name: 'guideline',
    mixins: [_core2.default],
    props: {
        tooltipX: {
            type: Boolean,
            required: false,
            default: false
        },
        tooltipY: {
            type: Boolean,
            required: false,
            default: true
        }
    },
    beforeMount: function beforeMount(e) {
        var time = _juijsChart2.default.include('util.time');
        var format = this.$parent.axisFormat;

        var formatFunc = function formatFunc(value) {
            if ((typeof value === 'undefined' ? 'undefined' : _typeof(value)) == 'object' && typeof format == 'string') {
                return time.format(value, format);
            } else if (typeof value == 'number') {
                return Math.round(value);
            }

            return value;
        };

        var opts = { type: 'cross' };
        if (this.tooltipX) opts.xFormat = formatFunc;
        if (this.tooltipY) opts.yFormat = formatFunc;

        this.$parent.widgets.push(opts);
    }
};

/***/ }),
/* 84 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});

var _core = __webpack_require__(13);

var _core2 = _interopRequireDefault(_core);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

exports.default = {
    name: 'legends',
    mixins: [_core2.default],
    props: {
        names: {
            type: Array,
            required: true
        },
        align: {
            type: String,
            required: false,
            default: 'center' // or start, end
        },
        position: {
            typ: String,
            required: false,
            default: 'bottom' // or top, left, right
        },
        dx: {
            type: Number,
            required: false,
            default: 0
        },
        dy: {
            type: Number,
            required: false,
            default: 0
        },
        filter: {
            type: Boolean,
            required: false,
            default: false
        },
        colors: {
            type: Array,
            required: false
        }
    },
    watch: {
        names: function names(newVal, oldVal) {
            this.names = newVal;
            this.$parent.chart.render(true);
        }
    },
    beforeMount: function beforeMount(e) {
        var self = this;

        var ALIGN_MAP = {
            left: 'start',
            center: 'center',
            right: 'end'
        };

        this.$parent.widgets.push({
            type: 'legend',
            brush: this.brushes,
            orient: this.position,
            align: ALIGN_MAP[this.align],
            dx: this.dx,
            dy: this.dy,
            filter: this.filter,
            colors: this.color,
            format: function format(key) {
                return this.format(self.names[key]);
            }
        });
    }
};

/***/ }),
/* 85 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});

var _core = __webpack_require__(13);

var _core2 = _interopRequireDefault(_core);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

exports.default = {
    name: 'rotate3d',
    mixins: [_core2.default],
    beforeMount: function beforeMount(e) {
        this.$parent.widgets.push({
            type: 'polygon.rotate3d'
        });
    }
};

/***/ })
/******/ ]);