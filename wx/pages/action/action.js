Page({

  /**
   * 页面的初始数据
   */
  data: {
    actionSheetHidden:true,
    modalHidden:true,
    toastHidden:true,
    loadingHidden:true,
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

  click:function(){
    this.setData({actionSheetHidden:false}),
    this.setData({modalHidden:false}),
    this.setData({toastHidden:false}),
    this.setData({loadingHidden:false})
    
    // loading 在1.5秒后自动消失
    var that = this;
    setTimeout(function(){
      that.setData({loadingHidden:true})
    },1500)



  },
  actionSheetChange:function(){
    this.setData({actionSheetHidden: true})
  },
  itemClick:function(event){
    console.log(event)

  },

  modalConfirm:function(){
    this.setData({modalHidden:true})
  },

  modalCancel: function () {
    this.setData({modalHidden:true})
  },
  toastChange:function(){
    this.setData({toastHidden:true})
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