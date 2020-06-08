"use strict";

function _createForOfIteratorHelper(o) { if (typeof Symbol === "undefined" || o[Symbol.iterator] == null) { if (Array.isArray(o) || (o = _unsupportedIterableToArray(o))) { var i = 0; var F = function F() {}; return { s: F, n: function n() { if (i >= o.length) return { done: true }; return { done: false, value: o[i++] }; }, e: function e(_e16) { throw _e16; }, f: F }; } throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); } var it, normalCompletion = true, didErr = false, err; return { s: function s() { it = o[Symbol.iterator](); }, n: function n() { var step = it.next(); normalCompletion = step.done; return step; }, e: function e(_e17) { didErr = true; err = _e17; }, f: function f() { try { if (!normalCompletion && it["return"] != null) it["return"](); } finally { if (didErr) throw err; } } }; }

function _slicedToArray(arr, i) { return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _unsupportedIterableToArray(arr, i) || _nonIterableRest(); }

function _nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }

function _iterableToArrayLimit(arr, i) { if (typeof Symbol === "undefined" || !(Symbol.iterator in Object(arr))) return; var _arr = []; var _n = true; var _d = false; var _e = undefined; try { for (var _i = arr[Symbol.iterator](), _s; !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i["return"] != null) _i["return"](); } finally { if (_d) throw _e; } } return _arr; }

function _arrayWithHoles(arr) { if (Array.isArray(arr)) return arr; }

function _toConsumableArray(arr) { return _arrayWithoutHoles(arr) || _iterableToArray(arr) || _unsupportedIterableToArray(arr) || _nonIterableSpread(); }

function _nonIterableSpread() { throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }

function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(n); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }

function _iterableToArray(iter) { if (typeof Symbol !== "undefined" && Symbol.iterator in Object(iter)) return Array.from(iter); }

function _arrayWithoutHoles(arr) { if (Array.isArray(arr)) return _arrayLikeToArray(arr); }

function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) { arr2[i] = arr[i]; } return arr2; }

function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass); }

function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }

function _createSuper(Derived) { return function () { var Super = _getPrototypeOf(Derived), result; if (_isNativeReflectConstruct()) { var NewTarget = _getPrototypeOf(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return _possibleConstructorReturn(this, result); }; }

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } return _assertThisInitialized(self); }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _isNativeReflectConstruct() { if (typeof Reflect === "undefined" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === "function") return true; try { Date.prototype.toString.call(Reflect.construct(Date, [], function () {})); return true; } catch (e) { return false; } }

function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }

function _objectWithoutProperties(source, excluded) { if (source == null) return {}; var target = _objectWithoutPropertiesLoose(source, excluded); var key, i; if (Object.getOwnPropertySymbols) { var sourceSymbolKeys = Object.getOwnPropertySymbols(source); for (i = 0; i < sourceSymbolKeys.length; i++) { key = sourceSymbolKeys[i]; if (excluded.indexOf(key) >= 0) continue; if (!Object.prototype.propertyIsEnumerable.call(source, key)) continue; target[key] = source[key]; } } return target; }

