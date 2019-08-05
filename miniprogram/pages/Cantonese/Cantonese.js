// pages/Cantonese/Cantonese.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    songList: [
      {
        url: "/pages/ABC/ABC",
        song: "ABC",
        singer: "欧阳靖"
      },
      {
        url: "/pages/CFBR/CFBR",
        song: "仇富不仁",
        singer: "Masta Mic"
      },
      {
        url: "/pages/DGSG/DGSG",
        song: "东莞市歌",
        singer: "徐真真"
      },
      {
        url: "/pages/ZERO/ZERO",
        song: "零",
        singer: "欧阳靖"
      },
      {
        url: "/pages/WLZY/WLZY",
        song: "唔撚鐘意",
        singer: "FOTAN LAIKI & 柒羊"
      },
      {
        url: "/pages/QXNDTBH/QXNDTBH",
        song: "秋香怒点唐伯虎",
        singer: "欧阳靖"
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