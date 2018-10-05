var wxMarkerData = [];
var id = [];
var array = [];
var parray = [];

 Page({
 
   /**
    * 页面的初始数据
    */
   data: {
     imgUrls: [
       'http://img02.tooopen.com/images/20150928/tooopen_sy_143912755726.jpg',
       'http://img06.tooopen.com/images/20160818/tooopen_sy_175866434296.jpg',
       'http://img06.tooopen.com/images/20160818/tooopen_sy_175833047715.jpg'
     ],
     contentItems:['','','',''],
     listItems: ['', '', '', '','', '', '', ''],
     indicatorDots: false,
     autoplay: true,
     interval: 5000,
     duration: 1000,
     circular: true,
     imgheights: [],
     //图片宽度
     imgwidth: 750,
     //默认
     current: 0 
   },
   onLoad: function () {
     var that = this;
     
     wx.request({
       url: 'http://www.cchzyc.com/yulu/getSwiper.do',
       method: 'Get',
       header: {
         'content-type': 'application/json'
       },
       success: function (res) {
         console.log(res)
         that.setData({
           parray: res.data
         })
       },
       fail: function () {
         console.log("失败")
       }
     })
     wx.request({
       url: 'http://www.cchzyc.com/yulu/getBook.do',
       method: 'Get',
       header: {
         'content-type': 'application/json'
       },
       success: function (res) {
         console.log(res)
         that.setData({
            array: res.data
         })
       },
       fail: function () {
         console.log("失败")
       }
     })
   },
   //点击事件
   tab: function (e) {
     id = e.currentTarget.id; //获取页面传来的值
     console.log(id);
     wx.navigateTo({
       url: '../newbook/newbook?id=' + id,
     })
   },
   imageLoad: function (e) {

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
   }
 }) 