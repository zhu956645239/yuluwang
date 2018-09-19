const app =getApp();
 
Page({
   
  formSubmit: function (e) {
    this.data.quote = e.detail.value.input
    console.log("write中的主题--" + this.data.theme)
    console.log("write中的昵称--" + this.data.nickName)
    console.log("write中的姓名--" + this.data.name)
    console.log("write中的身份证--" + this.data.idcard)
    console.log("write中的语录--" + this.data.quote)
   
    wx.request(
      {
        url: 'http://www.cchzyc.com/yulu/addUserQuote.do',  
   data:{
     theme: this.data.theme,
     nickName: this.data.nickName,
     name: this.data.name,
     idcard: this.data.idcard,
     quote: this.data.quote
   },
      method: 'Post',
      header: {
        'content-type': 'application/json' 
      },
      success: function (res) {
        console.log("后台数据"+res.data)
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
    

   
      this.uploadimg()
    

  },
  
  formReset: function () {
    console.log('form发生了reset事件')
  },
    data: {
      pics: [],
      imgsrc:[],
      theme:[],
      quote:[],
      nickName:[],
      name:[]
  ,   idcard:[]    

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
          // console.log(imgsrc);
          pics = pics.concat(imgsrc);
          // console.log(pics);
          that.setData({
            pics: pics,
            imgsrc: imgsrc
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
    uploadimg: function (e) {//这里触发图片上传的方法
      var that = this,
        pics = this.data.pics;

      // console.log(pics);
      app.uploadimg({
        url: 'http://www.cchzyc.com/yulu/addphoto.do',//这里是你图片上传的接口
        path: pics//这里是选取的图片的地址数组
      });
    },

  delephoto:function(){
 
  },



  onLoad: function (options) {
   var theme =options.theme
   var nickName =options.nickName
   var name = options.name
    var idcard = options.idcard
  


    console.log("前一个页面的主题--"+theme)
    console.log("前一个页面的昵称--" + nickName)
    console.log("前一个页面的姓名--" + name)
    console.log("前一个页面的身份证--" + idcard)
    this.setData({
      theme: theme ,
      nickName: nickName,
      name: name  ,
      idcard: idcard  
    })
   

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