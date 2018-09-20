// pages/theme/theme.js
var theme =[]
var user =[]
var nickName = []
Page({

  /**
   * 页面的初始数据
   */
  data: {
    items: [

      { name: 'love', value: '绝地求生',  checked: 'true'},
      { name: 'school', value: '唐门娇妻' },
      { name: 'game', value: '极品教师' },
   
    ],
    nickName:[],
    theme: [],
    name:[],
    idcard:[],

    hidden: true,
    nocancel: false
  }, 
  cancel: function () {
    this.setData({
      hidden: true
    });
  },
  confirm: function () {
 
    console.log("点击确定");

  },

  showok: function () {


    wx.showToast({
      title: '审核中，请稍后',
      icon: 'success',
      duration: 3000
    })
  }  ,
  formSubmit: function (e) {
var that =this 
    console.log('主题数据为：', e.detail.value)
    wx.request(
      {
        url: 'http://www.cchzyc.com/yulu/getTheme.do',

        data: {

          theme: e.detail.value,

        },
        method: 'Get',
        header: {
          'content-type': 'application/json'
        },
        success: function (res) {
          console.log(res.data)
         
        } 

      }),
      //  e.detail.value.radiogroup 
      
    console.log('昵称：', nickName)
    console.log('主题：', e.detail.value.radiogroup)
      wx.redirectTo({
        url: '../write/write?theme=' + e.detail.value.radiogroup + '&nickName=' + nickName + "&name=" + this.data.name + "&idcard=" + this.data.idcard ,
      })

 
  },
  /*注：当点击提交时，先把值传到后台，再执行重置清空input，最后执行cancle关闭modal框*/
   formSubmit2: function (e) {

    console.log('创建主题数据为：', e.detail.value)

     wx.request(
       {
         url: 'http://www.cchzyc.com/yulu/getNewTheme.do',

         data: {

           newtheme: e.detail.value,

         },
         method: 'Get',
         header: {
           'content-type': 'application/json'
         },
         success: function (res) {
           console.log(res.data)

         }

       })
     

     this.formReset();
  }, 
  
  addNewPage:function(){
    this.setData({
      hidden: false
    });

  },
  formReset: function () {
    console.log('form发生了reset事件')
    this.cancel();
  },
  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    
    nickName = options.nickName
    var name = options.name
    var idcard = options.idcard
     
    this.setData({
      nickName: nickName,
      name:name,
      idcard:idcard

    });
  },

  /**
   * 生命周期函数--监听页面初次渲染完成
   */
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