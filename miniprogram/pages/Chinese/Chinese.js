// pages/chinese/chinese.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    songList: [
      {
        url: "/pages/XY/XY",
        song: "信仰",
        singer: "Jong j" 
      },
      {
        url: "/pages/DWKM/DWKM",
        song: "大碗宽面",
        singer: "吴亦凡"
      },
      {
        url: "/pages/LHZ/LHZ",
        song: "轮回者",
        singer: "满舒克"
      },
      {
        url: "/pages/HB/HB",
        song: "黑白",
        singer: "小鬼"
      },
      {
        url: "/pages/PSWJ/PSWJ",
        song: "Party是我家",
        singer: "Tizzy T"
      },
      {
        url: "/pages/CKXZ/CKXZ",
        song: "乘客须知",
        singer: "安全着陆"
      },
      {
        url: "/pages/QGJ/QGJ",
        song: "庆功酒",
        singer: "福克斯"
      },
      {
        url: "/pages/WNJ/WNJ",
        song: "物女金",
        singer: "Jong j"
      },
      {
        url: "/pages/XJJZS/XJJZS",
        song: "戏精急诊室",
        singer: "X-tina"
      },
      {
        url: "/pages/XRZS/XRZS",
        song: "心如止水",
        singer: "Ice Paper"
      }
    ]
  },
  onLoad: function (options) {
    this.setData({
      title: options.title
    })
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