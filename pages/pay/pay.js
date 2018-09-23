 
var app = getApp();
var userInfo=[]
Page({

  /**
   * 页面的初始数据
   */
  data: {
    userInfo: {},
    hasUserInfo: false,
    canIUse: wx.canIUse('button.open-type.getUserInfo'),
    animationlist: [],

    name:[],
    idcard:[],
    bookID:''
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    var  name =options.phone
    var  idcard =options.password
    var bookID = options.bookID
    this.setData({
      name:name,
      idcard:idcard,
      bookID:bookID
    })

   console.log(" pay的姓名"+name)
    console.log("身份证"+idcard)
    console.log("bookID" + bookID)
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
  startwrite:function(){

    wx.redirectTo({
      url: "../theme/theme?nickName=" + this.data.userInfo.nickName + "&name=" + this.data.name + "&idcard=" + this.data.idcard + "&avatarUrl=" + this.data.userInfo.avatarUrl + '&bookID=' + this.data.bookID 
    })
  },
   
  
  onReady: function () {
    
  },

  /**
   * 生命周期函数--监听页面显示
   */
  onShow: function () {
    
  },

  /**
   * 生命周期函数--监听页面隐藏
   */
  onHide: function () {
    console.log(" 后台运行"+this.data.userInfo.nickName)
  },

  /**
   * 生命周期函数--监听页面卸载
   */
  onUnload: function () {
    
  },

  /**
   * 页面相关事件处理函数--监听用户下拉动作
   */
  onPullDownRefresh: function () {
    
  },

  /**
   * 页面上拉触底事件的处理函数
   */
  onReachBottom: function () {
    
  },

  /**
   * 用户点击右上角分享
   */
  onShareAppMessage: function () {
    
  }
})