function _objectWithoutPropertiesLoose(source, excluded) { if (source == null) return {}; var target = {}; var sourceKeys = Object.keys(source); var key, i; for (i = 0; i < sourceKeys.length; i++) { key = sourceKeys[i]; if (excluded.indexOf(key) >= 0) continue; target[key] = source[key]; } return target; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _typeof(obj) { "@babel/helpers - typeof"; if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

!function (e) {
  var t = {};

  function a(n) {
    if (t[n]) return t[n].exports;
    var s = t[n] = {
      i: n,
      l: !1,
      exports: {}
    };
    return e[n].call(s.exports, s, s.exports, a), s.l = !0, s.exports;
  }

  a.m = e, a.c = t, a.d = function (e, t, n) {
    a.o(e, t) || Object.defineProperty(e, t, {
      enumerable: !0,
      get: n
    });
  }, a.r = function (e) {
    "undefined" != typeof Symbol && Symbol.toStringTag && Object.defineProperty(e, Symbol.toStringTag, {
      value: "Module"
    }), Object.defineProperty(e, "__esModule", {
      value: !0
    });
  }, a.t = function (e, t) {
    if (1 & t && (e = a(e)), 8 & t) return e;
    if (4 & t && "object" == _typeof(e) && e && e.__esModule) return e;
    var n = Object.create(null);
    if (a.r(n), Object.defineProperty(n, "default", {
      enumerable: !0,
      value: e
    }), 2 & t && "string" != typeof e) for (var s in e) {
      a.d(n, s, function (t) {
        return e[t];
      }.bind(null, s));
    }
    return n;
  }, a.n = function (e) {
    var t = e && e.__esModule ? function () {
      return e["default"];
    } : function () {
      return e;
    };
    return a.d(t, "a", t), t;
  }, a.o = function (e, t) {
    return Object.prototype.hasOwnProperty.call(e, t);
  }, a.p = "", a(a.s = 8);
}([function (e, t, a) {
  "use strict";

  Object.defineProperty(t, "__esModule", {
    value: !0
  }), t["default"] = void 0;

  var n = /*#__PURE__*/function () {
    function n(e) {
      _classCallCheck(this, n);

      this.Component = e;
    }

    _createClass(n, [{
      key: "getData",
      value: function getData(e) {
        var t = this.Component.data;
        if (!e) return t;

        if (e.includes(".")) {
          return e.split(".").reduce(function (e, t) {
            return e[t];
          }, t);
        }

        return this.Component.data[e];
      }
    }, {
      key: "setData",
      value: function setData(e) {
        var t = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : function () {};
        e && "object" == _typeof(e) && this.Component.setData(e, t);
      }
    }]);

    return n;
  }();

  t["default"] = n;
}, function (e, t, a) {
  "use strict";

  Object.defineProperty(t, "__esModule", {
    value: !0
  }), t.getSystemInfo = o, t.isComponent = function (e) {
    return e && void 0 !== e.__wxExparserNodeId__ && "function" == typeof e.setData;
  }, t.isIos = i, t.getCurrentPage = d, t.getComponent = function (e) {
    var t = new c();
    var a = d() || {};

    if (a.selectComponent && "function" == typeof a.selectComponent) {
      if (e) return a.selectComponent(e);
      t.warn("请传入组件ID");
    } else t.warn("该基础库暂不支持多个小程序日历组件");
  }, t.uniqueArrayByDate = function () {
    var e = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : [];
    var t = {},
        a = [];
    e.forEach(function (e) {
      t["".concat(e.year, "-").concat(e.month, "-").concat(e.day)] = e;
    });

    for (var _e in t) {
      a.push(t[_e]);
    }

    return a;
  }, t.delRepeatedEnableDay = function () {
    var e = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : [];
    var t = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : [];
    var a, n;

    if (2 === t.length) {
      var _f = f(t),
          _e2 = _f.startTimestamp,
          _s = _f.endTimestamp;

      a = _e2, n = _s;
    }

    return h(e).filter(function (e) {
      return e < a || e > n;
    });
  }, t.convertEnableAreaToTimestamp = f, t.getDateTimeStamp = b, t.converEnableDaysToTimestamp = h, t.initialTasks = t.GetDate = t.Slide = t.Logger = void 0;
  var n,
      s = (n = a(2)) && n.__esModule ? n : {
    "default": n
  };
  var r;

  function o() {
    return r || (r = wx.getSystemInfoSync());
  }

  var c = /*#__PURE__*/function () {
    function c() {
      _classCallCheck(this, c);
    }

    _createClass(c, [{
      key: "info",
      value: function info(e) {
        console.log("%cInfo: %c" + e, "color:#FF0080;font-weight:bold", "color: #FF509B");
      }
    }, {
      key: "warn",
      value: function warn(e) {
        console.log("%cWarn: %c" + e, "color:#FF6600;font-weight:bold", "color: #FF9933");
      }
    }, {
      key: "tips",
      value: function tips(e) {
        console.log("%cTips: %c" + e, "color:#00B200;font-weight:bold", "color: #00CC33");
      }
    }]);

    return c;
  }();

  t.Logger = c;

  t.Slide = /*#__PURE__*/function () {
    function _class() {
      _classCallCheck(this, _class);
    }

    _createClass(_class, [{
      key: "isUp",
      value: function isUp() {
        var e = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};
        var t = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {};
        var a = e.startX,
            n = e.startY,
            s = t.clientX - a;
        return t.clientY - n < -60 && s < 20 && s > -20 && (this.slideLock = !1, !0);
      }
    }, {
      key: "isDown",
      value: function isDown() {
        var e = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};
        var t = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {};
        var a = e.startX,
            n = e.startY,
            s = t.clientX - a;
        return t.clientY - n > 60 && s < 20 && s > -20;
      }
    }, {
      key: "isLeft",
      value: function isLeft() {
        var e = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};
        var t = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {};
        var a = e.startX,
            n = e.startY,
            s = t.clientX - a,
            r = t.clientY - n;
        return s < -60 && r < 20 && r > -20;
      }
    }, {
      key: "isRight",
      value: function isRight() {
        var e = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};
        var t = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {};
        var a = e.startX,
            n = e.startY,
            s = t.clientX - a,
            r = t.clientY - n;
        return s > 60 && r < 20 && r > -20;
      }
    }]);

    return _class;
  }();

  var l = /*#__PURE__*/function () {
    function l() {
      _classCallCheck(this, l);
    }

    _createClass(l, [{
      key: "newDate",
      value: function newDate(e, t, a) {
        var n = "".concat(+e, "-").concat(+t, "-").concat(+a);
        return i() && (n = "".concat(+e, "/").concat(+t, "/").concat(+a)), new Date(n);
      }
    }, {
      key: "thisMonthDays",
      value: function thisMonthDays(e, t) {
        return new Date(Date.UTC(e, t, 0)).getUTCDate();
      }
    }, {
      key: "firstDayOfWeek",
      value: function firstDayOfWeek(e, t) {
        return new Date(Date.UTC(e, t - 1, 1)).getUTCDay();
      }
    }, {
      key: "dayOfWeek",
      value: function dayOfWeek(e, t, a) {
        return new Date(Date.UTC(e, t - 1, a)).getUTCDay();
      }
    }, {
      key: "todayDate",
      value: function todayDate() {
        var e = new Date();
        return {
          year: e.getFullYear(),
          month: e.getMonth() + 1,
          date: e.getDate()
        };
      }
    }, {
      key: "todayTimestamp",
      value: function todayTimestamp() {
        var _this$todayDate = this.todayDate(),
            e = _this$todayDate.year,
            t = _this$todayDate.month,
            a = _this$todayDate.date;

        return this.newDate(e, t, a).getTime();
      }
    }, {
      key: "toTimeStr",
      value: function toTimeStr(e) {
        return e.day && (e.date = e.day), "".concat(+e.year, "-").concat(+e.month, "-").concat(+e.date);
      }
    }, {
      key: "sortDates",
      value: function sortDates(e, t) {
        return e.sort(function (e, a) {
          return b(e) < b(a) && "desc" !== t ? -1 : 1;
        });
      }
    }, {
      key: "prevMonth",
      value: function prevMonth(e) {
        return +e.month > 1 ? {
          year: e.year,
          month: e.month - 1
        } : {
          year: e.year - 1,
          month: 12
        };
      }
    }, {
      key: "nextMonth",
      value: function nextMonth(e) {
        return +e.month < 12 ? {
          year: e.year,
          month: e.month + 1
        } : {
          year: e.year + 1,
          month: 1
        };
      }
    }, {
      key: "convertLunar",
      value: function convertLunar() {
        var e = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : [];
        return e.map(function (e) {
          return e && (e.lunar = s["default"].solar2lunar(+e.year, +e.month, +e.day)), e;
        });
      }
    }]);

    return l;
  }();

  function i() {
    var e = o();
    return /iphone|ios/i.test(e.platform);
  }

  function d() {
    var e = getCurrentPages();
    return e[e.length - 1];
  }

  function f() {
    var e = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : [];
    var t = new l(),
        a = e[0].split("-"),
        n = e[1].split("-"),
        s = new c();
    return 3 !== a.length || 3 !== n.length ? (s.warn('enableArea() 参数格式为: ["2018-2-1", "2018-3-1"]'), {}) : {
      start: a,
      end: n,
      startTimestamp: t.newDate(a[0], a[1], a[2]).getTime(),
      endTimestamp: t.newDate(n[0], n[1], n[2]).getTime()
    };
  }

  function b(e) {
    if ("[object Object]" !== Object.prototype.toString.call(e)) return;
    return new l().newDate(e.year, e.month, e.day).getTime();
  }

  function h() {
    var e = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : [];
    var t = new c(),
        a = new l(),
        n = [];
    return e.forEach(function (e) {
      if ("string" != typeof e) return t.warn("enableDays()入参日期格式错误");
      var s = e.split("-");
      if (3 !== s.length) return t.warn("enableDays()入参日期格式错误");
      var r = a.newDate(s[0], s[1], s[2]).getTime();
      n.push(r);
    }), n;
  }

  t.GetDate = l;
  t.initialTasks = {
    flag: "finished",
    tasks: []
  };
}, function (e, t, a) {
  "use strict";

  Object.defineProperty(t, "__esModule", {
    value: !0
  }), t["default"] = void 0;

  var n = {
    lunarInfo: [19416, 19168, 42352, 21717, 53856, 55632, 91476, 22176, 39632, 21970, 19168, 42422, 42192, 53840, 119381, 46400, 54944, 44450, 38320, 84343, 18800, 42160, 46261, 27216, 27968, 109396, 11104, 38256, 21234, 18800, 25958, 54432, 59984, 28309, 23248, 11104, 100067, 37600, 116951, 51536, 54432, 120998, 46416, 22176, 107956, 9680, 37584, 53938, 43344, 46423, 27808, 46416, 86869, 19872, 42416, 83315, 21168, 43432, 59728, 27296, 44710, 43856, 19296, 43748, 42352, 21088, 62051, 55632, 23383, 22176, 38608, 19925, 19152, 42192, 54484, 53840, 54616, 46400, 46752, 103846, 38320, 18864, 43380, 42160, 45690, 27216, 27968, 44870, 43872, 38256, 19189, 18800, 25776, 29859, 59984, 27480, 21952, 43872, 38613, 37600, 51552, 55636, 54432, 55888, 30034, 22176, 43959, 9680, 37584, 51893, 43344, 46240, 47780, 44368, 21977, 19360, 42416, 86390, 21168, 43312, 31060, 27296, 44368, 23378, 19296, 42726, 42208, 53856, 60005, 54576, 23200, 30371, 38608, 19195, 19152, 42192, 118966, 53840, 54560, 56645, 46496, 22224, 21938, 18864, 42359, 42160, 43600, 111189, 27936, 44448, 84835, 37744, 18936, 18800, 25776, 92326, 59984, 27424, 108228, 43744, 41696, 53987, 51552, 54615, 54432, 55888, 23893, 22176, 42704, 21972, 21200, 43448, 43344, 46240, 46758, 44368, 21920, 43940, 42416, 21168, 45683, 26928, 29495, 27296, 44368, 84821, 19296, 42352, 21732, 53600, 59752, 54560, 55968, 92838, 22224, 19168, 43476, 41680, 53584, 62034, 54560],
    solarMonth: [31, 28, 31, 30, 31, 30, 31, 31, 30, 31, 30, 31],
    Gan: ["甲", "乙", "丙", "丁", "戊", "己", "庚", "辛", "壬", "癸"],
    Zhi: ["子", "丑", "寅", "卯", "辰", "巳", "午", "未", "申", "酉", "戌", "亥"],
    Animals: ["鼠", "牛", "虎", "兔", "龙", "蛇", "马", "羊", "猴", "鸡", "狗", "猪"],
    solarTerm: ["小寒", "大寒", "立春", "雨水", "惊蛰", "春分", "清明", "谷雨", "立夏", "小满", "芒种", "夏至", "小暑", "大暑", "立秋", "处暑", "白露", "秋分", "寒露", "霜降", "立冬", "小雪", "大雪", "冬至"],
    sTermInfo: ["9778397bd097c36b0b6fc9274c91aa", "97b6b97bd19801ec9210c965cc920e", "97bcf97c3598082c95f8c965cc920f", "97bd0b06bdb0722c965ce1cfcc920f", "b027097bd097c36b0b6fc9274c91aa", "97b6b97bd19801ec9210c965cc920e", "97bcf97c359801ec95f8c965cc920f", "97bd0b06bdb0722c965ce1cfcc920f", "b027097bd097c36b0b6fc9274c91aa", "97b6b97bd19801ec9210c965cc920e", "97bcf97c359801ec95f8c965cc920f", "97bd0b06bdb0722c965ce1cfcc920f", "b027097bd097c36b0b6fc9274c91aa", "9778397bd19801ec9210c965cc920e", "97b6b97bd19801ec95f8c965cc920f", "97bd09801d98082c95f8e1cfcc920f", "97bd097bd097c36b0b6fc9210c8dc2", "9778397bd197c36c9210c9274c91aa", "97b6b97bd19801ec95f8c965cc920e", "97bd09801d98082c95f8e1cfcc920f", "97bd097bd097c36b0b6fc9210c8dc2", "9778397bd097c36c9210c9274c91aa", "97b6b97bd19801ec95f8c965cc920e", "97bcf97c3598082c95f8e1cfcc920f", "97bd097bd097c36b0b6fc9210c8dc2", "9778397bd097c36c9210c9274c91aa", "97b6b97bd19801ec9210c965cc920e", "97bcf97c3598082c95f8c965cc920f", "97bd097bd097c35b0b6fc920fb0722", "9778397bd097c36b0b6fc9274c91aa", "97b6b97bd19801ec9210c965cc920e", "97bcf97c3598082c95f8c965cc920f", "97bd097bd097c35b0b6fc920fb0722", "9778397bd097c36b0b6fc9274c91aa", "97b6b97bd19801ec9210c965cc920e", "97bcf97c359801ec95f8c965cc920f", "97bd097bd097c35b0b6fc920fb0722", "9778397bd097c36b0b6fc9274c91aa", "97b6b97bd19801ec9210c965cc920e", "97bcf97c359801ec95f8c965cc920f", "97bd097bd097c35b0b6fc920fb0722", "9778397bd097c36b0b6fc9274c91aa", "97b6b97bd19801ec9210c965cc920e", "97bcf97c359801ec95f8c965cc920f", "97bd097bd07f595b0b6fc920fb0722", "9778397bd097c36b0b6fc9210c8dc2", "9778397bd19801ec9210c9274c920e", "97b6b97bd19801ec95f8c965cc920f", "97bd07f5307f595b0b0bc920fb0722", "7f0e397bd097c36b0b6fc9210c8dc2", "9778397bd097c36c9210c9274c920e", "97b6b97bd19801ec95f8c965cc920f", "97bd07f5307f595b0b0bc920fb0722", "7f0e397bd097c36b0b6fc9210c8dc2", "9778397bd097c36c9210c9274c91aa", "97b6b97bd19801ec9210c965cc920e", "97bd07f1487f595b0b0bc920fb0722", "7f0e397bd097c36b0b6fc9210c8dc2", "9778397bd097c36b0b6fc9274c91aa", "97b6b97bd19801ec9210c965cc920e", "97bcf7f1487f595b0b0bb0b6fb0722", "7f0e397bd097c35b0b6fc920fb0722", "9778397bd097c36b0b6fc9274c91aa", "97b6b97bd19801ec9210c965cc920e", "97bcf7f1487f595b0b0bb0b6fb0722", "7f0e397bd097c35b0b6fc920fb0722", "9778397bd097c36b0b6fc9274c91aa", "97b6b97bd19801ec9210c965cc920e", "97bcf7f1487f531b0b0bb0b6fb0722", "7f0e397bd097c35b0b6fc920fb0722", "9778397bd097c36b0b6fc9274c91aa", "97b6b97bd19801ec9210c965cc920e", "97bcf7f1487f531b0b0bb0b6fb0722", "7f0e397bd07f595b0b6fc920fb0722", "9778397bd097c36b0b6fc9274c91aa", "97b6b97bd19801ec9210c9274c920e", "97bcf7f0e47f531b0b0bb0b6fb0722", "7f0e397bd07f595b0b0bc920fb0722", "9778397bd097c36b0b6fc9210c91aa", "97b6b97bd197c36c9210c9274c920e", "97bcf7f0e47f531b0b0bb0b6fb0722", "7f0e397bd07f595b0b0bc920fb0722", "9778397bd097c36b0b6fc9210c8dc2", "9778397bd097c36c9210c9274c920e", "97b6b7f0e47f531b0723b0b6fb0722", "7f0e37f5307f595b0b0bc920fb0722", "7f0e397bd097c36b0b6fc9210c8dc2", "9778397bd097c36b0b70c9274c91aa", "97b6b7f0e47f531b0723b0b6fb0721", "7f0e37f1487f595b0b0bb0b6fb0722", "7f0e397bd097c35b0b6fc9210c8dc2", "9778397bd097c36b0b6fc9274c91aa", "97b6b7f0e47f531b0723b0b6fb0721", "7f0e27f1487f595b0b0bb0b6fb0722", "7f0e397bd097c35b0b6fc920fb0722", "9778397bd097c36b0b6fc9274c91aa", "97b6b7f0e47f531b0723b0b6fb0721", "7f0e27f1487f531b0b0bb0b6fb0722", "7f0e397bd097c35b0b6fc920fb0722", "9778397bd097c36b0b6fc9274c91aa", "97b6b7f0e47f531b0723b0b6fb0721", "7f0e27f1487f531b0b0bb0b6fb0722", "7f0e397bd097c35b0b6fc920fb0722", "9778397bd097c36b0b6fc9274c91aa", "97b6b7f0e47f531b0723b0b6fb0721", "7f0e27f1487f531b0b0bb0b6fb0722", "7f0e397bd07f595b0b0bc920fb0722", "9778397bd097c36b0b6fc9274c91aa", "97b6b7f0e47f531b0723b0787b0721", "7f0e27f0e47f531b0b0bb0b6fb0722", "7f0e397bd07f595b0b0bc920fb0722", "9778397bd097c36b0b6fc9210c91aa", "97b6b7f0e47f149b0723b0787b0721", "7f0e27f0e47f531b0723b0b6fb0722", "7f0e397bd07f595b0b0bc920fb0722", "9778397bd097c36b0b6fc9210c8dc2", "977837f0e37f149b0723b0787b0721", "7f07e7f0e47f531b0723b0b6fb0722", "7f0e37f5307f595b0b0bc920fb0722", "7f0e397bd097c35b0b6fc9210c8dc2", "977837f0e37f14998082b0787b0721", "7f07e7f0e47f531b0723b0b6fb0721", "7f0e37f1487f595b0b0bb0b6fb0722", "7f0e397bd097c35b0b6fc9210c8dc2", "977837f0e37f14998082b0787b06bd", "7f07e7f0e47f531b0723b0b6fb0721", "7f0e27f1487f531b0b0bb0b6fb0722", "7f0e397bd097c35b0b6fc920fb0722", "977837f0e37f14998082b0787b06bd", "7f07e7f0e47f531b0723b0b6fb0721", "7f0e27f1487f531b0b0bb0b6fb0722", "7f0e397bd097c35b0b6fc920fb0722", "977837f0e37f14998082b0787b06bd", "7f07e7f0e47f531b0723b0b6fb0721", "7f0e27f1487f531b0b0bb0b6fb0722", "7f0e397bd07f595b0b0bc920fb0722", "977837f0e37f14998082b0787b06bd", "7f07e7f0e47f531b0723b0b6fb0721", "7f0e27f1487f531b0b0bb0b6fb0722", "7f0e397bd07f595b0b0bc920fb0722", "977837f0e37f14998082b0787b06bd", "7f07e7f0e47f149b0723b0787b0721", "7f0e27f0e47f531b0b0bb0b6fb0722", "7f0e397bd07f595b0b0bc920fb0722", "977837f0e37f14998082b0723b06bd", "7f07e7f0e37f149b0723b0787b0721", "7f0e27f0e47f531b0723b0b6fb0722", "7f0e397bd07f595b0b0bc920fb0722", "977837f0e37f14898082b0723b02d5", "7ec967f0e37f14998082b0787b0721", "7f07e7f0e47f531b0723b0b6fb0722", "7f0e37f1487f595b0b0bb0b6fb0722", "7f0e37f0e37f14898082b0723b02d5", "7ec967f0e37f14998082b0787b0721", "7f07e7f0e47f531b0723b0b6fb0722", "7f0e37f1487f531b0b0bb0b6fb0722", "7f0e37f0e37f14898082b0723b02d5", "7ec967f0e37f14998082b0787b06bd", "7f07e7f0e47f531b0723b0b6fb0721", "7f0e37f1487f531b0b0bb0b6fb0722", "7f0e37f0e37f14898082b072297c35", "7ec967f0e37f14998082b0787b06bd", "7f07e7f0e47f531b0723b0b6fb0721", "7f0e27f1487f531b0b0bb0b6fb0722", "7f0e37f0e37f14898082b072297c35", "7ec967f0e37f14998082b0787b06bd", "7f07e7f0e47f531b0723b0b6fb0721", "7f0e27f1487f531b0b0bb0b6fb0722", "7f0e37f0e366aa89801eb072297c35", "7ec967f0e37f14998082b0787b06bd", "7f07e7f0e47f149b0723b0787b0721", "7f0e27f1487f531b0b0bb0b6fb0722", "7f0e37f0e366aa89801eb072297c35", "7ec967f0e37f14998082b0723b06bd", "7f07e7f0e47f149b0723b0787b0721", "7f0e27f0e47f531b0723b0b6fb0722", "7f0e37f0e366aa89801eb072297c35", "7ec967f0e37f14998082b0723b06bd", "7f07e7f0e37f14998083b0787b0721", "7f0e27f0e47f531b0723b0b6fb0722", "7f0e37f0e366aa89801eb072297c35", "7ec967f0e37f14898082b0723b02d5", "7f07e7f0e37f14998082b0787b0721", "7f07e7f0e47f531b0723b0b6fb0722", "7f0e36665b66aa89801e9808297c35", "665f67f0e37f14898082b0723b02d5", "7ec967f0e37f14998082b0787b0721", "7f07e7f0e47f531b0723b0b6fb0722", "7f0e36665b66a449801e9808297c35", "665f67f0e37f14898082b0723b02d5", "7ec967f0e37f14998082b0787b06bd", "7f07e7f0e47f531b0723b0b6fb0721", "7f0e36665b66a449801e9808297c35", "665f67f0e37f14898082b072297c35", "7ec967f0e37f14998082b0787b06bd", "7f07e7f0e47f531b0723b0b6fb0721", "7f0e26665b66a449801e9808297c35", "665f67f0e37f1489801eb072297c35", "7ec967f0e37f14998082b0787b06bd", "7f07e7f0e47f531b0723b0b6fb0721", "7f0e27f1487f531b0b0bb0b6fb0722"],
    nStr1: ["日", "一", "二", "三", "四", "五", "六", "七", "八", "九", "十"],
    nStr2: ["初", "十", "廿", "卅"],
    nStr3: ["正", "二", "三", "四", "五", "六", "七", "八", "九", "十", "冬", "腊"],
    lYearDays: function lYearDays(e) {
      var t,
          a = 348;

      for (t = 32768; t > 8; t >>= 1) {
        a += n.lunarInfo[e - 1900] & t ? 1 : 0;
      }

      return a + n.leapDays(e);
    },
    leapMonth: function leapMonth(e) {
      return 15 & n.lunarInfo[e - 1900];
    },
    leapDays: function leapDays(e) {
      return n.leapMonth(e) ? 65536 & n.lunarInfo[e - 1900] ? 30 : 29 : 0;
    },
    monthDays: function monthDays(e, t) {
      return t > 12 || t < 1 ? -1 : n.lunarInfo[e - 1900] & 65536 >> t ? 30 : 29;
    },
    solarDays: function solarDays(e, t) {
      if (t > 12 || t < 1) return -1;
      var a = t - 1;
      return 1 == +a ? e % 4 == 0 && e % 100 != 0 || e % 400 == 0 ? 29 : 28 : n.solarMonth[a];
    },
    toGanZhiYear: function toGanZhiYear(e) {
      var t = (e - 3) % 10,
          a = (e - 3) % 12;
      return 0 == +t && (t = 10), 0 == +a && (a = 12), n.Gan[t - 1] + n.Zhi[a - 1];
    },
    toAstro: function toAstro(e, t) {
      return "魔羯水瓶双鱼白羊金牛双子巨蟹狮子处女天秤天蝎射手魔羯".substr(2 * e - (t < [20, 19, 21, 21, 21, 22, 23, 23, 23, 23, 22, 22][e - 1] ? 2 : 0), 2) + "座";
    },
    toGanZhi: function toGanZhi(e) {
      return n.Gan[e % 10] + n.Zhi[e % 12];
    },
    getTerm: function getTerm(e, t) {
      if (e < 1900 || e > 2100) return -1;
      if (t < 1 || t > 24) return -1;
      var a = n.sTermInfo[e - 1900],
          s = [parseInt("0x" + a.substr(0, 5)).toString(), parseInt("0x" + a.substr(5, 5)).toString(), parseInt("0x" + a.substr(10, 5)).toString(), parseInt("0x" + a.substr(15, 5)).toString(), parseInt("0x" + a.substr(20, 5)).toString(), parseInt("0x" + a.substr(25, 5)).toString()],
          r = [s[0].substr(0, 1), s[0].substr(1, 2), s[0].substr(3, 1), s[0].substr(4, 2), s[1].substr(0, 1), s[1].substr(1, 2), s[1].substr(3, 1), s[1].substr(4, 2), s[2].substr(0, 1), s[2].substr(1, 2), s[2].substr(3, 1), s[2].substr(4, 2), s[3].substr(0, 1), s[3].substr(1, 2), s[3].substr(3, 1), s[3].substr(4, 2), s[4].substr(0, 1), s[4].substr(1, 2), s[4].substr(3, 1), s[4].substr(4, 2), s[5].substr(0, 1), s[5].substr(1, 2), s[5].substr(3, 1), s[5].substr(4, 2)];
      return parseInt(r[t - 1]);
    },
    toChinaMonth: function toChinaMonth(e) {
      if (e > 12 || e < 1) return -1;
      var t = n.nStr3[e - 1];
      return t += "月";
    },
    toChinaDay: function toChinaDay(e) {
      var t;

      switch (e) {
        case 10:
          t = "初十";
          break;

        case 20:
          t = "二十";
          break;

        case 30:
          t = "三十";
          break;

        default:
          t = n.nStr2[Math.floor(e / 10)], t += n.nStr1[e % 10];
      }

      return t;
    },
    getAnimal: function getAnimal(e) {
      return n.Animals[(e - 4) % 12];
    },
    solar2lunar: function solar2lunar(e, t, a) {
      if (e < 1900 || e > 2100) return -1;
      if (1900 == +e && 1 == +t && +a < 31) return -1;
      var s,
          r,
          o = 0,
          c = 0;
      e = (s = e ? new Date(e, parseInt(t) - 1, a) : new Date()).getFullYear(), t = s.getMonth() + 1, a = s.getDate();
      var l = (Date.UTC(s.getFullYear(), s.getMonth(), s.getDate()) - Date.UTC(1900, 0, 31)) / 864e5;

      for (r = 1900; r < 2101 && l > 0; r++) {
        l -= c = n.lYearDays(r);
      }

      l < 0 && (l += c, r--);
      var i = new Date();
      var d = !1;
      i.getFullYear() === +e && i.getMonth() + 1 === +t && i.getDate() === +a && (d = !0);
      var f = s.getDay();
      var b = n.nStr1[f];
      0 == +f && (f = 7);
      var h = r;
      o = n.leapMonth(r);
      var u = !1;

      for (r = 1; r < 13 && l > 0; r++) {
        o > 0 && r === o + 1 && !1 === u ? (--r, u = !0, c = n.leapDays(h)) : c = n.monthDays(h, r), !0 === u && r === o + 1 && (u = !1), l -= c;
      }

      0 === l && o > 0 && r === o + 1 && (u ? u = !1 : (u = !0, --r)), l < 0 && (l += c, --r);
      var y = r,
          m = l + 1,
          D = t - 1,
          p = n.toGanZhiYear(h),
          g = n.getTerm(e, 2 * t - 1),
          T = n.getTerm(e, 2 * t);
      var w = n.toGanZhi(12 * (e - 1900) + t + 11);
      a >= g && (w = n.toGanZhi(12 * (e - 1900) + t + 12));
      var C = !1,
          M = null;
      +g === a && (C = !0, M = n.solarTerm[2 * t - 2]), +T === a && (C = !0, M = n.solarTerm[2 * t - 1]);

      var _ = Date.UTC(e, D, 1, 0, 0, 0, 0) / 864e5 + 25567 + 10,
          S = n.toGanZhi(_ + a - 1),
          k = n.toAstro(t, a);

      return {
        lYear: h,
        lMonth: y,
        lDay: m,
        Animal: n.getAnimal(h),
        IMonthCn: (u ? "闰" : "") + n.toChinaMonth(y),
        IDayCn: n.toChinaDay(m),
        cYear: e,
        cMonth: t,
        cDay: a,
        gzYear: p,
        gzMonth: w,
        gzDay: S,
        isToday: d,
        isLeap: u,
        nWeek: f,
        ncWeek: "星期" + b,
        isTerm: C,
        Term: M,
        astro: k
      };
    },
    lunar2solar: function lunar2solar(e, t, a, s) {
      s = !!s;
      var r = n.leapMonth(e);
      if (s && r !== t) return -1;
      if (2100 == +e && 12 == +t && +a > 1 || 1900 == +e && 1 == +t && +a < 31) return -1;
      var o = n.monthDays(e, t);
      var c = o;
      if (s && (c = n.leapDays(e, t)), e < 1900 || e > 2100 || a > c) return -1;
      var l = 0;

      for (var _t = 1900; _t < e; _t++) {
        l += n.lYearDays(_t);
      }

      var i = 0,
          d = !1;

      for (var _a = 1; _a < t; _a++) {
        i = n.leapMonth(e), d || i <= _a && i > 0 && (l += n.leapDays(e), d = !0), l += n.monthDays(e, _a);
      }

      s && (l += o);
      var f = Date.UTC(1900, 1, 30, 0, 0, 0),
          b = new Date(864e5 * (l + a - 31) + f),
          h = b.getUTCFullYear(),
          u = b.getUTCMonth() + 1,
          y = b.getUTCDate();
      return n.solar2lunar(h, u, y);
    }
  },
      s = n.Gan,
      r = n.Zhi,
      o = n.nStr1,
      c = n.nStr2,
      l = n.nStr3,
      i = n.Animals,
      d = n.solarTerm,
      f = n.lunarInfo,
      b = n.sTermInfo,
      h = n.solarMonth,
      u = _objectWithoutProperties(n, ["Gan", "Zhi", "nStr1", "nStr2", "nStr3", "Animals", "solarTerm", "lunarInfo", "sTermInfo", "solarMonth"]);

  var y = u;
  t["default"] = y;
}, function (e, t, a) {
  "use strict";

  Object.defineProperty(t, "__esModule", {
    value: !0
  }), t["default"] = void 0;
  var n = c(a(0)),
      s = c(a(4)),
      r = c(a(2)),
      o = a(1);

  function c(e) {
    return e && e.__esModule ? e : {
      "default": e
    };
  }

  var l = new o.Logger(),
      i = new o.GetDate(),
      d = Object.prototype.toString;

  var f = /*#__PURE__*/function (_n$default) {
    _inherits(f, _n$default);

    var _super = _createSuper(f);

    function f(e) {
      var _this;

      _classCallCheck(this, f);

      _this = _super.call(this, e), _this.Component = e;
      return _this;
    }

    _createClass(f, [{
      key: "getCalendarConfig",
      value: function getCalendarConfig() {
        return this.Component.config;
      }
    }, {
      key: "buildDate",
      value: function buildDate(e, t) {
        var a = i.todayDate(),
            n = i.thisMonthDays(e, t),
            s = [],
            _this$getCalendarConf = this.getCalendarConfig(),
            o = _this$getCalendarConf.showLunar;

        for (var _c = 1; _c <= n; _c++) {
          var _n = +a.year == +e && +a.month == +t && _c === +a.date,
              _l = this.getCalendarConfig(),
              _d = {
            year: e,
            month: t,
            day: _c,
            choosed: !1,
            week: i.dayOfWeek(e, t, _c),
            isToday: _n && _l.highlightToday
          };

          o && (_d.lunar = r["default"].solar2lunar(+_d.year, +_d.month, +_d.day)), s.push(_d);
        }

        return s;
      }
    }, {
      key: "enableArea",
      value: function enableArea() {
        var e = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : [];

        if (2 === e.length) {
          if (this.__judgeParam(e)) {
            var _this$getData = this.getData("calendar"),
                _this$getData$days = _this$getData.days,
                _t2 = _this$getData$days === void 0 ? [] : _this$getData$days,
                _this$getData$selecte = _this$getData.selectedDay,
                _a2 = _this$getData$selecte === void 0 ? [] : _this$getData$selecte;

            var _ref = (0, o.convertEnableAreaToTimestamp)(e),
                _n2 = _ref.startTimestamp,
                _s2 = _ref.endTimestamp,
                _r = this.__handleEnableArea({
              dateArea: e,
              days: _t2,
              startTimestamp: _n2,
              endTimestamp: _s2
            }, _a2);

            this.setData({
              "calendar.enableArea": e,
              "calendar.days": _r.dates,
              "calendar.selectedDay": _r.selectedDay,
              "calendar.enableAreaTimestamp": [_n2, _s2]
            });
          }
        } else l.warn('enableArea()参数需为时间范围数组，形如：["2018-8-4" , "2018-8-24"]');
      }
    }, {
      key: "enableDays",
      value: function enableDays() {
        var e = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : [];

        var _this$getData2 = this.getData("calendar"),
            _this$getData2$enable = _this$getData2.enableArea,
            t = _this$getData2$enable === void 0 ? [] : _this$getData2$enable;

        var a = [];
        a = t.length ? (0, o.delRepeatedEnableDay)(e, t) : (0, o.converEnableDaysToTimestamp)(e);

        var _this$getData3 = this.getData("calendar"),
            _this$getData3$days = _this$getData3.days,
            n = _this$getData3$days === void 0 ? [] : _this$getData3$days,
            _this$getData3$select = _this$getData3.selectedDay,
            s = _this$getData3$select === void 0 ? [] : _this$getData3$select;

        var r = this.__handleEnableDays({
          days: n,
          expectEnableDaysTimestamp: a
        }, s);

        this.setData({
          "calendar.days": r.dates,
          "calendar.selectedDay": r.selectedDay,
          "calendar.enableDays": e,
          "calendar.enableDaysTimestamp": a
        });
      }
    }, {
      key: "setSelectedDays",
      value: function setSelectedDays(e) {
        if (!(0, s["default"])(this.Component).getCalendarConfig().multi) return l.warn("单选模式下不能设置多日期选中，请配置 multi");

        var _this$getData4 = this.getData("calendar"),
            t = _this$getData4.days,
            a = [];

        if (e) {
          if (e && e.length) {
            var _this$__handleSelecte = this.__handleSelectedDays(t, a, e),
                _n3 = _this$__handleSelecte.dates,
                _s3 = _this$__handleSelecte.selectedDates;

            t = _n3, a = _s3;
          }
        } else t.map(function (e) {
          e.choosed = !0, e.showTodoLabel = !1;
        }), a = t;

        (0, s["default"])(this.Component).setCalendarConfig("multi", !0), this.setData({
          "calendar.days": t,
          "calendar.selectedDay": a
        });
      }
    }, {
      key: "disableDays",
      value: function disableDays(e) {
        var _this$getData5 = this.getData("calendar"),
            _this$getData5$disabl = _this$getData5.disableDays,
            t = _this$getData5$disabl === void 0 ? [] : _this$getData5$disabl,
            a = _this$getData5.days;

        if ("[object Array]" !== Object.prototype.toString.call(e)) return l.warn("disableDays 参数为数组");
        var n = [];

        if (e.length) {
          var _s4 = (n = (0, o.uniqueArrayByDate)(e.concat(t))).map(function (e) {
            return i.toTimeStr(e);
          });

          a.forEach(function (e) {
            var t = i.toTimeStr(e);
            _s4.includes(t) && (e.disable = !0);
          });
        } else a.forEach(function (e) {
          e.disable = !1;
        });

        this.setData({
          "calendar.days": a,
          "calendar.disableDays": n
        });
      }
    }, {
      key: "chooseArea",
      value: function chooseArea() {
        var _this2 = this;

        var e = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : [];
        return new Promise(function (t, a) {
          if (1 === e.length && (e = e.concat(e)), 2 === e.length) {
            if (_this2.__judgeParam(e)) {
              var _n4 = (0, s["default"])(_this2.Component).getCalendarConfig(),
                  _ref2 = (0, o.convertEnableAreaToTimestamp)(e),
                  _r2 = _ref2.startTimestamp,
                  _c2 = _ref2.endTimestamp;

              _this2.setData({
                calendarConfig: _objectSpread({}, _n4, {
                  chooseAreaMode: !0,
                  mulit: !0
                }),
                "calendar.chooseAreaTimestamp": [_r2, _c2]
              }, function () {
                _this2.__chooseContinuousDates(_r2, _c2).then(t)["catch"](a);
              });
            }
          }
        });
      }
    }, {
      key: "__pusheNextMonthDateArea",
      value: function __pusheNextMonthDateArea(e, t, a, n) {
        var s = this.buildDate(e.year, e.month);
        var r = s.length;

        for (var _e3 = 0; _e3 < r; _e3++) {
          var _c3 = s[_e3],
              _l2 = (0, o.getDateTimeStamp)(_c3);

          _l2 <= a && _l2 >= t && n.push(_objectSpread({}, _c3, {
            choosed: !0
          })), _e3 === r - 1 && _l2 < a && this.__pusheNextMonthDateArea(i.nextMonth(_c3), t, a, n);
        }
      }
    }, {
      key: "__pushPrevMonthDateArea",
      value: function __pushPrevMonthDateArea(e, t, a, n) {
        var s = i.sortDates(this.buildDate(e.year, e.month), "desc");
        var r = s.length,
            c = (0, o.getDateTimeStamp)(s[0]);

        for (var _e4 = 0; _e4 < r; _e4++) {
          var _l3 = s[_e4],
              _d2 = (0, o.getDateTimeStamp)(_l3);

          _d2 >= t && _d2 <= a && n.push(_objectSpread({}, _l3, {
            choosed: !0
          })), _e4 === r - 1 && c > t && this.__pushPrevMonthDateArea(i.prevMonth(_l3), t, a, n);
        }
      }
    }, {
      key: "__calcDateWhenNotInOneMonth",
      value: function __calcDateWhenNotInOneMonth(e) {
        var t = e.firstDate,
            a = e.lastDate,
            n = e.startTimestamp,
            s = e.endTimestamp,
            r = e.filterSelectedDate;
        return (0, o.getDateTimeStamp)(t) > n && this.__pushPrevMonthDateArea(i.prevMonth(t), n, s, r), (0, o.getDateTimeStamp)(a) < s && this.__pusheNextMonthDateArea(i.nextMonth(a), n, s, r), _toConsumableArray(i.sortDates(r));
      }
    }, {
      key: "__chooseContinuousDates",
      value: function __chooseContinuousDates(e, t) {
        var _this3 = this;

        return new Promise(function (a, n) {
          var _this3$getData = _this3.getData("calendar"),
              s = _this3$getData.days,
              _this3$getData$select = _this3$getData.selectedDay,
              r = _this3$getData$select === void 0 ? [] : _this3$getData$select,
              c = [];

          var l = [];
          r.forEach(function (a) {
            var n = (0, o.getDateTimeStamp)(a);
            n >= e && n <= t && (l.push(a), c.push(i.toTimeStr(a)));
          }), s.forEach(function (a) {
            var n = (0, o.getDateTimeStamp)(a),
                s = c.includes(i.toTimeStr(a));

            if (n >= e && n <= t) {
              if (s) return;
              a.choosed = !0, l.push(a);
            } else if (a.choosed = !1, s) {
              var _e5 = l.findIndex(function (e) {
                return i.toTimeStr(e) === i.toTimeStr(a);
              });

              _e5 > -1 && l.splice(_e5, 1);
            }
          });

          var d = s[0],
              f = s[s.length - 1],
              b = _this3.__calcDateWhenNotInOneMonth({
            firstDate: d,
            lastDate: f,
            startTimestamp: e,
            endTimestamp: t,
            filterSelectedDate: l
          });

          try {
            _this3.setData({
              "calendar.days": _toConsumableArray(s),
              "calendar.selectedDay": b
            }, function () {
              a(b);
            });
          } catch (e) {
            n(e);
          }
        });
      }
    }, {
      key: "setDateStyle",
      value: function setDateStyle(e) {
        if ("[object Array]" !== d.call(e)) return;

        var _this$getData6 = this.getData("calendar"),
            t = _this$getData6.days,
            a = _this$getData6.specialStyleDates;

        "[object Array]" === d.call(a) && (e = (0, o.uniqueArrayByDate)([].concat(_toConsumableArray(a), _toConsumableArray(e))));
        var n = e.map(function (e) {
          return "".concat(e.year, "_").concat(e.month, "_").concat(e.day);
        }),
            s = t.map(function (t) {
          var a = n.indexOf("".concat(t.year, "_").concat(t.month, "_").concat(t.day));
          return a > -1 ? _objectSpread({}, t, {
            "class": e[a]["class"]
          }) : _objectSpread({}, t);
        });
        this.setData({
          "calendar.days": s,
          "calendar.specialStyleDates": e
        });
      }
    }, {
      key: "__judgeParam",
      value: function __judgeParam(e) {
        var _ref3 = (0, o.convertEnableAreaToTimestamp)(e),
            t = _ref3.start,
            a = _ref3.end,
            n = _ref3.startTimestamp,
            s = _ref3.endTimestamp;

        if (!t || !a) return;
        var r = i.thisMonthDays(t[0], t[1]),
            c = i.thisMonthDays(a[0], a[1]);
        return t[2] > r || t[2] < 1 ? (l.warn("enableArea() 开始日期错误，指定日期不在当前月份天数范围内"), !1) : t[1] > 12 || t[1] < 1 ? (l.warn("enableArea() 开始日期错误，月份超出1-12月份"), !1) : a[2] > c || a[2] < 1 ? (l.warn("enableArea() 截止日期错误，指定日期不在当前月份天数范围内"), !1) : a[1] > 12 || a[1] < 1 ? (l.warn("enableArea() 截止日期错误，月份超出1-12月份"), !1) : !(n > s) || (l.warn("enableArea()参数最小日期大于了最大日期"), !1);
      }
    }, {
      key: "__getDisableDateTimestamp",
      value: function __getDisableDateTimestamp() {
        var e;

        var _ref4 = this.getCalendarConfig().disableMode || {},
            t = _ref4.date,
            a = _ref4.type;

        if (t) {
          var _a3 = t.split("-");

          if (_a3.length < 3) return l.warn("配置 disableMode.date 格式错误"), {};
          e = (0, o.getDateTimeStamp)({
            year: +_a3[0],
            month: +_a3[1],
            day: +_a3[2]
          });
        }

        return {
          disableDateTimestamp: e,
          disableType: a
        };
      }
    }, {
      key: "__handleEnableArea",
      value: function __handleEnableArea() {
        var e = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};
        var t = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : [];
        var a = e.area,
            n = e.days,
            s = e.startTimestamp,
            r = e.endTimestamp,
            c = this.getData("calendar.enableDays") || [];
        var l = [];
        c.length && (l = (0, o.delRepeatedEnableDay)(c, a));

        var _this$__getDisableDat = this.__getDisableDateTimestamp(),
            d = _this$__getDisableDat.disableDateTimestamp,
            f = _this$__getDisableDat.disableType,
            b = _toConsumableArray(n);

        return b.forEach(function (e) {
          var a = +i.newDate(e.year, e.month, e.day).getTime();
          (+s > a || a > +r) && !l.includes(a) || "before" === f && d && a < d || "after" === f && d && a > d ? (e.disable = !0, e.choosed && (e.choosed = !1, t = t.filter(function (t) {
            return i.toTimeStr(e) !== i.toTimeStr(t);
          }))) : e.disable && (e.disable = !1);
        }), {
          dates: b,
          selectedDay: t
        };
      }
    }, {
      key: "__handleEnableDays",
      value: function __handleEnableDays() {
        var e = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};
        var t = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : [];

        var a = e.days,
            n = e.expectEnableDaysTimestamp,
            _this$getData7 = this.getData("calendar"),
            _this$getData7$enable = _this$getData7.enableAreaTimestamp,
            s = _this$getData7$enable === void 0 ? [] : _this$getData7$enable,
            r = _toConsumableArray(a);

        return r.forEach(function (e) {
          var a = i.newDate(e.year, e.month, e.day).getTime();
          var r = !1;
          s.length ? (+s[0] > +a || +a > +s[1]) && !n.includes(+a) && (r = !0) : n.includes(+a) || (r = !0), r ? (e.disable = !0, e.choosed && (e.choosed = !1, t = t.filter(function (t) {
            return i.toTimeStr(e) !== i.toTimeStr(t);
          }))) : e.disable = !1;
        }), {
          dates: r,
          selectedDay: t
        };
      }
    }, {
      key: "__handleSelectedDays",
      value: function __handleSelectedDays() {
        var e = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : [];
        var t = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : [];
        var a = arguments.length > 2 ? arguments[2] : undefined;

        var _this$getData8 = this.getData("calendar"),
            n = _this$getData8.selectedDay,
            s = _this$getData8.showLabelAlways;

        t = n && n.length ? (0, o.uniqueArrayByDate)(n.concat(a)) : a;
        var _e$ = e[0],
            r = _e$.year,
            c = _e$.month,
            l = [];
        return t.forEach(function (e) {
          +e.year == +r && +e.month == +c && l.push(i.toTimeStr(e));
        }), _toConsumableArray(e).map(function (e) {
          l.includes(i.toTimeStr(e)) && (e.choosed = !0, s && e.showTodoLabel ? e.showTodoLabel = !0 : e.showTodoLabel = !1);
        }), {
          dates: e,
          selectedDates: t
        };
      }
    }]);

    return f;
  }(n["default"]);

  t["default"] = function (e) {
    return new f(e);
  };
}, function (e, t, a) {
  "use strict";

  Object.defineProperty(t, "__esModule", {
    value: !0
  }), t["default"] = void 0;
  var n,
      s = (n = a(0)) && n.__esModule ? n : {
    "default": n
  };

  var r = /*#__PURE__*/function (_s$default) {
    _inherits(r, _s$default);

    var _super2 = _createSuper(r);

    function r(e) {
      var _this4;

      _classCallCheck(this, r);

      _this4 = _super2.call(this, e), _this4.Component = e;
      return _this4;
    }

    _createClass(r, [{
      key: "getCalendarConfig",
      value: function getCalendarConfig() {
        return this.Component && this.Component.config ? this.Component.config : {};
      }
    }, {
      key: "setCalendarConfig",
      value: function setCalendarConfig(e) {
        var _this5 = this;

        return new Promise(function (t, a) {
          if (!_this5.Component || !_this5.Component.config) return void a("异常：未找到组件配置信息");

          var n = _objectSpread({}, _this5.Component.config, {}, e);

          _this5.Component.config = n, _this5.setData({
            calendarConfig: n
          }, function () {
            t(n);
          });
        });
      }
    }]);

    return r;
  }(s["default"]);

  t["default"] = function (e) {
    return new r(e);
  };
}, function (e, t, a) {
  "use strict";

  Object.defineProperty(t, "__esModule", {
    value: !0
  }), t["default"] = void 0;
  var n = i(a(3)),
      s = i(a(0)),
      r = i(a(6)),
      o = i(a(4)),
      c = i(a(2)),
      l = a(1);

  function i(e) {
    return e && e.__esModule ? e : {
      "default": e
    };
  }

  var d = new l.GetDate(),
      f = new l.Logger();

  var b = /*#__PURE__*/function (_s$default2) {
    _inherits(b, _s$default2);

    var _super3 = _createSuper(b);

    function b(e) {
      var _this6;

      _classCallCheck(this, b);

      _this6 = _super3.call(this, e), _this6.Component = e, _this6.getCalendarConfig = (0, o["default"])(_this6.Component).getCalendarConfig;
      return _this6;
    }

    _createClass(b, [{
      key: "switchWeek",
      value: function switchWeek(e, t) {
        var _this7 = this;

        return new Promise(function (a, n) {
          if ((0, o["default"])(_this7.Component).getCalendarConfig().multi) return f.warn("多选模式不能切换周月视图");

          var _this7$getData = _this7.getData("calendar"),
              _this7$getData$select = _this7$getData.selectedDay,
              s = _this7$getData$select === void 0 ? [] : _this7$getData$select,
              c = _this7$getData.curYear,
              l = _this7$getData.curMonth;

          if (!s.length) return _this7.__tipsWhenCanNotSwtich();
          var i = s[0];

          if ("week" === e) {
            if (_this7.Component.weekMode) return;

            var _e6 = t || i,
                _s5 = _e6.year,
                _r3 = _e6.month;

            if (c !== _s5 || l !== _r3) return _this7.__tipsWhenCanNotSwtich();
            _this7.Component.weekMode = !0, _this7.setData({
              "calendar.weekMode": !0
            }), _this7.jump(_e6).then(a)["catch"](n);
          } else _this7.Component.weekMode = !1, _this7.setData({
            "calendar.weekMode": !1
          }), (0, r["default"])(_this7.Component).renderCalendar(c, l, t).then(a)["catch"](n);
        });
      }
    }, {
      key: "updateCurrYearAndMonth",
      value: function updateCurrYearAndMonth(e) {
        var _this$getData9 = this.getData("calendar"),
            t = _this$getData9.days,
            a = _this$getData9.curYear,
            n = _this$getData9.curMonth;

        var s = t[0].month,
            r = t[t.length - 1].month,
            o = d.thisMonthDays(a, n),
            c = t[t.length - 1],
            l = t[0];
        return (c.day + 7 > o || n === s && s !== r) && "next" === e ? (n += 1) > 12 && (a += 1, n = 1) : (+l.day <= 7 || n === r && s !== r) && "prev" === e && (n -= 1) <= 0 && (a -= 1, n = 12), {
          Uyear: a,
          Umonth: n
        };
      }
    }, {
      key: "calculateLastDay",
      value: function calculateLastDay() {
        var _this$getData10 = this.getData("calendar"),
            _this$getData10$days = _this$getData10.days,
            e = _this$getData10$days === void 0 ? [] : _this$getData10$days,
            t = _this$getData10.curYear,
            a = _this$getData10.curMonth;

        return {
          lastDayInThisWeek: e[e.length - 1].day,
          lastDayInThisMonth: d.thisMonthDays(t, a)
        };
      }
    }, {
      key: "calculateFirstDay",
      value: function calculateFirstDay() {
        var _this$getData11 = this.getData("calendar"),
            e = _this$getData11.days;

        return {
          firstDayInThisWeek: e[0].day
        };
      }
    }, {
      key: "firstWeekInMonth",
      value: function firstWeekInMonth(e, t, a) {
        var s = d.dayOfWeek(e, t, 1);
        a && 0 === s && (s = 7);
        var _ref5 = [0, 7 - s],
            r = _ref5[1];
        var o = this.getData("calendar.days") || [];
        return this.Component.weekMode && (o = (0, n["default"])(this.Component).buildDate(e, t)), o.slice(0, a ? r + 1 : r);
      }
    }, {
      key: "lastWeekInMonth",
      value: function lastWeekInMonth(e, t, a) {
        var s = d.thisMonthDays(e, t),
            r = d.dayOfWeek(e, t, s),
            o = s - r,
            c = s;
        var l = this.getData("calendar.days") || [];
        return this.Component.weekMode && (l = (0, n["default"])(this.Component).buildDate(e, t)), l.slice(a ? o : o - 1, c);
      }
    }, {
      key: "__getDisableDateTimestamp",
      value: function __getDisableDateTimestamp(e) {
        var _ref6 = e.disableMode || {},
            t = _ref6.date,
            a = _ref6.type;

        var n;

        if (t) {
          var _e7 = t.split("-");

          if (_e7.length < 3) return f.warn("配置 disableMode.date 格式错误"), {};
          n = (0, l.getDateTimeStamp)({
            year: +_e7[0],
            month: +_e7[1],
            day: +_e7[2]
          });
        }

        return {
          disableDateTimestamp: n,
          disableType: a
        };
      }
    }, {
      key: "initSelectedDay",
      value: function initSelectedDay(e) {
        var _this8 = this;

        var t = _toConsumableArray(e);

        var _this$getData12 = this.getData("calendar"),
            _this$getData12$selec = _this$getData12.selectedDay,
            a = _this$getData12$selec === void 0 ? [] : _this$getData12$selec,
            n = a.map(function (e) {
          return "".concat(+e.year, "-").concat(+e.month, "-").concat(+e.day);
        }),
            s = this.getCalendarConfig(),
            _this$__getDisableDat2 = this.__getDisableDateTimestamp(s),
            r = _this$__getDisableDat2.disableDateTimestamp,
            o = _this$__getDisableDat2.disableType;

        return t = t.map(function (e) {
          if (!e) return {};
          var t = (0, l.getDateTimeStamp)(e);

          var a = _objectSpread({}, e);

          return n.includes("".concat(+a.year, "-").concat(+a.month, "-").concat(+a.day)) ? a.choosed = !0 : a.choosed = !1, ("after" === o && t > r || "before" === o && t < r) && (a.disable = !0), a = _this8.__setTodoWhenJump(a, s), s.showLunar && (a = _this8.__setSolarLunar(a)), s.highlightToday && (a = _this8.__highlightToday(a)), a;
        });
      }
    }, {
      key: "setEnableAreaOnWeekMode",
      value: function setEnableAreaOnWeekMode() {
        var _this9 = this;

        var e = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : [];

        var _this$getData13 = this.getData("calendar"),
            _this$getData13$enabl = _this$getData13.enableAreaTimestamp,
            t = _this$getData13$enabl === void 0 ? [] : _this$getData13$enabl,
            _this$getData13$enabl2 = _this$getData13.enableDaysTimestamp,
            a = _this$getData13$enabl2 === void 0 ? [] : _this$getData13$enabl2;

        e.forEach(function (e) {
          var n = d.newDate(e.year, e.month, e.day).getTime();
          var s = !1;
          t.length ? (+t[0] > +n || +n > +t[1]) && !a.includes(+n) && (s = !0) : a.length && !a.includes(+n) && (s = !0), s && (e.disable = !0, e.choosed = !1);

          var r = (0, o["default"])(_this9.Component).getCalendarConfig(),
              _this9$__getDisableDa = _this9.__getDisableDateTimestamp(r),
              c = _this9$__getDisableDa.disableDateTimestamp,
              l = _this9$__getDisableDa.disableType;

          ("before" === l && n < c || "after" === l && n > c) && (e.disable = !0);
        });
      }
    }, {
      key: "calculateNextWeekDays",
      value: function calculateNextWeekDays() {
        var _this10 = this;

        var _this$calculateLastDa = this.calculateLastDay(),
            e = _this$calculateLastDa.lastDayInThisWeek,
            t = _this$calculateLastDa.lastDayInThisMonth,
            _this$getData14 = this.getData("calendar"),
            a = _this$getData14.curYear,
            s = _this$getData14.curMonth,
            r = [];

        if (t - e >= 7) {
          var _this$updateCurrYearA = this.updateCurrYearAndMonth("next"),
              _t3 = _this$updateCurrYearA.Uyear,
              _n5 = _this$updateCurrYearA.Umonth;

          a = _t3, s = _n5;

          for (var _t4 = e + 1; _t4 <= e + 7; _t4++) {
            r.push({
              year: a,
              month: s,
              day: _t4,
              week: d.dayOfWeek(a, s, _t4)
            });
          }
        } else {
          for (var _n7 = e + 1; _n7 <= t; _n7++) {
            r.push({
              year: a,
              month: s,
              day: _n7,
              week: d.dayOfWeek(a, s, _n7)
            });
          }

          var _this$updateCurrYearA2 = this.updateCurrYearAndMonth("next"),
              _n6 = _this$updateCurrYearA2.Uyear,
              _o = _this$updateCurrYearA2.Umonth;

          a = _n6, s = _o;

          for (var _n8 = 1; _n8 <= 7 - (t - e); _n8++) {
            r.push({
              year: a,
              month: s,
              day: _n8,
              week: d.dayOfWeek(a, s, _n8)
            });
          }
        }

        r = this.initSelectedDay(r), this.setEnableAreaOnWeekMode(r), this.setData({
          "calendar.curYear": a,
          "calendar.curMonth": s,
          "calendar.days": r
        }, function () {
          (0, n["default"])(_this10.Component).setDateStyle();
        });
      }
    }, {
      key: "calculatePrevWeekDays",
      value: function calculatePrevWeekDays() {
        var _this11 = this;

        var _this$calculateFirstD = this.calculateFirstDay(),
            e = _this$calculateFirstD.firstDayInThisWeek,
            _this$getData15 = this.getData("calendar"),
            t = _this$getData15.curYear,
            a = _this$getData15.curMonth,
            s = [];

        if (e - 7 > 0) {
          var _this$updateCurrYearA3 = this.updateCurrYearAndMonth("prev"),
              _n9 = _this$updateCurrYearA3.Uyear,
              _r4 = _this$updateCurrYearA3.Umonth;

          t = _n9, a = _r4;

          for (var _n10 = e - 7; _n10 < e; _n10++) {
            s.push({
              year: t,
              month: a,
              day: _n10,
              week: d.dayOfWeek(t, a, _n10)
            });
          }
        } else {
          var _n11 = [];

          for (var _s6 = 1; _s6 < e; _s6++) {
            _n11.push({
              year: t,
              month: a,
              day: _s6,
              week: d.dayOfWeek(t, a, _s6)
            });
          }

          var _this$updateCurrYearA4 = this.updateCurrYearAndMonth("prev"),
              _r5 = _this$updateCurrYearA4.Uyear,
              _o2 = _this$updateCurrYearA4.Umonth;

          t = _r5, a = _o2;

          var _c4 = d.thisMonthDays(t, a);

          for (var _n12 = _c4 - Math.abs(e - 7); _n12 <= _c4; _n12++) {
            s.push({
              year: t,
              month: a,
              day: _n12,
              week: d.dayOfWeek(t, a, _n12)
            });
          }

          s = s.concat(_n11);
        }

        s = this.initSelectedDay(s), this.setEnableAreaOnWeekMode(s), this.setData({
          "calendar.curYear": t,
          "calendar.curMonth": a,
          "calendar.days": s
        }, function () {
          (0, n["default"])(_this11.Component).setDateStyle();
        });
      }
    }, {
      key: "calculateDatesWhenJump",
      value: function calculateDatesWhenJump(_ref7, _ref8, r) {
        var e = _ref7.year,
            t = _ref7.month,
            a = _ref7.day;
        var n = _ref8.firstWeekDays,
            s = _ref8.lastWeekDays;

        var o = this.__dateIsInWeek({
          year: e,
          month: t,
          day: a
        }, n),
            c = this.__dateIsInWeek({
          year: e,
          month: t,
          day: a
        }, s);

        var l = [];
        return l = o ? this.__calculateDatesWhenInFirstWeek(n, r) : c ? this.__calculateDatesWhenInLastWeek(s, r) : this.__calculateDates({
          year: e,
          month: t,
          day: a
        }, r);
      }
    }, {
      key: "jump",
      value: function jump(_ref9) {
        var _this12 = this;

        var e = _ref9.year,
            t = _ref9.month,
            a = _ref9.day;
        return new Promise(function (s) {
          if (!a) return;

          var r = _this12.getCalendarConfig(),
              o = "Mon" === r.firstDayOfWeek,
              c = _this12.firstWeekInMonth(e, t, o);

          var l = _this12.lastWeekInMonth(e, t, o),
              i = _this12.calculateDatesWhenJump({
            year: e,
            month: t,
            day: a
          }, {
            firstWeekDays: c,
            lastWeekDays: l
          }, o);

          i = i.map(function (n) {
            var s = _objectSpread({}, n);

            return +s.year == +e && +s.month == +t && +s.day == +a && (s.choosed = !0), s = _this12.__setTodoWhenJump(s, r), r.showLunar && (s = _this12.__setSolarLunar(s)), r.highlightToday && (s = _this12.__highlightToday(s)), s;
          }), _this12.setEnableAreaOnWeekMode(i), _this12.setData({
            "calendar.days": i,
            "calendar.curYear": e,
            "calendar.curMonth": t,
            "calendar.empytGrids": [],
            "calendar.lastEmptyGrids": [],
            "calendar.selectedDay": i.filter(function (e) {
              return e.choosed;
            })
          }, function () {
            (0, n["default"])(_this12.Component).setDateStyle(), s({
              year: e,
              month: t,
              date: a
            });
          });
        });
      }
    }, {
      key: "__setTodoWhenJump",
      value: function __setTodoWhenJump(e) {
        var t = _objectSpread({}, e),
            _this$getData16 = this.getData("calendar"),
            _this$getData16$todoL = _this$getData16.todoLabels,
            a = _this$getData16$todoL === void 0 ? [] : _this$getData16$todoL,
            n = _this$getData16.showLabelAlways,
            s = a.map(function (e) {
          return "".concat(+e.year, "-").concat(+e.month, "-").concat(+e.day);
        }).indexOf("".concat(+t.year, "-").concat(+t.month, "-").concat(+t.day));

        if (-1 !== s) {
          t.showTodoLabel = !!n || !t.choosed;

          var _e8 = a[s] || {};

          t.showTodoLabel && _e8.todoText && (t.todoText = _e8.todoText);
        }

        return t;
      }
    }, {
      key: "__setSolarLunar",
      value: function __setSolarLunar(e) {
        var t = _objectSpread({}, e);

        return t.lunar = c["default"].solar2lunar(+t.year, +t.month, +t.day), t;
      }
    }, {
      key: "__highlightToday",
      value: function __highlightToday(e) {
        var t = _objectSpread({}, e),
            a = d.todayDate(),
            n = +a.year == +t.year && +a.month == +t.month && +t.day == +a.date;

        return t.isToday = n, t;
      }
    }, {
      key: "__calculateDatesWhenInFirstWeek",
      value: function __calculateDatesWhenInFirstWeek(e) {
        var t = _toConsumableArray(e);

        if (t.length < 7) {
          var _e9,
              _t$ = t[0],
              _a4 = _t$.year,
              _n13 = _t$.month,
              _s7 = 7 - t.length;

          for (_n13 > 1 ? (_n13 -= 1, _e9 = d.thisMonthDays(_a4, _n13)) : (_n13 = 12, _a4 -= 1, _e9 = d.thisMonthDays(_a4, _n13)); _s7;) {
            t.unshift({
              year: _a4,
              month: _n13,
              day: _e9,
              week: d.dayOfWeek(_a4, _n13, _e9)
            }), _e9 -= 1, _s7 -= 1;
          }
        }

        return t;
      }
    }, {
      key: "__calculateDatesWhenInLastWeek",
      value: function __calculateDatesWhenInLastWeek(e) {
        var t = _toConsumableArray(e);

        if (t.length < 7) {
          var _t$2 = t[0],
              _e10 = _t$2.year,
              _a5 = _t$2.month,
              _n14 = 7 - t.length,
              _s8 = 1;

          for (_a5 > 11 ? (_a5 = 1, _e10 += 1) : _a5 += 1; _n14;) {
            t.push({
              year: _e10,
              month: _a5,
              day: _s8,
              week: d.dayOfWeek(_e10, _a5, _s8)
            }), _s8 += 1, _n14 -= 1;
          }
        }

        return t;
      }
    }, {
      key: "__calculateDates",
      value: function __calculateDates(_ref10, s) {
        var e = _ref10.year,
            t = _ref10.month,
            a = _ref10.day;
        var r = d.dayOfWeek(e, t, a);
        var o = [a - r, a + (6 - r)];
        return s && (o = [a + 1 - r, a + (7 - r)]), (0, n["default"])(this.Component).buildDate(e, t).slice(o[0] - 1, o[1]);
      }
    }, {
      key: "__dateIsInWeek",
      value: function __dateIsInWeek(e, t) {
        return t.find(function (t) {
          return +t.year == +e.year && +t.month == +e.month && +t.day == +e.day;
        });
      }
    }, {
      key: "__tipsWhenCanNotSwtich",
      value: function __tipsWhenCanNotSwtich() {
        f.info("当前月份未选中日期下切换为周视图，不能明确该展示哪一周的日期，故此情况不允许切换");
      }
    }]);

    return b;
  }(s["default"]);

  t["default"] = function (e) {
    return new b(e);
  };
}, function (e, t, a) {
  "use strict";

  Object.defineProperty(t, "__esModule", {
    value: !0
  }), t["default"] = void 0;
  var n = l(a(3)),
      s = l(a(7)),
      r = l(a(0)),
      o = l(a(2)),
      c = a(1);

  function l(e) {
    return e && e.__esModule ? e : {
      "default": e
    };
  }

  var i = new c.GetDate(),
      d = new c.Logger();

  var f = /*#__PURE__*/function (_r$default) {
    _inherits(f, _r$default);

    var _super4 = _createSuper(f);

    function f(e) {
      var _this13;

      _classCallCheck(this, f);

      _this13 = _super4.call(this, e), _this13.Component = e;
      return _this13;
    }

    _createClass(f, [{
      key: "getCalendarConfig",
      value: function getCalendarConfig() {
        return this.Component.config;
      }
    }, {
      key: "renderCalendar",
      value: function renderCalendar(e, t, a) {
        var _this14 = this;

        return new Promise(function (r) {
          _this14.calculateEmptyGrids(e, t), _this14.calculateDays(e, t, a).then(function () {
            var _ref11 = _this14.getData("calendar") || {},
                a = _ref11.todoLabels,
                o = _ref11.specialStyleDates;

            a && a.find(function (a) {
              return +a.month == +t && +a.year == +e;
            }) && (0, s["default"])(_this14.Component).setTodoLabels(), o && o.length && o.find(function (a) {
              return +a.month == +t && +a.year == +e;
            }) && (0, n["default"])(_this14.Component).setDateStyle(o), _this14.Component.firstRender ? r({
              firstRender: !1
            }) : r({
              firstRender: !0
            });
          });
        });
      }
    }, {
      key: "calculateEmptyGrids",
      value: function calculateEmptyGrids(e, t) {
        this.calculatePrevMonthGrids(e, t), this.calculateNextMonthGrids(e, t);
      }
    }, {
      key: "calculatePrevMonthGrids",
      value: function calculatePrevMonthGrids(e, t) {
        var a = [];
        var n = i.thisMonthDays(e, t - 1);
        var s = i.firstDayOfWeek(e, t);
        var r = this.getCalendarConfig() || {};

        if ("Mon" === r.firstDayOfWeek && (0 === s ? s = 6 : s -= 1), s > 0) {
          var _c5 = n - s,
              _l4 = r.onlyShowCurrentMonth,
              _this$getCalendarConf2 = this.getCalendarConfig(),
              _i = _this$getCalendarConf2.showLunar;

          for (var _s9 = n; _s9 > _c5; _s9--) {
            _l4 ? a.push("") : a.push({
              day: _s9,
              lunar: _i ? o["default"].solar2lunar(e, t - 1, _s9) : null
            });
          }

          this.setData({
            "calendar.empytGrids": a.reverse()
          });
        } else this.setData({
          "calendar.empytGrids": null
        });
      }
    }, {
      key: "calculateExtraEmptyDate",
      value: function calculateExtraEmptyDate(e, t, a) {
        var n = 0;

        if (2 == +t) {
          n += 7;

          var _s10 = i.dayOfWeek(e, t, 1);

          "Mon" === a.firstDayOfWeek ? 1 == +_s10 && (n += 7) : 0 == +_s10 && (n += 7);
        } else {
          var _s11 = i.dayOfWeek(e, t, 1);

          "Mon" === a.firstDayOfWeek ? 0 !== _s11 && _s11 < 6 && (n += 7) : _s11 < 5 && (n += 7);
        }

        return n;
      }
    }, {
      key: "calculateNextMonthGrids",
      value: function calculateNextMonthGrids(e, t) {
        var a = [];
        var n = i.thisMonthDays(e, t);
        var s = i.dayOfWeek(e, t, n);
        var r = this.getCalendarConfig() || {};
        "Mon" === r.firstDayOfWeek && (0 === s ? s = 6 : s -= 1);
        var c = 7 - (s + 1);
        var l = r.onlyShowCurrentMonth,
            d = r.showLunar;
        l || (c += this.calculateExtraEmptyDate(e, t, r));

        for (var _n15 = 1; _n15 <= c; _n15++) {
          l ? a.push("") : a.push({
            day: _n15,
            lunar: d ? o["default"].solar2lunar(e, t + 1, _n15) : null
          });
        }

        this.setData({
          "calendar.lastEmptyGrids": a
        });
      }
    }, {
      key: "setSelectedDay",
      value: function setSelectedDay(e, t, a) {
        var n = [];
        var s = this.getCalendarConfig();
        if (s.noDefault) n = [], s.noDefault = !1;else {
          var _s12 = this.getData("calendar") || {},
              _this$getCalendarConf3 = this.getCalendarConfig(),
              _r6 = _this$getCalendarConf3.showLunar;

          n = a ? [{
            year: e,
            month: t,
            day: a,
            choosed: !0,
            week: i.dayOfWeek(e, t, a),
            lunar: _r6 ? o["default"].solar2lunar(e, t, a) : null
          }] : _s12.selectedDay;
        }
        return n;
      }
    }, {
      key: "__getDisableDateTimestamp",
      value: function __getDisableDateTimestamp() {
        var e;

        var _ref12 = this.getCalendarConfig().disableMode || {},
            t = _ref12.date,
            a = _ref12.type;

        if (t) {
          var _a6 = t.split("-");

          if (_a6.length < 3) return d.warn("配置 disableMode.date 格式错误"), {};
          e = (0, c.getDateTimeStamp)({
            year: +_a6[0],
            month: +_a6[1],
            day: +_a6[2]
          });
        }

        return {
          disableDateTimestamp: e,
          disableType: a
        };
      }
    }, {
      key: "calculateDays",
      value: function calculateDays(e, t, a) {
        var _this15 = this;

        return new Promise(function (s) {
          var r = [];

          var _this15$getData = _this15.getData("calendar"),
              _this15$getData$disab = _this15$getData.disableDays,
              o = _this15$getData$disab === void 0 ? [] : _this15$getData$disab,
              _this15$getData$choos = _this15$getData.chooseAreaTimestamp,
              l = _this15$getData$choos === void 0 ? [] : _this15$getData$choos;

          r = (0, n["default"])(_this15.Component).buildDate(e, t);

          var d = _this15.setSelectedDay(e, t, a),
              f = d.map(function (e) {
            return i.toTimeStr(e);
          }),
              b = o.map(function (e) {
            return i.toTimeStr(e);
          }),
              _l5 = _slicedToArray(l, 2),
              h = _l5[0],
              u = _l5[1];

          r.forEach(function (e) {
            var t = i.toTimeStr(e),
                a = (0, c.getDateTimeStamp)(e);

            if (f.includes(t)) {
              if (e.choosed = !0, a > u || a < h) {
                var _t5 = d.findIndex(function (t) {
                  return i.toTimeStr(t) === i.toTimeStr(e);
                });

                d.splice(_t5, 1);
              }
            } else h && u && a >= h && a <= u && (e.choosed = !0, d.push(e));

            b.includes(t) && (e.disable = !0);

            var _this15$__getDisableD = _this15.__getDisableDateTimestamp(),
                n = _this15$__getDisableD.disableDateTimestamp,
                s = _this15$__getDisableD.disableType;

            var r = !1;
            n && ("before" === s && a < n || "after" === s && a > n) && (r = !0), (r || _this15.__isDisable(a)) && (e.disable = !0, e.choosed = !1);
          }), _this15.setData({
            "calendar.days": r,
            "calendar.selectedDay": _toConsumableArray(d) || !1
          }, function () {
            s();
          });
        });
      }
    }, {
      key: "__isDisable",
      value: function __isDisable(e) {
        var _this$getData17 = this.getData("calendar"),
            _this$getData17$enabl = _this$getData17.enableArea,
            t = _this$getData17$enabl === void 0 ? [] : _this$getData17$enabl,
            _this$getData17$enabl2 = _this$getData17.enableDays,
            a = _this$getData17$enabl2 === void 0 ? [] : _this$getData17$enabl2,
            _this$getData17$enabl3 = _this$getData17.enableAreaTimestamp,
            n = _this$getData17$enabl3 === void 0 ? [] : _this$getData17$enabl3;

        var s = !1,
            r = (0, c.converEnableDaysToTimestamp)(a);
        return t.length && (r = (0, c.delRepeatedEnableDay)(a, t)), n.length ? (+n[0] > +e || +e > +n[1]) && !r.includes(+e) && (s = !0) : r.length && !r.includes(+e) && (s = !0), s;
      }
    }]);

    return f;
  }(r["default"]);

  t["default"] = function (e) {
    return new f(e);
  };
}, function (e, t, a) {
  "use strict";

  Object.defineProperty(t, "__esModule", {
    value: !0
  }), t["default"] = void 0;
  var n,
      s = (n = a(0)) && n.__esModule ? n : {
    "default": n
  },
      r = a(1);
  var o = new r.Logger(),
      c = new r.GetDate();

  var l = /*#__PURE__*/function (_s$default3) {
    _inherits(l, _s$default3);

    var _super5 = _createSuper(l);

    function l(e) {
      var _this16;

      _classCallCheck(this, l);

      _this16 = _super5.call(this, e), _this16.Component = e;
      return _this16;
    }

    _createClass(l, [{
      key: "setTodoLabels",
      value: function setTodoLabels(e) {
        var _this17 = this;

        e && (this.Component.todoConfig = e);
        var t = this.getData("calendar");
        if (!t || !t.days) return o.warn("请等待日历初始化完成后再调用该方法");

        var a = _toConsumableArray(t.days),
            n = t.curYear,
            s = t.curMonth,
            _ref13 = e || this.Component.todoConfig || {},
            c = _ref13.circle,
            _ref13$dotColor = _ref13.dotColor,
            l = _ref13$dotColor === void 0 ? "" : _ref13$dotColor,
            _ref13$pos = _ref13.pos,
            i = _ref13$pos === void 0 ? "bottom" : _ref13$pos,
            d = _ref13.showLabelAlways,
            _ref13$days = _ref13.days,
            f = _ref13$days === void 0 ? [] : _ref13$days,
            _t$todoLabels = t.todoLabels,
            b = _t$todoLabels === void 0 ? [] : _t$todoLabels,
            h = t.todoLabelPos,
            u = t.todoLabelColor,
            y = this.getTodoLabels({
          year: n,
          month: s
        });

        var m = f.filter(function (e) {
          return +e.year == +n && +e.month == +s;
        });
        this.Component.weekMode && (m = f);
        var D = y.concat(m);

        var _iterator = _createForOfIteratorHelper(D),
            _step;

        try {
          var _loop = function _loop() {
            var e = _step.value;
            var t = void 0;
            (t = _this17.Component.weekMode ? a.find(function (t) {
              return +e.year == +t.year && +e.month == +t.month && +e.day == +t.day;
            }) : a[e.day - 1]) && (t.showTodoLabel = !!d || !t.choosed, t.showTodoLabel && e.todoText && (t.todoText = e.todoText), e.todoLabelColor && (t.todoLabelColor = e.todoLabelColor));
          };

          for (_iterator.s(); !(_step = _iterator.n()).done;) {
            _loop();
          }
        } catch (err) {
          _iterator.e(err);
        } finally {
          _iterator.f();
        }

        var p = {
          "calendar.days": a,
          "calendar.todoLabels": (0, r.uniqueArrayByDate)(f.concat(b))
        };
        c || (i && i !== h && (p["calendar.todoLabelPos"] = i), l && l !== u && (p["calendar.todoLabelColor"] = l)), p["calendar.todoLabelCircle"] = c || !1, p["calendar.showLabelAlways"] = d || !1, this.setData(p);
      }
    }, {
      key: "deleteTodoLabels",
      value: function deleteTodoLabels(e) {
        if (!(e instanceof Array && e.length)) return;

        var t = this.filterTodos(e),
            _this$getData18 = this.getData("calendar"),
            a = _this$getData18.days,
            n = _this$getData18.curYear,
            s = _this$getData18.curMonth,
            r = t.filter(function (e) {
          return n === +e.year && s === +e.month;
        });

        a.forEach(function (e) {
          e.showTodoLabel = !1;
        }), r.forEach(function (e) {
          a[e.day - 1].showTodoLabel = !a[e.day - 1].choosed;
        }), this.setData({
          "calendar.days": a,
          "calendar.todoLabels": t
        });
      }
    }, {
      key: "clearTodoLabels",
      value: function clearTodoLabels() {
        var _this$getData19 = this.getData("calendar"),
            _this$getData19$days = _this$getData19.days,
            e = _this$getData19$days === void 0 ? [] : _this$getData19$days,
            t = [].concat(e);

        t.forEach(function (e) {
          e.showTodoLabel = !1;
        }), this.setData({
          "calendar.days": t,
          "calendar.todoLabels": []
        });
      }
    }, {
      key: "getTodoLabels",
      value: function getTodoLabels(e) {
        var _this$getData20 = this.getData("calendar"),
            _this$getData20$todoL = _this$getData20.todoLabels,
            t = _this$getData20$todoL === void 0 ? [] : _this$getData20$todoL;

        if (e) {
          var _a7 = e.year,
              _n16 = e.month;
          return t.filter(function (e) {
            return +e.year == +_a7 && +e.month == +_n16;
          });
        }

        return t;
      }
    }, {
      key: "filterTodos",
      value: function filterTodos(e) {
        var t = this.getData("calendar.todoLabels") || [],
            a = e.map(function (e) {
          return c.toTimeStr(e);
        });
        return t.filter(function (e) {
          return !a.includes(c.toTimeStr(e));
        });
      }
    }, {
      key: "showTodoLabels",
      value: function showTodoLabels(e, t, a) {
        var _this18 = this;

        e.forEach(function (e) {
          if (_this18.Component.weekMode) t.forEach(function (n, s) {
            if (+n.day == +e.day) {
              var _n17 = t[s];
              _n17.hasTodo = !0, _n17.todoText = e.todoText, a && a.length && +a[0].day == +e.day && (_n17.showTodoLabel = !0);
            }
          });else {
            var _n18 = t[e.day - 1];
            if (!_n18) return;
            _n18.hasTodo = !0, _n18.todoText = e.todoText, a && a.length && +a[0].day == +e.day && (t[a[0].day - 1].showTodoLabel = !0);
          }
        });
      }
    }]);

    return l;
  }(s["default"]);

  t["default"] = function (e) {
    return new l(e);
  };
}, function (e, t, a) {
  "use strict";

  var n,
      s = (n = a(5)) && n.__esModule ? n : {
    "default": n
  },
      r = a(1),
      o = function (e) {
    if (e && e.__esModule) return e;
    var t = {};
    if (null != e) for (var a in e) {
      if (Object.prototype.hasOwnProperty.call(e, a)) {
        var n = Object.defineProperty && Object.getOwnPropertyDescriptor ? Object.getOwnPropertyDescriptor(e, a) : {};
        n.get || n.set ? Object.defineProperty(t, a, n) : t[a] = e[a];
      }
    }
    return t["default"] = e, t;
  }(a(9));

  var c = new r.Slide(),
      l = new r.Logger(),
      i = new r.GetDate();
  Component({
    options: {
      styleIsolation: "apply-shared",
      multipleSlots: !0
    },
    properties: {
      calendarConfig: {
        type: Object,
        value: {}
      }
    },
    data: {
      handleMap: {
        prev_year: "chooseYear",
        prev_month: "chooseMonth",
        next_month: "chooseMonth",
        next_year: "chooseYear"
      }
    },
    lifetimes: {
      attached: function attached() {
        this.initComp();
      }
    },
    attached: function attached() {
      this.initComp();
    },
    methods: {
      initComp: function initComp() {
        var e = this.setDefaultDisableDate();
        this.setConfig(e), (0, o["default"])(this, e);
      },
      setDefaultDisableDate: function setDefaultDisableDate() {
        var e = this.properties.calendarConfig || {};
        return e.disableMode && !e.disableMode.date && (e.disableMode.date = i.toTimeStr(i.todayDate())), e;
      },
      setConfig: function setConfig(e) {
        e.markToday && "string" == typeof e.markToday && (e.highlightToday = !0), e.theme = e.theme || "default", this.setData({
          calendarConfig: e
        });
      },
      chooseDate: function chooseDate(e) {
        var t = e.currentTarget.dataset.type;
        t && this[this.data.handleMap[t]](t);
      },
      chooseYear: function chooseYear(e) {
        var _this$data$calendar = this.data.calendar,
            t = _this$data$calendar.curYear,
            a = _this$data$calendar.curMonth;
        if (!t || !a) return l.warn("异常：未获取到当前年月");
        if (this.weekMode) return console.warn("周视图下不支持点击切换年月");
        var n = +t,
            s = +a;
        "prev_year" === e ? n -= 1 : "next_year" === e && (n += 1), this.render(t, a, n, s);
      },
      chooseMonth: function chooseMonth(e) {
        var _this$data$calendar2 = this.data.calendar,
            t = _this$data$calendar2.curYear,
            a = _this$data$calendar2.curMonth;
        if (!t || !a) return l.warn("异常：未获取到当前年月");
        if (this.weekMode) return console.warn("周视图下不支持点击切换年月");
        var n = +t,
            s = +a;
        "prev_month" === e ? (s -= 1) < 1 && (n -= 1, s = 12) : "next_month" === e && (s += 1) > 12 && (n += 1, s = 1), this.render(t, a, n, s);
      },
      render: function render(e, t, a, n) {
        o.whenChangeDate.call(this, {
          curYear: e,
          curMonth: t,
          newYear: a,
          newMonth: n
        }), this.setData({
          "calendar.curYear": a,
          "calendar.curMonth": n
        }), o.renderCalendar.call(this, a, n);
      },
      tapDayItem: function tapDayItem(e) {
        var _e$currentTarget$data = e.currentTarget.dataset,
            t = _e$currentTarget$data.idx,
            _e$currentTarget$data2 = _e$currentTarget$data.date,
            a = _e$currentTarget$data2 === void 0 ? {} : _e$currentTarget$data2,
            n = a.day,
            s = a.disable;
        if (s || !n) return;
        var r = this.data.calendarConfig || this.config || {},
            c = r.multi,
            l = r.chooseAreaMode;
        c ? o.whenMulitSelect.call(this, t) : l ? o.whenChooseArea.call(this, t) : o.whenSingleSelect.call(this, t);
      },
      doubleClickToToday: function doubleClickToToday() {
        if (!this.config.multi && !this.weekMode) if (void 0 === this.count ? this.count = 1 : this.count += 1, this.lastClick) {
          new Date().getTime() - this.lastClick < 500 && this.count >= 2 && o.jump.call(this), this.count = void 0, this.lastClick = void 0;
        } else this.lastClick = new Date().getTime();
      },
      calendarTouchstart: function calendarTouchstart(e) {
        var t = e.touches[0],
            a = t.clientX,
            n = t.clientY;
        this.slideLock = !0, this.setData({
          "gesture.startX": a,
          "gesture.startY": n
        });
      },
      handleSwipe: function handleSwipe(e) {
        var t = "calendar.leftSwipe",
            a = "next_month",
            n = "next_week";
        if ("right" === e && (t = "calendar.rightSwipe", a = "prev_month", n = "prev_week"), this.setData(_defineProperty({}, t, 1)), this.currentYM = (0, o.getCurrentYM)(), this.weekMode) return this.slideLock = !1, this.currentDates = (0, o.getCalendarDates)(), "prev_week" === n ? (0, s["default"])(this).calculatePrevWeekDays() : "next_week" === n && (0, s["default"])(this).calculateNextWeekDays(), this.onSwipeCalendar(n), void this.onWeekChange(n);
        this.chooseMonth(a), this.onSwipeCalendar(a);
      },
      calendarTouchmove: function calendarTouchmove(e) {
        var t = this.data.gesture,
            a = this.properties.calendarConfig.preventSwipe;
        this.slideLock && !a && (c.isLeft(t, e.touches[0]) && (this.handleSwipe("left"), this.slideLock = !1), c.isRight(t, e.touches[0]) && (this.handleSwipe("right"), this.slideLock = !1));
      },
      calendarTouchend: function calendarTouchend(e) {
        this.setData({
          "calendar.leftSwipe": 0,
          "calendar.rightSwipe": 0
        });
      },
      onSwipeCalendar: function onSwipeCalendar(e) {
        this.triggerEvent("onSwipe", {
          directionType: e,
          currentYM: this.currentYM
        });
      },
      onWeekChange: function onWeekChange(e) {
        this.triggerEvent("whenChangeWeek", {
          current: {
            currentYM: this.currentYM,
            dates: _toConsumableArray(this.currentDates)
          },
          next: {
            currentYM: (0, o.getCurrentYM)(),
            dates: (0, o.getCalendarDates)()
          },
          directionType: e
        }), this.currentDates = null, this.currentYM = null;
      }
    }
  });
}, function (e, t, a) {
  "use strict";

  Object.defineProperty(t, "__esModule", {
    value: !0
  }), t.getCurrentYM = L, t.getSelectedDay = v, t.cancelSelectedDates = W, t.jump = A, t.setTodoLabels = x, t.deleteTodoLabels = O, t.clearTodoLabels = Y, t.getTodoLabels = E, t.disableDay = I, t.enableArea = P, t.enableDays = j, t.setSelectedDays = $, t.getCalendarConfig = G, t.setCalendarConfig = U, t.getCalendarDates = F, t.chooseDateArea = N, t.setDateStyle = R, t.switchView = X, t["default"] = t.calculateNextWeekDays = t.calculatePrevWeekDays = t.whenMulitSelect = t.whenChooseArea = t.whenSingleSelect = t.renderCalendar = t.whenChangeDate = void 0;
  var n = f(a(3)),
      s = f(a(5)),
      r = f(a(7)),
      o = f(a(0)),
      c = f(a(6)),
      l = f(a(4)),
      i = f(a(2)),
      d = a(1);

  function f(e) {
    return e && e.__esModule ? e : {
      "default": e
    };
  }

  var b = {},
      h = new d.Logger(),
      u = new d.GetDate(),
      y = null;

  function m(e) {
    return e && (b = (0, d.getComponent)(e)), b;
  }

  function D(e, t) {
    return m(t), (y = new o["default"](b)).getData(e);
  }

  function p(e) {
    var t = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : function () {};
    return new o["default"](b).setData(e, t);
  }

  var g = {
    renderCalendar: function renderCalendar(e, t, a) {
      return (0, d.isComponent)(this) && (b = this), new Promise(function (n, s) {
        (0, c["default"])(b).renderCalendar(e, t, a).then(function () {
          var s = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};
          if (!s.firstRender) return n({
            year: e,
            month: t,
            date: a
          });
          !function (e) {
            e.calendar = {
              jump: A,
              switchView: X,
              disableDay: I,
              enableArea: P,
              enableDays: j,
              chooseDateArea: N,
              getCurrentYM: L,
              getSelectedDay: v,
              cancelSelectedDates: W,
              setDateStyle: R,
              setTodoLabels: x,
              getTodoLabels: E,
              deleteTodoLabels: O,
              clearTodoLabels: Y,
              setSelectedDays: $,
              getCalendarConfig: G,
              setCalendarConfig: U,
              getCalendarDates: F
            };
          }((0, d.getCurrentPage)()), b.triggerEvent("afterCalendarRender", b), b.firstRender = !0, d.initialTasks.flag = "finished", d.initialTasks.tasks.length && d.initialTasks.tasks.shift()(), n({
            year: e,
            month: t,
            date: a
          });
        })["catch"](function (e) {
          s(e);
        });
      });
    },
    whenChangeDate: function whenChangeDate(_ref14) {
      var e = _ref14.curYear,
          t = _ref14.curMonth,
          a = _ref14.newYear,
          n = _ref14.newMonth;
      b.triggerEvent("whenChangeMonth", {
        current: {
          year: e,
          month: t
        },
        next: {
          year: a,
          month: n
        }
      });
    },
    whenMulitSelect: function whenMulitSelect(e) {
      (0, d.isComponent)(this) && (b = this);

      var _D = D(),
          _D$calendar = _D.calendar,
          t = _D$calendar === void 0 ? {} : _D$calendar,
          a = t.days,
          n = t.todoLabels,
          s = (0, l["default"])(b).getCalendarConfig();

      var _t$selectedDay = t.selectedDay,
          r = _t$selectedDay === void 0 ? [] : _t$selectedDay;
      var o = a[e];

      if (o) {
        if (o.choosed = !o.choosed, o.choosed) {
          o.cancel = !1;

          var _D2 = D("calendar"),
              _e11 = _D2.showLabelAlways;

          _e11 && o.showTodoLabel ? o.showTodoLabel = !0 : o.showTodoLabel = !1, s.takeoverTap || r.push(o);
        } else {
          o.cancel = !0;

          var _e12 = u.toTimeStr(o);

          r = r.filter(function (t) {
            return _e12 !== u.toTimeStr(t);
          }), n && n.forEach(function (t) {
            _e12 === u.toTimeStr(t) && (o.showTodoLabel = !0);
          });
        }

        if (s.takeoverTap) return b.triggerEvent("onTapDay", o);
        p({
          "calendar.days": a,
          "calendar.selectedDay": r
        }), g.afterTapDay(o, r);
      }
    },
    whenSingleSelect: function whenSingleSelect(e) {
      (0, d.isComponent)(this) && (b = this);

      var _D3 = D(),
          _D3$calendar = _D3.calendar,
          t = _D3$calendar === void 0 ? {} : _D3$calendar,
          a = t.days,
          _t$selectedDay2 = t.selectedDay,
          n = _t$selectedDay2 === void 0 ? [] : _t$selectedDay2,
          s = t.todoLabels;

      var o = [];
      var c = a[e];
      if (!c) return;

      var i = (n[0] || {}).day,
          f = i && a[i - 1] || {},
          _ref15 = a[0] || {},
          h = _ref15.month,
          u = _ref15.year,
          y = (0, l["default"])(b).getCalendarConfig();

      if (y.takeoverTap) return b.triggerEvent("onTapDay", c);
      if (g.afterTapDay(c), !y.inverse && f.day === c.day) return;
      b.weekMode && a.forEach(function (e, t) {
        e.day === i && (a[t].choosed = !1);
      }), s && (o = s.filter(function (e) {
        return +e.year === u && +e.month === h;
      })), (0, r["default"])(b).showTodoLabels(o, a, n);
      var m = {
        "calendar.days": a
      };
      f.day !== c.day ? (f.choosed = !1, c.choosed = !0, t.showLabelAlways && c.showTodoLabel || (c.showTodoLabel = !1), m["calendar.selectedDay"] = [c]) : y.inverse && (c.choosed = !c.choosed, c.choosed && (c.showTodoLabel && t.showLabelAlways ? c.showTodoLabel = !0 : c.showTodoLabel = !1), m["calendar.selectedDay"] = []), p(m);
    },
    gotoSetContinuousDates: function gotoSetContinuousDates(e, t) {
      return N(["".concat(u.toTimeStr(e)), "".concat(u.toTimeStr(t))]);
    },
    timeRangeHelper: function timeRangeHelper(e, t) {
      var a = (0, d.getDateTimeStamp)(e),
          n = t[0];
      var s,
          r,
          o = t.length;
      return o > 1 && (s = t[o - 1], r = (0, d.getDateTimeStamp)(s)), {
        endDate: s,
        startDate: n,
        currentDateTimestamp: a,
        endDateTimestamp: r,
        startTimestamp: (0, d.getDateTimeStamp)(n)
      };
    },
    calculateDateRange: function calculateDateRange(e, t) {
      var _this$timeRangeHelper = this.timeRangeHelper(e, t),
          a = _this$timeRangeHelper.endDate,
          n = _this$timeRangeHelper.startDate,
          s = _this$timeRangeHelper.currentDateTimestamp,
          r = _this$timeRangeHelper.endDateTimestamp,
          o = _this$timeRangeHelper.startTimestamp;

      var c = [],
          l = t.length;
      var i = t.filter(function (t) {
        return u.toTimeStr(t) === u.toTimeStr(e);
      });
      if (2 === l && i.length) return c = [e, e];

      if (s >= o && r && s <= r) {
        c = l / 2 > t.findIndex(function (t) {
          return u.toTimeStr(t) === u.toTimeStr(e);
        }) ? [e, a] : [n, e];
      } else s < o ? c = [e, a] : s > o && (c = [n, e]);

      return c;
    },
    whenChooseArea: function whenChooseArea(e) {
      var _this19 = this;

      return new Promise(function (t, a) {
        if ((0, d.isComponent)(_this19) && (b = _this19), b.weekMode) return;

        var _D4 = D("calendar"),
            _D4$days = _D4.days,
            n = _D4$days === void 0 ? [] : _D4$days,
            s = _D4.selectedDay,
            r = _D4.lastChoosedDate,
            o = n[e];

        if (!o.disable) {
          if ((0, l["default"])(b).getCalendarConfig().takeoverTap) return b.triggerEvent("onTapDay", o);

          if (s && s.length > 1) {
            var _e13 = g.calculateDateRange(o, u.sortDates(s));

            return g.gotoSetContinuousDates.apply(g, _toConsumableArray(_e13)).then(function (e) {
              t(e), g.afterTapDay(o);
            })["catch"](function (e) {
              a(e), g.afterTapDay(o);
            });
          }

          if (r || s && 1 === s.length) {
            var _e14 = r || s[0];

            var _n19 = [_e14, o];

            var _c6 = (0, d.getDateTimeStamp)(o);

            return (0, d.getDateTimeStamp)(_e14) > _c6 && (_n19 = [o, _e14]), g.gotoSetContinuousDates.apply(g, _toConsumableArray(_n19)).then(function (e) {
              t(e), g.afterTapDay(o);
            })["catch"](function (e) {
              a(e), g.afterTapDay(o);
            });
          }

          n.forEach(function (e) {
            +e.day == +o.day ? e.choosed = !0 : e.choosed = !1;
          }), _this19.setData({
            "calendar.days": _toConsumableArray(n),
            "calendar.lastChoosedDate": o
          });
        }
      });
    },
    afterTapDay: function afterTapDay(e, t) {
      var a = (0, l["default"])(b).getCalendarConfig(),
          n = a.multi;
      n ? b.triggerEvent("afterTapDay", {
        currentSelected: e,
        selectedDates: t
      }) : b.triggerEvent("afterTapDay", e);
    },
    jumpToToday: function jumpToToday() {
      return new Promise(function (e, t) {
        var _u$todayDate = u.todayDate(),
            a = _u$todayDate.year,
            n = _u$todayDate.month,
            s = _u$todayDate.date,
            r = u.todayTimestamp(),
            o = (0, l["default"])(b).getCalendarConfig();

        p({
          "calendar.curYear": a,
          "calendar.curMonth": n,
          "calendar.selectedDay": [{
            year: a,
            day: s,
            month: n,
            choosed: !0,
            lunar: o.showLunar ? i["default"].solar2lunar(a, n, s) : null
          }],
          "calendar.todayTimestamp": r
        }), g.renderCalendar(a, n, s).then(function () {
          e({
            year: a,
            month: n,
            date: s
          });
        })["catch"](function () {
          t("jump failed");
        });
      });
    }
  },
      T = g.whenChangeDate;
  t.whenChangeDate = T;
  var w = g.renderCalendar;
  t.renderCalendar = w;
  var C = g.whenSingleSelect;
  t.whenSingleSelect = C;
  var M = g.whenChooseArea;
  t.whenChooseArea = M;
  var _ = g.whenMulitSelect;
  t.whenMulitSelect = _;
  var S = g.calculatePrevWeekDays;
  t.calculatePrevWeekDays = S;
  var k = g.calculateNextWeekDays;

  function L(e) {
    return m(e), {
      year: D("calendar.curYear"),
      month: D("calendar.curMonth")
    };
  }

  function v() {
    var e = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};
    var t = arguments.length > 1 ? arguments[1] : undefined;
    m(t);
    var a = G(),
        n = D("calendar.selectedDay") || [];

    if (e.lunar && !a.showLunar) {
      return u.convertLunar(n);
    }

    return n;
  }

  function W(e, t) {
    m(t);

    var _ref16 = D("calendar") || {},
        _ref16$days = _ref16.days,
        a = _ref16$days === void 0 ? [] : _ref16$days,
        _ref16$selectedDay = _ref16.selectedDay,
        n = _ref16$selectedDay === void 0 ? [] : _ref16$selectedDay;

    if (e) {
      var _t6 = e.map(function (e) {
        return "".concat(+e.year, "-").concat(+e.month, "-").concat(+e.day);
      }),
          _s13 = n.filter(function (e) {
        return !_t6.includes("".concat(+e.year, "-").concat(+e.month, "-").concat(+e.day));
      });

      a.forEach(function (e) {
        _t6.includes("".concat(+e.year, "-").concat(+e.month, "-").concat(+e.day)) && (e.choosed = !1);
      }), p({
        "calendar.days": a,
        "calendar.selectedDay": _s13
      });
    } else a.forEach(function (e) {
      e.choosed = !1;
    }), p({
      "calendar.days": a,
      "calendar.selectedDay": []
    });
  }

  function A(e, t, a, n) {
    return new Promise(function (r, o) {
      m(n);

      var _ref17 = D("calendar") || {},
          _ref17$selectedDay = _ref17.selectedDay,
          c = _ref17$selectedDay === void 0 ? [] : _ref17$selectedDay,
          l = _ref17.weekMode,
          _ref18 = c[0] || {},
          i = _ref18.year,
          d = _ref18.month,
          f = _ref18.day;

      if (+i != +e || +d != +t || +f != +a) {
        if (l) return (0, s["default"])(b).jump({
          year: +e,
          month: +t,
          day: +a
        }).then(function (e) {
          r(e);
        })["catch"](function (e) {
          o(e);
        });

        if (e && t) {
          if ("number" != typeof +e || "number" != typeof +t) return h.warn("jump 函数年月日参数必须为数字");

          var _n20 = u.todayTimestamp();

          p({
            "calendar.curYear": +e,
            "calendar.curMonth": +t,
            "calendar.todayTimestamp": _n20
          }, function () {
            g.renderCalendar(+e, +t, +a).then(function (e) {
              r(e);
            })["catch"](function (e) {
              o(e);
            });
          });
        } else g.jumpToToday().then(function (e) {
          r(e);
        })["catch"](function (e) {
          o(e);
        });
      }
    });
  }

  function x(e, t) {
    m(t), (0, r["default"])(b).setTodoLabels(e);
  }

  function O(e, t) {
    m(t), (0, r["default"])(b).deleteTodoLabels(e);
  }

  function Y(e) {
    m(e), (0, r["default"])(b).clearTodoLabels();
  }

  function E() {
    var e = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};
    var t = arguments.length > 1 ? arguments[1] : undefined;
    m(t);
    var a = G(),
        n = (0, r["default"])(b).getTodoLabels() || [];

    if (e.lunar && !a.showLunar) {
      return u.convertLunar(n);
    }

    return n;
  }

  function I() {
    var e = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : [];
    var t = arguments.length > 1 ? arguments[1] : undefined;
    m(t), (0, n["default"])(b).disableDays(e);
  }

  function P() {
    var e = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : [];
    var t = arguments.length > 1 ? arguments[1] : undefined;
    m(t), (0, n["default"])(b).enableArea(e);
  }

  function j() {
    var e = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : [];
    var t = arguments.length > 1 ? arguments[1] : undefined;
    m(t), (0, n["default"])(b).enableDays(e);
  }

  function $(e, t) {
    m(t), (0, n["default"])(b).setSelectedDays(e);
  }

  function G(e) {
    return m(e), (0, l["default"])(b).getCalendarConfig();
  }

  function U(e, t) {
    if (m(t), !e || 0 === Object.keys(e).length) return h.warn("setCalendarConfig 参数必须为非空对象");
    var a = G();
    return new Promise(function (t, n) {
      (0, l["default"])(b).setCalendarConfig(e).then(function (n) {
        t(n);

        var _ref19 = a.disableMode || {},
            s = _ref19.date,
            r = _ref19.type,
            _ref20 = e.disableMode || {},
            o = _ref20._date,
            c = _ref20._type;

        if (r !== c || s !== o) {
          var _L = L(),
              _e15 = _L.year,
              _t7 = _L.month;

          A(_e15, _t7);
        }
      })["catch"](function (e) {
        n(e);
      });
    });
  }

  function F() {
    var e = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};
    var t = arguments.length > 1 ? arguments[1] : undefined;
    m(t);
    var a = G(),
        n = D("calendar.days", t) || [];

    if (e.lunar && !a.showLunar) {
      return u.convertLunar(n);
    }

    return n;
  }

  function N(e, t) {
    return m(t), (0, n["default"])(b).chooseArea(e);
  }

  function R(e, t) {
    e && (m(t), (0, n["default"])(b).setDateStyle(e));
  }

  function X() {
    for (var _len = arguments.length, e = new Array(_len), _key = 0; _key < _len; _key++) {
      e[_key] = arguments[_key];
    }

    return new Promise(function (t, a) {
      var n = e[0];
      if (!e[1]) return (0, s["default"])(b).switchWeek(n).then(t)["catch"](a);
      "string" == typeof e[1] ? (m(e[1]), (0, s["default"])(b).switchWeek(n, e[2]).then(t)["catch"](a)) : "object" == _typeof(e[1]) && ("string" == typeof e[2] && m(e[1]), (0, s["default"])(b).switchWeek(n, e[1]).then(t)["catch"](a));
    });
  }

  function Z(e, t) {
    d.initialTasks.flag = "process", (b = e).config = t, function (e) {
      var t = ["日", "一", "二", "三", "四", "五", "六"];
      "Mon" === e && (t = ["一", "二", "三", "四", "五", "六", "日"]), p({
        "calendar.weeksCh": t
      });
    }(t.firstDayOfWeek), function (e) {
      if (e && "string" == typeof e) {
        var _t8 = e.split("-");

        if (_t8.length < 3) return h.warn("配置 jumpTo 格式应为: 2018-4-2 或 2018-04-02");
        A(+_t8[0], +_t8[1], +_t8[2]);
      } else e || (b.config.noDefault = !0), A();
    }(t.defaultDay), h.tips("使用中若遇问题请反馈至 https://github.com/treadpit/wx_calendar/issues ✍️");
  }

  t.calculateNextWeekDays = k;

  t["default"] = function (e) {
    var t = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {};
    if ("process" === d.initialTasks.flag) return d.initialTasks.tasks.push(function () {
      Z(e, t);
    });
    Z(e, t);
  };
}]);