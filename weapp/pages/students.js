"use strict";

var _core = _interopRequireDefault(require('./../vendor.js')(0));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

// import eventHub from '../common/eventHub';
// import { mapState } from '@wepy/x';
// import store from '../store';
// import testMixin from '../mixins/test'
_core["default"].page({
  // store,
  config: {
    navigationBarTitleText: '生源'
  },
  hooks: {},
  // mixins: [testMixin],
  data: {
    tabList: ['家长直通车', '业务推单', '需求广场'],
    TabCur: 1,
    scrollLeft: 0,
    demandTabList: ['不限', '科目', '专职']
  },
  computed: {},
  methods: {
    tabSelect: function tabSelect(e) {
      this.TabCur = e.currentTarget.dataset.id;
      this.scrollLeft = (e.currentTarget.dataset.id - 1) * 60;
    }
  },
  created: function created() {}
}, {info: {"components":{"CourseIngoCard":{"path":"./../components/CourseInfoCard"}},"on":{}}, handlers: {'7-0': {"tap": function proxy () {
  var $wx = arguments[arguments.length - 1].$wx;
  var $event = ($wx.detail && $wx.detail.arguments) ? $wx.detail.arguments[0] : arguments[arguments.length -1];
  var $args = $wx.detail && $wx.detail.arguments;
  var _vm=this;
  return (function () {
    _vm.tabSelect.apply(_vm, $args || [$event]);
  })();
}}}, models: {}, refs: undefined });