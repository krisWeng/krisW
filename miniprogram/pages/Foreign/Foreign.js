// pages/foreign/foreign.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    songList: [
      {
        url: "/pages/RapGod/RapGod",
        song: "Rap God",
        singer: "Eminem"
      },
      {
        url: "/pages/Chaos/Chaos",
        song: "Chaos",
        singer: "Rich Brian"
      },
      {
        url: "/pages/LikeThat/LikeThat",
        song: "Like That",
        singer: "吴亦凡"
      },
      {
        url: "/pages/DatTick/DatTick",
        song: "Dat $tick",
        singer: "Rich Brian"
      },
      {
        url: "/pages/LoveTheWayYouLie/LoveTheWayYouLie",
        song: "Love The Way You Lie",
        singer: "Eminem"
      },
      {
        url: "/pages/Oxygen/Oxygen",
        song: "Oxygen",
        singer: "王嘉尔"
      },
      {
        url: "/pages/ThePhoenix/ThePhoenix",
        song: "the Phoenix",
        singer: "Phoenix"
      },
      {
        url: "/pages/Papillon/Papillon",
        song: "Papillon",
        singer: "王嘉尔"
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