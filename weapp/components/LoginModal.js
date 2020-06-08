"use strict";

var _core = _interopRequireDefault(require('./../vendor.js')(0));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

_core["default"].component({
  props: {
    modalName: {
      type: String,
      "default": '',
      twoWay: true
    }
  },
  computed: {// showModal() {
    //   return this.modalName == 'loginModal'
    // }
  },
  data: {
    showModal: (void 0).modalName
  },
  methods: {
    hideLoginModal: function hideLoginModal() {
      this.modalName = '';
    },
    goLogin: function goLogin() {
      var url = "login";
      wx.navigateTo({
        url: url
      });
    }
  },
  lifetimes: {
    created: function created() {
      console.log(this.showModal);
      console.log('我不知道呀');
    }
  }
}, {info: {"components":{},"on":{}}, handlers: {'17-0': {"tap": function proxy () {
  var $wx = arguments[arguments.length - 1].$wx;
  var $event = ($wx.detail && $wx.detail.arguments) ? $wx.detail.arguments[0] : arguments[arguments.length -1];
  var $args = $wx.detail && $wx.detail.arguments;
  var _vm=this;
  return (function () {
    _vm.hideLoginModal.apply(_vm, $args || [$event]);
  })();
}},'17-1': {"tap": function proxy () {
  var $wx = arguments[arguments.length - 1].$wx;
  var $event = ($wx.detail && $wx.detail.arguments) ? $wx.detail.arguments[0] : arguments[arguments.length -1];
  var $args = $wx.detail && $wx.detail.arguments;
  var _vm=this;
  return (function () {
    _vm.goLogin.apply(_vm, $args || [$event]);
  })();
}}}, models: {}, refs: undefined });