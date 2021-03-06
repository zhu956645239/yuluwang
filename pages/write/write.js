const app =getApp();

Page({
   
  formSubmit: function (e) {
 
    console.log('携带数据为：', e.detail.value)
   
    wx.request(
      {
        url: 'http://www.cchzyc.com/yulu/getYuLuText.do',  
  
      data: {
          
        yuluText:   e.detail.value.input, 
     
      },
      method: 'Get',
      header: {
        'content-type': 'application/json' 
      },
      success: function (res) {
        console.log(res.data)
        if(res.data=='收到'){
          wx.redirectTo   ({
            url: '../exam/exam',
          })
        } 
      },
        fail: function () {
          wx.redirectTo   ({
            url: '../error/error',
          })
        }

    })

  },
  formReset: function () {
    console.log('form发生了reset事件')
  },
    data: {
      pics: []
    },
    choose: function () {//这里是选取图片的方法
      var that = this,
        　　　　　　pics = this.data.pics;

      wx.chooseImage({
        count: 9 - pics.length, // 最多可以选择的图片张数，默认9
        sizeType: ['original', 'compressed'], // original 原图，compressed 压缩图，默认二者都有
        sourceType: ['album', 'camera'], // album 从相册选图，camera 使用相机，默认二者都有
        success: function (res) {
          var imgsrc = res.tempFilePaths;
          consloe.log(imgsrc);
          pics = pics.concat(imgsrc);
          that.setData({
            pics: pics
          });
        },
        fail: function () {
          // fail
        },
        complete: function () {
          // complete
        }
      })

    },
    uploadimg: function () {//这里触发图片上传的方法
      var pics = this.data.pics;
      app.uploadimg({
        url: '',//这里是你图片上传的接口
        path: pics//这里是选取的图片的地址数组
      });
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
  }
})