"use strict";

var _core = _interopRequireDefault(require('./../vendor.js')(0));

var _x = require('./../vendor.js')(2);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

// import eventHub from '../common/eventHub';
// import store from '../store';
// import testMixin from '../mixins/test'
_core["default"].page({
  // store,
  config: {
    navigationBarTitleText: '个人中心'
  },
  hooks: {},
  // mixins: [testMixin],
  data: {
    // canIUse: wx.canIUse('button.open-type.getUserInfo')
    modalName: ''
  },
  methods: {
    showLoginModal: function showLoginModal() {
      this.modalName = 'loginModal';
    }
  },
  onLoad: function onLoad() {// this.$apply();
  },
  computed: {},
  created: function created() {}
}, {info: {"components":{"LoginModal":{"path":"./../components/LoginModal"}},"on":{}}, handlers: {'9-0': {"tap": function proxy () {
  var $wx = arguments[arguments.length - 1].$wx;
  var $event = ($wx.detail && $wx.detail.arguments) ? $wx.detail.arguments[0] : arguments[arguments.length -1];
  var $args = $wx.detail && $wx.detail.arguments;
  var _vm=this;
  return (function () {
    _vm.showLoginModal.apply(_vm, $args || [$event]);
  })();
}}}, models: {}, refs: undefined });