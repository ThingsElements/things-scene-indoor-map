(function e(t,n,r){function s(o,u){if(!n[o]){if(!t[o]){var a=typeof require=="function"&&require;if(!u&&a)return a(o,!0);if(i)return i(o,!0);var f=new Error("Cannot find module '"+o+"'");throw f.code="MODULE_NOT_FOUND",f}var l=n[o]={exports:{}};t[o][0].call(l.exports,function(e){var n=t[o][1][e];return s(n?n:e)},l,l.exports,e,t,n,r)}return n[o].exports}var i=typeof require=="function"&&require;for(var o=0;o<r.length;o++)s(r[o]);return s})({1:[function(require,module,exports){
'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var _scene = scene;
var Component = _scene.Component;
var Container = _scene.Container;
var CardLayout = _scene.CardLayout;

var Floor = function (_Container) {
  _inherits(Floor, _Container);

  function Floor() {
    _classCallCheck(this, Floor);

    return _possibleConstructorReturn(this, Object.getPrototypeOf(Floor).apply(this, arguments));
  }

  _createClass(Floor, [{
    key: 'mutable',

    /*
     * PATH 리스트를 직접 수정할 수 있는 지를 결정한다.
     *
     * 일반적으로 PATH는 바운드 생성을 위해서 논리적으로 생성되므로, 직접 수정하지 않는다.(return false)
     * 그러나, 각 꼭지점들이 개별로 움직이는 다각형류는 path 라는 모델데이타를 가지므로, 직접수정이 가능할 수 있다.(return true)
     *
     * Immutable 컴포넌트의 형상을 바꾸는 방법은 바운드를 이용한 리사이즈나, 특별한 컨트롤을 통해서 가능하다.
     */
    get: function get() {
      return false;
    }

    /*
     * BOUND를 통해서 리사이즈를 할 수 있는 지를 결정한다.
     *
     * 일반적으로 면적을 갖는 컴포넌트는 대체로 가능하다.(return true)
     * 그러나, LINE 등 면적을 가지지않는 컴포넌트는 가능하지 않도록 정의한다.(return false)
     */

  }, {
    key: 'resizable',
    get: function get() {
      return false;
    }

    /*
     * 회전을 할 수 있는 지를 결정한다.
     *
     * 일반적으로 모든 컴포넌트는 가능하다.(return true)
     */

  }, {
    key: 'rotatable',
    get: function get() {
      return false;
    }
  }]);

  return Floor;
}(Container);

exports.default = Floor;


Component.register('floor', Floor);

},{}],2:[function(require,module,exports){
'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _floor = require('./floor');

Object.defineProperty(exports, 'Floor', {
  enumerable: true,
  get: function get() {
    return _interopRequireDefault(_floor).default;
  }
});

var _indoorMap = require('./indoor-map');

Object.defineProperty(exports, 'IndoorMap', {
  enumerable: true,
  get: function get() {
    return _interopRequireDefault(_indoorMap).default;
  }
});

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

},{"./floor":1,"./indoor-map":3}],3:[function(require,module,exports){
'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _get = function get(object, property, receiver) { if (object === null) object = Function.prototype; var desc = Object.getOwnPropertyDescriptor(object, property); if (desc === undefined) { var parent = Object.getPrototypeOf(object); if (parent === null) { return undefined; } else { return get(parent, property, receiver); } } else if ("value" in desc) { return desc.value; } else { var getter = desc.get; if (getter === undefined) { return undefined; } return getter.call(receiver); } };

var _floor = require('./floor');

var _floor2 = _interopRequireDefault(_floor);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var _scene = scene;
var Component = _scene.Component;
var Container = _scene.Container;
var CardLayout = _scene.CardLayout;
var Model = _scene.Model;


var LABEL_WIDTH = 50;
var LABEL_HEIGHT = 50;

function rgba(r, g, b, a) {
  return 'rgba(' + r + ', ' + g + ', ' + b + ', ' + a + ')';
}

var IndoorMap = function (_Container) {
  _inherits(IndoorMap, _Container);

  function IndoorMap() {
    _classCallCheck(this, IndoorMap);

    return _possibleConstructorReturn(this, Object.getPrototypeOf(IndoorMap).apply(this, arguments));
  }

  _createClass(IndoorMap, [{
    key: '_draw',
    value: function _draw(context) {
      var _model = this.model;
      var left = _model.left;
      var top = _model.top;
      var fillStyle = _model.fillStyle;


      for (var i = 0; i <= this.components.length; i++) {
        context.beginPath();

        context.rect(left - LABEL_WIDTH, top + i * LABEL_HEIGHT, LABEL_WIDTH, LABEL_HEIGHT);

        var color = 255 - 20 * (i + 1) % 255;
        context.fillStyle = rgba(color, color, color, 1);
        context.fill();

        context.closePath();
      }

      _get(Object.getPrototypeOf(IndoorMap.prototype), '_draw', this).call(this, context);
    }
  }, {
    key: 'contains',
    value: function contains(x, y) {

      if (_get(Object.getPrototypeOf(IndoorMap.prototype), 'contains', this).call(this, x, y)) return true;

      var _bounds = this.bounds;
      var left = _bounds.left;
      var top = _bounds.top;


      left = left - LABEL_WIDTH;
      var h = LABEL_HEIGHT * (this.components.length + 1);

      return x < Math.max(left + LABEL_WIDTH, left) && x > Math.min(left + LABEL_WIDTH, left) && y < Math.max(top + h, top) && y > Math.min(top + h, top);
    }
  }, {
    key: 'onmouseup',
    value: function onmouseup(e) {
      var down_point = this.__down_point;
      delete this.__down_point;

      if (!down_point || down_point.x != e.offsetX || down_point.y != e.offsetY) {
        return;
      }

      var point = this.transcoordC2S(e.offsetX, e.offsetY);

      var _model2 = this.model;
      var left = _model2.left;
      var top = _model2.top;


      var x = point.x - left;
      var y = point.y - top;

      if (x > 0) return;

      y /= LABEL_HEIGHT;
      y = Math.floor(y);

      if (!this.layoutConfig) this.layoutConfig = {};

      if (y > this.components.length) return;

      /* 생성 버튼이 클릭되면, 새로운 floor를 추가한다. */
      if (y == this.components.length) {
        this.add(Model.compile({
          type: 'floor',
          width: 100,
          height: 100
        }));
      }

      var config = Object.assign({}, this.layoutConfig);

      config.activeIndex = y;
      this.set('layoutConfig', config);
    }
  }, {
    key: 'onmousedown',
    value: function onmousedown(e) {
      this.__down_point = {
        x: e.offsetX,
        y: e.offsetY
      };
    }
  }, {
    key: 'layout',
    get: function get() {
      return CardLayout;
    }
  }]);

  return IndoorMap;
}(Container);

exports.default = IndoorMap;


Component.register('indoor-map', IndoorMap);

},{"./floor":1}]},{},[1,2,3]);
