// pages/downloadAPI/downloadAPI.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
      percent: 30,
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {

  },

  download:function(){
    console.log('fff');
    const downloadTask = wx.downloadFile({
      url: 'http://localhost:8080/FoodSuperviseSystem/User/download.do'
    });

  downloadTask.onProgressUpdate(function(res){
    let progress = res.progress;
    
    console.log('下载进度',res.progress);
    console.log('已经下载的数据长度',res.totalBytesWritten);
    console.log('预期要下载的数据长度', res.totalBytesExpectedToWrite);
  });
    
  },

 
})