var wxMarkerData = [];
Page({
  data: {
   
    imgheights: [],
    //图片宽度
    imgwidth: 950,
    //默认
    current: 0,
    array: [
      { imgurl:'http://img62.ddimg.cn/digital/product/93/30/1900679330_ii_cover.jpg?version=a7a64ce2-b9ee-4ab2-ba08-867a6afc26e6555',
      author:'陈忠实',
      book:'白鹿原',
      id :"1"
      },
      
      
     { imgurl:'http://img62.ddimg.cn/digital/product/87/99/1900778799_ii_cover.jpg?version=a29dea98-4130-4640-9b7b-82bae194d862',
       author: '林奕含',
       book: '房思琪的初恋乐园',
       id: "2"
      
      },
     { 
      imgurl: 'http://img61.ddimg.cn/digital/product/38/77/1900973877_ii_cover.jpg?version=b3a902bd-5c0b-4b58-9dfb-1c7babe88d2f',
      author:'大冰',
      book:'我不',
       id: "3"
      }
    ],
    indicatorDots: false,
    autoplay: true,
    interval: 3000,
    duration: 1000,
    vertical: false,
    circular: true,

  },
  onLoad: function (options) {
  
  },
  seemore: function (e) {
    id = e.currentTarget.id
    console.log(id);

    wx.navigateTo({
      url:'../error/error?id'= id,
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