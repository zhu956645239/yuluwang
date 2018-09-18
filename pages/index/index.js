var wxMarkerData = [];
var id = [];
var array=[];
Page({
  data: {

    imgheights: [],
    //图片宽度
    imgwidth: 700,
    //默认
    current: 0,
   

    indicatorDots: false,
    autoplay: true,
    interval: 3000,
    duration: 1000,
    vertical: false,
    circular: true,

  },
  onLoad: function() {
    var that = this;
    wx.request({
      url: 'http://www.cchzyc.com/yulu/getBook.do',
      // data: {
      //   id: id,
      // },
      method: 'Get',
      header: {
        'content-type': 'application/json'
      },
      success: function (res) {
        console.log(res);
        
        // bookName = res.data.bookName;
        // createTime = res.data.createTime;
        // // photo = res.data.photo
        that.setData({
         array : res.data
        })

      },
      fail: function () {
        console.log("失败")
      }

    })
  },
  //点击事件
  tab: function(e) {
    id = e.currentTarget.id; //获取页面传来的值
    console.log(id);
    wx.navigateTo({
      url: '../newbook/newbook?id=' + id,
    })
  },
  imageLoad: function(e) {

    //获取图片真实宽和高
    var imgwidth = e.detail.width,
      imgheight = e.detail.height,
      //计算宽高比
      ratio = imgwidth / imgheight;
    //计算应该显示的高度值
    var viewHeight = 700 / ratio;
    var imgheight = viewHeight;
    var imgheights = this.data.imgheights
    //把每一张的图片高度记录到数组里
    imgheights.push(imgheight)
    this.setData({
      imgheights: imgheights,
    })
  },
  onPullDownRefresh: function() {
    console.log("我刷新了")
  },
  onShareAppMessage: function() {
    return {
      title: '语录网',
      desc: '让你既阅读又赚钱的小程序',
      path: '/page/index'

    }
  }
})