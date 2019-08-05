// pages/music/music.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    imgUrls: [
      'cloud://kris-ting3.6b72-kris-ting3/krisW/Music/hiphop01.jpg',
      'cloud://kris-ting3.6b72-kris-ting3/krisW/Music/hiphop02.jpg',
      'cloud://kris-ting3.6b72-kris-ting3/krisW/Music/hiphop03.jpg'
    ],
    autoplay: true,
    interval: 5000,
    duration: 1000,
    iconList: [
      {
        url: '/pages/Foreign/Foreign',
        pic: 'cloud://kris-ting3.6b72-kris-ting3/krisW/Music/yingwen.png',
        name: '英文'
      },
      {
        url: '/pages/Chinese/Chinese',
        pic: 'cloud://kris-ting3.6b72-kris-ting3/krisW/Music/zhongwen.png',
        name: '中文'
      },
      {
        url: '/pages/Cantonese/Cantonese',
        pic: 'cloud://kris-ting3.6b72-kris-ting3/krisW/Music/yue-.png',
        name: '粤语'
      }
    ],
    SongImgList: [
      {
        pic: "cloud://kris-ting3.6b72-kris-ting3/krisW/Music/recom01.jpg",
        cont: "[英伦摇滚]唱片中的昔日时光"
      },
      {
        pic: "cloud://kris-ting3.6b72-kris-ting3/krisW/Music/recom02.jpg",
        cont: "吴亦凡 KRIS"
      },
      {
        pic: "cloud://kris-ting3.6b72-kris-ting3/krisW/Music/recom03.jpg",
        cont: "中文说唱 FOR REAL"
      },
      {
        pic: "cloud://kris-ting3.6b72-kris-ting3/krisW/Music/recom04.jpg",
        cont: "德云女孩选修课"
      },
      {
        pic: "cloud://kris-ting3.6b72-kris-ting3/krisW/Music/recom05.jpg",
        cont: "有一种嘻哈风格叫安全着陆"
      },
      {
        pic: "cloud://kris-ting3.6b72-kris-ting3/krisW/Music/recom06.jpg",
        cont: "【该死的温柔】王嘉尔 最全收录"
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