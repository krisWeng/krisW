// pages/self/self.js
const app = getApp()

Page({

  /**
   * 页面的初始数据
   */
  data: {
    meansList: [
      {
        num: "52",
        name: "动态"
      },
      {
        num: "39",
        name: "关注"
      },
      {
        num: "10",
        name: "粉丝"
      }
    ],
    feelList:[
      {
        month: '7月',
        day: '27日',
        cont: "“中华人民共和国国旗是中华人民共和国的象征和标志,代表着国家尊严,神圣而又不容侵犯,每个公民和组织都应当心存敬畏,尊重和爱护国旗。对于损害或侮辱国旗国徽国歌的犯罪行为,我们坚决零容忍,做到发现一起,查处一起,依法严惩,绝不姑息。”检察官如是说。"
      },
      {
        month: '7月',
        day: '25日',
        cont: "张艺兴发长文谈对音乐的执着，并回应此前上海演唱会的假唱争议：舞台演出问题用舞台解决，所有质疑都是给你进步空间的提示。"
      }
    ],
    takePhoto() {
      const ctx = wx.createCameraContext()
      ctx.takePhoto({
        quality: 'high',
        success: (res) => {
          this.setData({
            src: res.tempImagePath
          })
        }
      })
    },
    error(e) {
      console.log(e.detail)
    }
  },
  out: function (e) {
    user: null;
    wx.redirectTo({
      url: '/pages/login/login',
    })
  },
  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    var user = getApp().globalData.user
    this.setData({
      user: user
    })

    var userout = app.globalData.user;
    if (userout == null) {
      wx.redirectTo({
        url: '/pages/login/login',
      })
    } else {
      this.setData({
        user: userout
      })
    }
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