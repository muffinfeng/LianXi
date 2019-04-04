Page({
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
  a:function(){
    console.log('aaa')
  },
  choosePhoto: function () {
    console.log('ccc')
  },
  error(e) {
    console.log(e.detail)
  }
})