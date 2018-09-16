//index.js 获取应用实例
var app = getApp();
Page({
  data: {
    userInfo: {},
    hasUserInfo: false,
    canIUse: wx.canIUse('button.open-type.getUserInfo'),
    animationlist: [],
    imgheights: [],
    //图片宽度
    imgwidth: 750,
    //默认
    current: 0,
    isAnimation: false,
    zindex: [
      1, 2, 3
    ],
    animationlistyet: [],
    cardInfoList: [
      {
        id: 1,
        cardUrl: 'http://img3m0.ddimg.cn/4/5/25249360-1_h_8.jpg',
        cardInfo: {
          cardTitle: '',
          cardInfoMes: ['', '', '']
        }
      }, {
        id: 2,
        cardUrl: 'http://img3m7.ddimg.cn/74/36/1237617587-1_h_11.jpg',
        cardInfo: {
          cardTitle: '',
          cardInfoMes: ['', '', '']
        }
      }, {
        id: 3,
        cardUrl: 'http://img3m2.ddimg.cn/9/35/24172542-1_h_2.jpg',
        cardInfo: {
          cardTitle: '',
          cardInfoMes: ['', '', '']
        }
      }
    ]
  },
 
  onLoad: function () {
    if (app.globalData.userInfo) {
      this.setData({
        userInfo: app.globalData.userInfo,
        hasUserInfo: true
      })
    } else if (this.data.canIUse) {
      // 由于 getUserInfo 是网络请求，可能会在 Page.onLoad 之后才返回
      // 所以此处加入 callback 以防止这种情况
      app.userInfoReadyCallback = res => {
        this.setData({
          userInfo: res.userInfo,
          hasUserInfo: true
        })
      }
    } else {
      // 在没有 open-type=getUserInfo 版本的兼容处理
      wx.getUserInfo({
        success: res => {
          app.globalData.userInfo = res.userInfo
          this.setData({
            userInfo: res.userInfo,
            hasUserInfo: true
          })
        }
      })
    }
  },
  getUserInfo: function (e) {
    console.log(e)
    app.globalData.userInfo = e.detail.userInfo
    this.setData({
      userInfo: e.detail.userInfo,
      hasUserInfo: true
    })
  },
  imageLoad: function (e) {
   console.log('123') 
    //获取图片真实宽和高
    var imgwidth = e.detail.width,
      imgheight = e.detail.height,
      //计算宽高比
      ratio = imgwidth / imgheight;
    //计算应该显示的高度值
    var viewHeight = 750 / ratio;
    var imgheight = viewHeight;
    var imgheights = this.data.imgheights
    //把每一张的图片高度记录到数组里
    imgheights.push(imgheight)
    this.setData({
      imgheights: imgheights,
    })
  },
  //事件处理函数
  slidethis: function (e) {
    console.log(e);
    var self = this;
    if (this.data.isAnimation) {
      return false;
    }
    this.setData({isAnimation: true});
    var animation1 = wx.createAnimation({duration: 100, timingFunction: 'cubic-bezier(.8,.2,.1,0.8)'});
    this.animation1 = animation1;
    this.animation1.translateY(-320).rotate(-5).translateX(0).scale(0.52).step();
    this
      .animation1
      .translateY(28)
      .translateX(51)
      .rotate(0)
      .scale(1)
      .step();
    var animation2 = wx.createAnimation({duration: 100, timingFunction: 'cubic-bezier(.8,.2,.1,0.8)'});
    this.animation2 = animation2;
    this
      .animation2
      .translateY(62)
      .translateX(25)
      .rotate(0)
      .step();
    var animation3 = wx.createAnimation({duration: 100, timingFunction: 'cubic-bezier(.8,.2,.1,0.8)'});
    this.animation3 = animation3;
    this
      .animation3
      .translateY(44)
      .translateX(41)
      .rotate(0)
      .step();
    if (this.data.animationlistyet.length <= 0) {
      this.data.animationlistyet = [
        this
          .animation1
          .export(),
        this
          .animation2
          .export(),
        this
          .animation3
          .export()
      ];
    }
    this.setData({animationlist: this.data.animationlistyet});
    var animationlistyet = self.data.animationlistyet;
    var animation = self
      .data
      .animationlistyet
      .pop();
    self
      .data
      .animationlistyet
      .unshift(animation);
    self.setData({
      animationlist: [], animationlistyet: self.data.animationlistyet // 用来寄存下一次动画的排序
    });
    setTimeout(function () {
      var zindex = self.data.zindex;
      var slidethis = self
        .data
        .zindex
        .shift();
      self
        .data
        .zindex
        .push(slidethis);
      self.setData({isAnimation: false, zindex: self.data.zindex});
    }, 100);
  },
  buythis: function (e) {
    console.log(e);
    app.buyDetail = this.data.cardInfoList[e.target.id];
    wx.navigateTo({url: '../detail/detail'});
  },
  onLoad: function () {
    console.log('onLoad');
    var that = this;
    //调用应用实例的方法获取全局数据
    app.getUserInfo(function (userInfo) {
      //更新数据
      that.setData({userInfo: userInfo});
    });
  },
  /**
   * [微信小程序分享]
   * @return {[type]} [description]
   */
  onShareAppMessage: function () {
    return {title: '自定义分享标题', desc: '自定义分享描述', path: '/index/index'};
  }
});
