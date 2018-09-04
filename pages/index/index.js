//index.js
//获取应用实例
const app = getApp()

Page({
  data: {
    imgUrls: [
      'http://img1.imgtn.bdimg.com/it/u=3044643234,1198181209&fm=26&gp=0.jpg',
      'http://img5.imgtn.bdimg.com/it/u=1973831706,2304837641&fm=200&gp=0.jpg',
      'http://img1.imgtn.bdimg.com/it/u=2090956807,3265651612&fm=26&gp=0.jpg'
    ],
    indicatorDots: false,
    autoplay: false,
    interval: 5000,
    duration: 1000
  },
  bindtest: function () {
    wx.request({
      url: 'http://localhost:8080/JavaEP/servlet',
      data: {
        username: '001',
        password: 'abc'
      },
      method: 'GET', 
      header: {
        'content-type': 'application/json' // 默认值
      },
      success: function (res) {
        console.log(res.data);
      },
      fail: function (res) {
        console.log(".....fail.....");
      }
    })
  },
  onLoad: function () {
   
  }
})
