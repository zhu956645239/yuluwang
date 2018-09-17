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
    array:[
      {
        imageurl: "http://img3m9.ddimg.cn/35/0/25311959-1_l_2.jpg",
        bookname: "天长地久",
        author: "龙应台",
        createtime: "2018",
        percent:"20"
      }, {
        imageurl: "http://img3m6.ddimg.cn/96/35/1901075316-1_l_3.jpg",
        bookname: "圣殿春秋(全3册)", 
        author: "（英）肯福莱特",
        createtime: "2018",
        percent: 577/2000*100 
      },
      {
        imageurl: "http://img3m0.ddimg.cn/21/28/23811600-1_l_1.jpg",
        bookname: "工匠精神：向价值型",
        author: "当当全国独家",
        createtime: "2018",
        percent: "50"
      }

    ]
  
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
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
  bindtest: function () {
    wx.navigateTo({
      url: '../write/write',
    })
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