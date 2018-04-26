
var app = getApp();
Page({

  /**
   * 页面的初始数据
   */
  data: {
    username:'',
    password:'',
    repwd:''
    
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

  // 加入注册绑定事件
  regBtnClick:function(){
    if (this.data.username != 0 && this.data.password != 0 && this.data.repwd == this.data.password){
      wx.showToast({
        title: '注册成功',
        icon: 'success',
        duration: 500,
        success:function(){
          wx.navigateTo({
            url: '../login/login'
          })
        }
      })
    } else if (this.data.username == 0){
      wx.showToast({
        title: '用户名不能为空',
        icon:'loading',
        duration:500,
      })
    }else if(this.data.password == 0){
      wx.showToast({
        title: '密码不能为空',
        icon:'loading',
        duration:500, 
      })
    } else if (this.data.repwd == 0 ){
      wx.showToast({
        title: '确认密码不对',
        icon:'loading',
        duration:500,
      })
    }

  },


  // 定义事件绑定的方法
  userInput:function(event){
    this.setData({username:event.detail.value})

  },
  passwordInput:function(event){
    this.setData({password:event.detail.value})
  },
  repwdInput:function(event){
    this.setData({repwd:event.detail.value})
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