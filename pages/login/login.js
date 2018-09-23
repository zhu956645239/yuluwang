Page({
  data: {
    phone: '',
    password: '',
    bookID:''
  },
onLoad:function(e){
  this.setData({
    bookID: e.bookID
  })
},
  // 获取输入账号
  phoneInput: function (e) {
    this.setData({
      phone: e.detail.value
    })
  },

  // 获取输入密码
  passwordInput: function (e) {
    this.setData({
      password: e.detail.value
    })
  },

  // 登录
  login: function () {
    if (this.data.phone.length == 0 || this.data.password.length == 0) {
      wx.showToast({
        title: '用户名和密码空',
        icon: 'loading',
        duration: 2000
      })
    } else {
      // 这里修改成跳转的页面
      wx.showToast({
        title: '身份认证成功',
        icon: 'success',
        duration: 2000
      })
      wx.redirectTo({
        url: '../pay/pay?phone=' + this.data.phone + '&password=' + this.data.password + '&bookID=' + this.data.bookID,
      })
    }
  }
})