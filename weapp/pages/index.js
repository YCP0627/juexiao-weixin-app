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
    navigationBarTitleText: 'test'
  },
  // hooks: {
  //   // Page 级别 hook, 只对当前 Page 的 setData 生效。
  //   'before-setData': function (dirty) {
  //     if (Math.random() < 0.2) {
  //       console.log('setData canceled');
  //       return false; // Cancel setData
  //     }
  //     dirty.time = +new Date();
  //     return dirty;
  //   }
  // },
  // mixins: [testMixin],
  data: {
    swiperLists: ['../images/swiper01.jpg', '../images/swiper02.jpg'],
    indicatorDots: true,
    vertical: false,
    autoplay: true,
    interval: 2000,
    duration: 500,
    workLists: [{
      title: '生源',
      icon: '../images/work1.png'
    }, {
      title: '排课',
      icon: '../images/work1.png'
    }, {
      title: '评级',
      icon: '../images/work1.png'
    }, {
      title: '赚现金',
      icon: '../images/work1.png'
    }, {
      title: '课件',
      icon: '../images/work1.png'
    }],
    courseLists: [{
      name: '初三数学',
      price: '565',
      time: '面议',
      address: '湖南省岳阳市平江县长寿镇',
      date: '剩余03天2时06分'
    }, {
      name: '初三数学',
      price: '565',
      time: '面议',
      address: '湖南省岳阳市平江县长寿镇',
      date: '剩余03天2时06分'
    }, {
      name: '初三数学',
      price: '565',
      time: '面议',
      address: '湖南省岳阳市平江县长寿镇',
      date: '剩余03天2时06分'
    }, {
      name: '初三数学',
      price: '565',
      time: '面议',
      address: '湖南省岳阳市平江县长寿镇',
      date: '剩余03天2时06分'
    }, {
      name: '初三数学',
      price: '565',
      time: '面议',
      address: '湖南省岳阳市平江县长寿镇',
      date: '剩余03天2时06分'
    }, {
      name: '初三数学',
      price: '565',
      time: '面议',
      address: '湖南省岳阳市平江县长寿镇',
      date: '剩余03天2时06分'
    }]
  },
  computed: {},
  methods: {},
  created: function created() {}
}, {info: {"components":{"CourseCard":{"path":"./../components/CourseCard"}},"on":{}}, handlers: {}, models: {}, refs: undefined });