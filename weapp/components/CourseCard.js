"use strict";

var _core = _interopRequireDefault(require('./../vendor.js')(0));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

_core["default"].component({
  props: {
    courseInfo: {}
  },
  methods: {
    goCourseInfo: function goCourseInfo(id) {
      var url = "course-info?cid=".concat(id);
      wx.navigateTo({
        url: url
      });
    }
  }
}, {info: {"components":{},"on":{}}, handlers: {'15-0': {"tap": function proxy () {
    var _vm=this;
  return (function () {
    _vm.goCourseInfo(1);
  })();
}}}, models: {}, refs: undefined });