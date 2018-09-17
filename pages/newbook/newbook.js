// pages/newbook/newbook.js
var id = []
var bookName = []
var createTime = []
var photo = []
var app = getApp();
Page({

  /**
   * 页面的初始数据
   */
  data: {

  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function(options) {
    id = options.id //相当于request.getParameter
    console.log("-----" + id + "-----")
    var that = this
    //链接服务器
    /************************** *************************/
    wx.request({
      url: 'http://www.cchzyc.com/yulu/selectBooksInfoById.do',
      data: {
        id: id,
      },
      method: 'Get',
      header: {
        'content-type': 'application/json'
      },
      success: function(res) {
        console.log(res.data);
        id = res.data.id;
        bookName = res.data.bookName;
        createTime = res.data.createTime;
        photo = res.data.photo
        that.setData({
          id: id,
          bookName: bookName,
          createTime: createTime,
          photo: photo
 })

      },
      fail: function() {
        console.log("失败")
      }

    })
  },
  /************************** **********************************/
  /**
   * 生命周期函数--监听页面初次渲染完成
   */
  onReady: function() {

  },

  /**
   * 生命周期函数--监听页面显示
   */
  onShow: function() {

  },

  /**
   * 生命周期函数--监听页面隐藏
   */
  onHide: function() {

  },

  /**
   * 生命周期函数--监听页面卸载
   */
  onUnload: function() {

  },

  /**
   * 页面相关事件处理函数--监听用户下拉动作
   */
  onPullDownRefresh: function() {

  },

  /**
   * 页面上拉触底事件的处理函数
   */
  onReachBottom: function() {

  },

  /**
   * 用户点击右上角分享
   */
  onShareAppMessage: function() {

  }
})