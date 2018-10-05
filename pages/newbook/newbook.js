// pages/newbook/newbook.js
var id = []
var bookName = []
var createTime = []
var photo = []
var price = []
var app = getApp();
Page({

  /**
   * 页面的初始数据
   */
  data: {
    imgheights: [],
    //图片宽度
    imgwidth: 700,
    //默认
    current: 0,
    id: [],
    bookName: [],
    createTime: [],
    photo: [],
    price: [],
   indicatorDots: true,
    autoplay: true,
    interval: 3000,
    duration: 1000,
    vertical: false,
    circular: true,
    show: false, //控制下拉列表的显示隐藏，false隐藏、true显示
    selectData: ['1', '2', '3', '4', '5', '6'], //下拉列表的数据
    index: 0, //选择的下拉列表下标
    showView: true
  },
  selectTap() {
    this.setData({
      show: !this.data.show
    });
  },
  // 点击下拉列表
  optionTap(e) {
    let Index = e.currentTarget.dataset.index; //获取点击的下拉列表的下标
    this.setData({
      index: Index,
      show: !this.data.show
    });
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function(options) {
    showView: (options.showView == "true" ? true : false)


    id = options.id //相当于request.getParameter
    console.log("-----" + id + "-----")
    var that = this
    //链接服务器
    /************************** *************************/
    wx.request({
      url: 'http://www.cchzyc.com/yulu/getBooksInfoById.do',
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
        photo = res.data.photo;
        price = res.data.price;
        that.setData({
          id: id,
          bookName: bookName,
          createTime: createTime,
          photo: photo,
          price: price
        })

      },
      fail: function() {
        console.log("失败")
      }

    })
  },

  onChangeShowState: function () {
    var that = this;
    that.setData({
      showView: (!that.data.showView)
    })
  },
  /************************** **********************************/
  imageLoad: function(e) {

    //获取图片真实宽和高
    var imgwidth = e.detail.width,
      imgheight = e.detail.height,
      //计算宽高比
      ratio = imgwidth / imgheight;
    //计算应该显示的高度值
    var viewHeight = 800 / ratio;
    var imgheight = viewHeight;
    var imgheights = this.data.imgheight;
 
    this.setData({
      imgheights: imgheight,
    })
  },
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