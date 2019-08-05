// pages/login/login.js
const app = getApp()

Page({

  /**
   * 页面的初始数据
   */
  data: {

  },
  login: function (e) {
    const db = wx.cloud.database()
    db.collection('user').where({
      user: e.detail.value.user,
      passwd: e.detail.value.password
    })
      .get({
        success: function (res) {
          // res.data 是包含以上定义的两条记录的数组
          // console.log(res.data)
          console.log(res.data[0].user)
          if (res.data != '') {
            getApp().globalData.user = res.data[0].user;
            wx.switchTab({
              url: '/pages/self/self'
            })
          }
        }
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