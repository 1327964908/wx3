Page({

  canvasIdErrorCallback: function (e) {
    console.error(e.detail.errMsg)
  },
  position:{
    x:0,
    y:0
  },

  /**
   * 页面的初始数据
   */
  data: {
    
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    
  },

  /**
   * 生命周期函数--监听页面初次渲染完成
   */
  onReady: function (e) {
    this.draw();//不能缺少
    
  },

  canvasClick:function(){
    // 死循环 定时器
    setInterval(this.draw,100)

  },

// 绘画方法
  draw:function(){
    this.position.x ++;
    this.position.y ++;

    var context = wx.createContext()

    context.setStrokeStyle("#ff0000");
    context.setLineWidth(2)
    context.arc(this.position.x,this.position.y,20,0,2*Math.PI,true)
    context.stroke()

    // 调用wx.drawCanvas,通过canvasId指定在哪张画布上绘制，通过actions指定检测行为
    wx.drawCanvas({
      canvasId:'firstCanvas',
      actions:context.getActions() //获取绘画动作数组
    })
    
    // var context = wx.createCanvasContext('firstCanvas')

    // context.setStrokeStyle("#00ff00")
    // context.setLineWidth(5)
    // context.rect(0, 0, 200, 200)
    // context.stroke()

    // context.setStrokeStyle("#ff0000")
    // context.setLineWidth(2)
    // context.moveTo(160, 100)
    // context.arc(100, 100, 60, 0, 2 * Math.PI, true)
    // context.moveTo(140, 100)
    // context.arc(100, 100, 40, 0, Math.PI, false)
    // context.moveTo(85, 80)
    // context.arc(80, 80, 5, 0, 2 * Math.PI, true)
    // context.moveTo(125, 80)
    // context.arc(120, 80, 5, 0, 2 * Math.PI, true)
    // context.stroke()
    // context.draw()



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