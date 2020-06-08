"use strict";

var _core = _interopRequireDefault(require('./../vendor.js')(0));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

_core["default"].page({
  config: {
    navigationBarTitleText: '验证码登录'
  },
  data: {},
  computed: {},
  methods: {
    login: function login() {
      console.log('点击了');
      wx.cloud.callFunction({
        // 需调用的云函数名
        name: 'login',
        // 成功回调
        complete: function complete(res) {
          return console.log(res);
        }
      });
    }
  },
  created: function created() {}
}, {info: {"components":{"CourseCard":{"path":"./../components/CourseCard"}},"on":{}}, handlers: {'11-0': {"tap": function proxy () {
  var $wx = arguments[arguments.length - 1].$wx;
  var $event = ($wx.detail && $wx.detail.arguments) ? $wx.detail.arguments[0] : arguments[arguments.length -1];
  var $args = $wx.detail && $wx.detail.arguments;
  var _vm=this;
  return (function () {
    _vm.login.apply(_vm, $args || [$event]);
  })();
}}}, models: {}, refs: undefined });