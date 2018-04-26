
var app = getApp();
Page({

  /**
   * 页面的初始数据
   */
  data: {
    // 获取登录信息
    username:'',
    password:''
    
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    
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


  // 加入的登录绑定事件
  loginBtnClick:function(){
    // 省略了用户名和密码验证过程

    if (this.data.username.length != 0 && this.data.password.length != 0) {
      wx.showToast({
        // 这里修改成跳转的页面 
        title: '登录成功',
        icon: 'success',
        duration: 1000,
        success: function () {
          // 获取用户名
          // app.appData.userinfo = { username: this.data.username, password: this.data.password },
          wx.switchTab({
            url: '../index/index'
          })

        }
      })
    } else if (this.data.username.length == 0) {

      wx.showToast({
        title: '用户名不能为空',
        icon: 'loading',
        duration: 1000
      })

    } else if (this.data.password.length == 0) {
      wx.showToast({
        title: '密码不能为空',
        icon: 'loading',
        duration: 1000
      })
    }

  },

  // 定义事件绑定的方法
  usernameInput:function(event){
    // 传入写的值
    this.setData({username:event.detail.value})

  },
  passwordInput:function(event){
    this.setData({password: event.detail.value })

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