"use strict";

var _core = _interopRequireDefault(require('./vendor.js')(0));

var _eventHub = _interopRequireDefault(require('./common/eventHub.js'));

var _x = _interopRequireDefault(require('./vendor.js')(2));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

_core["default"].use(_x["default"]);

_core["default"].app({
  hooks: {// // App 级别 hook，对整个 App 生效
    // // 同时存在 Page hook 和 App hook 时，优先执行 Page hook，返回值再交由 App hook 处
    // 'before-setData': function (dirty) {
    //   console.log('setData dirty: ', dirty);
    //   return dirty;
    // }
  },
  globalData: {
    isLogin: false,
    userInfo: null
  },
  onLaunch: function onLaunch() {
    this.registerCloud();
    wx.getStorage({
      key: 'isLogin',
      success: function success(res) {
        isLogin = res.data;
      }
    }); //     wx.cloud.callFunction({ //调用云函数
    //       name: 'getUserInfo',
    //       complete: res => {
    //         console.log('callFunction test result: ', res)
    //       }
    //     })
    //     wx.getUserInfo({
    //     success: function(res) {
    //       var userInfo = res.userInfo
    //       var nickName = userInfo.nickName
    //       var avatarUrl = userInfo.avatarUrl
    //       var gender = userInfo.gender //性别 0：未知、1：男、2：女
    //       var province = userInfo.province
    //       var city = userInfo.city
    //       var country = userInfo.country
    //       console.log(userInfo);
    //     }
    // })
    // wx.login({
    //   success: function(res) {
    //     console.log(res.code);
    //   }
    // })
    // eventHub.$on('app-launch', (...args) => {
    //   console.log('app-launch event emitted, the params are:');
    //   console.log(args);
    // });
  },
  methods: {
    registerCloud: function registerCloud() {
      if (!wx.cloud) {
        console.error('请使用 2.2.3 或以上的基础库以使用云能力');
      } else {
        wx.cloud.init({
          env: 'juexiao-teacher-7790e',
          traceUser: true
        });
      }
    } //   sleep (s) {
    //     return new Promise((resolve, reject) => {
    //       setTimeout(() => {
    //         resolve('promise resolved')
    //       }, s * 1000)
    //     })
    //   },
    //   async testAsync () {
    //     let d = await this.sleep(3);
    //     console.log(d);
    //   }

  }
}, {info: {"noPromiseAPI":["createSelectorQuery"]}, handlers: {}, models: {}, refs: undefined });