Page({
  data: {
    result: '请选择一个按钮'
  },

  getGameResult: function (event) {


    let me = event._relatedInfo.anchorTargetText;//实现函数
    let pc;
    let num = parseInt(Math.random() * 3);
    if(num==0){
      pc = '剪刀';
    }else if(num==1){
      pc = '石头';
    }else{
      pc= '布';
    }
   
    if ((me == '剪刀' && pc == '剪刀') || (me == '石头' && pc == '石头') || (me == '布' && pc == '布')){
      this.setData({
        result: '打和',
      });
    } else if ((me == '剪刀' && pc == '布') || (me == '石头' && pc == '剪刀') || (me == '布' && pc == '石头')){
      this.setData({
        result: '赢了',
      });
    }else{
      this.setData({
        result: '输了',
      });
    }

    
  }
});