"use strict";

var _core = _interopRequireDefault(require('./../vendor.js')(0));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

_core["default"].page({
  // store,
  config: {
    navigationBarTitleText: 'test'
  },
  hooks: {// // Page 级别 hook, 只对当前 Page 的 setData 生效。
    // 'before-setData': function (dirty) {
    //   if (Math.random() < 0.2) {
    //     console.log('setData canceled');
    //     return false; // Cancel setData
    //   }
    //   dirty.time = +new Date();
    //   return dirty;
    // }
  },
  // mixins: [testMixin],
  data: {
    calendarConfig: {
      // 配置内置主题
      theme: 'elegant',
      highlightToday: true
    }
  },
  computed: {},
  methods: {
    doSomeThing: function doSomeThing() {
      // 调用日历方法
      this.calendar.enableArea(['2018-10-7', '2018-10-28']);
    }
  },
  created: function created() {}
}, {info: {"components":{"calendar":{"path":"./../components/calendar/index"}},"on":{}}, handlers: {}, models: {}, refs: undefined });