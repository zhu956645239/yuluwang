Page({

  /**
   * 页面的初始数据
   */
  data: {
    imgheights: [],
    //图片宽度
    imgwidth: 950,
    //默认
    current: 0,
    array:[ ]
  
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    var that = this;
    wx.request({
      url: 'http://www.cchzyc.com/yulu/getAllBook.do',
      method: 'Get',
      header: {
        'content-type': 'application/json'
      },
      success: function (res) {
        console.log(res),
        that.setData({
          array: res.data
        })

      },
      fail: function () {
        console.log("失败")
      }

    })



  },
 
  imageLoad: function (e) {

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
  /**
   * 生命周期函数--监听页面初次渲染完成
   */
  onReady: function () {
    
  },
  bindtest: function (e) {
console.log(e.currentTarget.id )




    wx.navigateTo({
      url: '../write/write?bookID=' + e.currentTarget.id,
    })
  }, 
  /**
   * 生命周期函数--监听页面显示
   */
  onShow: function () {
    var that = this;
    wx.request({
      url: 'http://www.cchzyc.com/yulu/getAllBook.do',
      method: 'Get',
      header: {
        'content-type': 'application/json'
      },
      success: function (res) {
        console.log(res),
          that.setData({
            array: res.data
          })

      },
      fail: function () {
        console.log("失败")
      }

    })
  },

  /**
   * 生命周期函数--监听页面隐藏
   */
  onHide: function () {
    
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
    
  },
  
})