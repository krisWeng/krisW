// pages/feeling/feeling.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    imgUrls: [
      'cloud://kris-ting3.6b72-kris-ting3/krisW/Feeling/bg01.jpg',
      'cloud://kris-ting3.6b72-kris-ting3/krisW/Feeling/bg02.jpg',
      'https://images.unsplash.com/photo-1551446591-142875a901a1?w=640'
    ],
    invitation:[
       {
          "pic": "cloud://kris-ting3.6b72-kris-ting3-1300002611/krisW/Feeling/user01.jpg",
          "userName": "网友一号",
          "sendTime": "7月30日 14:30",
          "chatCont": "【“沉默的大多数”渐渐站了出来 守护香港！】近期，香港的数起暴力示威事件严重危害全港的安全与稳定。然而，香港机场有打落示威者纸牌的老爷爷，元朗路上有拦住游行队伍的老婆婆，街头也有撕毁标签勇怼“废青”的大妈。他们让我们看到，“沉默的大多数”中，有一些人站了出来，面对暴徒，守护香港！",
          "show": true
       },
       {
          "pic": "cloud://kris-ting3.6b72-kris-ting3/krisW/Feeling/user02.jpg",
          "userName": "网友二号",
          "sendTime": "7月29日 09:28",
          "chatCont": "【驻港部队“官宣”释放维稳态度？华春莹：驻港部队会继续成为定海神针】在8月1日下午外交部例行记者会上，台湾“中央社”记者提问称，昨晚解放军驻港部队发布了宣传影片，里面提到了有关维稳的内容，这是不是在释放军方会进一步进行维稳的态度？对此，外交部发言人华春莹回应称，昨天解放军驻香港部队举行了庆祝中国人民解放军建军92周年的招待会，“的确，解放军驻港部队司令员陈道祥少将在致辞中有一些非常令人深刻而且鼓舞人心的表态，”她说，“到底怎么去解读，我觉得你不妨去问问军方的负责人。”华春莹指出，中央政府的立场是一贯和清晰的。正如陈道祥少将昨天致辞所说的那样，中央政府坚决支持林郑月娥行政长官带领特区政府依法施政，坚决支持香港警方严正执法，坚决支持特区政府有关部门和司法机构依法惩治暴力犯罪分子，坚决支持爱港爱国人士捍卫香港的法治，坚决维护国家的主权安全和香港的繁荣稳定。“我们相信解放军驻港部队将继续成为香港繁荣稳定的定海神针。”华春莹说。（环球时报-环球网报道 记者李司坤）",
          "show": true
       },
       {
          "pic": "cloud://kris-ting3.6b72-kris-ting3/krisW/Feeling/user03.jpg",
          "userName": "网友三号",
          "sendTime": "7月26日 20:29",
          "chatCont": "#致敬中国军人#陆军是中国人民解放军的主要军种，是陆地作战主要力量。小伙伴们，如果到陆军，你想当什么兵？#祖国有我# ",
          "show": true
       }
     ],
    autoplay: true,
    interval: 5000,
    duration: 1000,
    show: true
  },
  good: function (e) {
    const list = [...this.data.invitation];
    const index = e.currentTarget.dataset.index;
    list[index]['show'] = !list[index]['show'];
    this.setData({
      invitation: list
    })
  },
  good01: function (e) {
    let _show = this.data.show;
    _show = !_show
    this.setData({
      show: _show
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