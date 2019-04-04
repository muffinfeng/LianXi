// pages/commics/commics.js
Page({


  data: {
    
      images: [{
        src: 'images/dov-1.png',
        text: '',
        aside: false,
        unique: '0'
      }, {
        src: 'images/dov-2.png',
        text: '过年浪一浪,爆竹好,棒棒',
        aside: false,
        unique: '1'
      }, {
        src: 'images/dov-3.png',
        text: '突然一个想不开,原地爆炸好心塞',
        aside: false,
        unique: '2'
      }, {
        src: 'images/dov-4.png',
        text: '吓死白熊宝宝,变成熊猫大佬',
        aside: false,
        unique: '3'
      }]
    
  },
  edit: function(event){
      let tag = event.target.dataset.tag;
      let index = event.currentTarget.dataset.index;
    
      if(tag === 'image'){
        if(!this.data.images[index].aside){
          this.data.images[index].aside = true;
          this.setData({
            'images': this.data.images
          })
        }
      }else if(tag === 'text'){
        this.data.images[index].aside = false;
        this.setData({
          images: this.data.images
        })
      }


  }
 
})