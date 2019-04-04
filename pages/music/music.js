// pages/music/music.js
Page({

 
  data: {
    audioContext:null,
    playIndex : 0,
    isAutoPlay : 'true',
    textButton: '顺序播放',
    allAudio: [{
      audioUrl: 'http://ws.stream.qqmusic.qq.com/M500001VfvsJ21xFqb.mp3?guid=ffffffff82def4af4b12b3cd9337d5e7&uin=346897220&vkey=6292F51E1E384E061FF02C31F716658E5C81F5594D561F2E88B854E81CAAB7806D5E4F103E55D33C16F3FAC506D1AB172DE8600B37E43FAD&fromtag=46',//'http://dl.stream.qqmusic.qq.com/C400003aAYrm3GE0Ac.m4a?vkey=8AE5AF4D8475B9045576C905144DB2A4031A8ACD600B4D1BF85E5965833AEB8ACBB685C7C65209228183218023901EE326AFBC8D93098CE7&guid=6646026660&uin=3163331784&fromtag=66',
      author: '周杰伦',
      audioName: '稻香',
      audioType: '魔杰座',
      isPlay: false,
      imgUrl: 'https://y.gtimg.cn/music/photo_new/T002R300x300M000002Neh8l0uciQZ.jpg?max_age=2592000',
    }, {
      audioUrl: 'http://ws.stream.qqmusic.qq.com/M500001VfvsJ21xFqb.mp3?guid=ffffffff82def4af4b12b3cd9337d5e7&uin=346897220&vkey=6292F51E1E384E061FF02C31F716658E5C81F5594D561F2E88B854E81CAAB7806D5E4F103E55D33C16F3FAC506D1AB172DE8600B37E43FAD&fromtag=46',
      author: '周杰伦',
      audioName: '半岛铁盒',
      audioType: '八度空间',
      isPlay: false,
      imgUrl: 'https://y.gtimg.cn/music/photo_new/T002R300x300M000004MGitN0zEHpb.jpg?max_age=2592000',
    }, {
      audioUrl: 'http://ws.stream.qqmusic.qq.com/M500001VfvsJ21xFqb.mp3?guid=ffffffff82def4af4b12b3cd9337d5e7&uin=346897220&vkey=6292F51E1E384E061FF02C31F716658E5C81F5594D561F2E88B854E81CAAB7806D5E4F103E55D33C16F3FAC506D1AB172DE8600B37E43FAD&fromtag=46',
      author: '周杰伦',
      audioName: '夜曲',
      audioType: '十一月的萧邦',
      isPlay: false,
      imgUrl: 'https://y.gtimg.cn/music/photo_new/T002R300x300M0000024bjiL2aocxT.jpg?max_age=2592000'
    }]
  }
  
})